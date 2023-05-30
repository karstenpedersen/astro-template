import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cool.com',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    tailwind(),
    sitemap(),
  ],
});
