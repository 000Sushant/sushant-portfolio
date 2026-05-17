// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      routes: ["/"],
    },
  },
  vite: {
    base: process.env.NODE_ENV === "production" ? "/sushant-portfolio/" : "/",
    plugins: [
      {
        name: "copy-server-entry",
        writeBundle(options) {
          if (options.dir && options.dir.endsWith("server")) {
            const indexFile = path.join(options.dir, "index.js");
            const serverFile = path.join(options.dir, "server.js");
            if (fs.existsSync(indexFile)) {
              fs.copyFileSync(indexFile, serverFile);
              console.log("[copy-server-entry] Automatically copied index.js to server.js for prerenderer");
            }
          }
        },
      },
    ],
  },
});
