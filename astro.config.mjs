import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
// https://astro.build/config
export default defineConfig({
  integrations: [],
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