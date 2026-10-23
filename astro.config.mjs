import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cookiesgobrr.github.io",
  base: "/portfolio",
  trailingSlash: "always",
  output: "static",
  devToolbar: { enabled: false },
  server: { host: true, port: 4173 },
  vite: { server: { allowedHosts: ["terminal.local"] } },
});
