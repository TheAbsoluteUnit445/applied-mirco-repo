# Tournaments, in depth (Kuhn ch. 20–23 + Oct 2025 Q3)

A 54-slide HyperFrames slideshow: step-by-step derivations, live diagrams, a 3D win-probability surface, and the Oct 2025 exam question solved point by point.

**Topic 8 tutorial:** [original exercises and answers](<../../Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf>) · [readiness checklist and fully worked companion guide](<../../Exercises and answers/Topic 8 - tutorial readiness and worked guide.md>). The companion covers the extra payoff-matrix, outsider-promotion, relative-income, and tax-kink techniques needed for Exercises8.1–8.4, and flags omissions in the supplied answers.

## Open it
- **Easiest, on any PC or laptop:** double-click **`Tournaments lecture - OPEN THIS.html`**. It is one self-contained file (fonts, maths, 3D and scripts all inside), opens in Chrome, Edge or any browser, and needs no server, no Node and no internet. Navigate with → / Space, ← and F for fullscreen, or with the capsule in the bottom-right.
- **With presenter mode (notes + audience window):** on Windows double-click `Start lecture.cmd` (needs Node.js). It starts a local server and opens the deck in your browser.
- **Any OS:** `node serve.mjs`, then open http://127.0.0.1:3040
- Or with the HyperFrames CLI: `npx hyperframes present composition`

The presenter version needs `http://`, so `index.html` itself does not open from the file system. Use the OPEN THIS file for that.

**Controls:** → / Space reveals the next step · ← goes back · **P** opens presenter mode (notes + audience window) · fullscreen button in the bottom-right capsule. Drag the sliders, and drag the 3D surface to rotate it.

**No server?** `reading-version.html` is the same content as one scrolling page that opens directly in any browser, including on a phone. `lecture-notes.md` is its text version.

## Edit it
Slide content lives in `build/slides.mjs`, the layout system in `build/deck.css`, and the interactive diagrams in `build/widgets.js`. Rebuild with:

```
cd build
npm install
npm run build
```

The build pre-renders all maths with KaTeX, writes `composition/index.html` (the HyperFrames composition) and `index.html` (the slideshow wrapper), and keeps the slide manifest in both in sync. Validate with `npx hyperframes check composition`.
