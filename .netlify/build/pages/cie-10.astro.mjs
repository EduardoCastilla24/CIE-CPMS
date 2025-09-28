import { d as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, k as renderTransition } from '../chunks/astro/server_BPZWtxr3.mjs';
import 'kleur/colors';
import { $ as $$Layout, d as data } from '../chunks/cie10_7prmD11e.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const capitulos = data;
  const breadcrumbs = [
    { label: "CIE-10", href: "/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CIE-10 - Cap\xEDtulos", "heading": "Clasificaci\xF3n Internacional de Enfermedades (CIE-10)", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 flex flex-col gap-6" data-filter="true"> ${capitulos.map((capitulo) => renderTemplate`<article data-item> <a class="block"${addAttribute(`/cie-10/${encodeURIComponent(capitulo.codigo)}`, "href")}> <div class="p-6 border space-y-2 border-gray-300 rounded-xl hover:bg-gray-100 transition"> <h2 class="text-base md:text-xl font-semibold">${capitulo.codigo}</h2> <p class="text-gray-600 text-xs md:text-sm"${addAttribute(renderTransition($$result2, "u6aruovy", "", `title_${capitulo.nombre}`), "data-astro-transition-scope")}>${capitulo.nombre}</p> </div> </a> </article>`)} </section> ` })}`;
}, "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/index.astro", "self");

const $$file = "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/index.astro";
const $$url = "/cie-10";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
