// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ikads.app',
  output: 'static',
  markdown: {
    // 預設的 github-dark 在 #F7F7F7 的淺色版面上太重，換成淺色主題
    shikiConfig: { theme: 'github-light' },
  },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
