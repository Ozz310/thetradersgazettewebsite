import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: The base path is set to '/' because the website will be on a custom domain (www.thetradersgazette.com),
  // not a subdirectory like yourname.github.io/repo-name.
  base: '/',
  site: 'https://www.thetradersgazette.com/',
  integrations: [tailwind(), react()],
  // Essential for static deployment on GitHub Pages
  output: 'static'
});

