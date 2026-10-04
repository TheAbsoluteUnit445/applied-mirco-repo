# Chapter 1: Structure of the Principal–Agent Problem

_Source: `Personnel Economics.pdf`, PDF pages 24-33. Page markers below are PDF page numbers._


<!-- pdf p. 24 -->
­3
Structure of the
Principal–Agent Problem 1
Suppose you’ve just been injured in a freak accident in a department store: A
hundred cases of Neck n’ Torso shampoo have fallen off a shelf and dislocated
your back. The injury will cost you $50,000 in lost earnings and medical bills,
and you sincerely believe that the store’s negligence in maintaining its property
caused your accident. So you need to hire a lawyer.
Imagine also that you’ve never hired a lawyer before, and you don’t know
anyone who has hired one. To make the example even more improbable, let’s
say you have an unemployed friend of a friend who just passed the bar; and
­because you have very little money, you are considering engaging this person
to represent you in a civil suit. So now at least two questions come up: (a) How
much should you pay this person?, and (b)—probably more important—exactly
how should you pay her? For example, one option might be a flat fee of, say
$10,000, paid up front. Another might be to split the fee over time, for example
$5,000 on signing and $5,000 after your acquaintance has done all the work and
the case has been heard.
Yet another option would be to make the lawyer’s fee contingent on the out­
come of your case; for example, she could get the second $5,000 payment only
if she wins you a settlement of an agreed-on minimum amount. For that matter,
why does the lawyer’s “bonus” have to be all-or-nothing? To really align her
incentives with yours (so she works hard and learns all she needs to know to
win), you could give her, say, 20 cents out of every dollar she wins on your
behalf—or more. An even more extreme approach would be to ask the lawyer
to pay you up front: For example, the lawyer could pay you $5,000 up front for
your case; in return, you might let her keep not 20 cents but 50 or 80 cents of
every dollar she wins on your behalf. Clearly, there are many (in fact an infinite
number) of options.
In Chapter 1, we will show you how to think about this problem like an
economist. We will impose mathematical structure to describe the incentives


<!-- pdf p. 25 -->
4 
  CHAPTER 1  Structure of the Principal–Agent Problem
that you and your lawyer are facing, and work through the solutions to find out
what a rational self-interested actor would do. Understanding this simple model
will provide you with the intuition you need to approach all sorts of fascinating
questions in personnel economics.
 1.1   What Is a Principal–Agent Problem?
The question of how you should pay your newly minted lawyer in the preceding
story is a simple example of a type of problem that people confront and solve
every minute of every day in our modern economy. Whenever a consumer engages
a service provider, such as a lawyer, contractor, doctor, or even a hairdresser;
whenever a company contracts with a supplier or engages a ­franchisee; and
whenever a firm hires a worker, the former party (whom we’ll call the ­principal)
pays the second (whom we’ll call an agent) to take some action on the principal’s
behalf. The question of how best to structure the agreed-on “­arrangement” (or
“contract”) between these two parties is a canonical problem in economic theory
called the “principal–agent problem.”
Of course, because people in our economy solve these types of problems
over and over again, some pretty standard practices have emerged over the years.
For example, a common arrangement in the case of lawyers in civil cases is
called a contingency fee. Here, the client (you) pays nothing up front, and the
settlement (if any) is divided between you and the agent according to a fixed
fraction that is set in advance. The reason I asked you to imagine that neither you
nor the person you were thinking of hiring knew anything about how lawyers are
usually hired was to encourage you to think about the problem from the point of
view of its underlying principles, as if you were trying to solve it for the first time.
This “first principles” approach is useful in two distinct ways.
First, thinking without preconceptions about what might be the best way
to structure an economic relationship, then comparing your answer to how that
type of relationship is typically managed, often gives us useful insights into why
things are the way they are. After all, in competitive markets, efficient arrange­
ments are more likely to survive than inefficient ones. At the same time, however,
an old Chinese proverb says that “If a thousand men do a foolish thing, it is still
a foolish thing.” Sometimes taking a fresh look at a problem yields new solutions
that are better than the accepted way of doing things. In fact, some of the most
productive innovations in human resource management (and in other aspects of
business) arise from rethinking everyday problems, including different variants
of the principal–agent problem, from first principles.
In Chapters 1–4, we’ll formally study the simplest possible version of the
principal–agent problem. We’ll show that in this very simple case (which is close
but not identical to our imaginary hiring-a-lawyer problem), the problem has a
simple, “best” solution. (Of course, to do this, we’ll first have to define what
“best” means in a rigorous way.) The solution is both surprising and extreme,
and this fact will force us to think hard about what aspects of this simplest case


