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

## Content sources

- Homepage: `src/pages/index.astro`
- Curriculum vitae: `src/pages/cv.astro`
- Profile portrait: `public/images/portrait.png`