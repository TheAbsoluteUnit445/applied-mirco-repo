# Chapter 20: A Simple Model of Tournaments

_Source: `Personnel Economics.pdf`, PDF pages 364-389. Page markers below are PDF page numbers._


<!-- pdf p. 364 -->
­343
If you’ve ever been graded “on a curve” or worked hard to outshine your co-
workers and win a promotion, you’ve participated in what economists call a tour­
nament. What are the advantages and disadvantages of using tournaments to
motivate workers? In Chapter 20, we begin our analysis of that question by show­
ing that under some simple circumstances, tournaments can be just as efficient as
the individual pay-for-performance schemes we studied in Part 2. In other, more
special cases, for example among risk averse workers facing common produc­
tivity shocks, tournaments can even be more socially efficient than individual
rewards. That said, tournaments introduce strategic considerations into workers’
effort decisions, in the sense that each worker’s optimal effort now depends on
how hard he expects his competitors to work. This makes it harder for workers to
choose effort levels and tends to create greater variability in worker performance
under tournaments than under comparable piece rates.
 20.1   The Basic Elements of a Two-Player Tournament
We begin our study of tournaments by introducing a formal model of a simple
tournament in which two agents compete to win a single bonus. Consider a prin­
cipal employing two agents, 1 and 2, whose production functions are given by

Q1 = d1E1 + ε1
(20.1)
and

Q2 = d2E2 + ε2,
(20.2)
where Ei is worker i’s effort, di is a productivity parameter, Qi is worker
i’s measured output (or “performance”), and the random variable εi is worker
i’s luck. As we have always done, let the agents’ disutility-of-effort functions be
given by V(Ei), with V′ and V″ > 0.
20
A Simple Model
of Tournaments


<!-- pdf p. 365 -->
344 
  CHAPTER 20  A Simple Model of Tournaments
One familiar way the principal might compensate these two workers is
via individual incentive contracts that link each worker’s pay to his or her own
performance. If these contracts are linear (i.e., if Yi = ai + biQi for i = 1, 2),
then all the results in Part 1 of the book will apply. We’ve already studied a
large number of issues that affect the optimal design of individual piece rate
contracts like these.
A different way to motivate these two workers is to give both workers a cer­
tain level of base pay, a, let them work, then pay a bonus of size S to the worker
whose performance turns out to be best.1 In other words, the principal could offer
the following contracts to its two workers:
                   
Y1 = a     
if Q1 < Q2

(20.3)
                         a + S   if Q1 > Q2
and
                   
Y2 = a     
if Q2 < Q1
(20.4)
                         a + S   if Q2 > Q1.
Thus, the two workers compete to produce the highest output, Q, then the loser
gets a and the winner gets a + S.2 It is common to refer to the difference be­
tween these two payoffs, S, as the prize spread in this tournament. Although we
have described S as a bonus, economists also use tournament theory to think
about promotions and promotion ladders in firms. In that case, you should think
of S as the total value to the worker of being promoted to the next rung in the
firm’s hierarchy.
With these basic elements of the tournament specified, we can now pose
the following two questions. First, given that we have decided to pay the work­
ers using a tournament, what is the best way to do it (i.e., what are the socially
efficient values of a and S)? Second, is there any advantage (or disadvantage) to
paying workers via a tournament versus individual piece rates? In other words,
if we define social surplus as the sum of profits and utility (as in Definition
4.1), does the optimal tournament generate more or less social surplus than the
1 While a (the pay of the non-winners) is typically positive in most real-world promotion
contests, nothing in the logic of tournaments requires it to be, for the same reason that a
can be negative in an optimal piece rate contract. Looking beyond the workplace, we do
sometimes observe negative levels of a, such as the entry fees in professional blackjack or
poker tournaments.
2 If there’s a tie between the two workers (i.e., Q1 = Q2), we can suppose that the principal flips a
coin to award the prize. For the types of luck distributions we study in this chapter, ties happen with
essentially zero probability (because the ε’s are drawn from a continuous distribution). Therefore, to
save clutter, we don’t include this possibility in our formal analysis. Nothing would change, however,
if we assumed ties were resolved by a coin toss.


<!-- pdf p. 366 -->
20.2  Effort and the Probability of Winning the Promotion    345
optimal piece rate system? The answer to this question will help us understand
whether (or when) it makes more sense to reward people based on their relative
or their absolute performance.
We’ll answer these questions in the first part of this chapter for a specific,
simple case of the two-player tournament model described previously. Specifi­
cally, we’ll use our baseline cost-of-effort function V(Ei) = Ei
2/2, assume that
both workers are equally able (d1 = d2 = d), and assume an especially tractable
form of luck, described following. Toward the end of the chapter, we’ll discuss
how the results change when we relax the assumptions of this simple model.
To anticipate the results, we’ll show that in this simple, baseline case, tourna­
ments and piece rates are equivalent in the sense that neither can outperform
the other. This equivalence breaks down when we change the assumptions, so
that sometimes tournaments outperform piece rates, whereas in other cases,
piece rates are better. Distinguishing those cases will be our task in the rest
of Part 4.
 20.2   Effort and the Probability of Winning the Promotion
Tournaments motivate workers because working harder increases a worker’s
chances of winning the prize. But in any competitive situation, my chances of
winning also depend on the efforts of my competitors. As a basis for our formal
model of tournaments, in this section we work out exactly how a player’s chances
of winning a competition depend on both the competitors’ efforts in a simple,
base-case example.
We begin by being more precise about how lady luck affects the outputs of
our two agents after they have decided how much effort to commit to their jobs.
Notice first that according to Equations 20.1 and 20.2 and the definition of the
contest, Worker 1 wins the contest if and only if

d(E1 – E2) > (ε2 – ε1).
(20.5)
(Recall that both workers are equally able, by assumption, so d1 = d2 = d.) This
makes sense: Worker 1 wins if the expected output gap resulting from his rela­
tive effort, d(E1 – E2), outweighs Worker 2’s relative luck, (ε2 – ε1). Next, to keep
things as simple as possible, let’s assume that Worker 2’s relative luck (ε ≡ ε2 – ε1)
follows a uniform distribution on the interval [–5, 5]. Although this sounds com­
plicated, it’s not. What it means, loosely speaking, is that “nature” picks a real
number between –5 and +5, with all real numbers having an equal chance of
being selected. Because the range of possible values is symmetric around zero,
nature is fair to the two contestants in the sense that the expected value of ε
(i.e., of the advantage conferred on Agent 2) is zero. A little more precisely, the
probability density function of a uniform distribution on [–5, 5] is a constant, as
shown in Figure 20.1.
One convenient consequence of this simple distribution is that the chance
that a draw of ε lies between any two adjacent integers (e.g., between 2 and 3) is


<!-- pdf p. 367 -->
346 
  CHAPTER 20  A Simple Model of Tournaments
10%. The chances that nature draws a negative number (ε < 0) are 50%, and the
chances that ε is less than any number x between –5 and +5 are given by

Prob (ε < x) = 0.5 + 0.1x.
(20.6)
Combining Equation 20.5 and 20.6, we can calculate the probability that worker
1 wins as

