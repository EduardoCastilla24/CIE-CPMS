import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  if (context.url.pathname === "/") {
    return context.redirect("/cie-10");
  }
  return next();
};
