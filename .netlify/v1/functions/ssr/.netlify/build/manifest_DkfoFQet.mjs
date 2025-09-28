import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { q as NOOP_MIDDLEWARE_HEADER, v as decodeKey } from './chunks/astro/server_BPZWtxr3.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/","cacheDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/node_modules/.astro/","outDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/dist/","srcDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/","publicDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/public/","buildClientDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/dist/","buildServerDir":"file:///C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jShtL1_B.css"}],"routeData":{"route":"/cie-10/[capitulo]/[grupo]/[categoria]","isIndex":true,"type":"page","pattern":"^\\/cie-10\\/([^/]+?)\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"cie-10","dynamic":false,"spread":false}],[{"content":"capitulo","dynamic":true,"spread":false}],[{"content":"grupo","dynamic":true,"spread":false}],[{"content":"categoria","dynamic":true,"spread":false}]],"params":["capitulo","grupo","categoria"],"component":"src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jShtL1_B.css"}],"routeData":{"route":"/cie-10/[capitulo]/[grupo]","isIndex":true,"type":"page","pattern":"^\\/cie-10\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"cie-10","dynamic":false,"spread":false}],[{"content":"capitulo","dynamic":true,"spread":false}],[{"content":"grupo","dynamic":true,"spread":false}]],"params":["capitulo","grupo"],"component":"src/pages/cie-10/[capitulo]/[grupo]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jShtL1_B.css"}],"routeData":{"route":"/cie-10/[capitulo]","isIndex":true,"type":"page","pattern":"^\\/cie-10\\/([^/]+?)\\/?$","segments":[[{"content":"cie-10","dynamic":false,"spread":false}],[{"content":"capitulo","dynamic":true,"spread":false}]],"params":["capitulo"],"component":"src/pages/cie-10/[capitulo]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.jShtL1_B.css"}],"routeData":{"route":"/cie-10","isIndex":true,"type":"page","pattern":"^\\/cie-10\\/?$","segments":[[{"content":"cie-10","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cie-10/index.astro","pathname":"/cie-10","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cpms","isIndex":true,"type":"page","pattern":"^\\/cpms\\/?$","segments":[[{"content":"cpms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cpms/index.astro","pathname":"/cpms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/cie-10/[capitulo]/[grupo]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/cie-10/[capitulo]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/cie-10/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index@_@astro":"pages/cie-10/_capitulo_/_grupo_/_categoria_.astro.mjs","\u0000@astro-page:src/pages/cie-10/[capitulo]/[grupo]/index@_@astro":"pages/cie-10/_capitulo_/_grupo_.astro.mjs","\u0000@astro-page:src/pages/cie-10/[capitulo]/index@_@astro":"pages/cie-10/_capitulo_.astro.mjs","\u0000@astro-page:src/pages/cie-10/index@_@astro":"pages/cie-10.astro.mjs","\u0000@astro-page:src/pages/cpms/index@_@astro":"pages/cpms.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DkfoFQet.mjs","C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","@astrojs/react/client.js":"_astro/client.DL-_0xdV.js","C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.B3vRBseb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ibm-plex-sans-latin-wght-normal.IvpUvPa2.woff2","/_astro/ibm-plex-sans-latin-ext-wght-normal.CIII54If.woff2","/_astro/ibm-plex-sans-cyrillic-wght-normal.BAAhND-U.woff2","/_astro/ibm-plex-sans-cyrillic-ext-wght-normal.d45eAU9y.woff2","/_astro/ibm-plex-sans-vietnamese-wght-normal.Dg1JeJN0.woff2","/_astro/ibm-plex-sans-greek-wght-normal.CmyJS8uq.woff2","/_astro/index.jShtL1_B.css","/favicon.svg","/assets/pattern.svg","/assets/logos/iso_DevCast.svg","/assets/logos/logo_DevCast.svg","/_astro/client.DL-_0xdV.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.B3vRBseb.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uzuWWmk2JdL55BcttHswFciqt1fBU1RY9cVzN7FyI9I=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