Prob (1 wins) = Prob [ε < d(E1 – E2)] = 0.5 + 0.1d(E1 – E2).
(20.7)
This also makes sense: The probability that Worker 1 wins the promotion
depends positively on that worker’s own effort but negatively on Worker 2’s
effort. If both agents put in the same effort (E1 = E2), then regardless of whether
that effort is high or low, the agents each have an even chance of winning [Prob
(1 wins) = 0.5]. If Worker 1 works harder than Worker 2, then Worker 1 will
have a better chance of winning than Worker 2 [Prob (1 wins) > 0.5].
To illustrate the effects of the two workers’ effort choices on the probability that
Worker 1 wins, Figure 20.2 graphs this relationship for an example where d = 1.
A final detail in understanding the effects of agents’ efforts on their
chances of winning concerns the employer’s measurement technology. A
simple way to model the effects of this technology is by changing the range of
the luck distribution from [–5, +5] to a general range given by [–R/2, +R/2].
Thus, if R = 10, Worker 2’s relative luck, ε, can take on any value between
–5 and +5, as shown in Figure 20.1 where the density of the distribution
(the height of the curve) equals 0.10. If R on the other hand equals 20, ε can
take on any value between –10 and +10, and the density becomes 0.05 (1/20)
instead of 0.10. Thus, higher values of R correspond to a greater spread, or
dispersion, in the distribution of relative luck, which would be the case if the
firm’s measurement technology was less accurate, or noisier. When produc­
tivity measurement is noisier, the same level of effect can give rise to a wider
range of measured output levels than before. For this more general case, we
have Result 20.1.
0
5
−2
−3
−5
f(ε)
0.1
ε
FIGURE 20.1. The Probability Density Function (pdf), f(ε), of a Uniform Distribution on
the Interval [–5, 5]
Notes: The area under a pdf between any two values of ε gives the probability that nature picks a number
between those two values. For example, the chances of picking a number between -3 and -2 are given by 1 (the
base of the rectangle) times 0.1 (its height) = 0.1, or 1 in 10.


<!-- pdf p. 368 -->
20.2  Effort and the Probability of Winning the Promotion    347
 RESULT 20.1
Effects of Worker Effort on the Probability of Winning
a Tournament
When two agents, i and j, have the same ability (d), and the distribution of their
relative luck (ε2 – ε1) is uniform on the interval [–R/2, +R/2], the probability that
worker i will win the promotion can be written as

pi(Ei, Ej) = 0.5 + αd(Ei – Ej),
(20.8)
where α = 1/R is the density of the uniform distribution. R, the range of the
distribution, measures the importance of luck in the production or productivity
measurement technology.
Let’s conclude this section by summarizing the determinants of who wins
the contest, as laid out in Equation 20.8. First, the probability that a worker wins
rises when that worker’s own effort increases and falls when the other worker’s
effort increases. Second, the probability of winning doesn’t depend on the play­
ers’ absolute effort levels, only on the difference between them (Ei – Ej). This
leads to the interesting possibility that if the two workers could agree to cut both
their effort levels by the same amount, neither worker’s chances of winning would
change; these workers would both be better off because they still get the same
expected pay but work less hard. We discuss this type of collusion in Chapter 21.
Third, note that (by design in our baseline example) the contest we have designed
is both fair and symmetric.
Prob (1 wins | E2 = 0)
E1
10
5
0
1.0
0.5
Prob (1 wins | E2 = 5)
FIGURE 20.2. The Probability That Worker 1 Wins, as a Function of Both Workers’ Effort
Levels (Example of d = 1)
Notes: Using Equation 20.7, when Worker 2 does nothing (E2 = 0), Worker 1 has a 50% chance of winning
if Worker 1 does nothing also. As Worker 1 raises the effort to above 0 (keeping E2 at 0), Worker 1’s chances
of winning rise above 50%. When Worker 2 chooses E2 = 5, Worker 1 has no chance of winning if Worker 1
picks E1 = 0. If Worker 1 raises the effort to 5 (keeping E2 at 5), Worker 1 achieves an even chance of winning;
choosing E1 > 5 raises Worker 1’s chances of winning above 50%.


<!-- pdf p. 369 -->
348 
  CHAPTER 20  A Simple Model of Tournaments
DEFINITION 20.1
A contest is fair if all agents who produce the same output (Q) have an equal
chance of winning.
DEFINITION 20.2
A contest is symmetric if it is fair and if all agents have the same productivity (d)
and the same cost-of-effort function V(E).
In symmetric, two-player contests, two workers who exert the same effort will
have equal chances of winning, that is, 50%. Fourth, in a tournament, the mar­
ginal effect of effort on the probability of winning (αd) increases with the preci­
sion with which output is measured, α = 1/R. For intuition, consider the decision
of an employee who is considering whether or not to work a bit harder in an office
setting. If productivity measurement is very precise, then the worker knows that
such extra effort is likely to be noticed: It won’t be in vain. In a very imprecise
world, however, the worker might assume that any extra effort will go unrec­
ognized, reducing that worker’s incentives to work. Last, the marginal effect of
effort on the probability of winning also rises with the workers’ productivity (d).
 20.3   The Agents’ Problem: Optimal Individual Effort, Given
the Contest Rules
As we learned in Part 1, principal–agent models need to be solved via back­
wards induction: We can’t figure out what the best contract is until we first work
out how the agent(s) would respond to every possible contract an agent might
face. Accordingly, our next step in modeling tournaments is to study the agents’
problem: How hard do we expect each agent to work when facing a tournament
described by the ordered pair (a, S)?
Taking a and S as given, let the disutility of effort be Ei
2/2. Then the expected
utility of Agent 1 is

EU1 = p1(E1, E2)[a+S] + [1 – p1(E1, E2)] a – E1
2/2
(20.9)

= a + p1(E1, E2) S – E1
2/2
(20.10)

= a + [0.5 + αd(E1 – E2)] S – E1
2/2.
(20.11)
Agent 1’s problem is to choose the effort, E1, to maximize his own utility (EU1),
taking as given the rules of the contract (a and S) and how hard Agent 1 expects
Worker 2 to work (E2).
Taking the derivative of Equation 20.11 with respect to E1 and treating Worker
2’s effort as given, the first-order condition for a maximum is αdS – E1 = 0.
Re-arranging, worker 1’s optimal effort is

E1 = αdS.
(20.12)


<!-- pdf p. 370 -->
20.4  Efficiency: Which Effort Levels Maximize the Size of the Pie?    349
The effect of each parameter on optimal effort should be intuitive. First of
all, effort is independent of a. This is similar to the piece rate problem in Part
1, where we found that rational self-interested agents’ effort choices should
be unaffected by the level of base pay. Second, optimal effort increases with
the prize spread, S, with worker productivity, d, and with the precision of
the firm’s performance measurement system, α. This makes sense: When the
prize spread increases, the principal is raising the stakes, which naturally
motivates workers. Similar logic applies to higher levels of d and α. An inter­
esting consequence is that because effort is the product of α, d, and S, a firm
with a noisy measurement system can always compensate for it by raising S.
Thus, imprecise output measures are not necessarily a problem in tourna­
ments. Third, because exactly the same math applies to Worker 2 as Worker 1,
Worker 2’s effort will also be given by E2 = αdS. In other words, we have
Result 20.2.
  RESULT 20.2
