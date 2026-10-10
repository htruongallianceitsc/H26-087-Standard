#!/usr/bin/env python3
"""Catalog v2 toolkit: validate, resolve, quality-check, generate derived views, export v1."""
import argparse, collections, json, pathlib, re, sys
try:
    import jsonschema
except ImportError:
    sys.exit('Thiếu jsonschema: pip install jsonschema')

ROOT=pathlib.Path(__file__).resolve().parents[1]
SEM={'requires','extends','uses','implements','aligns_with'}
BASELINE_STANDARDS=('STD-REQ','STD-TEST')
DERIVED_FILES=('catalog-manifest.json','STRUCTURE.txt','STRUCTURE_API_RESPONSE.js')


def standard_files():
    return sorted(p for p in ROOT.rglob('*.json') if p.name.startswith(('STD-','CAP-')))


def load_records():
    records=[]
    for p in standard_files():
        d=json.loads(p.read_text(encoding='utf-8'))
        records.append((p,d))
    return records


def build_docs(records=None, fail_duplicates=True):
    records=records or load_records()
    grouped=collections.defaultdict(list)
    for p,d in records: grouped[d.get('code')].append(p)
    duplicates={c:ps for c,ps in grouped.items() if c and len(ps)>1}
    if duplicates and fail_duplicates:
        lines=['Duplicate standard code detected:']
        for c,ps in sorted(duplicates.items()): lines.append(f'  {c}: '+', '.join(str(p.relative_to(ROOT)) for p in ps))
        raise ValueError('\n'.join(lines))
    return {d['code']:d for _,d in records}, duplicates


def content_metrics(records=None):
    records=records or load_records()
    boiler_detail=boiler_good=generic3=0
    title_locations=collections.defaultdict(list)
    for p,d in records:
        rs=d.get('rules',[])
        if (len(rs)==3 and rs and rs[0].get('title','').startswith('Xác định rõ cách tiếp cận cho')
            and rs[1].get('title')=='Xử lý rõ ràng các trường hợp lỗi, biên và tương thích'
            and rs[2].get('title')=='Xác minh việc áp dụng bằng bằng chứng có thể lặp lại'):
            generic3 += 1
        for r in rs:
            title=r.get('title','').strip()
            if title: title_locations[title].append(f"{d.get('code')}#{r.get('id','?')}")
            if r.get('detail','').startswith(title+'. Xác minh:'): boiler_detail += 1
            if r.get('example_good','').startswith('Bằng chứng triển khai/review thể hiện rõ việc tuân thủ:'): boiler_good += 1
    duplicate_rule_titles=sum(1 for _,locs in title_locations.items() if len(locs)>1)
    return {
        'generic_skeleton_standards': generic3,
        'boilerplate_details': boiler_detail,
        'boilerplate_examples': boiler_good,
        'duplicate_rule_titles': duplicate_rule_titles,
    }


