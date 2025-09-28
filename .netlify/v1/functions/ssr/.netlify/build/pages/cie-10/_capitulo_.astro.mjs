import { d as createComponent, e as createAstro, j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, k as renderTransition } from '../../chunks/astro/server_BPZWtxr3.mjs';
import 'kleur/colors';
import { d as data, $ as $$Layout } from '../../chunks/cie10_7prmD11e.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const capitulos = data;
  const capitulo = Astro2.params.capitulo ?? "";
  const selected = capitulos.find((c) => c.codigo === capitulo);
  const breadcrumbs = [
    { label: "CIE-10", href: "/cie-10" },
    { label: selected?.codigo || "Desconocido" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Cap\xEDtulo ${selected?.codigo || "Desconocido"} - CIE-10`, "heading": selected?.nombre || "Cap\xEDtulo no encontrado", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 flex flex-col gap-6" data-filter="true"> ${selected ? selected.grupos.map((grupo) => renderTemplate`<article data-item> <a class="block"${addAttribute(`/cie-10/${encodeURIComponent(capitulo)}/${encodeURIComponent(grupo.codigo)}`, "href")}> <div class="p-6 border border-gray-300 rounded-xl hover:bg-gray-100 transition"> <h2 class="text-xl font-semibold">${grupo.codigo}</h2> <p class="text-gray-600 text-sm"${addAttribute(renderTransition($$result2, "kshonpc4", "", `title_${grupo.nombre}`), "data-astro-transition-scope")}>${grupo.nombre}</p> </div> </a> </article>`) : renderTemplate`<p class="text-red-600">Capítulo no encontrado</p>`} </section> ` })}`;
}, "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/index.astro", "self");

const $$file = "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/index.astro";
const $$url = "/cie-10/[capitulo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