Effort and Luck in Symmetric Tournaments
In a symmetric tournament, all agents optimally pick the same level of effort. They
therefore all have the same chance of winning.
Although it seems intuitive (and fair) that the winner should be the hardest
worker, Result 20.2 shows that this is not in fact the case in fair tournaments
between equally matched opponents. Because the agents optimally work equally
hard, the winner of a symmetric tournament is determined purely by luck—that
is, by whether nature picks a high or low value of ε. Despite this, note that the
tournament is doing exactly what it is designed to do: eliciting high levels of effort
from both competitors.
Finally, even though Agent 1’s chances of winning the contest depend on
Agent 2’s effort, notice that E2 does not appear in Equation 20.12. Importantly,
this property—that Agent 1’s optimal effort choice does not depend on how hard
Agent 1 expects Agent 2 to work—is a special feature of the baseline example
we have chosen to solve in this chapter. In the language of game theory, agents’
optimal effort choices are dominant strategies only if the distribution of relative
luck is uniform.3 We discuss what happens when the agents’ optimal efforts are
interdependent in Section 20.6.
 20.4   Efficiency: Which Effort Levels Maximize the Size of the Pie?
As we discussed in Chapter 4, socially efficient contracts maximize the sum
of the firm’s profits and the workers’ utilities. This constitutes the total “pie”
3 A choice (i.e., an effort level) is a dominant strategy for player i if it is player i’s best choice
regardless of the choices made by all the other players.


<!-- pdf p. 371 -->
350 
  CHAPTER 20  A Simple Model of Tournaments
that can be divided between workers and firms using the lump sum transfer, a,
that flows between them. Regardless of how we feel about distributional issues
between workers and firms, there are good reasons to want contracts to be so­
cially efficient because improvements in efficiency always create an opportunity
to make both firms and workers better off. In this section, we find the socially
efficient effort levels in our baseline example (where the production functions
are given by Qi = dEi + εi, and effort cost functions equal Ei
2/2). Once we have
those effort levels, Section 20.5 will design a tournament that induces workers to
choose exactly those effort levels.
The firm’s expected profits from running a tournament in our example are
given by

E(Π) = Q1 + Q2 – 2a – S = dE1 + dE2 – 2a – S.
(20.13)
Total expected revenues from the two workers are Q1 + Q2. (The “relative luck”
term ε doesn’t appear because it has an expected value of zero.) Both workers
receive the base pay, a, but only the winner receives the bonus, S.
By the same logic, total expected utility for the two workers is given by

EU1 + EU2 = 2a + S – E1
2/2 – E2
2/2.
(20.14)
Adding Equation 20.13 and 20.14 yields

Total surplus = W = d(E1 + E2) – E1
2/2 – E2
2/2.
(20.15)
Notice that—just as in Section 4.2—the cash payments flowing between firms
and workers, a and S, drop out (these just divide the pie between the three
parties). Making the pie as big as possible therefore means maximizing the
difference between the total output that is produced, d(E1 + E2), and the total
disutility of producing it. Notice also that—aside from the fact that there are
now two workers—this is exactly the same definition of social welfare that
we used in the case of individual piece rates in Definition 4.1. The welfare
criterion we are trying to maximize does not depend on the institutional ar­
rangements (piece rates, tournaments, or something else) we are using. In­
stead, these institutions are just different tools we are using to try to achieve
the same goal.
Differentiating Equation 20.15 with respect to the two effort levels and set­
ting them equal to zero yields the first-order conditions

d – E1 = 0,
(20.16)
and

d – E2 = 0.
(20.17)
Solving these two equations for effort, we get that Ei = d for i = 1, 2. Summing
up is Result 20.3.


<!-- pdf p. 372 -->
20.5  Achieving Efficiency with the Optimal Tournament    351
  RESULT 20.3
Economically Efficient Effort Levels
Regardless of how the worker is paid, the economically efficient level of effort
from a worker with expected productivity Qi = dEi, and effort disutility Vi = Ei
2/2
is given by

Ei* = d.
(20.18)
 20.5   Achieving Efficiency with the Optimal Tournament
Having set our goal—getting both workers to pick socially efficient effort
levels—let’s now design a contest between them that achieves exactly that. One
point of this exercise is to show that optimal contests can look very much like
an arrangement we often see in firms: a group of workers are all guaranteed a
certain positive level of base pay, a > 0, while the best-performing member of the
group receives an additional bonus or promotion with positive value S. Second,
the exercise yields values of utility, profits, and other outcomes that can be com­
pared to what happens under efficient piece rates in the next section. To make
things really concrete, we’ll work with a very specific example: In this section
and the next, we therefore set α = 0.1 and d = 4.
Using Result 20.3 (Ei* = d), we now know that our goal is to induce both
workers to pick Ei = 4. Using Equation 20.5, our two agent’s effort choices given
the contest rules are E1* = E2* = 4 = αdS = 0.1(4)S = 0.4S. Rearranging, we see
 TABLE 20.1   UTILITY, PROFITS, AND OTHER OUTCOMES UNDER EFFICIENT TOURNAMENTS AND PIECE RATES
(1)
(2)
Socially Efficient Tournament
(a = 9 and S = 10)
Socially Efficient Individual Piece Rates
(a = –2 and b = 1)
Worker’s Expected Output (Q)
= dE + E(ε)
= 4(4) + 0
= 16
= dE
= 16
Worker’s Expected Income (Y)
= a + 0.5S
= 9 + 0.5(10)
= 14
= a + bdE
= –2 + 16
= 14
Worker’s Expected Utility (U)
= a + 0.5S – E2/2
= 14 – 42/2 = 6
= a + bdE – E2/2
= –2 + 16 – 42/2 = 6
Expected Profits Per Worker (Π)
= Expected output – Expected wage
= 16 – 14
= 2
= Expected output – Expected wage
= 16 – 14
= 2
Note: E(ε) denotes the expected value of epsilon.


<!-- pdf p. 373 -->
352 
  CHAPTER 20  A Simple Model of Tournaments
that to induce this choice, S must equal 10. With Ei = 4, each worker will produce
Qi = dE = 16 units of output in expectation. Supposing in addition (the reason
will soon be clear) that we give workers a base pay of a = 9, we can now work
out the exact levels of workers’ income and utility and the firm’s profits in this so­
cially efficient tournament. The results are displayed in column (1) of Table 20.1.
In sum, when we set the prize spread, S, to induce efficient effort levels; and when
we pay each worker a base pay of a = 9, each worker will produce an expected
output of 16 units, have a total expected income of 14 units, and an expected util­
ity of 6. The firm will earn an expected profit of 2 units per worker employed.
 20.6   A Theorem: The Equivalence of Tournaments
and Piece Rates
Now that we’ve completely characterized output, income, utility, and profits in a so­
cially efficient tournament, we’re in a position to compare efficient tournaments to
efficient piece rates. To that end, let’s now suppose that instead of competing for a
promotion, each of the two workers in the previous example (where d = 4 and V(E)=
E2/2) was compensated via an ordinary piece rate. Recall that under this scheme,
Worker 1’s expected income would be given by Y1 = a + bdE1, and that the socially
efficient piece rate is b = 1. Last, suppose that a = –2 in this piece rate contract.
How will utility, profits, and other outcomes compare to the efficient tournament?
Faced with this piece rate contract, both workers will now choose E* = 4.
Why? Under the piece rate, Worker 1’s expected utility is a + bdE1 – E1
2/2. As
we did in Chapter 2, maximizing this yields the familiar result that E* = bd =
1(4). Column (2) of Table 20.1 works out the remaining outcomes, all of which
are identical to the tournament outcomes in column (2). This illustrates the Tour­
naments Equivalence Theorem.
  RESULT 20.4
