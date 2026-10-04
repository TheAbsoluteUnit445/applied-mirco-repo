# Chapter 19: Training

_Source: `Personnel Economics.pdf`, PDF pages 339-363. Page markers below are PDF page numbers._


<!-- pdf p. 339 -->
­318
19
As we learned in Part 1, when a firm needs a product or service, it may either
“buy” the product from an outside source, or “make” it in-house. This logic
also applies to the firm’s workforce: Should the firm “buy” workers who come
pre-trained with useful skills, or “make” skilled workers by hiring low-skill
workers and training them in-house? In Chapter 19, we will discuss this ques­
tion and many others related to worker training. As a warm-up exercise, we’ll
start in Section 19.1 by studying a training decision made by most workers
before they enter the labor market: whether to attend college. This is a relatively
simple human capital investment decision to analyze because the training deci­
sion primarily affects just one person—the potential student—who is also the
­investment’s primary beneficiary.
In the remainder of the chapter, we study investments in the training of work­
ers who are already attached to a firm. Here, both workers and firms may bear
part of the costs of acquiring certain skills, and benefit from the added productiv­
ity those skills yield. Thus, in addition to asking whether the investment should
be made, we also need to figure out which party—the worker or the firm—should
pay for it and reap its rewards to maximize economic efficiency. Finally, we will
consider a richer context in which workers and firms can decide how many skills
to train, rather than just how intensely to train a single skill.
 19.1   When to Train? An Education Example
Of all the types of training that make workers more valuable to their employers,
some of the most important are investments made before a worker even enters the
labor market, including investments in health, education, and even in migration
to a better labor market. In this section, we’ll study a worker’s decision to make a
Training


<!-- pdf p. 340 -->
19.1  When to Train? An Education Example    319
pre-labor-market investment of this type. We do this partly to remind ourselves of
the importance of a healthy, well-educated labor force to any modern economy,
but (as noted) also as a warmup exercise for the study of training investments that
are made inside firms. An advantage of this exercise is that it illustrates many of
the main features of the training decision while avoiding some important compli­
cations that we’ll study later in this chapter.
To that end, consider the case of Sam, who has just graduated from high
school at age 18. Sam is thinking of taking a 1-year-long welding course right
after graduation. Tuition costs $20,000, and it’s a full-time program so he can’t
hold down a paying job while he’s in the program. Sam estimates that his annual
earnings if he qualifies as a welder will be $35,000 compared to $30,000 if he
doesn’t (for simplicity, we’ll assume all these numbers are after taxes). He doesn’t
have any savings, but he’s able to get a student loan at a rate of 8% per year. To
keep the math simple, let’s imagine that if he graduates, Samuel plans to be a
welder until he’s 35. After that, his welding skills will be useless and he’ll earn
the same amount whether he went to welding school or not. Sam is pretty confi­
dent that he’d enjoy welding work about the same as any other kind of work (and
about the same as any time spent in welding school), so he cares only about the fi­
nancial consequences of his training decision. Should Sam go to welding school?
A naïve answer to Sam’s question is that it’s obvious he should go—after all,
the program costs $20,000, and he’ll recoup that amount in just four years from the
$5,000 in extra annual earnings it buys him. The rest is gravy, right? As you might
guess, there are at least two serious problems with this answer. The first is that it
ignores the biggest component of Sam’s total cost of going to welding school: He
won’t be able to work for a year. Once we count Sam’s $30,000 opportunity cost
of going to school, we realize that the training actually costs him $50,000. The
second problem with this answer is that it ignores the interest Sam will need to pay
on his student loan, which could be substantial at an 8% annual rate.
The correct way to answer Sam’s question is the same way any investor or
business should evaluate an investment opportunity: Calculate the expected pres­
ent values of the two options and pick the highest one. In Sam’s case, he is choos­
ing between the income streams shown in Figure 19.1. The present value (at age
18) of Sam’s income stream without training is

(19.1)
where r is the interest rate (8% in our base case example), t is Sam’s age minus 18
(so t = 17 when he’s 35), and Yt
N is his income in Year t if he doesn’t train (30 in
every year in our example).1
1 Equation 19.1 continues the convention we established in Equation 13.3 of not discounting the first
year of income in a stream.
∑
=
+
= (1
) ,
0
17
PV
Y
r
N
tN
t
t


<!-- pdf p. 341 -->
320 
  CHAPTER 19  Training
The present value of Sam’s income stream if he trains is given by

(19.2)
where Yt
T is his income in Year t if he trains (−$20,000 in Year 0 and +$35,000
in all other years).
The present values of these two income streams are worked out in the
spreadsheet shown in Figure 19.2. Perhaps surprisingly, you’ll notice that from a
financial point of view, Sam’s investment in a welding course doesn’t quite pay
off, yielding an income stream with a present value of about $299,257 compared
to $303,649 without the course.
Of course, this conclusion depends very much on the parameters of the prob­
lem. You can verify this by changing the parameter values in the spreadsheet your­
self, with the following results.2 Sam’s training investment (and training investments
in general) becomes more attractive when training is more effective (to see this,
raise Sam’s earnings as a welder to $36,000 and welding school will pay off), when
training’s direct costs fall (starting at the base case, cut tuition to $15,000), when
training’s indirect costs fall (cut his earnings without the training to $29,000), and
when the interest rate on the funds to finance the investment falls (reduce the stu­
dent loan rate to 6%). By making small changes to the spreadsheet you can also
easily show that training becomes more attractive the longer a time horizon you
have to reap the rewards from your investment (simply imagine Sam welds till he’s
40 years old; or conversely, consider whether training is a good investment for a
60-year-old Sam). And of course a shorter training period is also beneficial if it
yields the same results. Finally, investments in training become less attractive as
2 Spreadsheets are available at http://econ.ucsb.edu/~pjkuhn/Ec152/Spreadsheets/Spreadsheets.htm.
∑
=
+
= (1
) ,
0
17
PV
Y
r
T
tT
t
t
Age
Annual income (thousands)
−20
30
35
0
19
35
Income with training
Income without training
FIGURE 19.1. Hypothetical Income Streams with and without Training


<!-- pdf p. 342 -->
19.1  When to Train? An Education Example    321
you become less likely to use the training in the future. This could happen either
if there’s a chance Sam might quit welding (and go back to a non-welding job
paying $30,000) before he turns 35, or if he leaves the labor market altogether, for
example, to care for a young child. To build these into the spreadsheet, you can
use the approach we took for quits in the risky workers spreadsheet in Figure 13.1.
FIGURE 19.2. Present Value of Income with and without Training
Notes: All earnings and tuition costs are measured in thousands of dollars. Base case parameter values indicated in bold.
TRAINING—SPREADSHEET EXAMPLE
In this example, Sam is making decisions at age 18 that affect his earnings up to age 35
Interest Rate =
0.08
0.08
Tuition Cost =
20
20
Annual earnings without training =
30
30
Annual earnings with training =
35
35
Without Training
With Training
      (1)
