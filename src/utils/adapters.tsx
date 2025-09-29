import type { Nodo } from "@/components/Tree.tsx";

// -------------------
// Tipos CIE-10
// -------------------
interface Cie10Subcategoria {
  codigo: string;
  nombre: string;
  subcategorias?: Cie10Subcategoria[];
}

interface Cie10Categoria {
  codigo: string;
  nombre: string;
  subcategorias?: Cie10Subcategoria[];
}

interface Cie10Grupo {
  codigo: string;
  nombre: string;
  categorias?: Cie10Categoria[];
}

interface Cie10Capitulo {
  codigo: string;
  nombre: string;
  grupos?: Cie10Grupo[];
}

// -------------------
// Tipos CPMS
// -------------------
interface CpmsProcedimiento {
  codigo: string;
  nombre: string;
}

interface CpmsSubseccion {
  codigo_subseccion: string;
  nombre_subseccion: string;
  procedimientos?: CpmsProcedimiento[];
}

interface CpmsSeccion {
  codigo_seccion: string;
  nombre_seccion: string;
  subsecciones?: CpmsSubseccion[];
}

interface CpmsGrupo {
  codigo_grupo: string;
  nombre_grupo: string;
  secciones?: CpmsSeccion[];
}

// -------------------
// Adaptadores
// -------------------

// Para CIE-10
export function adaptCie10(data: Cie10Capitulo[]): Nodo[] {
  return data.map((cap) => ({
    codigo: cap.codigo,
    nombre: cap.nombre,
    children: cap.grupos?.map((g) => ({
      codigo: g.codigo,
      nombre: g.nombre,
      children: g.categorias?.map((c) => ({
        codigo: c.codigo,
        nombre: c.nombre,
        children: c.subcategorias?.map((s) => ({
          codigo: s.codigo,
          nombre: s.nombre,
          children: s.subcategorias?.map((ss) => ({
            codigo: ss.codigo,
            nombre: ss.nombre,
            children: [],
          })),
        })),
      })),
    })),
  }));
}

// Para CPMS
export function adaptCpms(data: CpmsGrupo[]): Nodo[] {
  return data.map((grupo) => ({
    codigo: grupo.codigo_grupo,
    nombre: grupo.nombre_grupo,
    children: grupo.secciones?.map((s) => ({
      codigo: s.codigo_seccion,
      nombre: s.nombre_seccion,
      children: s.subsecciones?.map((ss) => ({
        codigo: ss.codigo_subseccion,
        nombre: ss.nombre_subseccion,
        children: ss.procedimientos?.map((p) => ({
          codigo: p.codigo,
          nombre: p.nombre,
          children: [],
        })),
      })),
    })),
  }));
}
