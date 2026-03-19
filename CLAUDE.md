# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GitHub Pages portfolio site for Shawn Zhang (yuxiaozhang.com via CNAME) showcasing game development projects. Static HTML/CSS/JS — no build step, no framework. Target audience: game industry HRs in both US and China.

## Development

No build commands. Serve locally for testing:

```bash
python -m http.server 8000
# or
npx serve
```

## Deployment

Push to `main` branch — GitHub Pages deploys automatically from repository root.

**CRITICAL: `.gitignore` excludes `content/` — files in `content/` are NOT deployed.** All media assets referenced in HTML must live in `Images/`, never `content/`. The `content/` folder is local-only workspace.

## Architecture

### Pages

- `index.html` — Portfolio homepage with fixed top nav, centered title, two sections: "Shipped Games" and "Personal Projects" displayed as a 3-column card grid
- `play.html` — Unity WebGL game wrapper. Loads games in iframe via `?game=slug` query param. Has its own game registry object mapping slugs to build paths
- `projects/*.html` — Project detail pages (greatsword, beamdown, bricks-over-blocks, hampter-ball, dungeons-and-drinks, remote-code-execution, level-design, about)
- Legacy detail pages at root: `Animal_Ambiguity.html`, `Scrappy_Squirrel.html`, `Model.html` (old styling and nav.js)

### Stylesheets

- `style.css` — All site styles. CSS custom properties in `:root` (primary `#dc2626` red, cyan accent `#22d3ee`, dark bg `#0c0c11`). Key sections: fixed top-nav with CSS hover dropdowns, page-title (centered), card-grid (`repeat(3, 1fr)`), cards (16:9 media aspect ratio, compact body), tags, buttons, detail page components (detail-row, detail-media-grid, attack-grid, stat-grid, detail-callout). Responsive breakpoints at 960px (2-col) and 600px (1-col, mobile hamburger nav)
- `code-displayer.css` — Syntax highlighting for code snippets in project detail pages

### JavaScript (`js/`)

- `i18n.js` — EN/中文 language switching. **Translations are embedded directly in this file**, NOT read from `lang/zh.json`. Uses `data-i18n` attributes on HTML elements. Priority: URL param `?lang=` → localStorage → defaults to 'en'. Stores original English text in `data-i18n-en` attributes for reversion. Uses `innerHTML` for replacement (so `<strong>` tags in translations work).
- `nav.js` — Used by play.html and legacy detail pages only (NOT index.html, NOT projects/*.html). Mobile hamburger toggle, smooth scroll, sticky nav shadow
- `combat-vfx.js` — Canvas dot grid background effect, used on all projects/*.html pages

### i18n System

- **Translations go in `js/i18n.js`** (embedded object), NOT in `lang/zh.json`. The zh.json file is kept in sync as reference but is not read at runtime.
- Translation keys follow pattern: `section.shipped`, `bob.desc`, `gs.title`, `bd.detail.goal`, `gs.detail.light.p`, etc.
- Detail page keys use prefix: `bd.detail.*` (beamdown), `gs.detail.*` (greatsword), `bob.detail.*` (bricks over blocks)
- To add translatable text: add `data-i18n="key.name"` attribute to HTML element, add corresponding key to the `translations` object in `i18n.js`, and keep `zh.json` in sync
- h1 titles and tags do NOT get `data-i18n` — only descriptive content (paragraphs, section headings, stat labels) does. Follow beamdown.html as reference.
- Language toggle button (`#lang-toggle`) sits directly in `.top-nav` (outside `.nav-cats`) so it's always visible on all screen sizes

### Index Page Layout

- **Fixed top nav** — Name + title on left, Projects dropdown with hover-to-reveal project links, Home/About links, language toggle, hamburger (mobile only)
- **Centered title** — "Shawn Zhang" + "Combat & Technical Designer"
- **Shipped Games** — 3 cards: Bricks Over Blocks (Steam link), Beamdown (Steam link), Hampter Ball (play + itch.io links)
- **Personal Projects** — Cards with various link combinations (play, details, external)
- Cards are either `<a class="card">` (entire card is a link) or `<div class="card card--multi-link">` (has internal button links in `.card-links`)

### Unity WebGL Games

Subdirectories with exported Unity WebGL builds — do not modify:
- `Scrappy_Squirrel_Web/`, `Animal_ Ambiguity_Web/` (note space), `Remote_Code_Execution_Web/`, `Level-Design_3D_Web/`, `Side Scroller Web/`, `WebGL_HB/`

Each contains `index_[Name].html`, `Build/` (.wasm/.data/.js), and `TemplateData/`.

### Media

**All media must go in `Images/` folder** — `content/` is gitignored and not deployed.

Videos use clean, lowercase, no-spaces naming with project prefix:
- Beamdown: `bd-overview.mp4`, `bd-phase1.mp4`, `bd-crush.mp4`, etc.
- Greatsword: `gs-showcase.mp4`, `gs-light.mp4`, `gs-heavy.mp4`, `gs-jump.mp4`, `gs-shield.mp4`, `gs-charge.mp4`, `gs-roll.mp4`, `gs-cancel.mp4`, `gs-2h-light.mp4`, `gs-2h-heavy.mp4`, `gs-hitstop.mp4`, `gs-ai-bt.mp4`, `gs-stagger.mp4`, `gs-die.mp4`
- BOB: `bob-gameplay2.mp4`, `bob-paddle.mp4`

For new videos: copy from `content/` to `Images/` with a clean `{prefix}-{name}.mp4` name, then reference from `Images/`. Never reference `content/` in HTML.