<!-- pdf p. 26 -->
1.2  Timeline of the Principal–Agent Problem    5
explain why the solution is so extreme. Once that is done, in the following chap­
ters we’ll use the simplest case as a jumping-off point to explore a rich set of
theories and facts about different types of employment contracts and how they do
or do not make sense in different economic environments.
 1.2   Timeline of the Principal–Agent Problem
Consider a single principal who is contemplating hiring a single agent to do some
work on the principal’s behalf, and imagine (as seems reasonable) that the pro­
cess happens in the following order. First, the principal offers the agent an em­
ployment contract, laying out the proposed terms of their business relationship.
This tells the agent exactly how he will be paid (whether an hourly wage, a com­
mission, or some combination thereof).1 Second, the agent then chooses whether
or not to accept this offer. Next, if the agent has accepted the offer, he chooses
how much effort (E) to devote to the task, which affects how much output (Q) he
produces on the principal’s behalf.2 Finally, the agent gets paid according to the
formula that was stipulated in the contract. This formula is a function Y(Q) that
relates the agent’s compensation (Y) to his performance (Q).3
Putting this all together, Figure 1.1 shows the timeline of interaction between
the principal and agent.
In this chapter, we’ll assume that both the principal and agent are purely
self-interested actors, each of whom tries to maximize their own well-being.
­(“Behavioral” considerations are introduced in Part 2.) Thus, the principal tries
to structure the contract in such a way that (a) it will be acceptable to the agent
(because otherwise the principal won’t earn any profit), and (b) the agent’s effort
choice under the contract maximizes the principal’s profit. The agent, in turn, will
only accept the offered contract if the expected value of doing so is better than the
agent’s best alternative activity; and once he has accepted the contract, he’ll pick
an effort level that maximizes his utility taking the terms of the contract as given.
1 Frequently in this book, we’ll adopt the convention, pretty standard in principal–agent theory, that
the principal is a “she” and the agent a “he.” Because we will be discussing these two parties a lot,
this makes it easier to keep track of which one we’re talking about.  Also, because most of this book
uses principal–agent theory to understand employment contracts, we’ll often refer to the principal
as a firm and the agent as a worker who is hired by that firm.
2 Throughout this book, we’ll measure the agent’s output—whatever task is performed—in terms
of dollars of net revenue he produces for the principal. Accordingly, we’ll refer to Q as “output,”
“revenues,” and the agent’s “performance” synonymously. “Net” revenue, in turn, means “net of all
variable costs except the agent’s compensation.” We’ll be more specific about what’s included in net
revenue in Section 3.3.
3 Throughout this book, we’ll assume that the principal can’t pay the agent directly on the basis
of his effort, E. Although this could be very helpful if it were possible, it’s not clear how effort
could be measured directly. In practice, most employment contracts either stipulate a fixed level
of compensation that is independent of both effort and performance, or tie pay to some explicit
measure of performance, Q.


<!-- pdf p. 27 -->
6 
  CHAPTER 1  Structure of the Principal–Agent Problem
In the next few Sections (1.3–1.6), we’ll flesh out the details of the preced­
ing problem in enough detail that we’ll be able to solve for the optimal contract
mathematically.
 1.3   Profits
As noted, we assume throughout Part 1 of this book that both the principal and
agent are purely self-interested; each cares only about maximizing his or her
well-being, subject to the constraints imposed by markets and limited resources.
The principal’s well-being is thus measured by her profit, given by the difference
between her revenues, Q (think of this as the size of the settlement earned by the
lawyer on your behalf), and her costs. In this simple example, the principal’s only
costs are what she pays the agent, so we have

Profit = Revenue − Costs.
(1.1)
Or using our notation,

Π = Q − Y.
(1.2)
 1.4   Utility
If the principal’s well-being is given by Equation 1.2, what about the agent’s? To
keep our model as simple as possible, we’ll assume the agent’s utility is given by
the equation

Utility = Compensation − (Cost of effort)
(1.3)
or

U = Y − V(E).
(1.4)
Throughout this book, we’ll assume that the agent’s cost-of-effort function,
V(E), looks like the curve in Figure 1.2. Another name for V(E) is the disutility-
of-effort function.
1. Principal
offers
employment
contract.
3. Agent picks
effort, determining
Q: the incentive–
compatibility
constraint.
4. Agent is
paid and profits
are realized.
2. Agent accepts
or rejects
contract: the
participation
constraint.
FIGURE 1.1. Timeline of Actions in the Principal–Agent Problem