def check(content_strict=False):
    records=load_records(); errors=[]
    try:
        docs,_=build_docs(records)
    except ValueError as e:
        errors.extend(str(e).splitlines()); docs={d['code']:d for _,d in records}
    schema=json.loads((ROOT/'standard-import-v2.schema.json').read_text(encoding='utf-8'))
    refs=set(); edges=collections.defaultdict(list)
    for p,d in records:
        code=d.get('code',str(p))
        for e in jsonschema.Draft202012Validator(schema).iter_errors(d):
            errors.append(f'{code}: {e.message} @ {list(e.path)}')
        ids=set()
        for rule in d.get('rules',[]):
            rid=rule.get('id')
            if rid in ids: errors.append(f'{code}: duplicated ID {rid}')
            ids.add(rid); refs.add(f'{code}#{rid}')
        for x in d.get('depends_on',[]):
            typ=x.get('dependency_type','uses'); target=x.get('code')
            if typ not in SEM: errors.append(f'{code}: dependency type {typ}')
            if target==code: errors.append(f'{code}: self-dependency')
            if target not in docs and typ in ('requires','extends'): errors.append(f'{code}: missing {typ}: {target}')
            if typ in ('requires','extends') and target in docs: edges[code].append(target)
    for _,d in records:
        code=d.get('code')
        for rule in d.get('rules',[]):
            for target in rule.get('traceability',{}).get('related_rules',[]):
                if target not in refs: errors.append(f'{code}#{rule.get("id")}: unknown rule {target}')
    seen=set(); active=[]
    def walk(node):
        if node in active:
            errors.append('Dependency cycle: '+' -> '.join(active[active.index(node):]+[node])); return
        if node in seen: return
        active.append(node)
        for nxt in edges[node]: walk(nxt)
        active.pop(); seen.add(node)
    for code in docs: walk(code)
    # validate sample profiles as contracts
    pschema=json.loads((ROOT/'project-profiles/project-profile.schema.json').read_text(encoding='utf-8'))
    for p in sorted((ROOT/'project-profiles').glob('*.example.json')):
        profile=json.loads(p.read_text(encoding='utf-8'))
        for e in jsonschema.Draft202012Validator(pschema).iter_errors(profile):
            errors.append(f'{p.name}: {e.message} @ {list(e.path)}')
    if content_strict:
        m=content_metrics(records)
        for k,v in m.items():
            if v: errors.append(f'content:{k}={v}')
    # Semantic taxonomy checks beyond JSON Schema: avoid all-purpose or contradictory tags.
    for _,d in records:
        for rule in d.get('rules',[]):
            layers=rule.get('layer',[])
            layers=layers if isinstance(layers,list) else [layers]
            key=f"{d.get('code')}#{rule.get('id')}"
            if len(layers)>2: errors.append(f'{key}: quá nhiều layer; cân nhắc tách rule')
            if not rule.get('concerns'): errors.append(f'{key}: concerns must contain at least one topic')
            if len(rule.get('concerns',[]))>8: errors.append(f'{key}: concerns quá rộng; cần xem lại phân loại')
    unique_rules=len(refs)
    print(f'Validated standards: {len(docs)}; Files: {len(records)}; Rules: {unique_rules}; errors: {len(errors)}')
    for e in errors[:200]: print('ERROR:',e)
    return not errors


def matches(d,profile):
    a=d.get('applicability',{'scope':'all'})
    if a.get('scope')=='all': return True
    for k,field in [('project_types','project_type'),('platforms','platforms'),('technologies','technologies')]:
        choices=a.get(k,[])
        if choices:
            actual=profile.get(field,[])
            if isinstance(actual,str): actual=[actual]
            if not set(choices).intersection(actual): return False
    for cond in a.get('conditions',[]):
        key=cond['key'].split('.',1)[1]
        actual=profile.get('features',{}).get(key,None)
        ok=(actual==cond['value'])
        if cond['operator']=='ne': ok=not ok
        if not ok: return False
    return True


def resolve(profile):
    docs,_=build_docs()
    eligible={c for c,d in docs.items() if matches(d,profile)}
    initial=set(profile.get('selected_standards',[]))
    unknown=initial-set(docs)
    if unknown: raise ValueError(f'unknown selected standards: {sorted(unknown)}')
    if not initial:
        initial=eligible.copy()
    else:
        invalid=initial-eligible
        if invalid: raise ValueError(f'selected standards not applicable: {sorted(invalid)}')
    # Governance/testing baseline is implicit, not repeated as requires in every file.
    baseline={c for c in BASELINE_STANDARDS if c in eligible}
    selected=set(initial)|baseline; queue=list(selected); edges=[]
    while queue:
        c=queue.pop()
        for dep in docs[c].get('depends_on',[]):
            target=dep['code']; typ=dep['dependency_type']
            if typ not in ('requires','extends'): continue
            if target not in docs: raise ValueError(f'{c}: missing {target}')
            if target not in eligible:
                raise ValueError(f'{c} {typ} {target}: phụ thuộc không phù hợp profile; cần điều chỉnh profile hoặc phạm vi standard')
            edges.append({'source':c,'target':target,'type':typ})
            if target not in selected: selected.add(target); queue.append(target)
    def inherited(code,stack=()):
        if code in stack: raise ValueError('Inheritance cycle: '+' -> '.join(stack+(code,)))
        direct=[f'{code}#{rule["id"]}' for rule in docs[code].get('rules',[])]
        for d in docs[code].get('depends_on',[]):
            if d['dependency_type']=='extends': direct += inherited(d['code'],stack+(code,))
        if len(direct)!=len(set(direct)): raise ValueError(f'Duplicate inherited rule: {code}')
        return direct
    inherited_counts={c:len(inherited(c)) for c in selected}
    return {
      'project':profile.get('project'), 'selected':sorted(selected),
      'baseline_included':sorted(baseline), 'auto_included':sorted(selected-initial),
      'not_selected':sorted(set(docs)-selected), 'dependency_edges':edges,
      'effective_rule_counts':inherited_counts,
      'semantics':'baseline STD-REQ/STD-TEST được áp dụng ngầm; extends kế thừa; requires bắt buộc có mặt; uses/implements/aligns_with chỉ tham chiếu; không override ngầm'
    }


