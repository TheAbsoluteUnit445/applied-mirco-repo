# Rosen & Gayer (10th) end-of-chapter Discussion Questions: triage

Rough scout of **all** Discussion Questions in R&G ch 1-16 for exam readiness. These are not solutions. Topic IDs come from `map/TOPICS.md`, and exam references from `map/_work/exam-inventory.md` (M23/M25 = midterms, F24/F25 = October finals, R25/R26 = July resits).

**Necessity scale**
- **MUST**: mirrors an exam template, or trains an exam-tested skill that the tutorials don't train.
- **USEFUL**: deepens understanding of an exam topic.
- **SKIP**: US/institutional detail, not exam-style.

**Type codes**: N = numerical, G = graphical, V = verbal, P = policy discussion.

## Which questions the weekly sheets assign (numbering mapped to 10th ed.)

| Week | Chapter | Sheet numbering as printed | 10th-ed. number used below | Note |
|---|---|---|---|---|
| 1 | 3 | 8th: 4, 9, 10 / 9th & 10th: 6, 12, 14 | 3.6, 3.12, 3.14 | |
| 1 | 4 | 1 / 1 | 4.1 | |
| 2 | 5 | 8th: 2, 3a, 3d, 8, 11 / 9th: 4, 6a, 6d, 11, 13 / 10th: 4, 7a, 7d, 12, 14 | 5.4, 5.7a, 5.7d, 5.12, 5.14 | |
| 3 | 9 | 8th: 5, 6, 7 / 9th & 10th: 6, 7, 8 | 9.6, 9.7, 9.8 | |
| 3 | 10 | 8th: 4, 5 / 9th & 10th: 5, 6 | 10.5, 10.6 | |
| 3 | 11 | 8 | 11.8 | |
| 4 | 3 | 8th: 8 / 9th: 10 | 3.10 | The answer key says "3.8 / 3.10 / 3.10" |
| 4 | 8 | 5 / 5 | 8.5 | Discussed in the tutorial |
| 4 | 11 | 3 / 3 | 11.3 | |
| 4 | 12 | 8th & 9th: 7, 8 | 12.8, 12.9 | The answer key says "12.7/12.7/12.8" and "12.8/12.8/12.9". The 10th-ed. 12.8 (Mexico food boxes) is a different story from the 8th/9th food-stamp black market, but it trains the same Figure 12.3 skill |
| 4 | 13 | 1, 4, 7 | 13.1, 13.4, 13.7 | 13.7 is discussed in the tutorial |
| 5 | 14 | 3, 5, 6, 8 (all editions) | 14.3, 14.5, 14.6, 14.8 | 14.3 is discussed in the tutorial |
| 5 | 15 | 8th: 5, 7, 8 / 9th & 10th: 9, 11, 12 | 15.9, 15.11, 15.12 | |
| 6 | 16 | No exercise sheet in the repo yet (only Lecture 6) | none | |
| 7 | 6 | Not released yet | none | |

Several questions rely on tables, figures or utility functions that were lost in the md extraction (marked **[PDF]** below). Open the PDF page for those.

---

## Ch 1 Introduction (pdf 41-61)

**Sections.** Nothing here is examined directly. "Public Finance and Ideology" (p42-45) gives background for PUB-POSNORM, with the organic vs mechanistic view of government. "Government at a Glance" (p46-59) is US institutional data, so skim it.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason |
|---|---|---|---|---|---|---|
| 1.1 | no | PUB-POSNORM | V | Classify quotes as organic or mechanistic | SKIP | Ideology labels, not examined |
| 1.2 | no | PUB-POSNORM | V | Libertarian vs social democrat vs organic view of paternalistic laws | SKIP | Same |
| 1.3 | no | PUB-POSNORM | V | Danish fat tax and the mechanistic view | SKIP | Same |
| 1.4 | no | PUB-POSNORM | V | Does each policy raise or lower the size of government? | SKIP | Measurement of government size |
| 1.5 | no | none | V | Inflation and real debt, measuring revenue | SKIP | Macro measurement |
| 1.6 | no | none | V | Mandate vs tax-plus-credit: same size of government? | SKIP | Measurement |
| 1.7 | no | none | N | Defence spending relative to GDP | SKIP | Arithmetic only |
| 1.8 | no | none | N | UK expenditure, real and per-capita changes **[PDF]** | SKIP | Data exercise |
| 1.9 | no | none | N | UK tax revenue changes **[PDF]** | SKIP | Data exercise |

## Ch 2 Tools of Positive Analysis (pdf 62-84)

**Sections.** There is no PUB topic ID for this chapter. It trains the empirical-design skill that the exam asks in **every** final and resit, inside the Personnel part (PER-EMP: F24 3b, R25 Q7, F25 Q5, R26 Q8).
- **Read:** "Causation versus Correlation" (p65-67), "Experimental Studies" (p67-71, RCTs and their problems), "Quasi-Experimental Studies" (p75-80, diff-in-diff, treatment and control groups).
- **Skim:** "Role of Theory" (p62-65), "Observational Studies" (p71-75, regression detail).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 2.1 | no | PER-EMP, PUB-TAX-EB | V | Why theory can't sign the labour-supply effect of a tax cut; design an experiment | **MUST** | Mirrors the exam's "design an RCT" part (R25 Q7, F25 Q5, R26 Q8); also income vs substitution effects | Income vs substitution effect, then randomise who gets the lower marginal rate, compare hours, state scale and duration |
| 2.2 | no | PER-EMP | V | Irish returners earn more: alternative explanations and how to test | USEFUL | Self-selection reasoning | |
| 2.3 | no | PER-EMP | V | Computer use correlates with wages, so train every child? | **MUST** | The exam's "correlation is not causation" part (confounder, reverse causality; F24 3b, R26 Q8) | Name the omitted variable (ability or job type) and the direction of the bias, then say what design would fix it |
| 2.4 | no | PER-EMP, PUB-AI-MORAL | V | Using the RAND experiment to predict universal coverage | USEFUL | External validity, general-equilibrium effects | |
| 2.5 | no | PER-EMP, PUB-TAX-EB | V | Dutch 2001 reform: define treatment and control groups | USEFUL | Natural-experiment design | |
| 2.6 | no | PER-EMP | V | State tax cut and saving: diff-in-diff and the parallel-trends assumption | USEFUL | Diff-in-diff | |
| 2.7 | no | PER-EMP | V | Spitzer: no time-series correlation between tax rates and growth | USEFUL | Confounding over time | |
| 2.8 | no | none | V | Deficits vs interest rates table **[PDF]** | SKIP | Macro data | |

