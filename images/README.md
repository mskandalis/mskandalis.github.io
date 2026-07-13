# Portrait asset

The existing website portrait is restored here as `portrait.png` during the migration.

The home page checks for that filename at build time and uses the image when it exists. Until then, it renders a styled fallback, so the deployed page never contains a broken image.