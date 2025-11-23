import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 🚀 FIX: Set base to root '/' because you are using a Custom Domain.
  base: '/',
  
  // Optional but good for SEO:
  site: 'https://www.thetradersgazette.com',

  integrations: [tailwind(), react()],
  output: 'static', 
});