## Ch 3 Tools of Normative Analysis (pdf 85-115)

**Sections.** The core is all exam-relevant (PUB-WELF, PUB-SWF).
- **Read closely:** "Welfare Economics" (p85-97: Edgeworth box, Pareto efficiency and improvement, MRS, the production economy and MRS = MRT), "First Fundamental Theorem" (p97-99), "Fairness and the Second Fundamental Theorem" (p99-104: utility possibilities curve, SWF, 2nd theorem; F24 7c), "Market Failure" (p104-107).
- **Skim:** "Buying into Welfare Economics" (p107-109, critiques).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 3.1 | no | PUB-WELF, PUB-AI-ADVSEL | V | Which markets are efficient (hurricane insurance, medical care, student loans, ...)? | USEFUL | Lists the sources of market failure | |
| 3.2 | no | PUB-SWF | V | "Collective salvation" and the SWF | SKIP | Quote interpretation | |
| 3.3 | no | PUB-WELF | V | Repugnant markets vs the 1st welfare theorem | USEFUL | States the 1st theorem's logic | |
| 3.4 | no | PUB-AI-ADVSEL, PUB-WELF | V | Sweden bans risk-rating in health insurance: efficient? | USEFUL | Equity vs efficiency, links to adverse selection | |
| 3.5 | no | PUB-WELF | G/V | Kidney sale in an Edgeworth box | USEFUL | Edgeworth practice | |
| 3.6 | W1 | PUB-SWF | G | Social indifference curves for two SWFs; optimum on a utility possibilities curve **[PDF: SWFs missing]** | USEFUL | SWF weights shown graphically; supports F25 6b | |
| 3.7 | no | PUB-WELF, PUB-EXT-PIGOU | V | Smoking bans vs alcohol bans | USEFUL | Externality vs paternalism, i.e. a normative justification | |
| 3.8 | no | PUB-POSNORM | P | Rationalise US policies with welfare economics | USEFUL | Normative-reason practice (F25 8a) but US cases | |
| 3.9 | no | PUB-WELF | G/V | Two castaways, 100 peanuts: every allocation is Pareto efficient; is each fair? | USEFUL | Efficiency is not equity | |
| 3.10 | W4 | PUB-SWF | N | Split $300 between Mark and Judy to maximise a given SWF **[PDF: U and W missing]** | **MUST** | Mirrors F25 6a (optimal split under a weighted SWF) | Substitute I_J = 300 − I_M, set the weighted MUs equal (FOC), check the corner |
| 3.11 | no | PUB-SWF, PUB-REDIST-THEORY | N | 400 lbs of food, U_T = √F1 and U_W = ½√F2: utilitarian vs equal-utility split | **MUST** | Same template as F25 6a, with utilitarian vs Rawls-type contrast; not on any sheet | Utilitarian: equalise marginal utilities. Equal-utility: set U_T = U_W and use the constraint. Compare who gets more and why |
| 3.12 | W1 | PUB-WELF | N/V | Both MRS = 2 tea per crumpet, MRT = 3 crumpets per tea: efficient? | **MUST** | Mirrors F25 7b (MRS = MRT for private goods) | Put MRS and MRT in the same units, compare, and move production toward the good valued more than its opportunity cost |
| 3.13 | no | PUB-WELF | G/N | Edgeworth box with linear utility: contract curve and efficiency of the endowment | USEFUL | Corner contract curve, good Edgeworth practice | |
| 3.14 | W1 | PUB-WELF, PUB-SWF | V | True/false: equal MRS implies Pareto efficiency? SW rises iff Pareto improvement? Inside to frontier is a Pareto improvement? | **MUST** | Trains the Pareto-improvement vs SW distinction (R25 3a, F24 7c) in the exam's short-justification format | For each claim, find a counterexample or state the missing condition (production side MRT; distribution; the direction of the move on the UPC) |

## Ch 4 Public Goods (pdf 116-141)

**Sections.** This is the most-examined chapter (5 of 6 exams).
- **Read closely:**
  - "Public Goods Defined" (p116-119): rivalry, excludability, M23 1a.
  - "Efficient Provision of Public Goods" (p119-129): vertical summation, Samuelson rule ΣMRS = MRT (p122), "Problems in Achieving Efficiency" / free riding (p126).
  - Appendix "Preference Revelation Mechanisms" (p139-140): optional.
