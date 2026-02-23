"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import type obrasData from "@/datos/obras.json";

type Categoria = (typeof obrasData.categorias)[number];
type Obra = (typeof obrasData.obras)[number];

type Props = {
  categorias: Categoria[];
  obras: Obra[];
};

export default function ObrasGrid({ categorias, obras }: Props) {
  const [selectedCategoriaId, setSelectedCategoriaId] =
    useState<string>("todos");

  const obrasFiltradas =
    selectedCategoriaId === "todos"
      ? obras
      : obras.filter((obra) => obra.categoriaId === selectedCategoriaId);

  return (
    <>
      <div className="sticky top-24 z-20 bg-white/95 py-3 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-poly-navy font-heading">
            FILTRAR POR
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategoriaId("todos")}
              className={`rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-poly-navy transition-colors ${
                selectedCategoriaId === "todos"
                  ? "bg-poly-orange text-white"
                  : "bg-transparent hover:bg-poly-navy/5"
              }`}
            >
              TODOS
            </button>
            {categorias.map((categoria) => {
              const isActive = selectedCategoriaId === categoria.id;

              return (
                <button
                  key={categoria.id}
                  type="button"
                  onClick={() => setSelectedCategoriaId(categoria.id)}
                  className={`rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-poly-navy transition-colors ${
                    isActive
                      ? "bg-poly-orange text-white"
                      : "bg-transparent hover:bg-poly-navy/5"
                  }`}
                >
                  {categoria.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-2 sm:gap-3 md:grid-cols-3">
        {obrasFiltradas.map((obra) => (
          <article
            key={obra.id}
            className="group relative overflow-hidden bg-black"
          >
            <div
              className="relative h-56 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('${obra.imagenPrincipal.src}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-poly-orange">
                  {obra.tipoTrabajo}
                </span>
                <h2 className="mt-2 text-base font-bold text-white">
                  {obra.titulo}
                </h2>
                <p className="mt-2 flex items-center gap-1 text-[11px] text-white/80">
                  <MapPin className="h-3 w-3 text-poly-orange" />
                  {obra.ubicacion}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