The Equivalence Between Tournaments and Piece Rates
By appropriately choosing the parameters of the contract (a and b in the case of
piece rates; a and S in the case of tournaments), any overall outcome (i.e., any com­
bination of output, effort, worker utility, and firm profits) that can be generated by
one type of contract can also be generated by the other. These outcomes include
the socially efficient one, which maximizes profits plus utility. This result requires all
workers to be risk neutral.
One important implication of Result 20.4 is that tournaments can econo­
mize on employee monitoring and evaluation costs: To see this, suppose that an
employer can’t observe the workers’ output well, but the employer can observe
workers’ relative output with some error (i.e., assign rough ranks to workers). As
long as workers are risk neutral, Result 20.4 says that the firm and its workers can


<!-- pdf p. 374 -->
20.6  A Theorem: The Equivalence of Tournaments and Piece Rates     353
do just as well with a tournament as with a piece rate. Indeed, because—as we
already noted—the employer can always compensate for imprecise measurement
by raising the prize spread, tournaments can work just as well as piece rates even
with noisy assessments of relative productivity.
The theory of tournaments might also help explain a fact that many of us
seem to take for granted: Workers often receive big raises when they are pro­
moted. Such raises are, however, rather hard to understand in more familiar
economic models (like those in most labor economics texts), which argue that
workers are always paid their marginal product: It’s hard to imagine that a worker
who gets a 50% raise on promotion from assistant manager to chief manager
becomes 50% more productive overnight. However, if promotions are seen as
a prize for which the assistant managers compete, these large salary jumps are
easier to understand.
Although we illustrated Result 20.4’s equivalence theorem in a very simple
example, the theorem applies in a much more general set of circumstances. For
example, the equivalence of piece rates and tournaments does not depend on
our use of a linear production function, a quadratic disutility-of-effort func­
tion, or the assumption of only two agents. Also, with one important proviso,
Result 20.4 does not depend on our very special assumption that the players’
relative luck follows a uniform distribution. The proviso is that for essentially
all luck distributions other than the one we have studied, the agents’ (privately)
optimal effort levels will not be dominant strategies as they were in Section
20.3. In these other cases, a player’s optimal effort level will depend on what
that person expects co-worker(s) to do, complicating the agent’s choice problem
if we continue to assume that the agents all make their effort decisions at the
same time. Theoretically, economists often forecast how agents will behave in
situations like this by assuming the agents are able to arrive at a Nash equilib­
rium of their actions. As it turns out, the equivalence theorem between tourna­
ments and piece rates extends to these other luck distributions, provided we
are willing to assume the agents’ (interdependent) effort decisions are Nash
equilibrium choices.
DEFINITION 20.3
Nash equilibrium, a core concept in game theory, is simply an outcome where no
agent can improve his choice, given the choices of all the other agents. In a two-
person tournament, a Nash equilibrium of the effort game between the agents
can be found by (a) deriving Agent 1’s preferred choice for every possible effort
level of Agent 2: E1* = f 1(E2); (b) deriving Agent 2’s preferred choice for every pos­
sible effort level of Agent 1: E2* = f 2(E1); then (c) finding the intersections (there
could be more than one) of these two reaction functions in (E1, E2) space. These
intersections identify effort choices that are utility maximizing for both agents and
are consistent with each other, in the sense that each agent behaves as the other
expects him to.


<!-- pdf p. 375 -->
354 
  CHAPTER 20  A Simple Model of Tournaments
Unfortunately it is not always easy for groups of real people engaged in stra­
tegic interactions to converge on a Nash equilibrium: In addition to being cogni­
tively demanding, it requires all the players to know each other’s preferences and
to be confident that all the other players are just as well-informed and rational.
Because that is hardly guaranteed, actual behavior in real tournaments tends to
be quite a bit more variable (both over time and across people) than Nash equi­
librium predicts. Still, some experiments show that, at least on average, agents in
these situations do make Nash equilibrium choices; so Nash behavior provides at
least a rough guide to average behavior.4 Summarizing is Result 20.5.
  RESULT 20.5
Strategic Considerations Make Effort Choices in Tournaments
Harder to Predict than Under Individual Piece Rates
When agents’ optimal effort choices are not dominant strategies, selecting optimal
effort requires agents to forecast their co-workers’ effort choices. Because this is
difficult and often inaccurate, actual agent behavior tends to be more variable and un­
predictable in a tournament than under a theoretically equivalent piece rate scheme.
 20.7   Some Extensions: Many Players, Prizes, and Stages
In this section, we briefly explore how the results derived earlier in this chapter
change when we make our model of tournaments more realistic in a number of ways.
We start by asking how things change when there are more than just two contestants.
Many Players
Probably the most important thing to know about multiplayer tournaments is that
they can be modeled in exactly the same way we’ve been doing so far. Most of
the results we’ve derived, including Results 20.2 through 20.5, continue to apply.
One interesting new question that arises with multiple players, however, is the
following: Keeping everything else (including the total size of the single, win­
ning prize, S) the same, how does adding more equally able contestants change
the effort levels of the players in a tournament? As I’ve learned by informally
asking people (including economists), it turns out that different people have quite
different intuitions about what should happen.
One very sensible intuition follows from Result 20.2: Because all equally
able agents have the same chance of winning the prize in equilibrium, each one
will have a smaller chance of winning as more contestants are added. This very
intuitive 1/N effect reduces each agent’s incentives to work as the number of com­
petitors increases. On the other hand, let’s not forget Adam Smith’s famous intu­
ition that increased competition can make us work harder. To see this, consider
4 See, for example, Bull, Schotter, and Weigelt (1987).


<!-- pdf p. 376 -->
20.7  Some Extensions: Many Players, Prizes, and Stages    355
the extreme case of a competition with only one player (e.g., an automatic pro­
motion after a year in the job). Because that player is guaranteed to “win,” the
player has no incentive to work at all. Adding a competitor will certainly raise the
incentives to work; and adding two competitors might do so even more (because
now the player has to work hard enough to beat two people instead of just one to
win). This second, competition effect tends to raise effort levels as contestants are
added, while keeping the single prize constant in value.5 In sum is Result 20.6.
  RESULT 20.6
Adding More Contestants to a Competition for a Single, Fixed
Prize May Raise or Lower Agents’ Optimal Effort Levels
This is because of two opposing effects that occur as contestants are added: a 1/N
effect that reduces efforts and a competition effect that raises efforts. An interest­
ing implication for employers is that allowing more workers to compete for a prize
can increase work incentives without the need to make the prize any bigger.
Prize Structure
Another issue that arises once we begin to think about tournaments with more than
two players is the question of optimal prize structure. For example, in a tournament
with three players, should there be a single “top” prize for the best performer only,
or should there also be a smaller second prize? Perhaps surprisingly, there is still a
lot that economists don’t know about questions like these; for example, it was only
recently proved that a single, top prize is the best motivator in an important class of
tournaments called Tullock Contests (Tullock, 1987; Schweinzer & Segev, 2012).6
Psychological factors may also affect optimal prize structure. For example, in ad­
dition to the widely publicized jackpot prizes, most large lotteries (which can have
millions of contestants) also offer a large number of smaller prizes. This may be a
form of positive, variable reinforcement that induces players to keep buying tickets.
Finally, getting prize structure right can be critical in contests where there are
substantial ability differences between players. Consider, for example, a multiplayer
competition where one player is so dominant that he or she is almost guaranteed to
win the top prize. If there are no prizes for coming in second, third, or lower, none
of the lower-ranked players will have much incentive to supply effort: The top prize
has been taken “out of competition” by the presence of a superstar. Indeed, Jennifer
Brown (2011) shows that reallocating money from the top prize to the second prize
raises lower-ranked players’ efforts when there’s a dominant player in the game. We’ll
study tournaments with unevenly matched players in much more detail in Chapter 22.
5 List, Van Soest, Stoop, and Zhou (2014) show that these two effects exactly cancel each other
out when agents have uniformly distributed, independent luck. In addition, they show that the 1/N
effect dominates when the density of the luck variable is decreasing, and they provide lab and field
evidence (the latter from a fishing tournament) in support of these predictions.
6 In Tullock contests, a player’s chance of winning is given by the ratio of that player’s effort to the sum
of all the other players’ efforts. For additional details, see Dechenaux, Kovenock, and Sheremeta (2015).