- **Skim:** "Privatization" (p129-134, public vs private provision and production: PUB-PG-CLASS, not examined numerically), "Public Goods and Public Choice" (p134).
- **Not in the book:** Nash private provision with corner solutions (PUB-PG-NASH) is mostly lecture material. Use the tutorial sheets for it.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 4.1 | W1 | PUB-PG-CLASS | V | Classify wilderness, satellite TV, medical school, public TV, ATM | USEFUL | Rivalry/excludability vocabulary (M23 1a) | |
| 4.2 | no | PUB-PG-SAM, PUB-PG-CLASS | V | True/false: equal marginal valuations needed? Nonrival + excludable never private? Is a road nonrival? Bigger communities consume more? | **MUST** | Exam-style justification on Samuelson intuition and excludability (R26 1d, F24 5b) | (a) Samuelson sums MRS, they need not be equal. (b) Excludability allows pricing. (c) Congestion makes rivalry depend on use. (d) More MRS terms in the sum |
| 4.3 | no | PUB-PG-SAM | N/V | Cheetah: patrol (public) vs fruit (private); MRS = 2 lbs each, MRT = 3 lbs/hr | **MUST** | Mirrors F25 7c (ΣMRS vs MRT); not on any sheet | Sum the two MRS (patrol is non-rival), compare with MRT from the 3 lbs/hr rate, decide the direction |
| 4.4 | no | PUB-PG-CLASS | V | Is CERN research a public good? | USEFUL | Knowledge as a nonrival good | |
| 4.5 | no | PUB-PG-CLASS | P | Should liquor stores be run by the state or privately? | USEFUL | Public vs private provision criteria | |
| 4.6 | no | PUB-PG-CLASS | P | Pemex privatisation and monopoly | SKIP | Institutional | |
| 4.7 | no | PUB-PG-CLASS | P | Private airports with nap pods | SKIP | Institutional | |
| 4.8 | no | PUB-PG-NASH | V | Turkish parents don't donate to schools | USEFUL | Free-riding narrative | |
| 4.9 | no | PUB-PG-CLASS | P | Libraries discarding classics | SKIP | Not exam-style | |
| 4.10 | no | PUB-PG-CLASS | P | Tax farming | SKIP | Institutional | |
| 4.11 | no | PUB-PG-SAM, PUB-PG-NASH | N/V | Lighthouses: MB_Z = 90 − Q, MB_J = 40 − Q, MC = 100; why not efficient; efficient Q and net benefits | **MUST** | Same structure as M25 1a/b and R26 1a/b (quasi-linear Samuelson + free riding). Also a corner case: neither person alone values a lighthouse above MC | Sum the MBs vertically over the range where each is positive, set equal to MC. For (a), compare each person's own MB with MC (free riding, nobody provides) |
| 4.12 | no | PUB-EXT-COMMONS | N | Shepherds on a meadow: equilibrium vs efficient number | **MUST** | Mirrors R25 Q1 (commons: Nash entry vs efficient) | Equilibrium: enter while your own sheep ≥ 4. Efficient: maximise total sheep − 4·n (marginal, not average) |
| 4.13 | no | PUB-PG-SAM | G/N | Snowplow: MB 12 − Z and 8 − 2Z, MC 16 | USEFUL | Same numbers as tutorial 1.2 (Thelma/Louise), so a duplicate | |

## Ch 5 Externalities (pdf 142-190)

**Sections.**
- **Read closely:**
  - "Nature of Externalities" (p143-145).
  - "Graphical Analysis" (p145-152): MPC/MSC/MD, DWL triangle, PUB-EXT-PIGOU.
  - "Private Responses" (p152-156): **Coase Theorem** p152-155, plus mergers and social conventions.
  - "Public Responses: Taxes and Subsidies" (p156-160): Pigouvian tax and subsidy.
  - "Emissions Fees" and "Cap-and-Trade" (p160-174): fee vs cap-and-trade under uncertainty, p169-174 (PUB-EXT-INSTR).
  - "Command-and-Control" (p175).
  - "Positive Externalities" (p182-184): Pigouvian subsidy, R26 1c.
- **Skim:** "US Response" (p177-180), "Implications for Income Distribution" (p180-182), the policy boxes (climate, EU ETS, congestion pricing p166 is a nice read for R25 Q1).
- **Not in the book (use tutorials):** ban vs laissez-faire (F24 6a, F25 9d) and externality games (M23 2a). These are lecture/tutorial templates.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 5.1 | no | PUB-EXT-COMMONS | V | Airline bag fees and overhead-bin congestion | USEFUL | Commons/congestion intuition | |
| 5.2 | no | PUB-EXT-INSTR | V | Zoning limits: logic and alternatives | USEFUL | Standards vs taxes | |
| 5.3 | no | PUB-EXT-INSTR, PUB-TAX-INC | V | Carbon tax vs cap-and-trade: who bears the cost? | USEFUL | Both raise consumer prices (incidence link) | |
| 5.4 | W2 | PUB-EXT-PIGOU | G | Cassanova's parties with external benefit b: optimum, subsidy, who gains **[PDF fig p186]** | **MUST** | Mirrors R26 1c (Pigouvian subsidy for a positive externality / public good) | MSB = MB_p + b, so Q* where MSB = MC. Subsidy = b at Q*. Total payment = b·Q*. Then gainers vs taxpayers |
| 5.5 | no | PUB-EXT-PIGOU | V | Mall charges famous brands lower rent | USEFUL | Internalising a positive externality privately | |
| 5.6 | no | PUB-EXT-PIGOU | V | Fat tax taxes an input, not the harm | USEFUL | Targeting of a Pigouvian tax | |
| 5.7 | W2 (a, d) | PUB-EXT-COASE | V | Is Coase applicable: GM corn, ants and pesticides, Madagascar logging, Internet congestion? | **MUST** | Mirrors M23 2b and R26 1d (state the Coase conditions, explain the violation). Do b and c too | For each case check (1) clear, enforceable property rights, (2) few parties and low transaction costs. Name which one fails |
| 5.8 | no | PUB-EXT-PIGOU, PUB-EXT-INSTR | G/V | Oil-import externality: Pigouvian tax; tradable gasoline rights and their price | USEFUL | Permit price as opportunity cost | |
| 5.9 | no | PUB-EXT-INSTR | V | Cattle drug kills vultures: externalities, ban vs incentives | USEFUL | Verbal version of the ban vs laissez-faire template | |
| 5.10 | no | PUB-EXT-COMMONS | V | San Francisco occupancy-based parking prices | USEFUL | Congestion pricing | |
| 5.11 | no | PUB-EXT-PIGOU | N | Hog farm table with MC, MB, MD; efficient Q; abatement diet **[PDF table p188]** | USEFUL | Discrete market vs efficient; abatement-technology twist | |
| 5.12 | W2 | PUB-EXT-PIGOU | N | MB = 10 − X, MC = 5, external cost 2: market Q, efficient Q, DWL, Pigouvian tax, revenue | **MUST** | Core of template 2 (F25 9c, R26 3e, R26 3d welfare) | Market: MB = MPC. Efficient: MB = MPC + 2. DWL triangle between them. Tax = MEC at Q*. Revenue = t·Q* |
| 5.13 | no | PUB-EXT-COASE, PUB-EXT-INSTR | P | Kyoto: Coase prediction vs reality; fee vs cap-and-trade under cost uncertainty | USEFUL | Coase failure with many parties | |
| 5.14 | W2 | PUB-EXT-INSTR | G | Fee vs cap-and-trade when costs are lower than expected, for inelastic vs elastic MSB | USEFUL | Assigned, but never examined in the six papers | |

