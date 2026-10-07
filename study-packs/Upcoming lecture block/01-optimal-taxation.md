# 1. Optimal taxation: raising revenue while preserving useful choices

Topic IDs: **PUB-TAX-RAMSEY, PUB-TAX-OPTINC**, with prerequisite bridges **PUB-TAX-EB, PUB-TAX-MCPF, PUB-TAX-PROG, PUB-SWF**. [Pack index](index.md). Read the theory before the attempt-first practice; the solutions follow all questions.

The [course guide](<../../00 Course info/Course guide 2026-27.pdf#page=2>) assigns R&G chapter 16 to **6 October 2026**. [Lecture 6](<../../Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf>) is present, with 33 PDF pages. It stresses commodity taxes, the cost of public funds and tax-system evaluation. Optimal income taxation receives substantial treatment here because chapter 16 is assigned, although Edgeworth's model is absent from those slides. No current Public week-6 exercise sheet was found in the repository at the audit date, 7 October. Historical absence from papers is no reason to omit assigned theory.

Main sources: [R&G chapter 16 text](<../../Textbooks/Rosen & Gayer (md)/16 - Efficient and Equitable Taxation.md>) and [original textbook PDF](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=530>). All book pages below are **PDF pages**, not printed pages. The discussion labels are section titles, rather than invented numbered subsections.

## 1.1 The question, the actors and the missing tax instrument

Suppose a government needs a fixed amount of revenue to pay for a service. Its first question is how to collect it with the smallest loss from changing people's choices. In this initial model it takes the spending requirement as fixed, treats distribution as irrelevant, and cannot use lump-sum taxation. A tax payment is money transferred to government; it is not itself destroyed. The **excess burden** is the additional loss caused when people give up transactions worth more than their resource cost. Later we relax the absence of distributional concerns.

The book starts with Stella, who consumes goods X and Y and leisure. The government chooses tax rates; Stella chooses consumption and hours of work. Prices, her hourly wage and her total available time stay fixed. Define (X,Y) as quantities, $P_X,P_Y$ as pretax prices, $w$ as hourly wage, $T$ as time endowment, and $L$ as leisure hours. Work is (T-L); income is (w(T-L)). With no saving,

\[
w(T-L)=P_XX+P_YY.
\]

Expand the bracket and move leisure expenditure to the right:

\[
wT-wL=P_XX+P_YY
\quad\Longrightarrow\quad
wT=P_XX+P_YY+wL.
\]

Leisure has an opportunity cost: one more hour of leisure means giving up $w$ euros of earnings. This does not mean that leisure is literally bought from a shop. [R&G, “Optimal Commodity Taxation,” PDF pp.530–532](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=530>).

If a common ad valorem rate $t$, measured relative to producer prices, applied to **all three goods**, the budget would be

\[
wT=(1+t)P_XX+(1+t)P_YY+(1+t)wL.
\]

Factor out (1+t) and divide:

\[
\frac{wT}{1+t}=P_XX+P_YY+wL.
\]

Relative prices are unchanged. The tax acts like a fixed reduction of the value of the time endowment. The book's own example is a 25% common tax: the available value becomes $1/1.25=0.8$ of its original level, a 20% reduction. Because Stella cannot change her endowment, this behaves like a lump-sum tax. Her choices can still change through an **income effect**; zero excess burden does not mean zero change in consumption. It means no substitution distortion relative to an equivalent lump-sum payment.

In practice leisure cannot be taxed this way. A common tax on only X and Y leaves

\[
wT=(1+t)(P_XX+P_YY)+wL.
\]

Subtract (wL), then divide by (1+t):

\[
P_XX+P_YY=\frac{w(T-L)}{1+t}.
\]

The net wage in goods is now (w/(1+t)). This is equivalent to a proportional earnings tax with rate $\tau=t/(1+t)$, since $1-\tau=1/(1+t)$; the numerical rates $t$ and $\tau$ are not equal. Uniform commodity taxation preserves the X–Y relative price but changes their prices relative to leisure. [Lecture 6, PDF pp.6–8](<../../Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf#page=6>).

**Exam-ready:** A uniform tax including leisure leaves relative prices unchanged and is equivalent to a lump-sum reduction of the time endowment. A uniform tax excluding leisure distorts the choice between consumption and leisure.

## 1.2 Why excess burden rises faster than the tax rate

The next model asks which market is the least costly place to raise another euro. Assume constant marginal production cost, perfectly elastic supply, unrelated goods with zero cross-price effects, and a linear demand curve over the relevant change. For welfare measurement the book uses **compensated demand**: it holds utility constant to isolate substitution responses. The lecture and exam calculate point elasticities from the supplied demand curves. Do that in those exercises, while remembering that the general welfare interpretation requires the compensated response. [R&G, “The Ramsey Rule,” PDF pp.532–536](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=532>).

For one market define $P_0,Q_0$ as untaxed price and quantity, $t$ as the ad valorem rate, and $\epsilon=|dQ/dP|P_0/Q_0$ as the positive elasticity magnitude at the original equilibrium. Supply stays at $P_0$, the buyer price rises to $(1+t)P_0$, and the price wedge is $tP_0$. From the elasticity definition,

\[
\Delta Q=\left|\frac{dQ}{dP}\right|\Delta P
=\epsilon\frac{Q_0}{P_0}(tP_0)
=\epsilon Q_0t.
\]

Here $\Delta Q$ is the positive quantity reduction, not a signed change. The removed units had willingness to pay above marginal cost. The triangle between demand and supply has height $tP_0$ and width $\Delta Q$:

\[
EB=\tfrac12(tP_0)(\epsilon Q_0t)
=\tfrac12\epsilon P_0Q_0t^2.
\]

Holding $\epsilon,P_0,Q_0$ fixed, differentiate with respect to $t$:

\[
\frac{dEB}{dt}=\tfrac12\epsilon P_0Q_0(2t)=\epsilon P_0Q_0t,
\qquad
\frac{d^2EB}{dt^2}=\epsilon P_0Q_0>0.
\]

Doubling the rate quadruples this excess burden. A high tax already discourages some transactions, so further taxation removes transactions with increasingly large net benefits. More elastic demand also creates a wider triangle for the same tax. This is a comparison holding the untaxed price and quantity fixed; elasticity alone does not determine the absolute burden when markets differ in size. For a unit tax (u), substitute $t=u/P_0$:

\[
EB=\tfrac12\epsilon\frac{Q_0}{P_0}u^2.
\]

On the graph, label horizontal quantity, vertical euros per unit, horizontal supply $P_0$, buyer price $(1+t)P_0$, and quantities $Q_0,Q_t$. The revenue **rectangle** is $tP_0Q_t$; the excess-burden **triangle** is a separate cost. [Lecture 6, PDF pp.10–15](<../../Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf#page=10>).

## 1.3 Ramsey: equalise the cost of the last euro

Imagine the last euro raised in X costs 30 cents of excess burden while the last euro in Y costs 10 cents. Reducing X revenue by a euro and increasing Y revenue by a euro keeps revenue fixed and lowers the loss by 20 cents. At the interior optimum these marginal costs must be equal. Equality is about **excess burden per extra euro of revenue**, not total burden or the derivative with respect to a tax rate.

The lecture and textbook footnote use a fixed tax-base approximation. Set $B_X=P_XQ_X$ and $B_Y=P_YQ_Y$, the pretax expenditures. Government chooses $t_X,t_Y\ge0$ to minimise

\[
\tfrac12\epsilon_XB_Xt_X^2+\tfrac12\epsilon_YB_Yt_Y^2
\quad\text{subject to}\quad B_Xt_X+B_Yt_Y=R.
\]

$R$ is required revenue. In this derivation $B_i,\epsilon_i,R$ stay fixed. Introduce a multiplier $\lambda$, a device that puts the revenue restriction into the objective:

\[
\mathcal L=\tfrac12\epsilon_XB_Xt_X^2+\tfrac12\epsilon_YB_Yt_Y^2
+\lambda(R-B_Xt_X-B_Yt_Y).
\]

Differentiate separately with respect to each chosen rate:

\[
\frac{\partial\mathcal L}{\partial t_X}=\epsilon_XB_Xt_X-\lambda B_X=0,
\quad B_X(\epsilon_Xt_X-\lambda)=0
\quad\Longrightarrow\quad\epsilon_Xt_X=\lambda.
\]

Similarly $\epsilon_Yt_Y=\lambda$. Cancel the positive bases, equate the results, then divide by $\epsilon_Xt_Y$:

\[
\epsilon_Xt_X=\epsilon_Yt_Y
\quad\Longrightarrow\quad
\frac{t_X}{t_Y}=\frac{\epsilon_Y}{\epsilon_X}.
\]

This is the **inverse elasticity rule**. Since $\Delta Q_i/Q_i=\epsilon_it_i$, it also implies equal proportional quantity reductions. The book calls that the Ramsey rule. Its general treatment extends beyond unrelated goods, whereas the simple own-elasticity ratio does not: with cross-price effects one cannot simply apply this two-market calculation. [R&G, “A Reinterpretation of the Ramsey Rule,” PDF pp.535–536, and calculus footnote 4, PDF p.565](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=535>); [Lecture 6, PDF pp.17–23](<../../Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf#page=17>).

To determine levels rather than ratios, substitute $t_i=\lambda/\epsilon_i$ into revenue:

\[
R=\lambda\left(\frac{B_X}{\epsilon_X}+\frac{B_Y}{\epsilon_Y}\right),
\quad
\lambda=\frac{R}{B_X/\epsilon_X+B_Y/\epsilon_Y}.
\]

The second derivatives are $\epsilon_iB_i>0$, so the objective is convex and these feasible rates minimise it. If $R=0$, both rates are zero. If a demand is perfectly inelastic, division by its zero elasticity is invalid: it can raise revenue without this demand distortion. Rate caps, untaxable goods or prohibitive rates introduce corners and require checking feasible boundaries.

**A useful accuracy qualification.** The fixed-base revenue constraint is an approximation, not literal revenue after a large tax. With linear demand $Q_t=Q_0(1-\epsilon t)$, actual revenue is $r(t)=B(t-\epsilon t^2)$. Thus

\[
\frac{dr}{dt}=B(1-2\epsilon t),
\quad
\frac{dEB}{dr}=\frac{\epsilon Bt}{B(1-2\epsilon t)}
=\frac{\epsilon t}{1-2\epsilon t}.
\]

This calculation assumes positive quantities and the rising-revenue branch (\epsilon t<1/2). For small rates it is close to $\epsilon t$, the lecture expression. Within this particular linear independent-market model, equal marginal costs still imply equal $\epsilon_it_i$, but the rates satisfying a specified actual revenue differ from the fixed-base solution. Do not present the approximation as a globally valid recipe for any elasticity or tax size. This is an independently derived clarification of the lecture's assumptions.

**Exam-ready:** Elastic demand means consumers can readily substitute away from the taxed good. A given price increase therefore causes a larger quantity reduction and efficiency loss, so minimising the total cost of revenue requires a lower tax rate on the more elastic good.

## 1.4 Efficiency, leisure and fairness

R&G illustrates the fairness problem with insulin and with bread versus caviar. Inelastic demand does not establish moral entitlement to a high tax. If poor households spend a larger share on bread and society assigns greater welfare weight to them, low bread taxation can be desirable despite the extra efficiency cost. Two conditions matter: concern for redistribution and different consumption patterns by income group. If rich and poor buy goods in the same proportions, differential commodity rates cannot achieve redistribution through that channel. **Vertical equity** concerns fair burdens across different abilities to pay; it is a separate criterion from efficiency. [R&G, “Equity Considerations,” PDF pp.536–537](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=536>).

The **Corlett–Hague** insight addresses a different omission: leisure is untaxed. A relatively high tax on a good complementary to leisure indirectly taxes leisure. The book uses video games: if taxing games reduces their joint consumption with leisure, it partly offsets the distortion favouring leisure. This does not justify taxing every enjoyable good more; it requires the relevant complementarity and model conditions. Likewise, the family application says the less elastic earner should face a higher marginal earnings tax for efficiency, assuming spouses' labour responses are approximately unrelated. The book's empirical discussion refers to husbands and wives, but its footnote says the economic distinction is primary versus secondary earner, not sex itself. [R&G, PDF pp.536–538 and footnote 6, p.565](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=536>).

**Exam-ready:** The inverse elasticity rule minimises excess burden under its assumptions. A welfare-maximising government may depart from it when high taxes on necessities burden the poor disproportionately and society values redistribution.

## 1.5 Optimal income taxation: why behavioural assumptions change the answer

The government now chooses taxes on people's income. Define pretax incomes $y_i$, tax payments $T_i$, and disposable incomes $c_i=y_i-T_i$. Edgeworth assumes fixed total pretax income, identical utility functions (U(c)) with (U'>0,U''<0), and an additive social welfare function $\sum_iU(c_i)$. For required revenue $R$, total disposable income is fixed at $\sum_i y_i-R$. The book's result is complete equalisation when redistribution is unrestricted. [R&G, “Edgeworth's Model,” PDF pp.543–544](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=543>).

Why? Transfer a small amount (dc) from a richer person A to a poorer person B, holding the total fixed. The welfare change is approximately

\[
dSW=-U'(c_A)dc+U'(c_B)dc=[U'(c_B)-U'(c_A)]dc>0.
\]

Diminishing marginal utility makes an extra euro more valuable to B. Transfers remain beneficial until marginal utilities are equal. Since the functions are identical and marginal utility strictly declines, equal marginal utility implies equal disposable incomes. Formally differentiate $U(c_A)+U(C-c_A)$, where $C$ is their fixed total:

\[
\frac{dSW}{dc_A}=U'(c_A)-U'(C-c_A)=0.
\]

Thus $c_A=C-c_A=C/2$. The second derivative is (U''(c_A)+U''(C-c_A)<0). For many people the same argument applies pair by pair. With revenue collection alone and no grants, the book describes levelling the highest incomes downward; complete equality may require redistribution as well as collection.

A 100% marginal rate on income above the levelling threshold means an extra pretax euro in that range yields no extra disposable income. It is compatible with the model because income is assumed **fixed**: people cannot respond by producing less. It is not a recommendation independent of those assumptions. Unequal welfare weights, unequal utility functions, transfer restrictions and endogenous incomes change the result.

Modern analysis lets people choose work and leisure. An income tax reduces the consumption gained from another hour of work, so redistribution can shrink the available income. The optimum balances the utility gain of supporting low-income people against the cost of distorted choices. Income effects can complicate hours responses, so do not assert that every individual always works less. What matters for the optimal policy is the behavioural response relevant to the revenue base and welfare cost. [R&G, “Modern Studies,” PDF pp.544–546](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=544>).

The book illustrates a **linear income tax** with a common grant $\alpha>0$ and marginal rate $t$:

\[
T(y)=-\alpha+ty,
\qquad c=y-T(y)=y-(-\alpha+ty)=\alpha+(1-t)y.
\]

Do not confuse the tax payment (T(y)) with the time endowment $T$ in section 1.1. With the book's $\alpha=3000,t=0.25$, income 20,000 produces tax 2,000 and disposable income 18,000. Income 6,000 produces tax $-1500$, a grant of 1,500, and disposable income 7,500. Zero tax occurs at $y=\alpha/t=12000$.

For (y>0), the average tax rate is

\[
ATR(y)=\frac{T(y)}{y}=t-\frac{\alpha}{y},
\quad
\frac{dATR}{dy}=\frac{\alpha}{y^2}>0,
\quad
\frac{dT}{dy}=t.
\]

A constant marginal rate can coexist with a rising average rate: this flat marginal tax is progressive. On the tax graph income is horizontal, tax liability vertical, intercept $-\alpha$, slope $t$; on the disposable-income graph the intercept is $\alpha$, slope (1-t). R&G reports a 48–50% optimum in the particular study it discusses, while immediately stressing uncertainty about value judgments and elasticities. It is a model result, not a universal optimal rate or a current policy fact.

**Exam-ready:** Edgeworth obtains equal disposable incomes because identical diminishing marginal utility and fixed total income make redistribution costless. Once taxation changes work choices, additional equality has an efficiency cost, so optimal marginal rates generally differ from the confiscatory result.

## 1.6 The costs and institutions a useful tax model must remember

Lecture 6, PDF pp.24–27, connects taxation to project appraisal. If raising the last euro produces $m$ euros of marginal excess burden, its **marginal cost of public funds** is (1+m). A project with marginal benefit 1.10 should not automatically be financed when the marginal financing cost is 1.30. For a constructed teaching example, a 200-euro project financed where excess burden is a constant 25% of revenue has resource-plus-financing cost $200+0.25(200)=250$. If the marginal cost varies as revenue is raised, add the changing marginal costs rather than multiplying the final marginal rate by all expenditure. The lecture's Betuwelijn construction-cost example illustrates why the accounting invoice understates the economic cost; its historical MCPF estimates are lecture illustrations, not updated estimates. [Lecture 6, PDF pp.24–32](<../../Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf#page=24>).

The remainder of assigned chapter 16 supplies useful extensions. A government providing a natural-monopoly service chooses a **user fee**. With decreasing average cost, marginal cost lies below average cost. Pricing at marginal cost gives efficient usage but leaves a deficit; pricing at average cost covers costs but deters some valuable usage. A two-part tariff combines an access charge with a per-unit marginal-cost price; the access charge can exclude low-demand users, so its efficiency is conditional. Ramsey pricing chooses markups to finance the deficit with minimal distortion. These are related to commodity taxation because both policies choose the final price facing users. [R&G, “Optimal User Fees,” PDF pp.538–543](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=538>).

**Time inconsistency** occurs when a promise that is optimal before people act is unattractive to keep afterward. The book's one-time wealth levy appears harmless once wealth is fixed, but savers anticipate later repetitions and change saving beforehand. Commitment institutions therefore matter. This is different from simply announcing a bad tax. [R&G, “Politics and the Time Inconsistency Problem,” PDF pp.546–548](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=546>).

**Horizontal equity** says equals should be treated equally, but defining equals is difficult. Equal observed income does not imply equal earning ability: the book compares people earning the same hourly wage who choose different hours. Its utility definition preserves equality and ordering of welfare; with common tastes and freely chosen jobs, wage adjustments can offset untaxed workplace amenities. Its rule definition instead objects to arbitrary tax classifications. Do not say the utility definition makes tax changes irrelevant: changing rules after people make hard-to-reverse commitments can create transitional inequities. [R&G, “Horizontal Equity,” PDF pp.548–552](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=548>).

Finally, **administration and compliance** consume real time and resources. **Avoidance** legally reduces liability; **evasion** illegally conceals it. The book's risk-neutral evasion model chooses concealed income $z\ge0$, with pretax income and work fixed. A marginal concealed euro saves the tax rate $t$; its expected marginal penalty is audit probability (p) times marginal penalty (F'(z)). At an interior optimum $t=pF'(z)$. If expected marginal cost already exceeds $t$ at zero and rises afterward, the optimum is no evasion. Higher audits or penalties discourage it under these assumptions. Risk aversion, guilt, job choices and endogenous audit probabilities qualify the model. [R&G, “Costs of Running the Tax System” and “Tax Evasion,” PDF pp.552–561](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=552>).

These extensions receive less lecture emphasis than Ramsey. Knowing their mechanisms completes the assigned chapter without turning earlier topics into extra modules.

## 1.7 Attempt-first practice

All original exercise parameters are retained below. Prompts are faithful condensed restatements; use the linked original for the full wording. Book and constructed questions carry no official exam marks.

1. **Prerequisite check.** Explain why the revenue rectangle is not excess burden. If inverse demand is $P=a-bQ$, obtain $dQ/dP$, and write the absolute point elasticity at $P_0,Q_0$.
2. **8 July 2025 resit, Q3b–d, 6 marks.** [Context and Q3b, PDF p.6; Q3c–d, p.7](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf#page=6>). Market X has supply $P=50$, demand $P=120-Q/4$. (b, 2) Find excess burden of a unit tax 5. (c, 2) Y has untaxed demand elasticity 2 and horizontal supply; should X's ad valorem rate be higher or lower if total excess burden is minimised? (d, 2) Explain the inverse-elasticity logic in at most four sentences.
3. **24 October 2025 final, Q10a–b, 3 marks.** [PDF p.18](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=18>). Rich, Middle and Poor consume only R, M and P respectively, consume all income, and choose hours worked. Supply is horizontal; demand elasticities are 3, 1 and $1/3$. (a, 2) Give the relations between optimal ad valorem rates when minimising excess burden. (b, 1) Classify the system's progressivity in one sentence.
4. **R&G DQ16.1, PDF p.563.** [Original](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=563>). Cable demand elasticity is $-0.51$, satellite $-7.40$. What ratio of rates minimises the cost of given revenue? State the calculation's assumptions.
5. **R&G DQ16.8a–d, PDF p.564.** [Original](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=564>). Assess: (a) a proportional tax on all goods including leisure equals a lump-sum tax; (b) equal commodity rates maximise efficiency; (c) average-cost natural-monopoly pricing breaks even but is inefficient; (d) horizontal equity requires taxing Tom's free workplace fitness-room access when Jerry lacks access.
6. **Tutorial bridge, week 5 exercise 5.1a and c.** [Questions, PDF p.1; official answers p.8](<../../Public Economics (Delfgaauw)/Week 5 - Taxation incidence and efficiency/Exercises/Exercises week 5.pdf#page=1>). Duck-tape demand is $P=10-(2/3)Q$, supply $P=1+(1/3)Q$. (a) Find untaxed equilibrium and demand/supply elasticities. A unit tax of 3 is imposed on suppliers. (c) Find excess burden and explain its relation to elasticities. This earlier sheet is a prerequisite bridge, not a newly released Ramsey tutorial; part b's equilibrium calculation is supplied in the worked solution because part c needs it.
7. **Constructed numerical transfer exercise.** Untaxed expenditures $B_X=1200,B_Y=800$, elasticities (0.5,2), required revenue $R=120$. Use the lecture's fixed-base approximation to find rates and excess burdens. Check equal marginal excess burden. Then calculate the actual linear-demand revenue at those rates and explain the difference.
8. **Constructed optimal-income check.** A linear schedule has $\alpha=2400,t=0.30$. Find taxes, disposable incomes and average rates at incomes 4000 and 16000; find the zero-tax income. Explain why the schedule is progressive. For a separate fixed-total-income Edgeworth economy with disposable-income total 30,000 shared by two identical people with $U(c)=\ln c$, derive the allocation.

## 1.8 Worked solutions

### 1. Prerequisites — independently derived

Revenue pays the government and can finance useful spending; excess burden is the net surplus lost from altered choices beyond the transfer. Invert demand: $bQ=a-P$, so $Q=(a-P)/b$. Differentiating with respect to $P$, holding $a,b$ fixed, gives $dQ/dP=-1/b$. Thus $\epsilon=P_0/(bQ_0)$. Using the inverse-demand slope $-b$ directly as $dQ/dP$ is a common error.

### 2. R25 Q3b–d — official logic, intermediate algebra added

The question wants a welfare triangle first and an elasticity-based rate comparison afterward. At $P_0=50$, $50=120-Q_0/4$, so $Q_0/4=70$, $Q_0=280$. With a 5-euro tax and horizontal supply, buyer price is 55, and $55=120-Q_t/4$ gives $Q_t=260$. Thus $EB=\frac12(5)(280-260)=50$. The scheme awards one mark for equilibria and one for excess burden.

Invert demand to $Q=480-4P$. Differentiate with respect to price: $dQ/dP=-4$. Evaluate at the **untaxed** equilibrium:

\[
\epsilon_X=4\frac{50}{280}=\frac57<2=\epsilon_Y.
\]

Hence $t_X/t_Y=2/(5/7)=14/5=2.8$, so X receives the higher rate. Q3c awards one mark for elasticity and one for the rate comparison; the ratio is useful checking detail rather than an additional requirement. A four-sentence-cap Q3d answer can be the three-sentence exam-ready explanation in section 1.3. The original scheme places these last two subparts on **PDF p.7**, correcting the topic-map p.6 shorthand.

### 3. F25 Q10 — official logic, tax-base interpretation added

Equal marginal excess burdens imply $3t_R=t_M=(1/3)t_P$. Therefore

\[
t_R=\frac{t_M}{3}=\frac{t_P}{9},
\qquad t_R:t_M:t_P=1:3:9.
\]

One mark is for the rule and one for the numerical relations. Merely ordering the rates loses the quantitative-relations mark unless the scheme's partial-credit provision applies. The concise final answer is: **The system is regressive because the average tax rate falls as income rises.** With expenditure taxed at producer-price rate $t_i$, a citizen consuming all income pays fraction $t_i/(1+t_i)$ of gross expenditure income; this increases with $t_i$, so the rate ordering still yields the scheme's regressive result. Do not reverse it because rich people may pay more euros in some other setting.

### 4. DQ16.1 — independently derived

Use magnitudes, not a negative tax rate: $t_{cable}/t_{satellite}=7.40/0.51\approx14.51$. This is an efficiency calculation with given revenue, no equity weights or lump-sum instruments, horizontal supply and unrelated compensated demands. Cable and satellite can plausibly substitute for one another; the exercise therefore requires explicitly stating that its simple ratio assumes away such cross-price effects. Observed ordinary demand estimates need not equal the compensated elasticities needed by welfare theory. The number alone is not a complete policy recommendation.

### 5. DQ16.8 — independently derived from chapter 16

(a) True under fixed wage and time endowment: dividing the all-goods budget by (1+t) leaves relative prices unchanged and scales the fixed endowment.

(b) False in general for the feasible commodity taxes when leisure is untaxed. In the unrelated-goods case differing elasticities require differing rates; including leisure at the common rate gives the special lump-sum case.

(c) True in the chapter's decreasing-average-cost natural monopoly. Price equals average cost so total revenue equals total cost, but price exceeds marginal cost; some users value additional output more than its marginal cost yet do not buy it.

(d) Uncertain without defining horizontal equity and the labour-market assumptions. A compensation-based comparison can include the amenity, but the utility definition with identical preferences and freely chosen jobs allows wages to adjust until net rewards are equal. The book does not support an unconditional requirement to add a separate fitness-room tax regardless of these adjustments.

### 6. Tutorial bridge — official logic, algebra added

Equate demand and supply: $10-(2/3)Q=1+(1/3)Q$, so $9=Q_0$ and $P_0=4$. Inverted demand is $Q_D=15-1.5P$, so $dQ_D/dP=-1.5$; inverted supply is $Q_S=3P-3$, so $dQ_S/dP=3$. Elasticity magnitudes are $\epsilon_D=1.5(4/9)=2/3$ and $\epsilon_S=3(4/9)=4/3$.

With unit tax 3, buyer-price supply becomes $P_C=4+Q/3$. Equating it with demand yields $10-2Q/3=4+Q/3$, hence $Q_t=6$. Consumers pay $P_C=6$, producers receive $P_S=P_C-3=3$. Excess burden is $\frac12(3)(9-6)=4.5$, separate from revenue $3(6)=18$. More elastic supply or demand permits a greater quantity response to a given wedge, hence a larger loss triangle, holding the rest of the comparison fixed. Do not apply the chapter-16 horizontal-supply Ramsey formula to this sloping-supply market without checking its assumptions. These results match the sheet's PDF p.8 answer.

### 7. Constructed transfer — independently derived

\[
\lambda=\frac{120}{1200/0.5+800/2}=\frac{120}{2800}=\frac3{70}.
\]

Then $t_X=\lambda/0.5=3/35\approx0.085714$, $t_Y=\lambda/2=3/140\approx0.021429$. Revenue check: $1200(3/35)+800(3/140)=102.8571+17.1429=120$. Both $\epsilon_it_i=3/70$.

\[
EB_X=\tfrac12(0.5)(1200)(3/35)^2\approx2.2041,
\quad EB_Y=\tfrac12(2)(800)(3/140)^2\approx0.3673.
\]

Total burden is approximately 2.5714. Both linear demands fall proportionally by $3/70\approx4.2857\%$. Actual revenue is therefore $120(1-3/70)\approx114.8571$, below 120. That does not refute the fixed-base arithmetic; it exposes its approximation. A graph or slider using actual post-tax quantity must display this distinction explicitly.

### 8. Constructed optimal income — independently derived

At 4000: $T=-2400+0.30(4000)=-1200$, disposable income $4000-(-1200)=5200$, average rate $-1200/4000=-0.30$. At 16000: $T=-2400+4800=2400$, disposable income 13600, average rate $0.15$. Zero tax requires $0.30y=2400$, so $y=8000$. The marginal rate stays 30%, while average rates rise because the fixed grant is a larger share of low incomes.

For Edgeworth, maximise $\ln c_A+\ln(30000-c_A)$ over (0<c_A<30000). Differentiating with respect to $c_A$: $1/c_A-1/(30000-c_A)=0$. Multiply by the positive product $c_A(30000-c_A)$: $30000-c_A-c_A=0$, hence $c_A=c_B=15000$. The second derivative is (-1/c_A^2-1/(30000-c_A)^2<0), and utility goes to minus infinity at either boundary. This is a verified maximum, conditional on fixed total income and identical utilities.

## 1.9 Revision test

You understand this module when you can derive the untaxed-leisure distortion, distinguish revenue from excess burden, calculate an inverse-demand elasticity, derive a rate ratio with all assumptions stated, explain the equity objection, and distinguish constant marginal from constant average income-tax rates. For chapter completeness, also explain the mechanisms behind user-fee deficits, commitment problems, horizontal equity and evasion. Historical evidence supports prioritising Ramsey calculation practice; it does not license neglecting optimal-income theory or predict the next exam.