<!-- pdf p. 377 -->
356 
  CHAPTER 20  A Simple Model of Tournaments
Sequential and Multistage Contests
The tournament models we have studied so far are simultaneous-move games in
the sense that all the agents in a competition must choose their effort levels without
knowledge of other workers’ choices or luck. The motivation for this assumption is
to capture the essence of Yogi Berra’s insightful dictum on the game of baseball:
“It ain’t over till it’s over.”7 In other words, even if competitors (say, for a promo­
tion) are picking effort levels and experiencing luck over a continuous period of
time, a player can’t know all the actions and luck that will be experienced by that
player’s competitors until the game is over, that is, until the time when neither
player can do anything anymore. Thus, in this sense, most real contests are at
least in part simultaneous-move games because the players have to make choices
without complete knowledge of their competitors’ actions and luck. This will be
especially true in workplace tournaments where—in contrast to sports where
everyone knows the score during the course of the game—workers may not have a
good idea of “who’s ahead” at any particular time during the competition.
DEFINITION 20.4
In a simultaneous-move game, all the participants must choose their actions with­
out any knowledge of the other player’s actions.
That said, there are many real competitions where competitors do see some
aspect of their competitors’ previous effort decisions (and luck realizations) when
picking their own effort. Examples include monthly sales tournaments (at least
when workers know something about each other’s sales during the month), most
promotion tournaments, and almost all sports (with the possible exception of “one-
shot” events like the 100 m sprint!). As you might expect, economists and others
have modeled these types of competitions in several ways, the simplest of which
is a sequential contest. For example, if the agents in Section 20.3 took turns in se­
lecting their effort levels (either by just moving once each, or by going back and
forth any finite number of times), that would be a sequential contest. In contrast
to simultaneous-move contests (which are solved by finding a Nash equilibrium of
the game played by the agents with each other), sequential contests are solved by
backwards induction.8 Notice, by the way, that backwards induction is not necessary
in the special case of the uniform relative luck distribution studied at the start of
this chapter: Here, because the agents’ optimal effort choices don’t depend on each
other’s efforts, agents will behave identically whether they move first, second, or
simultaneously with the other player.
7 Berra’s famous quote was made in July 1973 when Berra’s Mets trailed the Chicago Cubs by 9½
games in the National League East. The Mets rallied to clinch the division title in their second-to-last
game of the regular season. For more Yogi wisdom, see https://en.wikipedia.org/wiki/Yogi_Berra.
8 For example, in the case of two agents taking one turn each, Agent 1 (the first mover) first figures
out how to expect Agent 2 to respond to every possible level of Agent 1’s effort (E1). Once Agent 2’s
expected Stage-2 behavior has been worked out, Agent 1 can then decide on an optimal effort level. The
logic is identical to the sequential interaction between the principal and agents described in Section
1.7, and to the Stackelberg duopoly games that are often discussed in intermediate microeconomics.


<!-- pdf p. 378 -->
20.7  Some Extensions: Many Players, Prizes, and Stages    357
DEFINITION 20.5
In a sequential contest, the players take turns choosing their effort levels according
to some prespecified rule. In cases where players move more than once, the winner
of a sequential contest is determined by adding up each player’s total performance in
all periods of the game. The winner is the player with the highest total performance.
Sequential contests become especially interesting and relevant to real-world
competitions when the players experience some luck each time they choose an
effort level, and when their competitors can see the results of this luck [e.g.,
by observing their competitor’s current performance (Q = dE + ε) during the
course of a repeated interaction]. An obvious example is when both players can
see the current score of a game, which reflects the effort and luck of both players
up to that point. Whenever luck matters in this way, and whenever feedback of
this sort is available to players, a fundamental transformation occurs: Even when
both players are evenly matched at the start of a sequential game, random luck in
the early stages almost always turns what was a symmetric contest into an asym­
metric one. To win the game, a team that is seven points behind has to beat the
other team by more than seven points during the rest of the game to win. Thus,
there is a close link between asymmetric contests (i.e., contests that start out
being biased in favor of one player or the other) and sequential contests (which
become asymmetric as soon as one player takes a lead over the other).
  RESULT 20.7
Sequential Contests and Asymmetric Contests
If luck affects contestants’ performance, and if contestants can observe each
other’s performance during the course of a sequential contest, essentially all
­sequential contests—even those between equally matched players—become
asymmetric competitions after they start. Agents who experience good luck early
have an advantage in the remaining competition for the purely mechanical reason
that they are now “ahead”: They don’t need to perform as well as the other player
during the rest of the game to win.
We will study asymmetric contests in much more detail in Chapter 22, but it
may be of interest to highlight some of the questions that arise when differences
in effort or luck in early phases of a contest make the later phases asymmetric.
For example, we might expect that players who move later (followers) will tend to
take it easy when their competitor(s) had bad luck early in the game. In addition
to taking it easy, followers who find themselves ahead could also become more
cautious, taking actions to reduce the role of luck in the rest of the game. For
example, they might “run out the clock” in basketball or American football. Both
of these responses by players who find themselves ahead in the game—working
less hard and becoming more cautious—are realistic possibilities in promotion
tournaments, raising the issue of how much feedback employers should give their
workers on interim performance. Indeed, if feedback sometimes reveals that the


<!-- pdf p. 379 -->
358 
  CHAPTER 20  A Simple Model of Tournaments
contest has essentially already been decided, withholding feedback may be a
very useful way to prevent likely winners from “coasting”—and likely losers
from “giving up”—near the end of the evaluation period.
  RESULT 20.8
Feedback in Sequential Contests
It may not always be optimal for principals to provide interim information (feed­
back) on the relative performance of agents in a sequential contest. This is because
when agents learn that one is very far ahead of the other, both agents may reduce
their efforts relative to a situation where they think both players still have a realistic
chance of winning.
DEFINITION 20.6
A multistage contest is a series of contests between multiple players where the
overall winner depends in some way on the number of contests won. One example
is a round-robin tournament, where each player plays against every other, and the
overall winner has the most wins.
A second type of multistage contest that is probably much more relevant to
the workplace is the elimination tournament, where a large initial pool of con­
testants is narrowed down with only the winners of early rounds advancing to
later rounds. Promotion ladders inside firms share these features and have been
studied as such since Rosen’s famous 1986 article.
Salary
Rank in the Firm
The pay
increment for
each successive
promotion is
higher than the
one before it.
FIGURE 20.3. A Large Corporation’s Typical Salary Scale


