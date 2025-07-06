import { Link } from "react-router-dom";
import HomeImg from "../../assets/Picture-about-me.svg";
const Sobre = () => {
  return (
    <section className='w-full md:h-[calc(100vh-180px)] py-10 md:py-0 bg-quaternary relative md:bg-white
       before:content[""] before:hidden md:before:block before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[85%] before:h-full md:before:bg-[#E5DACE] before:absolute before:z-0
      '>
      <h1 className='text-primary text-[64px] font-bold font-lata leading-[110%] text-center mb-2 md:hidden'>Sobre mim</h1>
      <div className='w-full h-full
        md:flex md:items-center md:max-w-[85%] md:mx-auto xl:gap-32'>
        <img
          src={HomeImg}
          alt='Foto da Kalita'
          className='w-full rounded-xl h-auto
            md:w-max md:overflow-visible md:relative md:flex-shrink-0 md:-translate-x-12
            '
        />

        <div className='p-4
          md:flex md:flex-col md:justify-center
          '>
          <h2 className='hidden md:block text-primary text-[64px] font-homeKalita mb-6 z-10'>Kalita</h2>

          <p
            className='text-base font-normal text-left text-[#242424] font-lata leading-[150%]
                md:font-bold md:text-2xl md:mb-[42px] z-10 md:hidden'
          >
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>

          <p className="z-10 xl:text-xl self-center text-[#242424] font-bold font-lata pr-3 max-md:hidden lg:text-lg">
            Sorem ipsum dolor sit amet, consectetur.
          </p>

          <Link
            to='/contato'
            className='bg-secondary py-3 px-6 rounded-[48px] z-10 text-tertiary font-bold font-lata text-base cursor-pointer hover:opacity-80 active:opacity-60 transition-all w-full block text-center mt-5 md:mt-[42px] md:max-w-fit md:mx-auto '>
            Entrar em contato
          </Link>
        </div>
      </div>
    </section >
  );
};
export default Sobre;