// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático (Plan Negocio): se publica en Cloudflare Pages.
export default defineConfig({
  site: 'https://cabanasquebradadelcolibri.cl',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
