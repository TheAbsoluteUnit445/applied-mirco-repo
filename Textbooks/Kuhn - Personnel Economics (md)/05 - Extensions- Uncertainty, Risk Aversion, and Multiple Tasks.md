# Chapter 5: Extensions: Uncertainty, Risk Aversion, and Multiple Tasks

_Source: `Personnel Economics.pdf`, PDF pages 59-87. Page markers below are PDF page numbers._


<!-- pdf p. 59 -->
­38
Extensions: Uncertainty,
Risk Aversion,
and Multiple Tasks
5
In the analysis we’ve done so far, we’ve made a lot of assumptions, and we’ve
reached two strong conclusions: Specifically, the optimal b is 100%, and the
optimal a is less than or equal to zero. Some of these assumptions were made
just for convenience—to simplify the math—whereas others really matter.
Changing those assumptions could dramatically change the nature of the opti­
mal contract.  In Chapter 5, we’ll start by going over all the assumptions we’ve
made so far and work out which ones matter for our two key results (a ≤ 0
and b = 1) and which ones don’t. We’ll then spend some time studying how
the model’s predictions change when some of its key assumptions are relaxed.
Finally, we’ll look at some real-life examples of what happens when those as­
sumptions don’t apply.
 5.1   Which Assumptions Matter? Which Ones Don’t?
Let’s start with a list of assumptions we’ve made just for convenience. They sim­
plify the math without changing the main result that b = 1 and a ≤ 0.
	 1.	 The production function is linear: Q = E in the baseline case, and Q = dE
in our more general case.
Notice that this production function assumes there are no diminishing returns
to the agent’s effort, which may not be realistic. But adding diminishing returns
would just add a little algebra and not change the result. As a matter of fact, we
could change this production function to almost any increasing function, Q(E),
and still get both our main results: b = 1 and a ≤ 0.
	 2.	 The cost-of-effort function is quadratic: V(E) = E2/2 in our baseline case.


<!-- pdf p. 60 -->
5.1  Which Assumptions Matter? Which Ones Don’t?    39
We used this quadratic function to derive all the results in Chapters 3 and 4. Re­
laxing this assumption doesn’t change our results: All we need is for V(E) to be
increasing, eventually at an increasing rate.
	 3.	 The contract is linear, Y = a + bQ.
As it turns out, even if we allow the firm to pick any Y(Q) function, if agents are
fully rational, the firm can’t do any better than with the optimal linear Y(Q).1 That
said, firms sometimes use nonlinear incentive schemes, like lump sum bonuses
for attaining a certain target, for reasons we discuss in elsewhere in the book
(e.g., they may provide useful focal points for agents [Section 10.4] or help to
coordinate a team [Section 24.4]). We’ll discuss some complications raised by
these nonlinear incentives in Section 5.6.
	 4.	 There is no uncertainty in the production process.
We have assumed, without discussing it much, that if the agent picks a given
effort level E, both the agent and the firm know exactly how well he is going to
perform his task, Q. In reality, of course, luck matters: Sometimes a bad outcome
occurs even when the agent works hard (e.g., the rare event of bad weather on the
UCSB campus could occur, so very few burritos are sold); sometimes even lazy
workers get lucky and do well.
So it might be more realistic to write the production function as Q = dE + ε,
where ε is a random variable whose realization isn’t known when the contract is
being agreed on. Perhaps surprisingly, making this change doesn’t alter our main
results (b = 1 and a ≤ 0) either, under one very important condition: The agent
needs to be risk neutral. If that is the case, whenever Q appears in our algebra,
we can simply replace it with its expected value, and all the same results continue
to go through.
	 5.	 The agent produces a single type of output.
Again without any discussion, we have created a caricature of a “job” by imagining
that our principal cares only about one summary measure of what the agent does:
How much “Q” does he produce? But it’s hard to think of very many jobs that
are even close to that simple: Even a McDonald’s server needs not only to serve
customers quickly but also to get the order right, smile, flip the burgers at the right
time, prevent grease fires, and make change correctly (just for starters). As it turns
out, this isn’t a problem at all for our model if the principal is able to separately ob­
serve the agent’s performance on every one of the tasks he is asked to perform and
to base the agent’s reward on his performance in every one of the tasks. Thus, for
example, a comprehensive, multidimensional performance review could be a way
of implementing the optimal incentive plan derived in this chapter. Essentially, this
review could let the principal set b = 1 on every task the agent performs.
1 For a demonstration of this result in a much more general context, see Holmstrom and Milgrom
(1987).


<!-- pdf p. 61 -->
40 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
	 6.	 There’s only one agent.
If agents don’t interact with each other in the production process, then nothing is
really lost by thinking about a principal’s interactions with each of several agents
in isolation from one another. A consumer hiring a lawyer to sue a store for
negligence and a contractor to renovate her kitchen can probably write separate
contracts with each of these people along the lines we have discussed already
without thinking about how they relate to each other. The same may be true of
FedEx Ground, which writes individual incentive contracts with each of its driv­
ers linking their pay to their performance.
And now here are five assumptions that really do matter. We’ll explore the first
two later in this chapter. The third and fourth assumptions are studied in Parts
4 and 5 of this book, which study tournaments and teams, respectively. We en­
counter the fifth at many points in the book because repeated interactions are an
important feature of virtually all principal–agent interactions.
	 1.	 Adding uncertainty and risk aversion together.
If there is uncertainty in the production process and the agent is risk averse, the
optimal contract may no longer have a 100% piece rate. It is also possible that the
optimal level of a is positive. The reason, as we’ll show in the following, is that
a 100% piece rate could expose the agent to a great deal of risk. For example,
a residential solar energy salesperson paid on a pure 100% commission basis
could see his income go from many thousands of dollars in one quarter to a nega­
tive amount (if they pay for the job and/or cover their own costs) in another. If
principals are less risk averse than agents, they might be wise to absorb some of
this risk themselves rather than pass it on to workers. As we’ll show, bundling
a little insurance into the employment contract might actually raise the firm’s
profits by allowing it to pay workers a lower (but more predictable) level of total
compensation.
	 2.	 Adding multiple tasks and partial observability together.
Although (as noted) multiple tasks per se do not change the main results from
this section, things can get very different if the principal cares about multiple
things the agent does, but the principal cannot measure (and hence reward) the
agent’s performance on some of the tasks he does. An oft-discussed example is
the case of teachers: Although it may be easy to reward some aspects of teachers’
performance by tying teacher pay to students’ test scores, there may be other,
less tangible aspects of “what teachers do” that parents and schools care about
but can’t measure reliably. Such activities might include teaching “soft skills,”
such as communication and leadership that are harder to measure, and mentoring
students more generally. Cases like these are referred to as multitask principal–
agent problems, and we will study them in Section 5.5. There, we’ll show that
weak incentives, or even no incentives (b = 0), might be the best policy.


<!-- pdf p. 62 -->
5.1  Which Assumptions Matter? Which Ones Don’t?    41
	 3.	 Involving the principal in the production process.
A crucial feature of the way we have set up our problem so far is that the only
party that takes an action after the contract is signed is the agent, who picks
effort at that time. But what if some things the principal does after the contract
is signed also affect the amount of output (Q) that is produced? For example, in
the hiring-a-lawyer example, the agent (lawyer) probably needs the principal’s
continued cooperation to mount an effective case. In this instance, the principal
probably needs to provide important information, documentation, and testimony
to help win the case. Similarly, the car salesman’s performance might depend
on the amount of advertising done by the owner of the dealership, or on how the
dealer maintains the premises. In both of these cases, it might be quite unwise
for the principal to “wash her hands” of responsibility for getting the job done by
effectively selling the job to the agent. Situations like these, where production de­
pends on the actions of more than one party after the contract is signed, are called
team production problems. As noted, we’ll study them in Part 5 of this book.
	 4.	 Multiple agents who interact in the production process.
Although having multiple agents per se doesn’t affect our analysis, that is not the
case when agents interact with each other in the production process. We’ll first
encounter such interactions in Section 10.7 when we examine workers’ concerns
with how they’re treated by the principal, compared to their coworkers. We’ll
then devote two entire parts of the book to study competitive interactions among
workers (Part 4 on tournaments) and cooperative interactions (Part 5 on teams).
	 5.	 Repeated interactions between principals and agents.
Although we have focused so far on a one-shot interaction between a princi­
pal and agent, most principal–agent interactions take place repeatedly and over
time, sometimes lasting for a worker’s entire career. Repeated interaction intro­
duces possibilities for workers and firms to react to each other in ways we haven’t
considered yet, such as punishing or rewarding each other for past actions and
acquiring reputations (e.g., for being a hard worker or a tough boss). Because
repeated interactions are so pervasive, we’ll study them at many points through­
out the rest of the book. The first time is later in this chapter when we discuss
the problem of timing gaming in Section 5.6. In the study of procrastination in
­Section 9.7, we’ll look at how workers allocate effort over time. In Chapter 10, we
study employment relationships as repeated “gift exchanges” (of effort and pay)
between workers and firms. Investments that firms make in workers (that pay off
later) come up in our study of hiring risky workers ­(Chapter 13), recruiting and
screening workers (Chapters 14 and 15, respectively), and training (Chapter 19).
Selection and incentive effects of how workers’ pay levels change over time are
treated in Sections 15.4 and 18.3 respectively, and workers’ advancement through
multistage promotion ladders in Section 22.4. Finally, we look at how workers
discipline their teammates for their past actions in Section 25.1.


