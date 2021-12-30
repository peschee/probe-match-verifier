import { defineConfig } from 'vite';
import remarkHtml from 'vite-remark-html';
import { injectHtml } from 'vite-plugin-html';

import pkg from './package.json';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    remarkHtml({
      allowDangerousHtml: true,
      include: ['src/**/*.md', 'README.md'],
    }),
    injectHtml({
      data: {
        title: pkg.description,
      },
    }),
  ],
});
