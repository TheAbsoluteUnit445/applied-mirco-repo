# Topic 8: what to learn, then how to solve every question

**Topics:** PER-TOURN; relative-income comparison also connects to PER-NONCLASS.

Source: [original exercises and supplied answers](<Topic 8 of Personnel Economics Exercises and Answers.pdf>) and its [searchable text twin](<Topic 8 of Personnel Economics Exercises and Answers.md>). The PDF has five pages. Book citations below use **PDF page numbers**.

This guide supplements [our in-depth tournaments lecture](<../Lectures/Tournaments - in-depth lecture/README.md>). It preserves the original answer sheet, completes missing steps, and explains where extra techniques are needed.

## What the lecture covers, and what you still need

| Exercise | Existing lecture coverage | Additional skill to learn |
|---|---|---|
| 8.1(a–c), PDF p. 1 | Prize spreads and incentives | Build a two-action payoff matrix; compare deviations; distinguish a weak threshold from strict incentives; count extra hours and one bonus |
| 8.2(a), PDF p. 1 | Two-period exam model with pride | Set pride P to zero; use Θ for effort cost; do not confuse promoted salary B with the raise Z |
| 8.2(b–c), PDF p. 1–2 | Outsiders as a possible contest-design idea, but no full calculation | Multiply conditional winning probability by the probability the contest is available; derive effort with an outsider chance ρ |
| 8.2(d), PDF p. 2 | Binding participation constraint and opposing utility/cost effects | Substitute outsider-adjusted effort, differentiate in ρ, explain why the wage effect is ambiguous |
| 8.2(e), PDF p. 2 | Firm profit and optimal prize | Use ρ = 0 and P = 0; derive Z = R/π rather than memorize it |
| 8.3(a–b), PDF p. 2 | Risk-taking, trailers gambling, fund-manager evidence | Explain why a costly increase in variance can be worthwhile without increasing mean output; identify the investor–manager conflict |
| 8.4(a–c), PDF p. 2–3 | General excessive-effort intuition | Relative-income utility, simultaneous best responses, adding utilities, cancelling comparison terms, evaluating utility at each solution |
| 8.4(d), PDF p. 3 | Not derived in the tournament lecture | A piecewise income-tax schedule; marginal versus average tax rates; after-tax comparisons; checking incentives on both sides of a threshold |

**Priority:** learn 8.4 in full, then the ρ extension in 8.2, then the payoff matrix in 8.1. The lecture already supplies most of the theory needed for 8.3. You do not need the full normal-distribution maths or 3D probability surface to answer this particular tutorial.

## Small maths toolkit

1. **Expected reward:** probability × reward. If a prize is available only with probability q, the reward term is q × conditional winning probability × prize.
2. **Differentiate your own choice:** treat the other person's effort or hours as fixed when taking your first-order condition.
3. **Quadratic costs:** the derivative of Θe²/2 is Θe; the derivative of h² is 2h. These cost functions are different!
4. **Solve a first-order condition:** A − Θe = 0 gives e = A/Θ.
5. **Substitute before optimizing the contract:** effort and the participation wage both depend on the prize. Include both effects in firm profit.
6. **Participation:** two periods of outside utility V mean a total outside option of 2V.
7. **Welfare:** add both utilities before differentiating; a gain in relative standing for one person is a loss for the other here.
8. **Tax kinks:** a derivative need not equal zero at the optimum. Show utility rises up to the kink and falls after it.

## Notation: the same letter can change meaning

| Symbol | Meaning in this sheet |
|---|---|
| B in 8.1 | Single winner's bonus |
| B in 8.2 | Promoted worker's full period-2 salary, B = W + Z |
| Z | Extra salary from promotion, not the full promoted salary |
| W | Base salary in each period |
| π | Sensitivity of conditional promotion probability to the effort gap, not 3.14159 |
| ρ | Probability an outsider takes the promotion |
| Θ | How costly effort is; same role as θ in our exam lecture |
| V | Outside utility per period |
| R in 8.2 | Firm's revenue per unit of effort/output, unlike the luck-range R in Kuhn20 |
| μ in 8.4 | Strength of the desire to earn more than the sister |
| w, h | Hourly wage and hours; income equals wh |

There is **no pride P** in Exercise8.2. The exam model in our lecture has pride; setting P = 0 gives the relevant baseline.

## 8.1: overtime as a two-action game

