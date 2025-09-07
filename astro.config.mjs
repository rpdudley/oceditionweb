// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Enable if you need to write custom Tailwind CSS
    applyBaseStyles: false
  })],
});