(2)
(3)
(4)
(5)
(6)
Age
Year (t)
Income
PV(Income)
Income
PV(Income)
18
0
30
30.00
−20
−20.00
19
1
30
27.78
35
32.41
20
2
30
25.72
35
30.01
21
3
30
23.81
35
27.78
22
4
30
22.05
35
25.73
23
5
30
20.42
35
23.82
24
6
30
18.91
35
22.06
25
7
30
17.50
35
20.42
26
8
30
16.21
35
18.91
27
9
30
15.01
35
17.51
28
10
30
13.90
35
16.21
29
11
30
12.87
35
15.01
30
12
30
11.91
35
13.90
31
13
30
11.03
35
12.87
32
14
30
10.21
35
11.92
33
15
30
9.46
35
11.03
34
16
30
8.76
35
10.22
35
17
30
8.11
35
9.46
SUM
303.649
299.257


<!-- pdf p. 343 -->
322 
  CHAPTER 19  Training
  RESULT 19.1
Worker-Financed Investments in Education or Training
Investments made by workers in their own education or training are more likely to
pay off
•  the higher the effectiveness of the training;
•  the lower the direct and opportunity costs of training;
•  the lower the interest on funds used to finance the training;
•  the shorter the training period;
•  the longer the time horizon over which the returns to training can be reaped;
•  the more likely the worker continues to use the skill that was learned; and
•  the more likely the worker is to remain in the labor market.
 19.2   Training in Firms: When Is It Efficient?
Having worked out the conditions under which a worker should invest in train­
ing before entering the labor market, let’s turn our attention to the slightly more
complicated case of training decisions that are made after a worker has become
attached to a firm. To explore this situation, let’s consider the case of Sarah,
a new employee in a CountriBank office whose productivity with and without
a company training module is shown in Figure 19.3. If the company offers no
special training, a new worker like Sarah produces QN as long as she stays with
the company. After an initial training period that lasts until T*, a trained worker
produces more than this, Q1
T. During the training period, however, Sarah’s pro­
ductivity is much lower, at Q0
T. This reduced productivity can take a number of
forms, including Sarah’s time away from her main task, the time of the workers
assigned to train Sarah, and the mistakes Sarah makes (or customers she alien­
ates) while learning the ropes of an unfamiliar task.
Time
Net revenue, wages
0
T*
Revenue with training
Revenue without training
w1
S
w0
S
Q1
T
Q0
T
QN
FIGURE 19.3. Hypothetical Revenue and Wage Streams with and without Training
Note: The line consisting of short dashes is a wage profile with 50–50 sharing of the costs and benefits of training.


<!-- pdf p. 344 -->
19.2  Training in Firms: When Is It Efficient?    323
Most of the factors affecting whether CountriBank should assign Sarah to
the type of training described in Figure 19.3 are the same ones considered by Sam
in his welding school decision. One key difference, however, is that the optimal
training decision in the CountriBank case now depends on the type of training
in a way that wasn’t relevant before. To illustrate that, we first need to define two
distinct types of skills that might be provided by the company’s training program.
DEFINITION 19.1
General skills are skills that are useful both to a worker’s current employer and in
relevant employment opportunities at other employers.
Examples of general skills CountriBank might teach Sarah include general
customer relations skills; proficiency with widely used software like Microsoft
Office, Java, or C++; technical writing skills; basic bookkeeping skills; and fa­
miliarity with common financial products such as checking accounts, car loans,
mortgage loans, and mutual funds. Other examples of general skills probably
include basic literacy, numeracy, and widely recognized certifications in areas
ranging from welding and plumbing to accountancy and web administration.
DEFINITION 19.2
Firm-specific skills are skills that are useful only if an employee stays with the
current employer.
Examples of firm-specific skills include knowledge of a company’s internal
hierarchy, procedures, personalities, culture, and politics. Also included are any
skills that are not widely used in a worker’s relevant labor market. An example
might be highly idiosyncratic (and perhaps obsolete) company software, but even
a welding certificate can be a firm-specific skill if a worker lives in an area where
welding jobs are rare and the worker is not willing or able to relocate.
Under what conditions should Sarah be assigned to the training program de­
scribed in Figure 19.3? To answer this question, we’ll begin by ignoring any possible
conflict of interest between workers and firms and simply asking which of the two
productivity paths in Figure 19.3 yield the highest present value. In other words, we’ll
ask whether the investment in Sarah’s training pays off by making Sarah more pro­
ductive, ignoring for the moment how these productivity gains are shared between
Sarah and CountriBank. The answer to that question is provided in Result 19.2.
Result 19.2 reflects the important fact that firm-specific skills become use­
less when a worker leaves her current firm. General skills, on the other hand,
retain their value when a worker switches firms but do lose their value when a
worker leaves the labor market.3 To interpret Result 19.2, recall that it refers only
3 It is of course possible for some skills learned on the job to remain valuable in the home. A
restaurant chef can be a better home cook, for example, and a skilled construction worker can do his
or her own house repairs. As an approximation, however, the assumption that most job skills lose
their value when a person is no longer working for pay seems reasonable.


<!-- pdf p. 345 -->
324 
  CHAPTER 19  Training
to the conditions under which training investments are economically efficient in
the sense that they maximize the sum of profits and utility, or social surplus as
defined in Definition 4.1. As we’ll see in the next section, a number of complica­
tions might prevent actual arrangements between workers and firms from being
this efficient, especially when training is firm specific.
  RESULT 19.2
Training in Firms
1. Investments in the training of employed workers are more likely to pay off
•  the higher the effectiveness of the training (Q1
T – QN in Figure 19.3);
•  the lower the direct and indirect costs of training (QN – Q0
T);
•  the lower the interest on funds used to finance the training (r);
•  the shorter the training period (T*); and
•  the longer the time horizon over which the returns to training can be reaped.
2. The value of acquiring general skills increases with the worker’s expected future
labor force attachment.
3. The value of acquiring firm-specific skills increases with the worker’s expected
retention rate at the firm where that worker was trained.
 19.3   Training in Firms: Who Should Pay?
Now, let’s turn to the question of who should pay for Sarah’s training, or equiva­
lently, what should Sarah’s wage be during the training and post-training peri­
ods? As it turns out, this depends on whether the skills CountriBank is teaching
her are general or firm specific. We’ll start with the case of general training by
thinking through the consequences of three alternative ways of dividing up train­
ing’s costs and gains. Our analysis of both the general and specific training cases
is based on Gary Becker’s (1964) classic analysis.
First, let’s suppose the firm pays for Sarah’s training. What we mean by this
is that even though she is much less productive during her training period, Sarah
still gets paid the same as a new worker who receives no training, w = QN. Thus, by
absorbing the cost of training Sarah, CountriBank takes a loss on her of QN – Q0
T
during the training period. The reward for the firm is that it continues to pay Sarah
QN after she’s trained, making a profit of Q1
T – QN. In other words, if the firm pays
for Sarah’s training, her wage profile over time just coincides with the solid line in
Figure 19.3—she continues to get the same wage before and after training, with
the firm absorbing both the costs and gains from training her.
Will this arrangement work if Sarah’s training gives her a perfectly portable,
general skill? The answer is clearly “no” because a trained Sarah is now capa­
ble of producing Q1
T at a variety of relevant employers, whereas CountriBank is
paying her only QN. Because other employers can make money by paying Sarah


