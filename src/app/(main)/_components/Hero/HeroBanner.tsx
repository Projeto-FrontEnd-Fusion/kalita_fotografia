"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slidePayload, SlidePayload } from "./content";

export const HeroBanner: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const slidesPerPageDesktop: number = 3;
  const slidesPerPageMobile: number = 1;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const slidesPerPage = isMobile ? slidesPerPageMobile : slidesPerPageDesktop;

  const totalSlides: number = slidePayload.length;
  const maxPage: number = Math.ceil(totalSlides / slidesPerPage) - 1;

  const nextPage = (): void => {
    setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  };

  const prevPage = (): void => {
    setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxPage]);

  return (
    <article className="relative w-full">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-full"
          animate={{ x: `${-currentPage * 100}%` }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
            mass: 0.6,
          }}
        >
          {slidePayload.map((slide: SlidePayload, index: number) => (
            <motion.figure
              key={index}
              className="
                relative w-full md:w-1/3 flex-shrink-0
                h-[260px] md:h-[440px]
              "
              initial={false}
            >
              <Image
                priority={index < slidesPerPage}
                quality={100}
                src={slide.source}
                fill
                alt={slide.alt}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
            </motion.figure>
          ))}
        </motion.div>

        <button
          onClick={prevPage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-8 
                     w-10 h-10 rounded-full bg-white/8 backdrop-blur-sm 
                     shadow-lg flex items-center justify-center
                      hover:scale-110 transition-all duration-300
                     active:scale-95 group"
          aria-label="Anterior"
        >
          <ChevronLeft
            className="w-6 h-6 text-white
                                group-hover:-translate-x-0.5 transition-transform"
          />
        </button>

        <button
          onClick={nextPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-8 
                     w-10 h-10 rounded-full bg-white/8 backdrop-blur-sm 
                     shadow-lg flex items-center justify-center
                      hover:scale-110 transition-all duration-300
                     active:scale-95 group"
          aria-label="Próximo"
        >
          <ChevronRight
            className="w-6 h-6 text-white 
                                 group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxPage + 1 }).map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentPage === index
                ? "w-8 bg-kalita-brown-medium"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Página ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
};