<!-- pdf p. 63 -->
42 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
 5.2   Uncertainty and Risk Aversion:
State-Contingent Contracts
Suppose that instead of Q = dE, our production function takes the form

Q = dE + ε,
(5.1)
where ε is a random variable with a mean of zero. The idea of ε is to capture a
wide array of possible unpredictable events in the production process that are
outside both the agent’s and principal’s control. For example, the profitability of
a wide array of activities (including farming, retail, ski resorts, construction, and
golf clubs) is affected by the weather. Indeed, weather plays such a large role in
many economic outcomes that it’s common to refer to the realization of ε as the
“state of nature.”2 Fluctuations in the local, national, or international economies
can have an even more widespread effect on an individual worker’s capacity to
generate revenues for his or her employer. And of course there’s just plain luck:
one hundred medical researchers searching for a new antibiotic might all work
equally hard trying out different formulations more or less at random, but only
one researcher might find a formula that works.
Because piece rates tie a worker’s pay to performance, using a 100% piece
rate when there’s a lot of uncertainty in the production process could expose the
agent to a lot of income risk.3 Of course, if the agent is risk neutral, this is not
a problem: a ≤ 0 and b = 1 is still the optimal contract. But if workers are risk
averse and firms are risk neutral (or at least less risk averse than workers), the
best contract from both the firm’s and the worker’s point of view may be for the
firm to build some insurance into the employment contract. The way this works,
and whether it requires the firm to reduce the commission rate below 100%,
depends on whether it’s possible to measure the state of nature with sufficient
objectivity that it can be written into the employment contract.
In the rest of this section, we’ll consider what happens when the answer to
this question is “yes”; this is the case of state-contingent contracts. We’ll consider
non-contingent contracts in Section 5.3. In both cases, we’ll abstain from deriv­
ing the optimal contracts mathematically (by now you should have a pretty good
idea of how this might go); I’ll just tell you what they look like.4
Imagine a car dealership with a loyal, experienced sales force. And imagine
also that there’s an objective, reliable indicator of whether the current month is
an easy or a hard month in which to sell cars. More specifically, imagine (just
to simplify the exposition) that the state of nature, ε, can take only two possible
values—εg and εb—with εg > εb, and g and b denoting good and bad times, re­
spectively. So, in good times, a salesperson’s performance is Q = dE + εg; and
2 Air pollution can also have unpredictable effects on workers’ productivity. For recent evidence, see
Graff Zivin and Neidell (2012).
3 Because Y = a + bQ, Equation 5.1 implies that Y = a + b(dE + ε). Thus, if ε is highly variable
and b is high, a worker’s pay could fluctuate dramatically due to factors like weather or business
conditions that are outside the worker’s control.
4 Readers interested in more detail should look at Harris and Raviv (1978).


<!-- pdf p. 64 -->
5.2   Uncertainty and Risk Aversion: State-Contingent Contracts     43
in bad times, Q = dE + εb: An agent working equally hard sells more in good
times than in bad. The dealership’s salespeople are risk averse, but (at least to a
first approximation) the owner is risk neutral. This may be because the dealer­
ship (due to its size) has better access to capital and insurance markets than an
individual worker or simply because the dealer has more wealth with which to
cushion month-to-month economic fluctuations.
Now suppose it is possible to write and enforce employment contracts be­
tween firms and workers that explicitly depend on the state of nature. Instead
of stipulating a single ordered pair (a, b), such state-contingent contracts can
stipulate, if desired, a different a and b for each possible state of nature. In our
current example, this means that the contract now consists of two ordered pairs:
(ab, bb) and (ag, bg). In other words, the contract can have a different intercept, and
a different slope, in good times versus bad times.
As it turns out, the best state-contingent contract when firms are risk neutral
and workers are risk averse has a 100% commission rate in both good and bad
times (bb = bg = 1), but a higher (i.e., less negative) intercept in bad times than
good, that is, ab > ag. It is even possible to have ab > 0 if bad times are particu­
larly bad, but the expected level of a must still be negative if the dealership is to
earn any profits. The optimal pay schedules in the two different states of nature
are illustrated in Figure 5.1.
The optimal state-contingent contract gives agents some stability in their
take-home pay by giving workers a higher pay intercept in bad times. Because
this insurance is provided purely through the intercept of the reward schedule, it
is possible to preserve the agents’ 100% marginal incentives by keeping the slope
of the pay schedule at 100% in both good and bad times. Finally, recall from
Figure 3.4 that, instead of explicitly paying for the right to sell cars each month
(the way taxi drivers pay up front each week to drive a cab), salespeople may im­
plicitly pay for this right by needing to sell a minimum “target” number of cars
to qualify for the (100%) incentive pay system. If this is the way the dealership
Y = ab + Q in bad times
Y = ag + Q in good times
Sales (Q)
Target in bad times
Target in good times
“draw”
ag
ab
FIGURE 5.1. The Optimal State-Contingent Contract for Risk-Averse Workers


<!-- pdf p. 65 -->
44 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
works, the scheme in Figure 5.1 (with ab > ag) can also be implemented by keep­
ing the salesperson’s “draw” the same in good and bad times but raising his sales
target in good times (relative to bad times), as shown. Thus, by raising the stan­
dards workers need to meet to qualify for incentive pay in good times, firms can
insure workers without compromising incentives.
  RESULT 5.1
The Profit-Maximizing, State-Contingent Contract for Risk-Averse
Workers
If firms are risk neutral, workers are risk averse, and the employment contract can
be explicitly indexed to the state of nature, the profit-maximizing contract sets
b = 1 in all states, but insures workers by offering a higher intercept (a) in worse
states of nature. Now, the optimal a could be positive in some states.
 5.3   Optimal Non-Contingent Contracts
If we can’t write the state of nature into the employment contract (or, more
likely, we choose not to because we can’t measure the effects of nature very
accurately), it is no longer possible to offer agents a payment (a) that depends
explicitly on whether times are good or bad. All we can do is to design a single
“one-size-fits-all” (or non-contingent) compensation schedule a + bQ that ap­
plies to all possible states of nature. We won’t solve this problem explicitly
here, but the solution is pretty intuitive.5 Specifically, it has four key features,
described in Result 5.2.
  RESULT 5.2
The Profit-Maximizing, Non-Contingent Contract for Risk-Averse
Workers
If firms are risk neutral, workers are risk averse, and the employment contract
cannot be indexed to the state of nature, the profit-maximizing contract has the
following features:
1. The optimal commission rate, b, is now less than 1.
2. The optimal commission rate declines as the amount of uncertainty in the pro-
duction process (i.e., as the variance of ε, or simply the difference between εg
and εb) rises.
3. The optimal commission rate declines as the worker’s level of risk aversion rises.
4. For sufficiently high levels of uncertainty or risk aversion, the optimal a can be
positive.
5 Interested readers should again consult Harris and Raviv (1978).


<!-- pdf p. 66 -->
5.3   Optimal Non-Contingent Contracts    45
Intuitively, because firms are (by assumption) less risk averse than work­
ers, there are still potential gains from trade if the firm insures workers against
fluctuations in their income between states. But now the only way to do this is by
blunting the incentives in the contract (i.e., reducing b). The optimal b, instead of
only incentivizing workers, now has to trade off two objectives: incentives versus
insurance. The more uncertain the world is, and the more workers value predict­
ability in their earnings stream, the lower the optimal b will be. Thus, medical
researchers searching for a new drug are typically paid a very stable salary, even
though their output is highly uncertain. The same is true of development officers,
who might bring in only a few thousand dollars in donations in some years and
many millions in the next.6
6 There may be other more important reasons (than employee risk aversion) for the lack of incentive
pay for development officers. Indeed, the Council for Advancement and Support of Education (2016)
strongly recommends against incentive pay, in part to avoid encouraging “inappropriate conduct
by fundraisers anxious to secure gifts at any cost.” Major gifts, which often require long-term
cultivation, could be jeopardized by fundraisers seeking a swift donor response to benefit their
own personal compensation goals. We discuss these types of reasons for avoiding incentive pay in
Section 5.5, where we study multitask principal–agent problems.
The Principal–Agent Problem and the Economics of Insurance
If you have studied the economics of insurance
(or if you recall the debate during the Great Re­
cession about whether the government should
bail out insolvent banks), you have probably
heard the term “moral hazard.” Moral hazard
refers to the fact that insuring someone changes
that person’s incentives to avoid the loss they
are insured against. For example, having gener­
ous car insurance might induce drivers to take
more chances on the road, to be less consistent
about locking their parked car, or to be less con­
sistent with their car maintenance.
You might be surprised to learn, though, that
the mathematics behind Result 5.2 are in fact
identical to the mathematics of moral hazard
in insurance. To see this, return to our example
of car insurance, where the insurance company
and the driver take the roles of the principal and
agent, respectively, in this book. Just like our
principal, the insurance company is hoping to
make money by protecting its customers from
fluctuations in their wealth (in this case the
value of their car). And just like our agent, the
insurance customer chooses an action (care)
that has a direct effect on the amount of wealth
that is available.
Although it might be desirable to offer both
the worker and the car driver complete protec­
tion against possible losses, this is impractical
in the worker’s case because it destroys work
incentives, and in the car insurance case be­
cause it reduces the incentives to take care (i.e.,
it creates moral hazard). Thus, in both cases,
the optimal non-contingent contract has to trade
off insurance versus incentives. In the worker’s
case, generous insurance (low b) blunts work
incentives. In the car insurance case, generous
insurance (in the form low of deductibles and
low levels of coinsurance) blunts the customer’s
incentives to avoid having a loss. The optimal
contract, in both cases, provides some insurance
(b < 1), but less than full insurance (b > 0).


