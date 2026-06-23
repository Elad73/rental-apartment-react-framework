# K-PIT-003: Don't bake "reputation" framing or secret-shaped text into committed docs

**Category:** Pitfall
**Created:** 2026-06-23
**Tags:** docs, prd, readme, public-repo, privacy, user-feedback

## Context
Drafted a PRD whose goal was framed as "make this portfolio-grade / worthy of pinning on a GitHub profile / signals craft to recruiters," and CLAUDE.md described the house manual as holding "placeholder secrets (building code, WiFi password)." The user flagged both before committing: a repo meant to be inspected by others must not advertise that its purpose is the author's reputation, nor carry credential-shaped wording.

## Insight
Committed docs are read by third parties. Keep them about the **product/work**, not the author's career goals, and never describe (even masked) credentials in a way that reads as "secrets live here."

## Why it matters
Reputation framing undercuts the very credibility it's chasing; credential-shaped text invites scrutiny and can normalize committing real secrets later.

## Symptom
A grep over committed docs hits: `reputation|recruiter|portfolio|pin.*profile|password|secret|api[_-]?key`.

## Recovery
Reframe goals around product quality ("production-grade", "correct, well-engineered"). Replace "placeholder secrets (door code, WiFi password)" with "masked placeholders for operational details; real values stay out of the build and out of version control." Re-run the grep until clean.

## Application
Before committing any README/PRD/CLAUDE.md to a repo others will see, run the reputation+secret grep and scrub. The user prefers this proactively, not after review.
