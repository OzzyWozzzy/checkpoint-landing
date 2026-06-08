# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo contains

Two unrelated things live side by side:

1. **`project/`** — a **handoff bundle from Claude Design** (claude.ai/design) for *Checkpoint*, an AI-playtesting product. These are HTML/CSS/JS **design prototypes**, plus the exported design system. `project/Checkpoint.html` is the primary landing-page deliverable.
2. **`crash-dummy.html`** (repo root) — a standalone, self-contained Three.js + cannon-es ragdoll crash-test-dummy simulation. Not part of the design handoff; it is a real, finished app.

There is **no build system, package.json, test suite, or linter.** Everything is static HTML that runs directly in a browser.

## Running things

Both entry points fetch dependencies and sibling files at runtime, so they **must be served over HTTP** (not opened as `file://`) and need network access. `.claude/launch.json` defines the two preview servers:

```bash
# Checkpoint landing page  →  http://localhost:3456/Checkpoint.html
python -m http.server 3456 --directory project

# Crash-dummy simulation   →  http://localhost:3500/crash-dummy.html
python -m http.server 3500
```

`crash-dummy.html` pulls `three@0.160.0` and `cannon-es@0.20.0` from unpkg via an import map. `Checkpoint.html` pulls React 18, ReactDOM, and Babel Standalone from unpkg, and reads `_ds/…` and `image-slot.js` by relative path — which is why it can't run from the filesystem.

## Working on the Checkpoint design handoff

`project/README.md` is the operating contract — follow it:
- **Read `chats/chat1.md` and `chats/chat2.md` first.** They hold the user/designer back-and-forth and the actual intent; the HTML is just the output.
- **Read `project/Checkpoint.html` top to bottom and follow its imports** before implementing.
- The design files are **prototypes to recreate pixel-perfectly** in whatever target tech fits — match the visual output, don't copy prototype internals. Don't screenshot/render them unless asked (everything is in the source). *(This rule is about the design prototypes — it does not apply to `crash-dummy.html`, which is meant to be run and verified.)*

### Checkpoint.html architecture

A single file that renders a React app in-browser:
- React 18 UMD + `@babel/standalone` compile a `<script type="text/babel">` block at load time.
- `_ds/checkpoint-design-system-…/_ds_bundle.js` populates the global `window.CheckpointDesignSystem_70abd3`, aliased in the page as `const CK = …`. Section components destructure primitives off it (`const { Button, Card, SeverityBadge, DataTable, … } = CK`). `_ds_manifest.json` lists every exported component and design token.
- `image-slot.js` registers an `<image-slot>` web component (a user-fillable image placeholder that persists via a sidecar file in the Claude Design "omelette" runtime; read-only outside it).
- Design tokens are CSS custom properties from `_ds/…/tokens/*.css` + `styles.css`, linked in `<head>`. The system is a dark "instrument-panel" theme: a near-black **slate** ramp, **signal lime** (`--lime #c8f65d`) used sparingly as the action/live accent, and a four-way **severity** palette (critical / warning / healthy / info) treated as "the spine" of the UI. Depth comes from borders + background steps, not shadows. Type is **Geist / Geist Mono** (mono always `tabular-nums` for telemetry).
- The page ends with one `ReactDOM.createRoot(...).render(<App />)`; `App` composes the section components defined inline (Nav, Hero, Problem, HowItWorks, Reports, Why, Roadmap, CTA, Footer).
- `project/sections/*.jsx` are the original per-section design exports; `Checkpoint.html` is the consolidated implementation that supersedes them.

## Working on crash-dummy.html

One self-contained file: a Three.js render layer synced every frame to a **cannon-es** physics ragdoll of ~15 rigid bodies (sphere head, box torso/pelvis/feet, box-collider limbs with cylinder visuals). Feet are static (mass 0) and pinned; joints are `PointToPointConstraint` ball joints plus hand-rolled one-sided angular range-of-motion limits.

**Critical stability invariant:** the neutral standing pose is restored by **velocity-servo "muscles"** — each substep nudges a segment's angular *and* linear velocity toward its rest orientation/position, with capped command rates and a blend factor. This replaced an earlier torque-PD controller that diverged to `NaN` on low-inertia parts (hands). **Keep pose/limit restoration as bounded velocity edits, never unbounded torque accumulation** — that is what keeps it NaN-stable across all segment inertias. Self-collision between limbs is intentionally disabled (they collide only with the floor) for stability and 60fps.

Behaviour is governed by clearly grouped tuning constants near the top of each system: `POSE_RATE/POSE_MAXW/POSE_BLEND` (orientation servo), `LIN_RATE/LIN_MAXV/LIN_BLEND` (positional servo), and `IMPULSE_K / SPEED_CLAMP / SPIN / SPIN_MAXW` (cursor-strike impulse and extra rotational kick). Physics runs on a fixed `1/60` timestep with an accumulator.

## Git

This repo's root is this project directory (it was previously mis-rooted at the user's home folder — if `git status` ever shows the entire home directory or marks all tracked files `deleted`, the `.git` is in the wrong place again). Tracked content is the design bundle + `crash-dummy.html`; `.claude/launch.json` is local tooling.
