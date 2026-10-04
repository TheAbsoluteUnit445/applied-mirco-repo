# Chapter 13: Risky versus Safe Workers

_Source: `Personnel Economics.pdf`, PDF pages 233-246. Page markers below are PDF page numbers._


<!-- pdf p. 233 -->
­212
13
Implicitly, Chapter 12’s analysis of which worker type to hire assumed that each
workers’ productivity was (a) known in advance to the firm and (b) the same
for each worker of a given type. Those assumptions allowed us to compare the
costs of hiring different mixes of workers and find the profit-maximizing mix
in a simple way. But how do things change when the productivity of individual
workers is not known in advance? For example, two workers (or types of work­
ers) might have the same expected productivity, but there might be much more
uncertainty regarding one worker, or worker type, than the other. More generally,
how should a profit-maximizing firm change its recruiting policy when workers’
productivity is hard to predict at the time of hire? This is the question we study in
this chapter. We begin with a simple example.
 13.1   A Base Case Example: Risky Workers and the
Principle of Option Value
Imagine that you are a risk neutral employer, choosing between two employees for
a sales position. Each employee will stay with you for (at most) 10 years and must
be paid $50,000 per year. One worker, whom we’ll call the “safe” worker, will
produce net revenues of $100,000 per year, each year, for sure. As we explained
when we discussed the meaning of a 100% commission rate in Section 3.3, “net
revenues” or “net sales” refer to revenues net of all costs except the salesperson’s
pay. The other worker, whom we’ll call the “risky” worker, could turn out to be
either a “lemon” or a “peach.” If this worker turns out to be a peach (the “good”
type), that person will earn you net revenues of $300,000 per year. If the worker
turns out to be a lemon (the “bad” type), that person will give you net revenues of
minus $100,000 per year. At the time of hiring, you don’t know whether the risky
Risky versus
Safe Workers


<!-- pdf p. 234 -->
13.1  A Base Case Example: Risky Workers and the Principle of Option Value     213
worker is a lemon or a peach: the chances are 50/50. For the sake of simplicity,
we’ll assume you learn the risky worker’s type after the person has been with
your firm for 2 years. At that time you are free to dismiss the worker at no cost
to the firm.
In the preceding example, which worker should you hire?
A first thing to notice about our base case example is that by construction,
the expected annual net revenues of the two workers is the same: 0.5($300,000) +
0.5(−$100,000) = $100,000. Realizing this, you might be tempted to answer
the previous question as follows: “Well, because the two workers yield the same
expected profits, but there is more uncertainty surrounding the risky worker, you
should always hire the safe worker.” Although this may feel correct, it’s not, for
at least two reasons. The more trivial reason, of course, is that we’ve assumed you
are a risk neutral employer. So, by assumption, you should be indifferent between
two options with the same expected return but different levels of risk. The more
fundamental reason is that even though the two workers have the same expected
net revenues per year they are with you, the expected present value of hiring them
is not the same. This is because—once you learn the risky worker’s type—you
can make a choice (i.e., keep or dismiss them) that affects their long-term impact
on your profits. In other words, risky workers have option value (or if you prefer
“upside” risk or potential) that safe workers don’t.1
Taking this option value into account, which worker should you hire? As it
turns out, the answer is very simple: Under the stated conditions, a risk-neutral
employer should always prefer the risky worker over the safe worker.
  RESULT 13.1
Employers Should Prefer Risky Workers if There Are No
Dismissal Costs
When it is costless to dismiss risky workers, a risk-neutral employer should
always strictly prefer a risky to a safe worker with the same expected per-period
productivity.
To demonstrate Result 13.1, we’ll work out the value of hiring the risky and
the safe worker under a variety of assumptions using the spreadsheet shown in
Figure 13.1. Figure 13.1 shows the spreadsheet using its base case parameter
values, where we assume the firm discounts future profits at a rate of 20% per
year, its annual quit rate is 20%, and dismissal costs are zero. To explore what
happens with other parameter values, you can download a copy of the spread­
sheet and experiment with different values to see how the answers change.2 We’ll
1 Option value is widely used concept in financial economics; as you may know, options (to buy
or sell a particular stock at a certain price in the future) are traded on financial markets and can
command high prices. Here, the valuable option is the option to keep (or dismiss) a worker, whose
future value—just like stocks—is uncertain.
2Spreadsheets
are
available
at
http://www.econ.ucsb.edu/~pjkuhn/Ec152/Spreadsheets
/Spreadsheets.htm.


