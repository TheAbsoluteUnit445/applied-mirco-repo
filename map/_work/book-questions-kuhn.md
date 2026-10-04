# Kuhn (Personnel Economics), end-of-chapter questions: rough triage

Scope: every "Discussion Questions" item at the end of Kuhn ch 1-27 (Kuhn has no separate "Problems" sections; 118 questions in total). This is a scouting pass with **no solutions**. Exam templates are cited from `map/_work/exam-inventory.md` (M23 = Midterm 2023, M25 = Midterm 2025, F24 = Final Oct 2024, R25 = Resit Jul 2025, F25 = Final Oct 2025, R26 = Resit Jul 2026). Topic IDs come from `map/TOPICS.md`.

**Assigned in tutorial sets (Dur):** ch2 DQ 2, 3 (Set 1, Ex 1.1), ch3 DQ 2 (Set 1, Ex 1.3), ch7 DQ 1-4 (Set 3, after Ex 3.2), ch9 DQ 2, 4 (Set 4, with the extra "how to fix it" part on Q4). Sets 2, 5 and 6 assign no Kuhn DQs. They use "Kuhn teaching material" exercises instead, which are not the book DQs.

**Necessity key:**
- **MUST** = mirrors an exam template, or trains an exam-tested skill that the tutorials don't.
- **USEFUL** = good practice or a concept check, but not exam-shaped.
- **SKIP** = personal reflection, look-up tasks, or off-exam material.

**Headline finding.** The DQs are overwhelmingly verbal or discussion questions. The exam's numerical templates (linear contract + PC, monopsony markdown, tournament FOC/PC/prize, team 1/N, self-selection constraints) are mostly **not** trained by any Kuhn DQ. They live in the worked models in the chapter text, which are flagged per chapter below. Only ch2 Q2-3 and ch24 Q3 are real derivations that mirror an exam template.

---

## Ch 1 - Structure of the Principal-Agent Problem (pdf 24-33)