<!-- pdf p. 380 -->
20.7  Some Extensions: Many Players, Prizes, and Stages    359
Continuous Relative Reward Systems
The tournaments we have studied so far are a type of relative reward system be­
cause they remunerate employees on the basis of the relative instead of their ab­
solute performance. They do so by awarding a lump sum prize to the top (or the
top few) performers in a group of employees. But tournaments are not the only
form of relative reward schemes. In particular, it is possible to pay people for their
relative performance in a way that links each person’s pay more smoothly to his
or her relative performance. For example, in a two-person contest, each person, i,
could be paid Yi = a + b(Qi – Qj), where Qj is the output of the other worker. In
this scheme, each worker is paid b dollars for every dollar of output that exceeds
Prize Structure in Elimination Tournaments: CEO Pay and
the FIFA World Cup
In a seminal article, University of Chicago
economist Sherwin Rosen (1986) argued that
promotion ladders can be usefully thought of
as a type of elimination tournament. Because
in many organizations it is important—if not
essential—to win promotions at lower levels of
the firm’s hierarchy to be promoted to higher
ranks, the employees who make it to the top are
usually the ones who have won a series of ear­
lier promotions inside the same firm.
When firms operate this way, Rosen noticed
that the total reward from winning any given pro­
motion has two distinct components: (1) the raise
that is earned for the current promotion and (2)
the fact that winning this promotion gives you the
right to compete for higher-level promotions. This
second component, sometimes called the option
value of winning, is not present in a single-stage
contest and (by the same logic) is not present in the
competition for the highest position in the firm.
Given this logic, Rosen noticed that there
may not be any need to attach raises to pro­
motions at lower ranks at all: The option value
of early promotions alone might be sufficient to
motivate people to compete for them. Indeed,
prizes in sports elimination tournaments are
often very small in the early rounds compared
to later levels. For example, in the 2014 FIFA
World Cup in Brazil, teams advancing from the
first round (of 32 teams) to the next (but not ad­
vancing beyond that) earned an extra $1 million
compared to those who lost in the first round. In
contrast, the gap between first and second prize
was 35 – 25 = $10 million. This prize structure
bears a strong resemblance to the salary struc­
ture in many large companies, shown in Figure
20.3, with large increases near the top of the
ladder and much smaller ones further down.
To explain this pattern, Rosen noted that like
the World Cup, the “final” few promotions in
a firm’s ladder have no option value. Near the
bottom of the hierarchy, the future opportuni­
ties attached to a promotion may be a substantial
reward in themselves, so not much extra cash is
needed to induce workers to compete for such
promotions. At the top, a larger amount of cash is
required to motivate workers because these few
remaining promotions do not open up a path to
higher ranks. Of course, this may not be the only
reason why CEO pay is so high—or why it has
increased so much in recent decades—but Rosen
argues that it could be a contributing factor.


<!-- pdf p. 381 -->
360 
  CHAPTER 20  A Simple Model of Tournaments
the other worker’s output. This could be generalized to a larger number of work­
ers with the pay policy Yi = a + b(Qi – Q), where Q is the mean output of all the
workers in a comparison group.9
DEFINITION 20.7
In a continuous relative reward system, each participant’s pay is a continuous function
of that worker’s relative performance. For example, if a worker’s relative performance
is the difference between performance Qi and the group’s average performance Q,
the pay policy Yi = a + b(Qi – Q) would be a continuous relative reward scheme.
Promotions as Signals: The Problem of the Star Administrative
Assistant
Because they interact with their employees on
a regular basis, most employers probably know
more about their own employees’ abilities than
they know about other firms’ workers. Whenever
employers have this type of private information
about their workers, promotions may have a cost
to employers that we have ignored so far in this
chapter. Specifically, if high-ability workers are
more likely to win promotion contests, and if
other potential employers can see that a worker
has been promoted, then promoting a worker
will reveal new information to other employers:
that the promoted worker was the best in her
pool of co-workers. This problem—that promo-
tions might reveal employers’ private informa-
tion about who the good workers are to other
firms—was first studied by Cornell economist
Michael Waldman in 1984.
In his article, Waldman (1984) demonstrates
two potential consequences of the scenario just
described, the first of which is underpromo-
tion: Compared to a world in which accurate
information on each employee’s productivity is
freely available to all potential employers (as
in professional sports and scientific research,
where player performance and publication data-
bases can be searched by anyone), employers will
promote fewer workers. Able, low-level workers
are sometimes concealed from other firms by
not promoting them to avoid these top perform-
ers being hired away, or “poached.” Put another
way, employers have an incentive to keep the
top performers in their lower ranks (e.g., a star
administrative assistant) invisible to other firms.
Second, when firms actually do promote
workers, they will need to give promoted work-
ers large raises. This is not because the work-
ers have suddenly become more productive but
because the act of promotion reveals to other
potential employers that the worker has a high
level of ability and potential. Wages must there-
fore jump upward to prevent promoted workers
from being poached by other employers. Notice
that this is a different (and complementary)
explanation for why wages jump at promotion
from the one advanced in Section 20.6, where
we argued that promotions can be seen as prizes
designed to motivate workers to supply effort.
9 Interestingly, continuous relative reward schemes are actually somewhat easier to model
theoretically than tournaments because they avoid the need to model how the probability of winning
a lump sum reward depends on the efforts of all the agents as we did in Section 20.2.


<!-- pdf p. 382 -->
20. 8  Tournaments with Risk-Averse Agents    361
Examples of continuous relative reward schemes include the policy of
grading students “on a curve.” In this policy, the class’s average grade is set in
advance, so a student’s grade depends only on his performance relative to his
classmates. Workplace examples include any situation where a worker’s peers
are used as a standard against which to judge an individual’s performance, as
well as any policy that links pay to average peer performance or to a worker’s
rank in some comparison group. Pay schemes with at least one of these proper­
ties are quite common, and we will study a number of them later in this part
of the book. Examples will include contract farming, agricultural labor, and
mutual fund managers.
 20. 8   Tournaments with Risk-Averse Agents
How do the results of this chapter—including Result 20.4 on equivalence—
change if agents are risk averse rather than risk neutral? Although it might seem
intuitive that risk-averse workers will dislike tournaments, a little reflection re­
veals that working under a tournament does not necessarily expose a worker to
more risk than working under an individual piece rate. To see this, consider the
pay distributions associated with the two schemes in Figure 20.4. If a worker’s
output is given by Q = dE + ε, her pay under a linear individual piece rate will
be given by Y = a + bdE + bε. If, in turn, the random variable ε has a bell-
shaped distribution (like a normal distribution, e.g.), then for any given level of
effort, the distribution of the worker’s possible pay levels will be given by the
bell-shaped curve in Figure 20.4. Most of the time, the worker’s pay will be in
a range of values near the middle of the distribution (say, between a and a + S),
but every once in a while (when the worker’s luck is either very good or very bad)
the worker could end up with very low or high levels of pay outside that range.
  RESULT 20.9
The Relative Riskiness of Tournament versus Piece Rate Pay
Because tournaments eliminate the chance of receiving extreme levels of pay, they
do not necessarily increase a worker’s compensation risk compared to individual
piece rates. Thus it is possible, but not guaranteed, that a risk-averse worker would
prefer a tournament-based pay scheme to an individual piece rate scheme offering
the same expected value of income.
In a tournament, however, the worker’s pay can take on only two values: a if
the worker loses, and a + S if the worker wins. Although this adds to the riski­
ness of pay by eliminating the possibility of ever being paid some number be­
tween a and a + S, it also reduces the riskiness of pay by eliminating the chance
the worker will ever learn less than a (or more than a + S). Thus, it is quite pos­
sible that a risk-averse worker might prefer a tournament to an individual piece


<!-- pdf p. 383 -->
362 
  CHAPTER 20  A Simple Model of Tournaments
