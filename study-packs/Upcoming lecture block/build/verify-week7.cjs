const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
let context={document:{querySelectorAll:()=>[]},window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'week7-widgets.js'),'utf8'),context);let specs=context.window.week7GraphSpecs;
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
close((10/1.2)**2,69.44444444444446);close((30*4/8)**2,225);
let a=[4,6,10],s=[.5,1/3,1/6];a.forEach((v,i)=>close((v/(2*s[i]))**2,[16,81,900][i]));
const vr=x=>-x/2+4*Math.sqrt(x);[81,100,225].forEach((x,i)=>close(vr(16)-vr(x),[12.5,18,60.5][i]));
close((20*Math.sqrt(81)-81)-(20*Math.sqrt(16)-16),35);
close(6-1-2,3);close(-3+4-3,-2);close(3-1,2);
close(108/6,18);close((60-12)/3,16);close(40-2*16,8);close(20-16,4);
const ranks={J:['M','L','H'],E:['L','H','M'],A:['H','M','L']},alts=['M','L','H'];
function winner(ballots){let count=Object.fromEntries(alts.map(x=>[x,ballots.filter(y=>y===x).length])),best=Math.max(...Object.values(count));return ranks.J.find(x=>count[x]===best)}
for(const ballots of [['M','H','H'],['M','L','M']]){let w=winner(ballots);Object.keys(ranks).forEach((person,i)=>{for(const other of alts){let b=[...ballots];b[i]=other;assert.ok(ranks[person].indexOf(winner(b))>=ranks[person].indexOf(w))}})}
for(const [name,spec]of Object.entries(specs)){let defaults=Object.fromEntries(spec.controls.map(c=>[c[0],c[5]]));for(const c of spec.controls){for(const bound of [c[2],c[3]]){let d=spec.calc({...defaults,[c[0]]:bound});assert.ok(d.points.every(p=>p.every(Number.isFinite)),name);assert.ok(!/NaN|Infinity/.test(d.text),name)}}}
close(specs['weighted-welfare'].calc({weight:3}).points[0][0],225);close(specs['investment-mb'].calc({I:100,mcpf:1}).points[0][0],100);
assert.ok(specs['beach-election'].calc({red:.3,brown:.8}).text.includes('55.0%'));
assert.ok(specs['beach-election'].calc({red:.8,brown:.3}).text.includes('45.0%'));
assert.ok(specs['beach-election'].calc({red:.5,brown:.5}).text.includes('½'));
console.log('Week 7: original arithmetic, strategic plurality equilibria, six graph bounds, crossing platforms and ties pass.');
