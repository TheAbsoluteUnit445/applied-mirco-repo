# Chapter 17: Setting Pay Levels: Monopsony Models

_Source: `Personnel Economics.pdf`, PDF pages 302-316. Page markers below are PDF page numbers._


<!-- pdf p. 302 -->
­281
 Setting Pay Levels:
Monopsony Models 17
Overall, how generous should a firm’s compensation package be to maximize
its profits? So far, in modeling principal–agent interactions in this book, we’ve
answered this question in a rather unrealistic way. Specifically, in Part 1’s model
of one principal and one agent, the profit-maximizing contract was just gener­
ous enough to get the agent to take the job. (Technically, the contract just had to
satisfy the agent’s participation constraint, U ≥ Ualt in Equation 3.7.) Paying any
less than this meant the principal didn’t hire anyone, and paying any more was
just giving money away to the single agent.
This is, of course, pretty unrealistic. In real firms, wage setting is not such
an all-or-nothing decision, for at least two reasons. One is that employers typi­
cally hire many workers, not just one; in most of these cases, the number of
workers who are attracted to (and stay in) the firm will likely vary smoothly,
rather than abruptly, with the generosity of a firm’s compensation policy.
Second, even when a firm is dealing with a single worker, it is unrealistic to
assume that firm knows the exact value of the worker’s next best alternative. In
this case, the employer’s assessment of the probability the worker will accept
a firm’s job offer will also increase smoothly with the generosity of the firm’s
offer. In both these more realistic cases, a profit-maximizing employer faces
a trade-off: Raising pay costs money, but it might buy the firm more workers,
better workers, happier workers, more productive workers, and workers who
don’t quit so often. That is the trade-off we study in this chapter.
Broadly speaking, labor and personnel economists refer to the situations
studied in this chapter as cases of monopsony in labor markets.1 Monopsony
1 The word “monopsony” comes from the Greek words for “single buyer” and was coined by the
British economist Joan Robinson in her 1933 book, The Economics of Imperfect Competition. She
used it to describe a labor market with only one employer. Nowadays it refers to any situation in
which employers face a smooth trade-off between the number or quality of workers they can attract
and the generosity of the compensation package they offer. In other words, the “monopsony” trade-
off applies to almost every firm.


<!-- pdf p. 303 -->
282 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
models are the focus of this chapter. In Chapter 18, we’ll consider the effects of
pay levels on worker discipline—another important consideration when choosing
how much to pay.
 17.1   Optimal Exploitation: Pay Levels and the Elasticity
of Labor Supply
To construct a simple model of optimal pay generosity, let’s consider a firm hiring
workers, each of whom produces the same amount of net revenue, Q. Because we
are abstracting from effort decisions in this part of the text, each worker’s utility
depends only on one thing: the total wage, w, the firm pays that worker.2 Under
these conditions, as already suggested, you can think of the simple mathematics
we’ll do in this section in two distinct ways (the mathematical results apply to
both interpretations).
Specifically, in the many-worker interpretation of the mathematics, we con­
sider a firm that is (implicitly) deciding how many workers to hire by setting its
offered wage, which applies to all workers. In this interpretation, the offered
wage is w, the number of workers hired is N, which increases with w via the
smoothly increasing labor supply function N(w). In the single-worker interpreta­
tion, a risk-neutral firm is deciding on how high a take-it-or-leave-it wage offer
(w) to make to single worker. But in contrast to the models in Part 1 of the book,
the firm doesn’t know the exact value of the worker’s best outside option, or res­
ervation wage. We model this uncertainty by imagining a smoothly increasing
function N(w) denoting the probability the worker will accept the firm’s offer as a
function of the offered wage. The results derived in the following apply equally to
both the single- and many-worker interpretations; but in most of our discussion,
we’ll use the terminology of the many-worker interpretation.
Mathematically, under the preceding assumptions, the firm’s decision is just
to find the level of w that maximizes profits, which are given by

Π = (Q – w) N(w).
(17.1)
In words, each worker who is hired produces net revenues of Q but is paid w.
Thus, the firm earns a profit of (Q – w) on each worker hired. Total profits are just
profits per worker times the number of workers hired, N(w). The quantity (Q – w)
is sometimes called the absolute (wage) markdown, or if you prefer absolute ex­
ploitation. It’s just the gap between what each worker produces and what that
worker is paid.
As it turns out, there’s a simple yet totally general solution to the maximiza­
tion problem in Equation 17.1 that was discovered by British economists John
Hicks (1932) and Joan Robinson (1933). Both were among the most influential
2 One way to think about this is that workers get no disutility from working. Another is that effort
does cause some disutility, but the amount of effort associated with working is the same regardless
of how much the worker is paid. Thus, the only aspect of the job that matters to the worker—in
deciding whether to take the job or not—is what it pays.


