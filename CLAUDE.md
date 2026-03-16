# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GitHub Pages portfolio site for Shawn Zhang (yuxiaozhang.com via CNAME) showcasing game development projects. Static HTML/CSS/JS — no build step, no framework.

## Development

No build commands. Serve locally for testing:

```bash
python -m http.server 8000
# or
npx serve
```

## Deployment

Push to `main` branch — GitHub Pages deploys automatically from repository root.

## Architecture

### Pages

- `index.html` — Portfolio homepage: hero/about, shipped games (featured cards), personal projects, game jam & learning projects
- Individual project pages at root: `Animal_Ambiguity.html`, `Scrappy_Squirrel.html`, `Remote.html`, `Side_Scroller.html`, `Model.html`

### Stylesheets

- `style.css` — All site styles, CSS custom properties (`:root` variables), responsive nav, featured cards (shipped games use side-by-side media+info layout), project grid, badges, buttons. Responsive at 768px breakpoint.
- `code-displayer.css` — Syntax highlighting for code snippets in project detail pages

### JavaScript (`js/`)

- `nav.js` — Shared across all pages: mobile hamburger toggle, smooth scroll for anchor links, sticky nav scroll shadow

### Index Page Layout

- **Shipped Games** — `.featured-grid` with `.featured-card` (2-column: media left, info right). Media area supports `<img>`, `<video>`, `<iframe>`, or placeholder divs. Stacks vertically on mobile.
- **Personal Projects** — Standard `.projects-container` grid with `.project` cards
- **Game Jam & Learning** — Same card grid, all visible (no hidden archive)

### Unity WebGL Games

Subdirectories with exported Unity WebGL builds. These are build artifacts — do not modify:
- `Scrappy_Squirrel_Web/`, `Animal_ Ambiguity_Web/` (note space before "Ambiguity"), `Remote_Code_Execution_Web/`, `Level-Design_3D_Web/`, `Side Scroller Web/`, `WebGL_HB/`

Each contains `index_[Name].html`, `Build/` (compiled .wasm/.data/.js), and `TemplateData/`.

### Adding Media to Project Cards

Featured cards (shipped games): place `<img>`, `<video>`, or `<iframe>` inside `.featured-media`.
Standard cards: place `<img>` or `<video>` as first child of `.project`.
Images/GIFs go in `Images/` folder. For videos, prefer YouTube embeds or `<video>` with mp4.