**Book connection:** Kuhn20.1–20.3, PDF p.364–370, especially the worker's incentive and the definition of an equilibrium in20.6, PDF p.373–375. This tutorial uses discrete actions, rather than the book's continuous quadratic effort.

Use the two alternatives in the supplied answer: leave at18:00 or stay until20:00. Staying costs10; working beyond20:00 is prohibitively costly. Do not invent a per-hour cost within the18:00–20:00 block: the sheet does not specify one.

### Build one worker's payoff table

The base salary50 is received either way, so omit it when comparing decisions.

| Rival's choice | You leave at18:00 | You stay until20:00 |
|---|---:|---:|
| Leaves at18:00 | B/2: a tie | B − 10: you win |
| Stays until20:00 | 0: you lose | B/2 − 10: a tie minus overtime cost |

In either row, the extra payoff from staying is B/2 − 10.

### (a) Bonus15

If the rival leaves, staying gives15−10=5, while leaving gives15/2=7.5. Leave.

If the rival stays, staying gives7.5−10=−2.5, while leaving gives0. Leave.

**Both leave at18:00.** The bonus is too small to cover the cost of increasing the chance of winning by one half.

### (b) Minimum bonus

Stay when B/2 − 10 ≥ 0, so **B ≥ 20**. The supplied answer is **B = 20**, using the question's convention that a worker works longer when benefits equal costs.

At exactly20 the worker is indifferent in either row. Without that tie-breaking convention, staying is not uniquely induced; B > 20 gives strict incentives to stay. This is a useful distinction, not a replacement for the intended answer.

### (c) Is a bonus profitable?

Two employees × two extra hours ×10 revenue per hour = **40 extra revenue**.

Only one employee wins the bonus, so the firm pays **20 in total**, not20 to each worker. Base salaries are unchanged.

**Extra profit = 40 − 20 = 20. Yes, implement the bonus.** With strict incentives, a bonus just above20 still raises profit.

## 8.2: promotion, outsiders, participation, and profit

**Book connection:** Kuhn20.2–20.6, PDF p.366–375. Outsiders as a safeguard against collusion: Kuhn21.2, PDF p.403–404. The exact two-period algebra comes from this tutorial and the closely related final-exam model, not a verbatim book equation.

### (a) No outsider: write expected utility first

Each worker receives two base salaries. Promotion adds only Z, with probability pᵢ:

$$EU_i=2W+\left[\frac12+\pi(e_i-e_j)\right]Z-\frac{\Theta e_i^2}{2}.$$

Differentiate in own effort, holding eⱼ fixed:

$$\frac{\partial EU_i}{\partial e_i}=\pi Z-\Theta e_i=0
\quad\Rightarrow\quad \boxed{e_i=\frac{\pi Z}{\Theta}}.$$

The second derivative is −Θ < 0. A bigger promotion raise or a more effort-sensitive promotion rule raises effort; a higher effort-cost parameter lowers it. Base W does not change this incentive because it is paid regardless of winning.

### (b) Outsider probabilityρ

Write q = 1 − ρ: the probability an insider receives the promotion.

There are two steps: an insider contest occurs with probability q, then worker i wins it with conditional probability pᵢ. Thus the overall promotion probability is **q pᵢ**, not pᵢ.

$$EU_i=2W+q\left[\frac12+\pi(e_i-e_j)\right]Z-\frac{\Theta e_i^2}{2}.$$

$$q\pi Z-\Theta e_i=0
\quad\Rightarrow\quad \boxed{e_i=\frac{(1-\rho)\pi Z}{\Theta}}.$$

Holding Z fixed, outside recruitment weakens the return to insider effort. Ifρ=1, neither worker can be promoted and neither supplies costly effort in this model.

Example: π=0.1, Z=20, Θ=2 gives effort1 with no outsider. Ifρ=0.4, effort falls to0.6. These are constructed teaching values.

### (c) Each worker's promotion probability

Both workers choose the same effort, so **conditional on an insider winning**, each has probability1/2.

The unconditional probabilities are:

$$\boxed{\Pr(i\text{ promoted})=\frac{1-\rho}{2}}.$$

Check: outsiderρ + worker1 q/2 + worker2 q/2 = 1. Atρ=0.4, the probabilities are40%,30%,30%.

### (d) The wage that makes the worker just willing to join

At symmetry, bind the participation constraint:

$$2W+\frac{qZ}{2}-\frac{\Theta e^2}{2}=2V.$$

First solve W = V − qZ/4 + Θe²/4. Then substitute e=qπZ/Θ:

