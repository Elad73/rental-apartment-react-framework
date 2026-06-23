# K-PIT-002: react-scripts 3.x won't start on modern Node (OpenSSL)

**Category:** Pitfall
**Created:** 2026-06-23
**Tags:** create-react-app, react-scripts, webpack4, openssl, node-17plus

## Context
After getting deps installed, `npm start` (react-scripts 3.3.0 → webpack 4) needed a flag to boot on Node 24.

## Insight
Webpack 4's hashing uses an OpenSSL API removed in Node 17+. CRA ≤ 4 crashes with `ERR_OSSL_EVP_UNSUPPORTED` unless you set `NODE_OPTIONS=--openssl-legacy-provider`.

## Why it matters
Lets you run/verify a legacy CRA app on a current machine without downgrading Node — useful for auditing a project before modernizing it.

## Example
```bash
# also: port 3000 was occupied, and CRA opens a browser by default
HOST=0.0.0.0 BROWSER=none PORT=3055 \
  NODE_OPTIONS=--openssl-legacy-provider npm start
```

## Application
Trigger: `Error: error:0308010C:digital envelope routines::unsupported` from a CRA/webpack-4 project on Node 17+. Add the legacy-provider flag to start/build. Treat it as a stopgap — the real fix is migrating off CRA (Vite/Next).