<!-- pdf p. 235 -->
214 
  CHAPTER 13  Risky versus Safe Workers
The next two boxes in Figure 13.1 let you input the characteristics of the safe
and risky workers. Using the information we’ve already provided, the box on the
right computes the expected net sales from a risky worker using the formula

Expected net sales = p(Sales if Good) + (1 – p)(Sales if Bad),
(13.1)
where p is the probability the risky worker turns out to be the good type. If you
like, you can experiment with the downloaded version of the spreadsheet to see
how the risky worker’s expected annual sales change as you change these as­
sumptions, and how that compares to the safe worker.
Finally, the main panel in Figure 13.1 shows the sales and salary of each
type of worker over the 10-year period they might be in the firm and totals up the
expected present value (EPV) of hiring each worker type over that entire 10-year
horizon. To see how this works, let’s start with the safe worker. Column (4) shows
that all safe workers who are still with the firm produce net sales of $50,000 per
year. But what are the chances that a safe worker who is hired this year is still
with the firm in each of the subsequent years? Assuming that a fixed share, θ, of
workers quit every year, the spreadsheet calculates the share of workers that are
still around in year t using the recursive formula:

Nt = (1 − θ)Nt – 1,
(13.2)
discuss these changes later in this section, but first let’s work on understanding
the spreadsheet and the formulas it uses.
The box in the top left of the spreadsheet allows you to input three parameter
values that are common to both worker types: the firm’s discount rate, the work­
ers’ turnover rate, and the cost of dismissing a worker. To the right of the values
that you can input, I have indicated the base case values for these parameters in
bold. This is just for convenience: When I ask you to “set the parameters at their
base case values,” you will have that information readily available. Although
we’ve discussed discounting and turnover before, what do we mean by “firing
costs” in Figure 13.1? These are the costs of dismissing a worker who turns out
to be a “lemon,” which include some factors internal to the firm such as a pos­
sible loss in the morale of remaining workers and costs of finding and training
replacement workers. They also include factors imposed on the firm by a variety
of employment protection laws (EPLs).
We’ll study the effects of EPLs on firms’ hiring decisions in detail later
in this chapter; for now, we’ll assume that there are no relevant EPLs. Thus,
Figure 13.1 sets dismissal costs equal to zero.
DEFINITION 13.1
Employment protection laws (EPLs) refer to any law or regulation that limits
employers’ ability to fire or lay off workers. Examples include requirements for
advance notice of termination, mandatory severance pay, mandatory legal proce­
dures for termination, and various forms of unjust dismissal regulations.


<!-- pdf p. 236 -->
13.1  A Base Case Example: Risky Workers and the Principle of Option Value     215
FIGURE 13.1. Effects of Hiring Risky Workers
Note: All magnitudes are in thousands of dollars. “Base case” parameter values are in bold.
Total expected profits are highlighted in gray.
HIRING RISKY WORKERS—SPREADSHEET EXAMPLE
In this example, “bad” workers are detected after TWO periods
Discount
Rate =
0.2
0.2
Quit
Rate =
0.2
0.2
Firing
Cost =
   0
   0
“Safe” Worker Characteristics:
“Risky” Worker Characteristics:
actual
base case
Sales if
actual
base case
Sales:
100
100
Bad:
−100
−100
Sales if         Good:
 300
 300
Salary:
Probability (Good)
  0.5
  0.5
50
50
Salary:
   50
   50
Expected Sales:
 100
 100
Safe Worker
Risky Worker
(1)
(2)
(3)
(4)
(5)
(6)
(7)
(1)
(2)
(3)
(4)
(5)
(6)
(7)
Share of
Sales-
EPV(Sales-
Sales -
Sales-
EPV(Sales-
workers
Salary
Salary)
Salary -
Salary-FC
Salary-FC)
Sales-
who haven’t
after
after
      Sales   Salary
Sales
Salary
Firing
after
after
Year
Sales
Salary
Salary
quit (R)
quits
quits
  If Bad