$$\boxed{W=V-\frac{(1-\rho)Z}{4}
+\frac{(1-\rho)^2\pi^2Z^2}{4\Theta}}.$$

The terms have simple meanings: outside utility, minus compensation from expected promotion, plus compensation for effort costs. The quarters arise because the participation constraint concerns **two periods**.

Differentiate while holding Z,π,Θ,V fixed:

$$\boxed{\frac{dW}{d\rho}=\frac Z4-
\frac{(1-\rho)\pi^2Z^2}{2\Theta}}.$$

**Two-sentence verbal answer:** A greater chance of an outsider being promoted reduces employees' expected promotion pay, so a higher base wage is needed to attract them. It also reduces their effort and effort costs, allowing a lower base wage, so the overall effect is ambiguous in the stated model.

Do not decide the sign from the first channel alone. The two terms in the derivative show the opposing channels.

### (e) Profit-maximizing promotion raise whenρ=0

Now use e=πZ/Θ and W=V−Z/4+π²Z²/(4Θ).

Two workers produce only in period1. Over both periods the firm pays four W salaries and one Z raise:

$$\Pi=2Re-4W-Z.$$

Substitute both e and W:

$$\Pi=\frac{2R\pi Z}{\Theta}-4V+Z-
\frac{\pi^2Z^2}{\Theta}-Z
=\frac{2R\pi Z}{\Theta}-\frac{\pi^2Z^2}{\Theta}-4V.$$

$$\frac{d\Pi}{dZ}=\frac{2R\pi}{\Theta}-
\frac{2\pi^2Z}{\Theta}=0
\quad\Rightarrow\quad \boxed{Z^*=\frac R\pi}.$$

The second derivative is −2π²/Θ < 0. The implementing effort is e*=R/Θ, where marginal revenue R equals marginal effort costΘe. More valuable output calls for a larger raise; a more effort-sensitive promotion rule needs a smaller raise to induce that efficient effort.

Do **not** subtract pride P here: this tutorial has no P. Do **not** optimize using a constant W: participation determines W(Z).

**Model caveat:** the linear probability is an interior specification. It must stay within[0,1] over the choices being analyzed. The intended answers assume an interior feasible contract, positiveΘ andπ, and no extra wage/raise constraints. A globally bounded probability model may require corner checks. The sheet treatsρ as exogenous; it does not ask you to solve the firm's optimalρ or specify outsider pay.

## 8.3: paying to increase luck rather than output

**Book connection:** Kuhn21.3, PDF p.404–407, Results21.6–21.7.

### (a) Why can a costly increase in variance be attractive?

An employee who is behind may have little chance of winning under a safe strategy. A riskier strategy can give them a chance of an unusually good outcome without raising average output. They choose it if the extra expected prize exceeds the cost of creating risk; catching up through productive effort may cost more.

Constructed example: a bonus is100, safe winning probability0.1, riskier winning probability0.4, and the risky action costs5. Expected reward increases by(0.4−0.1)×100=30, more than the cost5. The worker gains25 in expected utility, even if mean output stays unchanged.

Increasing the role of symmetric luck can move a trailing worker's chance toward50%. A leader may instead favor safer choices. It is not correct to say more variance necessarily helps every contestant, or that risk automatically raises expected output.

### (b) Fund-manager application

A fund manager whose fund is behind mid-year can shift into higher-risk investments to obtain a chance of finishing near the top. A high ranking attracts investors and raises assets under management, which can raise the manager's pay. The manager's incentive to gamble can conflict with investors' preferred risk level.

Kuhn describes Brown, Harlow, and Starks's1996 evidence: lagging managers increased portfolio risk, especially smaller/newer funds. This is historical study evidence, not investment advice.

**Answer-sheet warning:** PDF p.4 says managers sell safe stocks and buy “low-risk” stocks while increasing risk. That wording is inconsistent with its own argument and Kuhn21.3. The intended mechanism is a shift toward **higher-risk** investments. Preserve the original PDF; correct this in your understanding.

## 8.4: a relative-income race and a tax that stops it

**Book connection:** Kuhn10.7, PDF p.190–191, explains symmetric relative-income utility. Kuhn20.4, PDF p.370–372, supplies the distinction between private incentives and efficient effort. The sisters' exact hours and tax schedule are this tutorial's model, not the basic tournament model of ch.20–23.

### (a) Independent, simultaneous choices

Astrid's utility is:

