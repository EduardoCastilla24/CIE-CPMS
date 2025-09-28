// src/components/Tree.tsx
import { useState, useEffect } from "react";

interface Nodo {
    codigo: string;
    nombre: string;
    grupos?: Nodo[];
    categorias?: Nodo[];
    subcategorias?: Nodo[];
}

interface TreeProps {
    data: Nodo[];
    level?: number;
    filter?: string;
}

export default function Tree({ data, level = 0, filter = "" }: TreeProps) {
    const filteredData = data.filter((item) => matches(item, filter));

    if (filteredData.length === 0) {
        return (
            <p className="text-gray-500 italic mt-3 md:mt-6 w-full text-xs md:text-sm text-center">
                No se encontraron resultados
            </p>
        );
    }

    return (
        <div className="space-y-2 w-full">
            {filteredData.map((item) => (
                <TreeNode
                    key={item.codigo}
                    item={item}
                    level={level}
                    filter={filter}
                />
            ))}
        </div>
    );
}


function TreeNode({
    item,
    level,
    filter = "",
}: {
    item: Nodo;
    level: number;
    filter?: string;
}) {
    const [expanded, setExpanded] = useState(false);
    const children = item.grupos || item.categorias || item.subcategorias || [];

    // Saber si debe estar forzosamente expandido por el filtro
    const shouldExpand = filter && matches(item, filter) && children.length > 0;

    useEffect(() => {
        if (shouldExpand) {
            setExpanded(true);
        } else if (!filter) {
            setExpanded(false); // reset al limpiar filtro
        }
    }, [filter]);

    return (
        <div className={`ml-${level * 4} w-full rounded-lg my-3 md:my-6 mb-6`}>
            <div
                className="p-4 md:p-6 bg-white shadow rounded-lg cursor-pointer flex items-center justify-between hover:bg-gray-50 border"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex flex-col gap-1 w-11/12">
                    <span className="font-semibold text-base md:text-xl">{item.codigo}</span>{" "}
                    <span className="text-xs md:text-sm text-gray-600 text-wrap">{item.nombre}</span>
                </div>
                {children.length > 0 && (
                    <span className="text-sm text-gray-500">
                        {expanded ? "▲" : "▼"}
                    </span>
                )}
            </div>

            {expanded && children.length > 0 && (
                <div className="mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <Tree data={children} level={level + 1} filter={filter} />
                </div>
            )}
        </div>
    );
}

function matches(item: Nodo, query: string): boolean {
    if (!query) return true;
    if (
        (item.codigo + " " + item.nombre)
            .toLowerCase()
            .includes(query.toLowerCase())
    ) {
        return true;
    }
    const children = item.grupos || item.categorias || item.subcategorias || [];
    return children.some((child) => matches(child, query));
}