<!-- pdf p. 67 -->
46 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
Importantly, note that offering insurance to risk-averse workers doesn’t
lower the firm’s profits. In fact, if the contract offered to workers gives them
their alternative utility level, Ualt, firms who are smart enough to offer insurance
to their workers will make more profits than firms who don’t because they can
attract workers at a lower wage than the firms whose pay is more unpredictable.
This benefit to firms occurs while keeping the workers at least as happy as they
were before, so providing insurance to risk averse workers yields a net welfare
gain to society.
 5.4   Evidence on the Insurance-Incentives Trade-off:
Sharecropping in the South
Is there any empirical support for Result 5.2’s prediction that optimal agency con­
tracts should provide more insurance when the production process is subject to
greater uncertainty? One source of evidence comes from a study of agricultural
contracts in the postbellum South (Higgs, 1973). To see this, think of a principal
(landowner) hiring an agent (worker) to farm land owned by the principal. The
main contract types the principal might consider are the following:
	1.
Pure wage labor (b = 0): Pay the worker a fixed amount per hour (or week,
or season) worked, regardless of the amount of corn or cotton that is har­
vested. Although it gives the worker no cash incentives to increase farm
output, this contract exposes the worker to very little risk from factors, such
as the weather, which influence crop yields.
	2.	 Share contracts (0 < b < 1): Here, the agent’s pay is a share, b, of the crops
he grows in a season. Just as in our model, the principal gets whatever is not
paid to the agent (1 – b). There is of course an infinite number of possible
share contracts depending on the value of b, although in practice most con­
tracts used very simple fractions such as a half or a third. Higher levels of b
give the agent stronger incentives but expose him to more risk.
	3.	 Rental contract (b = 1): Here, the landowner simply rents the land to the
agent for a fixed dollar amount for the season (a ≤ 0, just like the taxi driver
rents the car for the week). The agent keeps the entire crop. Here, both risk
and incentives are high. For ex-slaves with little or no assets to fall back on,
being exposed to this much income risk may have been highly unattractive
and could even expose them to the threat of starvation if the weather is bad.
Prior to conducting his study, Higgs (1973) collected data on the year-to-year
variation in corn and cotton yields in hundreds of Southern counties. He found
that due to differences in weather patterns, agricultural production was much
more uncertain in some counties than others, and these patterns in “unpredict­
ability” were different for corn and cotton. Higgs then went on to ask which
types of contracts were used for which crops in which locations, finding two key


<!-- pdf p. 68 -->
5.5  Multitask Principal–Agent Problems    47
results. First, as the uncertainty in production went up, fewer pure rental con­
tracts (b = 1) were used, and more pure wage-labor contracts (b = 0) were used.
Thus, the overall mix of contract types shifted in the direction of contracts that
insure workers more and incentivize them less. Second, looking only within the
share contracts, as the uncertainty in production went up, the farmer’s share of
the output went down.
Did these patterns emerge because landowners in counties with unpredict­
able weather were worried about their workers’ well-being? This seems unlikely
given the tense race relations between white landowners and the many former
slaves who worked the land under the preceding contractual systems. Instead,
as our theory suggests, it is likely that landowners in unpredictable areas took
advantage of their greater wealth to bundle some insurance into the contracts
they offered, as the theory predicts. If the theory is correct, then landowners who
offered more insurance (e.g., a wage labor contract or a low share) should have
been able to extract a lower expected wage from their workers in return for this
predictability. Indeed, desperate former slaves may have been willing to make
big sacrifices in their expected level of compensation in return for greater pre­
dictability of their income.
 5.5   Multitask Principal–Agent Problems
Another important extension to our basic model is to ask how things change
when the principal has more than one task she’d like the agent to do at the same
time. Although workers in some jobs perform a single activity whose output can
be easily measured, most jobs are multidimensional. A professor, for example,
not only teaches but is also expected to conduct original research and to per­
form administrative tasks like admissions and faculty recruiting. Computer pro­
grammers and home renovators have to balance the goal of completing a project
on time with the goal of keeping quality high. Even salespeople, whose output
(sales) would seem to be one-dimensional, need to balance the gain from making
a quick sale against treating customers fairly and honestly to maintain the repu­
tation of the company. Indeed, simply behaving honestly could be viewed as an
important second aspect of almost any job and an aspect that principals may care
a lot about.
How do multiple tasks change the results from our basic principal–agent
model? If the principal can observe and reward the agent’s performance on all
aspects of the job, very little changes. In fact, you could just think of the agent as
holding multiple “mini” jobs simultaneously and being rewarded optimally for
each task. At the end of each year, for example, a professor might receive sepa­
rate bonuses for her research, teaching, and administrative performance. And
according to the basic model, her incentives should be high powered (b = 1) on
every aspect of the job unless employee risk aversion plays a major role. Indeed,
a central component of employee performance management systems, like the
Balanced Scorecard system or 360 Degree Feedback, is to evaluate employees’
performance in highly multidimensional jobs.


<!-- pdf p. 69 -->
48 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
Problems arise, however, when some aspects of a job that matter a lot to the
employer cannot be measured well, or at all. In these cases, the optimal incen­
tive scheme can change dramatically because incentivizing the tasks you can
measure leads rational agents to emphasize those tasks, while neglecting the
non-incentivized tasks. The consequences of incentivizing some but not all of a
worker’s tasks range from the amusing to the disastrous.
Incentive Problems in Multitask Environments: Some Examples
On the amusing end of the spectrum, consider the case of Ken O’Brien, an NFL
quarterback in the 1980s. O’Brien had a reputation for throwing too many in­
terceptions. To correct this problem, one of his contracts included a financial
penalty for every interception thrown. The result ended up being even worse
for the team because he simply stopped throwing the ball! And have you ever
wondered why Charles Dickens’s books sometimes seem to wander, going off
on tangents unrelated to the main story line? The reason may lie in the structure
of his contracts with his publishers, which had a very specific format. Dickens
was paid one shilling for every installment (which was published monthly). Each
installment contained 32 pages of text, two illustrations, and various advertise­
ments. Thus Dickens was paid to produce a certain number of pages of text each
month, which incentivized him to “fill up” every installment with sufficient text,
whether it contributed to the overall quality of the novel or not.7
In the “important, but not quite disastrous” category, Griffith and Neely’s
(2009) study of a leading UK distributor of heating and plumbing products found
that (inadvertently) incentivizing only part of a job led to inefficient behavior. At
this company, individual pay depended (in part) on profits at each local branch
office. How did workers respond? In addition to trying harder to serve the needs
of their existing customers, salespeople also worked hard to “steal” business from
other branches of their own company. In addition, branch managers emphasized
short-term profits at expense of longer term customer loyalty and satisfaction, for
example, by encouraging workers to “upsell” customers into items they didn’t
really need.
In five factories in China’s Fujian province (producing GPS devices, alarm
devices, and clocks), Hong, Hossain, List, and Tanaka (2013) studied the effects
of introducing strong cash incentives, worth about 40% of a worker’s base pay,
for extra units of output produced. For workers who previously faced no cash
incentives, these led to a huge (50%) increase in the number of units produced.
Output quality, however, which was not explicitly incentivized, fell dramatically:
The defect rate on items that were (randomly) inspected increased by 97%!
Finally, in this category, Jacob and Levitt (2003) looked at how Chicago
teachers responded to the introduction of high-powered incentives. Specifically,
a standardized test of student achievement (the Iowa Test of Basic Skills), which
was previously used only for informational purposes, became the basis for putting
7 For more details, see University of California, Santa Cruz, The Dickens Project, Was Dickens
Really Paid by the Word? Retrieved from https://dickens.ucsc.edu/resources/faq/by-the-word.html.


