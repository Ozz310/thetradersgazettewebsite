import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Set the base path for GitHub Pages hosting
  // This must match your repository name exactly (including casing)
  base: '/thetradersgazettewebsite/',
  
  integrations: [tailwind(), react()],
  output: 'static', // For static GitHub Pages hosting
});
