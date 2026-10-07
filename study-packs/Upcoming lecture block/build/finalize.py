"""Make the compact verification receipt; distinguish currency from math delimiters."""
from pathlib import Path
import json,re
P=Path(__file__).resolve().parent.parent
for name in ['03-discrimination.md','05-teams.md']:
    f=P/name
    s=re.sub(r'(?<!\\)\$',r'\\$',f.read_text(encoding='utf8'))
    f.write_text(s,encoding='utf8')
C=P/'build/checks'
browser=json.loads((C/'browser-report.json').read_text(encoding='utf8'))
framework={}
for f in C.glob('hyperframes-*.json'):
    d=json.loads(f.read_text(encoding='utf-8-sig'))
    framework[f.stem.removeprefix('hyperframes-')]={
        'ok':d['ok'],'version':d['_meta']['version'],'scanSeconds':d['layout']['duration'],
        'errors':{k:d[k]['errorCount'] for k in ['lint','runtime','layout','contrast']},
        'warnings':[r['code'] for r in d['lint']['findings'] if r['severity']=='warning']}
receipt={'date':'2026-10-07','framework':framework,'browserErrors':browser['errors'],
         'decks':[dict(key=d['key'],slides=d['slides'],slidesSwept=len(d['layout']),
                       layoutFindings=sum(len(s['bad']) for s in d['layout']),
                       graphs=d['graphChecks'],revealNavigation=d['navTimes'],offlineSlides=d['offlineSlides'])
                  for d in browser['report'] if 'key' in d],
         'documents':[d for d in browser['report'] if 'document' in d],
         'presenter':json.loads((C/'presenter.json').read_text(encoding='utf8'))}
assert not receipt['browserErrors']
assert all(d['ok'] for d in framework.values())
assert all(d['layoutFindings']==0 and d['slides']==d['offlineSlides'] for d in receipt['decks'])
(P/'verification-results.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False),encoding='utf8')
print('Verification receipt saved; source currency delimiters protected')
