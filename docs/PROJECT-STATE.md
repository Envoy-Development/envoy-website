# Project state

Updated November 5, 2026. Owner: Gordon Jones, Envoy Development.

## Current work

- Version 7 is the prepared repository structure; there is no remote URL yet.
- `site/` contains the website from the Version 6 review package: 21 pages, approved industry
  hero images, current messaging, and the rebuilt About Envoy/team page.
- `design/diagram-proposals/Envoy-Website-V6-Diagram-Proposal.html` is the
  complete nine-concept review board. Diagrams have not been inserted into
  the actual pages.
- `netlify.toml` publishes only `site/`. Documentation, source records, and
  diagram proposals stay outside that publish directory.

## Decisions to carry forward

- Positioning: Operational Intelligence for Process Industries.
- Explain experienced process engineers, physics-based analytics, and AI
  together, with practical operating benefits and ongoing engineering help.
- Preserve the green/teal look and approved photographs. The pulp-and-paper
  hero is the final HD-chest revision.
- Pulp and paper is the established foundation. Food and specialty chemicals
  are new industry focuses; do not invent customers or results for them.
- The About gallery uses 32 unmodified public website portraits captured on
  October 31, 2026. Higher-resolution employee originals were not available.
- The contact form is a preview and does not send messages. Assessment and
  resource pages retain their existing in-progress content.
- Every later enhancement increments the review version and change log.

## Suggested first substantive revision after setup

Implement an agreed subset of the diagrams on a Version 8 branch. The prior
recommendation was to begin with the homepage, Reliability Reporting, and
pulp and paper, with an improvement to the existing Smart Centerlines chart.
The full diagram proposal records placement, replacement text/cards, and
mobile composition notes for all nine pages.

## Repository and hosting handoff

- Connected GitHub account checked in this session: `gordonjones11-create`.
- No accessible repository was returned for that account. This does not prove
  the account has no repositories; the connection may have limited access.
- Proposed repository name: `envoy-website`; use the chosen account or Envoy
  organization and grant the connected tools access to that repository.
- Netlify plan and project settings have not been inspected.
- Existing review URL: https://funny-kitten-305a48.netlify.app/
- Current published website: https://www.envoydevelopment.com/
- Proposed workflow: Git branch → pull request → Netlify preview → review →
  merge into main → shared review-site update. The public-domain launch is a
  separate decision.

## Preserved full package

The original Netlify reference copy, earlier snapshots, and full cumulative
review materials remain in the preserved Version 6 download:

The Version 6 package (`Envoy-Website-V6.zip`) is held in Gordon's saved files.

Ask him for a copy. Share the actual download
with a colleague if historical material is needed. Current website editing
does not depend on access to this archive.

The original full package is intentionally outside this working tree; Git
history and tagged releases should track future versions in one repository.
