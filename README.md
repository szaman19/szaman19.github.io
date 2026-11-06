# Shehtab Zaman's website

A small Eleventy site: HTML, CSS, and Markdown. No client-side JavaScript, external fonts, or runtime services. GitHub Pages serves the generated `_site/` directory.

## Run locally

Install Node.js 22 or newer, then:

```sh
npm install
npm start
```

Open the URL printed in the terminal (normally `http://localhost:8080`). Edits rebuild automatically.

```sh
npm run build
npm run check
```

## Publish a post

1. Copy `_drafts/post-template.md` to `src/writing/posts/your-post-slug.md`.
2. Set the title, date, description, and series in the opening metadata.
3. Write the body in Markdown. Remove `draft: true` when ready to publish.
4. Preview locally, then commit and push.

The filename becomes the URL: `your-post-slug.md` → `/writing/your-post-slug/`. Keep filenames stable after publishing. Dates determine the order, newest first. Future dates do not schedule publication; use `draft: true` to keep work unpublished.

Writing navigation, the home page writing section, and feed links stay hidden until the first published post. Empty series stay out of the home page and writing index until they have a published post.

Series IDs:

- `distributed-deep-learning`
- `ai-for-science`
- `agentic-harnesses-for-science`

Omit `series` for a standalone post, which appears under “Other notes.” Add new series in `src/_data/writingSeries.json`; the home page, writing index, and series archives update automatically. Posts also appear in `/feed.xml`.

Images can go in `src/styles/` (which is copied to the output), or add a dedicated assets directory to `addPassthroughCopy` in `eleventy.config.js`. Use descriptive alt text.

## Update the main page

- Bio, selected work, and publications: `src/index.njk`.
- Profile links and metadata: `src/_data/site.json`.
- Series descriptions: `src/_data/writingSeries.json`.
- Appearance: `src/styles/site.css`.
- CV: replace `CV-Updated.pdf` in the repository root.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` builds and deploys on pushes to `main` or `master`, or can be run manually. It uses `npm ci` and the checked-in lockfile.

The old Jekyll files remain in the repository as historical source, but Eleventy reads only `src/`; they do not enter the published site. No Ruby installation is needed. Nothing is deployed until the changes are pushed and Pages is configured for Actions.
