// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, A11y } from "swiper/modules";

import newborn from "../../assets/newborn.webp";
import pregnant from "../../assets/pregnant_.webp";
import wedding from "../../assets/wedding_.webp";
import christmas from "../../assets/christmas.webp";
import PortfolioCard from "./_components/PortfolioCardProps/PortfolioCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { EffectFade } from "swiper/modules";

// Import do tipo Swiper para o TypeScript
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// Lista de cards do portfólio com imagens, textos e margens personalizadas

const portfolioItems = [
  {
    title: "gestantes",
    image: pregnant,
    alt: "Foto de uma mulher grávida em ensaio fotográfico",
    path: "#",
  },
  {
    title: "nascimentos",
    image: newborn,
    alt: "Foto de um par de sapatinhos de recém-nascido",
    path: "#",
  },
  {
    title: "ensaios em casa",
    image: wedding,
    alt: "Foto de um parto",
    path: "#",
  },
  {
    title: "natal",
    image: christmas,
    alt: "Foto temática de Natal",
    path: "#",
  },
];

const Portfolio = () => {
  // Estados para controla a manipulação dos botões
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  return (
    <>
      <title>Portfólio | Ensaio Fotográfico Profissional</title>
      <meta
        name="description"
        content="Confira os ensaios fotográficos realizados por Kalita Fotografia. Especializada em newborn, gestantes, partos e fotos temáticas como o Natal."
      />
      <meta
        name="keywords"
        content="fotografia, portfólio, ensaio fotográfico, newborn, gestantes, partos, fotos natalinas"
      />
      <meta name="author" content="Kalita Fotografia" />

      <main className="font-homeKalita flex justify-center flex-col items-center h-full">
        <section className="relative flex flex-col justify-start items-center xl:h-[170px] h-0 xl:mb-0 mb-15">
          <h1 className="xl:font-homeKalita font-lato z-10 xl:text-6xl text-[40px] xl:font-light font-semibold text-primary xl:mt-10 mt-5">
            Portfólio
          </h1>
          <div className="hidden xl:flex absolute z-0 w-[422px] h-[45px] bg-fundo mt-11" />
        </section>

        <section className="relative w-full xl:h-[863px] h-full mb-10 hidden md:flex justify-center items-center">
          <div
            className="w-full xl:max-xl:w-2xl h-full flex flex-wrap xl:justify-center justify-center xl:items-start items-center xl:gap-7.5 gap-9.5 z-30 xl:mt-16 mt-10"
          >
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} {...item} />
            ))}
          </div>
          <div className="hidden xl:flex none absolute w-full h-[526px] top-0 bg-fundo" />
        </section>

        <section className="relative md:hidden flex justify-center items-center mt-5 md:mt-0">
          <Swiper
            modules={[Pagination, Navigation, EffectFade]}
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            initialSlide={0}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="w-[264px] h-[550px]"
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            navigation={false}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.title}>
                <PortfolioCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-button absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 p-2 cursor-pointer text-primary"
            onClick={() => swiperInstance?.slidePrev()}
            disabled={isBeginning}
          >
             <FaChevronLeft className={isBeginning ? "opacity-50" : ""} />
          </button>

          <button className="next-button absolute right-[-40px] top-1/2 -translate-y-1/2 z-2 p-2 cursor-pointer text-primary"
            onClick={() => swiperInstance?.slideNext()}
            disabled={isEnd}
          >
            <FaChevronRight className={isEnd ? "opacity-50" : ""} />
          </button>
        </section>
      </main>
    </>
  );
};

export default Portfolio;