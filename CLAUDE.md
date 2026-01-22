# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages portfolio website (Shaw1213.github.io) showcasing game development projects. It's a static HTML/CSS site with no build system.

## Architecture

- **Static HTML site** - No framework, no build step
- **Main entry**: `index.html` - Portfolio homepage with project grid
- **Project pages**: Individual HTML files (`Animal_Ambiguity.html`, `Scrappy_Squirrel.html`, etc.) for detailed project writeups
- **Unity WebGL builds**: Multiple subdirectories contain exported Unity WebGL games (e.g., `Scrappy_Squirrel_Web/`, `Animal_ Ambiguity_Web/`)

## Key Files

- `style.css` - Main stylesheet with responsive grid layout (3-column → 2-column → 1-column)
- `code-displayer.css` - Syntax highlighting for code snippets in project pages
- `Images/` - Project screenshots and assets

## Development

No build commands needed. Open HTML files directly in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Deployment

Push to `main` branch - GitHub Pages automatically deploys from the repository root.

## Unity WebGL Structure

Each Unity game has:
- `index_[GameName].html` - Entry point
- `Build/` - Compiled WebGL files (.loader.js, .framework.js, .data, .wasm)
- `TemplateData/` - Unity loading screen assets and `style.css`
