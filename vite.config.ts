import { defineConfig } from 'vite';
import { injectHtml } from 'vite-plugin-html';

import pkg from './package.json';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    injectHtml({
      data: {
        title: pkg.title,
        description: pkg.description,
      },
    }),
  ],
});