<!-- pdf p. 70 -->
5.5  Multitask Principal–Agent Problems    49
schools “on probation.” Schools were automatically put on probation if less than
15% of their students scored at or above national norms on the test. Probation
schools that didn’t exhibit sufficient improvement could be closed, with their staff
being dismissed or reassigned.
As other studies have shown (e.g., Jacob, 2003; Figlio & Getzler, 2006),
high-stakes testing might have several undesirable side effects, such as neglect­
ing nontested areas (“teaching to the test”) or shifting low-performing students
out of the classroom into special education. Jacob and Levitt (2003), however,
focus on another side effect: cheating by teachers. Perhaps shockingly, in at least
4%–5% of classrooms subject to high-stakes testing, answer patterns on tests
revealed that some form of cheating by teachers or administrators must have
occurred. Possible mechanisms include changing student responses on answer
sheets, providing correct answers to students, or illegitimately obtaining copies
of an exam prior to the test date. Clearly, these responses by teachers did not
serve the incentives’ goal of raising student achievement.
Finally, on the disastrous side, between 2011 and 2015, Wells Fargo Bank
(one of the largest in the United States) relentlessly pursued an internal goal of
selling at least eight financial products to each customer, an initiative the com­
pany called the “Gr-eight initiative.” Reportedly, managers and workers were
under tremendous pressure (in terms of job security, raises, and advancement)
to sell additional products (internally referred to as “solutions”) to their existing
customers, a practice also known as cross-selling. According to a lawsuit filed by
Los Angeles against Wells Fargo in May 2015, some Wells Fargo district manag­
ers pushed these goals by discussing daily sales for each branch and employee
“four times a day, at 11 am, 1 pm, 3 pm and 5 pm” (Egan, 2016, September 9).
To meet these stringent goals, as you might expect, employees (sometimes at
the behest of their managers) engaged in practices that neglected another impor­
tant dimension of the job: honesty and the company’s long-run reputation. Accord­
ing to a consulting firm hired by Wells Fargo, these practices included opening
over 1.5 million deposit accounts without a customer’s permission and submitting
applications for 565,443 credit card accounts without the customer’s knowledge
or consent (Egan, 2016, September 8). Another practice was internally called
“pinning,” in which an employee issued ATM cards and assigned PIN numbers
to customers without their authorization. According to the Los Angeles lawsuit,
employees would impersonate their customers and “input false generic email ad­
dresses such as 1234@wellsfargo.com, noname@wellsfargo.com, or none@wells­
fargo.com to ensure the transaction is completed” (Egan, 2016, September 9).
What were the consequences for the company? During the month of Sep­
tember 2016, when this news became public, Wells Fargo’s stock lost 12.8% of
its value. Wells Fargo agreed to pay penalties of $185 million; and its longtime
CEO, John Stumpf, was forced to retire. Wells Fargo scrapped its controversial
“Gr-eight” sales goals on October 1, 2016. All in all, 5,300 workers were eventu­
ally fired for dishonest behavior, and morale at the company since the scandal
has been described as “toxic.” According to a Wells Fargo mortgage consultant,
customers now assume “Wells is scamming them.” The consultant was taking
Xanax to control his panic attacks and said, “It’s beyond embarrassing to admit


<!-- pdf p. 71 -->
50 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
I am a current employee these days. My family and friends think I’m a fraud for
working at Wells” (Egan, 2016, November 3).
Did Excessive Incentives Cause the Great Recession?
The Countrywide Case
In October 2008, the U.S. and international financial systems almost collapsed
when major financial institutions were forced to acknowledge that a large share
of their assets—specifically, mortgage-backed securities—were worthless. The
ensuing collapse of the real economy is now known as the Great Recession and
is widely acknowledged to be the worst downturn in the U.S. economy since the
Great Depression of the 1930s.
The story of how the world’s major financial institutions acquired so many
worthless assets is a long one and is well told in several easy-to-watch documen­
taries, such as The Big Short and Inside Job. Interestingly, from the point of view
of Personnel Economics, high levels of employee incentive pay at various points
in the system may have played a contributing role. To see this, we consider the
case of Countrywide Financial Corporation. Countrywide was a mortgage origi­
nator, that is, a company that markets mortgages to the general public. Although
a relatively small player in this market in the 1990s, Countrywide grew rapidly to
have the largest share of the market in the United States (15.5%) by 2007. During
this period of rapid expansion, Countrywide relied heavily on incentive pay for
its originators, with incentive pay amounting to about 40% of base pay during the
1990s, then rising sharply to a peak of 100% in 2004 (and remaining over 60%
till the company’s demise).8
Importantly, however, incentive pay at Countrywide depended only on the
type and dollar value of loans originated; the performance metric did not depend
on whether the borrower eventually defaulted. This practice of ignoring the
loan’s long-term performance was frowned on by many lenders at the time and
incentivized Countrywide’s originators to lend the largest amounts possible to
borrowers, regardless of their ability to pay. Thus, Countrywide became known
as specializing in low-quality or “sub-prime” loans—including loans with low
teaser rates that reset to double-digit levels, loans with prohibitive prepayment
penalties, and the now-notorious ninja loans (mortgages given to individuals
with “no income, no job, and no assets”).
What were the consequences of these practices for Countrywide, especially
as interest rates rose and the supply of qualified new borrowers began to dry up?
By June 30, 2007, almost one in four sub-prime loans serviced by Countrywide
was delinquent. In October 2008, Countrywide settled a civil suit with eleven
state attorneys general over alleged predatory lending practices. In the settle­
ment, Countrywide agreed to $8.4 billion in direct loan relief for some 400,000
mortgagers—the largest predatory lending settlement in history. The failing
Countrywide Corporation was acquired by Bank of America in July 2008, which
spent years litigating its responsibility for bad loans originated by Countrywide.
8 See Eastburn (2011) for these statistics.


<!-- pdf p. 72 -->
5.5  Multitask Principal–Agent Problems    51
In August 2014, Bank of America agreed to a near $17-billion settlement relating
to the sale of toxic mortgage-linked securities, a large percentage of which had
been sold by Countrywide (Eastburn, 2011).
Countrywide’s chairman and CEO, Angelo Mozilo, retired when the com­
pany was sold to Bank of America. A year later (in June 2009), the Securities
and Exchange Commission (SEC) indicted him for fraudulent misrepresentation
of credit and market risk inherent in the Countrywide mortgage portfolio. In
the film Inside Job, Mozilo is cited as one of the persons responsible for the
economic meltdown of 2008. He was named by Time Magazine as one of the
“25 People to Blame for the Financial Crisis.” And Condé Nast Portfolio ranked
Mozilo second on their list of “Worst American CEOs of All Time.”9
The case of Countrywide contrasts somewhat with Wells Fargo’s in that
Countrywide’s incentive plan appears to have been deliberately designed to
ignore loan quality. Indeed, because Countrywide sold the mortgages they origi­
nated to others (who then packaged them into financial instruments called Col­
lateralized Debt Obligations—CDOs—which they in turn sold to third parties),
Countrywide had no financial interest in the mortgages’ long-term performance.
Thus, rather than being a by-product of a perhaps overzealous incentive scheme,
the emphasis on quantity over quality was a feature of the company’s business
strategy.10 Because the collapse in the value of low-quality CDOs was what pre­
cipitated 2008’s financial collapse, employee incentive plans in companies like
Countrywide appear to have played a role in creating the Great Recession. Thus,
and most important for our purposes, getting employees’ incentives right mat­
ters. Designing incentive pay is not just a minor concern of HR departments: It
is a central component of business strategy with implications for the long-term
success of companies, and indeed for the entire economy.
We summarize all the previous examples of “incentives gone wrong” in a
multitask context with the following definition and result:
DEFINITION 5.1
In a multitask, principal–agent context, incomplete incentives refer to financial
incentives that apply only to a strict subset (i.e., to some but not all) of the tasks
performed by an agent that a principal cares about.
  RESULT 5.3
Effects of Incomplete Incentives in a Multitask Context
When a principal employs an agent to perform multiple tasks she cares about, but
the principal uses incomplete incentives to motivate the agent, we expect agents
to re-allocate their effort toward the incentivized tasks and away from the non-
incentivized tasks. The results can be highly undesirable for the principal.
9 These facts are from Wikipedia’s article on Angelo Mozilo.
10 See Morgenson (2007) for a detailed analysis of Countrywide’s performance pay plan.


