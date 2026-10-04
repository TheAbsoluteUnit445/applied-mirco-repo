# Chapter 6: Noisy Performance Measures and Optimal Monitoring

_Source: `Personnel Economics.pdf`, PDF pages 88-97. Page markers below are PDF page numbers._


<!-- pdf p. 88 -->
­67
So far in this book we have assumed that the agent’s level of job performance
(Q) is costlessly observed by the firm. But in many cases this is not so. For ex­
ample, the results of an electrician’s carelessness might never be observed (if the
electrician and homeowner are lucky) or might only be apparent in a tragic fire
decades after their employment relationship has ended. Or a manufacturing firm
might know, based on high product failure or rejection rates, that someone in
the plant isn’t adhering to protocol, but the firm may not have an easy way to
determine where the fault lies. In many situations like these, firms will need to
spend some resources if they want to get an accurate measure of their workers’
performance. If both workers and firms are rational, self-interested maximizers,
what can economic theory tell us about how intensely firms should monitor their
workers’ performance?
Perhaps surprisingly, under quite general conditions (though certainly not
in all cases), economic theory delivers a simple and stark solution to this ques­
tion. The original insight comes from Nobelist Gary Becker’s early research
on the economics of crime. According to University of Chicago lore, Becker
was running late for a PhD oral exam one day and needed to park his car.
Given the importance of the occasion, he weighed the chances of being ticketed
and the likely price of the ticket, and decided to park illegally. Then, as a true
economist, he began to think about the problem from the university’s point of
view: Given the two ways to deter illegal parking—raising fines, versus hiring
more officers to catch violators—which is economically most efficient? In this
­chapter, we derive Becker’s (1974) famous theoretical solution to this “monitor­
ing puzzle” in the context of worker effort decisions. We conclude by discussing
the limitations of his “extreme” recommendation for how to deal with poorly
performing employees.
6
Noisy Performance
Measures and Optimal
Monitoring


<!-- pdf p. 89 -->
68 
  CHAPTER 6   Noisy Performance Measures and Optimal Monitoring
 6.1   A Simple Model of Shirking with Monitoring and Fines
We consider a principal–agent model with a general production function Q(E),
where the agent’s utility is given by

U = Y − V(E),
(6.1)
which is identical to Equation 1.4. To allow us to focus on a new aspect of the
agency relationship, however, we’ll now make a simplifying assumption about
the effort choices available to the agent. Specifically, instead of picking any effort
level he wants, we’ll imagine the worker can choose between just two possible
effort levels. One of these is the socially optimal effort level, E*, that maximizes
the sum of profits and utility. If the agent and firm could make binding agree­
ments about what will happen after the employment relationship has begun, this
is what both of them would want the agent to do. The other choice the worker
can make after the contract is in place is to exert no effort at all, E = 0. It will
be convenient to refer to these two choices as “working” and “shirking,” respec­
tively. Compared to working, shirking saves the worker E* units of effort, which
(assuming he is not caught or punished) raises his utility by an amount, B:

B ≡ V(E*) − V(0).
(6.2)
We’ll refer to B as the benefits (to the worker) of shirking. In a parallel fashion,
we define

G ≡ Q(E*) − Q(0)
(6.3)
as the cost to the firm (in reduced output) if the agent shirks.
Now, to incorporate the possibility that shirking isn’t perfectly detectable,
we define p as the probability that a worker who has decided to shirk is detected:

p = Prob(detect shirking | worker shirks).
(6.4)
Whenever p < 1, Equation 6.4 represents the idea that in the real world, shirk­
ing workers can often “pass” (for a time, at least) as having worked hard, either
through skill or luck.1
Assuming that it is socially optimal to deter shirking, what tools can the firm
use to achieve this goal? One possible tool is to penalize those who are caught
shirking. In this chapter, we’ll imagine this penalty takes the form of a fine, F, paid
by the worker to the firm. You can think of fines as either explicit (e.g., reimbursing
the firm for the cost of damages done) or implicit, such as docking the worker’s
pay for a period or denying the worker a raise. In any free labor market, however,
1 In the language of probability, the vertical line in Equation 6.4 means “given that.” Thus Equation
6.4 says that if a worker chooses to shirk, the probability he’ll be caught equals p. Put a different
way, the firm’s detection technology delivers some false negatives: Some workers who shirk aren’t
detected. Notice that our simple model in this chapter does not allow for any false positives: We
assume that the firm’s detection technology never mistakenly labels an honest worker as a shirker.
As it turns out, this does not change the main results, at least if workers are risk neutral.


