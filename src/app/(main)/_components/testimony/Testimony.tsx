"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideTestimony {
  alt: string;
  source: string;
  mobile: boolean;
  client: {
    name: string;
    description: string;
  };
}

export const slideTestimony: SlideTestimony[] = [
  {
    alt: "Família em sessão de ensaio newborn",
    source: "https://images.pexels.com/photos/27175652/pexels-photo-27175652.jpeg",
    mobile: false,
    client: {
      name: "Carlos Eduardo e Fernanda",
      description:
        "Cada detalhe foi capturado com carinho e paciência. Fotos que contam nossa história com delicadeza.",
    },
  },
  {
    alt: "Mãe e filha em sessão de maternidade",
    source: "https://images.pexels.com/photos/15427734/pexels-photo-15427734.jpeg",
    mobile: true,
    client: {
      name: "Roberta Silva",
      description:
        "Um registro sensível da conexão vivida na gestação. Fotos feitas para guardar para sempre.",
    },
  },
];

export const Testimony: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slidesPerPageDesktop = 1;
  const slidesPerPageMobile = 1;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slidesPerPage = isMobile
    ? slidesPerPageMobile
    : slidesPerPageDesktop;

  const totalSlides = slideTestimony.length;

  const maxPage = useMemo(
    () => Math.ceil(totalSlides / slidesPerPage) - 1,
    [totalSlides, slidesPerPage]
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));
  };

  return (
    <article className="relative w-full">
         
      <div className="relative overflow-hidden">
         <div className="absolute top-8 text-[14px] px-4 text-white z-20 pr-12 font-semibold md:left-12 md:text-lg">
                Depoimentos que revelam o lado mais bonito do meu trabalho: A Conexão.
              </div>
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
          {slideTestimony.map((slide, index) => (
            <motion.figure
              key={index}
              className="relative w-full flex-shrink-0 h-[260px] md:h-[500px]"
            >
             
              <Image
                priority={index === currentPage}
                quality={100}
                src={slide.source}
                fill
                alt={slide.alt}
                className="object-cover object-top"
                sizes="100vw"
              />
           
              <figcaption className="absolute  bottom-0 w-full px-4 h-32 md:h-64 flex items-end bg-gradient-to-t from-black to-transparent">
                <div className="w-8/12 py-4 md:py-0 md:px-12 z-10">
                  <p className="text-[14px] text-white leading-4 md:leading-8 font-medium md:text-2xl md:absolute md:top-4/12 md:w-1/2">
                    <strong className="">{slide.client.name}</strong>
                    <br />
                    <span className="italic">
                      “{slide.client.description}”
                    </span>
                  </p>
                </div>
              </figcaption>

              <div className="absolute inset-0 bg-black/20 md:hover-bg-black/0 hover:bg-black/10 transition-colors duration-300" />
            </motion.figure>
          ))}
        </motion.div>

        {/* Botão Anterior */}
        <button
          onClick={prevPage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                     shadow-lg flex items-center justify-center
                     hover:scale-110 transition-all duration-300
                     active:scale-95 group"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={nextPage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                     shadow-lg flex items-center justify-center
                     hover:scale-110 transition-all duration-300
                     active:scale-95 group"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxPage + 1 }).map((_, index) => (
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