<!-- pdf p. 73 -->
52 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
When Are Effort-Allocation Problems Most Likely
in a Multitask Context?
Under what conditions are agents’ effort-shifting responses to incomplete incen­
tives likely to be most problematic for the principal and for economic efficiency?
To state these conditions, a few definitions are helpful first.
DEFINITION 5.2
In a multitask, principal–agent context, two tasks are complements to the prin-
cipal if the principal strongly prefers the agent to do some of each task versus
doing only one or the other. Tasks are substitutes to the principal if the principal
(although benefiting from both tasks) is roughly indifferent as to how the agent al-
locates his effort across the tasks.
In a multitask, principal–agent context, two tasks are complements to the agent
if the agent strongly prefers to perform some of each task to doing only one or the
other. Tasks are substitutes to the agent if the agent doesn’t care too much which
one he performs (as long as he’s at work anyway).
Although task complementarity and substitutability can be defined and
studied mathematically, in this section, we’ll stick with the preceding intuitive
definitions. Essentially, two tasks are complements to a principal if it’s really
important to her that both be done. For example, the principal may care both
that a sale is made and that it be done legally and ethically. Tasks are substitutes
when principals don’t care very much how the agent allocates his effort be­
tween then. The head of a research lab, for example, may not care much which
of several projects a scientist pursues as long as the outcome yields a patentable
invention. From the agent’s point of view, tasks are complements if the agent
prefers doing a mix of them. For example, if the agent prefers splitting her day
between time working at her desk and in-person meetings versus spending the
entire day doing one of these activities, these two activities are complements. If
the agent doesn’t care about the mix of her activities during the day, the tasks
are substitutes.
  RESULT 5.4
Task Substitutability and Agents’ Responses to Partial Incentives
The mix of tasks chosen by the agent will be most sensitive to task-specific financial
incentives when tasks are substitutes to the agent.
This makes sense: When agents don’t care too much how they allocate their
effort across tasks, attaching a financial incentive to one task but not another will
lead to a large re-allocation of the agent’s time and effort. The consequences of
this re-allocation for the principal (and for economic efficiency), however, depend
on how the principal views them.


<!-- pdf p. 74 -->
5.5  Multitask Principal–Agent Problems    53
  RESULT 5.5
Effects of Task-Specific Financial Incentives
on Economic Efficiency
The efficiency costs of partial financial incentives will be greatest when the tasks
are complements to the principal and substitutes to the agent. Efficiency costs will
be lower when the tasks are substitutes to the principal, or when they are comple-
ments to the agent.
This also makes sense. If the principal really needs both tasks to be done, but
the agent doesn’t care which one he performs, incentivizing the agent in only
one of the tasks will lead to a large reallocation of the agent’s effort: an outcome
the principal really doesn’t like. On the other hand, if the principal doesn’t care
which job is done, she isn’t harmed by changes in the agent’s effort allocation. Or,
if the agent strongly prefers a mix of tasks, he won’t reallocate his effort much
when just one task is incentivized.
Efficient Contracts in Multitask, Principal–Agent Problems
Having described the effort-misallocation problems that can arise in multitask,
principal–agent interactions, and the conditions under which those problems are
likely to be most severe, we now ask how these problems can be remedied.
One obvious way to mitigate the effects of partial incentives is to try to
design more complete performance measures that “leave nothing out.” As al­
ready mentioned, employee performance management systems, such as the Bal­
anced Scorecard system or 360 Degree Feedback, aim to do just this. Although
they appear to have achieved some success, certain hard-to-measure aspects of
employee performance—in particular, various types of dishonest behavior that
people have a strong incentive to hide—may always remain beyond the reach of
these management systems.
Given that 100%-complete performance measures will probably never be
feasible, a second approach is the same as the optimal response to agent risk
aversion: reduce the strength of incentives (i.e., pick a level of b that is sub­
stantially below 100%). Although this may reduce the agent’s performance on
the incentivized task (e.g., selling more furniture), it may have the beneficial
effect of increasing his attention to the hard-to-observe, non-incentivized tasks
such as cultivating long-term customer relationships. In fact, under some condi­
tions, economists have argued that a policy of zero explicit financial incentives
(b = 0) might be the economically efficient contract between the agent and prin­
cipal in a multitask context.11 The situations in which low, or zero, incentives are
likely to be optimal are summarized in Result 5.6.
11 Probably the earliest formal argument that zero incentives might be the optimal policy in a
multitask environment was Farrell and Shapiro’s (1989) principle of negative protection. For more
formal derivations of the results in this section, see Holmstrom and Milgrom’s (1991) seminal
article. Lundesgaard (2001) provides a more accessible mathematical derivation of their arguments;
and Dewatripont, Jewitt, and Tirole (2000) provide a nice, short summary of the main results.


<!-- pdf p. 75 -->
54 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
  RESULT 5.6
Weak or Zero Financial Incentives (b ≈ 0) May Be Economically
Efficient in Multitask, Principal–Agent Contracts, Especially when:
(a)  only partial incentives are possible;
(b)  effort-misallocation effects of partial incentives are likely to be severe (i.e.,
tasks are complements for principals and substitutes for agents);
(c)  agents have high levels of intrinsic motivation; and
(d)  input-based employment contracts are a good substitute for performance-
based contracts.
Intrinsic motivation, that is, positive utility derived from doing a job well (as
opposed to the disutility of effort we’ve been assuming so far in the book) will
assure that agents continue to supply reasonable effort levels even in the absence
of explicit performance incentives. We’ll study intrinsic motivation further in,
Section 9.2. Input-based employment contracts differ from the performance-
(or output-) based contracts we’ve studied so far in this book because they base
workers’ pay on various indicators of their inputs to the production process that
are correlated with effort. Definition 5.3 explains this in more detail.
DEFINITION 5.3
So far, all the employment contracts we have studied in this book are output-
based, in the sense that they link workers’ pay, Y, to some measure of their output
or “performance,” Q, via a function Y(Q). In part, this is because we have ruled out
contracts that link pay directly to worker effort, E, as being infeasible.
Although perfect measures of effort are probably never available, some aspects
of workers’ inputs to the production process are imperfect indicators of how
much effort was exerted. Examples include the total number of hours spent at
the workplace or logged onto the company server, the number of personal phone
calls and emails that are sent, and visits to non-work-related websites. Employment
contracts that link pay and other sanctions to these sorts of measures are called
input-based contracts. For example, an input-based contract might enforce strict
business hours, prohibit working from home, and place limits on the types of Inter-
net use and personal phone calls made during the work day.
Job Design in Multitask Environments
So far in this section, we’ve assumed that jobs consist of a fixed set of tasks, some
of which may have easily measurable performance and some of which may not.
But in many cases, especially when firms have a large number of tasks to do,
those tasks can be bundled into jobs in many different ways. Finding the best way
to do this is an important aspect of HR research and Personnel Economics and is
called the problem of optimal job design. As it turns out, a final way to mitigate


<!-- pdf p. 76 -->
5.5  Multitask Principal–Agent Problems    55
effort-misallocation problems associated with multitask problems involves im­
provements to job design.
To see how this works, imagine a sales and marketing division that has two
employees and four tasks that need to be performed: domestic sales, domestic
market research, international sales, and international market research. For the
sake of argument, let’s say that sales performance is easy to measure, but the
performance of market researchers is not. If the company assigns one of the two
employees to domestic issues, and the other to international ones, and gives both
employees high sales commissions, they will both neglect their market research
duties, and the company’s long-term growth might suffer due to a failure to iden­
tify new market segments.
One way to address the problem would be to organize jobs by function
rather than by region. In the new, redesigned jobs, one person would do both
domestic and international sales. If she gets a 100% commission on her sales
(regardless of destination), there is no aspect of her job she’ll neglect. Thus,
the tasks with easy-to-measure outputs are grouped together into a job where
incentive pay is high. Notice that it probably makes sense to give the employee
a considerable amount of discretion in this job: that employee has every incen­
tive to use time wisely because his or her financial incentives are closely aligned
with the company’s. Also, the company may not need to recruit very carefully
for this job: Because pay is strictly by performance, relatively little is lost by
letting people “try their hand” at the job and quit if they’re not successful. The
second employee in the new job categorization handles all the market research.
Here, output is hard to measure, so cash incentives are unlikely to be effective.
Instead, the market researcher may have a much more input-based contract with
less discretion. The researcher’s job might have strict business hours, prohibit
working from home, and so forth. The company might also be well advised to
recruit more carefully for this job, to identify someone who truly enjoys market
research for its own sake. Summarizing the general principles behind our ex­
ample is Result 5.7:
  RESULT 5.7
Using Job Design to Mitigate Effort Misallocation in Multitask,
Principal–Agent Problems
To minimize the reallocation of agents’ effort from hard-to-observe toward easy-
to-observe tasks, employers may consider grouping easy-to-observe tasks into the
same jobs and the hard-to-observe tasks into other jobs.
In the easy-to-observe jobs, financial incentives should be strong (b ≈ 1). Em-
ployee discretion can be high, and careful screening to identify new employees
with high intrinsic motivation and low desires to shirk is less important.
In the hard-to-observe jobs, financial incentives should be weak (b ≈ 0). Em-
ployees should be given less discretion about work hours and other input-related
measures. Careful screening to identify new employees with high intrinsic motiva-
tion and low desires to shirk is more important here.


<!-- pdf p. 77 -->
56 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
To be sure, many important considerations other than effort substitution
affect optimal job design. For example, information flows also matter; and if
it’s important for the domestic market researcher to have personal contact with
domestic customers, this consideration could outweigh the moral-hazard-related
considerations underlying Result 5.7. The main takeaway from Result 5.7 is that
job design is an important tool that should be considered when dealing with any
HR policy problem, including multitask agency situations.
 5.6   Nonlinear Incentives and the Timing Gaming Problem
