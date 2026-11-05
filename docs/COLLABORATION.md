# Collaborating on the Envoy website

Use GitHub for the editable files and Netlify for visual review. Gordon can work mainly from a preview URL and a discussion of the changes. A colleague or connected assistant can handle the file edits. GitHub Desktop is useful when someone wants a local working copy, but it is not required merely to review a page.

## Current starting point

Version 7 is a prepared repository structure. No remote repository or Netlify connection has been created. The website content is the website content from the Version 6 review package, and all nine diagrams remain separate proposals. The next enhancement is Version 8.

The connected GitHub account checked during preparation was `gordonjones11-create`; no accessible repository was returned. That may reflect connection permissions. The actual repository owner, URL, colleague access, and Netlify plan still need to be established.

## Set it up once

### 1. Create and populate the repository

Create a private repository named `envoy-website`. An Envoy-owned organization is preferable for long-term company ownership when available and supported by the hosting plan. A selected personal account also works. GitHub's [repository-creation guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) describes choosing the owner and visibility.

For an import through GitHub Desktop, create the remote repository without generated README, license, or ignore files, then clone it. Copy the **contents** of the extracted starter into the local repository root, including its configuration files. The root should contain `site/`, `README.md`, `AGENTS.md`, and `netlify.toml`, rather than another enclosing starter folder. Commit the import and push it to `main`. The [Desktop cloning guide](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) covers obtaining the local copy.

Give the colleague repository access appropriate to their work. Authorize the connected GitHub/Codex environment for this specific repository. Record the resulting URL and ownership in `PROJECT-STATE.md`.

### 2. Link Netlify

The existing Funny Kitten Netlify project can serve as the shared review website. Netlify's documented route for an existing project is **Project configuration → Developer settings → Continuous deployment → Repository → Link repository**. Select the chosen GitHub repository. See [repository linking](https://docs.netlify.com/build/git-workflows/repo-permissions-linking/).

Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Base directory | Repository root |
| Build command | Blank |
| Publish directory | `site` |

The supplied `netlify.toml` records the publish directory. This is a static website and needs no Node installation or build step. Netlify deploys files from the [publish directory](https://docs.netlify.com/build/configure-builds/overview/), so the diagrams and working notes outside `site/` remain repository material.

Enable Deploy Previews for pull requests into `main`. Open one small proposed revision to confirm that its preview appears and that later commits refresh it. Netlify explains the behavior and supported base branches in [Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/).

Here, “production branch” means the branch supplying the main **review-site** URL. Moving `www.envoydevelopment.com` to this site remains a separate launch decision.

### 3. Check collaboration settings

Confirm the existing Netlify plan before the colleague begins pushing changes. Current credit-based Free and Personal plans exclude additional Git Contributors on private repositories and organization-owned private repositories; Pro includes those features. Legacy-plan terms may differ. Use the [current plan comparison](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) alongside the actual account settings.

Require review before merging `main` if the GitHub plan supports it. For private repositories, enforced branch protection is [plan-dependent](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches); the same pull-request review convention can be followed without enforcement. Preview access is separate from repository privacy; check Netlify's access settings if the review site must be restricted.

## Use this revision loop

1. **Describe one change.** Identify the page, the desired result, and any content or imagery to preserve. Attach screenshots when location or appearance matters.
2. **Start a branch from current `main`.** For example, `v8-homepage-diagram`. Pull the latest work before editing and preserve colleagues' changes.
3. **Edit and check.** Review the affected desktop/mobile layouts, links, assets, and changed interactions. Update `VERSION.txt`, `CHANGELOG.md`, and any decisions in `PROJECT-STATE.md`.
4. **Open a pull request.** Use the included template. State what changed, what to review, and what remains uncertain. Add the Netlify preview URL when it is available.
5. **Review and refine.** Put feedback on that pull request; keep follow-up edits on its branch so everyone reviews the same proposal.
6. **Merge the agreed revision.** Netlify updates the shared review site from `main`. Check the completed deploy, then tag the finished version, such as `v8.0`.

GitHub Desktop provides a [branch workflow](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop?platform=windows) for people who prefer buttons to command-line Git. Gordon does not need a local copy when another authorized contributor handles the edits.

## Include the assistant consistently

Use the authorized repository connection or a coding environment opened on the repository. There is no separate AI person to invite to GitHub. At the start of a task, provide the repository and branch or pull-request link. Ask the assistant to inspect the current files and read the standing instructions before changing them.

`AGENTS.md` keeps the approved visual style, positioning, diagram status, and versioning rules with the work. Codex documents its [project-instruction discovery](https://learn.chatgpt.com/docs/agent-configuration/agents-md). Optional [Codex pull-request review](https://learn.chatgpt.com/docs/third-party/github) can be enabled separately; a GitHub connection alone does not establish that setup.

Example task:

> Work in our connected `envoy-website` repository. Read `AGENTS.md` and `docs/PROJECT-STATE.md`, check the latest `main`, and create a Version 8 branch. Implement the proposed homepage diagram, replacing the four benefit cards. Preserve the approved hero image and current green/teal styling. Check the page on desktop and mobile, update the version and change log, and open a pull request with the preview link when available. Leave it ready for our review.

## Downloads and fallbacks

Keep the original Version 6 ZIP as a historical backup. After importing this starter, use `v7.0` for the reviewed setup release. Future tags identify exact revisions; GitHub supports [source ZIP downloads](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives) for branches, tags, and releases.

For local browsing, extract a source ZIP and open `site/index.html`. If a manual Netlify upload is ever needed, upload **only `site/`**, with `index.html` at that deployment's root. Do not upload the whole repository root. Resume ordinary revisions through GitHub so the shared source and deployed version stay aligned.
