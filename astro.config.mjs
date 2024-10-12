import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sitemap from '@astrojs/partytown';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jiaulislam.dev/',
  integrations: [mdx(), sitemap(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  "plugins": [
    {
      "name": "@astrojs/ts-plugin"
    },
  ],
});
