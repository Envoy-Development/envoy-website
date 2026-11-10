# Change log

## Version 8 - Interactive pages and home page refresh · November 7 to 9, 2026

Home page
- Hero copy now names artificial intelligence agents alongside process engineering.
- "Your team's priorities" rebuilt as a four-tile live instrument panel (trend with a
  red reading, grade change with new target and limits, new proposal).
- Modules section rebuilt as alternating rows.
- "Work with the systems you already have" diagram: mixed DCS, PLC and historian
  sources feeding Envoy, OPC UA compliant.
- Industries section rebuilt around process cards (CIP, reactor, digester).
- New "Why Envoy" stats band: 600+ plant processes, 97% client renewal rate,
  500+ years of mill experience, 20+ in-house engineers. Numbers grow, rise and
  count up when scrolled into view; static for reduced-motion visitors.

Platform pages
- Platform Overview rebuilt as a non-repetitive overview with new hero image.
- Process Reliability Reporting: six animated tiles (modes, sensor, quality and
  more) and a root cause analysis example from the Acme break analysis.
- Smart Centerlines: new interactive visuals, cropped Acme screenshot, and the
  quarterly cost and basis weight / moisture studies included with the subscription.
- Envoy Intelligence: rebuilt with Acme answer screenshots.

Industries
- Industries overview, Pulp and Paper, Food and Specialty Chemicals rebuilt with
  process diagrams. Pulp and Paper caption now reads "more than 600 plant processes."

Intelligent Factory
- Start Here, Decisions, Maturity Model and Assessment rebuilt with interactive
  visuals. The decisions page adds what to run and when. The seven-disciplines
  and technology-stack framing was dropped from these pages. The book page is unchanged.
- Maturity Model (November 10): the curve is replaced by an interactive five-step
  staircase with the service bars underneath (Reliability Reporting for levels 1
  and 2, Smart Centerlines for 3 and 4, Envoy Intelligence for 5). Selecting a
  step opens a fuller panel: what the level looks like, how you know you are
  there, the trap, and the next step. New stylesheet `maturity-steps.css`.

About
- Added Todd Fytczyk (Process Engineer, Pulp and Recaust). Removed David Kammerdeiner.

New stylesheets: priorities, modules, fit-diagram, industries-cards, sc-screen,
platform-overview, reliability, centerlines, intelligence, industry-pages,
intelligent-factory.

Known limitations
- Backup, preview and option files (`*-backup-*.html`, `*-preview.html`,
  `*-options-*.html`) sit in `site/` and are published with it. Move or remove
  them before release.
- `site/assets/team/Todd Fytczykk.jpg` is the full-size original and is not used
  by any page.
- `book.html` still describes the seven disciplines.

## Version 7 — Repository setup · November 5, 2026

- Organized the current website under `site/`, replacing the historical
  `02-version-3` directory name while retaining internal page and asset paths.
- Added `netlify.toml` with `site` as the only publish directory. The site
  remains plain HTML, CSS, and JavaScript with no build command.
- Kept all nine diagram concepts, their PNG previews, and the review board
  under `design/diagram-proposals/` for further review.
- Moved image-generation prompts and asset provenance records into
  `docs/asset-records/`; page content and image bytes are unchanged.
- Added repository instructions, a collaboration guide, assistant guidance,
  and a pull-request template.
- Added Git ignore rules and text/binary file handling.
- Kept previous full review packages as separate preserved downloads rather
  than duplicating complete versions inside the editable repository.

This is a prepared starter. No remote repository, collaborator invitation,
Git tag, or Netlify configuration/deployment has been created.

## Version 6 — Complete review package · November 1, 2026

Combined the current 21-page website, Version 5 About Envoy work, approved
industry hero images, and nine diagram proposals. The diagrams remained
separate from the website pages. The full Version 6 package is preserved.

## Version 5 — About Envoy working draft · October 31, 2026

Rebuilt About Envoy around the team, including 32 public portraits,
published roles and specialties, a hero mosaic, and responsive gallery.

## Version 4 — Previous downloaded baseline

Gordon named this downloaded package Version 4. It already contained the
broader process-industry positioning, platform/module copy, industry pages,
and all four approved industry hero images, including the final HD chest.

Detailed earlier records are retained in `docs/history/`.
