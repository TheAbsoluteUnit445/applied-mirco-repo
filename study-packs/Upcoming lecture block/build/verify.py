"""Independent arithmetic, domain and source-link checks for the pack."""
from pathlib import Path
from urllib.parse import unquote
import math,re,json
P=Path(__file__).resolve().parent.parent
def close(a,b):assert math.isclose(a,b,rel_tol=1e-9,abs_tol=1e-9),(a,b)
checks=[]
def record(name):checks.append(name)
# Actual original-paper calculations and cross-topic utility comparison.
q0=(120-50)/.25;qt=(120-55)/.25
close(q0,280);close(qt,260);close(.5*5*(q0-qt),50)
close(4*50/280,5/7)
record('R25 initial/taxed quantities and excess burden; original elasticity 5/7')
close(5/(1/3),15);assert sorted([15,20,40])[1]==20
record('F24 median voter: own optimum15, median20')
for p,theta,lam in [(6,2,1),(3,1.2,1),(4,1.5,1),(7,5,2)]:
    ea,eb=p/(2*theta),p/(2*lam)
    equal=p*(ea+eb)/2-theta*ea*ea/2
    new=p*(p/theta)-theta*(p/theta)**2/2
    close(new-equal,p*p*(3*lam-2*theta)/(8*theta*lam))
record('F24 team welfare difference, including equality and both signs')
for R,pi,theta,pride,V in [(6,.1,2,40,11),(8,.08,2,30,14),(5,.1,1,20,8)]:
    Z=R/pi-pride;e=pi*(Z+pride)/theta;W=V-(Z+pride)/4+theta*e*e/4
    close(2*W+(Z+pride)/2-theta*e*e/2,2*V)
    profit=2*R*e-4*W-Z
    close(profit,(2*R*pi*(Z+pride)-pi*pi*(Z+pride)**2)/theta-4*V+pride)
    close((2*R*pi-2*pi*pi*(Z+pride))/theta,0)
record('F25 general-theta participation, wage bill, profit substitution and optimal prize')
for mu,w in [(0,3),(.5,5),(2,2)]:
    hn=(1+mu)*w/2;hj=w/2
    close((w*hj-hj*hj)-(w*hn-hn*hn),mu*mu*w*w/4)
record('R26/tutorial8.4 symmetric income-vs-utility comparison')
# Uniform probability: check global deviations, including textbook counterexample.
for d,R,S,stable in [(1,10,10,True),(2,10,10,True),(4,10,10,False)]:
    e=d*S/R;u=lambda x:max(0,min(1,.5+d*(x-e)/R))*S-x*x/2
    best=max(u(i/100) for i in range(2501))
    assert (best<=u(e)+1e-8)==stable
close(max(0,min(1,.5+4*(0-4)/10))*10,0)
record('Bounded tournament probability and independent global best-response counterexample')
for k in [0,.2,.6]:
    en=4/(2-k);ef=4/(1-k)
    close(en,(4+k*en)/2);close(ef,4+k*ef);assert -1+k<0
record('Constructed complementarity graph: simultaneous FOCs and negative planner Hessian')
for ex in [.4,.5,2]:
    for ey in [.4,1.5,2]:
        x=.1*ey/(ex+ey);y=.1-x
        close(100*x+100*y,10);close(ex*x,ey*y)
record('Ramsey graph: fixed-base revenue and equal marginal burden')
# Check every saved Markdown link against actual files; fragments don't change existence.
missing=[];count=0
for f in P.glob('*.md'):
    prose=re.sub(r'\\\[[\s\S]*?\\\]','',f.read_text(encoding='utf8'))
    for m in re.finditer(r'\]\((?:<([^>]+)>|([^\s)]+))\)',prose):
        link=m[1] or m[2]
        if link.startswith(('http:','https:','#')):continue
        target=(f.parent/unquote(link.split('#')[0])).resolve();count+=1
        if not target.exists():missing.append((f.name,link))
assert not missing,missing
record(f'{count} repository-relative Markdown links resolve')
(P/'build/checks/algebra-links.json').write_text(json.dumps({'passed':checks,'missingLinks':missing},indent=2),encoding='utf8')
print('\n'.join(checks))