def export_v1(out):
    records=load_records(); build_docs(records)
    out.mkdir(parents=True,exist_ok=True)
    schema=json.loads((ROOT/'standard-import.schema.json').read_text(encoding='utf-8'))
    for p,d in records:
        d=json.loads(json.dumps(d)); d['schemaVersion']=1
        d.pop('applicability',None); d.pop('dependency_policy',None)
        for rule in d.get('rules',[]):
            rule.pop('id',None); rule.pop('traceability',None); rule.pop('concerns',None)
            # Legacy importer supports only ui/api/db/process/security.
            layer=rule.get('layer', 'process')
            layers=layer if isinstance(layer,list) else [layer]
            legacy={'ui':'ui','client':'ui','mobile':'ui','design':'ui',
                'api':'api','integration':'api','service':'api','db':'db','data':'db',
                'governance':'process','requirements':'process','architecture':'process',
                'infrastructure':'process','delivery':'process','operations':'process','quality':'process'}
            translated=list(dict.fromkeys(legacy.get(x,'process') for x in layers))
            rule['layer']=translated[0] if len(translated)==1 else translated
        jsonschema.validate(d,schema)
        target=out/p.relative_to(ROOT); target.parent.mkdir(parents=True,exist_ok=True)
        target.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(f'Exported {len(records)} v1 JSON to {out}')


def lint_content(strict=False):
    m=content_metrics()
    baseline_path=ROOT/'content-quality-baseline.json'
    baseline=json.loads(baseline_path.read_text(encoding='utf-8')) if baseline_path.exists() else {}
    print(json.dumps({'metrics':m,'baseline':baseline},ensure_ascii=False,indent=2))
    if strict:
        failed=any(v>0 for v in m.values())
    else:
        failed=any(m[k] > baseline.get(k,0) for k in m)
    if failed:
        print('ERROR: content quality regression' if not strict else 'ERROR: strict content quality violations remain')
        return False
    return True


def catalog_groups(records=None):
    records=records or load_records()
    groups=collections.defaultdict(list)
    for p,d in records:
        rel=p.relative_to(ROOT); parts=rel.parts
        top=parts[0]
        subgroup=parts[1] if top=='08-technology' and len(parts)>2 else None
        groups[(top,subgroup)].append((p,d))
    return groups


