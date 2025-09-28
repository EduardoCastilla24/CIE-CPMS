import { d as createComponent, e as createAstro, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_BPZWtxr3.mjs';
import 'kleur/colors';
import { d as data, $ as $$Layout } from '../../../../chunks/cie10_7prmD11e.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { capitulo = "", grupo = "", categoria = "" } = Astro2.params;
  const capitulos = data;
  const selectedCapitulo = capitulos.find((c) => c.codigo === capitulo);
  const selectedGrupo = selectedCapitulo?.grupos.find((g) => g.codigo === grupo);
  const selectedCategoria = selectedGrupo?.categorias.find((cat) => cat.codigo === categoria);
  const breadcrumbs = [
    { label: "CIE-10", href: "/cie-10" },
    { label: selectedCapitulo?.codigo || "Cap\xEDtulo desconocido", href: `/cie-10/${encodeURIComponent(capitulo)}` },
    { label: selectedGrupo?.codigo || "Grupo desconocido", href: `/cie-10/${encodeURIComponent(capitulo)}/${encodeURIComponent(grupo)}` },
    { label: selectedCategoria?.codigo || "Categor\xEDa desconocida" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${selectedCategoria?.codigo || "Categor\xEDa desconocida"} - ${selectedGrupo?.codigo || ""}`, "heading": selectedCategoria?.nombre || "Categor\xEDa no encontrada", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-8 flex flex-col gap-6" data-filter="true"> ${selectedCategoria ? selectedCategoria.subcategorias.length > 0 ? selectedCategoria.subcategorias.map((sub) => renderTemplate`<article data-item> <div class="p-6 border border-gray-300 rounded-xl hover:bg-gray-100 transition"> <h2 class="text-xl font-semibold">${sub.codigo}</h2> <p class="text-gray-600 text-sm">${sub.nombre}</p> </div> </article>`) : renderTemplate`<p class="text-gray-600">Esta categoría no tiene subcategorías.</p>` : renderTemplate`<p class="text-red-600">Categoría no encontrada en el grupo</p>`} </section> ` })}`;
}, "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index.astro", void 0);

const $$file = "C:/Users/jeffe/Documents/Proyectos/Astro/CIE-CPMS/src/pages/cie-10/[capitulo]/[grupo]/[categoria]/index.astro";
const $$url = "/cie-10/[capitulo]/[grupo]/[categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