<!-- pdf p. 346 -->
19.3  Training in Firms: Who Should Pay?    325
any wage between QN and Q1
T, and because this could constitute a nice raise for
Sarah, it seems likely that a trained Sarah would leave CountriBank under these
circumstances. As a result, CountriBank will run a loss on training Sarah, as it
paid the costs but didn’t recoup the gains. Anticipating this, we would expect
CountriBank (and indeed any employer) to be wary of paying for the general
training of its workers.
Next, let’s ask what would happen if CountriBank required Sarah to share in
the costs and returns from her general training, for example, by splitting both of
them fifty-fifty. In this case, Sarah’s wage during the training and post-training
periods would be w0
S and w1
S, respectively, in Figure 19.3, where each of these
wages splits the difference between her productivity with and without training in
the relevant period. Thus, Sarah’s wage profile rises over time but not as much as
her productivity increases. Does this solve the problem described in the previous
paragraph (that a trained Sarah will leave)? Clearly not because even though her
post-training wage is better than the previous case (w1
S > QN), other employers
can still easily bid her away from CountriBank and make a profit. Thus, sharing
the costs and benefits does not work either.
By now, it should be apparent that the only workable solution to financing
general training (at least in a free labor market where workers can quit whenever
a better opportunity arises) is an arrangement where workers pay all the costs
and receive all the rewards. In this “worker pays” scenario, Sarah’s wage profile
coincides with her actual productivity (Q0
T and Q1
T), thus rising steeply over her
career. Notably, this also incentivizes Sarah to get the training, and—because
it avoids the “poaching” problem associated with the previous two scenarios—­
finally makes it in her employer’s interest to train her.
  RESULT 19.3
Workers Should Pay for General Training
In Becker’s (1964) model of general training, the efficient (and in many cases the
only feasible) way to finance general training is for the worker to pay all the costs
and reap all the rewards in the form of a higher post-training wage.
If we return for a moment to the example of Sam and his welding course,
Result 19.3 makes a great deal of sense: Even if Sam was already an employee of
a company that needed qualified welders, it could be quite risky for Sam’s com­
pany to pay for his welding course, unless the company could somehow write
a contract that obliges Sam to return to the company for a minimum period of
time afterward, or at least to reimburse the company for his training costs if he
leaves. While such “training contracts” may appear to violate laws prohibiting
indentured servitude, Hoffman and Burks (2017) recently noted that U.S. courts
generally permit these contracts when it is clear they promote the public good by
increasing investment in training. According to the authors, training contracts
have also been used for firefighters, pilots, mechanics, salesmen, paramedics,
electricians, accountants, teachers, flight attendants, bank workers, repairmen,


<!-- pdf p. 347 -->
326 
  CHAPTER 19  Training
Starbucks’ College Achievement Plan: So Why Do Some Employers
Pay for College?
On June 15, 2014, the Starbucks Corpora­
tion announced the introduction of the Star­
bucks College Achievement Plan. Under the
plan, all benefits-eligible Starbucks workers
in the United States can receive financial sup­
port for taking online, for-credit courses of­
fered by Arizona State University. Freshmen
and Sophomores receive a partial scholarship
and need-based financial aid, while Juniors
and Seniors receive reimbursement for all tu­
ition payments per block of credits success­
fully completed. Participants in the program
are paid their usual rate for time worked while
enrolled in the program and have no commit­
ment to remain at Starbucks past graduation
(Starbucks, 2014). And although Starbucks’
plan is novel by tying benefits to online educa­
tion at a particular university, a study by Peter
Cappelli (2004) indicates that employer tuition
assistance for college education is in fact quite
common in the United States. For example, as
many as one-third of undergraduates in fields
like business and engineering receive financial
assistance from their employers. Among adults
enrolled in post-secondary education in degree-
or credential-granting programs, 24% were
receiving tuition assistance from an employer,
and 53% were either receiving tuition support
or paid time off.
Because post-secondary education is prob­
ably a very general skill, how can we make
sense of these policies in light of Result 19.3?
Cappelli (2004) considers a number of possible
explanations, but his analysis suggests two as
the most likely. First, most tuition assistance
programs (TAPs) require workers to be with
the firm for a certain amount of time to be eli­
gible. (In Starbucks’ case, a minimum number
of hours must be worked to become benefits
eligible.) Thus, by offering a reward for staying
with the firm for a certain period of time, TAPs
may reduce turnover during the period before
training begins. This incentive is an example
of the deferred-wage incentives we studied in
Section 18.3 and is absent in Becker’s model (in
part because he doesn’t consider a pre-training,
“qualifying” period). Second, turnover may
also fall while the employees are receiving tu­
ition assistance because employees would lose
this valuable benefit by quitting. Of course, this
reduction in turnover will only benefit the em­
ployer if (a) enough workers stay after training
at a low enough wage to let the firm recoup its
tuition costs, or (b) Starbucks is able to earn
profits on workers even while the workers are
earning credits, despite paying the workers’
­tuition costs.
Are scenarios (a) and (b) plausible ones?
Cappelli (2004) argues that (a) could be true
simply because most real-world labor markets
have more frictions than we are assuming in
this section. Some workers may have suffi­
ciently limited outside options, so they will stay
with their original firm even after receiving
general training. Cappelli argues that (b) might
be true because of TAP’s effect on worker self-
selection (i.e., the types of effects discussed in
Section 15.4). Specifically, if high-performing
workers are more likely to sign up for TAP pro­
grams, the TAP may pay for itself even before
the training is even completed. In this way, the
TAP is a better tool for reducing employee turn­
over than an across-the-board wage increase
because it only appeals to a subset of ­workers—
the college motivated—the firm is more inter­
ested in retaining.


