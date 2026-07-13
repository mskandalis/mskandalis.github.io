# Publishing to `mskandalis.github.io`

This is a static Astro site. It publishes through GitHub Pages branch hosting and does not require a paid host or GitHub Actions.

## One-time GitHub setup

In the `mskandalis/mskandalis.github.io` repository, open **Settings > Pages** and set:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

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

The `docs/` directory is generated from Astro's `dist/` output and includes `.nojekyll` so its hashed `_astro` assets are served correctly.

## Content sources

- Homepage: `src/pages/index.astro`
- Curriculum vitae: `src/pages/cv.astro`
- Profile portrait: `public/images/portrait.png`