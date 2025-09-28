import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DkfoFQet.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cie-10/_capitulo_/_grupo_/_categoria_.astro.mjs');
const _page2 = () => import('./pages/cie-10/_capitulo_/_grupo_.astro.mjs');
const _page3 = () => import('./pages/cie-10/_capitulo_.astro.mjs');
const _page4 = () => import('./pages/cie-10.astro.mjs');
const _page5 = () => import('./pages/cpms.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index.astro", _page1],
    ["src/pages/cie-10/[capitulo]/[grupo]/index.astro", _page2],
    ["src/pages/cie-10/[capitulo]/index.astro", _page3],
    ["src/pages/cie-10/index.astro", _page4],
    ["src/pages/cpms/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "95f6d909-0bd2-4ab4-96b3-490ee476c9ce"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
