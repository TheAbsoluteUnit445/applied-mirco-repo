const fs=require('node:fs'),path=require('node:path'),{pathToFileURL}=require('node:url');
const {chromium}=require('C:/Users/Manuel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const pack=path.resolve(__dirname,'..'),out=path.join(__dirname,'checks/week7'),url='http://127.0.0.1:3057/study-packs/Upcoming%20lecture%20block/';
(async()=>{fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({channel:'chrome',headless:true}),page=await browser.newPage({viewport:{width:1600,height:1000}});let errors=[],report=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
for(const key of ['financing','investment-mb','investment-peaks','weighted-welfare','beach-election','cleaning']){
 await page.goto(url+`week7-graphs/${key}/index.html`);await page.waitForFunction(()=>document.querySelector('hyperframes-player')?.iframeElement?.contentWindow.week7GraphSpecs);
 let frame=page.frames().find(f=>f.parentFrame()===page.mainFrame());
 const host=frame.locator('[data-widget]'),inputs=host.locator('input'),defaults=await host.getAttribute('data-values');let results=[];
 for(let i=0;i<await inputs.count();i++){for(const bound of ['min','max']){await inputs.nth(i).evaluate((e,b)=>{e.value=e[b];e.dispatchEvent(new Event('input',{bubbles:true}))},bound);let points=await host.getAttribute('data-graph-result');if(points.includes('null'))throw Error('Nonfinite '+key);results.push({input:i,bound,points})}}
 await host.getByRole('button',{name:'Reset graph'}).click();if(defaults!==await host.getAttribute('data-values'))throw Error('Reset '+key);
 await inputs.first().focus();let before=+await inputs.first().inputValue();await inputs.first().press('ArrowRight');if(+await inputs.first().inputValue()<=before)throw Error('Keyboard '+key);await host.getByRole('button',{name:'Reset graph'}).click();
 const layout=await frame.evaluate(()=>{let root=document.querySelector('#root').getBoundingClientRect(),footer=document.querySelector('footer').getBoundingClientRect();return [...document.querySelectorAll('h1,.graph,.legend,.controls,.result')].map(e=>({kind:e.className||e.tagName,rect:e.getBoundingClientRect().toJSON()})).filter(({rect:r})=>r.bottom>footer.top||r.left<root.left||r.right>root.right)});
 if(layout.length)throw Error('Layout '+key+' '+JSON.stringify(layout));await page.screenshot({path:path.join(out,key+'.png')});
 await page.goto(pathToFileURL(path.join(pack,'week7-graphs',key,'index.html')).href);await page.waitForFunction(()=>document.querySelector('hyperframes-player')?.iframeElement?.contentWindow.week7GraphSpecs);
 report.push({key,bounds:results,reset:true,keyboard:true,layout:[],directOpen:true});
}
await page.goto(url+'02-week7-walkthrough.html');let notes=await page.evaluate(()=>({graphs:document.querySelectorAll('iframe').length,math:document.querySelectorAll('.katex').length,mathErrors:document.querySelectorAll('.katex-error').length,details:document.querySelectorAll('details').length,overflow:document.documentElement.scrollWidth>innerWidth}));if(notes.graphs!==6||notes.mathErrors||notes.overflow)throw Error('Notes '+JSON.stringify(notes));
await page.locator('h1').screenshot({path:path.join(out,'notes-title.png')});
for(const width of [390,900]){await page.setViewportSize({width,height:900});await page.reload();if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Note overflow '+width)}
fs.writeFileSync(path.join(out,'browser-week7-report.json'),JSON.stringify({report,notes,errors},null,2));console.log(JSON.stringify({graphs:report.length,notes,errors},null,2));await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