## Ch 6 Political Economy (pdf 191-224), week 7, upcoming

**Sections.**
- **Read closely: Direct Democracy (p192-204).**
  - Unanimity / Lindahl (p192-194).
  - **Majority voting rules** (p194-200): cycling, single-peaked preferences, agenda manipulation, **median voter theorem** (F24 8a/b).
  - Logrolling (p200-202).
  - Arrow (p202-204).
- **Representative Democracy (p204-215).**
  - Elected politicians and the median voter (p204-208).
  - Public employees / Niskanen bureaucrat (p208-209).
  - **Special interests and rent seeking, Fig 6.4** (p209-214).
  - These are PUB-POL-GOVFAIL, the "positive explanation" in F25 8b.
- **"Explaining Government Growth"** (p215-219): read once for verbal arguments only.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 6.1 | — | PUB-POL-VOTE | G/V | 5 voters rank projects A to D: sketch preferences; does majority rule pick a winner? **[PDF table p220]** | **MUST** | Single-peakedness and median-voter logic (F24 8a/b); no tutorial exists yet | Order the options, draw each voter's rank curve, check single-peakedness, run pairwise votes (Condorcet winner or cycle) |
| 6.2 | — | PUB-POL-VOTE | V | World Cup vote trading | USEFUL | Logrolling identification | |
| 6.3 | — | PUB-POL-VOTE | N | 3 voters, 2 bills: majority vs logrolling vs side payments; efficiency **[PDF table p221]** | USEFUL | Logrolling numerics. Not yet examined, but likely tutorial material | |
| 6.4 | — | PUB-POL-VOTE | V | Christiania's consensus rule gives no decisions | USEFUL | Unanimity costs | |
| 6.5 | — | PUB-POL-VOTE | V | Kuwaiti women's suffrage and politicians "wooing" them | USEFUL | Median-voter shift | |
| 6.6 | — | PUB-POL-VOTE | V | Puerto Rico five-option referendum | USEFUL | Cycling / Arrow | |
| 6.7 | — | PUB-POL-GOVFAIL | G | Pharmacy permits in Fig 6.4: rents, prices, DWL | USEFUL | Rent-seeking graph | |
| 6.8 | — | PUB-POL-GOVFAIL | V | Pharmacy advertising bans: which model? | USEFUL | Special interests | |
| 6.9 | — | PUB-POL-GOVFAIL | N | Milk cartel: competitive vs cartel P and Q, rents, max contribution, DWL with and without rent-seeking costs | **MUST** | The only numerical rent-seeking drill. Trains the DWL triangle and the Tullock rectangle, i.e. the "positive explanation" mechanism (F25 8b) | Competitive: P = MC. Cartel: MR = MC. Rents = (P_m − MC)·Q_m. DWL = triangle. If rents are spent on lobbying, the rectangle is also social waste |
| 6.10 | — | PUB-POL-VOTE | N/V | John, Eleanor, Abigail rank H/M/L: pairwise votes, stability, agenda setter; then Eleanor's ranking changes **[PDF table p223]** | **MUST** | Mirrors F24 8b (pairwise majority winner) plus the cycling contrast | Run all three pairwise votes. Check single-peakedness for each voter. A cycle means the agenda setter decides |

## Ch 7 Education (pdf 225-243)

**Sections.** Lightly examined (PUB-EDU is only implicit, e.g. tutorial 2.5).
- **Read:** "Justifying Government Intervention" (p226-229: externalities, imperfect capital markets, equity), "What Can Intervention Accomplish" (p229-233: **crowding out, Fig 7.1**).
- **Skim:** empirical evidence (p233-236), vouchers, charters and accountability (p236-241; vouchers are on TOPICS but are verbal only).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason |
|---|---|---|---|---|---|---|
| 7.1 | no | PUB-EDU | V | Rationales for public education, higher vs primary | USEFUL | Externality vs equity reasons |
| 7.2 | no | PUB-EDU | V | Quality raises growth: subsidise? | USEFUL | Private vs social return |
| 7.3 | no | PUB-EDU, PUB-AI-ADVSEL | P | Income-contingent loans with a flat lifetime tithe | USEFUL | Adverse selection (the future bankers opt out) |
| 7.4 | no | PUB-EDU | G | South Korean tutoring: modify Fig 7.1 for top-ups | USEFUL | Crowding-out logic |
| 7.5 | no | PUB-EDU | P | Hong Kong vouchers restricted to non-profits | SKIP | Institutional |
| 7.6 | no | PUB-EDU | G | Budget constraint with free public school ($8,000) vs a voucher; family cuts education | USEFUL | Kinked/notched budget-constraint drawing (skill in R26 2a) |
| 7.7 | no | PER-EMP | V | Master's-degree teachers: cross-section bias; RCT usefulness | USEFUL | Selection bias and external validity |

## Ch 8 Cost-Benefit Analysis (pdf 244-282)

**Sections.**
- **Read:**
  - "Present Value" (p245-248).
  - "Private Sector Project Evaluation" (p248-253: NPV, IRR, B/C ratio).
  - "Discount Rate for Government Projects" (p253-257).
  - "Valuing Public Benefits and Costs" (p257-266: market prices, shadow prices, consumer surplus, value of time and life).
  - **"Distributional Considerations"** (p267-268: weighted CBA, which is exam template 4, F24 7b, R25 3e).
