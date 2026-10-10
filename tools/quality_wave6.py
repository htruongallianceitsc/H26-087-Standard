#!/usr/bin/env python3
"""Generate project-specific role checklist from resolved standards (no schema change)."""
import argparse, json, pathlib, sys
from standard_tool import resolve, check, ROOT

p=argparse.ArgumentParser(description='Wave 6 role checklist filtered by project profile')
p.add_argument('--profile',required=True)
p.add_argument('--role',choices=['developer','qc','devops_sre','architect_ba','ai_agent'],required=True)
p.add_argument('--out',help='Optional output Markdown file')
a=p.parse_args()
if not check():sys.exit(1)
profile=json.loads(pathlib.Path(a.profile).read_text(encoding='utf-8'))
selected=set(resolve(profile)['selected'])
audit=json.loads((ROOT/'docs/quality/semantic-audit.json').read_text(encoding='utf-8'))
rows=[r for r in audit['rules'] if r['rule'].split('#')[0] in selected and a.role in r['roles']]
lines=['# Checklist – '+a.role,'','Profile: `'+str(profile.get('project','unknown'))+'`',f'Rule phù hợp: **{len(rows)}**','', '| Rule | Severity | Verification gợi ý | Pass/Fail/Waived/NA | Evidence |','|---|---|---|---|---|']
for r in rows:lines.append(f'| `{r["rule"]}` – {r["title"].replace("|","/")} | {r["severity"]} | {r["verification_suggestion"]} | ☐ | |')
text='\n'.join(lines)+'\n'
if a.out:pathlib.Path(a.out).write_text(text,encoding='utf-8');print(f'Generated {len(rows)} rules: {a.out}')
else:print(text)