if Bad
If Good
if Good
Costs
quits
quits
1
100
50
50
1.000
50.0
50.0
−100
50
300
50
50
50.0
50.0
2
100
50
50
0.800
40.0
33.3
−100
50
300
50
50
40.0
33.3
3
100
50
50
0.640
32.0
22.2
0
0
300
50
125
80.0
55.6
4
100
50
50
0.512
25.6
14.8
0
0
300
50
125
64.0
37.0
5
100
50
50
0.410
20.5
9.9
0
0
300
50
125
51.2
24.7
6
100
50
50
0.328
16.4
6.6
0
0
300
50
125
41.0
16.5
7
100
50
50
0.262
13.1
4.4
0
0
300
50
125
32.8
11.0
8
100
50
50
0.210
10.5
2.9
0
0
300
50
125
26.2
7.3
9
100
50
50
0.168
8.4
2.0
0
0
300
50
125
21.0
4.9
10
100
50
50
0.134
6.7
1.3
0
0
300
50
125
16.8
3.3
SUM
1000
500
500
223
147
−200
100
3000
500
1100
423
243


<!-- pdf p. 237 -->
216 
  CHAPTER 13  Risky versus Safe Workers
where Nt is the number of workers still in the firm today (as a share of the initial
population you hired), Nt - 1 is the number you had last year, and θ is the annual quit
rate. (If you like, you can also think of 1 − θ as the firm’s retention rate, i.e., the
probability any given worker is still there, 1 year later.) According to Column (5),
if the quit rate is 20% per year, only 13.4% of your original workforce will be
with you after 10 years have passed.3 Put another way, column (5) gives the prob­
ability that a worker who was hired in year 1 is still in the firm in year t.
In Column (6), we multiply Column (4) by the share of workers who are still
in the firm in Column (5). This captures the fact that you only earn profits from
the salespeople who are still with you; thus, when turnover is accounted for,
hiring a safe worker today yields you only $20,500 in additional sales 5 years
from now. Next, Column (7) takes the present value of Column (6) using the
standard formula:

–
PV x t
x
r t
( , )
(1
)
1
=
+
,
(13.3)
where x is the amount of income earned in year t, and r is the real rate of interest
(per year).4 Put another way, we assume that your firm discounts profits earned
in the future at the real rate of interest that is available to it. Using Equation 13.3,
the spreadsheet calculates that the present value of the $20,500 produced by your
remaining salespeople 5 years in the future is only $9,900. In the bottom row
of Figure 13.1, we total up Column (7) to learn that after salaries are paid and
after quits are taken into account, hiring a safe worker today yields $147,000 in
expected discounted net profits for the firm over the next 10 years.
The remainder of Figure 13.1 repeats the preceding exercise for the risky
worker. Most of the analysis is the same, but there are some key differences. First
of all, Columns (1) and (3) (for the risky worker) now show that this worker’s
sales depend on which type the worker turns out to be. Moreover, because the
firm learns the worker’s type after 2 years (and because it makes sense to dismiss
all the workers who turn out to be lemons), the firm neither gets sales revenues
from nor pays a salary to bad workers starting in Year 3. Taking this into account,
Column (5) computes the firm’s expected sales minus salary from hiring a risky
worker in Years 3 through 10 using the formula

E(Sales – Salary) = p(Sales if Good – Salary if Good).
(13.4)
3 Some firms, including some fast-food restaurants, have turnover rates much higher than 20%,
meaning than almost none of their employees remain the same from year to year. Notice also that
Equation 13.2 assumes a constant 20% quit rate over the entire course of the employee’s career. In
most firms, however, workers tend to have declining quit hazards: The chances they will quit in any
given month or year (given they haven’t quit yet) go down the longer they have been in a firm. If
you like, you can modify the spreadsheet to allow for this. None of the main results in this section
will change.
4 Note that profits in the first year—Year 1—are not discounted in Equation 13.3. This implicitly
assumes that profits are earned at the beginning of the year, a convention we’ll use throughout this
book. If you prefer to think of profits as being earned at the end of the year, just change t − 1 in the
formula to t. None of the main results in this section will change. If you are unfamiliar with the
idea of discounting and calculating the present value of an income stream, consult any introductory
economics textbook.


