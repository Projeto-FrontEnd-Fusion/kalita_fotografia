
import { Link } from "react-router-dom";
import newborn from "../../assets/newborn.png";
import pregnant from "../../assets/pregnant.png";
import wedding from "../../assets/wedding.png";
import christmas from "../../assets/christmas.png";


const Portfolio = () => {
  return (
    <section className="font-homeKalita bg-quaternary flex justify-cente flex-col items-center">
      <section className="relative flex flex-col justify-start items-center h-[170px]">
        <h1 className="z-10 text-6xl font-light text-primary mt-10">
          Portfolio
        </h1>
        <div className="absolute z-0 w-[422px] h-[45px] bg-fundo mt-11"></div>
      </section>

      <section className="relative w-full h-[863px] flex justify-center items-center">

        <article className="w-7xl h-[100%] flex justify-center gap-7.5 items-start z-30">

          <section className="flex relative bg-quaternary w-[264px] h-[500px] mt-[120px]">
            <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
              <div className="w-[34px] h-[2px] bg-primary"></div>
              <p className="text-3xl text-primary">nascimentos</p>
            </div>
            <figure>
              <img className="absolute top-[0px] mt-[43px] ml-[30px]" src={newborn} alt="Foto de sapatinhos de um recém nascido" />
              <figcaption className="sr-only">Foto de um par de sapatinhos de recém-nascido, do álbum de nascimentos.</figcaption>
            </figure>
            <Link className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo bottom-[-76px] right-[-55px] pt-1 z-10" to="#">
              Ver fotos
            </Link>
          </section>

          <section className="flex relative bg-quaternary w-[264px] h-[500px] mt-[68px]">
            <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
              <div className="w-[34px] h-[2px] bg-primary"></div>
              <p className="text-3xl text-primary">gestastante</p>
            </div>
            <figure>
              <img className="absolute top-[0px] mt-[43px] ml-[30px]" src={pregnant} alt="Foto de sapatinhos de um recém nascido" />
              <figcaption className="sr-only">Foto de um par de sapatinhos de recém-nascido, do álbum de nascimentos.</figcaption>
            </figure>
            <Link className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo bottom-[-76px] right-[-55px] pt-1 z-10" to="#">
              Ver fotos
            </Link>
          </section>

          <section className="flex relative bg-quaternary w-[264px] h-[500px] mt-[120px]">
            <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
              <div className="w-[34px] h-[2px] bg-primary"></div>
              <p className="text-3xl text-primary">ensaios em casa</p>
            </div>
            <figure>
              <img className="absolute top-[0px] mt-[43px] ml-[30px]" src={wedding} alt="Foto de sapatinhos de um recém nascido" />
              <figcaption className="sr-only">Foto de um par de sapatinhos de recém-nascido, do álbum de nascimentos.</figcaption>
            </figure>
            <Link className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo bottom-[-76px] right-[-55px] pt-1 z-10" to="#">
              Ver fotos
            </Link>
          </section>

          <section className="flex relative bg-quaternary w-[264px] h-[500px] mt-[68px]">
            <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
              <div className="w-[34px] h-[2px] bg-primary"></div>
              <p className="text-3xl text-primary">natal</p>
            </div>
            <figure>
              <img className="absolute top-[0px] mt-[43px] ml-[30px]" src={christmas} alt="Foto de sapatinhos de um recém nascido" />
              <figcaption className="sr-only">Foto de um par de sapatinhos de recém-nascido, do álbum de nascimentos.</figcaption>
            </figure>
            <Link className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo bottom-[-76px] right-[-55px] pt-1 z-10" to="#">
              Ver fotos
            </Link>
          </section>

          
          
        </article>

        <div className="absolute w-full h-[526px] top-0 bg-fundo"></div>
        
      </section>
    </section>
  )
}
export default Portfolio;
