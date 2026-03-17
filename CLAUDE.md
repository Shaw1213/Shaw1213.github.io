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

## Architecture

### Pages

- `index.html` — Portfolio homepage with fixed top nav, centered title, two sections: "Shipped Games" and "Personal Projects" displayed as a 3-column card grid
- `play.html` — Unity WebGL game wrapper. Loads games in iframe via `?game=slug` query param. Has its own game registry object mapping slugs to build paths
- Detail pages at root: `Animal_Ambiguity.html`, `Scrappy_Squirrel.html`, `Model.html` (these still use old styling and nav.js)

### Stylesheets

- `style.css` — All site styles. CSS custom properties in `:root` (indigo primary `#6366f1`, cyan accent `#22d3ee`, dark bg `#0f0f13`). Key sections: fixed top-nav with CSS hover dropdowns, page-title (centered), card-grid (`repeat(3, 1fr)`), cards (16:9 media aspect ratio, compact body), tags, buttons. Responsive breakpoints at 960px (2-col) and 600px (1-col, mobile hamburger nav)
- `code-displayer.css` — Syntax highlighting for code snippets in project detail pages

### JavaScript (`js/`)

- `i18n.js` — EN/中文 language switching. Uses `data-i18n` attributes on HTML elements + `lang/zh.json` translations. Priority: URL param `?lang=` → localStorage → defaults to 'en'. Stores original English text in `data-i18n-en` attributes for reversion. Loaded only on index.html
- `nav.js` — Used by play.html and detail pages only (NOT index.html). Mobile hamburger toggle, smooth scroll, sticky nav shadow

### i18n System

- Translation keys follow pattern: `section.shipped`, `bob.desc`, `gs.title`, etc.
- `lang/zh.json` contains all Chinese translations (~50 keys)
- To add translatable text: add `data-i18n="key.name"` attribute to HTML element, add corresponding key to `zh.json`
- Language toggle button (`#lang-toggle`) sits directly in `.top-nav` (outside `.nav-cats`) so it's always visible on all screen sizes

### Index Page Layout

- **Fixed top nav** — Name + title on left, two dropdown categories (Shipped Games, Personal Projects) with hover-to-reveal project links, LinkedIn/Email links, language toggle, hamburger (mobile only)
- **Centered title** — "Shawn Zhang" + "Combat & Technical Designer"
- **Shipped Games** — 3 cards: Bricks Over Blocks (Steam link), Beamdown (Steam link), Hampter Ball (play + itch.io links)
- **Personal Projects** — 9 cards with various link combinations (play, details, external)
- Cards are either `<a class="card">` (entire card is a link) or `<div class="card card--multi-link">` (has internal button links in `.card-links`)

### Unity WebGL Games

Subdirectories with exported Unity WebGL builds — do not modify:
- `Scrappy_Squirrel_Web/`, `Animal_ Ambiguity_Web/` (note space), `Remote_Code_Execution_Web/`, `Level-Design_3D_Web/`, `Side Scroller Web/`, `WebGL_HB/`

Each contains `index_[Name].html`, `Build/` (.wasm/.data/.js), and `TemplateData/`.

### Media

Images go in `Images/` folder. For videos, prefer `<video>` with mp4 or YouTube embeds. Several cards currently show placeholder divs (`media-placeholder`) awaiting screenshots/footage.
