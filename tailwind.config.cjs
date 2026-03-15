
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'tg-gold': '#F0D788', // The Trader's Gazette primary color
        'tg-dark': '#111827', // A deep charcoal-like black for background
        'tg-gray': '#374151', // Accent/border color
      },
      fontFamily: {
        // Use a clean, modern san-serif font for readability
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        // Use a monospace font for data, appeals to the data-driven trader
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
"dependencies": {
    "@astrojs/react": "^3.0.7",
    "@astrojs/tailwind": "^5.0.3",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "astro": "^4.0.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.6"
  }
=======
  "dependencies": {
    "@astrojs/react": "^3.0.7",
    "@astrojs/tailwind": "^5.0.3",
    "@tailwindcss/typography": "^0.5.10",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "astro": "^4.0.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.6"
  }
