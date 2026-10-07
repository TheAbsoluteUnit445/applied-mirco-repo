// Serves the repository so all relative textbook/exam links remain usable.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const port=Number(process.env.STUDY_PACK_PORT||3057);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/plain; charset=utf-8','.pdf':'application/pdf','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.json':'application/json'};
http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}if(pathname.endsWith('/'))pathname+='index.html';const file=path.resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}if(!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('Not found');return}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(file).pipe(res)}).listen(port,'127.0.0.1',()=>console.log(`Study pack: http://127.0.0.1:${port}/study-packs/Upcoming%20lecture%20block/index.html`));
