# Portrait asset

The existing website portrait is restored here as `portrait.png` during the migration.

The home page checks for that filename at build time and uses the image when it exists. Until then, it renders a styled fallback, so the deployed page never contains a broken image.

For the transparent portrait used on the About and CV pages, place the supplied image here as `profile-cutout.png`. The site will automatically use it for those compact portraits and as the favicon on the next build; until then, the existing portrait remains the fallback.