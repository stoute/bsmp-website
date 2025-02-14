import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://app-browser-10b90.firebaseapp.com",
  output: "server", // Use 'server' for SSR, 'static' is default for SSG
  base: "/",
  adapter: node({
    mode: "middleware",
  }),
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
  experimental: {
    svg: true,
  },
});
