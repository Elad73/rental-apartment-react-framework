# K-PIT-001: node-sass@4 native build fails on modern Node

**Category:** Pitfall
**Created:** 2026-06-23
**Tags:** node-sass, sass, node-gyp, install, node-24, native-build, cra

## Context
Fresh `npm install` on this repo (Node 24) aborted. The toolchain pins `node-sass@4.13.1`, whose native gyp step cannot compile against modern Node/V8.

## Insight
`node-sass` (libsass) is deprecated and its native bindings only build on the Node version current at its release. On Node 18+ (and hard-fails on 24) `npm install` dies at `node-gyp rebuild` with `Undefined variable standalone_static_library in binding.gyp`.

## Why it matters
The whole install fails — not just SCSS compilation — so nothing else installs either. Blocks running an otherwise-fine app.

## Symptom
```
gyp ERR! configure error
gyp: Undefined variable standalone_static_library in binding.gyp
npm error Build failed with error code: 1
```

## Recovery
- To just **run** the app when compiled CSS is already committed:
  `npm install --ignore-scripts` (skips the gyp build; `react-scripts` etc. still land).
- Permanent fix: replace `node-sass` with Dart **`sass`** (pure JS, no native build) and update the `compile:sass` script, or import SCSS through the bundler.

## Application
Any repo pinning `node-sass`/`gulp-sass@<5` that won't install on a current Node. First unblock with `--ignore-scripts` if CSS is precommitted; then migrate to `sass`.