def render_derived():
    records=load_records(); docs,_=build_docs(records)
    groups=catalog_groups(records)
    manifest={'catalogVersion':'2.1.0','sourceOfTruth':'standard JSON files','schema':'standard-import-v2.schema.json','schemaVersion':2,'count':len(docs),'groups':[]}
    group_names={
      '01-governance-delivery':'Governance & Delivery','02-engineering-foundation':'Engineering Foundation',
      '03-api-integration-data':'API, Integration & Data','04-experience-ui-ux':'Experience / UI / UX',
      '05-web-platform':'Web Platform','06-mobile-platform':'Mobile Platform','07-backend-platform':'Backend Platform',
      '08-technology':'Technology','09-reusable-capabilities':'Reusable Capabilities',
      '10-operations-infrastructure':'Operations & Infrastructure','11-quality-assurance-testing':'Quality Assurance & Testing'}
    # Manifest retains folder-level structure and nested technology folders.
    tops=collections.defaultdict(list)
    for (top,sub), items in groups.items(): tops[top].append((sub,items))
    for top in sorted(tops):
        entry={'folder':top,'name':group_names.get(top,top),'files':[]}
        subgroups=[]
        for sub,items in sorted(tops[top], key=lambda x:(x[0] or '')):
            if sub:
                subgroups.append({'folder':f'{top}/{sub}','files':[p.name for p,_ in sorted(items)]})
            else: entry['files'] += [p.name for p,_ in sorted(items)]
        if subgroups: entry['subgroups']=subgroups
        manifest['groups'].append(entry)
    manifest_text=json.dumps(manifest,ensure_ascii=False,indent=2)+'\n'

    lines=['STANDARD CATALOG — GENERATED FROM JSON','Nguồn sự thật: các file STD-*.json / CAP-*.json; không sửa file này thủ công.','']
    for gi,top in enumerate(sorted(tops)):
        label=group_names.get(top,top)
        lines.append(f'{top} — {label}')
        for sub,items in sorted(tops[top], key=lambda x:(x[0] or '')):
            if sub: lines.append(f'  {sub}')
            for p,d in sorted(items,key=lambda x:x[1]['code']):
                indent='    ' if sub else '  '
                lines.append(f"{indent}- {d['code']} — {d.get('name','')}")
                deps=d.get('depends_on',[])
                if deps:
                    rel='; '.join(f"{x['dependency_type']} {x['code']}" for x in deps)
                    lines.append(f'{indent}  ↳ {rel}')
        lines.append('')
    structure='\n'.join(lines).rstrip()+'\n'

    js_groups=[]
    for top in sorted(tops):
        children=[]
        for sub,items in sorted(tops[top],key=lambda x:(x[0] or '')):
            for p,d in sorted(items,key=lambda x:x[1]['code']):
                children.append({'code':d['code'],'name':d.get('name',''),'type':'capability' if d['code'].startswith('CAP-') else 'standard','folder':str(p.parent.relative_to(ROOT)).replace('\\','/'),'depends_on':d.get('depends_on',[])})
        js_groups.append({'key':top.split('-',1)[0],'code':top.split('-',1)[0],'name':group_names.get(top,top),'title':f"{top.split('-',1)[0]}. {group_names.get(top,top).upper()}",'type':'category','children':children})
    js='/** GENERATED FROM STANDARD JSON FILES. DO NOT EDIT MANUALLY. */\nconst STANDARD_CATALOG = '+json.dumps(js_groups,ensure_ascii=False,indent=2)+';\nmodule.exports = { STANDARD_CATALOG };\n'
    return {'catalog-manifest.json':manifest_text,'STRUCTURE.txt':structure,'STRUCTURE_API_RESPONSE.js':js}


def generate(check_only=False):
    rendered=render_derived(); mismatches=[]
    for name,text in rendered.items():
        p=ROOT/name
        if check_only:
            if not p.exists() or p.read_text(encoding='utf-8')!=text: mismatches.append(name)
        else: p.write_text(text,encoding='utf-8')
    if mismatches:
        print('ERROR: derived files are stale: '+', '.join(mismatches)); return False
    print('Derived catalog files are up to date.' if check_only else 'Generated: '+', '.join(rendered))
    return True


def test_profiles():
    if not check(): return False
    ok=True
    for p in sorted((ROOT/'project-profiles').glob('*.example.json')):
        profile=json.loads(p.read_text(encoding='utf-8'))
        try:
            r=resolve(profile)
            print(f"PASS {p.name}: selected={len(r['selected'])}, auto_included={len(r['auto_included'])}")
        except Exception as e:
            ok=False; print(f'ERROR {p.name}: {e}')
    return ok


if __name__=='__main__':
    a=argparse.ArgumentParser(); sub=a.add_subparsers(dest='cmd',required=True)
    p=sub.add_parser('validate'); p.add_argument('--strict-content',action='store_true')
    p=sub.add_parser('resolve'); p.add_argument('--profile',required=True)
    p=sub.add_parser('export-v1'); p.add_argument('--out',required=True)
    p=sub.add_parser('lint-content'); p.add_argument('--strict',action='store_true')
    p=sub.add_parser('generate'); p.add_argument('--check',action='store_true')
    sub.add_parser('test-profiles')
    opts=a.parse_args()
    if opts.cmd=='validate': sys.exit(0 if check(opts.strict_content) else 1)
    if opts.cmd=='resolve':
        if not check(): sys.exit(1)
        profile=json.loads(pathlib.Path(opts.profile).read_text(encoding='utf-8'))
        try: result=resolve(profile)
        except ValueError as e: sys.exit('ERROR: '+str(e))
        print(json.dumps(result,ensure_ascii=False,indent=2))
    if opts.cmd=='export-v1': export_v1(pathlib.Path(opts.out))
    if opts.cmd=='lint-content': sys.exit(0 if lint_content(opts.strict) else 1)
    if opts.cmd=='generate': sys.exit(0 if generate(opts.check) else 1)
    if opts.cmd=='test-profiles': sys.exit(0 if test_profiles() else 1)
