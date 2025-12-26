"use client";
import { Title } from "@/app/shared/ui/headings/Title";
import type { PhotoInDb } from "@/domain/portfolio/entities/portfolio-entities";
import { useGetAllPhotos } from "@/domain/portfolio/hooks/useGetAllPhothos";
import { PhotoSkeleton } from "@/domain/portfolio/user/components/PhotoSkeleton";
import Image from "next/image";
import { useEffect, useState } from "react";
export function PortfolioPage() {
  const { isLoading, isError, data } = useGetAllPhotos();
  console.log(data)
  
  const [portfolioData, setPortfolioData] = useState<PhotoInDb[]>([])

  useEffect(() =>{

    if(data){
      setPortfolioData(data)
    }

  }, [data])

  // useEffect(() => {
  //   const handleContextMenu = (event: MouseEvent) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);



  if (isLoading) return <PhotoSkeleton />;
  if (!data || isError)
    return <span className="text-red-500">Falha ao Obter Imagens</span>;

  return (
    <section className="flex flex-col gap-20 justify-center items-center">
      <Title content={`Portifolio`} size="medium" align="center" />
      <section className="flex justify-center flex-wrap mx-auto ">
        {portfolioData.map(({ url, display_name }, index) => (
          <figure
            key={index}
            className="relative w-[405px] h-[353px] overflow-hidden"
          >
            <Image
              priority
              quality={100}
              src={url}
              fill
              alt={display_name}
              className="object-cover hover:scale-105 transform transition-transform duration-700 ease-in-out"
            />
          </figure>
        ))}
      </section>
    </section>
  );
}

export default PortfolioPage;
