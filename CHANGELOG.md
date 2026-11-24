# Change log

## Version 12 - Home page hero image, white area made transparent · November 24, 2026

- Home page hero: the photo of the man had a white haze and a white base baked into
  the image, which covered the swoosh lines behind it. The white is now transparent,
  so the swoosh lines run behind and through the figure.
- New image file: site/external-assets/static.showit.co/2588ea688b-envoy_homepage_man_v2.webp
  (same 800 x 620 size). The original file is kept beside it, unchanged.
- site/index.html points to the new file. No other page uses this image.
- Pre-change copies in backups/2026-11-24.

## Version 11 - Titles-only header drop-downs · November 23, 2026

- Header drop-downs (Platform, Industries, The Intelligent Factory, Company) now show
  the page title only. The 16 subtext lines are removed from the header on all 39
  pages in site/. Review feedback was that the subtext made the menus big and long.
- css/main.css: drop-down rows are tighter, titles stay on one line, and each menu
  is as wide as its longest title (the 270px minimum width is removed).
- The phone menu already showed titles only and is unchanged.
- Preview used for sign-off kept in drafts/nav-titles-only-preview-v1.html.
- Pre-change copies in backups/2026-11-23.

## Version 10 - Monthly reports on the reliability page · November 21, 2026

- Envoy Process Reliability Reporting page: new "Every Month" section between
  "Reliability Across the Process" and "Root Cause Investigations". It shows the two
  standard monthly reports side by side: the Control Loop Health Report and the
  Monthly Maintenance Report. Each card has an inline SVG graphic and five points.
- A three-step strip in the section reads: every morning, every month, when a problem
  persists.
- Both graphics are generalized from Envoy reports and captioned "Demo data". No
  customer, mill or tag names. Maintenance counts match the book's 30-day tag scan;
  "Stopped reporting: 3" and the loop grid split are illustrative.
- Styles added at the end of css/reliability.css (classes start with "mr-").
- Section source kept in drafts/monthly_reports_section_v1.html and .css.
- Pre-change copies in backups/2026-11-21.

## Version 9 - Launch preparation · November 18, 2026

Envoy Finance pages (November 20)
- New pages envoy-finance-eula.html and envoy-finance-privacy-policy.html, required for
  the QuickBooks registration of the internal Envoy Finance app. Copy supplied by Sarah.
- Both carry a noindex, nofollow meta tag. Keep them out of the menu, footer and
  sitemap.xml, and do not add a robots.txt Disallow line for them.

Wording and consistency
- Six Decisions: the three "In practice" lines now name Envoy Intelligence only
  (Engineering Intelligence and Operational Intelligence are retired as product names).
- Reliability page label and the home page button now say Process Reliability Reporting.
- Smart Centerlines: the two study figures ($270,000 and $154,000) are written in the
  page; the count-up animation is unchanged.
- "Hover" hints: hidden on touch screens (reliability page), reworded (Platform Overview).
- Spelling: "dialed", "Agree on the process area".

Names and buttons
- "Envoy Process Reliability Reporting" in the menu, footer, industry page rows, home
  card label and the reliability page label.
- "Request a Demo" replaces "Talk With Envoy", "Talk About Your Process" and
  "Talk With Our Team" (industry pages and About).
- "Take the 2-Minute Assessment" on the Intelligent Factory and Maturity Model pages.
- Pre-change copies in backups/2026-11-18c.

AI wording and "plant"
- "AI" replaces "Agentic AI" and "AI agents" site wide, including the footer line.
  The home hero now says "artificial intelligence".
- Six Decisions: nine general statements say "plant" instead of "mill". Paper mill
  examples are unchanged.
- Home numbers band: "Years of Plant Experience". Careers description: "plant experience".
- Pre-change copies in backups/2026-11-18d.

Envoy Intelligence page, menu and book (November 19)
- Envoy Intelligence step 03 now reads "The answer is checked a second time" and says
  the second AI check looks for evidence for and against each cause.
- Page labels: "Envoy Intelligence" and "Envoy Smart Centerlines" (module prefixes removed).
- "Start Here" is now "Overview" in the menu, footer, page title and back links.
- Menu descriptions for Food and Specialty Chemicals rewritten.
- Book: "Draft for review" tags removed from the contents page and all 12 chapters;
  contents rows say "Available". The Book stays in the menu.
- Pre-change copies in backups/2026-11-19.

Demo booking (November 20)
- Every "Request a Demo" button and "Book a Time" now opens the Microsoft Bookings page
  in a new tab. The contact form stays for messages, sales and support.
- /scheduling redirects to the booking page. Privacy Notice names Microsoft Bookings.
- Pre-change copies in backups/2026-11-20.

Launch readiness
- Contact form connected to Netlify Forms (form name "contact", honeypot field,
  thank-you.html). The notification address is set in the Netlify dashboard.
- New pages: privacy.html, terms.html (effective November 20, 2026), thank-you.html.
- Footer on every page: Privacy Notice and Terms of Use links.
- site/_redirects: old envoydevelopment.com addresses to the new pages.
- Pre-change copies are in backups/2026-11-18 and backups/2026-11-18b, outside site/.

Not yet done
- Every page still carries the noindex tag. Remove it at launch.
- Backup, preview and option files from earlier revisions are still inside site/.

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
- Book pages (November 11): rebuilt to Outline B (reliability, quality, cost;
  five parts). New Chapter 3 (What AI can and cannot do), Chapter 5 (Fix the
  right thing first) and Chapter 6 (Find the source of the swing), each with new
  figures. The old Chapter 6 (lime kiln) is now Chapter 8, "Where it costs
  least". The old Chapter 7's 30-day scan is now Chapter 4, and its headbox
  example moved to the new Chapter 6. `book-ch7.html` is no longer linked.
  Generator: `Website 3.0/Book Web Pages/book_pages_gen_v2.py`.

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