<!-- pdf p. 348 -->
19.3  Training in Firms: Who Should Pay?    327
firm-sponsored MBAs, and social workers.4 In these specific situations, training
contracts may thus be a viable way for firms to pay for workers’ general training.
Finally, let’s work out who is likely to pay for firm-specific training. Math­
ematically, the only way this differs from the case of general training is in the
level of Sarah’s post-training productivity if she goes to another employer. In the
case of general training, Sarah’s outside productivity was Q1
T in Figure 19.3; now
it is just QN (because the newly acquired skills are useless outside CountriBank).
4 In their study, Hoffman and Burks (2017) analyze data on training contracts used by long-haul
trucking firms. These contracts impose a financial penalty on workers who quit within 12–18 months
of receiving company-financed training. According to the authors, the contracts significantly
reduced quitting, particularly when workers were close to the end of their contracts.
Alternative Skill Maintenance, Unions, and Job Security
Although labor economists traditionally talk
only about two skill types—general, which are
useful both inside and outside the current firm,
and specific, which are useful only inside the
current firm—there is of course a third logi­
cal possibility: alternative skills. Alternative
skills are not used in one’s current firm but may
be valuable elsewhere, for example, if you lose
your job. Examples might be writing or math
skills for someone whose current job doesn’t
require much of either activity. Without some
effort, these skills can easily depreciate or atro­
phy if they are not used.
Arthur Sweetman and I (Kuhn & Sweetman,
1999) introduce this idea and use it to under­
stand differences in what happens to union and
nonunionized workers when they permanently
lose their jobs. Although both types of work­
ers suffer wage losses when they lose a job,
nonunion workers’ postdisplacement wages are
positively correlated with the amount of time
the worker spent on their previous job. This
suggests that some of the skills acquired on the
previous job are general, that is, they are por­
table into the worker’s next job. For (formerly)
unionized workers, though, the opposite is true:
The longer they spent in their previous job, the
lower are their postdisplacement wages.
In the article (Kuhn & Sweetman, 1999),
we argue that differences in alternative skill
maintenance might explain this intriguing pat­
tern: Not only do union jobs typically use a nar­
rower range of skills, most unionized workers
(rationally) expect their jobs to be very secure.
Accordingly, there is little incentive for union­
ized workers to invest effort in maintaining
skills they’re not using on their current job.
Unfortunately, when those secure union jobs do
disappear, older unionized workers tend to be
very vulnerable. Kuhn and Sweetman’s results
suggest another possible cost of Employment
Protection Laws (EPLs): They may discour­
age workers from maintaining their alternative
skills, making them very vulnerable if a job
loss should ever occur.
A key lesson for workers is, if you’re in a job
that uses a very narrow skill set, beware! You
might want to devote some effort to maintain­
ing important alternative capabilities, just in
case that job disappears.


<!-- pdf p. 349 -->
328 
  CHAPTER 19  Training
Everything else in our example (such as Sarah’s pre-training productivity) re­
mains unchanged. With this in mind, let’s now ask how the three financing
schemes described earlier perform in the case of firm-specific training.
In the “firm pays” scenario, Sarah is paid QN both before and after her train­
ing. Thus, the firm loses money on Sarah while she’s in training, and profits after­
wards. But because Sarah’s post-training wage now equals her productivity at other
firms, there is no longer any strong incentive for other firms to poach her away from
CountriBank. That said, this “firm pays 100%” approach leaves CountriBank highly
vulnerable to small changes in Sarah’s preferences, or in her perceived value to other
employers after she’s trained. Essentially, any random new opportunity that is just
a little better than QN will induce Sarah to leave CountriBank. This uncertainty
about Sarah’s outside options has two undesirable consequences. First, it means
­CountriBank can expect to lose money from training Sarah, making it reluctant
to train her in the first place. Second, paying Sarah only QN after she’s trained is
­economically inefficient. That’s because Sarah will quit more often than she should
(from the point of view of maximizing total surplus in Definition 4.1). Specifically,
at a post-training wage of QN, Sarah will quit whenever her wage outside the firm
exceeds QN. Thus, it is quite possible that she’ll choose to move from her current
firm—where she produces Q1
T—to a firm where she produces much less than that.
(This happens whenever her outside productivity is between QN and Q1
T.) These quits
are wasteful because they benefit Sarah less than they hurt her initial employer.
  RESULT 19.4
If Firms Pay the Full Cost of Firm-Specific Training, Trained
Workers Are Likely to Quit Too Often
Anticipating this, firms will be reluctant to offer training opportunities. If there is
any uncertainty in the value of a worker’s outside options after being trained, a
“firm pays all” financing plan for firm-specific training risks wasting valuable invest­
ments in training by generating excessive quits: Too often, workers will leave for
other firms where their firm-specific skills are not used. Because quits by trained
workers are highly costly to firms under a “firm pays all” plan, firms will avoid offer­
ing training opportunities under this financing plan even when the training would
raise the sum of profits and worker utility.
Now let’s turn to the opposite extreme of a “worker pays all” scenario, which
worked quite well in the case of general training. Here, Sarah’s post-training wage
is Q1
T, which eliminates the problem of her being wastefully bid away by low-
value, outside offers. However, this new scheme now leaves Sarah vulnerable, in
a parallel fashion to CountriBank’s vulnerability in the previous scenario. Specifi­
cally, if there is even a small amount of uncertainty in Sarah’s value to her current
employer (i.e., in the value of Q1
T), CountriBank will be tempted to lay her off in
situations where she shouldn’t be. Suppose, for example, that despite expectations,
her post-training productivity is just a little less than Q1
T. Now, CountriBank will
be better off firing Sarah (and earning zero profits) than by keeping her on at a loss.


<!-- pdf p. 350 -->
19.3  Training in Firms: Who Should Pay?    329
Firing Sarah in this situation, however, is socially wasteful, because it will cause
her productivity to fall from just under Q1
T down to QN).5 Put another way, these
layoffs are wasteful because they hurt the worker more than they benefit the firm.
Anticipating these sorts of problems, Sarah might (understandably) be unwilling
to pay the full cost of learning a skill that is only valuable to her current employer.
  RESULT 19.5
If Workers Pay the Full Cost of Firm-Specific Training, Trained
Workers Are Likely to Be Laid Off Too Often
Anticipating this, workers will be reluctant to accept training opportunities when they
are offered. If there is any uncertainty in the value of a worker’s future value to her
original firm, a “worker pays all” financing plan for firm-specific training risks wasting
valuable skills by generating excessive layoffs: Too often, workers will be forced to
move to other firms where their firm-specific skills are not used. Because layoffs are
highly costly to workers under a “worker pays all” plan, workers will decline training
opportunities even when they would raise the sum of profits and worker utility.
Because both the extreme “worker pays all” and “firm pays all” schemes
have important vulnerabilities in the case of firm-specific training, Becker (1964)
argued that the only viable solution for financing firm-specific investments in train­
ing is one that avoids the worst aspects of both extremes by sharing the costs and
benefits. Although the optimal sharing rate will not necessarily be the 50:50 split
depicted in Figure 19.3—that will depend on the relative amount of uncertainty
in the worker’s outside options compared to the uncertainty in her within-firm
productivity—some sharing will generally be better than either extreme solution.6
  RESULT 19.6
Financing Firm-Specific Training
According to Becker’s (1964) model, the efficient (and only likely) way to finance
firm-specific training is for the worker and firm to share both the costs and the
benefits. The worker’s optimal share is larger the higher the uncertainty in outside
options, and the firm’s optimal share is larger the higher the uncertainty in the
training’s effectiveness.
5 An astute reader will notice that this begs an important question: If Sarah’s training turns out to be
less effective than expected, doesn’t it make more sense just to renegotiate her post-training wage
than to kick her out the door? It might, but in this section, we’ll focus only on employment contracts
that promise a particular post-training wage, which is often the case in large firms with standardized
pay policies. More importantly, allowing for ex-post-wage renegotiation actually creates an entirely
new set of problems—holdup—that we’ll cover in Section 19.4.
6 Hashimoto and Yu (1980) and Hall and Lazear (1984) provide a formal analysis of Becker’s cost-
sharing solution to the specific investments problem. MacLeod and Malcomson (1993) propose a
related solution that allows for renegotiation only in certain circumstances.