- **Skim:** "Games" (p266), "Uncertainty" (p268) plus the certainty-equivalent appendix (p278-280; useful for ch9 expected utility), class-size application (p269-272), government use (p272-274).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 8.1 | no | PUB-CBA | V | "Just order flame-resistant pajamas" | SKIP | Rhetorical | |
| 8.2 | no | PUB-CBA | V | Valuing reduced queuing time at the vehicle registration office | USEFUL | Value of time | |
| 8.3 | no | PUB-CBA | N | Perpetuity: PV = B/r | USEFUL | Discounting basics | |
| 8.4 | no | PUB-CBA | N | Bicycle: IRR and the buy decision at 5% | USEFUL | IRR vs discount rate | |
| 8.5 | W4 (tutorial) | PUB-CBA, PUB-SWF | N | Bill's subway vs legal services for the poor: PVs, choice, break-even distributional weight | **MUST** | Exactly template 4: solve for the weight λ on the poor (F24 7b, R25 3e) | PV each project for one person, scale up by population, compare NPVs, then set NPV_subway = λ·NPV_legal and solve for λ |
| 8.6 | no | PUB-CBA | N/V | Climate: spend $100bn now to avert $700bn in 100 years vs invest at 5% | USEFUL | Discounting intuition | |
| 8.7 | no | PUB-CBA | P | Japan nuclear restart | SKIP | Policy chat | |
| 8.8 | no | PUB-CBA | V | Jubail "job creation" as a benefit | USEFUL | Shadow wage / opportunity cost of labour | |
| 8.9 | no | PUB-CBA | V | Cost per life saved varies across regulations | USEFUL | Equalise marginal cost per life | |

## Ch 9 The Health Care Market (pdf 283-317)

