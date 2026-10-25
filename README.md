# A mathematician’s personal website

An Astro static website with Markdown research pages and a static publication archive, local KaTeX mathematics, responsive styling, and a GitHub Pages workflow. Research and teaching content remain clearly marked examples; the publication archive is reproduced from Osman Yürekli’s Ithaca College faculty page.

## Run locally

Install Node.js 22 LTS (including npm), then run in this folder:

```sh
npm install
npm run dev
```

Open the local address printed by Astro. To generate the static site, run `npm run build`; use `npm run preview` to inspect that build. The output is `dist/`.

## Make it yours

- Edit `src/data/profile.ts` for your name, contact information, research interests, and biography.
- Edit `src/styles/global.css` for colors, typography, and spacing.
- Edit `src/pages/teaching.astro` and `src/pages/cv.astro` for teaching and career details.
- Add your CV at `public/cv.pdf`; the download button appears after rebuilding.
- The template notice is in `src/layouts/Layout.astro`. Remove it when you have replaced the example content. Also remove the example labels and introductory placeholder copy in the page templates.
- Replace `public/favicon.svg` if desired.

## Add research

Copy any file in `src/content/research/` and give it a unique filename, for example `my-project.md`. Its filename becomes `/research/my-project/`.

```yaml
---
title: "My research project"
description: "A short introduction."
area: "My research area"
order: 1
---
```

Write the page in Markdown below the metadata. Listings update automatically, ordered by `order`.

## Publications

The publication page reproduces the year-grouped list from https://www.ithaca.edu/faculty/yurekli/publications, including citation formatting, bold student names, and original resource links. It is stored locally in `src/data/publications.html` and rendered by `src/pages/publications/index.astro`. There are no Markdown publication entries or generated publication detail pages. To revise the archive, edit this HTML or ask to reimport the faculty page. Updates on Ithaca’s site do not sync automatically. The home page uses the same archive for its latest two year groups.

Research pages still support inline mathematics with `$...$` and displayed equations with `$$` on separate lines.

## Publish later with GitHub Pages

No GitHub account or Git repository is needed for local editing.

1. Create a GitHub account and a repository. For a root site, name it `YOUR-USERNAME.github.io`. Another repository name also works; the workflow handles its path prefix.
2. Initialize Git locally when ready, commit the files, add the GitHub remote, and push the `main` branch. Git needs to be installed first. You can also use GitHub Desktop.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
4. Open **Actions** and run the deployment workflow, or push a change to `main`.

The included workflow builds and publishes every push to `main`. It derives the site URL and repository path from GitHub Pages. For local builds targeting another host, set `SITE_URL` to your full origin and `BASE_PATH` to its path prefix (default `/`).

Commit the included `package-lock.json` with your source. The deployment workflow uses `npm ci` for reproducible installations.

Custom domains can be configured later through GitHub Pages. Check the Pages URL after deployment and verify PDF links before sharing the site.