<!-- pdf p. 351 -->
330 
  CHAPTER 19  Training
 19.4   Firm-Specific Training and the Holdup Problem
A natural question that arises from the last section’s discussion is whether
investments in firm-specific training might be less problematic if firms and
workers were able to bargain a little more flexibly about wages after the train­
ing has occurred. For example, suppose that Sarah is tempted to leave after
training because she has received a wage offer that’s better than her current
wage. If that outside wage offer is less than her productivity on her current
job, wouldn’t it be in her current employer’s interest to consider matching
or bettering it, instead of sticking to the agreed-on, post-training wage and
watching her go?
Interestingly, whereas ex-post negotiations like the preceding one can elimi­
nate some inefficient separations, allowing for this kind of bargaining can also
create some serious disincentives to invest in specific training in the first place.
The problem that arises is called the holdup problem and has received consider­
able attention in economics since Paul Grout (1984) stated the problem so clearly.
As it happens, Grout’s example was not about worker training but about a firm
making investments in their plant and equipment. The logic is the same, though,
so we’ll introduce the holdup idea using Grout’s example.
Specific to What? Occupation-, Industry-, and Location-Specific Skills
In this chapter, we’ve placed a lot of emphasis
on the distinction between firm-specific and
general skills. That’s because what really mat­
ters for training decisions and wage setting is
whether the skills acquired would be useful
outside the firm where they were learned. That
said, skills can be specific to other contexts too.
For example, even if a skill is not firm specific,
it could be occupation specific, that is, specific
to a given type of work (e.g., skills in sales or in
web management). Or it could be specific to a
given industry such as petrochemicals or edu­
cation. A number of skills, including language
and familiarity with tax laws and business
culture, can be country or location specific.
Economists studying worker mobility have
documented that crossing each of these bound­
aries tends to result in wage losses for workers,
suggesting that some skills are not portable
across them (see, e.g., Neal, 1995, and Parent,
2000, for industry; Poletaev & ­Robinson,
2008, and Kambourov & Manovskii, 2009, for
occupation; and Chiswick & Miller, 2014, for
language). More recently, some economists
have argued that what really matters for work­
ers’ ability to switch employers is the specific
mix of tasks they do, such that workers who
have unusual mixes of skills have a harder time
moving (Lazear, 2009; Gathmann & Schoen­
berg, 2010). Although all of these factors affect
a worker’s outside options, as we have already
argued, the most important distinction for wage
setting and training decisions is the extent to
which workers can easily find a job with an­
other employer that uses all or most of the skills
they have acquired.


<!-- pdf p. 352 -->
19.4  Firm-Specific Training and the Holdup Problem    331
DEFINITION 19.3
An economic relationship between two parties generates economic rents when
the relationship generates enough revenue to pay both parties what they can earn
in their next best activity, and then some. This difference between the total rev­
enues available to be divided between the parties and their best outside option is
defined as the economic rents associated with the relationship.
Imagine a unionized firm that is thinking of upgrading the machines in
an aging factory. Column (1) in Table 19.1 shows the productivity, wages,
and profits earned from a representative worker before the investment in new
equipment. By construction, both workers and firms earn zero economic rents
in this situation: The old equipment is just good enough to produce enough
output to pay the worker what he could earn elsewhere and leave the firm with
a zero economic profit (thus making it indifferent between being in business or
not).7 Another way of saying there are no rents is to say there is absolutely no
room for wage negotiation in column (1) of Table 19.1: Even though the firm is
unionized, there is nothing the union can do to secure a wage above the firm’s
break-even wage of £20,000. Any wage above £20,000 would cause the firm
to shut down.
Now let’s imagine that Grout’s (1984) firm is contemplating a relationship-
specific investment in its plant. By installing new machinery, it can double the
output of an average worker from £20,000 to £40,000. Because the new ma­
chines cost £15,000, this seems like a good investment. The problem with the
machines, however, is that they are custom built: They are only useful in pro­
ducing the particular type of widget this firm produces. These means that the
7 Economic profits are defined as the gap between a firm’s revenues and all its costs, including the
opportunity costs of capital, labor, and the entrepreneur’s own time. Thus, economic profits equal
zero when a firm is indifferent between operating and not. For more on the difference between
economic profits and accounting profits, see any introductory economics textbook.
 TABLE 19.1   HYPOTHETICAL PRODUCTIVITY, WAGES, AND PROFITS PER WORKER WITH AND WITHOUT
INVESTMENT IN NEW MACHINERY (£)
WITHOUT INVESTMENT
WITH INVESTMENT
(1)
(2)
Worker’s productivity
20,000
40,000
Investment cost
0
15,000
Alternative wage
20,000
20,000
Wage under “split the diff”
20,000
30,000
Profits
0
-5,000
Profits + wages
20,000
25,000


<!-- pdf p. 353 -->
332 
  CHAPTER 19  Training
machines, once installed in the factory, have no resale value, making them a
relationship-specific investment.8
Column (2) of Table 19.1 shows what happens if the firm invests in the new
machinery if wages are determined by negotiation between the firm and union
after the machines are in place. With the machines in place, the firm now produces
£20,000 in economic rents that are up for grabs in negotiations with the union.
More precisely, once the machines are in place, the firm will want to stay in busi­
ness for any wage less than £40,000; and workers are willing to work for any wage
above £20,000. (The £15,000 investment is a sunk cost that is no longer relevant.)
Thus, any wage between £20,000 and £40,000 will keep the firm in business. If
the union and firm are equally powerful negotiators, they’ll end up splitting this
rent equally at a wage of £30,000. The result, of course is that the firm ends up
losing money on its relationship-specific investment! Anticipating this, a smart
firm will never make such an investment, even though it is economically efficient
(because it raises the sum of profits and wages). This notion, that relationship-
specific investments can be held hostage after they are made—in a way that can
destroy the incentive to make the investment—is called the holdup problem.
DEFINITION 19.4
The holdup problem refers to a situation where relationship-specific investments
create rents whose division can be bargained over after the investments have been
made. When the (expected) outcomes of that bargaining process prevent socially
efficient investments from being made in the first place, a holdup problem is said
to exist.
Besides capital investments in unionized plants, holdup problems come up in
other areas of economics too. One example that’s probably all too familiar is the
curious case of printer cartridges: Once you’ve bought a printer, you have to use a
very specific replacement cartridge that in most cases you can only buy from the
company that sold you the printer. This makes the original printer a relationship-
specific investment (specific to your relationship with HP, Brother, or whomever).
Thus, although printers tend to be very cheap, cartridges cost a fortune. One inter­
pretation is that companies are holding customers hostage after they buy a piece of
equipment that can only be used with their cartridges.9 Another common example
8 If you don’t like the assumption of a unique, custom-built machine, you can imagine that the
costs of uninstalling, moving, and re-installing these machines in another firm is prohibitive. The
only thing that truly matters for the relationship specificity of the firm’s investment is that the new
equipment can only be used in conjunction with the union. Thus, if the firm could sell the entire
plant (including the new machines) to a new owner who could easily operate it with non-union
workers, the machines would no longer be a relationship-specific investment.
9 This begs the question of why some company doesn’t start a new line of printers that cost more up
front but have cheap cartridges. If customers believe the company will keep the cost of cartridges
low, they should surely be interested. Alternatively, new industry entrants have tried to profit just
by offering “compatible” cartridges at a lower cost. In response, it appears that the “legacy” printer
companies have retaliated by warning consumers that the “knockoff” cartridges are unreliable and
could void the customer’s printer warranty. Threats and counterthreats like these are emblematic of
hold-up situations that arise whenever relationship-specific investments have been made.


