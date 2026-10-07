# Running the October study pack

Open [index.html](index.html) for the readable study document, or [lectures.html](lectures.html) for the five decks. The corresponding Markdown files are the editable sources. The main modules hold the complete explanations and attempt-first practice with worked solutions; slides are a companion.

## Direct opening from disk

Every deck has an **OPEN OFFLINE.html** file listed in the lecture launcher. Double-click it. These self-contained files embed HyperFrames player/slideshow bundles, GSAP, KaTeX and fonts. Navigation and graphs need no network connection. Links to notes and original books/exams use the surrounding repository, so keep the folder structure together. The regular deck index.html is intended for HTTP serving; use the offline file when opening directly.

## Local preview with working source links

From the repository root in PowerShell:

```powershell
node '.\study-packs\Upcoming lecture block\serve.mjs'
```

Open [the study pack](http://127.0.0.1:3057/study-packs/Upcoming%20lecture%20block/index.html). The server binds to localhost and serves the repository so lecture, note, textbook and exam links work. It remains running until stopped with Ctrl+C. Set the task-specific `STUDY_PACK_PORT` environment variable to use another port.

In a lecture, **Next / Right Arrow / Space** advances a reveal, then a slide; **Left Arrow** goes back. **P** or the shared Present icon opens the audience tab. Notes are provided to the shared presenter component. A focused graph slider uses arrow keys to change its value without changing the slide. The median-voter and tournament-probability graphs also support dragging the plotted points. Every graph has Reset. When presenting online, share the audience tab, keeping presenter notes private.

For HyperFrames CLI presenter mode, from a deck directory:

```powershell
npx hyperframes present ./composition
```

That command hosts the composition; the repository server above is the preferred self-study preview because it also serves external note/source links. This pack is silent, self-paced and landscape. No MP4 is intended.

## Rebuilding

The editorial slide source is [build/slides.py](build/slides.py), the shared template [build/build.py](build/build.py), seek/navigation integration [build/runtime.js](build/runtime.js), and graphs [build/widgets.js](build/widgets.js). The build copies already-vendored HyperFrames/GSAP files from the existing in-depth tournament lecture. It never edits that lecture. KaTeX and Markdown rendering dependencies are pinned in the build lockfile.

From the repository root:

```powershell
npm ci --prefix '.\study-packs\Upcoming lecture block\build'
python '.\study-packs\Upcoming lecture block\build\build.py'
node '.\study-packs\Upcoming lecture block\build\render-notes.cjs'
python '.\study-packs\Upcoming lecture block\build\verify.py'
```

Rebuild HTML after editing Markdown. Deck wrapper and composition manifests are generated together to avoid drift. Browser pages are static; the server needs only Node.js. The rendering build uses `marked` and `katex`; Python's standard library builds decks and performs independent arithmetic/link checks.

## Repeating browser verification

Start the repository server, then run `node '.\study-packs\Upcoming lecture block\build\browser-check.cjs'`. The script uses bundled Playwright and installed Chrome. On another machine, set `STUDY_PLAYWRIGHT` to the installed Playwright package path. It sweeps every slide, graph bounds, keyboard controls, dragging and offline files. Build checks and screenshots go to ignored `build/checks/`.

Run `npx hyperframes check ./composition --json` from each deck directory for the framework gate. Read [VERIFICATION.md](VERIFICATION.md) for the distinction between its first-composition scan and the separate all-slide sweep, plus the genuine framework layout warning.

## Preservation and provenance

All original sources, earlier interactive lectures and progress files are preserved. The pack lives under `study-packs/Upcoming lecture block/`; new companion decks live in existing subject lecture folders under `Upcoming block companion/`. No remote publication is required to use it. Exact source disagreements are recorded, rather than silently repaired in originals. Third-party assets are retained locally with their applicable notices; authored pack prose and diagrams are separate from those libraries.
