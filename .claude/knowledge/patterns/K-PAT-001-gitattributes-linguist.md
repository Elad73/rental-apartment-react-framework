# K-PAT-001: Fix GitHub language stats with .gitattributes linguist flags

**Category:** Pattern
**Created:** 2026-06-23
**Tags:** github, linguist, gitattributes, repo-hygiene, presentation

## Context
This repo commits a compiled `public/css/style.css` (build artifact of the SCSS). GitHub's linguist counts it, so the repo's language bar misrepresents it as a CSS project rather than JS/SCSS.

## Insight
Mark generated and vendored files in `.gitattributes` so GitHub excludes them from the language breakdown — without deleting the files.

## Why it matters
The language bar is the first thing visitors see on a repo. Accurate stats make a project read as what it actually is.

## Example
```gitattributes
* text=auto eol=lf
public/css/style.css   linguist-generated=true
public/css/icon-font.css linguist-vendored=true
package-lock.json      linguist-generated=true
```

## Application
Any repo that commits build output, minified bundles, or large vendored files and whose GitHub language stats look wrong. Takes effect after the change lands on the **default branch**.