**Sections.**
- **Read:**
  - "Role of Insurance" (p284-292: expected utility, risk premium, Fig 9.2, risk pooling; used in R26 4a's expected-utility step).
  - **"Adverse Selection in the Health Insurance Market"** (p293-298, PUB-AI-ADVSEL; exam R25 Q2 lemons).
  - **"Insurance and Moral Hazard"** (p298-305: DWL of coinsurance, Fig 9.5-9.6).
  - "Externalities" (p305), "Paternalism" (p306).
- **Skim:** "The Uninsured" (p306-309), "High Health Care Costs" (p309-314), empirical boxes.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 9.1 | no | PUB-CBA | V | "Health spending just creates jobs": the economist's criterion | SKIP | Opportunity-cost truism | |
| 9.2 | no | PUB-AI-MORAL | V | Supplementary private insurance and health spending | USEFUL | Moral hazard | |
| 9.3 | no | PUB-AI-ADVSEL | V | Switzerland vs Czech: premium flexibility and switching | USEFUL | Selection | |
| 9.4 | no | PUB-AI-MORAL | V | Elasticity −2.3 with 20% coinsurance | USEFUL | Moral hazard rises with elasticity | |
| 9.5 | no | PUB-AI-MORAL | V | Tennessee caps coverage at $25k: efficient insurance? | USEFUL | Insure large losses, not small ones | |
| 9.6 | W3 | PUB-AI-MORAL, PUB-EXT-PIGOU | N | Doctor visits P = 100 − 25Q, MC 50: efficient Q, 50% coinsurance, DWL, then MEB = 50 | **MUST** | DWL triangle (template 2) plus the externality twist (R26 3d logic) | Efficient: P = MC. Insured: P = 0.5·MC. DWL = triangle between MC and demand. With MEB the social MB shifts up, so redo the comparison |
| 9.7 | W3 | PUB-AI-ADVSEL, PUB-AI-MORAL | N | U = ln(4I), 5% chance of losing $20k: EU, fair premium, maximum willingness to pay | **MUST** | Expected-utility mechanics as in R26 4a (EU with concave utility) and R25 Q2 | EU = Σp·U. Fair premium = expected loss. Max WTP: solve U(30000 − π) = EU_uninsured |
| 9.8 | W3 | PUB-AI-MORAL | V | Littering: doubling the probability vs doubling the fine, risk-averse vs risk-loving | USEFUL | Risk attitude reasoning | |
| 9.9 | no | none | V | Pet vs human health-care spending growth | SKIP | Technology anecdote | |

## Ch 10 Government and the Market for Health Care (pdf 318-346)

**Sections.**
- **Read:** "Private Health Insurance" (p320-325; job lock, cost control: skim), **Fig 10.5 crowding out of private by public insurance** (around p325-326), and the mandate logic.
- **Skim / SKIP:** Medicare and Medicaid details (p325-338), the ACA (p338-343). These are US institutional.

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason |
|---|---|---|---|---|---|---|
| 10.1 | no | PUB-AI-MORAL | V | OECD correlation between out-of-pocket share and spending | SKIP | Data interpretation |
| 10.2 | no | PUB-AI-MORAL | V | Czech small copayments | USEFUL | Moral-hazard reduction |
| 10.3 | no | PUB-AI-MORAL | V | German copay rise cuts doctor visits | USEFUL | Moral hazard and complements |
| 10.4 | no | PUB-AI-ADVSEL | V | Medicare drug benefit: decide once on entry | USEFUL | Prevents adverse selection over time |
| 10.5 | W3 | PUB-AI-ADVSEL | G | Medigap minimum-coverage mandate, all-or-nothing budget constraint | USEFUL | Graphical BC skill; mandate can lower coverage |
| 10.6 | W3 | PUB-AI-SOCINS | G | Fig 10.5 with supplementary insurance allowed, and tax-financed | USEFUL | Crowding-out graph |
| 10.7 | no | PUB-AI-SOCINS | G | Indifference curves where public insurance reduces total coverage | USEFUL | Same graph |

## Ch 11 Social Security (pdf 347-388)

**Sections.**
- **Read:** "Why Have Social Security?" (p348-353: annuities, adverse selection, paternalism/moral hazard), the pay-as-you-go formula (around p353-358), "Effects on Saving" (p365-373: life-cycle model, Fig 11.4-11.5 crowding out), "Retirement Decisions" (p374).
- **Skim:** US benefit formulas, distribution, trust fund (p353-365), long-term stresses and reform (p375-384).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason |
|---|---|---|---|---|---|---|
| 11.1 | no | PUB-AI-ADVSEL | V | Chiappori-Salanié: coverage vs price per unit as a test | USEFUL | Adverse-selection prediction |
| 11.2 | no | PUB-AI-MORAL | V | Mandatory accounts: moral hazard causes undersaving | USEFUL | Samaritan's dilemma |
| 11.3 | W4 | PUB-AI-SOCINS | N | UK dependency ratio 26.7% to 45.8%: tax-rate change under PAYG | USEFUL | PAYG formula numeric; not examined |
| 11.4 | no | PUB-AI-SOCINS | V | Estonia vs Slovenia survivor benefits and informality | SKIP | Niche |
| 11.5 | no | PUB-AI-SOCINS | V | Turkey infant vs Mexico adult mortality | SKIP | Niche |
| 11.6 | no | PUB-AI-SOCINS | V | Constant benefits vs constant replacement ratio | SKIP | US reform detail |
| 11.7 | no | PUB-AI-SOCINS | P | Invest the trust fund in stocks | SKIP | Finance/macro |
| 11.8 | W3 | PUB-AI-SOCINS | G/N | Two-period model, $20k/$5k at 10%; SS takes $3k: saving crowd-out | USEFUL | Intertemporal BC; one-for-one crowd-out |
| 11.9 | no | PUB-AI-SOCINS | G | SS return below the market rate: budget constraint shift | USEFUL | Extends 11.8 |
| 11.10 | no | PUB-AI-SOCINS | G | Ukraine triples pensions: savings and retirement | USEFUL | Wealth effect |
| 11.11 | no | PUB-AI-SOCINS | N/V | Carve-out accounts and the offset rate | SKIP | US reform detail |

## Ch 12 Income Redistribution: Conceptual Issues (pdf 389-415)

**Sections.**
- **Read closely:** "Rationales for Income Redistribution" (p395-405): **simple utilitarianism** (p395-400, Fig 12.1 equal-MU result and its assumptions), **maximin / Rawls**, **Pareto efficient redistribution** (p401), nonindividualistic views. This is PUB-REDIST-THEORY and PUB-SWF (F25 6a-c).
- **Read:** "Expenditure Incidence" (p405-412): **valuing in-kind transfers, Fig 12.3** (cash vs in-kind, EV logic for R26 2c).
- **Skim:** "Distribution of Income" (p390-395, poverty-measurement caveats).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 12.1 | no | PUB-REDIST-THEORY | V | Stein: poverty vs inequality; consistent with utilitarianism? | USEFUL | Maximin vs utilitarian framing | |
| 12.2 | no | PUB-REDIST-THEORY, PUB-SWF | N | Simon and Charity split $100 with given MU functions: additive SWF, single-person SWF, constant MU **[PDF: MU formulas missing]** | **MUST** | Mirrors F25 6a/6b (optimal split, role of weights) | Additive SWF: set MU_S = MU_C with I_S + I_C = 100. Extreme weights give a corner. Constant MUs give a corner or indeterminacy, so comment |
| 12.3 | no | PUB-REDIST-PROG | G | Convert an in-kind perk into a cash subsidy of equal utility (Putin) | **MUST** | The exact skill in R26 2c (efficiency loss of a transfer = cost − EV, "describe the method") | Draw the in-kind kink, find the indifference curve through the chosen point, shift the cash BC parallel until it is tangent. The vertical gap is the cash equivalent |
| 12.4 | no | PUB-REDIST-THEORY | V | Relative poverty line when everyone's income doubles | USEFUL | Poverty-measure properties | |
| 12.5 | no | PUB-REDIST-PROG | V | Generous welfare attracts lower-skilled immigrants | USEFUL | Selection effect, light | |
| 12.6 | no | PUB-SWF | V | Maximin SWF and a transfer from the middle to the poor and rich | USEFUL | Rawls only cares about the worst-off | |
| 12.7 | no | PUB-SWF | V | True/false on three SWFs: indifference between giving $1 to either person; weights; equality optimal? **[PDF: SWFs missing]** | **MUST** | Mirrors F25 6b (interpret SWF weights) in true/false form | Distinguish weights on utility from marginal utility of income; equality is optimal only with equal weights and identical concave U |
| 12.8 | W4 (8th/9th 12.7) | PUB-REDIST-PROG | G | Food boxes lower local food prices: adjust Fig 12.3, cash vs in-kind | USEFUL | In-kind vs cash graph | |
| 12.9 | W4 (8th/9th 12.8) | PUB-REDIST-THEORY | N | Sherry and Marsha with interdependent utility: Pareto efficient redistribution; move $36 | USEFUL | Pareto-efficient redistribution numeric | |

## Ch 13 Expenditure Programs for the Poor (pdf 416-452)

**Sections.**
- **Read closely:** **"Income Maintenance and Work Incentives"** (p419-430): basic welfare BC, implicit tax rate, Fig 13.1-13.4, work requirements, time limits. This is R26 Q2a/b (kinked BC, work incentives) and R26 Q4 (job search, work requirements).
- **Read:** "EITC" (p430-434: phase-in, plateau and phase-out budget constraint), "Unemployment Insurance" (p436-440: replacement rate, search incentives).
- **Skim:** TANF institutions (p417-419), SSI, Medicaid, SNAP and housing details (p434-443), earnings programs (p443).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 13.1 | W4 | PUB-REDIST-PROG | N/G | Elizabeth: $225 disregard, 50% reduction, $10/hr, $645 benefit; income at 10 hrs, break-even hours, plot BC, indifference curves | **MUST** | Mirrors R26 2a (draw a kinked welfare BC with numbers) and 2b | Compute the kink points (end of disregard, break-even where benefit hits 0). Slopes: w, w(1−0.5), w. Plot income vs leisure |
| 13.2 | no | PER-EMP | V | Bolsa Familia: why participants vs similar non-participants is flawed | USEFUL | Selection into treatment | |
| 13.3 | no | PUB-REDIST-PROG | P | Basic income with a phase-out | USEFUL | Implicit tax and work incentives | |
| 13.4 | W4 | PUB-REDIST-PROG | G | Philip: public housing (P2, fixed H2) vs private market; compare CS **[PDF fig p449]** | USEFUL | All-or-nothing in-kind choice | |
| 13.5 | no | PUB-REDIST-PROG | G | SNAP notch near the poverty line | USEFUL | Notch BC shape | |
| 13.6 | no | PUB-REDIST-PROG | G | Fig 13.4: indifference curves for someone who stops working on welfare | **MUST** | Same tangency argument as R26 2b (does welfare reduce hours?) | Steep (leisure-loving) indifference curve touching the BC at the corner with zero hours and full benefit |
| 13.7 | W4 (tutorial) | PUB-REDIST-PROG, PUB-TAX-INC | G | Section 8 demand shift: price vs quantity outcomes by supply elasticity | USEFUL | Incidence-style reasoning | |
| 13.8 | no | PUB-REDIST-PROG | G/N | UK Working Tax Credit: 30-hour threshold, 41% phase-out, 20% tax, £3/hr | USEFUL | Extra numeric kinked-BC drill | |
| 13.9 | no | PUB-REDIST-PROG | N/G | UI replacement rate before and after untaxing; BC when on and off UI | USEFUL | Search incentives (R26 Q4-adjacent) | |
| 13.10 | no | PUB-REDIST-PROG | G | ACA subsidy cliff at 400% FPL | USEFUL | Notch and labour supply | |

## Ch 14 Taxation and Income Distribution (pdf 453-494)

**Sections.**
- **Read closely:**
  - "General Remarks" (p454-459): statutory vs economic incidence; **progressivity measures, eqs 14.1/14.2, average vs marginal rate** (p457; F25 10b).
  - **"Partial Equilibrium Models"** (p459-479): unit taxes (p460-467, elasticity rules, Fig 14.3-14.6), ad valorem (p467), taxes on factors (p470), monopoly (p473), profits taxes (p476), capitalization (p478).
  - Exam template 2 (F24 6c/d, F25 9b, R26 3b/c).
- **Skim:** "General Equilibrium Models" (p479-489, Harberger tax equivalences; not examined).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 14.1 | no | PUB-TAX-INC | G/V | $5 per customer tax on strip clubs: incidence | USEFUL | Elasticity reasoning | |
| 14.2 | no | PUB-TAX-INC | V | Equal absolute utility sacrifice: progressive? | USEFUL | Progressivity concept | |
| 14.3 | W5 (tutorial) | PUB-TAX-INC | G | Unit tax under competition (flat MC) vs monopoly | USEFUL | Monopoly incidence, not examined | |
| 14.4 | no | PUB-TAX-INC | G/V | 10% sales tax on a medical-device monopolist: the editorial's error | USEFUL | "Firms can afford it" fallacy | |
| 14.5 | W5 | PUB-TAX-INC | N | Liquor Q_D = 500,000 − 20,000P, Q_S = 30,000P, $1 tax on producers: prices, revenue split, young drinkers | **MUST** | Template 2 incidence share (F24 6c, R26 3b) plus elasticity verbal (F25 9b) | Shift supply by t, solve for P_c, P_s = P_c − t. Shares = ΔP_c/t and (t − ΔP_c)/t. More elastic demand gives a larger quantity response |
| 14.6 | W5 | PUB-TAX-INC | N | General linear D and S: equilibrium, and the same outcome whether buyers or sellers pay the tax | **MUST** | Statutory vs economic incidence, the core idea behind F24 6d and R26 3b (tax on consumers) | Solve with P_s = P_c − u in both cases and show the same (P_c, P_s, Q) |
| 14.7 | no | PUB-TAX-INC | N | Australian brackets: progressivity via eq 14.2 **[PDF tables p491]** | USEFUL | Progressivity measure | |
| 14.8 | W5 | PUB-TAX-INC | N | T = −4000 + 0.2I: progressive? General T = a + tI | **MUST** | Average-rate test of progressivity (F25 10b) | ATR = T/I = a/I + t. Sign of the derivative in I depends on a |
| 14.9 | no | PUB-TAX-INC | G | Turkish luxury-car tax: new vs used car prices | USEFUL | Substitutes, capitalisation | |
| 14.10 | no | PUB-TAX-INC | G/V | Cuba 8% property tax "split 50-50" | USEFUL | Statutory split is irrelevant | |
| 14.11 | no | PUB-TAX-INC | G | Footballers' elastic migration: who bears the income tax | USEFUL | Elastic factor escapes the tax | |
| 14.12 | no | PUB-TAX-INC | V/G | Japan top-rate cut: inelastic male vs elastic female labour supply | **MUST** | Exactly the "how does incidence change with elasticity" verbal part (F24 6d, F25 9b, R26 3c) | Inelastic side bears and gains most. Compare the after-tax wage and the employer's cost in the two markets |
| 14.13 | no | PUB-TAX-INC | N | Rich and poor tax cuts: eqs 14.1 vs 14.2 give different verdicts | USEFUL | Progressivity measures can disagree | |

## Ch 15 Taxation and Efficiency (pdf 495-529)

**Sections.**
- **Read closely:**
  - **"Excess Burden Defined"** (p496-507): EV definition, lump-sum vs distorting tax, substitution vs income effect, Q&A p501.
  - **"Excess Burden Measurement with Demand Curves"** (p507-516): Harberger triangle, **eq 15.3: EB = ½ηPqt²**, pre-existing distortions p510.
  - Appendix "Formula for Excess Burden" (p525-526).
  - This is F24 7a, R25 3b, F25 9a, R26 3d, and the basis for Ramsey.
- **Read:** "Differential Taxation of Inputs" (p516-521), the second-best appendix (p527-528; nice intuition for R26 3d).
- **Skim:** "Does Efficient Taxation Matter?" (p521).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 15.1 | no | PUB-TAX-EB | V | Which taxes have large EB (land, cell phones, cup-only soda, ...)? | USEFUL | Elasticity and substitutes intuition | |
| 15.2 | no | PUB-TAX-EB | V | $25 tax kills a $100/$80 home-repair deal | USEFUL | EB with zero revenue | |
| 15.3 | no | PUB-TAX-EB, PUB-TAX-RAMSEY | V | 5% tax: Botox vs breast implants, using eq 15.3 | **MUST** | Trains EB = ½ηPqt², the reasoning behind R25 3d ("why tax elastic goods less") | Plug the elasticity and expenditure (Pq) into eq 15.3 and argue which market has the larger η·Pq |
| 15.4 | no | PUB-TAX-EB | G | Excess burden of tax evasion | SKIP | Odd and not examined | |
| 15.5 | no | PUB-TAX-EB | N | Top rate 35% to 44%: EB increase | USEFUL | EB ∝ t² (one line) | |
| 15.6 | no | PUB-TAX-EB | V | Child tax credit "no economic case" | USEFUL | Distortion vs social goals | |
| 15.7 | no | PUB-TAX-EB, PUB-EXT-INSTR | V | Auctioned permits with lump-sum rebates | USEFUL | Revenue recycling / double dividend | |
| 15.8 | no | PUB-TAX-EB | V | Nigeria removes its fuel subsidy | USEFUL | DWL of subsidies | |
| 15.9 | W5 | PUB-TAX-EB | V | UK TV licence: EB relative to revenue | USEFUL | Near lump-sum | |
| 15.10 | no | PUB-TAX-EB | V | Russian land tax differing by use | USEFUL | Differential input taxation | |
| 15.11 | W5 | PUB-TAX-EB | N | Capital: corporate VMP = 100 − K vs non-corporate 80 − 2K, 50 units, tax 6: allocation and EB | USEFUL | Differential-input EB numeric; not examined | |
| 15.12 | W5 | PUB-TAX-EB, PUB-EXT-PIGOU | N/G | Liquor $1 tax (same curves as 14.5): EB; then a $0.50 external cost | **MUST** | Template 2: EB triangle (F24 7a, F25 9a) plus the welfare effect of a tax with an externality (R26 3d) | EB = ½·t·ΔQ. With MEC 0.5 per unit, the avoided external cost 0.5·ΔQ offsets part of the triangle (the tax partly acts as a Pigouvian tax) |

## Ch 16 Efficient and Equitable Taxation (pdf 530-566), week 6, upcoming

**Sections.**
- **Read closely: "Optimal Commodity Taxation"** (p530-537): marginal EB = marginal revenue, **Ramsey rule** (p535), **inverse elasticity rule (eq 16.9)**, equity considerations (p536; the "regressive" point in F25 10b), taxing leisure / lump-sum equivalence (Lecture 6 slides 6-7). Covers R25 3c/d and F25 10a.
- **Read:** "Optimal Income Taxation" (p543-546: Edgeworth's model, linear income tax trade-off, Fig 16.4; PUB-TAX-OPTINC), "Horizontal Equity" (p548-552).
- **Skim:** family taxation (p537), "Optimal User Fees" (p538-542, natural monopoly pricing), time inconsistency (p546-547), costs of running the tax system and evasion (p552-561).

| Q | Assigned? | Topic | Type | Gist | Necessity | Reason | Approach hint (MUST only) |
|---|---|---|---|---|---|---|---|
| 16.1 | — | PUB-TAX-RAMSEY | N/V | Cable η = −0.51 vs satellite η = −7.40: efficient tax ratio and its assumptions | **MUST** | Exactly F25 10a and R25 3c (inverse elasticity ratio) | t_cable/t_sat = η_sat/η_cable (in absolute values). Assumptions: independent demands (no cross-elasticities), compensated elasticities, horizontal supply |
| 16.2 | — | PUB-TAX-RAMSEY, PUB-TAX-OPTINC | P | 3% luxury-car tax above $40k: efficiency, equity, administration | USEFUL | Three-criteria evaluation | |
| 16.3 | — | PUB-TAX-RAMSEY, PUB-TAX-OPTINC | V | Peter the Great's beard tax: optimal tax and horizontal equity | USEFUL | Elastic base; horizontal equity | |
| 16.4 | — | PUB-TAX-RAMSEY | V | Cook County sales tax on a "captive" base: efficient? fair? | USEFUL | Inverse elasticity vs equity, i.e. the R25 3d plus F25 10b pairing in verbal form | |
| 16.5 | — | PUB-TAX-RAMSEY | V | Water pipes with fixed costs: efficient pricing | USEFUL | User fees, two-part tariff | |
| 16.6 | — | PUB-TAX-OPTINC | G | Cigarette smuggling via Fig 16.5 (evasion model) | USEFUL | Evasion as a margin; light | |
| 16.7 | — | PUB-POL-GOVFAIL | V | Neglected-disease drugs and time inconsistency | USEFUL | Commitment problem | |
| 16.8 | — | PUB-TAX-RAMSEY, PUB-TAX-OPTINC | V | True/false: proportional tax incl. leisure = lump sum; uniform rates maximise efficiency; average-cost pricing; horizontal equity for a gym perk | **MUST** | (a) is Lecture 6 slides 6-7. (b) is the Ramsey/R25 3d intuition. Exam-style short justification | (a) Rewrite the BC: the tax scales the endowment. (b) Uniform rates are optimal only if leisure is also taxed or elasticities are equal. (c) Price ≠ MC. (d) Utility-based definition of equals |
| 16.9 | — | none | P | Celebrities emigrating: EU tax-rate convergence | SKIP | Tax competition, off-syllabus | |

---

## Counts

| Ch | MUST | USEFUL | SKIP |
|---|---|---|---|
| 1 | 0 | 0 | 9 |
| 2 | 2 | 5 | 1 |
| 3 | 4 | 9 | 1 |
| 4 | 4 | 5 | 4 |
| 5 | 3 | 11 | 0 |
| 6 | 3 | 7 | 0 |
| 7 | 0 | 6 | 1 |
| 8 | 1 | 6 | 2 |
| 9 | 2 | 5 | 2 |
| 10 | 0 | 6 | 1 |
| 11 | 0 | 6 | 5 |
| 12 | 3 | 6 | 0 |
| 13 | 2 | 8 | 0 |
| 14 | 4 | 9 | 0 |
| 15 | 2 | 9 | 1 |
| 16 | 2 | 6 | 1 |
| **Total** | **32** | **104** | **28** |

**Unassigned MUSTs** (not on any sheet, so worth adding): 2.1, 2.3, 3.11, 4.2, 4.3, 4.11, 4.12, 5.7b/c, 6.1, 6.9, 6.10, 12.2, 12.3, 12.7, 13.6, 14.12, 15.3, 16.1, 16.8. The ch 6 and ch 16 ones may become assigned once the week 6 and week 7 sheets appear.

**Gaps the book does not cover.** The book has no drill for two exam templates: ban vs laissez-faire with an externality (F24 6a, F25 9d), and Nash private provision with corner solutions (M23 1c, M25 1b, F25 7d, R26 1b; partly 4.11a). Rely on the tutorial sheets and past exams for these.
