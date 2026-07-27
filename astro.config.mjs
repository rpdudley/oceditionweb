import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ocedition.com',
  trailingSlash: 'always',
  image: {
    service: passthroughImageService(),
    domains: ['i.pravatar.cc'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});