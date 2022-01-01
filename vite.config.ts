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
      include: ['**/*.md'],
      exclude: ['node_modules/**/*'],
    }),
    injectHtml({
      data: {
        title: pkg.title,
        description: pkg.description,
      },
    }),
  ],
});