<!-- pdf p. 28 -->
1.4  Utility    7
In words, we assume that effort is costly [V(E) ≥ 0]; that no effort costs
are incurred when no effort is supplied [V(0) = 0]; that working harder costs
the agent more [V'(E) > 0; i.e., the slope of the function is positive]; and that
there are increasing marginal costs of effort [V"(E) > 0; i.e., the slope of the
function is increasing].4 The reason why we assume increasing marginal effort
costs is simple realism: Even the most dedicated workaholic eventually gets to
a point where putting in one more hour or concentrating even harder on a task
becomes extremely painful. Thus, the last unit of effort supplied in any given
period of time is more painful than the earlier ones.
At a number of points throughout the book, we’ll use a specific cost-of-effort
function that satisfies all the preceding properties. This example will help us solve
a number of problems much more easily, without affecting any of the main results.
This illustrative, or baseline cost-of-effort function has the following formula:

V(E) = E2/2.
(1.5)
In other words, the cost of effort just equals the amount of effort squared, divided
by two. (You’ll see why we divide by two later.)
At a number of other points in this book, it will be helpful to illustrate the
agent’s utility function in Equation 1.4 graphically. To do this, we’ll use a fa­
miliar tool of microeconomics: indifference curves. Thinking back to your last
microeconomics course, you may remember using indifference curves to depict
a consumer’s preferences between two goods he or she might consume. For ex­
ample, in the case of choosing between apples (A) and bananas (B), a consum­
er’s utility function, U(A, B) can be represented in two dimensions by a set of
downward-sloping curves in a diagram, with B on the vertical axis and A on the
horizontal. Utility is fixed along any curve, and the slope of the curve gives the
consumer’s willingness to trade off apples for bananas, that is, the marginal rate
of substitution between the goods.5
4 Throughout this book, primes denote derivatives, that is, V'(E) = dV/dE and V"(E) = d2V/dE2. It
will help if you know enough calculus to maximize a function of a single variable, but calculus is not
essential to understanding any of the main ideas in the book.
5 Please see any intermediate microeconomics textbook for a review.
Effort (E)
V(E)
Cost of Effort
FIGURE 1.2. The Cost-of-Effort Function, V(E)


<!-- pdf p. 29 -->
8 
  CHAPTER 1  Structure of the Principal–Agent Problem
What do the indifference curves look like for our agent’s utility function,
U = Y − V(E), in Equation 1.4? Just as in the apples–bananas case, our agent’s
utility depends on two things; now the two things the agent cares about are the
amount of income (Y) he earns and the amount of effort he expends (E). A key
difference, though, is that whereas apples and bananas are both things that our
consumer enjoys (i.e., they are economic “goods”), higher levels of effort (hold­
ing income constant) make our agent worse off. In other words, whereas income
(Y) is an economic good to the agent, effort is an economic bad. As a result, the
agent’s indifference map comes out looking like Figure 1.3:
U0
U1
U2
Direction of increasing
utility
Effort (E)
Income (Y)
FIGURE 1.3. Indifference Curves between Effort and Income
Because effort is costly to the agent, the agent’s indifference curves will now
be upward sloping, and the agent becomes better off as we move northwest in
the picture, not northeast. To find the equation of an indifference curve, simply
rearrange Equation 1.4 as

Y = U + V(E).
(1.6)
For any given level of utility, U, Equation 1.6 gives the amount of income the
agent needs to attain that level of utility when he is supplying E units of effort.
The slope of an indifference curve is given by the following:
	Slope of indifference curve = V'(E) = marginal cost of effort > 0.
(1.7)
Indifference curves between income and effort are upward sloping, and get steeper
as we move from left to right, because the agent has increasing marginal costs of
effort [V"(E) > 0]. The more he is already working, the more cash we need to give
him to keep utility constant as we ask him to provide even more units of effort.
As in the case of a consumer choosing between apples and bananas, to maximize
utility, the agent should still try to get himself onto the highest indifference curve
possible in Figure 1.3 (i.e., the indifference curve that is as far to the northwest as
possible), subject to whatever budget constraint(s) he faces.


<!-- pdf p. 30 -->
1.6  The Production Function    9
 1.5   The Contract
As we noted, the agent’s pay, Y, depends on his performance according to the
contract that is agreed on, Y(Q). Because our main question is to figure out the
best function, Y(Q), it’s not clear what we should assume, if anything, about Y(Q).
To keep things simple, however, we will assume for now that Y(Q) is some linear
function:

Y = a + bQ.
(1.8)
Although the formula in Equation 1.8 rules out lots of possibilities, it still
includes many options for how the agent could be paid. As we already noted, the
agent could be paid a fixed wage, regardless of his job performance (a > 0, b = 0).
Or the agent could get, say, 20 cents out of every dollar he produces for the prin­
cipal (a = 0, b = 0.2). Or, the agent could get some combination of base pay and
incentive pay (a ≠ 0, b ≠ 0) where it is even conceivable (though perhaps not
optimal) that one of these parameters is negative.6
In sum, in Part 1 of this book, we assume that the contract between the prin­
cipal and agent is just a linear function that can be completely described by two
numbers: the function’s intercept (a) and its slope (b). The intercept, a, stipulates
the agent’s base pay (the minimum amount he gets paid, even if he produces
absolutely no results for the principal); and the slope, b, represents a piece rate
or commission rate.7 High values of b mean the worker is highly incentivized:
Even small improvements in performance will raise the worker’s pay a lot. And
of course, one of the key questions we’re trying to answer in this chapter is “Just
how incentivized should workers be?”
 1.6   The Production Function
We need one more piece of information to complete our description of the
­principal–agent problem: so far we have said that higher effort (E) by the agent
tends to result in a higher level of output (Q), but we haven’t been specific about
this ­relationship. If we think of our principal as a firm that is hiring a worker,
this relationship is essentially the firm’s production function, Q(E). In reality,
of course, Q(E) can take many forms; and in most realistic cases, it will include
some element of uncertainty: sometimes the worker produces a bad outcome
even when he works hard, and at other times even lazy workers get lucky. We’ll
incorporate uncertainty and other additional features of the production function
6 We’ll discuss the advantages and disadvantages of nonlinear contracts starting in Chapter 5,
Sections 5.5 and 5.6.
7 In addition to base pay, we’ll sometimes refer to a as the agent’s fixed pay, or show-up pay, as he
receives a just for showing up for work, and a is the component of the agent’s compensation that
does not depend on his job performance.  Piece rates refer to the practice of paying production
workers according to the number of units—“pieces”—they produce, while commission rates link
salespeoples’ pay to the dollar value of their sales.  The product bQ is called the agent’s variable pay
because it is the component of the agent’s total pay that does depend on his performance.


<!-- pdf p. 31 -->
10 
  CHAPTER 1  Structure of the Principal–Agent Problem
later, but for now we’ll ignore uncertainty and assume the simplest possible pro­
duction function, namely,

Q(E) = dE.
(1.9)
In words, output is proportional to effort, with the parameter d measuring just
how productive effort is. One reason why d can take different values in ­Equation
1.9 is because different agents might have different abilities to do this task: One
unit of effort by worker A might yield more output than the same amount of
effort from a different worker. A second reason relates to the firm’s technology:
A technical innovation such as a new software program might make the same
worker more productive by raising the level of d. Both of these interpretations of
the productivity parameter—ability and technology—will play important roles
in our book.
Just as it is sometimes helpful to have a baseline cost-of-effort function, it
will also be helpful to have a baseline production function. In this book, our
baseline production function is

Q(E) = E,
(1.10)
which just sets d = 1. A useful way of thinking about this is that when we use our
baseline production function, we have simply decided to measure effort (which
in most cases doesn’t have any natural units anyway) in terms of the number of
units of output it yields. In our lawyer example, E = 1 would then just mean that
the lawyer worked hard enough to generate (a settlement of) one (thousand) dol­
lars. This convention works well (and simplifies our notation) as long as we don’t
have to think about there being two alternative, differently skilled lawyers, or
about technological improvements that change an agent’s productivity (per unit
of effort). When we consider questions like that, we’ll bring our handy d param­
eter back into the picture.
 1.7   Backwards Induction
Now that we’ve laid out the timeline of interactions between our principal and
agent, their respective payoffs (profits and utility), and the underlying economic
relationships (the production function and the contract), we are ready to start
solving the question of “What is the optimal contract?” Notice that because of the
way we have simplified the problem, this boils down to just finding the optimal
values of two parameters: a and b. So how should we proceed?
Looking back at the timeline in Figure 1.1, one might think the easiest way
to solve the problem will be to start the analysis at the beginning, that is, at Point
1 where the principal offers the agent a contract. This seems sensible—after all,
shouldn’t the solution begin where the problem begins? Doing so, however, soon
gets us into trouble: The principal wants to maximize her profit, but how does she
have any clue as to what contract to offer the agent? Ideally, the principal would


<!-- pdf p. 32 -->
first like to have some idea as to how the agent will respond so as to not make a
mistake. To do this, it actually makes more sense to work backwards: hence the
term backwards induction.
Backwards induction will be a familiar concept to anyone who has studied
game theory or intermediate microeconomic theory. For example, a well-known
micro problem that needs to be solved by backwards induction is the ­Stackelberg
leader–follower model of duopoly: If there are two firms in an industry who
have to decide on their output levels in turn, the first mover (i.e., the Stackelberg
leader) needs to forecast how the follower will respond to every possible output
level the leader might consider producing. So to maximize her own profits effec­
tively, the leader needs to put herself into the mind of the follower and work out
how the follower is likely to respond to each one of the leader’s possible choices.
Although this way of thinking might seem unrealistically complex, notice that
it’s actually something all of us do, quite automatically, in everyday life. Suppose,
for example, that you are considering asking a classmate out on a date. Before
asking a classmate (agent) on a date, the proposer (principal) tries to forecast how
the classmate will respond to not be embarrassed.
Following this useful principle, we start our analysis of the principal–agent
problem by solving the agent’s (i.e. the second mover’s) problem first. ­Specifically,
Chapter 2 studies the decision that is made at Point 3 in our timeline (Figure 1.1):
Taking the employment contract (a, b) as given, and assuming that the agent
has already accepted the contract, how hard do we expect the agent to work?
We’ll solve this problem for every conceivable contract the principal might offer
the agent. Having done that, we’ll work backwards in Chapter 3 to figure out
(a) which contracts the agent will find acceptable (Point 2 of the timeline) and
(b) what is the best contract to offer in the first place (Point 1).
   Chapter Summary
■ In the simplest possible principal–agent model, a principal who wants to
maximize her profits hires an agent to work for her.
■ The principal’s profits are given by Π = Q − Y, where Q is the agent’s output
and Y is what the principal pays him.
■ The agent’s utility is given by U = Y − V(E), where V is his disutility of
effort. In general, we assume V(E) exhibits increasing marginal costs of
effort; an example (baseline) V(E) function we’ll often use is V(E) = E2/2.
■ Another way to illustrate the agent’s utility function U(Y, E) is as a set of
indifference curves. In a graph with Y on the vertical axis and E on the
horizontal axis, these curves have a positive slope, and curves further to the
northwest correspond to higher levels of utility.
  Chapter Summary    11


<!-- pdf p. 33 -->
12 
  CHAPTER 1  Structure of the Principal–Agent Problem
■ Throughout Part 1 of the book, we’ll assume that the principal and agent
agree on a linear contract, which stipulates that the agent will receive a dol­
lars in base pay, plus b dollars for every dollar of output the agent produces.
In other words, the contract stipulates that Y = a + bQ.
■ Throughout most of Part 1, we’ll assume that the production function link­
ing the agent’s effort to his output takes the form Y = dQ. In our baseline
example, we’ll simplify this even further and just assume that Y = Q. Note
that this doesn’t allow for any uncertainty in the production process.
■ Because we assume the agent chooses his effort level after both parties agree
on the contract, we have to solve the principal–agent problem by backwards
induction. In other words, we first have to figure out how the agent will react
to every possible contract (a, b). Only once we’ve done that can the princi­
pal figure out which contract will yield the highest profits for her while still
remaining acceptable to the agent.
   Discussion Questions
	 1.	 Aside from firms hiring workers, what are some other examples of a
­principal–agent relationship?
	 2.	 Suppose the agent described in this chapter receives a generous employment
offer from another firm while he’s deciding whether to accept this princi­
pal’s contract. Mathematically, how would that enter into the principal–agent
problem outlined here?
	 3.	 True or false: In the model described in this chapter, we assume that effort,
E, is an inferior good to the agent because it is something he dislikes. Hint:
you might want to consult a basic microeconomics textbook (or Wikipedia)
for the definition of an inferior good.
	 4.	 True or false: The contract (a, b) = (−5, 0.6) is one of an infinite number
of possible contracts the principal could possibly offer the agent. Under this
contract, the agent must pay the principal 5 dollars to get the job. Once he
has the job, the agent will earn 60 cents for every dollar of output he gener­
ates for the principal.
