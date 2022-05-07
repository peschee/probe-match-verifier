import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import pkg from './package.json';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    // @see https://github.com/vbenjs/vite-plugin-html
    createHtmlPlugin({
      entry: '/src/main.ts',
      inject: {
        data: {
          title: pkg.title,
          description: pkg.description,
        },
      },
    }),
  ],
});