<!-- pdf p. 90 -->
6.3  Efficiency: The Pie-Maximizing Solution    69
there’s a maximum penalty any firm can plausibly inflict on a worker, which in
most cases will amount to firing that person. We denote the maximum feasible fine
by F
_
. The other tool at the firm’s disposal is to invest in better monitoring. If the
firm monitors workers more closely, the detection rate can be greater. Let the cost
to the firm of maintaining a detection rate of p be the increasing function C(p).
 6.2   Solving the Agent’s Problem
Proceeding via backwards induction, we begin to solve our new principal–agent
problem by characterizing how the agent will behave under any given contract.
In this chapter, the contract is described by the ordered pair (p, F).2 Given such
a contract, a rational, risk-neutral worker will shirk if and only if the benefits to
shirking (B) exceed its expected cost (pF). In other words, the agent’s optimal
effort decision is described by Equation 6.5:

Refrain from shirking if and only if: B ≤ pF.
(6.5)
We’ll refer to Equation 6.5 as the no-shirking condition. The no-shirking con­
dition is the agent’s incentive-compatibility constraint in this version of the
principal–agent problem.3
 6.3   Efficiency: The Pie-Maximizing Solution
Now that we’ve characterized the agent’s incentive compatibility condition, we
are in a position to characterize the socially optimal contract, (p, B), which maxi­
mizes the sum of the firm’s profits and the worker’s utility. To focus on the inter­
esting case, we’ll start by assuming that it’s socially efficient to deter shirking.
In other words, we’ll assume that

G − B > C(p*).
(6.6)
In words, the social gains from preventing shirking—which consist of the gains
to the firm from preventing shirking, G, minus the loss to the worker from pre­
venting shirking, B—exceed the monitoring costs the firm needs to spend to
prevent shirking, C(p*).4 Note that this is not a trivial assumption: Some forms
2 As we’ll see throughout the book, because they are just agreements between principals and agents,
contracts can take many forms besides the combination of base and incentive pay (a, b) we’ve
studied so far. In the current example, the agent and principal agree on a different two-dimensional
bundle—how closely the agent will be monitored (p) and how severely the agent will be punished
if he’s caught shirking (F), then try to find the socially optimal levels of p and F. More generally,
contracts can have any number of components (not just two), and are sometimes much less formal
than the precise mathematical formulas we use here.
3 The weak inequality in Equation 6.5 means that the agent does not shirk if the costs and benefits of
shirking are exactly equal. This presumption in favor of honesty is a common assumption in agency
and in mechanism design theory, although it is not without consequences or pitfalls.
4 Note that the monitoring costs are evaluated at p*, the optimal detection probability. We haven’t
worked out what p* is yet, so in any actual example of the problem we need to check that Equation 6.6
is indeed satisfied at the optimal level of p*.


<!-- pdf p. 91 -->
70 
  CHAPTER 6   Noisy Performance Measures and Optimal Monitoring
of “shirking,” such as reading personal emails on company time or stealing
pencils—which aren’t very harmful but are hard to prevent—should probably
be tolerated by a rational, profit-maximizing firm. This is because they are
worth more to employees (B) than the firm would benefit from preventing them
[G − C(p*)].
Given Equation 6.6, there will be no shirking in any socially efficient ar­
rangement. Workers will never get B, never pay F, will always receive their wage
Y, and always supply effort E* (never zero). It follows that the total social welfare
(profits plus utility) generated by the employment relationship will just be

W = Q(E*) − V(E*) − C(p).
(6.7)
Choosing the socially efficient contract then amounts to maximizing Equation
6.7 subject to the no-shirking constraint (Equation 6.5). Because effort will equal
E* in all socially efficient contracts, this in turn reduces to

Minp, F C(p), subject to pF ≥ B and F ≤ F–.
(6.8)
Assuming the first constraint (incentive compatibility) is satisfied with equality
at the optimum (it will be), we can substitute p = B/F into Equation 6.8, and the
problem reduces to