<!-- pdf p. 238 -->
13.2  Changing Assumptions: When Are Risky Workers the Better Bet?    217
In other words, if you hire a risky worker today, there’s a 50% chance (1 − p) that
worker will turn out to be a lemon. If that happens, you’ll fire that person at the
end of Year 2 and earn zero net profits from the worker in Years 3 through 10.5
In addition, there’s a 50% chance the worker will turn out to be a peach, in which
case that person will earn you $300,000 − $50,000 = $250,000. Overall, be­
cause this only happens half the time, your expected profits in Year 3 from hiring
a risky worker today are $125,000.
As we did for safe workers, Columns (6) and (7) adjust Column (5) for em­
ployee turnover and discounting, respectively, yielding a total bottom line ex­
pected present value of profits [EPV(Π)] of $243,000. Because this is much higher
than the EPV(Π) from a safe worker, a profit-maximizing firm should hire the
risky worker in our base case example. The intuitive reason, already discussed, is
that risky workers have option value: It makes sense to take a chance on them, be­
cause (with zero firing costs) you don’t have to keep them if they don’t work out!
 13.2   Changing Assumptions: When Are Risky Workers
the Better Bet?
What happens when we change the assumptions of our base case scenario? If you
download the spreadsheet, you can find out for yourself by experimenting with
different values for all the parameters: the discount rate, the quit rate, the cost
of firing “bad” workers, and the probability a risky worker is a lemon, among
others. If you do so, here are a few additional lessons you can learn.
Effects of Discount Rate, Turnover, and Worker Productivity
First, it is easy to show that the relative value of the risky worker falls as the
discount rate rises (to see this, just type in any number between 0.2 and 1.0 in
the discount rate box in the top left).6 This makes sense because relative to safe
workers, risky workers are an investment that pays off in the future. So firms
who care more about the future should value risky workers more. For exactly the
same reason, the relative value of the risky worker falls as the worker turnover
rate rises: It doesn’t make sense to invest in identifying potential peaches if they
are going to quit anyway. Importantly, however, notice that (as long we keep the
workers’ productivities at their base case values) even though both discounting
and turnover reduce the risky worker’s appeal, they never eliminate it: the risky
5 You might wonder how it can be that, in our example, the “bad” risky workers are actually reducing
the firm’s profits in Years 1 and 2, but the firm isn’t able to fire them yet. Essentially, our assumption
that no one can be dismissed until Year 3 is meant to capture the idea that both actual worker
performance and our measures of it can be quite noisy, especially early in a worker’s career. Thus
the “bad” workers are present in the firm (and hurting it) during this assessment period, but the firm
doesn’t yet know who they are. For a recent formal model of the process via which employers learn
their workers’ ability over time, see Kahn and Lange (2014).
6 A discount rate of 1 means firms place zero weight on future profits (i.e., on anything beyond Year 1).
Therefore, it doesn’t makes sense to consider higher values than 1 for the discount rate.


<!-- pdf p. 239 -->
218 
  CHAPTER 13  Risky versus Safe Workers
worker is preferred to the safe worker no matter how high we raise the discount
or turnover rate! (Go ahead and experiment—you may need to display more deci­
mal places to be sure. . . .7) The reason is that—by assumption—the safe and
risky worker have the same expected productivity even before you learn the risky
worker’s “type.” So even if you only care about the first year, your EPV(Π) is still
no worse with a risky than with a safe worker.
  RESULT 13.2
Risky Workers May Be Preferred Even When They Are
Less Productive
As long as the difference in expected productivity is not too large, a risk-neutral
employer can prefer a risky worker to a safe worker even when the risky worker has
a lower expected per-period productivity.
To see this, restore all the parameter values in the spreadsheet to their base case
levels, then experiment by reducing the productivity of the risky worker in the
“bad” state below minus $100,000. You’ll see that the firm still prefers the risky
worker even when “lemons” cause a loss of $200,000, that is, when risky work­
ers’ expected productivity is 50 (which is only half of the safe worker’s expected
productivity!). If you experiment with different values, you’ll see that the risky
worker’s advantage disappears when productivity, if the worker turns out “bad,”
is about −216. The remarkable fact that employers can prefer risky workers with
lower expected productivity than a safe worker is another illustration of those
workers’ option value.
Effects of Riskiness and Dismissal Costs
To explore the effect of a worker’s “riskiness” on his or her attractiveness to the
employer, let’s first reduce the risky worker’s sales to minus $300,000—keeping
all the other parameter values at their base case levels. Now the risky worker’s
expected productivity in a single year is exactly zero. Due to the worker’s option
value, however, the expected present value of hiring that person is still positive,
at $77,000, but it is less than the expected present value of hiring the safe worker,
$147,000. So the firm should hire the safe worker. Next, let’s do a crazy thing:
Let’s make the risky worker even riskier (while holding the expected per-period
productivity fixed at zero). Specifically, reduce the “bad” worker’s productivity to
−$500,000 and raise the “good” worker’s productivity to +$500,000. (Statistically,
this is called a mean preserving spread in the worker’s productivity distribution,
and it leaves that person’s per-period expected productivity unchanged at zero.)
Amazingly, this increase in riskiness raises the expected present value of
hiring the risky worker to $205,000. Now the employer prefers the risky worker
7 And remember that—like the discount rate—the highest quit rate it makes sense to consider is 1.
This means that all workers quit at the end of their first year with the company.