<!-- pdf p. 354 -->
19.4  Firm-Specific Training and the Holdup Problem    333
is in business-to-business dealings such as joint ventures and franchises. Many such
cooperative ventures require two or more companies to make major investments
up front that are essentially useless outside the new partnership. If the division of
the spoils is not carefully laid out up front, rational fear that future bargaining
over economic rents will eliminate one’s returns from making relationship-specific
investments can prevent economically efficient projects from ever starting.
Returning to the topic of this chapter, how might holdup affect workers’
investments in firm-specific skills? Applying Grout’s (1984) logic to this case
suggests that workers who make firm-specific training investments should be
wary if there’s any chance the firm might hold these investments hostage later.
For example, suppose Sarah has worked hard to learn a skill that’s only useful
at CountriBank and is now expecting a raise to w1
S in Figure 19.3 as a reward
for her efforts and a reflection of her new, higher value to the firm. A simple
way for CountriBank to hold her hostage is just to claim that business has been
poorer than expected, so the firm can no longer afford to pay her the promised
post-training wage of w1
S. If the skills she has acquired are only useful in Coun­
triBank, there is nothing Sarah can do!10
  RESULT 19.7
Holdup and Investments in Firm-Specific Training
Workers who are asked to bear some of the cost of acquiring firm-specific skills
should be aware that those investments are vulnerable to holdup by firms. This is
not an issue if firms negotiate in good faith and if they honor both the spirit and
letter of implicit and explicit training and pay agreements. Opportunistic firms,
firms in financial distress, as well as firms that have been taken over by new owners,
however, may be very tempted to push workers hard in extracting relationship-
specific rents after workers have invested in firm-specific skills.
An interesting implication of Result 19.7 is that the EPLs whose negative
consequences we studied in Section 13.1 could have an unexpected beneficial
effect on workers’ incentives to invest in firm-specific skills. A recent experimen­
tal study by Anderhub, Königstein and Kübler (2003) illustrates this. Even in a
context where the “worker” subjects have good reason to expect their employers
to want to retain them in a future period, Anderhub et al. found that giving work­
ers a contractual guarantee of future employment increased their investments
in firm-specific training. Additional empirical support for this idea comes from
two recent studies of innovative activity by employees—which can be a highly
relationship-specific investment—by Acharya, Baghai, and Subramanian (2013,
2014). Looking at the effects of country-level changes in dismissal laws in the
10 Of course, if the firm wishes to maintain a reputation as a good employer, it might refrain from
actions like these. But reputational considerations are not always effective remedies for holdup
problems. We discussed the important effect of firms’ reputations on long-term relationships
between workers and firms in Section 18.3.


<!-- pdf p. 355 -->
334 
  CHAPTER 19  Training
United States, the United Kingdom, France, and Germany, their 2013 study shows
that stronger dismissal protection can enhance employees’ innovative efforts by
reducing employers’ ability to act in bad faith after the worker has produced an in­
novation. Acharya et al.’s 2014 study finds similar results for the effects of changes
in wrongful discharge laws across the United States. MacLeod and Nakavachara
(2007) also study the effects of EPLs across the United States, finding that a good
faith rule, which requires employers to compensate employees as they have agreed
and to avoid dismissing employees opportunistically, has consistently positive ef­
fects on the employment of skilled workers but not on unskilled workers. This
makes sense if skilled workers are more likely to make significant firm-specific
investments that can be taken advantage of by opportunistic employers.
In sum, this section has shown that (legitimate) concerns about being “held
up” by an investment partner can compromise incentives to make relationship-
specific investments in a number of contexts, including workers’ investments
in firm-specific skills. Our analysis yields some general lessons for anyone
contemplating making a relationship-specific investment (such as buying a
Holdup in Modern Warfare: Problems for Employee Innovators
Even when there are clear agreements on who
holds the patents and copyrights, the relation­
ships between innovators and their employers
can generate rents that are “up for grabs” after
an innovation has succeeded. Given the logic
of holdup, this can create significant problems
(with each attempting to hold the other hostage)
when the innovators “hit a home run,” and a
large pool of rents is created.
A recent illustration of the problem involves
two of the most successful video game develop­
ers in history: Jason West and Vince Zampella.
As employees of Activision in the late 2000s,
they created two video game franchises, Call
Of Duty and Modern Warfare, that became
the most successful in the industry. Together,
they generated billions of dollars in revenue
for Activision and created a diehard fan base
in the millions. In November 2009, after over
2 years of nearly around-the-clock work, West
and Zampella delivered Modern Warfare 2 to
Activision, at which time the game had already
achieved over $1 billion in advance sales. But
just weeks before West and Zampella were to
receive the royalties for Modern Warfare 2,
Activision fired them. In a lawsuit, West and
Zampella claimed that Activision’s intention in
firing them was to avoid paying them the royal­
ties they had rightfully earned.
In its counterclaim Activision claimed that
West and Zampella engaged in various tactics
designed to increase their own bargaining power
with Activision. These included threatening to
bring production of Modern Warfare 2 to a stop,
delaying preproduction on Modern Warfare 3,
engaging in discussions with Activision’s closest
competitor, and encouraging their own employees
at Activision to follow them to that competitor.
When large economic rents are created from
the combined efforts of multiple parties, holdup
can be a serious problem. Knowing this, both
innovators and the companies that employ them
may be less willing to invest in innovative ven­
tures than is socially optimal.


<!-- pdf p. 356 -->
19.5  Costs and Benefits of Multiskilling    335
Non-Compete Agreements for Physicians: A Remedy for Holdup
by Employees?
Non-compete agreements (NCAs) are contracts
that prohibit a worker from competing against
a firm for a specified period of time after leav­
ing it. Structured correctly, such contracts are
legal in the United States and are commonly
used in number of industries, especially where
trade secrets may be involved. NCAs remain
controversial, however, in part because of their
resemblance to anti-enticement laws used in
the post-bellum U.S. South (see Section 17.1).
Still, Lavetti and Simon (2014) argue that U.S.
physicians actually benefit when they sign an
NCA. Such agreements prevent the doctors
themselves from holding up their employers (by
threatening to leave and take their patient base
with them). Eliminating this risk, according to
Lavetti and Simon, improves investment incen­
tives for both doctors and their employers, with
the result that doctors with NCAs are 27% more
productive, earn 14% higher wages, and have
much higher earnings growth than comparable
physicians without NCAs.
franchise or starting a business partnership). Specifically, if you are consider­
ing entering this type of relationship, you should first anticipate the future bar­
gaining power of your partner. Once you’re in a relationship that you’ve both
invested in, your partner will have a greater ability to inflict economic pain
on you than that person does now. Second, if possible, try to secure clear cost
and revenue sharing agreements in advance so these can’t become objects of
negotiation later. Finally, planning relationships like these will proceed more
smoothly if you can also put yourself in your partner’s shoes. Specifically,
understand your partner’s own legitimate concerns about future vulnerability.
Your partner, too, has a right to be concerned about how you will use your
future bargaining power; so don’t be insulted if that person, too, asks for some
things to be spelled out up front. Keeping these three simple principles in mind
may help you navigate the challenging world of relationship-specific business
investments a little better.
 19.5   Costs and Benefits of Multiskilling
