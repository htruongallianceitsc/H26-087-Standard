#!/usr/bin/env python3
"""Keep semantic QA inventory/checklists synchronized with the standard catalog."""
import argparse
import collections
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
AUDIT_PATH = ROOT / 'docs/quality/semantic-audit.json'
MD_PATH = ROOT / 'docs/quality/SEMANTIC-AUDIT.md'
ROLES = ('developer', 'qc', 'devops_sre', 'architect_ba', 'ai_agent')
CHECKLISTS = {
    'developer': ROOT / 'docs/quality/CHECKLIST-DEVELOPER.md',
    'qc': ROOT / 'docs/quality/CHECKLIST-QC.md',
    'devops_sre': ROOT / 'docs/quality/CHECKLIST-DEVOPS_SRE.md',
    'architect_ba': ROOT / 'docs/quality/CHECKLIST-ARCHITECT_BA.md',
    'ai_agent': ROOT / 'docs/quality/CHECKLIST-AI_AGENT.md',
}


def standard_records():
    rows = []
    for p in sorted(ROOT.rglob('*.json')):
        if not p.name.startswith(('STD-', 'CAP-')):
            continue
        d = json.loads(p.read_text(encoding='utf-8'))
        rows.append((p, d))
    return rows


def normalize_layers(value):
    return value if isinstance(value, list) else [value]


def derive_roles(rule):
    layers = set(normalize_layers(rule.get('layer', [])))
    concerns = set(rule.get('concerns', []))
    roles = set()
    if layers & {'ui', 'client', 'mobile', 'api', 'service', 'integration', 'data', 'db'}:
        roles.add('developer')
    if layers & {'infrastructure', 'delivery', 'operations'}:
        roles.update({'developer', 'devops_sre'})
    if layers & {'governance', 'requirements', 'architecture', 'design'}:
        roles.add('architect_ba')
    if 'quality' in layers or 'testing' in concerns:
        roles.add('qc')
    if concerns & {'security', 'privacy', 'accessibility'}:
        roles.add('qc')
    if concerns & {'documentation', 'automation'} or layers & {'governance', 'requirements', 'architecture'}:
        roles.add('ai_agent')
    if not roles:
        roles.add('developer')
    return sorted(roles, key=ROLES.index)


def derive_verification(rule):
    layers = set(normalize_layers(rule.get('layer', [])))
    concerns = set(rule.get('concerns', []))
    if 'quality' in layers or 'testing' in concerns:
        return 'test'
    if layers & {'operations', 'infrastructure'} and concerns & {'observability', 'performance', 'reliability', 'resilience'}:
        return 'runtime'
    if layers & {'governance', 'requirements', 'architecture', 'design'}:
        return 'review'
    if 'delivery' in layers:
        return 'test+review'
    return 'test_or_review'


def derive_flags(rule):
    flags = []
    if len(rule.get('detail', '').strip()) < 60:
        flags.append('detail_short')
    if min(len(rule.get('example_good', '').strip()), len(rule.get('example_bad', '').strip())) < 24:
        flags.append('example_short')
    return flags


