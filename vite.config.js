/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
// followed this documentation to add favicon plugin: https://github.com/JohnPremKumar/vite-plugin-favicons-inject

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    eslint(),
    vitePluginFaviconsInject('./src/img/logo.svg'),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