<!-- pdf p. 304 -->
17.1  Optimal Exploitation: Pay Levels and the Elasticity of Labor Supply    283
economists of the early 20th century; Hicks won the first British Nobel Prize
in 1972; Robinson is still known for her pioneering work in the economics of
imperfect competition. These authors showed that the profit maximizing wage is
given by a simple equation:
  RESULT 17.1
The Profit-Maximizing Wage
The profit maximizing wage for a firm facing an upward-sloping labor supply curve
is given by the formula

(17.2)
where η (a Greek letter, pronounced “ate a,” as in “I ate a sandwich”) represents
the elasticity of labor supply to that firm.
DEFINITION 17.1
Elasticity is a measure of the responsiveness of one quantity to changes in another.
Elasticity measures are frequently used by economists in a variety of contexts.
A key application in personnel economics is the (firm-level) labor supply elasticity,
η, which is defined as the percentage change in labor supplied that is caused by a
1% change in the wage the firm pays, that is,
η = percent change in labor (N) supplied / percent change in wage (w) offered.
High values of the labor supply elasticity mean that labor supply is very sensitive
to the offered wage; in this case, small wage increases attract a lot more workers
(and small wage cuts cause a lot of workers to quit). When the labor supply elastic­
ity is low, the number of workers a firm can hire (or retain) is not very sensitive to
the offered wage.
For small changes in the offered wage, the labor supply elasticity can be defined
using calculus as
η = w
N
 × dN
dw
 = d log N
d log w
.

Equation 17.2 expresses the profit-maximizing wage as a fraction of the
worker’s productivity.3 To see how it works, notice that the profit-maximizing
wage equals zero when labor supply is completely inelastic (η = 0). This is be­
cause cutting the offered wage doesn’t cause any of the firm’s workers to leave;
3 To derive Equation 17.2, simply differentiate Equation 17.1 with respect to the wage and set the
result equal to zero, yielding the first-order condition for a maximum: dΠ/dw = – N + (Q – w)(dN/
dw) = 0. Notice that this just balances the marginal cost of a wage increase (the fact that you have
to pay a higher wage to each of N workers) against its marginal benefits (you get to hire dN/dw
additional workers and earn a profit of Q – w on each one of them). Rearranging this first-order
condition [and using the definition of η as (w/N)(dN/dw)] yields Equation 17.2.
w =  η
1 + η
 Q,


<!-- pdf p. 305 -->
284 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
they will all stay, even at a wage of zero. At the other extreme, workers must be
paid their full productivity (w = Q) when labor supply is infinitely elastic.4 In this
case, cutting the wage even one penny means all of a firm’s workers will quit,
so firms have no choice but to pay workers their full productivity and earn zero
profits. In between these extremes, the profit-maximizing wage rises from zero
(complete exploitation) to Q (zero exploitation) as the labor supply elasticity rises.
In sum, we have Result 17.2:
  RESULT 17.2
The Profit-Maximizing Wage Increases with the Elasticity of
Labor Supply to the Firm
The simple theory of monopsony in labor markets predicts that profit-maximizing
firms will exploit workers most (i.e., pay the lowest wages, relative to productivity)
when the elasticity of labor supply to the firm is low. The intuition is simple: When
the labor supply elasticity is low, firms won’t lose as many workers when they cut
wages. In contrast, a high level of labor supply elasticity represents a case where
many workers have outside options that are comparable in value to what the cur­
rent firm is offering.
Effects of Labor Supply Elasticity on the Profit-Maximizing Wage
in an Imaginary Company
To understand in a little more detail how Equation 17.2 works, you can down­
load the spreadsheet that is reproduced in Figure 17.1.5 This spreadsheet cal­
culates the profits of an imaginary firm in which each of up to 100 workers
produces net revenues of Q = $10 each. The firm faces a labor supply curve
given by the equation

