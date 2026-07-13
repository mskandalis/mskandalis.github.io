# Deploying to `mskandalis.github.io`

This is a static Astro site. GitHub Pages and the included GitHub Actions workflow deploy it for free.

## One-time GitHub setup

1. Create a public GitHub repository named `mskandalis.github.io` under the `mskandalis` account.
2. Add it as this project's remote and push the `main` branch:

   ```powershell
   git remote add origin https://github.com/mskandalis/mskandalis.github.io.git
   git branch -M main
   git add .
   git commit -m "Create research portfolio"
   git push -u origin main
   ```

3. In the repository, open **Settings > Pages**, choose **GitHub Actions** as the source, and wait for the workflow to complete.

The site will then be published at `https://mskandalis.github.io`.

## Local development

```powershell
npm run dev
```

Build the production site with:

```powershell
npm run build
```

## First content update

- Put the supplied portrait at `public/images/portrait.jpg`.
- Replace the starter research directions and record items in `src/pages/index.astro`.
- Replace the CV starter entries in `src/pages/cv.astro` with confirmed education, experience, teaching, awards, and publications.