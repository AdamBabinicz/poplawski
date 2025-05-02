import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import {
  createServer as createViteServer,
  createLogger,
  type ServerOptions, // Dobrą praktyką jest importowanie typów
} from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config"; // Upewnij się, że ścieżka jest poprawna
// Usunięto nanoid, ponieważ zakomentowany kod go używający został usunięty
// Jeśli zdecydujesz się przywrócić cache-busting, odkomentuj import:
// import { nanoid } from "nanoid";

const viteLogger = createLogger();

// Funkcja logowania pozostaje bez zmian
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Poprawiono allowedHosts na standardową wartość 'true'
  // Zdefiniowano typ dla lepszej weryfikacji
  const serverOptions: ServerOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true, // Zmieniono ["all"] na standardowe 'true'
  };

  const vite = await createViteServer({
    ...viteConfig, // Łączenie z konfiguracją z vite.config.ts
    configFile: false, // Nie ładuj ponownie pliku konfiguracyjnego
    customLogger: {
      // Niestandardowy logger
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1); // Zakończ proces przy błędzie Vite
      },
    },
    server: serverOptions, // Przekazanie opcji serwera
    appType: "custom", // Typ aplikacji dla integracji z Express
  });

  // Użycie middleware Vite
  app.use(vite.middlewares);

  // Middleware do serwowania HTML
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Ścieżka do szablonu HTML klienta
      const clientTemplate = path.resolve(
        import.meta.dirname, // Pamiętaj o wymaganiach ES Modules lub zastąp __dirname
        "..",
        "client",
        "index.html"
      );

      // Odczyt szablonu HTML
      const template = await fs.promises.readFile(clientTemplate, "utf-8");

      // Usunięto zakomentowany blok template.replace
      // Jeśli potrzebujesz cache-bustingu dla main.tsx w trybie dev,
      // możesz przywrócić ten kod:
      // const templateWithCacheBust = template.replace(
      //   `src="/src/main.tsx"`,
      //   `src="/src/main.tsx?v=${nanoid()}`
      // );
      // const page = await vite.transformIndexHtml(url, templateWithCacheBust);

      // Transformacja HTML przez Vite (bez modyfikacji cache-busting)
      const page = await vite.transformIndexHtml(url, template);

      // Wysłanie przetworzonego HTML
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      // Obsługa błędów
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// Funkcja serwowania plików statycznych (dla produkcji) pozostaje bez zmian
export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public"); // Dostosuj ścieżkę, jeśli build trafia gdzie indziej

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
