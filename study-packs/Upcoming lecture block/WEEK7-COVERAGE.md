# Week 7 source alignment and verification

Added 10 October 2026. Topic IDs: PUB-POL-VOTE, PUB-POL-GOVFAIL. Sources are originals; explanations and interactive graphics are authored teaching material. Original PDF hashes match the files supplied from Downloads. No progress file is edited.

| Course source | Walkthrough coverage | Textbook / exam connection |
|---|---|---|
| Lecture 7 pp.2–9, 34–35 | Sections 2–3: positive/normative, aggregation, government failure | R&G ch.6 pp.191–192; F25 Q8 p.15 |
| Lecture pp.10–11 | Section 3: tax price, income versus price effects | R&G individual demand and voting logic pp.192–200 |
| Lecture pp.12–16 | Sections 4–5: unanimity, Lindahl, cycles, agendas, strategy | R&G pp.192–202; tutorial DQ6.10 |
| Lecture pp.17–20 | Sections 1, 4, 7: Arrow, IIA, single peaks, information incentives | R&G pp.202–204; F24 Q8 p.13 |
| Lecture pp.21–26 | Sections 1–2, 13, 15: representation, information, rent-seeking | R&G pp.204–219; F25 Q8 p.15 |
| Lecture pp.27–33 | Sections 9–13: original transport model and full algebra | Efficiency 100; MCPF 1.2 → 69.44; peaks 16,81,900; weighted welfare 225; lobbying ceilings 12.5,18,60.5 |
| Tutorial DQ6.1(b), p.4 answer | Section 5 | Non-single-peakedness does not imply cycling |
| Tutorial DQ6.3 and addition, p.4 | Section 5 | Logrolling, outsider coalition, feasible side payment; original book table p.221 visually inspected |
| Tutorial DQ6.10 / old 6.11, pp.4–5 | Section 5 | Backward reasoning distinguishes sincere and strategic agendas |
| Tutorial 7.1(a–c), pp.1,5 | Section 6 | Plurality, tie-break, unilateral-deviation checks, multiplicity |
| Tutorial 7.2(a–e), pp.1–2,5 | Section 7 | Rank totals 8,13,9; remove L → 8,7; IIA |
| Tutorial 7.3(a–f), pp.2–3,5–6 | Section 8 | Median, vote share vs win probability, credible promises, uncertainty, non-commitment |
| Tutorial 7.4(a–d), pp.3,6–7 | Section 14 | Efficient 18, shared peaks 18,56/3,16, voluntary 16; complete best responses |
| Assigned book beyond lecture emphasis | Section 15 plus full module 2.8–2.10 | Employees, interests, other actors, growth; DQ6.9 already worked in full module |
| F24 Q8, 2 marks | Section 16 | East peak 15, North median 20; derivative and maximum check |
| F25 Q8, 4 marks | Section 16 | Separate two-sentence positive and normative answers |

## Corrections and limits

- Lecture p.31 writes Y_R inside the poor utility bracket; definitions on p.27 imply Y_P. This fixed-income typo does not change I = 225. Poor's weight multiplies the full net utility, including tax cost.
- Tutorial DQ6.3 addition says welfare increases by +3. X alone has total +3 relative to neither bill; moving from both bills (+1) to X alone (+3) improves total by +2. Original preserved.
- Tutorial 7.4 switches Emmanuel/Francois and uses subscript F. These refer to the same third resident; the walkthrough consistently uses E.
- Tutorial 7.2's rank-order method uses more ordinal information, not cardinal intensity or euro welfare. Its compromise winner need not be more efficient.
- Exercise 7.3 requires a tie-break to assign a probability at equal distances. The walkthrough states a fair tie-break. Unknown median preferences do not specify enough to calculate an exact divergent-platform equilibrium.
- Source formulas in lecture pp.27,31 and tutorial pp.2–3 were visually inspected because extraction loses square roots, minus signs and fractions. Other original values follow the supplied answers and checked textbook tables.
- A past-paper occurrence does not imply an exam probability. This is chapter-6 preparation; broader course revision remains necessary.

## Completed validation

- Independent arithmetic checks pass for all original transport results, lobbying comparisons, rank-order totals, cleaning equilibria and both listed strategic-plurality Nash equilibria. Graph formula checks include slider boundaries, crossed platforms and ties.
- All six single-composition graphs pass HyperFrames 0.8.145 checks with zero lint, runtime, layout or contrast findings. They are explicitly marked as static timelines: interaction comes from user-controlled sliders, not automatic playback.
- Browser verification passes for six graph players over HTTP and by direct opening, all slider bounds, native keyboard controls, resets and graph/card layout. Screenshots were visually inspected; long axis labels were shortened to prevent clipping.
- The walkthrough renders 103 maths expressions with zero KaTeX errors, six graph embeds and collapsed worked solutions. Text pages fit tested widths of 390, 900 and 1600 pixels; graph full-screen links are supplied for closer inspection.
- The pack's 230 repository-relative Markdown links resolve. Original PDFs remain byte-identical to the supplied Downloads files. Existing study/progress files and earlier decks are preserved.

The deliverable is a **scrolling written lecture with HyperFrames graph companions**. No new slideshow or MP4 was assumed from the unanswered optional format question. Source and graph build scripts are included for reproducibility; QA screenshots and raw reports stay in ignored build/checks/.
