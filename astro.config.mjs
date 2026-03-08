import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // GitHub Pages user site is served from the repo root
  site: "https://cork0158.github.io/",
  base: "/",
  // The project runs on GitHub Pages; `base` is automatically inferred for GitHub Pages
  // but can be set explicitly if you deploy to a subpath.
  // base: '/Cork0158.github.io/',
  integrations: [react(), tailwind()],
});
