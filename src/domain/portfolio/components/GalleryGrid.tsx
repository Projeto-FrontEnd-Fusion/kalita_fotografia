"use client";

import { useGallery } from "../hooks/useGalleryProvider";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
import DropzonePortfolio from "./Dropzone";
import { useEffect, useState } from "react";

export default function GalleryGrid() {
  const { images, toggleSelect } = useGallery();
  console.log(images);

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <DropzonePortfolio />
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2 sm:grid-cols-3 md:grid-cols-3
        lg:grid-cols-3 xl:grid-cols-3
        gap-4 w-full mt-10
      "
    >
      {images.map((img) => {
        const isSelected = img.selected;

        const sizeTransform = (bytes: number): string | false => {
          if (!bytes) return false;
          const tomb = bytes / (1024 * 1024);
          if (tomb >= 5) return false;
          return `${tomb.toFixed(2)}MB`;
        };

        return (
          <div
            key={img.id}
            onClick={() => toggleSelect(img.id)}
            className={`
              group relative w-full aspect-square
              overflow-hidden rounded-md cursor-pointer 
              transition-all duration-150 

              ${
                isSelected
                  ? "ring-2 ring-kalita-brown-dark shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                  : "border border-kalita-bg-light-brown"
              }
            `}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSelect(img.id);
              }}
              aria-label={isSelected ? "Desmarcar imagem" : "Selecionar imagem"}
              className={`
                absolute top-2 left-2 z-20
                w-6 h-6 rounded-sm
                flex items-center justify-center
                ${
                  isSelected
                    ? "bg-white border border-kalita-brown-dark"
                    : "bg-white/95 border border-kalita-brown-light"
                }
                shadow-sm
              `}
            >
              {isSelected && (
                <GoCheck size={14} className="text-kalita-brown-dark" />
              )}
            </button>

            <Image
              src={img.preview}
              alt="preview"
              fill
              sizes="33vw"
              className="object-cover"
            />
            <figcaption
              className={`opacity-0 flex transition-colors 
              duration-300 text-[12px] group-hover:opacity-100 flex-col 
              justify-end pb-2 px-2 text-white bg-gradient-to-b to-black 
              from-transparent  absolute w-full h-20 left-1/2 bottom-0 
              -translate-x-1/2 ${
                !sizeTransform(img.files.size) && "opacity-100"
              }`}
            >
              <div> Tipo : {img.files.type.split("/")[1]}</div>
              <div>
                {" "}
                Tamanho :{" "}
                {!sizeTransform(img.files.size) ? (
                  <span className="bg-red-600 text-white px-2">
                    Não suportado
                  </span>
                ) : (
                  sizeTransform(img.files.size)
                )}{" "}
              </div>
            </figcaption>
          </div>
        );
      })}
    </div>
  );
}