Sections:
- 1.1 What is a P-A problem (p25) and 1.2 Timeline (p26): skim.
- **1.3 Profits, 1.4 Utility, 1.5 Contract Y = a + bQ, 1.6 Production function, 1.7 Backwards induction (pp27-31)**: the notation of the exam template. Read once.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 1.1 | - | PER-PA-SETUP | discussion | Other P-A examples | SKIP | Pure brainstorming |
| 1.2 | - | PER-PA-SETUP, PER-PA-PRINC | verbal | Generous outside offer: how it enters the model | USEFUL | It is the participation constraint U >= U_alt. Trivial, but it is the PC concept that every exam uses |
| 1.3 | - | PER-PA-SETUP | verbal (T/F) | Is effort an "inferior good"? | SKIP | Terminology trap (it's a "bad", not inferior). Not examined |
| 1.4 | - | PER-PA-SETUP, PER-PA-EFFDIST | verbal (T/F) | Contract (a,b) = (-5, 0.6) is admissible | USEFUL | Shows that a negative base salary is allowed (the "sell the job" logic in M23 3d and R25 4c) |

## Ch 2 - Solving the Agent's Problem (pdf 34-39)

Sections:
- **2.1 A mathematical solution (p34)**: the effort FOC b·d = V'(E), giving E = bd.
- **2.2 Comparative statics (p36, Result 2.1)**: E rises in b and is independent of a.
- 2.3 Indifference-curve solution (p38): skim unless you want the graph.

All exam-core.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 2.1 | - | PER-PA-AGENT | numerical derivation | Effort with V(E) = E² | USEFUL | Same as 2.2 but easier. Quick warm-up |
| 2.2 | Set 1 (Ex 1.1) | PER-PA-AGENT | numerical derivation | Effort with V(E) = E³/3 | MUST | Effort-FOC step (a) of the linear-contract template (M23 3a, M25 3a, R26 6a). Approach: set MB = b·d equal to MC = E², so E = √(bd) |
| 2.3 | Set 1 (Ex 1.1) | PER-PA-AGENT | numerical derivation | Linear cost V = mE: optimal E when m < bd vs m > bd | MUST | Corner solutions, exactly the M25 3a / R25 4a "e = 0 if b < γ" logic. Approach: compare the constant MB (bd) with the constant MC (m); E = 0 or unbounded/max; no interior FOC |

## Ch 3 - Solving the Principal's Problem (pdf 40-53)

Sections:
- **3.1 Warm-up: principal's problem with a = 0 (pp40-43, Result 3.1)**: b = P/2-type answer, the Laffer analogy. This is exactly M23 3a/3b and M25 3b.
- **3.2 Full solution (pp44-48, Result 3.2)**: the PC binds, a < 0, b = 1 ("sell the job"). This is exactly M23 3c/3d and R25 4b/4c.
- 3.3 Is it crazy to sell the job? (pp48-53, Result 3.3): case material (franchises, cab rentals, salons). Skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 3.1 | - | PER-PA-PRINC | verbal | Laffer parallel: what the full solution implies for tax policy | USEFUL | Good check of the "base salary extracts rent so b can rise" intuition (M23 3d), but framed as tax policy |
| 3.2 | Set 1 (Ex 1.3) | PER-PA-PRINC, PER-PA-EFFDIST | verbal | "Ban incentive pay to protect workers": comment | MUST | Verbal rent-extraction / efficiency logic, as in M23 3d and R25 4c-d. Approach: a ban lowers b to 0 so effort falls and the pie shrinks; with the PC binding the worker gets U_alt either way; distribution is set by a, not b |
| 3.3 | - | PER-PA-PRINC | verbal | "Unethical to make workers pay for the job": comment | USEFUL | Same logic as 3.2 (negative a). Do it only if 3.2 felt shaky |
| 3.4 | - | PER-PA-PRINC | discussion | Other jobs with entry fees | SKIP | Brainstorming |

## Ch 4 - Best for Whom? Efficiency and Distribution (pdf 54-58)

Sections:
- **4.1 Economically efficient contracts (pp54-56, Result 4.1)**: maximise the sum of profit and utility, so E* where d = V'(E). Used in Tut 2.3 and in R26 6a "efficient e".
- **4.2 Dividing the pie (pp56-58, Result 4.2)**: efficiency is separate from distribution; dominated contracts.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 4.1 | - | PER-PA-EFFDIST, PER-PA-RISK | verbal | What reality the model omits (why workers don't buy jobs) | USEFUL | Answers are risk aversion, liquidity constraints, multitasking, and the need for a base salary. Links to ch5 |
| 4.2 | - | PER-PA-EFFDIST | discussion | Other "maximise the pie, then divide" examples | SKIP | Brainstorming |

## Ch 5 - Extensions: Uncertainty, Risk Aversion, Multiple Tasks (pdf 59-87)

Sections:
- 5.1 Which assumptions matter (pp59-63): skim.
- **5.2-5.3 Risk aversion, state-contingent vs non-contingent contracts (pp63-67, Results 5.1-5.2)**: the insurance-incentives trade-off, verbal level.
- 5.4 Evidence: sharecropping (p67): skim.
- **5.5 Multitask (pp68-77, Results 5.3-5.7)**: task substitutes and job redesign. Tutorial 2.5 trains this.
- 5.6 Timing gaming (pp77-82): skim; not examined.
- Case material (Wells Fargo, Countrywide, etc.): skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 5.1 | - | PER-PA-RISK | verbal | Is a state-independent marginal product realistic? | SKIP | Low payoff |
| 5.2 | - | PER-PA-RISK | verbal / modelling | Write Q when effort is more productive in good times | USEFUL | Model-writing practice (e.g. Q = (d+ε)E). Exams occasionally ask you to set up a function |
| 5.3 | - | PER-PA-RISK | discussion | Other risk-incentive trade-off situations | SKIP | Brainstorming |
| 5.4 | - | PER-PA-RISK | discussion | Personal multitask backfire plus an HR fix | USEFUL | Rehearses the substitutes/complements and job-redesign verbal answer (Tut 2.5d) |
| 5.5 | - | PER-PA-RISK | graphical | Gaming a 10-car threshold bonus across 2 months | USEFUL | Quick nonlinear-incentive graph. Not exam-tested |
| 5.6 | - | PER-PA-RISK | graphical | Timing gaming with 8 then 12 sales | SKIP | Duplicate of 5.5 |

## Ch 6 - Noisy Performance Measures and Optimal Monitoring (pdf 88-97)

Sections:
- **6.1-6.3 Becker shirking model with monitoring probability and fines (pp89-93, Result 6.1)**: efficient monitoring means a maximal fine and minimal probability. The tutorial 3.2 deferred-pay/monitoring exercise builds on it. Not directly examined.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 6.1 | - | PER-PA-MONITOR | verbal | Why not astronomical fare-dodging fines? | USEFUL | Model limits: limited liability, errors, proportionality |
| 6.2 | - | PER-PA-MONITOR | verbal | Death penalty for speeding | SKIP | Same as 6.1 |
| 6.3 | - | PER-PA-MONITOR, PER-PA-RISK | verbal | False positives, with or without risk aversion | USEFUL | Good conceptual extension. Not examined |
| 6.4 | - | PER-PA-MONITOR, PER-PA-RISK | verbal | Imperfect control of own effort | SKIP | Near-duplicate of 6.3 |

## Ch 7 - Empirical Methods (pdf 98-108)

Sections:
- **7.1 RCTs: the CTrip WFH experiment (pp98-102)**: treatment vs control, randomisation, selection on volunteering. This is the language every exam's empirical question uses.
- **7.2 Non-experimental inference: regression, confounders, the Pizza Hut example (pp102-108)**.

The whole chapter is exam-relevant (R25 Q7, F25 Q5, R26 Q8, F24 3b).

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 7.1 | Set 3 | PER-EMP | empirical design | Why not just introduce WFH and compare before/after? | MUST | This is R25 7a ("20% sales rise does not prove the bonus works"). Approach: time trends, seasonality and other simultaneous changes; no counterfactual |
| 7.2 | Set 3 | PER-EMP | empirical design | Why not let workers choose and compare? | MUST | Selection bias, as in F25 5a and R26 8b. Approach: choosers differ systematically (motivation, home situation); the comparison mixes the treatment effect with selection |
| 7.3 | Set 3 | PER-EMP | empirical design | Screen only the treatment group for home space? | MUST | Comparability of treatment and control, as in RCT design (R25 7b, R26 8c, F24 3b). Approach: screening both groups before randomising keeps them identical in expectation; screening only one reintroduces selection |
| 7.4 | Set 3 | PER-EMP | empirical design | Other confounders in the Pizza Hut adopter comparison | MUST | "Name the confounders" (R25 7a, F25 5a). Approach: list store traits correlated with both adoption and speed (size, manager quality, location, demand, staff experience) |

## Ch 8 - Performance Pay at Safelite Glass (pdf 109-123)

Sections:
- **8.1 PPP as a P-A model (pp110-113, Result 8.1)**: the PPP is a base wage plus piece rate; the indifference-curve graph.
- **8.2 Effect on performance (pp113-117, Results 8.2-8.3)**: regression with fixed effects, about half incentive and half sorting. This is the source of R26 8a.
- 8.3-8.5 Profits, lessons, epilogue (pp117-123): skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 8.1 | - | PER-PA-PRINC | discussion | Would a PPP work in your job? | SKIP | Personal |
| 8.2 | - | PER-EMP | empirical design | Other confounders Lazear should control for | USEFUL | Same skill as 7.4; extra practice |
| 8.3 | - | PER-EMP, PER-SEL-SCREEN | empirical design | How worker fixed effects split the 44% into selection vs incentive | MUST | Incentive vs sorting effect (R26 8a); tutorials don't train it. Approach: with worker FE, only within-worker changes count, so the FE estimate is the incentive effect and the remainder of 44% is sorting/selection |
| 8.4 | - | PER-EMP | verbal | Has Lazear ruled out Hawthorne effects? | USEFUL | Short, exam-style critique of an empirical study |

## Ch 9 - Some Non-Classical Motivators (pdf 124-166)

Sections:
- **9.1 Pay enough or don't pay at all (pp124-127, Results 9.1-9.2)**: crowding out (Gneezy-Rustichini). Relevant to the R26 8b crowding-out argument.
- **9.2 Intrinsic, symbolic and image motivation (pp127-134)**: the concepts behind the θe / γe / λ·profit terms in exam utility functions. NB: Kuhn gives **no formal intrinsic-motivation contract model**. The exam's θ/guilt/prosocial algebra (M25 Q3, R25 Q4, F24 Q3, R26 Q6-7) comes from the lectures plus the ch2-3 template, so practise it via Tut 1.5 and 2.2.
- 9.3-9.4 High stakes / choking (pp134-140): skim.
- **9.5-9.6 Reference points and loss aversion (pp140-149)**: Tut 4.1.
- **9.7 Present bias (pp149-160, Results 9.8-9.10)**: Tut 4.2-4.3.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 9.1 | - | PER-NONCLASS | verbal | When do financial incentives work vs backfire? | MUST | Crowding out of intrinsic motivation is an exam argument (R26 8b) not trained in tutorials. Approach: incentives backfire when they crowd out intrinsic or image motivation, when they're small (signal), or with choking on high stakes; they work on routine, measurable tasks |
| 9.2 | Set 4 | PER-NONCLASS | verbal | Intrinsic vs image motivation, with examples | USEFUL | Definitional. Exams use intrinsic motivation algebraically, not this distinction |
| 9.3 | - | PER-NONCLASS | numerical / verbal | Upper bound on the value of meaningful work (Bionicles) | SKIP | Study-specific |
| 9.4 | Set 4 | PER-EMP, PER-NONCLASS | empirical design | Problems with comparing award winners vs non-winners, and how to fix them | MUST | Selection / reverse causality plus "design an RCT" (F24 3b, R26 8b-c). Approach: winners are selected on ability/motivation (selection, mean reversion); fix by randomly assigning awards |
| 9.5 | - | PER-NONCLASS | verbal | Can "doing well" kill "doing good"? | USEFUL | Image motivation crowding out; complements 9.1 |
| 9.6 | - | PER-NONCLASS | verbal | Effort vs arousal | SKIP | Off-exam |
| 9.7 | - | PER-EMP | empirical design | Why attendance is not like a coin toss as evidence | USEFUL | Endogeneity vs a natural experiment; good empirical drill |
| 9.8 | - | PER-NONCLASS | verbal | "Prospect theory is useless": discuss | USEFUL | Reference points (Tut 4.1) |
| 9.9 | - | PER-NONCLASS, PER-PA-RISK | verbal | Loss-framed teacher bonus: which actions help students? | USEFUL | Gaming / multitask under loss aversion |
| 9.10 | - | PER-EMP, PER-NONCLASS | empirical design | Why randomise paydays, and why those days? | USEFUL | Randomisation logic for present bias |

## Ch 10 - Reciprocity at Work (pdf 167-200)

Sections:
- **10.1-10.2 Gift-exchange game and incomplete contracts (pp167-170)**: Tut 4.4.
- 10.3-10.7 Lab and field evidence (Fehr, Offerman, Falk-Kosfeld, Card et al. on pay disclosure) (pp170-195): mostly narrative. 10.7 (fairness among workers / relative pay, p188ff) is loosely related to the R26 Q5 status externality.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 10.1 | - | PER-RECIP | discussion | Your own motivations vs trust/bonus contracts | SKIP | Personal |
| 10.2 | - | PER-RECIP | verbal | Offerman: intentions vs actions | SKIP | Study detail |
| 10.3 | - | PER-RECIP | verbal | Does a surprise 20% raise pay for itself? For how long? | USEFUL | Gift-exchange reasoning; links to efficiency wages (ch18) |
| 10.4 | - | PER-RECIP | verbal | A surprise 20% cut: asymmetry vs 10.3 | USEFUL | Negative reciprocity and loss aversion |
| 10.5 | - | PER-RECIP | verbal | Hidden cost of control (Falk-Kosfeld) | USEFUL | Crowding-out / trust argument |
| 10.6 | - | PER-RECIP, PER-NONCLASS | verbal | Disclose pay rules or pay results? | USEFUL | Relative-income concerns (R26 Q5 theme) |

## Ch 11 - Pigeons and Pecks: Income Effects (pdf 201-217)

Sections:
- **11.1-11.2 Backward-bending labour supply; leisure is normal (pp201-206, Results 11.1-11.2)**: the substitution vs income effect in words (F25 4b, R25 5b).
- 11.3 When income effects matter (pp206-209): skim.
- **11.4 Shape of the utility function and the FOC math (pp209-213, Result 11.4)**: concave H(Y), so a higher a lowers effort. This is the core of R25 Q5 and Tut 4.5.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 11.1 | - | PER-INCOME | verbal | $5,000/hr for 24 hours vs for life: what property of income effects? | MUST | Trains the verbal income-vs-substitution split (F25 4b, R25 5b); Tut 4.5 only does the FOC. Approach: a temporary raise is mostly a substitution effect; a permanent raise has a large lifetime-wealth (income) effect that dominates |
| 11.2 | - | PER-INCOME | discussion | Are pigeon experiments informative? | SKIP | Methodological opinion |
| 11.3 | - | PER-INCOME | verbal | Taxing high-wage pigeons raised work: relevance for tax policy | USEFUL | Income effect dominating; good 2-sentence drill |
| 11.4 | - | PER-INCOME, PER-EMP | verbal | Lottery winners' employment drop: plausible? | USEFUL | Income-effect evidence (lottery as a natural experiment) |

## Ch 12 - Choosing Qualifications (pdf 218-232)

Sections:
- **12.1 Optimal worker mix with independent workers: isoquants, bang-per-buck, corners (pp218-225, Results 12.1-12.4)**: Tut 5.1-5.2.
- 12.2 Interacting workers: imperfect substitutes, antagonists (pp225-232): read the results, skim the rest.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 12.1 | - | PER-SEL-QUAL | verbal | Must independent inputs be equally productive? | SKIP | Definitional |
| 12.2 | - | PER-SEL-QUAL | discussion | Labour types at your job: substitutes or antagonists? | SKIP | Personal |
| 12.3 | - | PER-SEL-QUAL | numerical / verbal | Minimum wage $8 to $10: demand for graduates ($12) vs dropouts ($9) | USEFUL | Bang-per-buck with a changing relative price; same skill as Tut 5.1/5.2 |

## Ch 13 - Risky versus Safe Workers (pdf 233-246)

Sections:
- **13.1 Base case: option value of risky workers (pp233-238, Result 13.1)**: Tut 5.4.
- 13.2 Changing assumptions: horizon, firing costs, mean-preserving spreads (pp238-246, Results 13.2-13.5): read the results.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 13.1 | - | PER-SEL-QUAL | discussion | Costs and benefits of abolishing tenure | SKIP | Low exam value |
| 13.2 | - | PER-SEL-QUAL | verbal | List factors favouring risky vs safe workers | USEFUL | Summarises the chapter's comparative statics (Tut 5.4) |
| 13.3 | - | PER-SEL-QUAL | verbal | Mean-preserving spread and the value of risky workers | USEFUL | Key concept for the option-value logic |
| 13.4 | - | PER-SEL-QUAL | discussion | Other real options (tickets, hotels) | SKIP | Brainstorming |

## Ch 14 - Recruitment (pdf 247-266)

Sections:
- 14.1 Formal vs informal channels / referrals (pp247-255): mostly empirical narrative.
- 14.2 How wide a net: optimal number of interviews, σ (pp255-263, Results 14.6-14.7): a light model.

Not examined to date.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 14.1 | - | PER-SEL-SCREEN | verbal | Referral bonuses: when bad? | USEFUL | Selection/homophily reasoning |
| 14.2 | - | PER-SEL-SCREEN | discussion | LinkedIn effects on labour markets | SKIP | Open-ended |
| 14.3 | - | PER-SEL-SCREEN | verbal | Jobs with high σ; why σ is higher in skilled jobs | USEFUL | Checks Result 14.6 |
| 14.4 | - | PER-SEL-SCREEN | verbal | "Cast a wide net" in light of 14.2 | SKIP | Overlaps 14.3 |

## Ch 15 - Testing, Discretion, Self-Selection (pdf 267-280)

Sections:
- 15.1-15.3 When to test, test effectiveness, alternatives (pp267-273): verbal checklist.
- **15.4 Self-selection: Salop-Salop backloaded wages, two types, conditions w1 + w2 >= 2v vs w1 < v (pp273-277, Result 15.3)**: this is almost exactly F24 Q4 (probation / two-period pay so only the skilled apply), and the logic of R26 7d. **No DQ trains it. Rework the in-text example yourself.**

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 15.1 | - | PER-SEL-SCREEN | verbal | Ban on admissions officers checking Facebook | USEFUL | Applies the "when to test" criteria |
| 15.2 | - | PER-SEL-SCREEN | discussion | A job test you took | SKIP | Personal |
| 15.3 | - | PER-SEL-SCREEN | discussion | Temp agencies: info and price | SKIP | Personal / open-ended |

## Ch 16 - Avoiding Bias (pdf 281-301), lecture 7 (upcoming)

Sections:
- **16.1 Detecting discrimination: audit / correspondence studies (pp282-283)**: empirical design; links to PER-EMP.
- **16.2 Why discrimination occurs: taste-based (employer, customer, co-worker) vs statistical (pp283-287)**: the core concepts for an upcoming lecture.
- 16.3 Consequences (pp287-290): skim.
- 16.4 Reducing bias in evaluation: blind auditions etc. (pp290-296): skim.

Past exams contain 0 discrimination questions (inventory 7.2).

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 16.1 | - (not yet) | PER-BIAS | numerical + discussion | Combat test: 5% pass, $100k cost, $1M value; exclude women? | USEFUL | Statistical-discrimination arithmetic plus ethics. Best candidate if lecture 7 turns out to be examined |
| 16.2 | - (not yet) | PER-BIAS | discussion | Other contexts for blind recruiting | SKIP | Brainstorming |
| 16.3 | - (not yet) | PER-BIAS | verbal | Co-worker taste discrimination: hire the best man? | USEFUL | Taste-based (co-worker) discrimination reasoning |

## Ch 17 - Monopsony (pdf 302-316)

Sections:
- **17.1 Optimal exploitation: Π = (Q - w)N(w), FOC -N + (Q - w)N' = 0, so w = ηQ/(1+η) (pp303-309, Results 17.1-17.2; the derivation is in footnote 3 on p304)**. This is the exam template behind F25 1a-c, F24 1c and R26 9a-b (the exam's non-profit version replaces profit with output subject to a budget). Tut 6.2a trains it.
- 17.2 Does it matter what you pay? Wage increases that pay for themselves (pp310-314, Result 17.3): verbal; useful for the "MB vs MC of a raise" interpretation (F25 1b).
- Kuhn has no volunteer / non-profit section. The N(0) > 0 volunteer twist (F24 1b) is lecture-only.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 17.1 | - | PER-MONOPSONY, PER-EFFWAGE | verbal | A $10 vs $12 firm: workforce differences | USEFUL | Selection/turnover effects of pay level |
| 17.2 | - | PER-MONOPSONY | verbal | Raising to $12: other policy changes; when worthwhile | USEFUL | MB vs MC of a raise (F25 1b, in words) |
| 17.3 | - | PER-MONOPSONY | verbal | Same, but via a town-wide minimum wage | USEFUL | Monopsony minimum-wage logic. Not examined so far |

None is MUST: the exam's monopsony items are FOC/formula work, which Tut 6.2 and section 17.1 cover. No DQ asks for the derivation.

## Ch 18 - Efficiency Wages (pdf 317-338)

Sections:
- **18.1 Shirking and dismissal model, efficiency wage (pp317-320, Result 18.1)**.
- 18.2 Pay level and worker selection: adverse selection (pp320-324): read; related to "wage as a screening device" (R26 7d in reverse).
- **18.3 Deferred compensation / Lazear, bonding, mandatory retirement (pp324-335, Results 18.2-18.6)**: Tut 3.2, and the closest relative of F24 Q4.

Inventory: efficiency wages are not directly examined.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 18.1 | - | PER-EFFWAGE | verbal | Pros and cons of mandatory retirement clauses | USEFUL | Core Lazear deferred-pay logic (Result 18.4) |
| 18.2 | - | PER-EFFWAGE | verbal | Laying off overpaid seniors: ethical? efficient? | USEFUL | Breach of trust under deferred pay (Result 18.5) |
| 18.3 | - | PER-EFFWAGE | discussion | Are legal and reputation remedies enough? (Shleifer-Summers) | SKIP | Needs outside reading |

## Ch 19 - Training (pdf 339-363)

Sections:
- **19.1 When to train: education example, PV comparison (pp339-343, Result 19.1)**: Tut 6.3.
- **19.2-19.3 Efficient training; who pays for general vs specific (pp343-351, Results 19.2-19.6)**: Tut 6.4.
- 19.4 Hold-up (pp351-356): read the result.
- 19.5 Multiskilling (pp356-360): skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 19.1 | - | PER-TRAIN | verbal | Two reasons EPLs raise productivity; when harmful | SKIP | Broad synthesis; low exam value |
| 19.2 | - | PER-TRAIN | discussion | Sharing efficiency ideas at work | SKIP | Personal |
| 19.3 | - | PER-TRAIN | discussion | Employer tuition assistance and stay clauses | USEFUL | Apply general vs specific: who pays, plus retention clauses |

## Ch 20 - A Simple Model of Tournaments (pdf 364-389), lecture 8 (upcoming)

Sections:
- 20.1 Elements (pp364-366): Y = a or a + S.
- **20.2 Effort and win probability, Prob(1 wins) = 0.5 + 0.1d(E1 - E2) (pp366-369, Result 20.1)**: this is exactly F25 3a's p_i = ½ + α(e_i - e_j).
- **20.3 Agents' problem: effort FOC (pp369-370, Result 20.2)**.
- **20.4 Efficient effort (pp370-372, Result 20.3)**.
- **20.5 Optimal tournament: choose S, a from the PC (pp372-373)**. This is F25 3b-3d (PC with p = ½, optimal prize Z).
- 20.6 Equivalence with piece rates (pp373-375, Result 20.4): read the result.
- 20.7 Extensions: many players, sequential, feedback (pp375-380): skim.
- (20.8) Riskiness / insurance of relative pay (~pp380-385, Results 20.9-20.10): read the results.
- 20.9 Broilers (pp385-387): skim.

**Gap:** neither DQ trains the F25 Q3 derivation (FOC, then PC, then optimal prize). Work 20.2-20.5 by hand instead.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 20.1 | - (not yet) | PER-TOURN | verbal | Rosen's argument for huge CEO raises; what does it ignore? | USEFUL | Prize-spread grows up the ladder; good verbal check |
| 20.2 | - (not yet) | PER-TOURN | verbal | Two reasons pay jumps at promotion, plus others | USEFUL | Tournament incentive vs higher productivity in the new job |

## Ch 21 - Sabotage, Collusion, Risk-Taking (pdf 390-410)

Sections:
- **21.1 Helping and sabotage in tournaments (pp390-399, Results 21.1-21.4)**: the key caveat; likely verbal on an exam.
- **21.2 Collusion (pp399-403, Result 21.5)**: conditions (small group, observability, repetition).
- 21.3 Risk-taking (pp404-407, Results 21.6-21.7): read the results; skim the mutual-fund evidence.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 21.1 | - (not yet) | PER-TOURN | verbal | Only relative measures are possible: what problems to watch for? | USEFUL | Sabotage, collusion, risk-taking, helping |
| 21.2 | - (not yet) | PER-TOURN | verbal | Remedies for each problem | USEFUL | Pairs with 21.1 |
| 21.3 | - (not yet) | PER-TOURN | verbal | Curve-graded exam collusion with 10 vs 50 students, and observable library check-in | USEFUL | Clean application of Result 21.5 (group size, monitoring) |

## Ch 22 - Unfair and Uneven Tournaments (pdf 411-435)

Sections:
- **22.1 Asymmetric win probabilities lower effort (pp411-414, Result 22.1)**: the most model-like part.
- 22.2 Tiger Woods evidence (pp414-417): skim.
- 22.3 Leagues, handicaps, affirmative action (pp417-421, Results 22.3-22.5): read the results.
- 22.4 Multistage contests (pp421-432): skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 22.1 | - (not yet) | PER-TOURN | verbal | HHLL vs HLHL seeding in Stracke-Sunde | SKIP | Study-specific |
| 22.2 | - (not yet) | PER-TOURN, PER-NONCLASS | verbal | Being behind at halftime helps: behavioural explanations | SKIP | Speculative |
| 22.3 | - (not yet) | PER-TOURN | discussion | Promotions as motivators in your job | SKIP | Personal |
| 22.4 | - (not yet) | PER-TOURN | verbal | Why the different seeding / re-seeding rules | USEFUL | Applies "even contests maximise effort" (Results 22.1, 22.3) |

## Ch 23 - Selection into Tournaments (pdf 436-451)

Sections:
- **23.1 Ability, risk aversion and entry (pp436-439, Result 23.1)**: who self-selects into tournaments. Links to PER-SEL-SCREEN sorting logic.
- 23.2 Gender, confidence, competitiveness (Niederle-Vesterlund) (pp439-445): empirical narrative.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 23.1 | - (not yet) | PER-TOURN, PER-EMP | empirical design | Design a classroom experiment measuring overconfidence by group | USEFUL | Exercises the design-a-study skill (exam template 9), though it's a measurement rather than a treatment-effect design |
| 23.2 | - (not yet) | PER-TOURN | discussion | Tasks where women are more overconfident | SKIP | Speculative |
| 23.3 | - (not yet) | PER-TOURN | discussion | Can overconfidence pay? | SKIP | Open-ended |

## Ch 24 - Teams and Free-Riding (pdf 452-473), lecture 9 (upcoming)

Sections:
- **24.1 Structure: Q = Σ dᵢEᵢ, V(E) = E²/2 (pp452-456, Result 24.1)**.
- **24.2 Efficient effort (pp456-457, Result 24.2)**: F24 2b.
- **24.3 Sharing rules and the 1/N problem (pp457-462, Results 24.3-24.4)**: equal sharing gives E = d/N; unequal shares. This is F24 2a/2c-e almost exactly.
- **24.4 Group piece rates and group bonuses, budget breaking (pp462-470, Results 24.5-24.6)**.

All exam-core for the teams topic.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 24.1 | - (not yet) | PER-TEAM | verbal / derivation | A stock option as a team pay rule Y(Q); which rule; free-riding? | USEFUL | Mapping a real scheme onto the sharing rules; 1/N with huge N |
| 24.2 | - (not yet) | PER-TEAM | discussion | Gainsharing vs stock options | SKIP | Needs a look-up |
| 24.3 | - (not yet) | PER-TEAM (+ PUB-PG-NASH) | numerical derivation | Lake road: efficient vs voluntary contributions; B = ln Q gives 1/N | MUST | The team free-riding FOC (F24 2a-b: equal-share effort vs efficient effort), and the same algebra as Public's Nash provision. Approach: efficient sets N·B'(Q) = 1; private sets B'(Q) = 1 taking the others as given; with ln, Q* = N vs Q = 1, so each gives 1/N of the efficient amount |
| 24.4 | - (not yet) | PER-TEAM | graphical | Diner's dilemma: show F is higher when B' = 1/N | USEFUL | Graph version of the 1/N FOC; good for the "explain why" verbal parts |
| 24.5 | - (not yet) | PER-TEAM, PER-PA-PRINC | graphical | Is the group bonus large enough vs settling for base pay? (indifference curves) | USEFUL | The tournament/bonus participation-style comparison; moderate effort |
| 24.6 | - (not yet) | PER-TEAM | numerical derivation | 5-person group bonus: E5 = 1.3 if the others supply 3.7; threshold 5 - √2 | USEFUL | Real calculus on the group-bonus model; not an exam template yet |
| 24.7 | - (not yet) | PER-TEAM | verbal | Why friends still split the bill equally | USEFUL | Repeated games / norms vs the free-riding prediction |

## Ch 25 - Team Production in Practice (pdf 474-499)

Sections:
- **25.1 Altruistic punishment; linear VCM (pp475-481, Results 25.1-25.2)**: the VCM's equilibrium vs efficient contribution is the same structure as the public-good Nash/Samuelson pair.
- 25.2 Team vs individual pay (Babcock et al.) (pp481-487, Results 25.3-25.5): empirical; read the results.
- 25.3 Koret garment factory (pp487-494): case; skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 25.1 | - (not yet) | PER-TEAM | verbal | Strategies against a free-riding project member; one-shot vs repeated | USEFUL | Peer pressure, punishment, repetition: verbal remedies |
| 25.2 | - (not yet) | PER-TEAM, PER-EMP | verbal | Why Babcock et al. infer that "negative" motives dominate | SKIP | Study detail |
| 25.3 | - (not yet) | PER-TEAM | verbal | Trigger-strategy shirking vs costly punishment | USEFUL | Repeated-game discipline reasoning |
| 25.4 | - (not yet) | PER-TEAM, PER-TOURN | verbal | Helping, sharing and sabotage under tournament vs team pay | USEFUL | Synthesises Parts 4-5; a plausible verbal exam item |
| 25.5 | - (not yet) | PER-TEAM | discussion | Team-building exercises | SKIP | Personal |

## Ch 26 - Complementarity, Substitutability, Ability Differences (pdf 500-545)

Sections:
- 26.1 Definitions of complements and substitutes (pp500-507): read the definitions.
- 26.2 Weakest-link / extreme complementarity (pp507-514, Result 26.2): read.
- 26.3 Moderate complementarity; unequal bonuses (pp514-524, Results 26.4-26.6): read the results.
- 26.4 Substitutability; volunteer's dilemma (pp524-532): read the results.
- 26.5 Ability differences and team size (pp532-540, Results 26.10-26.15): read the results.

Long and mostly qualitative. Low priority unless lecture 9 leans on it.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 26.1 | - (not yet) | PER-TEAM, PER-EMP | verbal | Spillover method applied to beach volleyball | SKIP | Niche |
| 26.2 | - (not yet) | PER-TEAM | discussion | Your team: complements or substitutes? | SKIP | Personal |
| 26.3 | - (not yet) | PER-TEAM | verbal | Being "decisive" in weakest-link / threshold production | USEFUL | Key concept |
| 26.4 | - (not yet) | PER-TEAM, PER-EMP | verbal | Why lab experiments forbid communication and repeat pairing | USEFUL | Experimental-design logic (isolating the mechanism) |
| 26.5 | - (not yet) | PER-TEAM | verbal | Why arbitrary bonus differentials between identical workers can help | USEFUL | Result 26.6 (Winter); counter-intuitive and plausible on an exam |
| 26.6 | - (not yet) | PER-TEAM | discussion | Your boss's leadership functions | SKIP | Personal |
| 26.7 | - (not yet) | PER-TEAM | verbal | Volunteer's dilemma: when severe? | USEFUL | Substitutes / free-riding concept |
| 26.8 | - (not yet) | PER-TEAM | verbal | Shirker vs workaholic reputation under weakest-link vs substitutes | USEFUL | Strategic complements vs substitutes |
| 26.9 | - (not yet) | PER-TEAM | discussion | Lean production look-up | SKIP | Look-up |
| 26.10 | - (not yet) | PER-TEAM | verbal / derivation | Team size with an outside opportunity cost: still max AP? | USEFUL | Marginal vs average product reasoning |
| 26.11 | - (not yet) | PER-TEAM | verbal | Team size with threshold production ("eliminate slack") | SKIP | Niche extension |

## Ch 27 - Choosing Teams (pdf 546-571)

Sections:
- **27.1 Who joins teams: the Groucho Marx rule under equal sharing (pp547-555, Results 27.1-27.5)**: adverse self-selection under Q/N pay. Links to PER-SEL-SCREEN.
- 27.2 Skill diversity, information sharing, hierarchy vs teams (pp555-563, Results 27.6-27.7): read the results.
- 27.3 Team effectiveness evidence (Woolley, Project Aristotle) (pp563-567): skim.

| Q | Assigned | Topic | Type | Gist | Need | Reason / approach |
|---|---|---|---|---|---|---|
| 27.1 | - (not yet) | PER-TEAM, PER-SEL-SCREEN | verbal / derivation | Selection into teams under αᵢQ, Yᵢ = dᵢ, and partial pay-for-productivity | USEFUL | Closest DQ to F24 2c "alternative sharing rule" plus self-selection; worth doing if time allows |
| 27.2 | - (not yet) | PER-TEAM | verbal | Captains picking teams: matching type and why optimal | USEFUL | Positive / negative assortative matching concept |
| 27.3 | - (not yet) | PER-TEAM | discussion | Your job: hierarchical or team-based? | SKIP | Personal |
| 27.4 | - (not yet) | PER-TEAM | discussion | Other reasons for assortative marriage | SKIP | Off-topic |
| 27.5 | - (not yet) | PER-TEAM | discussion | Jack-of-all-trades boss | SKIP | Personal |
| 27.6 | - (not yet) | PER-TEAM | discussion | Informal group rules and innovation | SKIP | Personal |

---

## Counts

| Ch | MUST | USEFUL | SKIP |
|---|---|---|---|
| 1 | 0 | 2 | 2 |
| 2 | 2 | 1 | 0 |
| 3 | 1 | 2 | 1 |
| 4 | 0 | 1 | 1 |
| 5 | 0 | 3 | 3 |
| 6 | 0 | 2 | 2 |
| 7 | 4 | 0 | 0 |
| 8 | 1 | 2 | 1 |
| 9 | 2 | 6 | 2 |
| 10 | 0 | 4 | 2 |
| 11 | 1 | 2 | 1 |
| 12 | 0 | 1 | 2 |
| 13 | 0 | 2 | 2 |
| 14 | 0 | 2 | 2 |
| 15 | 0 | 1 | 2 |
| 16 | 0 | 2 | 1 |
| 17 | 0 | 3 | 0 |
| 18 | 0 | 2 | 1 |
| 19 | 0 | 1 | 2 |
| 20 | 0 | 2 | 0 |
| 21 | 0 | 3 | 0 |
| 22 | 0 | 1 | 3 |
| 23 | 0 | 1 | 2 |
| 24 | 1 | 5 | 1 |
| 25 | 0 | 3 | 2 |
| 26 | 0 | 6 | 5 |
| 27 | 0 | 2 | 4 |
| **Total** | **12** | **62** | **44** |


## In-text worked models that matter more than any DQ (no DQ trains them)

| Model | Kuhn location | Exam template |
|---|---|---|
| Linear bonus + PC, a < 0, b = 1 | 3.1-3.2, pdf 40-48 | M23 Q3, M25 Q3, R25 Q4, R26 Q6 |
| Efficient effort (sum of surplus) | 4.1, pdf 54-56 | R26 6a, F24 2b |
| Concave utility of income, FOC with a | 11.4, pdf 209-213 | R25 Q5, F25 Q4 |
| Self-selection via backloaded pay (two-type constraints) | 15.4, pdf 273-277 | F24 Q4, R26 7d |
| Monopsony markdown w = ηQ/(1+η) | 17.1, pdf 303-305 (footnote 3) | F25 Q1, F24 Q1c, R26 Q9 |
| Deferred pay / bonding | 18.3, pdf 324-335 | Tut 3.2; F24 Q4 (adjacent) |
| Tournament: p = ½ + α(Eᵢ - Eⱼ), FOC, PC, optimal prize | 20.2-20.5, pdf 366-373 | F25 Q3 |
| Team 1/N free-riding, efficient vs equal share | 24.2-24.3, pdf 456-462 | F24 Q2 |
| Intrinsic motivation / guilt / prosocial algebra | **not in Kuhn**; lecture-only | M25 Q3, R25 Q4, F24 Q3, R26 Q6-7 |
| Non-profit N(w) with volunteers N(0) > 0 | **not in Kuhn**; lecture-only | F24 Q1, R26 Q9 |
