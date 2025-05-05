// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Usuwamy import pluginu: import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    // Usuwamy konfigurację pluginu viteStaticCopy({...})
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // Katalog wyjściowy pozostaje 'dist'
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
