
interface cardProps {
    img: string,
    alt: string,
    titulo: string,
    textButton: string,
    href: string,
  }
  
  //Componente de cards
  const Card = ({img, alt="", titulo="", textButton="", href=""}: cardProps ) => {
    return (
      <article className="font-lata flex items-center justify-center flex-col w-[362px] h-[310px] bg-tertiary space-y-6">
        <img src={img} alt={alt} />
        <h2 className="font-bold text-2xl text-primary">{titulo}</h2>
        <span className="text-[#533e2948] border-b border-[1px] w-[308px] mt-2.5"></span>
        <a
        href={href}
        target="_blank"
        role="button"
        className="cursor-pointer flex justify-center items-center bg-secondary hover:bg-[#886a49] transition-all duration-300 w-44 h-11 border rounded-full border-none text-white"
        >
          {textButton}
        </a>
      </article>
    )
  }
  
  export default Card
  