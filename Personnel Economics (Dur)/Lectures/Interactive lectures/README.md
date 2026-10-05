# Interactive Personnel Economics lectures

> **Tournaments:** a rewritten, in-depth version of the competition lecture (step-by-step derivations, live diagrams, F25 Q3 solved point by point, practice problems) is in [`../Tournaments - in-depth lecture/`](<../Tournaments - in-depth lecture/index.html>). It opens directly in a browser, with no server needed.

Course topics: **PER-BIAS** (Topic7, Kuhn16) and **PER-TOURN** (Topic8, Kuhn20–23).

These are browser slides, rather than PDFs or videos. GitHub displays their source; to use the interactive graphs, clone/download the repository and run them locally with Node.js. No dependency installation is needed.

```powershell
cd "Personnel Economics (Dur)/Lectures/Interactive lectures"
npm start
```

Then open http://127.0.0.1:3031. If another copy is already running on that port, open its existing URL or stop that copy first.

- Discrimination: 29 slides, Kuhn chapter16.
- Competition: 49 slides, Kuhn chapters20–23.
- Eight labs with draggable graph points, labeled sliders, and reset controls.
- Silent, landscape, self-paced. Arrow keys or the built-in controls navigate.
- Press P or click Present for presenter notes and a separate audience window.
- Share the window containing the live graphs when demonstrating them. Graph parameter changes are local to each window; slide position uses the built-in presenter synchronization.

The root index is the lecture chooser. Each lecture has an index wrapper, a HyperFrames composition, a slideshow JSON island, and complete Markdown teaching notes. All fonts and player scripts are local. Serve through HTTP; opening files directly is not supported by the iframe player.

Edit `content.cjs` to change the lecture content; run `node build.cjs` to rebuild. `labs.js` contains the clearly labeled illustrative models. `deck.css` controls the design. Player scripts come from HyperFrames0.8.133. No narration or external media is needed.

Source provenance and formula assumptions are in `source-guide.md`. The previous three-minute video is separate from these full lectures.
