# Verification

The delivered browser wrappers were tested end to end in headless Chrome at1600×900:

- All78 slide positions reached through the native slideshow controller.
- All8 labs loaded and responded to parameter changes.
- Physical mouse dragging changed the taste-cost parameter; Reset restored it.
- Arrow-key navigation worked after interacting inside the composition iframe.
- Native Present opened presenter notes and an audience window.
- Layout measurements cover every slide and reserve a footer band.
- No JavaScript page errors occurred in the full-deck sweep.

HyperFrames check was also run on composition copies. Lint and runtime findings were zero; its sampled contrast pass was35/35 per deck. Its video-oriented layout sweep reported `sweep_static`: samples stayed within the first static slide's10-second range, so that sweep is not a complete deck validation. The separate real-wrapper navigation and layout checks above cover the full lectures. The CLI check is not represented as a clean all-green result.

The standalone harness requires a master seek timeline while the first visible scene remains a slide. Its first scene identifier is `root`, with the master timeline exposed to the player. The other scene timelines and the explicit bootstrap scene list preserve the slideshow's individual slide ranges.

Graph state is local to each presenter/audience window. Share the interactive window for demonstrations. Slide position synchronization and presenter notes use HyperFrames's built-in controls.
