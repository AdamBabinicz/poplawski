import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Usunięto: import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// Usunięto logikę importu @replit/vite-plugin-cartographer

export default defineConfig({
  plugins: [
    react(), // Pozostawiono tylko plugin React
    // Usunięto: runtimeErrorOverlay(),
    // Usunięto warunkowe ładowanie cartographer
  ],
  resolve: {
    alias: {
      // Aliases pozostają bez zmian
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Ustawienie root i build pozostają bez zmian
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  // Możesz rozważyć dodanie opcji serwera deweloperskiego bezpośrednio tutaj,
  // jeśli nie potrzebujesz dynamicznego przekazywania 'server' z Expressa dla HMR.
  // Ale integracja w server/vite.ts jest bardziej elastyczna.
  // server: {
  //   // np. port: 3000 (jeśli chcesz uruchamiać Vite dev server osobno)
  // }
});
