# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR (localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages (gh-pages -d dist)
```

ESLint is configured but has no dedicated script — run via `npx eslint .` if needed.

## Architecture

Single-page marketing site for Bluemine (IT services company, Korean market). No routing — `App.jsx` renders all sections in order as a vertical stack:

```
Navbar → Hero → Stats → Services → ITMaintenance → WhyBluemine → Clients → Contact
```

Each section is a self-contained component in [src/components/](src/components/). There is no global state, no data fetching, and no external API dependencies — all content is hardcoded in the components.

**Styling:** Tailwind CSS v3 via PostCSS + autoprefixer. Global styles and base font (`Noto Sans KR`) are in [src/index.css](src/index.css). Component-specific CSS lives in [src/App.css](src/App.css).

**Stack:** React 19, Vite 8, Tailwind CSS 3, JavaScript (JSX) — no TypeScript, no test framework.

**Deploy:** `npm run deploy` pushes the `dist/` build to GitHub Pages via `gh-pages`.

## Known Issues

`package.json` has a missing comma between the `"preview"` and `"deploy"` script entries — parsers may fail depending on tooling version.