So far in this chapter we’ve worked out when it makes economic sense for a
worker to invest in learning a particular skill, and we’ve worked out who should
pay for training depending on the type of skill that’s acquired. One question we
haven’t yet addressed is how broadly workers should be trained. In some jobs
and workplaces, such as traditional assembly lines or the telephone sales work­
ers in Section 7.1’s CTrip study, workers are trained very narrowly—they learn
one basic task and perform it repeatedly. Other companies train even entry-level
workers in a wide variety of skills, sometimes deliberately rotating workers


<!-- pdf p. 357 -->
336 
  CHAPTER 19  Training
into different parts of the company just to familiarize them with a variety of
tasks. Whereas the costs of all this additional training are obvious, are there
some important offsetting benefits that might explain why some firms choose
to multiskill?
In an insightful article on Japanese HRM practices, Lorne Carmichael and
Bentley Macleod (1993) argue that a policy of multiskilling one’s workers is well
matched to workplaces where continuous process innovation is important.
DEFINITION 19.5
Continuous process innovation refers to productivity-improving changes in the
way things are done in a workplace that do not involve changes in physical capital,
information technology, or replacement of workers. Continuous process innova­
tion involves fine-tuning machines, procedures, and work organization; is usually
gradual; and often results from employee actions or suggestions because employ­
ees are the most likely people to see day-to-day sources of inefficiency and to see
simple ways they might be eliminated.
Although the idea of continuous process innovation originated in manufacturing,
it applies to all workplaces. Any employee idea for making things work better,
faster, or smoother with existing resources (including things like changing the
workflow in a virtual office, or suggesting a more effective way to engage with
customers) is a type of process innovation.
Why, according to Carmichael and Macleod (1993), is multiskilling espe­
cially useful in this context? To see this, consider a worker who knows how to
perform only one narrow task in a company and who has just noticed a way to ac­
complish the task with fewer hours or workers. What are that worker’s incentives
to tell the employer about this idea? Although the worker might be rewarded for
doing so, there is also a danger that that worker will be put out of a job because
the one thing that person knows how to do is no longer in such high demand. And
while an employer might promise to reward the worker’s idea, it is not unreason­
able to expect narrowly trained workers to be skeptical of such promises. If they
are, they’ll be reluctant to share information about labor-saving improvements
when their own labor is being saved. So, how can a firm credibly convince its
workers that their jobs will not be in danger if they suggest or make labor-saving
changes in work organization?
According to Carmichael and Macleod (1993), Japanese manufacturing firms
solved this problem decades ago via an explicit multiskilling strategy. Even though
it was costly and time-consuming, new employees were regularly rotated through
a variety of positions and divisions, acquiring a wide range of skills early in their
careers. Secure in the knowledge that even if they completely eliminated their
current job, there would be many other things they could do in the firm, work­
ers were not only more willing to share labor-saving ideas, they would simply
go ahead and implement them. In fact, many of these companies facilitated this
type of employee innovation by providing paid work time for employees to con­
sult with each other about ways to improve operations. According to the authors,


<!-- pdf p. 358 -->
Chapter Summary    337
multiskilling also made workers more willing to embrace new technologies that
were introduced by the company. Firms that practiced multiskilling, according
to Carmichael and Macleod, also made important, public commitments to give
their workers long-term job security. As suggested by Result 19.2, this security
then resulted in an increase in workers’ willingness to invest in firm-specific
skills.11 Perhaps paradoxically (and at odds with the ideas of Section 19.4), guar­
anteeing workers job security can create a virtuous circle that raises workers’
productivity!
DEFINITION 19.6
Japan’s New HRM paradigm refers to a system of management that combines job
security, multiskilling, ongoing worker-initiated process innovation, high voluntary
investments in firm-specific skills, and a high level of worker acceptance of techno­
logical change. This “new” paradigm is widely credited with Japan’s victory over
U.S. automakers in the 1970s and 1980s.
   Chapter Summary
■ In general, the payoffs to investments in training increase with the length of
the period over which the returns to training can be reaped, with the prob­
ability the worker remains in the labor market (for general training), and
with the probability the worker remains in the current firm (for firm-specific
training).
■ In general, the payoffs to investments in training decrease with the direct
and opportunity costs of training, with the interest rate, and with the length
of the training period.
■ According to Becker’s (1964) model, firms should never pay for workers’
general training, whereas firms and workers should split the costs and ben­
efits from firm-specific training.
■ The fact that many firms do pay for their workers to attend college (a gen­
eral skill), may be explained by a number of considerations not included in
Becker’s model, including the use of tuition assistance plans as a selection
device to retain high-quality workers (Cappelli, 2004).
11 My favorite example of these skills is the father of a coauthor of mine who spent his entire career
in the Toyota research department perfecting their formula for beige paint! Could you imagine
investing in such a firm-specific skill if your job was not secure?


<!-- pdf p. 359 -->
338 
  CHAPTER 19  Training
■ The holdup problem arises when parties to a relationship-specific investment
(like firm-specific training) bargain over the rents created by that investment
after it has been made. If workers expect this type of bargaining to occur,
they may be reluctant to make firm-specific investments. This may be an
especially important consideration for employee innovators.
   Discussion Questions
	 1.	 In contrast to Chapters 13 and 18 which identified some costs of EPLs, this
chapter suggests at least two reasons why EPLs (or a commitment by a firm
to provide job security) might raise worker productivity. What are those two
reasons? Based on all their potential costs and benefits, under what condi­
tions do you think EPLs are most likely to be harmful? When are they more
likely be beneficial?
	 2.	 What is the last time you thought of a way to make things work better or more
