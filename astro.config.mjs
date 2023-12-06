import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import sitemap from "@astrojs/sitemap";
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date(),
  })],
  vite: {
    css: {
      postcss: {
        plugins: [postcssMergeQueries]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/variables.scss";`
        }
      }
    },
  },
  server: {

    open: true,
  },
  site: siteUrl
});