Gaming Nonlinear Incentives
We’ve already noted that in our basic principal–agent model, there’s no point in
making the agent’s reward schedule Y(Q) any more complicated than a linear
function, Y = a + bQ. Sometimes, however, firms do use nonlinear reward
schemes, such as lump sum bonuses if an agent reaches a performance target, or
“accelerating” piece rates that increase with the amount produced. We’ll discuss
reasons why firms might want to use such policies later in the book. In this sec­
tion, our goal is to describe an important consequence of nonlinear incentives
known as timing gaming. This pitfall applies to all situations in which an agent
faces a nonlinear reward schedule on a repeated basis.
To illustrate the timing gaming problem, imagine an automobile sales agent
(we call him Rodrigo) who is paid on a monthly basis according to the Y = R(Q)
schedule in Figure 5.2. Under this nonlinear R(Q) schedule, the agent’s commis­
sion rate (i.e., the slope of the curve) starts out high but decreases as he sells more
and more units, that is, it has a decelerating piece rate. Economists and mathema­
ticians refer to functions of this type (whose slope diminishes as we move from
left to right) as concave functions.12
DEFINITION 5.4
Concave and convex functions of one variable: A function, R(Q), is concave if its
slope diminishes as Q increases. It is convex if its slope increases as Q increases.
Equivalently, using calculus, concavity means that R’’(Q) < 0 and convexity means
that R’’(Q) > 0, where the double primes denote second derivatives.
Imagine that Rodrigo sells Q1 = 12 cars in one month (Month 1) and Q2 = 4
cars the next (Month 2). If he is paid according to the concave reward sched­
ule R(Q), his average monthly sales over those 2 months, Q¯, is 8 cars, and his
average monthly pay over those 2 months, Y¯, is given by [R(Q1) + R(Q2)]/2.
12 A note to the mathematically inclined: To simplify the presentation, we use the terms convex and
concave to imply strict concavity or convexity here. Thus, a linear function is neither concave nor
convex.


<!-- pdf p. 78 -->
5.6  Nonlinear Incentives and the Timing Gaming Problem    57
Diagrammatically, this is given by the height of a ray drawn between points a
and b on the R(Q) curve, at Q¯ = 8 units of sales, that is, by the height of point c.13
Now imagine that near the end of Month 1, Rodrigo (who is on track
to sell 12 cars that month) already knows that Month 2 is going to be much
slower. Anticipating this uneven sales pattern, Rodrigo finds a way to “move”
some of his Month 1 sales into Month 2. This could be done a number of ways,
such as slowing down some paperwork, offering a customer a free upgrade if
the customer signs on the first of the next month instead of the last of the cur­
rent month, or simply logging the sale later than he should. To make the math
and the picture simpler, imagine that Rodrigo is able to do this with four of the
12 vehicles he initially expected to sell in Month 1. Thus his recorded sales
are Q1′ = Q2′ = 8 cars in both months, and he’ll earn R(Q′) = R(8) dollars
in each of those months, which is given by the height of point d in Figure 5.2.
Because R(Q) is concave, this exceeds his average monthly pay when Rodrigo
doesn’t “game” the pay system. Thus, by strategically shifting his recorded
output so as to even it out between periods, Rodrigo can “game” a concave
pay schedule in a way that may not be in his employer’s or his customers’
best interests.
Now, let’s consider a convex reward schedule, with an accelerating commis­
sion rate, as shown in Figure 5.3. Now imagine Rodrigo is on track to sell eight
13 To see this, note that the slope of the line between points a and b equals [R(Q1) − R(Q2)]/(Q1 − Q2).
Denoting this slope by s, the height of point c is then given by R(Q2) + s(Q1 − Q2), which yields the
stated result.
Sales (Q)
Pay (Y)
R(Q)
Q1′ = Q2′ = 8
Q1 = 12
Q2 = 4
Y′ = R(Q′)
Y = [R(Q1) + R(Q2)]/2
a
b
c
d
FIGURE 5.2. Timing Gaming with a Concave Reward Schedule


<!-- pdf p. 79 -->
58 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
cars in Month 1 and expects to sell eight in Month 2 as well. Thus, Q1 = Q2 = 8,
a very constant pattern of sales over time, which would yield a pay of R(Q) per
month, at point d in Figure 5.3. To improve on this by “timing gaming,” Rodrigo
now needs to widen the difference in sales between the 2 months, in this case
from zero to a positive number. One way to do this, as before, is to delay the
(recorded) sale of four cars into Month 2, making Rodrigo’s sales now look very
uneven across the months: four in Month 1, and 12 in Month 2. Rodrigo’s average
monthly income with these recorded sales is Y′ = [R(Q1′) + R(Q2′)]/2, which
is given by the height of point c in Figure 5.3. Because his reward schedule is
convex, this is higher: The extra income from his really “big” (recorded) month
exceeds the lost income from his “bad” month. Thus, Rodrigo is again incentiv­
ized to distort the timing of his reported output. Finally, note that Rodrigo could
have achieved the same result if instead of delaying four sales into Month 2,
he induced or pressured four customers to buy earlier—in Month 1 instead of
Month 2. The key point is that concave pay schedules reward constant sales pat­
terns, and convex pay schedules reward variable sales patterns, thus inducing
agents to generate recorded sales patterns that fit those patterns, regardless of
whether this is in the firm’s or the customers’ interests.
Finally, before summarizing all these results, consider a linear incentive
scheme. If you imagine a version of Figure 5.2 or 5.3 with any linear R(Q), you’ll
see immediately that all these incentives for “timing gaming” are gone: Noth­
ing can be gained by moving sales across periods or misreporting sales dates.
This immunity to timing gaming is an important advantage of linear incentives.
Result 5.8 sums it up.
  RESULT 5.8
Only Linear Reward Schedules Are Immune to Timing Gaming
Concave reward schedules, R(Q), incentivize agents to change the timing of re-
corded output to be as constant as possible over time.
Convex reward schedules, R(Q), incentivize agents to change the timing of re-
corded output to be as variable as possible over time.
Linear reward schedules are the only type that does not incentivize agents to
manipulate the timing of their actual or reported output.
Whereas Figures 5.2 and 5.3 show the cases of “smoothly” increasing and
decreasing piece rates, respectively, many other forms of nonlinear compensa­
tion schemes are of course possible. These include piecewise-linear schemes
where different piece rates apply to different ranges of output, schedules that are
concave at some output levels and convex at others, and bonus schemes where
pay “jumps” up discontinuously when a performance target has been attained.
Similar arguments to those in Figures 5.2 and 5.3 can be used to show that any
nonlinear scheme creates opportunities for agents to profit by timing gaming. In
this chapter’s Discussion Questions, there’s a simple example of how to “game” a
bonus pay scheme for you to work out.


<!-- pdf p. 80 -->
5.6  Nonlinear Incentives and the Timing Gaming Problem    59
Is timing gaming a significant problem in real organizations? In a care­
ful study that followed 981 U.S. manufacturing firms over 32 quarters, Oyer
(1998) shows that sales in these companies exhibit strong fiscal-year effects,
tending to increase as the end of a company’s fiscal year approaches. Because
firms’ fiscal years differ substantially—over a third of companies’ fiscal years
end between January and November—Oyer can rule out simple seasonality as
a source of these effects and instead links fiscal-year effects to incentive con­
tracts for managers and salespeople. These contracts generally take the form
of a bonus for reaching a sales or profit target (for salespeople and managers,
respectively) in a fiscal year. Oyer argues that these fiscal-year effects (which
are not necessarily in shareholders’ interests) result, at least in part, from the
ability of some salespeople (such as those who work closely with customers
over a long buying cycle) to influence the timing of customer purchases. Sup­
porting Oyer’s explanation, the fiscal-year seasonality he detects is more pro­
nounced in companies where salespeople and executives can affect the date of
customer purchases.
Whereas Oyer does his best to infer timing gaming of sales from company-
level data, Larkin (2014) uses detailed data on performance of individual sales­
people of enterprise software (such as the systems produced by Oracle, IBM,
and  SAP). As in many business-to-business technology companies, these sales­
people faced a convex reward schedule, that is, they had an accelerating commis­
sion scale. This meant that a salesperson’s commission for the same deal could
vary dramatically depending on the quarter in which the deal closes. Importantly,
Larkin was able to show not only that these salespeople gamed the system by
manipulating the timing of sales, but that this behavior was quite costly to their
employer. In particular, Larkin found that salespeople agreed to significantly
Sales (Q)
Pay (Y)
R(Q)
Q1 = Q2 = 8
Q1′ = 4
Q2′ = 12
Y = R(Q)
Y′ = [R(Q1′) + R(Q2′)]/2
a
b
c
d
FIGURE 5.3. Timing Gaming with a Convex Reward Schedule


