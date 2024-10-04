import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stunning-longma-29c3f8.netlify.app/",
  integrations: [preact()]
});