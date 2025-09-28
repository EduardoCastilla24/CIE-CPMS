import { d as createComponent, e as createAstro, j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, k as renderTransition } from '../../../chunks/astro/server_BPZWtxr3.mjs';
import 'kleur/colors';
import { d as data, $ as $$Layout } from '../../../chunks/cie10_7prmD11e.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { capitulo = "", grupo = "" } = Astro2.params;
  const capitulos = data;
  const selectedCapitulo = capitulos.find((c) => c.codigo === capitulo);
  const selectedGrupo = selectedCapitulo?.grupos.find((g) => g.codigo === grupo);
  const breadcrumbs = [
    { label: "CIE-10", href: "/cie-10" },
    { label: selectedCapitulo?.codigo || "Cap\xEDtulo desconocido", href: `/cie-10/${encodeURIComponent(capitulo)}` },
    { label: selectedGrupo?.codigo || "Grupo desconocido" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${selectedGrupo?.codigo || "Grupo desconocido"} - ${selectedCapitulo?.codigo || "CIE-10"}`, "heading": selectedGrupo?.nombre || "Grupo no encontrado", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 flex flex-col gap-6" data-filter="true"> ${selectedGrupo ? selectedGrupo.categorias.map((cat) => renderTemplate`<article data-item> <a class="block"${addAttribute(`/cie-10/${encodeURIComponent(capitulo)}/${encodeURIComponent(grupo)}/${encodeURIComponent(cat.codigo)}`, "href")}> <div class="p-6 border border-gray-300 rounded-xl hover:bg-gray-100 transition"> <h2 class="text-xl font-semibold">${cat.codigo}</h2> <p class="text-gray-600 text-sm"${addAttribute(renderTransition($$result2, "qwyber4i", "", `title_${cat.nombre}`), "data-astro-transition-scope")}>${cat.nombre}</p> </div> </a> </article>`) : renderTemplate`<p class="text-red-600">Grupo no encontrado en el capítulo</p>`} </section> ` })}`;
}, "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/index.astro", "self");

const $$file = "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/index.astro";
const $$url = "/cie-10/[capitulo]/[grupo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
