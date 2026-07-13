# Publishing to `mskandalis.github.io`

This is a static Astro site. It publishes through the existing GitHub Pages branch source and does not require a paid host or GitHub Actions.

## One-time GitHub setup

The repository already serves GitHub Pages from the root of `main`. If that setting ever changes, open **Settings > Pages** and set:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

Save the setting. GitHub Pages will then publish the generated site at `https://mskandalis.github.io`.

## Local development

```powershell
npm run dev
```

## Publishing an update

Generate the Pages-ready static files, then commit and push the result:

```powershell
npm run pages:build
git add .
git commit -m "Update research portfolio"
git push
```

The root static files are generated from Astro's `dist/` output. The build includes `.nojekyll` so its hashed `_astro` assets are served correctly.

## Editing safely

Edit the Astro source rather than the generated root files:

- Academic entries: `src/data/academic.ts`
- Homepage: `src/pages/index.astro`
- Focused pages: `src/pages/*.astro`
- Styling: `src/styles/global.css`

For a local preview, run `npm run dev`. Before every publish, run `npm run pages:build`, then commit and push both the source changes and the regenerated root files.

You can technically edit files in GitHub's web editor, but editing only `src/` there will not update the live site because GitHub Pages serves the generated root HTML, CSS, and route directories. Editing those generated files directly is not recommended: the next `npm run pages:build` overwrites them. Until GitHub Actions is available again, use the local source-to-build-to-push workflow above for durable site changes.

## Content sources

- Homepage: `src/pages/index.astro`
- Curriculum vitae: `src/pages/cv.astro`
- Profile portrait: `public/images/portrait.png`