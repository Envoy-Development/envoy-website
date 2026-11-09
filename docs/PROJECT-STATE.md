# Project state

Updated November 9, 2026. Owner: Gordon Jones, Envoy Development.

## Current work

- Version 8 (November 7 to 9, 2026) is the current revision. See `CHANGELOG.md`.
- Local working copy: `C:\Apps\EnvoyWebsite3\envoy-website` (moved from
  `C:\Apps\EnvoyWebsite\envoy-website` on November 9, 2026). It is a Git
  repository; Gordon commits to `main`.
- `site/` holds the 21 website pages. The diagram concepts have now been
  implemented as interactive visuals on the home, platform, industry and
  Intelligent Factory pages. `design/diagram-proposals/` is kept as history.
- `netlify.toml` publishes only `site/`.
- Backup, preview and option files are still inside `site/` and would be
  published. Clear them before release.

## Decisions to carry forward

- Positioning: Operational Intelligence for Process Industries.
- Explain experienced process engineers, physics-based analytics, and AI
  together, with practical operating benefits and ongoing engineering help.
- Preserve the green/teal look and approved photographs. The pulp-and-paper
  hero is the final HD-chest revision.
- Pulp and paper is the established foundation. Food and specialty chemicals
  are new industry focuses; do not invent customers or results for them.
- The About gallery has 32 people: 31 public website portraits captured on
  October 31, 2026, plus Todd Fytczyk from a photo Gordon supplied on
  November 9, 2026. David Kammerdeiner was removed.
- Home page figures supplied by Gordon (November 9, 2026): 600+ plant
  processes, 97% client renewal rate.
- The contact form is a preview and does not send messages. Assessment and
  resource pages retain their existing in-progress content.
- Every later enhancement increments the review version and change log.

## Open items

- Clear backup, preview and option files out of `site/` before release.
- Remove the unused full-size `assets/team/Todd Fytczykk.jpg`.
- Update `book.html`, which still describes the seven disciplines, and decide
  whether the seven-disciplines and technology-stack menu links stay.

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
