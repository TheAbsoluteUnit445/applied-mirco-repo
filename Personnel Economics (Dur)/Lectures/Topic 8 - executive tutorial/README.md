# Topic 8 — executive tutorial

18 silent landscape slides covering every part of exercises 8.1–8.4. Theory precedes worked solutions. Nine graphs offer draggable points, sliders and resets. Numerical graph examples deliberately differ from the tutorial; original answers are preserved.

Open **Topic 8 tutorial - OPEN THIS.html** directly in a browser, or run `node serve.mjs` and visit http://127.0.0.1:3041/. Arrow keys advance slides and reveal solution steps. Presenter notes contain sources and assumptions.

Sources: [original tutorial PDF](../../Exercises%20and%20answers/Topic%208%20of%20Personnel%20Economics%20Exercises%20and%20Answers.pdf), [complete worked guide](../../Exercises%20and%20answers/Topic%208%20-%20tutorial%20readiness%20and%20worked%20guide.md), Kuhn chapters 20–21 and section 10.7. Exam emphasis follows F25 Q3 (10 points) and R26 Q5 (6 points); recurrence is evidence for revision priorities, not a prediction.

Important qualifications: bonus 20 needs the tutorial's indifference convention; the probability and wage formulas assume an interior linear model; the risk graph is illustrative; the tax example uses after-tax income comparisons. The supplied answer sheet omits 8.4(c) and appears to contain a “low-risk” typo in 8.3. These are explained in the deck and guide.

Rebuild: `npm install --prefix build`, then `node build/build.mjs`. Local assets are bundled for offline use. Slideshow source: `build/slides.mjs`; interactive graphs: `build/widgets.js`.
