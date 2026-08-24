import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the built site works when served from a subpath
  // (mirrors the old CRA "homepage": "./" behavior).
  base: "./",
  plugins: [react()],
  build: {
    // Keep the CRA output directory so existing deploy steps still work.
    outDir: "build",
  },
  server: {
    port: 3000,
    open: false,
  },
});
