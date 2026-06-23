# PRD — Casa de la Ron: from demo to production-grade

**Status:** Draft · **Date:** 2026-06-23
**Goal:** Turn this rental-apartment site into a polished, modern, bug-free React application — a coherent, correct, and well-engineered product, free of template residue and placeholder content, that installs and runs cleanly on a current toolchain.

---

## 1. Context & current state

The site is a single-page marketing/info site for a Tel Aviv rental apartment ("Casa de la Ron"). It is derived from the **Natours** course template (the "Most popular tours" cards with `$297` prices, the rotating-card component, and the `nat-1`/`nat-2` image names are all leftovers). It builds and renders, but it reads as an unfinished demo rather than a shipped product.

**Verified by running the app** (`npm start`, port 3055, Node 24 + `--openssl-legacy-provider`):
- ✅ Home page compiles and renders (Hero, About, Features, Tours, Reviews, Footer, Modal).
- ⚠️ Compiles **with warnings**; one **runtime React error** in console (`htmlFor`).
- ⚠️ `node-sass@4` **cannot build on Node 24** — `npm install` fails on the native gyp step. The app only runs today because `public/css/style.css` is pre-committed.

### What makes it read as unfinished
- "Most popular tours" priced at **$297** make no sense for an apartment listing — obvious template residue.
- **Lorem ipsum** and typos ("temrs", "appartement", "neighberhood", "amenties", "appliences", "sound bad") in user-facing copy.
- **Dead links everywhere** (`href="#"`, `href=""`), a placeholder `/photos` page that literally renders the word "photos".
- Footer credit "Built by MoonDragon inc." with a dead link.

---

## 2. Goals & non-goals

### Goals
1. **Zero defects on screen** — no broken images, no dead links, no placeholder/lorem text, no console errors/warnings.
2. **Modern, supported toolchain** — installs and runs cleanly on a current Node LTS with no legacy flags.
3. **Authentic, coherent product** — content matches "boutique Tel Aviv apartment rental," not a tour-booking template.
4. **Best-in-class fundamentals** — accessibility, responsive/mobile-first, SEO, performance, and a real CI pipeline.
5. **Clean, runnable repo** — anyone can clone, install in one command, and run it; clear README with screenshots and a live demo.

### Non-goals (for v1)
- Real payments / a booking backend. A working **contact/enquiry form** (e.g. Formspree/EmailJS) is enough; full reservations are out of scope.
- A CMS. Content can live in typed local data modules.
- Multi-language. English-only for v1 (architecture should not preclude i18n later).

---

## 3. Workstreams & requirements

Each item is tagged **P0** (blocker / correctness), **P1** (quality bar for "production-grade"), or **P2** (polish / stretch).

### A. Correctness & bug fixes (P0)
| # | Issue | Fix |
|---|-------|-----|
| A1 | React runtime error: `for` used instead of `htmlFor` on `<label>` (`Navbar.js:8`) | Use `htmlFor`. |
| A2 | Modal images point to `nat-1-large.jpg` / `nat-2-large.jpg` which **don't exist** (actual files are `nat-1-large-1000w.jpg`, etc.) → broken images | Reference real assets. |
| A3 | All asset `src` use brittle `../../../img/...` relative paths | Use root-absolute `/img/...` (CRA serves `public` at root) or import via bundler. |
| A4 | Navbar items 03/04/05 have empty `href=""` → reloads the same page; Footer & several CTAs use `href="#"` → dead | Wire to real routes/sections or remove. |
| A5 | `/photos` route renders the literal text "photos" | Implement a real gallery (see C2) or remove the route until ready. |
| A6 | Full-page reloads on internal nav (raw `<a href>` in Navbar/Footer) | Use react-router `<Link>` / `<NavLink>`. |
| A7 | Modal contains lorem ipsum + typo "temrs" | Replace with real terms or remove the modal. |
| A8 | Reviews: "Dries" testimonial missing closing quote | Fix copy. |

### B. Content & authenticity (P0/P1)
- **B1 (P0):** Remove or repurpose the "Most popular tours / $297" section. For an apartment, convert to a **"Explore the neighborhood"** section (Carmel Market, Rothschild, Neve Tzedek) **without fake prices/"Book now"**.
- **B2 (P0):** Copy-edit every string for spelling/grammar (typos listed above).
- **B3 (P1):** Replace the placeholder "Built by MoonDragon inc." footer with a real, accurate credit/contact.
- **B4 (P1):** Move all copy/reviews/features/neighborhood items into typed data modules (`src/data/*`) so components are presentational and content is editable in one place.
- **B5 (P1):** Keep all real, sensitive operational details (door codes, Wi-Fi credentials, etc.) **out of the public build and out of version control**. The House Manual currently ships only masked placeholders (`-------`); for real values, gate the manual behind a per-guest link/token or drop it from the public site.

### C. Features that make it feel real (P1)
- **C1:** Working **contact / booking-enquiry form** (name, dates, message) via a no-backend service (Formspree/EmailJS) with validation, success & error states.
- **C2:** Real **photo gallery** for `/photos` — responsive grid + lightbox, using the existing `public/img/appartement` assets (and `srcset` for the `-600w`/`-1000w` variants).
- **C3:** **Map** of the location (embedded map or static map image) + "How to reach us" content (replaces dead nav item 04).
- **C4:** Make the **mobile nav and modal** behavior robust (they currently rely on CSS `:checked`/`:target` hacks) — acceptable to keep, but ensure they're keyboard-accessible and close on route change.