MinF C(B/F), subject to F ≤ F–.
(6.9)
Because C(∙) is an increasing function, C is decreasing with F. The optimal fine,
F*, is therefore the highest possible value of F, that is, F* = F–. To see this
graphically, plot the required expenditures on monitoring against every possible
level of the fine (see Figure 6.1).
C(B/F)
Level of Fine: F
Socially optimal policy
Cost of preventing shirking: C(p)
F* = F
FIGURE 6.1. The Socially Optimal Fine in Becker’s Model


<!-- pdf p. 92 -->
6.3  Efficiency: The Pie-Maximizing Solution    71
Picking the highest possible fine allows one to spend the least on monitoring,
which is socially costly. In fact, if one could set F even higher somehow, that
would be socially even more efficient.
  RESULT 6.1
The Socially Efficient Monitoring Policy in Becker’s Model of
Shirking Combines the Strictest Possible Penalties (F) with
Lax Enforcement (low p).
In this contract, workers who choose to shirk will only rarely be caught, although
the penalty for being caught is severe.
In sum, even though the firm has two tools to prevent shirking in Becker’s
model (monitoring and fines), it optimally decides to “put all its eggs in one
basket”—by placing as much emphasis as possible on fines, thus minimizing the
need to monitor. Why is the optimal policy so lopsided? There are actually two
important reasons.
One reason stems from our assumption that the fine is a payment from the
worker to the firm. Thus, the fines are just a transfer from one party to another. But
as we already saw in Chapter 4, any transfer of this type just nets out of our mea­
sure of social welfare, which is the sum of profits plus utility. Thus, from the point
of view of social welfare, monitoring wastes valuable resources, whereas increas­
ing the level of the fine does not (all it does is discourage workers from shirking).
The second reason high fines are optimal in our example is that they are
never paid! Indeed, if we only restrict our attention to contracts that satisfy the
incentive-compatibility constraint (Equation 6.5), penalties will always be severe
enough to ensure that no worker ever chooses to shirk. Thus, severe penalties
combined with lax enforcement (low p) would be the optimal policy even if the
penalty, F, was not a fine that simply transferred resources from one party to
another. In the context of employment relations, an example of such a resource-
using penalty would be forcing the worker to take an unpaid leave; unlike a fine,
this type of penalty results in foregone worker output.
In the context of crime—where Becker originally developed the preceding
model—the classic example of a socially costly penalty is putting criminals in jail,
which can cost tens of thousands of dollars per inmate, per year. In this context,
Becker’s model says that the optimal deterrence policy is to make jails so unpleasant
that they will always be empty. This extreme result—of severe penalties combined
with lax enforcement—is an old and well-known one in the economics of crime. It
has led many observers to wonder why it conflicts with most peoples’ visions of their
ideal systems of crime and punishment. One possibility, suggested by a behavioral
theory of choice among risky options known as prospect theory (see Section 9.5)
is that humans don’t perceive small probabilities very accurately and so might not
respond to low apprehension probabilities the way Becker’s model predicts. Another
might be a concern for fairness, though it is unclear exactly what’s unfair about
Becker’s proposed solution. Perhaps the notion that “the punishment should fit the
crime” doesn’t mesh well with the idea of massive penalties for parking illegally.


<!-- pdf p. 93 -->
72 
  CHAPTER 6   Noisy Performance Measures and Optimal Monitoring
   Chapter Summary
■ To study a principal’s decisions on how many resources to spend on employee
monitoring, this chapter introduces a simplified version of the principal–
agent model where the agent chooses between just two effort levels: “work­
ing” (E = E* > 0) and “shirking” (E = 0).
■ Assuming it is socially optimal to prevent worker shirking, any optimal con­
tract must therefore satisfy a no-shirking condition. This condition guaran­
tees that the product of the fine for shirking (F) and the probability of getting
caught (p) is high enough to deter all shirking.
■ Under the previous assumptions, the socially optimal monitoring policy is
an extreme one: the highest possible penalties combined with low levels of
monitoring.
■ One reason for this extreme result is that any penalty that takes the form of
a fine paid by the worker to the firm (or by the criminal to society) is not a
social cost. It is just a transfer from one person to another.
■ Another reason is that, at least in our model, fines are never actually paid
when the no-shirking condition is satisfied. Thus, it still makes sense to post
the highest possible fines even when F is a social cost (such as unpaid leave,
or putting a criminal into jail).
   Discussion Questions
	 1.	 If you’ve ever taken public transportation in Europe, you are probably famil­
