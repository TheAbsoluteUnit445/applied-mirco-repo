/* Render Markdown to readable offline HTML, protecting maths before Markdown parsing. */
const fs=require('node:fs'),path=require('node:path');
const {marked}=require('marked'),katex=require('katex');
const pack=path.resolve(__dirname,'..');
const vendor=path.join(pack,'assets');fs.mkdirSync(vendor,{recursive:true});
fs.cpSync(path.join(__dirname,'node_modules/katex/dist'),path.join(vendor,'katex'),{recursive:true});
fs.copyFileSync(path.join(__dirname,'node_modules/katex/LICENSE'),path.join(vendor,'katex/LICENSE'));
const css=`body{font:19px/1.65 system-ui,sans-serif;color:#172d32;background:#f7f3e9;margin:0}main{max-width:1080px;margin:40px auto;padding:25px 40px;background:white}h1{font-size:2.2em;line-height:1.2}h2{margin-top:2.5em;line-height:1.3}h3{margin-top:2em}a{color:#076760}table{border-collapse:collapse;font-size:.9em;display:block;overflow:auto}td,th{border:1px solid #ccd5d0;padding:10px;vertical-align:top}th{background:#e2eee9}pre{overflow:auto;background:#eef3f0;padding:16px}blockquote{border-left:4px solid #076760;padding-left:20px;margin-left:0}.math-display{overflow-x:auto;padding:12px 0}.katex-display{margin:.5em 0}nav{position:sticky;top:0;padding:12px 24px;background:#172d32;color:#fff;font:16px system-ui,sans-serif;z-index:5}nav a{color:#fff;margin-right:25px}.toc{background:#eef3f0;padding:20px}details{margin:24px 0}summary{cursor:pointer;font-weight:600}@media(max-width:700px){main{padding:20px;margin:0}body{font-size:17px}}@media print{nav,.toc{display:none}main{margin:0;padding:0}body{font-size:12px;background:#fff}h2{break-before:auto}}`;
for(const name of fs.readdirSync(pack).filter(n=>n.endsWith('.md'))){
 let raw=fs.readFileSync(path.join(pack,name),'utf8'), maths=[];
 function keep(tex,display){let id=maths.length;let rendered=katex.renderToString(tex,{displayMode:display,throwOnError:true,strict:'ignore'});maths.push(display?`<div class="math-display">${rendered}</div>`:rendered);return display?`\n\nMATHPLACEHOLDER${id}END\n\n`:`MATHPLACEHOLDER${id}END`;}
 raw=raw.replace(/\\\[([\s\S]*?)\\\]/g,(_,tex)=>keep(tex,true)).replace(/\$\$([\s\S]*?)\$\$/g,(_,tex)=>keep(tex,true)).replace(/\\\(([^\n]*?)\\\)/g,(_,tex)=>keep(tex,false)).replace(/(?<!\\)\$([^$\n]+?)\$/g,(_,tex)=>keep(tex,false));
 let rendered=marked.parse(raw,{gfm:true});rendered=rendered.replace(/<p>MATHPLACEHOLDER(\d+)END<\/p>/g,(_,i)=>maths[i]).replace(/MATHPLACEHOLDER(\d+)END/g,(_,i)=>maths[i]);
 // Only generated pack documents get HTML twins; source links preserve original PDFs/Markdown.
 rendered=rendered.replace(/href="([^"/]+)\.md(#[^"]*)?"/g,(all,base,hash)=>fs.existsSync(path.join(pack,base+'.md'))?`href="${base}.html${hash||''}"`:all);
 let headings=[];rendered=rendered.replace(/<h([23])>([\s\S]*?)<\/h\1>/g,(all,n,text)=>{let plain=text.replace(/<[^>]+>/g,''),id=plain.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');headings.push({n,id,plain});return `<h${n} id="${id}">${text}</h${n}>`;});
 let toc=headings.filter(h=>h.n==='2').map(h=>`<li><a href="#${h.id}">${h.plain}</a></li>`).join('');
 let title=(/^[#] (.+)/m.exec(fs.readFileSync(path.join(pack,name),'utf8'))||[])[1]||name;
 fs.writeFileSync(path.join(pack,name.replace(/\.md$/,'.html')),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title.replace(/&/g,'&amp;')}</title><link rel="stylesheet" href="assets/katex/katex.min.css"><style>${css}</style></head><body><nav><a href="index.html">Study pack</a><a href="lectures.html">Browser lectures</a><a href="${name}" download>Markdown source</a></nav><main><details class="toc"><summary>Contents</summary><ul>${toc}</ul></details>${rendered}</main></body></html>`);
 console.log(name,maths.length,'math expressions');
}
