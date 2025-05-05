// netlify/edge-functions/custom-404-handler.ts
import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  console.log(`[Edge Function] Pathname: ${pathname}`); // <-- LOG 1

  const looksLikeStaticFile =
    /\.[a-zA-Z0-9]+$/.test(pathname) && pathname !== "/";
  console.log(`[Edge Function] looksLikeStaticFile: ${looksLikeStaticFile}`); // <-- LOG 2

  if (looksLikeStaticFile) {
    console.log(`[Edge Function] Processing as static file...`); // <-- LOG 3
    try {
      const res = await context.next();
      console.log(`[Edge Function] context.next() status: ${res.status}`); // <-- LOG 4

      if (res.status === 404) {
        console.log(
          `[Edge Function] context.next() returned 404. Fetching custom 404 page...`
        ); // <-- LOG 5
        const fourOhFourUrl = new URL("/error-page.html", url.origin);
        const fourOhFourResponse = await fetch(fourOhFourUrl.toString());

        if (fourOhFourResponse.ok) {
          console.log(
            `[Edge Function] Custom 404 fetched successfully. Returning custom 404.`
          ); // <-- LOG 6
          const fourOhFourBody = await fourOhFourResponse.text();
          return new Response(fourOhFourBody, {
            status: 404,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        } else {
          console.error(
            `[Edge Function] Failed to fetch custom 404 page: ${fourOhFourResponse.status}`
          ); // <-- LOG ERROR 1
          return new Response("Not Found", { status: 404 });
        }
      }
      console.log(
        `[Edge Function] context.next() returned status ${res.status}. Passing response through.`
      ); // <-- LOG 7
      return res;
    } catch (e) {
      console.error("[Edge Function] Error processing static file:", e); // <-- LOG ERROR 2
      try {
        return await context.next();
      } catch (fallbackError) {
        console.error(
          "[Edge Function] Error in fallback context.next():",
          fallbackError
        ); // <-- LOG ERROR 3
        return new Response("Internal Server Error", { status: 500 });
      }
    }
  }

  console.log(
    `[Edge Function] Pathname does not look like static file. Passing to next handler.`
  ); // <-- LOG 8
  return await context.next();
};

export const config = {};
