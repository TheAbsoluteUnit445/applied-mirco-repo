# Verification and source qualifications

Audit and build date: **7 October 2026**. The completed pack contains five theory/practice modules (approximately 27,000 words), readable HTML twins, five HyperFrames decks with **80 slides**, and **nine interactive graphs**. The central index integrates evidence and study priorities; specialist records preserve detailed checks.

## Evidence and scope

Read repository AGENTS.md before work. Checked EXAM-MAP, TOPICS, PRIORITIES, upcoming-topics, exams-tagged, exam-inventory, relevant topic pages, Public/Personnel gap and difficulty tables, exercise maps and book-question triage. These were used to locate sources, not as proof of source content or current release status.

Primary sources inspected: the actual course guide and tutorial schedule; R&G chapters6 and16; Kuhn16 and20–27; current original Public Lecture6; original final/resit questions and grading PDFs; current Topic8 question/answer PDF; relevant earlier prerequisite tutorial; and existing authored interactive lectures. Book PDFs were checked where extracted formulas or preference tables were unclear. The schedule verifies all five requested topics, including dates already reached. Question hour16 October is not a theory module.

The course guide assigns chapters, while the current repository lacks original Public Lecture7/week6–7 tutorial sheets and original Personnel Topic7/9 materials. Existing later interactive lectures are repository-authored secondary teaching sources. These distinctions are explicit in the index and modules; assigned theory is supplied from the books. Topic8 is currently present, despite old maps saying it is unreleased.

## Exam identification and marks

| Original | Verified selected block | PDF pages | Marks |
|---|---|---|---|
| 25 October 2024 final | Teams Q2a–c / Q2d–e | 3 / 4 | 1 each, 5 total |
| 25 October 2024 final | Voting Q8a–b | 13 | 1+1 |
| 8 July 2025 resit | Tax prerequisite Q3b; Ramsey Q3c–d | 6; 7 | 2; 2+2 |
| 24 October 2025 final | Tournament Q3a–d | 7–8 | 2+3+2+3 =10 |
| 24 October 2025 final | Normative/positive political Q8a–b | 15 | 2+2 |
| 24 October 2025 final | Commodity taxation/equity Q10a–b | 18 | 2+1 |
| 7 July 2026 resit | Relative-income Q5a–c, earlier-topic bridge | 12–13 | 2+2+2 =6 |

Original values are retained in condensed attempt-first prompts; original PDFs are linked for exact wording and marking. Official logic is identified separately from independent completion of missing algebra and additional teaching comparisons. Historical counts use four finals/resits, not appearance probabilities. No unrelated midterm question was added.

Selected book exercises and page checks: R&G16.1 p563,16.8 p564; R&G6.1 pp220–221,6.9 pp222–223,6.10 p223; Kuhn16.1–16.3 p296, selected20–23 end questions,24.3 p471,24.6 pp471–472,25.4 p497,26.5 p540,27.1 p568. Original missing ranking tables were recovered from the R&G PDF. No book discussion question was assigned invented official exam marks.

## Source discrepancies and mathematical qualifications

- **Topic8.3b answer p4:** “low-risk” stocks contradicts Kuhn Result21.7 p406's riskier-assets account for lagging funds. The source remains intact and the module explains the conflict.
- **Topic8.4 answer p5:** omitted utility comparison and mislabelled tax subpart. The independently derived utility difference is included. The income cap argument explicitly compares **after-tax** incomes; it is not silently transferred to other models.
- **R26 Q5b p12:** a duplicated derivative contains an erroneous factor; the marking text and correct derivative below it agree. The worked solution shows the differentiation.
- **Kuhn Result22.2 p416:** the Tiger presence/absence sentence is reversed relative to the adjoining discussion and explanatory box. The module preserves the discrepancy and the empirical setting's causal qualifications.
- **Kuhn20.6 pp373–374:** the numerical interior candidate can be beaten by zero effort when uniform probabilities are bounded. The pack preserves the textbook's calculation and performs the global check rather than calling it an unconditional equilibrium.
- **Kuhn26 Result26.7 and footnote21 p526:** “complements” appears in a substitutes discussion where surrounding logic and calculations require substitutes. This is an original-source wording problem, not only an extraction problem.
- **Kuhn24.6 p472:** the radical in the cutoff is correctly printed in the original; extraction drops it. The solution uses the visually verified (5-\sqrt2\).
- **Kuhn24.3:** the log-benefit model determines total provision; a particular equal individual contribution requires symmetry. The solution states this qualification.
- **Kuhn27.1a:** admission under arbitrary shares needs a rule for changing incumbent shares. A conditional example is supplied rather than an invented unique answer.
- **R&G Ramsey derivation:** fixed-base revenue is an approximation. Exact post-tax revenue from the linear demand is separately calculated. Relevant page references and a constraint-sign extraction issue are handled in the Public record.