rate because the tournament guarantees that the worst thing that can ever happen
to pay is that the worker doesn’t win the prize for being best in the group.10 Thus,
purely on the basis of which pay scheme exposes workers to more risk, it is not
immediately obvious that tournaments are riskier for workers than individual
pay schemes.
On the other hand, an additional source of uncertainty associated with tour­
naments may make them less attractive to risk-averse workers. Specifically, in
contrast to individual piece rates, in tournaments, a worker’s pay depends on
a co-worker’s performance, which can be hard to predict due to the strategic
considerations described in Result 20.5. Second, even if we could be sure that all
workers choose Nash equilibrium effort levels, workers may not have a good idea
of how able their competitors are likely to be. This is especially important when
people are deciding whether or not to enter a competition—a topic we return to
in Chapter 23.
A second reason why risk-averse workers might prefer relative to absolute
reward systems applies equally to tournaments and to continuous relative reward
schemes. This is the fact that relative reward schemes by their very nature auto­
matically insure workers against common shocks to their productivity.
10 This downside risk of individual piece rates can however be mitigated by pay policies such as
Safelite’s PPP policy that guarantees a minimum pay level (subject of course to keeping one’s job).
See Chapter 8.
Pay
Frequency
Distribution of
pay under piece rates
a
a + S
Two possible pay levels
under a tournament
FIGURE 20.4. The Distribution of Pay Under Tournaments versus Piece Rates


<!-- pdf p. 384 -->
20. 8  Tournaments with Risk-Averse Agents    363
DEFINITION 20.8
Common productivity shocks are random events that affect the output of all
workers in a group the same way. For example, if the “luck” variables ε1 and ε2 in
Equations 20.1 and 20.2 were given by
ε1 = μ + ν1   and   ε2 = μ + ν2,
the random variable μ would be considered a common shock, while the indepen­
dent random variables ν1 and ν2 would be considered idiosyncratic, or worker-
specific shocks.
Common shocks occur in wide variety of workplace contexts. For example,
the monthly sales of all the car salespeople at a dealership tend to rise when the
local economy is doing well, when the weather is good, and when the government
introduces a new subsidy for fuel-efficient vehicles. The productivity of all the
data entry workers or customer relations agents in an office tends to fall when the
computer network slows down, when an important set of files has been corrupted,
or when new government regulations increase record-keeping requirements. All
the wheat farmers in a county suffer when the rains don’t come, all the Uber
drivers in a city experience a surge in their revenues when there’s a convention in
town, and all the manufacturing workers in the United States produce less reve­
nues for their employers when the U.S. dollar appreciates vis-à-vis the currencies
of the countries where their products are sold. All of these common shocks can
lead to sizable and random fluctuations in a worker’s output that are no fault of
the worker: Output may fall considerably even though workers continue to supply
the same amount of effort. If risk-averse workers in these situations are paid an
individual piece rate like those studied in Part 1, these workers could have highly
unpredictable earnings, which they will dislike.
A useful and appealing feature of tournaments and other relative reward
schemes is that they automatically insure risk-averse workers against common
productivity shocks. For example, if the main sales incentive in a car dealership
is a $5,000 bonus for the employee with the highest sales in a given month, work­
ers will not be penalized when the group as a whole has a bad month.11 Further,
this insurance doesn’t blunt workers’ incentives to sell cars because the insurance
is only against events (rain, economic downturns) that are outside an individual
worker’s control. And finally, since risk-averse workers should be willing to sac­
rifice some wages for this extra security, relative pay schemes have the potential
to make both workers and employers better off than pay schemes that depend on
a worker’s absolute performance only.
11 Essentially, by comparing workers to each other, relative reward schemes automatically make
contracts state contingent in the way recommended for risk-averse workers in Section 5.2: If this
month’s sales target is your co-workers’ average performance, the target in Figure 5.1 is automatically
reduced in bad times. This might help explain why we rarely observe employee pay plans that are
explicitly linked to measures of weather, local business conditions, or other common factors.


<!-- pdf p. 385 -->
364 
  CHAPTER 20  A Simple Model of Tournaments
  RESULT 20.10
Tournaments and Other Relative Pay Schemes Insure Workers
Against Common Shocks to Their Productivity
Whenever workers are paid on the basis of their relative instead of their absolute
performance, they will not be financially penalized by negative shocks, such as bad
weather or poor business conditions, that reduce the productivity of all workers in
their comparison group.
 20.9   Relative Pay Schemes in Action: The Market for Broilers
Chickens that are raised for meat (as opposed to egg laying) are called broil­
ers in the United States. As it turns out, the market for broilers is a classic
principal–agent problem that nicely illustrates the ability of relative reward
schemes to insulate risk-averse agents against common productivity shocks.
The main facts and concepts are presented in an article by Knoeber (1989).
The system he describes, sometimes known as contract farming, is also
widely used in some other agricultural contexts, including the market for
eggs, turkey, and pork.
A principal in the U.S. broiler industry is a large company such as Perdue or
Tyson, known as an integrator. Instead of raising chickens themselves, integrators
write contracts with many individual farmers, known as growers, to do this work.
Every 6 to 9 weeks, the integrator sends a new batch of chicks to a grower, whose
job it is to house and feed them until they are ready to be sold for slaughter. Im­
portantly, the integrator also supplies (at its own expense) all the chicks’ feed and
any necessary veterinary services during this period. The process is illustrated
in Figure 20.5.
How are the growers compensated in this arrangement? At the end of the
“growing” period, integrators pay the growers a certain amount per pound of
broiler produced. To encourage the growers to care for the chicks in a way that
economizes on feed and vet services, this price depends on the amount of feed
Grower
Grower
Grower
Grower
Broilers
Chicks, feed,
vet services
Integrator
(e.g., Purdue, Tyson)
FIGURE 20.5. Organization of the Broiler Market


<!-- pdf p. 386 -->
20.9  Relative Pay Schemes in Action: The Market for Broilers    365
and vet services used, with low-cost producers receiving a higher price. The in­
teresting feature for our purposes is that the price a grower gets depends not on
absolute costs but only on relative cost performance, compared to a dozen or so
other growers in the area (about a 20-mile radius). This is a continuous relative
reward scheme where each grower’s performance is benchmarked relative to the
other growers in the local geographic area.
Why are relative rewards used in this market? To understand this, Knoeber
(1989) first rules out a few possible explanations. First, he notes that relative as­
sessment of growers in this market is not part of a promotion ladder (like those
discussed in Section 20.7) because contract growers are almost never hired as
employees by the big integrator companies. Knoeber also notes that this rela­
tive pay policy doesn’t save on measurement and monitoring expenses (as we
argued in Section 20.6) because the company maintains detailed cost and per­
formance records regardless. Thus, he argues that the relative reward scheme is
designed to incentivize risk-averse growers to save costs while insuring them
against common productivity shocks. Indeed, we expect growers to be risk averse
because they are typically family farmers who take out large loans to build barns
and buy equipment. Having a more predictable income stream would seem to be
quite valuable to them.
What are the productivity shocks that affect growers in this market? These
include fluctuations in weather (which affect how much chicks eat) and local
disease outbreaks (which can consume a lot of expensive veterinary services).
Also important is the breed of chicks that has been supplied to the growers. In­
tegrators are constantly experimenting with new feed formulas and new breeds
of chicks in an effort to produce faster-growing, healthier chicks; and some
breeds inevitably turn out to be cheaper to raise than others. Because tying
growers’ pay to the random results of Tyson’s feed and breeding experiments
(and weather and local disease outbreaks) exposes them to unnecessary risk,
Knoeber (1989) argues that eliminating this risk by comparing growers to others
who are exposed to the same chicks, feed, and weather makes them better off.
Indeed, Knoeber calculates that payment by relative output eliminates about
half the potential variance in growers’ income, without compromising incen­
tives in any significant way.
Knoeber (1989) points out that are some other advantages to using relative
pay in broiler production as well. One is that the system facilitates innovation:
By insulating growers from the risk associated with new breeds of chicks and
types of feed, relative pay lowers the costs to integrators of experimenting
with new methods. Another is that the reward formula adapts more easily
than straight piece rates do to technological progress affecting all growers
the same way: If technical improvements make it cheaper and easier for ev­
eryone to raise chicks, the piece rate per pound will eventually need to be ad­
justed downward (a problem we’ll consider in detail when we study the ratchet
effect). This periodic adjustment won’t be necessary if growers are paid on a
relative basis only.
Finally, consider one incentive problem in principal–agent relationships
that we haven’t yet discussed: principals’ incentives to honestly assess the


