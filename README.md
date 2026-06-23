# Casa de la Ron 🌅

> A single-page React site for a boutique short-stay apartment in the heart of Tel Aviv — sea views, walking distance to the best beaches, Carmel Market, and Rothschild Boulevard.

Marketing & guest-info site built with React and a hand-authored SCSS design system (7-1 architecture). It showcases the apartment with a hero, photo composition, amenities, neighborhood highlights, guest reviews, and a house manual.

<!-- TODO: add a hero screenshot/GIF, e.g. ![Casa de la Ron](docs/screenshot-home.png) -->

## ✨ Features

- **Responsive, mobile-first** landing page (Hero · About · Amenities · Neighborhood · Reviews · Footer)
- **Client-side routing** (`/`, `/photos`, `/manual`) via React Router
- **Hand-built SCSS design system** — variables, mixins, and reusable components (buttons, cards, modal, reviews), no UI framework
- **Animated, content-rich UI** — rotating cards, background video, custom icon font
- **Guest house manual** with practical info for visitors

## 🛠 Tech stack

| Area | Tech |
|------|------|
| UI | React 16, React Router v5 |
| Build | Create React App (`react-scripts`) |
| Styling | SCSS (7-1 pattern) compiled with Sass |
| Icons | Linea Basic icon font |

> ⚠️ **Modernization in progress** — see [`docs/PRD.md`](docs/PRD.md) for the roadmap to migrate this off the legacy CRA toolchain (Vite + React 18), fix outstanding bugs, and harden accessibility, SEO, and performance.

## 🚀 Getting started

### Prerequisites
- **Node.js** (see caveat below) and npm

### Install & run

```bash
npm install      # install dependencies
npm start        # start the dev server at http://localhost:3000
```

Styling is authored in SCSS under `public/sass/` and compiled to `public/css/style.css`, which `public/index.html` links directly. To rebuild CSS on change, run the watcher in a second terminal:

```bash
npm run compile:sass
```

### Build for production

```bash
npm run build    # outputs an optimized bundle to ./build
```

> **⚠️ Toolchain caveats (current state):**
> - `react-scripts@3.3.0` needs the OpenSSL legacy provider on modern Node:
>   `NODE_OPTIONS=--openssl-legacy-provider npm start`
> - `node-sass@4` fails to compile on Node ≥ 18. Until it's swapped for Dart `sass`,
>   install with `npm install --ignore-scripts` (the dev server still runs, since the
>   compiled CSS is committed) and edit SCSS on a Node 14/16 environment.
>
> Removing both caveats is tracked in [`docs/PRD.md`](docs/PRD.md).

## 📂 Project structure

```
src/
  index.js                 # React entry point
  components/
    App.js                 # routes + layout (Navbar, Footer, Modal always mounted)
    Hero.js  About.js  Features.js  Tours.js  Footer.js  Navbar.js  Modal.js
    pages/                 # PageHome, PagePhotos, PageManual
    reviews/               # Reviews, RatingStripe
public/
  sass/                    # 7-1 SCSS source (abstracts, base, components, layout, pages)
  css/                     # compiled style.css + icon font (build artifact)
  img/  videos/            # apartment, hero, neighborhood, review media
docs/
  PRD.md                   # product requirements & modernization roadmap
```

See [`CLAUDE.md`](CLAUDE.md) for architecture notes (the SCSS-decoupled-from-React build, routing, and component conventions).

## 🗺 Roadmap

This project is being upgraded from a course-template-based demo into a polished, production-grade showcase. Highlights from the [PRD](docs/PRD.md):

- [ ] Migrate to Vite + React 18 and Dart Sass (remove legacy-toolchain workarounds)
- [ ] Fix bugs: broken modal images, dead links, SPA navigation, `htmlFor`
- [ ] Replace template residue ("$297 tours") with authentic neighborhood content
- [ ] Real photo gallery, contact/enquiry form, and location map
- [ ] Accessibility, SEO (Open Graph + JSON-LD), and performance passes
- [ ] Tests + GitHub Actions CI + one-click deploy with a live demo

## 📄 License

[MIT](LICENSE)
