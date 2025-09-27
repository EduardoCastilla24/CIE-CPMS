export interface Subcategoria {
  codigo: string;
  nombre: string;
  subcategorias: Subcategoria[];
}

export interface Categoria {
  codigo: string;
  nombre: string;
  subcategorias: Subcategoria[];
}

export interface Grupo {
  codigo: string;
  nombre: string;
  categorias: Categoria[];
}

export interface Capitulo {
  codigo: string;
  nombre: string;
  grupos: Grupo[];
}