<!-- pdf p. 387 -->
366 
  CHAPTER 20  A Simple Model of Tournaments
productivity of their agents. If agents’ productivity isn’t completely visible to
both agents and principals, unscrupulous principals paying piece rates have an
incentive to underreport their workers’ true productivity (because then they will
owe agents less money). Although one hopes that most employers avoid such
behavior voluntarily to maintain a good reputation, employers who use rela­
tive reward schemes are not subject to this temptation in the first place. To see
this, notice that a firm running a tournament between two workers commits in
advance to pay a total amount of 2a + S to its workers, regardless of how either
worker performs. Thus, performance evaluation in a tournament only affects
how a fixed amount of pay is distributed among workers, so the firm cannot save
money by misrepresenting workers’ performance. This final advantage of rela­
tive pay schemes should be particularly useful in contexts where employers may
not be able to rely on strong reputations for honest evaluation of their agents’
performance, such as new firms or markets with a lot of employer turnover.
  RESULT 20.11
Additional Advantages of Relative Pay Schemes
In addition to insuring workers against common shocks, relative pay schemes
1. Facilitate the principal’s ability to experiment with new production methods by
sheltering workers’ pay from the effects of these experiments.
2. Reduce the need to continually adjust piece rates when innovations raise pro­
ductivity levels.
3. Eliminate any temptation by principals to misrepresent workers’ true productiv­
ity levels.
   Chapter Summary
■ Tournaments are an alternative to piece rates as a way to motivate workers.
They work by giving prizes to the top performer(s) in a group.
■ Under certain conditions (including worker risk neutrality) tournaments can
theoretically deliver identical results to any set of individual piece rates,
though tournaments are more affected by strategic interactions between
workers than piece rates are.
■ Tournaments may economize on the cost of measuring employee perfor­
mance because they can function with just an imprecise measure of relative
performance.
■ Elimination tournaments are a type of multistage contest that can be used to
model promotion ladders in firms.


<!-- pdf p. 388 -->
■ Continuous relative reward systems differ from tournaments by linking pay
continuously rather than discontinuously to relative performance.
■ Both tournaments and continuous relative reward systems automatically
insure workers against common shocks to their productivity.
   Discussion Questions
	 1.	 Are you convinced by Professor Rosen’s argument for why raises at the top
of the corporate hierarchy are so high? Why or why not? What important
features of the job market for top executives does his analysis ignore?
	 2.	 In this chapter, we gave two reasons for why wages tend to jump upward
when workers are promoted. What are they, and can you think of any others?
   Suggestions for Further Reading
For additional analysis of optimal prize structure in contests, see Moldovanu and
Sela (2001), Szymanski and Valletti (2005), and Schweinzer and Segev (2012).
For additional analysis and evidence on multistage contests, see Harbaugh
and Klumpp (2005), Gilsdorf and Sukhatme (2008), Fu and Lu (2012), and Groh,
Moldovanu, Sela, and Sunde (2012). Konrad (2009) provides a useful review of
this literature, with applications to political competitions and innovation races as
well as personnel economics.
For additional analysis of employers’ incentives to keep high-performing
workers in their lower ranks invisible, see Milgrom and Oster (1987), Bernhardt
and Scoones (1993), Bernhardt (1995), and DeVaro and Waldman (2012).
For more on contract farming, see National Public Radio’s story retrieved
from http://www.npr.org/blogs/thesalt/2014/02/20/279040721/the-system-that-
supplies-our-chickens-pits-farmer-against-farmer.
   References
Bernhardt, D., & Scoones, D. (1993). Promotion, turnover, and preemptive wage
offers. American Economic Review, 83, 771–791.
Bernhardt. D. (1995). Strategic promotion and compensation. Review of Eco­
nomic Studies, 62, 315–339.
Brown, J. (2011). Quitters never win: The (adverse) incentive effects of competing
with superstars. Journal of Political Economy, 119, 982–1013.
Bull, C., Schotter, A., & Weigelt, K. (1987). Tournaments and piece rates: An
experimental study. Journal of Political Economy, 95, 1–33.
References    367


<!-- pdf p. 389 -->
368 
  CHAPTER 20  A Simple Model of Tournaments
Dechenaux, E., Kovenock, D., & Sheremeta, R. M. (2015). A survey of experi­
mental research on contests, all-pay auctions and tournaments. Experimental
Economics, 18, 609–669. doi:10.1007/s10683-014-9421-0
DeVaro, J., & Waldman, M. (2012). The signaling role of promotions: Further
theory and empirical evidence. Journal of Labor Economics, 30(1), 91–147.
Fu, Q., & Lu, J. (2012). The optimal multi-stage contests. Economic Theory, 51,
351–382.
Gilsdorf, K. F., & Sukhatme, V. (2008). Testing Rosen’s sequential elimination
tournament model: Incentives and player performance in professional tennis.
Journal of Sports Economics, 9, 287–303.
Groh, C., Moldovanu, B., Sela, A., & Sunde, U. (2012). Optimal seedings in
elimination tournaments. Economic Theory, 49, 59–80.
Harbaugh, R., & Klumpp, T. (2005). Early round upsets and championship blow­
outs. Economic Inquiry, 43, 316–329.
Knoeber, C. R. (1989). A real game of chicken: Contracts, tournaments, and the
production of broilers. Journal of Law, Economics and Organization, 5(2),
271–292.
Konrad, K. (2009). Strategy and dynamics in contests. Oxford, England: Oxford
University Press.
List, J., Van Soest, D., Stoop, J., & Zhou, H. (2014, March). On the role of group
size in tournaments: Theory and evidence from lab and field experiments
(NBER Working Paper No. 20008). Cambridge, MA: National Bureau of Eco­
nomic Research.
Milgrom, P., & Oster, S. (1987). Job discrimination, market forces, and the invis­
ibility hypothesis. Quarterly Journal of Economics, 102, 453–476.
Moldovanu, B., & Sela, A. (2001). The optimal allocation of prizes in contests.
American Economic Review, 91, 542–558.
Rosen, S. (1986). Prizes and incentives in elimination tournaments. American
Economic Review, 76, 701–715.
Schweinzer, P., & Segev, E. (2012, October). The optimal prize structure of sym­
metric Tullock contests. Public Choice, 153(1), 69–82.
Tullock, G. (1967). The welfare costs of tariffs, monopolies, and theft. Economic
Inquiry, 5(3), 224–232.
Szymanski, S., & Valletti, T. M. (2005). Incentive effects of second prizes. Euro­
pean Journal of Political Economy, 21, 467–481.
Waldman, M. (1984). Job assignments, signaling, and efficiency. Rand Journal of
Economics, 2(Summer), 255–267.
