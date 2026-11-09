# Envoy website working instructions

## Start from the current work

Read `README.md`, `docs/PROJECT-STATE.md`, `VERSION.txt`, and the latest `CHANGELOG.md` entries. Inspect the selected branch, recent changes, and any uncommitted work before editing. When remote access is available, check the current repository state rather than assuming a previous chat or downloaded ZIP is still current. Preserve changes made by Gordon or his colleague.

Version 8 (November 9, 2026) is the current revision. The next requested enhancement is Version 9 unless Gordon specifies otherwise. For later work, read the version record and increment from there. Update the version, change log, and relevant project-state notes together. Several commits may belong to one requested revision; do not create duplicate numbered website folders.

## Preserve the approved direction

Use “Operational Intelligence for Process Industries.” Explain experienced process engineers, physics-based analytics, AI, and practical engineering support through customer benefits. The platform includes Process Reliability Reporting, Smart Centerlines, and Envoy Intelligence.

Retain the established green/teal styling, typography, approved photographs, and four industry hero images. The pulp-and-paper hero is the final HD-chest revision. Do not regenerate or replace approved imagery as an incidental part of another edit.

Pulp and paper is Envoy's established foundation. Food and specialty chemicals are new industry focuses. Do not invent customer results, testimonials, performance figures, or released capabilities. Distinguish illustrative examples from operating data and possible applications from established deployments.

The About page uses the 32 portraits recorded in `docs/asset-records/team-manifest.json`. Preserve names and image mappings unless the task provides a correction. Higher-resolution originals may replace the corresponding images when supplied.

## Edit the right files

The editable website is in `site/`; Netlify publishes only that directory. Keep documentation and design proposals outside it. The nine diagrams under `design/diagram-proposals/` remain proposals until implementation is requested. When implementing a concept, use its placement notes to replace the associated text/cards and make the composition readable on mobile.

Keep the existing static HTML/CSS/JavaScript architecture unless a requested feature needs a different approach. Edit source files, not release ZIPs. Use checks proportionate to the change: verify affected links/assets, inspect relevant layouts, and exercise changed interactions. Add test infrastructure only when it addresses a concrete risk.

## Collaboration and handoff

Use a focused branch and pull request for each revision. Describe the customer-facing change, affected pages, preview URL when available, and verification performed. Keep fixes to that revision on the same branch.

Work within the user's requested merge and publishing scope. Once connected, merging into `main` updates the shared Netlify review site. The public-domain launch is a separate decision. Do not claim a push, preview, release, or deployment succeeded without verifying its result. Record any remaining limitation plainly.
