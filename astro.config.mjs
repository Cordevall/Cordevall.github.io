import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/github": "https://github.com/Cordevall"
  },
  integrations: [tailwind(), mdx()]
});