<!-- pdf p. 81 -->
60 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
lower pricing in quarters where they had a financial incentive to close a deal; the
resulting mispricing cost their employer about 6%–8% of revenue.
Closely related to our theoretical car-sales example, Owan, Tsuru, and
Uehara (2013) conduct a detailed study of individual salespeople at two car
dealerships in Canada. These salespeople faced a highly nonlinear and accel­
erating reward schedule that “jumped up” at certain points. For example, the
marginal reward to selling a 12th, 14th, and 16th car in a month were $1,400,
$1,200, and $1,400, respectively, compared to only $200 for the first through the
11th cars, creating tremendous incentives to change the timing of sales in certain
situations. Owan et al. provide strong evidence of such behavior, including the
fact that 23% of all sales were made on the last day of the month. Also, it was
clear that salespeople discounted prices to game the system: The cars the agents
had the strongest incentives to sell (e.g., their 12th in a month) were priced much
lower than other units.
Nonlinear compensation schemes can also distort firms’ accounting de­
cisions. For example, Healy’s (1985) much-cited analysis notes that bonus
schemes create incentives for managers to time accruals to maximize the value
of their bonus awards.14 Using information on the structure of managers’ bonus
contracts at 94 companies, Healy found a strong association between accru­
als and managers’ income-reporting incentives: Managers were more likely to
choose income-decreasing accruals when they were at a maximum or ­minimum
14 In accounting, an expense can be accrued (and thus deducted from accounting profits) at a
different time from when the money is actually paid out. Although firms are expected to use a
consistent method to define their accruals, in practice there can be considerable flexibility in when
an expense or revenue item is recognized. In Healy’s (1985) case, this flexibility allowed managers to
opportunistically change the timing of revenues and expenses to maximize their personal bonuses.
Did Fiat Chrysler Automobiles (FCA) Pay Auto Dealers
to Mis-Date Sales?
In another example relating to car sales, ­Valdes-
Dapena (2016) reports on a federal lawsuit
filed by two car dealers accusing Fiat ­Chrysler
of paying dealers to falsely report sales of
dozens of vehicles on the last day of the month,
and then to “back-out,” or undo the sales on
the first day of the next month. FCA’s pur­
ported motive for doing so was to allow them
to inflate the company’s reported year-over-
year sales figures. According to the suit, the
payments from Fiat Chrysler for faking sales
were to be counted as an “advertising credit”
to avoid triggering an audit. FCA was also
accused of rewarding dealers who mis-dated
sales by giving them more hot-selling cars in
later months in return for falsely reporting
sales of those vehicles in earlier months. Of
course, accelerating the timing of sales can
only benefit a company for a limited period
of time; so why would Fiat Chrysler engage
in this behavior? Apparently it had been on a
“winning streak” with 69 consecutive months
of year-over-year sales increases and didn’t
want to break the pattern!


<!-- pdf p. 82 -->
5.6  Nonlinear Incentives and the Timing Gaming Problem    61
income in their bonus plan (so their pay was not sensitive to profits) and to
choose ­income-increasing accruals otherwise (when their pay was affected by
accounting profits).
Finally, Benson (2015) provides an interesting analysis of timing gaming
by 7,492 sales managers who were the immediate supervisors of 61,092 sales­
people, mostly doing business-to-business sales. Benson’s data come from 244
firms that subscribed to a cloud-based service for processing sales compensa­
tion. In Benson’s case, both the sales managers and their subordinates had sales
quotas. (Managers’ quotas applied to the total amount sold by their subordinates.)
Managers had some discretion to hire and fire their subordinates and in some
circumstances were allowed to adjust their subordinates’ quotas.
As we have seen in other contexts, sales managers who were just below
their own fiscal year quota in Benson’s data had a strong incentive to “pull sales
into” the current fiscal year from the next year, to “make their quota.” How could
they do this, given that they weren’t actually engaged in sales themselves? First,
Benson shows that managers who were just under quota near the end of the year
were much less likely to dismiss underperforming salespeople than at other times.
This is because replacement salespeople take quite a while to train; thus, even
an underperforming incumbent performs better than a new hire in the short run.
Second, managers who were just under quota were much more likely to adjust their
underperforming subordinates’ quotas downward near the end of the fiscal year.
Although companies normally frown on downward quota adjustments, sometimes
these are the best way to motivate salespeople who have had a bad year for reasons
outside their control. Still, downward quota adjustments should be used sparingly,
and there is no obvious reason for salespeoples’ quota adjustments to depend on
whether managers are just below their quota. In sum, by being “easier” than they
should normally be on their subordinates when managers are just shy of their own
quotas, the managers “bumped up” their subordinates’ sales at the end of a fiscal
year in ways that do not reflect their company’s long-term interests.
  RESULT 5.9
Evidence of Timing Gaming
Studies of fiscal year revenues of U.S. manufacturing firms, of salespeople selling
enterprise software and cars, of managers’ accounting decisions for accruals of
costs and revenues, and of sales managers’ personnel decisions all show significant
timing gaming effects for two types of nonlinear incentive schemes: lump sum
bonuses and accelerating commission rates. In some of these cases, the gaming
resulted in significantly higher costs or lower profits for the firm.
Importantly, Result 5.9 does not mean that firms should avoid nonlin­
ear incentives, which are in fact quite popular forms of variable pay. Instead,
Result 5.9 summarizes an important cost of nonlinear reward systems. In any
actual workplace, these costs must be weighed against the possible benefits of
nonlinear reward schemes, some of which we’ll study later in this book.


<!-- pdf p. 83 -->
62 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
   Chapter Summary
■ Many of the assumptions in our simple principal–agent model are not es­
sential to our main result (Result 3.2), that a ≤ 0 and b = 1 in the optimal
contract. These noncritical assumptions include the linear production func­
tion, the quadratic disutility-of-effort function, the linear contract, and the
absence of uncertainty in production (as long as the agent is risk neutral).
■ Other changes to our assumptions that can dramatically alter our main result
are (a) adding both production uncertainty and agent risk aversion; (b) in­
volving the principal in the production process; and (c) giving the agent mul­
tiple tasks, some of which are hard to incentivize directly.
■ In situation (a), the optimal contract depends on whether the contract can
depend directly on the state of nature. If it can—the case of state-contingent
contracts—the optimal contract still has b = 1 in all states of the world be­
cause the contract insures the agent by making the fixed payment (a) more
generous to the agent in bad times.
■ If contracts cannot be state contingent, then the optimal contract needs to
trade off a desire to incentivize agents (via a high b) against a desire to insure
them (via a low b). This is the same trade-off faced by insurance companies
worried about inducing moral hazard when they reduce their customers’ ex­
posure to risk.
■ When contracts have to trade off insurance and incentives, we’d expect opti­
mal contracts to offer more insurance (lower b) when the production process
is inherently riskier. Higgs’s evidence on postbellum agricultural contracts
in the Southern United States is consistent with this prediction.
■ The multitask, principal–agent problem redirects our attention from induc­
ing agents to work hard to inducing them to work smart. In many cases and
in many ways, the most important aspect of motivating agents is not getting
them to devote more effort, concentration, and hours to their jobs but induc­
ing them to use their time at work wisely—allocating their time and energies
to all the tasks that matter for the principal, not just some of them.
■ Incomplete incentives in a multitask environment can cause agents to ne­
glect the non-incentivized aspects of their job. The results can be highly
undesirable for principals, especially when the neglected aspects include
honesty and affect the long-term interests of the firm. In these cases,
the optimal incentive scheme can involve zero performance incentives
(b = 0), relying instead on input-based rules and intrinsic utility to moti­
vate workers.
■ Job design (the way tasks are bundled into jobs) can also be used to mitigate
effort-misallocation problems in a multitask setting and is a useful tool to
consider when addressing other HR challenges as well.


<!-- pdf p. 84 -->
Suggestions for Further Reading    63
■ Timing gaming is an important potential cost of nonlinear incentive schemes
whenever agents and principals interact over several periods of time. In these
situations, nonlinear incentives encourage agents to re-allocate actual or re­
ported output between periods in ways that may not be in the principal’s (or
society’s) interests.
   Discussion Questions
	 1.	 Equation 5.1 introduced uncertainty into the production process as follows:
Q = dE + ε. One consequence of this assumption is that the marginal pro­
ductivity of additional effort, d, is the same regardless of the state of nature, ε.
Is this realistic?
	 2.	 How would you write the production function if, instead, effort was more
productive in good times? (For example, it might be easier to sell an extra
car when the local economy is good than when it is bad.) How do you think
that might change the results in this chapter?
	 3.	 Other than agricultural contracting, what are some additional situations
where contracts have to trade off incentivizing agents against a desire to
avoid exposing agents to excessive risk?
	 4.	 Have you ever been in a job where “incentives went wrong,” in the sense that
attempts to encourage some forms of profit-enhancing behavior “backfired”
by encouraging employees to neglect other, potentially more important ac­
tivities? If so, describe the situation, and the task switching that employees
engaged in. In your opinion, were these tasks substitutes or complements to
your employer? Propose a change to the company’s HR policy to address this
misalignment of incentives.
	 5.	 Imagine you are a car salesperson with a bonus contract that pays you $3,000
