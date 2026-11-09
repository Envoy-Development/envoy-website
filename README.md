# Envoy website — Version 7 GitHub starter

This starter organizes the website from the Version 6 review package for shared editing through GitHub and Netlify. It contains the same 21 website pages and approved visual assets, plus the separate nine-diagram proposal. **Version 7 changes the repository organization and collaboration setup; it does not redesign the pages or insert the proposed diagrams.**

Prepared November 5, 2026 for Gordon Jones. No remote repository, tag, release, or Netlify deployment has been created by preparing these files. See [Project state](docs/PROJECT-STATE.md) for the current handoff.

## The working arrangement

Use one private GitHub repository, suggested name `envoy-website`, as the authoritative editable copy. Each revision gets a branch and a pull request. A pull request is a proposed change that collects the file differences, discussion, and review in one place.

Connect Netlify to that repository. Netlify can create a [Deploy Preview](https://docs.netlify.com/deploy/deploy-types/deploy-previews/) for each pull request and refresh it as the branch changes. Review the preview, refine the work on the same branch, and merge the approved revision into `main`.

The existing Funny Kitten project can become the shared review site. In that arrangement, Netlify's “production branch” means the main deployment of the **review site**. Moving the finished website to `www.envoydevelopment.com` remains a separate launch decision.

## Where things live

| Path | Purpose |
| --- | --- |
| `site/` | All published website pages, images, fonts, styles, and scripts |
| `design/diagram-proposals/` | Nine SVG concepts, PNG previews, and the complete review board |
| `docs/PROJECT-STATE.md` | Current decisions, known limitations, and setup status |
| `docs/COLLABORATION.md` | Initial setup and the everyday revision workflow |
| `docs/asset-records/` | Image prompts, provenance, and team-photo source records |
| `docs/history/` | Earlier messaging and change records |
| `AGENTS.md` | Standing instructions for assistant work in this repository |
| `VERSION.txt` and `CHANGELOG.md` | Current review version and revision history |
| `netlify.toml` | Netlify configuration: publish only `site/` |
| `.github/pull_request_template.md` | A short guide for describing and reviewing each change |

To browse locally, open `site/index.html`. Keep its folders together. Open `design/diagram-proposals/Envoy-Website-V6-Diagram-Proposal.html` to review the proposed diagrams.

## First-time setup

The full procedure is in [Collaboration](docs/COLLABORATION.md). The main steps are:

1. Create a private `envoy-website` repository. Prefer an Envoy-owned organization when available and supported by the hosting plan; Gordon's selected personal account is an alternative.
2. Import the **contents** of this starter into the repository root. Do not upload the ZIP itself as the website source.
3. Connect the chosen Netlify project to that repository. Select `main`, keep the base directory at the repository root, leave the build command blank, and publish `site`.
4. Give the colleague the appropriate repository access and authorize the connected assistant environment for this specific repository.
5. Record the actual repository and Netlify URLs in `docs/PROJECT-STATE.md`. Once the import is committed and reviewed, create the initial `v7.0` tag/release.

Netlify documents [linking an existing project to a repository](https://docs.netlify.com/build/git-workflows/repo-permissions-linking/) and the [publish-directory settings](https://docs.netlify.com/build/configure-builds/overview/). Only `site/` should be deployed; the working notes and diagram proposals stay outside it.

## Working with an assistant

There is no separate AI colleague account to invite. Use the GitHub/Codex connection authorized for this repository, and identify the repository plus branch, issue, or pull request when starting work. Access and available actions must be checked in that session.

Ask the assistant to read `AGENTS.md`, the project state, and the latest branch before editing. [Codex reads project instructions from AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), which keeps the approved design, messaging, versioning, and review expectations alongside the files. Conversation history remains useful background; the repository records the current work.

## Versions, downloads, and account checks

The current revision is Version 8 (see `CHANGELOG.md`); the next enhancement is Version 9. Update the version and change log for each requested revision, then tag completed versions. GitHub supports [ZIP snapshots of tags and releases](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives). Use those for occasional downloads; ordinary collaboration happens through branches and pull requests.

Check the actual Netlify plan before enabling two-person development: current credit-based Free and Personal plans exclude additional Git Contributors on private repositories and organization-owned private repositories; Pro includes those features. See [Netlify's plan comparison](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/). A private GitHub repository does not itself make the Netlify preview private.

The preserved Version 6 archive remains the historical reference. The contact form is still a preview, and the diagram concepts remain proposals until an implementation is requested.