See [Public audit](public-audit.md), [Personnel audit](personnel-audit.md) and [tournament audit](tournament-audit.md) for exact supporting pages and treatments. Originals and prior progress files were not edited.

## Algebra and graph verification

Independent arithmetic checked R25 quantities280/260, excess burden50 and elasticity5/7; F25 tax ratios1:3:9; F24 voting peak15 and median20; original pairwise preference tables; rent rectangle versus deadweight-loss triangle; F25 general-cost tournament participation, four-salary wage bill, profit substitution and prize optimum; outsider/pride separation; F24 utility comparison with both partners' efforts and its sign change; tutorial8.4 utility gain; team bonus kink; leadership inequalities; fixed-effort selection; and global deviations in bounded tournament probabilities.

The new graph values are explicitly constructed. Ramsey rates satisfy fixed-base revenue and equal marginal losses. Uniform probabilities are clipped to [0,1]. The outsider graph states that its effort curve is an interior response, not a complete global equilibrium. Smooth complementarity uses a stable range (0\leq k\leq0.6), with negative planner Hessian and consistent simultaneous conditions. Prediction weights remain in [0,1]. Median voting is based on the explicitly symmetric quadratic teaching preferences. Tax-income graphs label income separately from utility. Axes, current values, assumptions, legends and reset controls are visible.

[build/verify.py](build/verify.py) repeats independent numerical and repository-link checks. [build/browser-check.cjs](build/browser-check.cjs) repeats UI checks. Graph controls were tested at both bounds; arithmetic and domain checks accompany the source derivations rather than relying on a plotted appearance alone.

## Browser and HyperFrames checks

Installed Chrome/Playwright verified **all80 slide end/reveal states**, checking active-frame visibility, text/equation/graph bounds against the footer and canvas, and KaTeX errors. The final sweep found **zero layout findings**, zero browser exceptions and zero failed HTTP requests. Earlier crowded slides and a seek-state title issue were corrected before final verification.

All nine graphs passed bound changes, labelled-value updates, native keyboard changes without slide navigation and reset. Real pointer dragging was tested in the median and probability graphs. The shared slideshow controller advanced the first reveal at2 seconds, the second at4, and then the next slide. All five self-contained files loaded from **file://**, sought to later slides and contained the complete slide count without fetching script/font dependencies. All five HTML documents loaded with typeset mathematics and no rendering errors.

`hyperframes check` version0.8.140 was run on all five compositions. All five returned **ok:true**, with zero lint errors, runtime errors, layout errors and contrast errors. Each retains one non-blocking `nested_structure_needs_subcomposition` Studio-authoring warning about the grouped slide content. This warning concerns timeline editing granularity; it does not indicate overflow or a failed deck.

**Framework check scope:** this CLI resolves the first top-level composition and reports a10-second scan. It does not certify all80 slides merely because its gate passes. The separate Playwright sweep above covers the complete manifest and graph interactions. Motion sidecar tests are not claimed; the deck uses deterministic discrete seek/reveal states rather than a linear video export.

The shared Present control was also tested: it opened an audience tab, and advancing a reveal synchronized that tab to 2 seconds. A compact record of the completed checks is saved in [verification-results.json](verification-results.json).

The source-linked localhost preview serves the repository, and each offline file embeds its runtime assets. No MP4 or remote website was generated. The local server is the preferred self-study preview; CLI presenter mode is also available, but does not serve arbitrary external repository note/source paths.

## Remaining limitations

Unreleased original lecture/tutorial materials can refine emphasis later; their absence is disclosed rather than replaced with claimed official coverage. Supplied-source contradictions are documented with reasoned resolutions, not attributed to an official corrected answer key. The narrow mathematical models and constructed graphs retain their stated assumptions. The pack is complete for the assigned block available in this repository; it is not a replacement for all earlier exam material.
