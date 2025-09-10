import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  image: string;
  alt: string;
  path: string;
}

const PortfolioCard = ({ title, image, alt, path }: PortfolioCardProps) => {
  return (
    <article
      className={`xl:flex flex-shrink-0 relative xl:bg-quaternary bg-transparent xl:w-[264px] w-[264px] h-[500px] xl:nth-[even]:-mt-[-20px] xl:mt-18 mt-5 xl:mb-14 mb-0`}
    >
      <div className="absolute xl:top-[-18px] top-[-17px] xl:w-full w-[264px] flex xl:justify-evenly justify-center items-center xl:gap-0 gap-4">
        <div className="xl:flex hidden xl:w-[34px] lg:w-[34px] w-[17px] h-[2px] bg-primary" />
        <p className="xl:text-3xl text-4xl text-primary">{title}</p>
      </div>

      <figure className="w-full">
        <img
          className="w-full xl:h-[550px] h-[458px] absolute top-8 xl:mt-[9px] mt-0 xl:ml-[30px] ml-0 object-cover"
          src={image}
          alt={alt}
        />
      </figure>

      <Link
        className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo 
        bottom-[25px] left-1/2 -translate-x-1/2 
        xl:bottom-[-76px] xl:right-[-55px] xl:left-auto xl:translate-x-0 pt-1 z-10"
        to={path}
      >
        Ver fotos
      </Link>
    </article>
  );
};

export default PortfolioCard;