<!-- pdf p. 240 -->
13.2  Changing Assumptions: When Are Risky Workers the Better Bet?    219
again! The reason of course is again related to option value: After Year 2, the
firm only keeps the risky worker if that person turns out to be a peach: the work­
er’s value as a lemon is irrelevant. Thus, the increased upside potential more than
makes up for the increased downside risk. Indeed, this principle is very well
known in financial markets: Options on risky stocks are typically worth more
than options on otherwise comparable safe stocks because the value of risky
stocks fluctuates more. The increased value of the risky worker as that person
gets riskier illustrates the same principle. To summarize:
  RESULT 13.3
Holding Expected Productivity Constant, the Relative Value of
the Risky Worker Increases With How Risky They Are
How do changes in firing costs affect the attractiveness of the risky worker?
To explore this question, let’s continue with our example where the risky worker’s
productivity equals −$500,000 if bad and +$500,000 if good. Now experiment
by raising the level of firing costs above zero. You will find that it starts to make
more sense to hire the safe worker once firing costs rise above about $175,000.
This makes sense: If it is costly or difficult to get rid of underperforming workers,
firms should be less willing to take a chance on risky prospects who might not
work out in the end.8
  RESULT 13.4
Dismissal Costs Make Risky Workers Less Attractive
The relative value of hiring the risky worker falls as firing costs rise. In cases where
the risky worker’s expected per-period productivity is below the safe worker’s,
increasing the level of firing costs can make the risky worker less attractive than
the safe worker.
One illustration of the effects of dismissal costs on risk-taking in the hiring pro­
cess involves academic tenure. At most research-intensive universities in the United
States, a newly hired assistant professor has 6 years in which to prove him- or herself
to be a capable researcher and teacher. At the end of that period, a strict “up-or-out”
rule applies: Assistant professors who attain the standard are retained and granted
8 Although Result 13.4 is correct as stated, its illustration in the downloadable spreadsheet is
actually a bit of an oversimplification. This is because the calculations in the spreadsheet ignore yet
another option available to a firm: the option to retain an underperforming worker. Specifically, the
spreadsheet simply assumes that the firm will fire all workers who turn out to be “bad.” But if firing
costs are high enough, it may actually be more profitable to retain underperforming workers than to
fire them. When that happens, firing costs still make firms reluctant to hire risky workers, but they
do this for a slightly different reason. This option is explored in one of the discussion questions for
this chapter.


<!-- pdf p. 241 -->
220 
  CHAPTER 13  Risky versus Safe Workers
