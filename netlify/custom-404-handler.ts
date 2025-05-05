// netlify/edge-functions/custom-404-handler.ts

// Importujemy tylko Context
import { Context } from "@netlify/edge-functions";

// Nie importujemy Request - jest globalny

export default async (request: Request, context: Context) => {
  // ^-- Używamy globalnego typu Request
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Proste sprawdzenie, czy ścieżka wygląda jak plik statyczny
  const looksLikeStaticFile =
    /\.[a-zA-Z0-9]+$/.test(pathname) && pathname !== "/";

  if (looksLikeStaticFile) {
    try {
      // Przepuść żądanie DALEJ
      const res = await context.next();

      // Jeśli Netlify zwrócił 404
      if (res.status === 404) {
        // Pobierz zawartość Twojego pliku 404.html
        const fourOhFourUrl = new URL("/404.html", url.origin);

        // Użyj standardowego, globalnego fetch
        const fourOhFourResponse = await fetch(fourOhFourUrl.toString()); // <-- POPRAWKA TUTAJ

        if (fourOhFourResponse.ok) {
          const fourOhFourBody = await fourOhFourResponse.text();
          // Zwróć zawartość 404.html z poprawnym statusem
          return new Response(fourOhFourBody, {
            // <-- Używamy globalnego typu Response
            status: 404,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        } else {
          console.error(
            "Failed to fetch custom 404 page:",
            fourOhFourResponse.status
          );
          return new Response("Not Found", { status: 404 }); // <-- Używamy globalnego typu Response
        }
      }
      // Zwróć oryginalną odpowiedź, jeśli plik został znaleziony
      return res;
    } catch (e) {
      console.error("Error in Edge Function processing static file:", e);
      try {
        // W razie błędu, spróbuj przepuścić żądanie dalej
        return await context.next();
      } catch (fallbackError) {
        console.error("Error in fallback context.next():", fallbackError);
        return new Response("Internal Server Error", { status: 500 }); // <-- Używamy globalnego typu Response
      }
    }
  }

  // Jeśli to nie wygląda jak plik statyczny, pozwól Netlify obsłużyć
  return await context.next();
};

// Konfiguracja Edge Function (opcjonalnie)
export const config = {
  // path: "/*" // Można też zdefiniować ścieżkę tutaj zamiast w netlify.toml
};