N = Kwη,
(17.3)
where η is the elasticity of labor supply.6 In the spreadsheet, I’ve chosen the value
of the constant K in a special way: K is automatically calculated such that re­
gardless of the labor supply elasticity, the firm will always hire 100 workers if
it sets a wage of 10. If you like, you can think of a firm that has a current stock
of 100 workers and is paying each one of them his or her full productivity. It is
now asking itself, “What will happen to my labor force and my profits as I cut
my wage below 10?” And perhaps more importantly, “How far should I cut to
maximize my profits?”
4 η/(1+η) approaches 1 as η approaches infinity.
5 Spreadsheets are available at http://econ.ucsb.edu/~pjkuhn/Ec152/Spreadsheets/Spreadsheets.htm.
6 The labor supply curve in Equation 17.3 is a widely used, convenient type of equation called a
constant elasticity supply equation. This just means that the (percentage) sensitivity of labor
supplied to wages is the same at all points on the labor supply curve. The quickest way to verify that
the parameter η represents the labor supply elasticity at all points for this curve is to take logs of the
curve, then differentiate: log N = log K + ηlogw; therefore, dlogN/dlogw = η.


<!-- pdf p. 306 -->
17.1  Optimal Exploitation: Pay Levels and the Elasticity of Labor Supply    285
For any given value of labor supply elasticity, the spreadsheet will plot for
you the labor supply curve faced by this firm. Experimenting with various values,
you’ll see that when the supply elasticity is low, not many workers quit when the
wage is cut. For example, when η = 0.2, the firm can cut its wage down to 4 (i.e.,
it can pay workers only 40% of what they produce) and still retain 80% of its
original 100-worker labor force. When η = 0.5, only 60% of workers remain at a
wage of 4. This number falls to 40% when η = 1, to under 20% when η = 2, and
effectively to zero when η = 5. As you raise the labor supply elasticity beyond
that, the supply curve becomes closer and closer to vertical near the quantity
N = 100. This means that the firm loses essentially all its labor force even for
infinitesimal wage cuts below 10. This is, of course, the extreme case of perfectly
competitive labor markets where all firms are wage takers, which is the standard
model in most labor economics textbooks.
Optimal Wage Setting with an Upward-Sloping Labor Supply Curve–Spreadsheet Example
Productivity (Q) =
10
2
Note:  the spreadsheet automatically picks K to ensure that 100 workers are always available when the wage = 10:
K =
1
6.67
wage
number of
workers
profits
(w)
(N) ( = (Q-w)*N)
0
0
0
0.5
0.25
2
1
1.00
9
1.5
2.25
19
2
4.00
32
2.5
6.25
47
3
9.00
63
3.5
12.25
80
4
16.00
96
4.5
20.25
111
5
25.00
125
5.5
30.25
136
6
36.00
144
6.5
42.25
148
7
49.00
147
7.5
56.25
141
8
64.00
128
8.5
72.25
108
9
81.00
81
9.5
90.25
45
10
100.00
0
Labor supply function: N = K*(w), where K = 100/(10)
Labor supply elasticity () =
Profit-maximizing wage (from the formula, w = Q*/(1+):
0.00
20.00
40.00
60.00
80.00
100.00
120.00
0
2
4
6
8
10
12
Number of workers (N)
Wage (w)
The Labor Supply Curve, N(w)
FIGURE 17.1. Effects of Labor Supply Elasticity on the Profit-Maximizing Wage


<!-- pdf p. 307 -->
286 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
Next, let’s apply and check the formula in Equation 17.2. For any labor
supply elasticity you choose, the cell highlighted in yellow (in the spreadsheet)
calculates the profit-maximizing wage using that formula. Some elasticity
values you might try out (because the answers work out to nice round numbers)
are η = 0.25, 0.333, 0.5, 1, 2, 4, 9, and 19. As you do this, you’ll find that the
profit-maximizing wage rises from $2.00 to $9.50. The rest of the table just il­
lustrates and verifies this result by calculating labor supply and total profits for
20 candidate values of the offered wage for any elasticity value you choose. For
the suggested elasticity values above, you’ll see that the profit-maximizing wage
in the yellow cell will match one of the 20 round numbers in the wage column of
the table. Another thing you might notice is that the maximized level of profits
Are Competitive Labor Markets Good or Bad for Workers?
Although it’s sometimes claimed that competi­
tive labor markets drive wages down, workers’
right to quit at any time when a better opportunity
arises—and to do so without providing either a
reason or advance notice—is a key and perhaps
unappreciated source of workers’ economic
power. It is this right that keeps wages high when
the labor supply elasticity (a measure of labor
market competitiveness) is high. Indeed, the eco­
nomic power associated with workers’ freedom
to quit is dramatically illustrated by employers’
historical attempts to restrict those rights.
For example, Suresh Naidu (2010) studies the
effect of anti-enticement laws on worker mo­
bility and wages in the postbellum U.S. South.
Anti-enticement laws were fines imposed on
employers for the offense of recruiting a share­
cropper or other worker who was already under
contract to another employer. Naidu finds that
increases in the enticement fine lowered the
mobility of black sharecroppers across employ­
ers. Higher fines also reduced workers’ wages
and their rate of wage growth (because moving
to better jobs is an important way to improve
one’s wages). The effects of anti-enticement
laws are a dramatic illustration of the power of
worker mobility to keep wages high.
Much more recently, high-tech employees
of Apple, Google, Intel, Intuit, Lucasfilm, and
Pixar launched a class action suit against their
employers, accusing the companies of enter­
ing into agreements to (1) not recruit each oth­
er’s employees; (2) provide notification when
making an offer to another’s employee (without
the knowledge or consent of that employee);
and (3) cap pay packages offered to prospec­
tive employees at the initial offer, all with the
intent to reduce employee compensation and
mobility. According to the plaintiffs, “as addi­
tional companies joined the alleged conspiracy,
competition among participating companies
for labor decreased. Compensation of defen­
dants’ employees was less than what would
have been paid in a properly functioning labor
market where employers compete for workers.”
On January 15, 2015, Apple, Google, Intel, and
Adobe agreed to a $415 million settlement,
subject to judicial approval (Lief, ­Cabraser,
Heimann, & Bernstein, 2015). Despite the gen­
eral tendency of the business community to
support freely competitive markets in general,
it appears these firms were willing to break the
law to eliminate competition in their own labor
markets!


<!-- pdf p. 308 -->
17.1  Optimal Exploitation: Pay Levels and the Elasticity of Labor Supply    287
falls as labor supply elasticity rises: Firms don’t like competitive labor markets
because good outside options for workers limit the firm’s ability to exploit them
by cutting wages!
Simple monopsony models like the ones in Equation 17.2 have been pro­
posed as explanations for a number of well-known phenomena in labor markets.
These include the fact that, across the world, wages for comparable work are
higher in larger cities than smaller ones, and higher in cities than the countryside.
Although a number of other factors also contribute to this phenomenon, Man­
ning (2010) presents evidence suggesting that the greater level of labor market
competition in cities also plays a role: Workers have many more alternative op­
tions in cities, placing stricter limits on employers’ wage-setting power. Other
researchers have applied monopsony models to the study of labor markets with a
small number of key employers, such as markets for teachers (Falch, 2010, 2011;
Ransom & Sims, 2010) and nurses (Staiger, Spetz, & Phibbs, 2010). Monopsony
power has also been proposed as an explanation for why some immigrants—­
especially those whose mobility across employers is limited—are paid less than
citizens and permanent residents. Examples include Depew, Norlander, and
Sørensen’s (2013) study of H1-B visa holders in the United States (who cannot
switch employers within the United States without getting a new visa); U.S. un­
documented workers (Hotchkiss & Quispe-Agnoli, 2012); and ­immigrants to
Germany (Hirsch & Jahn, 2015).
Wages and Benefits: The Economics of Compensating
Wage Differentials
Aside from wages and effort, jobs have many other features that workers
care about, including location, hours, working conditions, schedules, safety,
job security, and a wide array of benefits like sick time, health insurance,
and retirement benefits. For the most part, when we talk about wage-setting
Can Monopsony Explain Why Women Are Paid Less than Men?
Possibly the earliest and most famous applica­
tion of a monopsony model to labor markets is
Joan Robinson’s (1933) proposal that gender dif­
ferences in the firm-level labor supply elasticity,
η, might help explain the gender wage gap in
many economies: If men are more likely to react
to low pay by switching to another employer than
women are, profit-maximizing employers can
get away with paying equally qualified women
less than men. Recently, Barth and Dale-Olsen
(2009); Ransom and Oaxaca (2010); and Hirsch,
Schank, and Schnabel (2010) tested this idea and
found that men’s quit rates were indeed more
sensitive to wages than women’s. Possible rea­
sons include men’s greater ability or willingness
to move geographically to improve their labor
market options. If true, this greater willingness
to relocate would protect men from exploitation
to a greater extent than women, who might be
more tied to a location for family reasons.


<!-- pdf p. 309 -->
288 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
in this chapter, what we really mean is the overall attractiveness of the
job package, including all these features, most of which (like wages) are
costly for the employer to provide. Indeed, economists since Adam Smith
have argued that workers may be willing to pay for desirable job features
by accepting a lower wage. Following Smith, economists refer to wage dif­
ferentials between jobs that reflect differences in jobs’ non-wage aspects as
compensating differentials.
Economists have been trying to estimate the amount of wages that workers
are willing to sacrifice in return for desirable job attributes for decades.
One of the most convincing estimates, however, is a recent field experiment by
Alex Mas and Amanda Pallais (in press). During the application process to staff
a national call center, Mas and Pallais randomly offered applicants choices be­
tween traditional Monday-to-Friday, 9 a.m. to 5 p.m. office positions and alterna­
tives. These alternatives included flexible scheduling, working from home, and
positions that give the employer discretion over scheduling. The authors also
randomly varied the wage difference between the traditional schedule and these
alternatives, allowing them to estimate workers’ willingness to pay for these
alternatives. Mas and Pallais found that although the great majority of workers
are not willing to pay for flexible scheduling, some workers care intensely about
it and are willing to sacrifice a significant amount of wages to avoid it. However,
How Highly Do Workers Value Their Own Lives? Evidence from
“The Deadliest Catch”
To estimate workers’ valuation of job safety,
Kurt Lavetti (2016) surveyed commercial fish­
ing deckhands who worked in the Alaskan
Bering Sea between 2003 and 2009, one of the
world’s most dangerous jobs. Because the risk
associated with these jobs varies sharply over
time (in a way that workers can predict before
they sign up with a captain), and because wage
contracts between hands and captains last only
a few weeks or few months, Lavetti was able to
measure differences in wages paid between the
same captain–deckhand pairs under different
safety conditions. Lavetti finds that deckhands’
hourly wages were highly seasonal, ranging from
$25 per hour in June and July to around $50 per
hour in December and January. Suggestively, this
pattern very closely tracks the fatality risk, which
varies from about 1 death per 1,000 worker-years
in the summer to over 6 deaths per 1,000 worker-
years in the winter. Lavetti is able to rule out a
preference for working in better weather as the
explanation for this pattern by exploiting La Nina
weather patterns, which can raise the fatality rate
within a season, and which have similar effects
on wages. Overall, Lavetti estimates that—based
on their willingness to accept higher wages in
return for a higher risk of death—­Alaskan deck­
hands value their lives at about 6.6 million dol­
lars. Calculations like these, of the value of a
statistical life that is revealed by trade-offs real
workers are willing to make, are widely used in
cost–benefit analyses and in the courts (to award
damages). Compared to most previous estimates,
however, Lavetti’s are probably the most convinc­
ing ones available (though they apply, admittedly,
to a very special population).


<!-- pdf p. 310 -->
17.2  Does It Really Matter What You Pay? Finding a Pay Level Niche    289
the average worker is willing to give up 20% of wages to avoid a schedule set
by an employer on a week’s notice. Perhaps unsurprisingly, women—especially
those with young children—were willing to pay considerably more to avoid this,
and for the option of working from home. Whereas women’s willingness to sacri­
fice wages in return for more control over their own schedules has been advanced
as a possible explanation of the gender wage gap, Mas and Pallais note that the
compensating differentials they estimate are not large or prevalent enough to
explain much of the gender wage gap.
 17.2   Does It Really Matter What You Pay? Finding a Pay
Level Niche
Could there ever be a circumstance where a firm’s profits do not depend on how
much it pays? Although this seems hard to believe, a closer look at the last sec­
tion’s simple monopsony model suggests, in fact, that there may be important,
real-world situations where this is true. To see this, it helps to study the solution
to the last section’s model graphically. We do that in Figure 17.2, which shows
three isoprofit curves for the firm, between w (a bad to the firm) and N (a good).
Just like the agent’s indifference curves between income and effort in Figure
1.3, these curves show that the firm’s well-being (profits) now increase to the
northwest. The equation for each of these isoprofit curves comes directly from
rearranging Equation 17.1 to get

N = Π/(Q – w).
(17.4)
Equation 17.4 tells us how N, the number of workers required to achieve any
target level of profits (Π), varies with the wage the firm offers. For example, sup­
pose the desired level of profits is $100 and worker productivity, Q, is $10. Then
if the wage is $9.99, the firm needs to hire 100/0.01 = 10,000 workers to earn a
profit of $100. At a wage of $5.00, the firm only needs 100/(10 – 5) = 20 workers.
At a wage of 0, it would only need 10 workers.
Figure 17.2 also shows an example of a labor supply function facing the firm;
the specific curve shown there is a straight line through the origin. Like all such
curves, it has a labor supply elasticity, η, of exactly 1.7 For a firm maximizing its
profits subject to this supply curve, we can find a solution the same way we did
in Figure 2.3: at a tangency point with the highest attainable isoprofit curve. As
you can verify from the spreadsheet or directly from Equation 17.2, in this case
profits are maximized when workers are paid exactly half their productivity, that
is, when w = Q/2. It’s also pretty easy to visualize what happens for alternative
values of η: as η rises above 1, the labor supply curve in Figure 17.2 gets steeper,
shifting the tangency point to the right, at a higher wage. The opposite happens
as η falls below 1. This is just another way of illustrating Result 17.2.
7 To verify this, you can set η = 1 in the spreadsheet corresponding to Figure 17.1.


<!-- pdf p. 311 -->
290 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
w
N
Q
Higher profits
w1
w2
Hypothetical labor supply function
FIGURE 17.3. An Example Where Pay Doesn’t Matter: Any Wage between w1 and w2
Yields the Same Level of Profits
With the apparatus of Figure 17.2 in hand, we can now return to the question
posed at the start of this section: Are there circumstances in which firms might
be completely indifferent as to what wage they pay? As it turns out, Figure 17.3
shows an example where this is actually the case.
w
N
Q
Higher profits
w*
Labor supply function: N = Kw
Isoprofit curves: N = /(Q-w)
FIGURE 17.2. Profit-Maximizing Pay Generosity: Example with η = 1


<!-- pdf p. 312 -->
17.2  Does It Really Matter What You Pay? Finding a Pay Level Niche    291
In Figure 17.3, the bold, dashed labor supply curve facing an individual firm
coincides with an isoprofit curve over a range of wages, from w1 to w2. As a result,
the firm’s profit-maximizing wage is actually any wage between w1 and w2: They
all yield the same level of profits. Although this might seem like a strange type
of labor supply curve, nothing in the theory of monopsony or labor supply rules it
out.8 More importantly, Figure 17.3’s labor supply function is actually a phenom­
enon we’d expect to see in certain types of labor markets.
The first economists to demonstrate that a labor supply curve like the one in
Figure 17.3 might be a feature of real labor markets were Kenneth Burdett and Dale
Mortensen (1998). Mortensen was awarded the 2010 Nobel prize for this and other
work on equilibrium in labor markets. Burdett and Mortensen visualized a labor
market in which there were many firms competing to hire the same group of work­
ers. Each firm adopts a policy of picking some wage level and paying that amount
to all its workers. A key feature of the market envisioned by Burdett and Mortensen
is that there are search frictions—in this case, the authors imagined that opportu­
nities for workers to move to new firms only arrive occasionally. In markets like
this, each firm faces an upward-sloping labor supply curve because the more it
pays, the fewer of its workers will move on to better paying employers when the
opportunity arises. Further, there are good reasons to expect this labor supply to
look exactly like the one in Figure 17.3, where the gain to offering a higher wage
(which takes the form of a reduction in a firm’s quit rate) exactly matches the direct
cost of raising the wage.9 Another way of saying this is Result 17.3.
  RESULT 17.3
Under Some Circumstances, Wage Increases Can Pay for
­Themselves by Making It Easier to Hire and Retain Workers
If the labor supply curve has the shape predicted by search models like Burdett and
Mortensen’s (1998) and as illustrated in Figure 17.3, it is possible for higher wages
to attract just enough extra labor to balance the cost of paying those extra wages,
leaving profits unchanged. Under these circumstances, high-wage employers can
coexist with, and do just as well as, low-wage employers.
Result 17.3 has an interesting implication for firms who might be deciding
how well to pay: in the long run, it may not matter (from the point of view of
your own profits) whether a firm pays well or badly! Paying badly may save
money in wages, but it raises the costs of hiring and turnover. Paying more
8 Notice that this contrasts with consumer demand theory, where there’s a logical reason to expect
the consumer’s budget constraint to be linear in most cases.
9 The reason relates directly to entry and exit decisions of firms and to the coexistence of firms
paying different wages in a competitive market. Essentially, if all firms have access to the same
production technology (say they are supermarkets, which have a highly standardized technology),
the only way that two firms paying different wages can coexist in the long run is if they earn the
same level of profits.


<!-- pdf p. 313 -->
292 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
Costco versus Sam’s Club: High- versus Low-Wage Strategies in Retail
In a recent Harvard Business Review article,
Zeynep Ton (2012) summarizes over 10 years
of her research on the performance of retail­
ers like Costco, QuikTrip convenience stores,
Mercadona (a Spanish family-owned super­
market chain), and Trader Joe’s supermarkets
who adopt a high-wage, low-turnover strategy,
and of their competitors who pay considerably
less. For example, in the “wholesale club” retail
segment, employees earn about 40% more at
Costco than at Sam’s Club, Costco’s closest
competitor (operated by Walmart). At Trader
Joe’s (a California-based food chain), the start­
ing wage for a full-time employee is $40,000 to
$60,000 per year, more than twice what some
competitors offer. The wages and benefits at
QuikTrip are so good that the chain has been
named one of Fortune’s “100 Best Compa­
nies to Work For” every year since 2003. All
of Mercadona’s employees are permanent, and
more than 85% are salaried full-timers.
Given these huge wage differences, one
might expect that the aforementioned retailers
would have to charge higher prices, and/or earn
lower profits, than their low-wage competitors.
Ton, however, finds that these companies had
among the lowest prices in their industries,
solid financial performance, and better cus­
tomer service than their competitors. In addi­
tion, these high-wage retailers offered workers
more training, better benefits, and more conve­
nient schedules than their competitors. Ton’s in-
depth study of the retail industry dramatically
illustrates how high- and low-wage employers
can coexist, and why paying higher wages is
not necessarily a recipe for losing money, even
in a highly competitive, low-margin sector like
retail sales.
may seem risky, but could easily benefit a firm in enough ways to make up
for the extra costs. Essentially, a firm’s choice of a wage may not affect how
profitable it is but may simply determine which pay niche it occupies in the
local labor market.10
Industry studies like Zeynep Ton’s (2012) work on retail also identify at least
three additional factors (besides lower turnover) that can make up for the costs of
paying higher wages. One of these is in fact the central concept of this part of the
book: selection! Indeed, it seems highly likely that higher wages buy a firm not
only more workers, but more productive workers.11 As Ton shows, it’s easier to re­
cruit and retain good workers if you pay better. Second, as we show in Chapter 18,
10 It might be tempting to conclude from Result 17.3 that passing a law that forced all employers
to pay better could make workers better off without costing firms anything. Unfortunately this
is not necessarily true because in Burdett and Mortensen’s (1998) model, the advantages reaped
by the high-wage firms derive not from their high absolute wages but from their high wages
relative to other employers in the local labor market: If all firms raised their wages together,
every firm’s costs of doing business would rise, and no firm would find it any easier to recruit
workers than before.
11 To incorporate this into Section 17.1’s simple model of optimal wage-setting, simply make Q(w) be
an increasing function in Equation 17.1. In that expanded model, the optimal wage will depend on
both the quantity- and quality-elasticities of labor supply.


<!-- pdf p. 314 -->
Discussion Questions    293
more generous pay might have an effect on effort and job performance of a firm’s
existing workers via a mechanism economists call an efficiency wage effect. Fi­
nally, the lower turnover achieved by paying better means it makes more sense
to train your employees; this can also raise the productivity of your existing
workers. We study the interaction between employee turnover and firms’ optimal
training strategies in Chapter 19.
   Chapter Summary
■ The profit-maximizing generosity of pay for a firm is an increasing function
of the elasticity of labor supply to that firm. In competitive (high-elasticity)
labor markets, firms cannot pay workers much less than their productivity
because quits are very sensitive to wages. When labor supply elasticity is
low, firms have considerable monopsony power and can pay low wages with­
out losing many workers.
■ In some labor market equilibrium models like Burdett and Mortensen’s
(1998), low- and high-wage employers can coexist in the same industry and
locality, earning similar profits. In these situations, the higher compensation
costs of the high-wage employers are balanced by the advantages of lower
turnover, lower absenteeism, abler workers, and higher levels of employee
effort. Thus, employers can choose to adopt a high- or low-wage strategy. It
may not be possible for all employers to pick the former, however, because
some of the advantages of paying high wages are only when wages are high
relative to workers’ other labor market options.
   Discussion Questions
	 1.	 Imagine you operate a relatively low-wage franchise business in town,
paying $10 an hr while most of your competitors are paying $12. De­
scribe how your labor force is likely to differ from other firms in your
industry in terms of education, training, absenteeism, turnover, and job
performance.
	 2.	 Now imagine you are contemplating raising your wage to $12 an hr. If you
did so, are there any other company policies you might want to change at the
same time? How would you expect the aforementioned features of your labor
force to change? Under what conditions is this wage increase likely to be a
good or a bad idea for your business?
	 3.	 How would your answer to the preceding question change if, instead of just
your business raising its wage, a minimum wage law was passed requiring
all employers in your town to pay at least $12 per hr?


<!-- pdf p. 315 -->
294 
  CHAPTER 17   Setting Pay Levels: Monopsony Models
   Suggestions for Further Reading
Readers interested in a broad and engaging survey of the monopsony literature
will enjoy Alan Manning’s 2003 book, Monopsony in Motion. For a business
perspective on high- versus low-wage strategies, Zeynep Ton’s (2012) Harvard
Business Review article makes interesting reading.
For more on measuring the value of a statistical life, see Viscusi and Aldy
(2003). Additional evidence on how much workers value the flexibility and stabil­
ity of their hours, and on how this affects gender wage differences (and college
major selection), see Wiswall and Zafar (in press).
   References
Barth, E., & Dale-Olsen, H. (2009). Monopsonistic discrimination, worker turn­
over, and the gender wage gap. Labour Economics, 16, 589–597.
Burdett, K., & Mortensen, D. T. (1998). Wage differentials, employer size, and
unemployment. International Economic Review, 39, 257–273.
Depew, B., Norlander, P., & Sørensen, T. A. (2013). Flight of the H-1B: Inter-firm
mobility and return migration patterns for skilled guest workers (IZA Discus­
sion Paper No. 7456). Bonn, Germany: Institute for the Study of Labor.
Falch, T. (2010). The elasticity of labor supply at the establishment level. Journal
of Labor Economics, 28, 237–266.
Falch, T. (2011). Teacher mobility responses to wage changes: Evidence from a quasi-
natural experiment. American Economic Review (Papers and ­Proceedings),
101, 460–465.
Hicks, J. R. (1932). The theory of wages. London: Macmillan (2nd ed.).
Hirsch, B., Schank, T., & Schnabel, C. (2010). Differences in labor supply to
monopsonistic firms and the gender pay gap: An empirical analysis using
linked employer–employee data from Germany. Journal of Labor Economics,
28, 291–330.
Hirsch, B., & Jahn, E. J. (2015). Is there monopsonistic discrimination against
immigrants? Industrial and Labor Relations Review, 68(3), 501–528.
Hotchkiss, J. L., & Quispe-Agnoli, M. (2012). Employer monopsony power in
the labor market for undocumented workers (Working Paper No. 2009-14d).
Atlanta, GA: Federal Reserve Bank of Atlanta.
Lavetti, K. (2016). The estimation of compensating wage differentials: Lessons
from the deadliest catch. Unpublished manuscript. Department of Economics,
Ohio State University, Columbus, OH.


<!-- pdf p. 316 -->
References    295
Lief, Cabraser, Heimann, & Bernstein. (2015). Case center: High tech employees
class action lawsuit. Retrieved January 28, 2015 at https://www.lieffcabraser.
com/antitrust/high-tech-employees/
Manning, A. (2003). Monopsony in motion: Imperfect competition in labor mar­
kets. Princeton, NJ: Princeton University Press.
Manning, A. (2010). The plant size-place effect: Agglomeration and monopsony
in labour markets. Journal of Economic Geography, 10, 717–744.
Mas, A., & Pallais, A. (in press). Valuing alternative work arrangements. American
Economic Review.
Naidu, S. (2010). Recruitment restrictions and labor markets: Evidence from the
postbellum U.S. South. Journal of Labor Economics, 28, 413–445.
Ransom, M. R., & Oaxaca, R. L. (2010). New market power models and sex dif­
ferences in pay. Journal of Labor Economics, 28, 267–289.
Ransom, M. R., & Sims, D. P. (2010). Estimating the firm’s labor supply curve in
a “new monopsony” framework: Schoolteachers in Missouri. Journal of Labor
Economics, 28, 331–355.
Robinson, J. V. (1933). The economics of imperfect competition. London:
MacMillan.
Staiger, D. O., Spetz, J., & Phibbs, C. S. (2010). Is there monopsony power in the
labor market? Evidence from a natural experiment. Journal of Labor Econom­
ics, 28, 211–236.
Ton, Z. (2012, January–February). Why good jobs are good for retailers. Har­
vard Business Review, 125–131. Retrieved from https://hbr.org/2012/01/
why-good-jobs-are-good-for-retailers
Viscusi, W. K., & Aldy, J. E. (2003). The value of a statistical life: A critical
review of market estimates throughout the world. Journal of Risk and Uncer­
tainty, 27(1), 5–76.
Wiswall, M., & Zafar, B. (in press). Preference for the workplace, human capital,
and gender. Quarterly Journal of Economics.
