import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hyperspark.studio',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
    }),
  ],
});