iar with their policy of letting anyone walk on a train or streetcar, with in­
spectors only occasionally coming aboard to check tickets. If you are caught
without a ticket, you face a stiff fine. According to the logic in this chapter,
European cities should go even farther and raise fines to astronomical levels.
That way they could hire even fewer inspectors and still achieve the same
reduction in shirking. Why do you think they don’t do this?
	 2.	 By the same logic, we could save money on highway patrollers in the United
States by instituting the death penalty for speeding. What aspect of real­
ity does the model in this chapter miss by arguing that this extreme policy
makes sense?
	 3.	 How do you think Result 6.1 would change if the firm’s measurement tech­
nology sometimes delivered some false positives (i.e., it sometimes labels
non-shirkers as shirkers). Does the answer depend on whether workers are
risk averse?


<!-- pdf p. 94 -->
Reference    73
	 4.	 How do you think Result 6.1 would change if workers have imperfect con­
trol of their own actions (i.e., even though you always want to choose E*,
sometimes “nature” intervenes and makes you do the wrong thing). Does the
answer depend on whether workers are risk averse?
   Suggestions for Further Reading
Wikipedia’s article on Becker’s “crime and punishment” model provides
useful, additional context and a less technical discussion than the original: http:
//en.wikipedia.org/wiki/Gary_Becker#Crime_and_punishment.
   Reference
Becker, G. S. (1974). Crime and punishment: An economic approach. In G. S.
Becker & W. M. Landes (Eds.), Essays in the economics of crime and pun­
ishment. Cambridge, MA: National Bureau of Economic Research. Retrieved
from http://www.nber.org/chapters/c3625.pdf


<!-- pdf p. 95 -->



<!-- pdf p. 96 -->
H1 NUMBER  Last H1 On Page    75
­75
Part 2 of the book differs in two key ways from Part 1. First, our focus,
which was theoretical in Part 1, becomes unabashedly empirical: Instead
of thinking through what we might expect to happen given some simple
assumptions, we look at how people actually behave in real firms, using
our model as a guide. Second, Part 2 focuses most of its attention on one
specific aspect of the principal–agent problem we sketched out way back in
Figure 1.1: Point 3, which is about how agents’ work behavior responds to
changes in the (formal and informal) rules affecting their jobs. Some of the
main questions addressed are the following: “How do workers’ effort levels
and job performance actually respond to financial incentives?”; “How im­
portant are financial incentives compared to other motivators such as in­
trinsic and social motivators?”; and “Can financial incentives sometimes
get in the way of the intrinsic satisfaction of a job well done?”
Throughout the chapters, we’ll compare the evidence from these empiri­
cal studies to the main theoretical predictions of Part 1’s principal–agent
model. Specifically, recall Result 2.1, which is that a rational agent facing
a linear pay schedule with intercept a and slope b should not change his
behavior when a is changed and should work harder when b is raised. To
what extent is this prediction supported by the evidence? And when is it
supported? From time to time, we’ll also focus on a different prediction
Part 2
Evidence on Employee
Motivation


<!-- pdf p. 97 -->
from Part 1; specifically Result 3.2, which says that (under certain condi­
tions) the profit-maximizing and socially efficient contract is a highly in­
centivized one in which the agent receives 100% of the fruits of his labors
at the margin. Are strong incentives always profit maximizing in reality?
As we go, we’ll find that financial incentives are sometimes highly effec­
tive motivators. We’ll also discover that they can sometimes backfire and
have unexpected effects, and that nonfinancial incentives can have pow­
erful effects too. In the end, we’ll argue that even in the simplest of em­
ployment relationships, great care is required in designing both financial
and nonfinancial incentives. As we expand our attention to more complex
employment relationships (teams, tournaments, and multitask and multi­
period interactions) later in the book, we’ll find that this basic message is
strengthened even further.
Because the focus of this part is empirical, we’ll begin with a brief in­
troduction to the main empirical research tools of personnel economics:
experiments and regression analysis.
76 
  PART 2  Evidence on Employee Motivation
