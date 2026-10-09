#!/usr/bin/env python3
"""Validate catalog v2, resolve applicability, or export v1 compatibility payloads."""
import argparse, collections, json, pathlib, sys
try: import jsonschema
except ImportError: sys.exit('Thiếu jsonschema: pip install jsonschema')
ROOT=pathlib.Path(__file__).resolve().parents[1]
FILES=sorted(p for p in ROOT.rglob('*.json') if p.name.startswith(('STD-','CAP-')))
DOCS={json.loads(p.read_text(encoding='utf-8'))['code']:json.loads(p.read_text(encoding='utf-8')) for p in FILES}
SEM={'requires','extends','uses','implements','aligns_with'}
def check():
 schema=json.loads((ROOT/'standard-import-v2.schema.json').read_text(encoding='utf-8'))
 errors=[]; refs=set(); edges=collections.defaultdict(list)
 for code,d in DOCS.items():
  for e in jsonschema.Draft202012Validator(schema).iter_errors(d):errors.append(f'{code}: {e.message} @ {list(e.path)}')
  ids=set()
  for rule in d.get('rules',[]):
   if rule['id'] in ids:errors.append(f'{code}: duplicated ID {rule["id"]}')
   ids.add(rule['id']); refs.add(f'{code}#{rule["id"]}')
  for x in d.get('depends_on',[]):
   typ=x.get('dependency_type','uses');target=x['code']
   if typ not in SEM:errors.append(f'{code}: dependency type {typ}')
   if target==code:errors.append(f'{code}: self-dependency')
   if target not in DOCS and typ in ('requires','extends'):errors.append(f'{code}: missing {typ}: {target}')
   if typ in ('requires','extends') and target in DOCS:edges[code].append(target)
 for code,d in DOCS.items():
  for rule in d.get('rules',[]):
   for target in rule.get('traceability',{}).get('related_rules',[]):
    if target not in refs:errors.append(f'{code}#{rule["id"]}: unknown rule {target}')
 seen=set();active=[]
 def walk(node):
  if node in active:errors.append('Dependency cycle: '+' -> '.join(active[active.index(node):]+[node]));return
  if node in seen:return
  active.append(node)
  for nxt in edges[node]:walk(nxt)
  active.pop();seen.add(node)
 for code in DOCS:walk(code)
 print(f'Validated standards: {len(DOCS)}; Rules: {len(refs)}; errors: {len(errors)}')
 for e in errors[:100]:print('ERROR:',e)
 return not errors

def matches(d,profile):
 a=d.get('applicability',{'scope':'all'})
 if a['scope']=='all':return True
 for k,field in [('project_types','project_type'),('platforms','platforms'),('technologies','technologies')]:
  choices=a.get(k,[])
  if choices:
   actual=profile.get(field,[])
   if isinstance(actual,str):actual=[actual]
   if not set(choices).intersection(actual):return False
 for cond in a.get('conditions',[]):
  actual=profile.get('features',{}).get(cond['key'].split('.',1)[1],None)
  if (actual==cond['value']) != (cond['operator']=='eq'):return False
 return True

def resolve(profile):
 eligible={c for c,d in DOCS.items() if matches(d,profile)}
 initial=set(profile.get('selected_standards',[]))
 unknown=initial-set(DOCS)
 if unknown:raise ValueError(f'unknown selected standards: {sorted(unknown)}')
 if not initial:initial=eligible.copy()
 else:
  invalid=initial-eligible
  if invalid:raise ValueError(f'selected standards not applicable: {sorted(invalid)}')
 selected=set(initial); queue=list(initial); edges=[]
 while queue:
  c=queue.pop()
  for dep in DOCS[c].get('depends_on',[]):
   target=dep['code'];typ=dep['dependency_type']
   if typ not in ('requires','extends'):continue
   if target not in DOCS:raise ValueError(f'{c}: missing {target}')
   if target not in eligible:raise ValueError(f'{c} {typ} {target}: phụ thuộc không phù hợp profile; cần điều chỉnh profile hoặc phạm vi standard')
   edges.append({'source':c,'target':target,'type':typ})
   if target not in selected:selected.add(target);queue.append(target)
 # inherited rules only on extends, reference with FQID, no override by title
 def inherited(code,stack=()):
  if code in stack:raise ValueError('Inheritance cycle: '+' -> '.join(stack+(code,)))
  direct=[f'{code}#{rule["id"]}' for rule in DOCS[code].get('rules',[])]
  for d in DOCS[code].get('depends_on',[]):
   if d['dependency_type']=='extends':direct+=inherited(d['code'],stack+(code,))
  if len(direct)!=len(set(direct)):raise ValueError(f'Duplicate inherited rule: {code}')
  return direct
 inherited_counts={c:len(inherited(c)) for c in selected}
 return {'project':profile.get('project'),'selected':sorted(selected),'auto_included':sorted(selected-initial),'not_selected':sorted(set(DOCS)-selected),'dependency_edges':edges,'effective_rule_counts':inherited_counts,'semantics':'extends kế thừa; requires bắt buộc có mặt; uses/implements/aligns_with chỉ tham chiếu; không override ngầm'}

def export_v1(out):
 out.mkdir(parents=True,exist_ok=True)
 schema=json.loads((ROOT/'standard-import.schema.json').read_text(encoding='utf-8'))
 for p in FILES:
  d=json.loads(p.read_text(encoding='utf-8'));d['schemaVersion']=1
  d.pop('applicability',None);d.pop('dependency_policy',None)
  for rule in d.get('rules',[]):rule.pop('id',None);rule.pop('traceability',None)
  jsonschema.validate(d,schema)
  target=out/p.relative_to(ROOT);target.parent.mkdir(parents=True,exist_ok=True);target.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print(f'Exported {len(FILES)} v1 JSON to {out}')

if __name__=='__main__':
 a=argparse.ArgumentParser();sub=a.add_subparsers(dest='cmd',required=True)
 sub.add_parser('validate'); p=sub.add_parser('resolve');p.add_argument('--profile',required=True)
 p=sub.add_parser('export-v1');p.add_argument('--out',required=True)
 opts=a.parse_args()
 if opts.cmd=='validate':sys.exit(0 if check() else 1)
 if opts.cmd=='resolve':
  assert check();profile=json.loads(pathlib.Path(opts.profile).read_text(encoding='utf-8'))
  print(json.dumps(resolve(profile),ensure_ascii=False,indent=2))
 if opts.cmd=='export-v1':export_v1(pathlib.Path(opts.out))
