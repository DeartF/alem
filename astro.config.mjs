// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  base: '/alem',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});