$$U_A=wh_A+\mu(wh_A-wh_B)-h_A^2
=(1+\mu)wh_A-\mu wh_B-h_A^2.$$

Holding Bella's hours fixed:

$$\frac{\partial U_A}{\partial h_A}=(1+\mu)w-2h_A=0
\quad\Rightarrow\quad \boxed{h_A=h_B=\frac{(1+\mu)w}{2}}.$$

The second derivative is−2. Each works harder because an extra euro increases her own income and her relative standing. The sister's hours affect the level of utility but disappear from the own-hours derivative in this particular linear comparison model.

### (b) Joint choice

Add the utilities before differentiating:

$$U_A+U_B=wh_A+wh_B-h_A^2-h_B^2.$$

The two comparison terms cancel exactly: μ(wh_A−wh_B)+μ(wh_B−wh_A)=0.

$$w-2h_A=0,\qquad w-2h_B=0
\quad\Rightarrow\quad \boxed{h_A=h_B=\frac w2}.$$

Independent choices generate an extra μw/2 hours per sister. Both try to get ahead, but at equal hours neither ends up ahead; both sacrifice extra leisure.

### (c) Evaluate and compare utilities — missing from the supplied answers

In both symmetric outcomes incomes are equal, so the relative-income term is zero. Each sister's utility is wh−h².

At the independent solution h=(1+μ)w/2:

$$\boxed{U^{ind}=\frac{w^2(1-\mu^2)}4}.$$

At the joint solution h=w/2:

$$\boxed{U^{joint}=\frac{w^2}4}.$$

Each sister gains:

$$\boxed{U^{joint}-U^{ind}=\frac{\mu^2w^2}4>0\quad(\mu>0,w>0).}$$

Constructed example: w=10 andμ=0.5. Independently each works7.5 hours and gets75−56.25=18.75 utility. Jointly each works5 hours and gets50−25=25 utility: a gain6.25 each. Less income can mean greater utility because leisure also matters.

### (d) Implement the better outcome using an income tax

They cannot jointly choose hours, but can agree on a tax that removes the incentive to earn above the joint optimum. Following the supplied answer, income in their utility and comparison is interpreted as **after-tax income**; state that assumption.

Efficient hours H=w/2 correspond to gross income:

$$\bar y=wH=\frac{w^2}{2}.$$

Use no tax below this threshold and a **100% marginal tax on income above it**:

$$T(y)=\begin{cases}0&y\le\bar y,\\y-\bar y&y>\bar y.\end{cases}$$

After-tax income is y−T(y)=min(y,ȳ). This is not a100% tax on all income, and not a100% flat tax from the first euro.

Check the individual's incentives, holding the sister's after-tax income fixed:

- For h < H, the own-hours derivative is(1+μ)w−2h. It is positive throughout this region, includingμw > 0 just below H.
- For h > H, after-tax income no longer rises. Extra work gives no income or status benefit, but increases leisure cost; the derivative is−2h < 0.

Therefore each independently chooses **h=H=w/2**, at the kink. They achieve the joint utility w²/4, which is higher than the independent no-tax outcome.

**No tax revenue is collected at this outcome.** Both stop exactly at the untaxed threshold. So donating any tax receipts to a charity they do not value does not destroy the gain in equilibrium.

With w=10, the threshold is50 income: the first50 is untaxed, every euro above50 is taxed away, and both stop at5 hours. At6 hours gross pay60 becomes net pay50 while leisure cost rises, so extra work is unattractive.

**Answer-sheet warning:** PDF p.5 labels this tax answer “c)”, but it answers **8.4(d)**. It omits the utilities requested in8.4(c); the calculations above complete them.

## Final self-test

You can solve this tutorial end to end when you can, without looking:

- Draw the8.1 table, explain why the relevant benefit is B/2, and count four additional worker-hours but one bonus.
- Write8.2 expected utility with q=1−ρ, distinguish conditional1/2 from unconditionalq/2, derive W, give both wage channels, and substitute into profit before choosing Z.
- Explain8.3 using an employee who is behind, a costly risky action, and the conflict with the employer/investor.
- Derive both8.4 hours solutions, calculate both utility levels, and prove why the tax kink implements the joint optimum without collecting revenue.

Suggested study order: **8.1 payoff comparisons → 8.2(a–c) effort/probabilities → 8.2(d–e) participation/profit → 8.3 verbal mechanism → 8.4(a–d) hours/welfare/tax.** For verbal answers, practice two or three direct sentences identifying the mechanism rather than repeating algebra.