smoothly at your workplace? Did you share this idea with your employer or
co-workers? Why or why not? What changes in your workplace might make
you more willing to share efficiency-improving or labor-saving ideas with
your employer?
	 3.	 Does your employer assist some of its workers with the costs of college
tuition, or with other forms of education or training that take place outside
the workplace? How can workers qualify for such assistance—is there a
formal process or are decisions made on a case-by-case basis? Are workers
expected to remain with the firm after training is complete? Drawing on the
discussion in this chapter, explain why you think your employer has chosen
its policy.
   Suggestions for Further Reading
If you are interested in how U.S. labor law restricts firms’ abilities to dismiss and
lay off workers, MacLeod and Nakavachara (2007) provide a detailed and deep
discussion. Cappelli’s (2004) paper on why employers pay for college is a very
readable and insightful update on Becker’s classic discussion.
   References
Acharya, V. V., Baghai, R. P., & Subramanian, K. V. (2013). Labor laws and in­
novation. Journal of Law and Economics, 56, 997–1037.
Acharya, V. V., Baghai, R. P., & Subramanian, K. V. (2014). Wrongful discharge
laws and innovation. Review of Financial Studies, 27, 301–346.


<!-- pdf p. 360 -->
References    339
Anderhub, V., Königstein, M., & Kübler, D. (2003). Long-term work contracts
versus sequential spot markets: experimental evidence on firm-specific invest­
ment. Labour Economics, 10(4), 407–425.
Becker, G. S. (1964). Human capital. Chicago: University of Chicago Press.
Cappelli, P. (2004). Why do employers pay for college? Journal of Economet­
rics, 121(1), 213–241.
Carmichael, H. L., & MacLeod, W. B. (1993). Multiskilling, technical change
and the Japanese firm. Economic Journal, 103(416), 142–160.
Chiswick, B. R., & Miller, P. W. (2014). International migration and the econom­
ics of language. In B. Chiswick & P. Miller (Eds.), Handbook on the Econom­
ics of International Migration: The Immigrants (pp. 211–269). Amsterdam,
Netherlands: Elsevier.
Gathmann, C., & Schoenberg, U. (2010). How general is human capital? A task-
based approach. Journal of Labor Economics, 28, 1–49.
Grout, P. A. (1984). Investment and wages in the absence of binding contracts:
A Nash bargaining approach. Econometrica: Journal of the Econometric So­
ciety, 449–460.
Hall, R. E., & Lazear, E. P. (1984). The excess sensitivity of layoffs and quits to
demand. Journal of Labor Economics, 2(2), 233–257.
Hashimoto, M., & Yu, B. T. (1980). Specific capital, employment contracts, and
wage rigidity. Bell Journal of Economics, 536–549.
Hoffman, M. & Burks, S. V. (2017). Training Contracts, Employee Turnover, and
the Returns from Firm-sponsored General Training (NBER Working Paper
No. 23247). Cambridge, MA: The National Bureau of Economic Research.
Kambourov, G., & Manovskii, I. (2009). Occupational specificity of human capi­
tal. International Economic Review, 50, 63–115.
Kuhn, P., & Arthur Sweetman, L. (1999, October). Vulnerable seniors: Unions,
tenure, and wages following permanent job loss. Journal of Labor Economics,
17, 671–693.
Lavetti, K., & Simon, C. (2014). Buying loyalty: Theory and evidence from phy­
sicians. Working paper, Department of Economics, Ohio State University, Co­
lumbus, OH.
Lazear, E. (2009). Firm-specific human capital: A skill-weights approach. Jour­
nal of Political Economy, 117, 914–940.
MacLeod, W. B., & Malcomson, J. M. (1993). Investments, holdup, and the form
of market contracts. American Economic Review, 811–837.
MacLeod, W. B., & Nakavachara, V. (2007). Can wrongful discharge law en­
hance employment? Economic Journal, 117(521), F218–F278.


<!-- pdf p. 361 -->
340 
  CHAPTER 19  Training
Neal, D. (1995). Industry-specific capital: Evidence from displaced workers.
Journal of Labor Economics, 13, 653–677.
Parent, D. (2000). Industry-specific capital and the wage profile: Evidence from
the National Longitudinal Survey of Youth and the Panel Study of Income
Dynamics. Journal of Labor Economics, 18, 306–323.
Poletaev, M., & Robinson, C. (2008). Human capital specificity: Evidence from
the Dictionary of Occupational Titles and displaced worker surveys, 1984–
2000. Journal of Labor Economics, 26, 387–420.
Starbucks. (n.d.). Starbucks College Achievement Plan. Retrieved January 29,
2015, from https://www.starbucks.com/careers/college-plan


<!-- pdf p. 362 -->
­341
Part 4
Competition in the Workplace:
The Economics of Relative
Rewards
In many aspects of life, people are evaluated and rewarded not just for their
absolute performance but on their performance relative to others. Exam­
ples include students who are “graded on a curve,” students competing for
a fixed number of slots on entrance exams like China’s gaokao or Korea’s
CSAT, research teams competing to submit a patent, sports teams compet­
ing for a championship, crowdsourcing of ideas or innovations, or any situ­
ation where workers are assessed and rewarded relative to their co-workers.
In workplaces, one of the most common situations where relative perfor­
mance matters is when workers in a given job category compete against
each other for promotion to a limited number of higher-ranked positions.
Another would be competition for lump sum cash bonuses or prizes that
are awarded only to the top performer(s) in a group. Economists refer to
competitions for a fixed number of prizes as tournaments. But other forms
of relative rewards can also be important in workplaces. These include
situations where a manager is given a fixed total budget for merit pay and
has to divide it among all the employees in the division, the stack ranking
(or “rank and yank”) system famously advocated by Jack Welch (former
­General Electric CEO), and indeed any rating or reward system that com­
pares workers to each other.


<!-- pdf p. 363 -->
In this part, we’ll study all these reward schemes. We start by developing
a simple economic model of a tournament between employees for a fixed
prize (which could be either a bonus or a promotion). We then apply the
theoretical insights from this model to a number of real-world uses of rela­
tive performance evaluation, ranging from contract farming to the pay of
mutual fund managers and professional golfers. In doing so, we’ll address
the following questions: What are the intended and unintended effects of
relative reward schemes on worker behavior? What is the optimal structure
of a relative reward scheme (e.g., how big should the prize be in a tourna­
ment, and should there be more than one prize)? When should firms use
relative rewards, and when are they a bad idea?
Overall, we’ll learn that relative reward schemes have some important ben­
efits, such as economizing on employee evaluation and insulating workers
from certain types of risks, but also some key pitfalls, such as reducing
workers’ incentives to cooperate with each other and incentivizing some
workers to take excessive risks. Understanding these costs and benefits pro­
vides useful guidelines for when relative pay is likely to be a good or a bad
idea in a particular work setting.
342 
  PART 4  Competition in the Workplace: The Economics of Relative Rewards