tenure while the rest are terminated. In practice, however, it can be much harder to
deny tenure at some universities than others. Unsurprisingly, universities where it is
very easy to deny tenure (take, for example, top schools like Princeton, where only
about 1 in 10 assistant professors is awarded tenure) can afford to hire much riskier
new assistant professors than universities where tenure is hard to deny. The focus at
top schools is on star potential, so high-risk candidates working on far-fetched ideas
are very desirable. If those far-fetched ideas don’t work out, the university can just
deny tenure. Universities where it is hard to deny tenure have a strong incentive to
behave in a more risk-averse way in the hiring process.
Effects of Employer Risk Aversion, the Probationary Period,
and Employment Protection Laws
In addition to the parameters you can experiment with in our spreadsheet, a
number of additional factors also affect a profit-maximizing firm’s choice be­
tween risky and safe workers. One of these is employer risk aversion: In general,
Unintended Effects of Higher Dismissal Costs: Did the Americans
with Disabilities Act Hurt Disabled Workers?
The Americans with Disabilities Act (ADA)
became law in 1991. With a goal of increas­
ing employment among the disabled, the law
requires employers to accommodate disabled
workers and outlaws discrimination against
them in hiring, firing, and pay. An important
aspect of how the law is enforced is an em­
ployee’s right to sue an employer for disability-
based discrimination. Because workers rarely
sue firms for not hiring them, and because suits
for disability-based pay discrimination are also
relatively rare, in practice, one of the most im­
portant facets of the ADA is its effects on dis­
missal costs: Employers put themselves at risk
of a lawsuit if they dismiss a disabled worker.
Because hiring a disabled worker is arguably
a risky prospect for firms—their productivity
may be harder to predict than the productivity
of a non-disabled worker—Result 13.4 suggests
that the ADA could have had the unintended
effect of making firms less willing to “take a
chance” on hiring a disabled worker.
Interestingly, this is exactly what econo­
mists Daron Acemoglu and Joshua Angrist
found in their 2001 study of the ADA’s em­
ployment effects, conducted 10 years after the
ADA came into effect. For men of all working
ages and women under 40, the authors found
a sharp drop in the employment of disabled
workers after the ADA was implemented.
The authors also show that other labor policy
changes taking place at this time cannot easily
account for this drop, and that the decline in
disabled workers’ employment was largest in
states with more ADA-related discrimination
charges. Although not 100% conclusive that
the ADA was the main reason why disabled
workers’ employment rates fell after 1991,
Acemoglu and Angrist’s analysis suggests
that policymakers should be aware of possible
unintended effects of employment protec­
tion laws, especially when those laws apply
to workers that firms might see as “risky”
prospects.


<!-- pdf p. 242 -->
13.2  Changing Assumptions: When Are Risky Workers the Better Bet?    221
compared to risk-neutral firms, risk-averse firms will be less attracted to risky
workers; however, it is still possible for risk-averse firms to prefer risky workers
to safe workers of equal or lower expected productivity. These employers just
need to weigh their aversion to additional risk against the higher option value of
risky workers.9 Another factor is the length of the worker’s probationary period,
that is, the amount of time it takes for the employer to learn the risky worker’s
true type. As you can easily demonstrate by modifying the spreadsheet so that it
takes 3 or 4 years to learn the risky worker’s type, the relative value of the risky
worker falls when this probationary period gets longer.
Other factors firms consider include various forms of employment protection
laws, including mandated severance pay, legal procedures, and mandatory advance
notice of a worker termination.10 Legal requirements for firms to pay severance to
laid-off workers are common in many European countries and can be quite costly.
For example, Belgian firms have been required to pay 18 months of salary to long-
service white-collar workers when terminating their employment. In France, prior
approval from a judge is required for many private sector job terminations, a pro­
cess that can take considerable time and money. In addition, many countries, in­
cluding the United States, require firms to give workers advance notice of certain
kinds of terminations.11 A final important form of employment protection in the
United States is wrongful discharge laws, which prevent firms from laying workers
off for a variety of specified reasons (see, e.g., Autor, Donohue, and Schwab, 2006).
In all of these cases, we might expect employers to react to higher dismissal costs
by being more reluctant to “take a chance” on hiring risky workers. EPLs can have
many other effects, however, some of which—including the possibility of increased
training and innovation—may be beneficial to both workers and firms. We discuss
some of these factors in Section 19.4.
Who Can Observe Your Employees’ Job Performance,
and Why Does This Matter?
A final set of parameters in our model are the wages paid to workers. In the ex­
ample so far, we have made the very simple (but perhaps unrealistic) assumption
that all workers—whether risky or safe, peaches or lemons—are paid the same
wage ($50,000). Not surprisingly, this means that firms really like it when their
risky workers turn out to be peaches: These workers produce $300,000 in net
revenues but are paid only $50,000. Is this realistic? As it turns out, the answer
depends to a large extent on a key feature of labor markets, specifically, whether
workers’ productivity is public or private information.
9 A simple way to extend our spreadsheet model to accommodate employer risk aversion is simply to
think of the payoffs to the employer in that table as utility payoffs rather than dollars. Then we can
incorporate the idea that the employer may be more sensitive to losses than gains by just assigning
bigger negative numbers to the firm’s payoffs when the risky worker is a lemon. In this sense, our
spreadsheet model applies both to risk-averse and risk-neutral employers.
10 Although some of these restrictions officially apply only to layoffs (which are employment reductions
due to a lack of available work) and not to dismissals of individual workers for underperformance, the
difficulty of establishing an employer’s true rationale for terminating a worker means that these public
policies tend to affect the type of firing costs we’re thinking of in this section too.
11 Descriptions of these and other EPLs in number of countries are available in Kuhn (2002).


