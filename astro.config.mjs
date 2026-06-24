// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Enable if you need to write custom Tailwind CSS
    applyBaseStyles: false
  })
],
fonts: [
    {
      name: "Be Vietnam Pro",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-be-vietnam-pro",
      fallbacks: ["system-ui", "sans-serif"],
      weights: [400, 700],
      styles: ["normal"],
    },
    {
      name: "Gabarito",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-gabarito",
      fallbacks: ["ui-serif", "serif"],
      weights: [400, 700],
      styles: ["normal"],
    },
    {
      name: "Fira Code",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-fira-code",
      fallbacks: ["ui-monospace", "monospace"],
      weights: [400, 500, 700],
      styles: ["normal"],
    },
  ],
});