def build_audit(existing):
    old_map = {r.get('rule'): r for r in existing.get('rules', [])}
    rules = []
    for _, doc in standard_records():
        code = doc['code']
        for rule in doc.get('rules', []):
            ref = f"{code}#{rule['id']}"
            old = old_map.get(ref, {})
            entry = {
                'rule': ref,
                'title': rule.get('title', ''),
                'layer': normalize_layers(rule.get('layer', [])),
                'concerns': rule.get('concerns', []),
                'severity': rule.get('severity'),
                'roles': old.get('roles') or derive_roles(rule),
                'verification_suggestion': old.get('verification_suggestion') or derive_verification(rule),
                'manual_review_flags': sorted(set([f for f in old.get('manual_review_flags', []) if f not in {'detail_short', 'example_short'}] + derive_flags(rule))),
            }
            rules.append(entry)
    rules.sort(key=lambda x: x['rule'])
    refs = {r['rule'] for r in rules}
    overlaps = [x for x in existing.get('potential_overlaps', []) if x.get('rule_a') in refs and x.get('rule_b') in refs]
    corrected = [x for x in existing.get('summary', {}).get('corrected_layers', []) if x.get('rule') in refs]
    flag_counter = collections.Counter(f for r in rules for f in r['manual_review_flags'])
    role_counter = collections.Counter(role for r in rules for role in r['roles'])
    summary = {
        'wave': '7',
        'standards': len({r['rule'].split('#', 1)[0] for r in rules}),
        'rules': len(rules),
        'corrected_layers': corrected,
        'rules_flagged': sum(1 for r in rules if r['manual_review_flags']),
        'flags_by_type': dict(sorted(flag_counter.items())),
        'potential_overlaps': len(overlaps),
        'roles': {role: role_counter.get(role, 0) for role in ROLES},
    }
    return {'summary': summary, 'potential_overlaps': overlaps, 'rules': rules}


def render_md(audit):
    s = audit['summary']
    lines = [
        '# Semantic Quality Audit', '',
        'This report is generated from the current catalog. Heuristic flags require human review; they are not automatic failures.', '',
        f"- Standards/capabilities: **{s['standards']}**",
        f"- Rules: **{s['rules']}**",
        f"- Rules flagged for manual review: **{s['rules_flagged']}**",
        f"- Potential overlap pairs retained from reviewed history: **{s['potential_overlaps']}**", '',
        '## Flags', ''
    ]
    if s['flags_by_type']:
        lines += [f"- `{k}`: {v}" for k, v in s['flags_by_type'].items()]
    else:
        lines.append('- None')
    lines += ['', '## Role coverage', '']
    lines += [f"- `{role}`: {s['roles'].get(role, 0)} rules" for role in ROLES]
    lines += ['', '## Notes', '',
              '- Existing manually reviewed role/verification metadata is preserved when the rule ID still exists.',
              '- New rule IDs receive deterministic role and verification suggestions from layer/concern metadata.',
              '- Run `python3 tools/semantic_audit.py --check` in CI to prevent stale checklist inventory.', '']
    return '\n'.join(lines)


def render_checklist(audit, role):
    rows = [r for r in audit['rules'] if role in r['roles']]
    lines = [f'# Checklist - {role}', '', f'Rules: **{len(rows)}**', '',
             '| Rule | Severity | Verification | Pass/Fail/Waived/NA | Evidence |',
             '|---|---|---|---|---|']
    for r in rows:
        title = r['title'].replace('|', '/')
        lines.append(f"| `{r['rule']}` - {title} | {r['severity']} | {r['verification_suggestion']} | [ ] | |")
    return '\n'.join(lines) + '\n'


def expected_outputs():
    existing = json.loads(AUDIT_PATH.read_text(encoding='utf-8')) if AUDIT_PATH.exists() else {}
    audit = build_audit(existing)
    outputs = {
        AUDIT_PATH: json.dumps(audit, ensure_ascii=False, indent=2) + '\n',
        MD_PATH: render_md(audit),
    }
    for role, path in CHECKLISTS.items():
        outputs[path] = render_checklist(audit, role)
    return outputs


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    outputs = expected_outputs()
    stale = []
    if args.check:
        for path, text in outputs.items():
            if not path.exists() or path.read_text(encoding='utf-8') != text:
                stale.append(str(path.relative_to(ROOT)))
        if stale:
            print('ERROR: semantic QA files are stale: ' + ', '.join(stale))
            return 1
        print('Semantic QA files are up to date.')
        return 0
    for path, text in outputs.items():
        path.write_text(text, encoding='utf-8')
    print('Generated semantic QA inventory and role checklists.')
    return 0


if __name__ == '__main__':
    sys.exit(main())