<!-- pdf p. 243 -->
222 
  CHAPTER 13  Risky versus Safe Workers
Personnel economists say that a worker’s productivity is private information
when only the worker’s current employer knows their true productivity. An ex­
ample might be a star-quality administrative assistant: It might indeed be possible
to pay such a worker much less than that worker’s productivity because other firms
have no way of knowing the worker is a star. On the other hand, worker produc­
tivity is public information when other potential employers also know a worker’s
performance. Well-known examples include scientists (whose publication record,
patent, and citation counts are publicly available), professional athletes, and CEOs
of publicly held companies (whose companies must disclose detailed financial in­
formation). When worker productivity is public information, risky workers are less
valuable to firms than when it is private information. That is because in the public
case, other firms can easily bid workers away from their original employer when
the market learns they are “peaches.”12 The upshot is Result 13.5.
12 This argument implicitly assumes that the “good” worker’s skills—which are worth $300,000 in
the original firm—are portable to other firms. In other words, that they are general skills. We study
the difference between general and specific skills in Chapter 19. Like private information, specific
skills tend to tie workers to firms, which increases firms’ incentives to invest both in identifying and
training their best workers.
Take a Chance on Me, Please! Under-Hiring in an Online
Labor Market
In 2012, oDesk was the world’s largest online
labor market—a site where employers can hire
workers anywhere in the world to perform a va­
riety of tasks that can be delivered online. Tasks
on oDesk vary from writing computer code; to
designing a website, poster, or ad campaign; to
simple data entry. A key feature of oDesk is that
every employee’s performance ratings from all
his previous oDesk employers are easily avail­
able to new employers on his profile page. Thus,
oDesk is a classic example of a labor market where
workers’ job performance is public information.
Interestingly, a recent study of oDesk work­
ers by Amanda Pallais (2014) shows that this
public information can lead to problems: Be­
cause all other employers will know that a new
worker I just took a chance on is a true gem (and
can hire them away from me with little more
than the click of a mouse), many employers on
oDesk are reluctant to try out new workers. In
essence, hiring new workers (thereby revealing
to the market which are the good ones) creates
a public good: It benefits the worker and other
firms but not the firm taking the initial chance
on the worker. And if you’ve studied public eco­
nomics, you’ll know that private markets don’t
do a good job of providing public goods.
As it happens, this is exactly what Pallais
found when she hired 952 randomly selected
workers on oDesk, giving them honest, public
evaluations that were either detailed or coarse.
Both hiring workers and providing more detailed
evaluations substantially improved the workers’
subsequent employment outcomes. Pallais also
calculates that firms do too little experimenta­
tion with risky, new workers on oDesk, suggest­
ing that the oDesk marketplace could be made
more efficient by introducing policies (such as
introductory subsidies) that encourage firms to
try out new workers more frequently.


<!-- pdf p. 244 -->
Discussion Questions    223
  RESULT 13.5
When Hiring Risky Workers Is Less Attractive
This is the case for employers in labor markets where employee productivity is
public information than when it is private. If other firms can see you have success­
fully hired a “star,” they have a strong incentive to poach those workers from you.
Although this is good news, ex post, for the “peaches,” it reduces a firm’s incentive
to take a chance on risky workers in the first place.
   Chapter Summary
■ In a situation where workers who don’t work out can be dismissed, risky
workers have option value to a firm.
■ This option value makes risky workers more valuable than safe workers with
the same expected per-period productivity and can even make them more
valuable than safe workers with higher expected productivity.
■ Risky workers’ option value (and therefore their attractiveness to employ­
ers) increases with how risky they are and declines with the level of dis­
missal costs.
■ Risky workers are less valuable to employers in labor markets where workers’
productivity is public information (i.e., is visible to other potential employers).
In these markets, firms may be reluctant to take a chance on workers who are
uncertain prospects but have considerable upside potential.
   Discussion Questions
	 1.	 Tenure is a form of employment protection that applies to some professors
