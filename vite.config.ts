// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy"; // <-- IMPORT

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      // <-- KONFIGURACJA PLUGINU
      targets: [
        {
          // Kopiuj z client/public/error-page.html
          src: path.resolve(
            import.meta.dirname,
            "client/public",
            "error-page.html"
          ),
          // Do głównego katalogu wyjściowego (dist)
          dest: ".", // '.' oznacza outDir (dist)
        },
        {
          // Opcjonalnie: Skopiuj też jako 404.html dla standardowej obsługi
          src: path.resolve(
            import.meta.dirname,
            "client/public",
            "error-page.html"
          ),
          dest: ".",
          rename: "404.html", // Zmień nazwę kopii na 404.html
        },
        // Możesz tu dodać więcej celów, jeśli potrzebujesz
      ],
    }),
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
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true, // Zostawiamy true, plugin działa później
  },
});
