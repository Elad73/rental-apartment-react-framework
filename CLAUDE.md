# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page marketing/info site for a rental apartment ("Casa de la Ron", 6 HaYarkon st., Tel Aviv). Built with Create React App (react-scripts 3.3.0, React 16.12, react-router-dom v5). Styling is hand-authored SCSS following the 7-1 pattern, compiled separately by node-sass.

## Commands

```bash
npm start            # CRA dev server (JS only — does NOT compile SCSS)
npm run compile:sass # node-sass watch: public/sass/main.scss -> public/css/style.css
npm run build        # production build to /build
```

**Local development requires two processes running together:** `npm run compile:sass` (watch) in one terminal and `npm start` in another. Editing `.scss` files has no effect until node-sass regenerates `public/css/style.css`.

There is no test runner configured beyond CRA defaults; `@testing-library/*` is installed but no test files exist. `npm test` would run CRA's Jest watcher.

## Architecture

**Styling is decoupled from React.** CSS is NOT imported into JS modules. `public/index.html` links the prebuilt `css/style.css` and `css/icon-font.css` directly. The compiled `public/css/style.css` is a build artifact of `public/sass/` — edit the SCSS sources, never `style.css` directly. SCSS uses the 7-1 architecture (`abstracts/`, `base/`, `components/`, `layout/`, `pages/`), all wired through `public/sass/main.scss`. Components reference styles by plain `className` strings that must match the SCSS.

**Routing** lives in `src/components/App.js` using `BrowserRouter` + `Route`:
- `/` → `pages/PageHome` (composes Hero, About, Features, Tours, Reviews)
- `/photos` → `pages/PagePhotos` (placeholder)
- `/manual` → `pages/PageManual` (house manual / rules text)

`Navbar`, `Footer`, and `Modal` render on every route (outside `<Route>`). Note: `Navbar` links use raw `<a href>` (full page reloads), not react-router `<Link>`.

**Component conventions:** Page and most section components are class components; leaf components like `App` are functional. There is no state management, data fetching, or props passing between sections — content is hardcoded JSX. `Modal` visibility and the mobile nav are driven by CSS (`:checked` checkbox hack / `:target`), not React state.

## Notes

- `PageManual.js` uses masked placeholders (`-------`) for operational details. Any real, sensitive values must stay out of the public build and out of version control.
- Image assets live under `public/img/` grouped by section (`appartement/`, `hero/`, `neighborhood/`, `reviews/`). Some `Modal` image `src` paths (e.g. `nat-1-large.jpg`) don't match the actual files on disk (`nat-1-large-1000w.jpg`).
- `heroku-postbuild` script indicates Heroku as the deploy target.
