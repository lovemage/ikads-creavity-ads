// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ikads.app',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