and teachers. Drawing on the discussion in this chapter, what would be some
benefits and costs of abolishing it?
	 2.	 List all the factors (turnover rate, firing costs, etc.) that affect a firm’s choice
between risky and safe workers. Which of these factors make risky workers
more attractive to the firm, and which have the opposite effect?
	 3.	 What is a mean-preserving spread in a worker’s productivity distribution?
How does it affect the attractiveness of risky workers to employers?
	 4.	 Apart from risky workers and the stock market, can you think of other ex­
amples where people or firms are willing to pay money for the option to do
something in the future? (One hint: Think about the last time you bought an
airline ticket or booked a hotel room.) Discuss how your willingness to pay
for these options depends on the relevant amount of uncertainty.


<!-- pdf p. 245 -->
224 
  CHAPTER 13  Risky versus Safe Workers
   Suggestions for Further Reading
For more on employment protection laws, Bentolila and Bertola (1990) is one of
the first studies of EPLs. It asks whether EPLs can reasonably be held respon­
sible for poor European macroeconomic performance. My (Kuhn, 2002) book
on employment protection describes employment protection laws in 10 devel­
oped countries. Jones and Kuhn (1995) show that mandated advance notice of
termination reduces unemployment among laid-off workers by allowing some
of them to find a new job before they are terminated. Autor et al. (2006) provide
evidence suggesting that wrongful dismissal laws reduce employment growth
in U.S. states that adopt them. Kugler, Autor, and Kerr (2007) and Dougherty,
Frisancho Robles, and Krishna (2014) find that EPLs reduce productivity in the
United States and India, respectively. Button (in press) summarizes empirical
research on the employment effects of EPLs since Acemoglu and Angrist’s 2001
article and reminds us that EPLs can also raise employment of protected workers
by making it harder to fire them. Empirically, he estimates that a 2001 expansion
of employment protections for disabled workers in California increased their em­
ployment rates.
Finally, using data from the United States, United Kingdom, France, and
Germany, Acharya, Baghai, and Subramanian (2013, 2014) find that wrongful
dismissal laws increase innovation, at least in certain highly innovative sectors.
The authors argue that this is because wrongful dismissal laws prevent employ­
ers from taking advantage of employee innovators after they have produced a
successful product. We’ll return to this idea in Chapter 19 when we discuss firm-
specific skills and the holdup problem.
   References
Acemoglu, D., & Angrist, J. D. (2001). Consequences of employment protec­
tion? The case of the Americans with Disabilities Act. Journal of Political
Economy, 109, 915–957.
Acharya, V. V., Baghai, R. P., & Subramanian, K. V. (2013). Labor laws and in­
novation. Journal of Law and Economics, 56, 997–1037.
Acharya, V. V., Baghai, R. P., & Subramanian, K. V. (2014). Wrongful discharge
laws and innovation. Review of Financial Studies, 27, 301–346.
Autor, D. H., Donohue, J. J., III, & Schwab, S. J. (2006). The costs of wrongful-
discharge laws. Review of Economics and Statistics, 88, 211–231.
Bentolila, S. & Bertola, G. (1990). Firing costs and labour demand: How bad is
Eurosclerosis? Review of Economic Studies, 57, 381–402.
Button, P. (in press). Expanding employment discrimination protections for in­
dividuals with disabilities: Evidence from California. Industrial and Labor
Relations Review.


<!-- pdf p. 246 -->
References    225
Dougherty, S., Frisancho, V., & Krishna, K. (2014). State-level labor reform and
firm-level productivity in India. India Policy Forum, 10(1), 1-56.
Jones, S. R. G., & Kuhn, P. (1995). Mandatory notice and unemployment. Jour­
nal of Labor Economics, 13, 599–622.
Kahn, L., & Lange, F. (2014). Employer learning, productivity and the earnings
distribution: Evidence from performance measures. Review of Economic Stud­
ies, 81, 1575–1613.
Kugler, A., Autor, D., & Kerr, B. (2007). Do employment protections reduce
productivity? Evidence from U.S. states. Economic Journal, 117, F189–F217.
Kuhn, P. (Ed.). (2002). Losing work, moving on: International perspectives on
worker displacement. Kalamazoo, MI: W. E. Upjohn Institute for Employment
Research.
Pallais, A. (2014). Inefficient hiring in entry-level labor markets. American Eco­
nomic Review, 104, 3565–3599.
