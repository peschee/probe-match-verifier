import { defineConfig } from 'vite';
import remarkHtml from 'vite-remark-html';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  plugins: [
    remarkHtml({
      allowDangerousHtml: true,
      include: ['src/**/*.md', 'README.md'],
    }),
  ],
});