in a month if you sell less than 10 cars, and $4,500 if you sell 10 or more. If
you expect to sell eight cars each of the next 2 months, discuss how you can
game this system to raise your average monthly pay from $3,000 to $3,750.
Illustrate using a diagram like Figure 5.2 or 5.3.
	 6.	 Now imagine you are expecting sales of eight cars this month and 12 next
month. Show, verbally and diagrammatically, how you can raise your aver­
age monthly pay from $3,750 to $4,500 by “timing gaming.”
   Suggestions for Further Reading
For a skeptical assessment of the importance of risk-incentives trade-offs like
those studied by Higgs (1973), see Prendergast (2000).
For recent laboratory evidence of the risk-incentives trade-off, and an exten­
sion of the model to incorporate loss aversion (as distinct from risk aversion), see
Corgnet and Hernán-González (2015).


<!-- pdf p. 85 -->
64 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
For additional empirical examples of multitask agency problems, see ­Brickley
and Zimmerman’s (2001) study of a business school; Fehr and Schmidt’s (2004)
and Oosterbeek, Sloof, and Sonnemans’s (2011) lab experiments; and Bartel,
Cardiff-Hicks, and Shaw’s (2013) study of a law firm.
Multitask agency models also have useful applications to the key issue of
project selection among innovators. For example, see Hellman and Thiele (2011)
and Onishi, Owan, and Nagaoka (2016).
Effects of nonlinear reward schemes on the timing of actual and reported
performance have also been documented for Navy recruiters (Asch, 1990), and
for students in introductory economics courses (Oettinger, 2002).
   References
Asch, B. J. (1990). Do incentives matter? The case of navy recruiters. Industrial
and Labor Relations Review, 43(3), 89S–106S.
Bartel, A., Cardiff-Hicks, B., & Shaw, K. (2016). Incentives for Lawyers: Moving
Away from “Eat What You Kill”. Industrial Labor Relations Review, 70(2),
336–358.
Benson, A. (2015). Do agents game their agents’ behavior? Evidence from sales
managers. Journal of Labor Economics, 33, 863–890.
Brickley, J. A., & Zimmerman, J. L. (2001). Changing incentives in a multitask
environment: Evidence from a top-tier business school. Journal of Corporate
Finance, 7, 367–396.
Corgnet, B., & Hernán-González, R. (2015). Revisiting the tradeoff between risk
and incentives: The shocking effect of random shocks. Management Science.
CASE: Council for Advancement and Support of Education. (2016). CASE state­
ments on compensation for fundraising performance. Retrieved from http://
www.case.org/Samples_Research_and_Tools/Principles_of_Practice/CASE_
Statements_on_Compensation_for_Fundraising_Performance.html
Dewatripont, M., Jewitt, I., & Tirole, J. (2000). Multitask agency problems: Focus
and task clustering. European Economic Review, 44(4–6), 869–877.
Eastburn, R. W. (2011). Countrywide Financial Corporation and the subprime
mortgage debacle. Gamble–Thompson: Essentials of strategic management:
The quest for competitive advantage, 2nd ed. II. Cases in Crafting and Execut­
ing Strategy, Case 15. New York: McGraw−Hill Companies. Retrieved from
http://w3.salemstate.edu/~edesmarais/courses/470general/semesters/Archived
%20semesters/Fall%202010/Countrywide%20Financial%20Corporation
%20and%20the%20Subprime%20Mortgage%20Debacle.pdf
Egan, M. (2016, September 8). 5,300 Wells Fargo employees fired over 2
million phony accounts. CNN Money. Retrieved from http://money.cnn.
com/2016/09/08/investing/wells-fargo-created-phony-accounts-bank-fees/
index.html


<!-- pdf p. 86 -->
References    65
Egan, M. (2016, September 9). Workers tell Wells Fargo horror stories. CNN
Money. Retrieved from http://money.cnn.com/2016/09/09/investing/wells-
fargo-phony-accounts-culture/index.html
Egan, M. (2016, November 3). Inside Wells Fargo, workers say the mood is grim.
CNN Money. Retrieved from http://money.cnn.com/2016/11/03/investing/
wells-fargo-morale-problem/index.html
Farrell, J., & Shapiro, C. (1989). Optimal contracts with lock-in. American Eco­
nomic Review, 79(1), 51–68.
Fehr, E., & Schmidt, K. M. (2004). Fairness and incentives in a multi-task
­principal–agent model. Scandinavian Journal of Economics, 106(3), 453–474.
Figlio, D. N., & Getzler, L. S. (2006).  Accountability, Ability and Disabil­
ity: Gaming the System? In Improving School Accountability Chec-Ups or
Choice (Vol. 14, pp. 35-49). (Advances in Applied Microeconomics; Vol. 14.)
doi: 10.1016/S0278-0984(06)14002-X
Graff Zivin, J., & Neidell, M. (2012). The impact of pollution on worker produc­
tivity. American Economic Review, 102(7), 3652–3673.
Griffith, R., & Neely, A. (2009). Performance pay and managerial experience in
multitask teams: Evidence from within a firm. Journal of Labor Economics,
27(1), 49–82.
Harris, M., & Raviv, A. (1978). Some results on incentive contracts with applica­
tions to education and employment, health insurance, and law enforcement.
American Economic Review, 68, 20–30.
Healy, P. M. (1985). The effect of bonus schemes on accounting decisions. Jour­
nal of Accounting and Economics, 7(1–3), 85–107.
Hellmann, T., & Thiele, V. (2011). Incentives and innovation: A multitasking ap­
proach. American Economic Journal: Microeconomics, 3, 78–128.
Higgs, R. (1973). Race, tenure, and resource allocation in southern agriculture,
1910. Journal of Economic History, 33, 149–169.
Holmstrom, B., & Milgrom, P. (1987). Aggregation and linearity in the provision
of intertemporal incentives. Econometrica, 55(2), 303–328.
Holmstrom, B., & Milgrom, P. (1991). Multi-task principal–agent problems: In­
centive contracts, asset ownership, and job design. Journal of Law, Economics
and Organization, 7, 24–52.
Hong, F., Hossain, T., List, J. A., & Tanaka, M. (2013, November). Testing the
theory of multitasking: Evidence from a natural field experiment in Chi­
nese factories (NBER Working Paper No. 19660). Cambridge, MA: National
Bureau of Economic Research.
Jacob, B. (2003).  “A Closer Look at Achievement Gains under High-Stakes Test­
ing in Chicago.”  In Paul E. Peterson and Martin R. West, eds., No Child Left


<!-- pdf p. 87 -->
66 
  CHAPTER 5  Extensions: Uncertainty, Risk Aversion, and Multiple Tasks
Behind?  The Politics and Practice of School Accountability (pp. 269–291).
Washington, D.C.: The Brookings Institution.
Jacob, B. A., & Levitt, S. (2003). Rotten apples: An investigation of the preva­
lence and predictors of teacher cheating. Quarterly Journal of Economics, 118,
843–877.
Larkin, I. (2014). The cost of high-powered incentives: Employee gaming in en­
terprise software sales. Journal of Labor Economics, 32(2), 199–227.
Lundesgaard, J. (2001). The Holmström–Milgrom model: a simplified and illus­
trated version. Scandinavian Journal of Management, 17(3), 287–303.
Morgenson, G. (2007, August 26). Inside the countrywide lending spree. The New
York Times. Retrieved from http://www.nytimes.com/2007/08/26/business/
yourmoney/26country.html?mwrsm=Email
Oettinger, G. (2002). The effect of nonlinear incentives on performance: Evi­
dence from “Econ 101.” Review of Economics and Statistics, 84, 509–517.
Onishi, K., Owan, H., & Nagaoka, S. (2016, March). Monetary incentives for cor­
porate inventors: Intrinsic motivation, project selection and inventive perfor­
mance. Unpublished manuscript, Osaka Institute of Technology, Osaka, Japan.
Oosterbeek, H., Sloof, R., & Sonnemans, J. (2011). Rent-seeking versus produc­
tive activities in a multi-task experiment. European Economic Review, 55,
630–643.
Owan, H., Tsuru, T., & Uehara, K. (2013). Incentives and gaming in a nonlinear
compensation scheme: Evidence from North American auto dealership trans­
action data. Evidence-based HRM: A Global Forum for Empirical Scholar­
ship, 3, 222–243.
Oyer, P. (1998). Fiscal year ends and nonlinear incentive contracts: The effect on
business seasonality. Quarterly Journal of Economics, 113(1), 149–185.
Prendergast, C. (2000). What trade-off of risk and incentives? American Eco­
nomic Review, 90, 421–425. doi: http://dx.doi.org/10.1257/aer.90.2.421
Valdes-Dapena, P. (2016, January 15). Dealer to Fiat Chrysler: Stop making
us report fake sales. CNN Money. Retrieved from http://money.cnn.
com/2016/01/14/autos/fiat-chrysler-lawsuit-fake-sales/index.html?iid=Lead
