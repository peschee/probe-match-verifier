import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  resolve: {
    alias: {
      '~@': path.resolve(__dirname, '/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~@/meta.scss";`,
      },
    },
  },
});