### D. Accessibility (P1)
- D1: Resolve all `jsx-a11y` warnings (anchor-is-valid, redundant `alt`, `htmlFor`).
- D2: Keyboard-navigable nav + modal (focus trap, `Esc` to close, visible focus rings).
- D3: Meaningful `alt` text; one `<h1>` per page; correct landmark/heading order.
- D4: Color-contrast pass on the bronze/gold palette; respect `prefers-reduced-motion` for the animated button and autoplaying background video.
- **Target:** Lighthouse Accessibility ≥ 95.

### E. SEO & sharing (P1)
- E1: Open Graph + Twitter Card meta (title, description, image) so links preview well.
- E2: JSON-LD structured data (`LodgingBusiness` / `Apartment`) for rich results.
- E3: Real `robots.txt` + generated `sitemap.xml`; canonical URL.
- E4: Per-route `<title>`/meta (react-helmet or framework head management).
- E5: Fix `manifest.json` icon paths and the commented-out favicon links in `index.html`.

### F. Performance (P1/P2)
- F1: Serve responsive images (`srcset`/`sizes`); the `-600w`/`-1000w` variants already exist but aren't used.
- F2: Compress/convert hero & gallery images (WebP/AVIF); the `hero.jpg`/video are heavy.
- F3: Make the background video opt-in / poster-first and respect data-saver + reduced-motion.
- F4: Route-level code splitting (`React.lazy`).
- **Target:** Lighthouse Performance ≥ 90 on mobile.

### G. Toolchain & engineering hygiene (P0/P1)
- **G1 (P0):** Replace `node-sass@4` with **Dart `sass`** (pure JS, no native build, fixes the Node-24 install failure). Decide: keep the separate `compile:sass` step, or import SCSS through the bundler so styles rebuild as part of `start`/`build` (preferred — removes the two-process workflow and the committed `style.css` artifact).
- **G2 (P1):** Migrate off the abandoned **CRA / react-scripts 3.3.0** (React 16, known CVEs, needs `--openssl-legacy-provider`). Target **Vite + React 18** (or Next.js if SSR/SEO is wanted). This single change removes most legacy-tooling friction and modernizes the whole repo.
- **G3 (P1):** Convert class components to **function components + hooks**; co-locate component styles.
- **G4 (P1):** Add **ESLint + Prettier** config (committed), and TypeScript (or at least JSDoc types) for the data modules.
- **G5 (P1):** Add **tests** — `@testing-library/react` is already a dependency but unused. Smoke-test each route + the contact form.
- **G6 (P1):** **CI** (GitHub Actions): install → lint → test → build on every PR; status badge in README.
- **G7 (P2):** One-click **deploy** (Vercel/Netlify/GitHub Pages) with a live URL; replace the Heroku `heroku-postbuild` assumption.

### H. Repo presentation (P0/P1)
- H1: Rewrite README — hero screenshot, live demo link, feature list, tech stack, run instructions, CI badge.
- H2: Add screenshots/GIF to `docs/` and reference from README.
- H3: Clean up stray artifacts and ensure `.gitignore`/`.gitattributes` keep generated files (e.g. `public/css/style.css`) and tooling output out of the repo and out of language stats.

---

## 4. Suggested phasing

1. **Phase 0 — Make it correct & installable (P0):** G1 (sass), A1–A8 (bugs), B1–B2 (kill template residue + typos). Outcome: clean install, no console errors, nothing unfinished on screen.
2. **Phase 1 — Modernize the stack (P1):** G2 (Vite + React 18), G3 (hooks), G4 (lint/TS), B4 (data modules).
3. **Phase 2 — Make it real (P1):** C1 (contact form), C2 (gallery), C3 (map), D (a11y), E (SEO).
4. **Phase 3 — Polish & ship (P1/P2):** F (perf), G5–G7 (tests/CI/deploy), H (README + screenshots).

## 5. Success criteria / definition of done
- `npm install && npm run build` succeed on current Node LTS with **no native-build errors and no legacy flags**.
- **Zero** console errors and **zero** ESLint warnings.
- No broken images, dead links, lorem ipsum, or template residue anywhere in the UI.
- Lighthouse (mobile): **Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95**.
- Green CI on `main`; live demo URL linked from README.
- A first-time visitor can clone the repo, understand what it is, run it in one command, and see it working.

## 6. Open questions
1. **Stack target:** Vite + React 18 (SPA, simplest) vs Next.js (SSR, best SEO)? Recommendation: **Vite + React 18** unless SEO/SSR is a priority.
2. **Real content:** Can you provide final copy, real review text/permission, the true address/contact, and high-res photos — or should v1 ship with clearly-labelled sample content?
3. **House Manual:** keep it (gated behind a per-guest link, real values never committed) or remove it from the public site entirely?
4. **Booking:** enquiry form only for v1, or link out to the real Airbnb/booking listing?
