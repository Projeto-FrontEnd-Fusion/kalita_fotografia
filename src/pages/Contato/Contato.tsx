import ImgWhatsapp from "../../assets/WhatsApp.png";
import ImgGmail from "../../assets/Google.png";
import ImgInstagram from "../../assets/Instagram.png";

type ContatoProps = {
  img: string;
  alt: string;
  href: string;
  titulo: string;
  textButton: string;
};

const contatos: ContatoProps[] = [
  {
    img: ImgWhatsapp,
    alt: "Logo do Whatsapp",
    href: "https://wa.me/5562994469142?text=Ol%C3%A1%20Kalita,%20quero%20agendar%20uma%20sess%C3%A3o",
    titulo: "Whatsapp",
    textButton: "Entrar em contato"
  },
  {
    img: ImgGmail,
    alt: "Logo do Gmail",
    href: "mailto:kalitagoncalves@gmail.com",
    titulo: "E-mail",
    textButton: "Entrar em contato"
  },
  {
    img: ImgInstagram,
    alt: "Logo do Instagram",
    href: "https://www.instagram.com/kalitafotografias/#",
    titulo: "Instagram",
    textButton: "Entrar em contato"
  }
];

const Contato = () => {
  return (
    <>
      <title>Contato | Agende uma Sessão</title>
      <meta name="description" content="Entre em contato para agendar sua sessão de fotos com Kalita Fotografia. Atendimento via WhatsApp, E-mail e Instagram." />
      <meta name="keywords" content="fotografia, contato, agendamento, sessão de fotos, WhatsApp, e-mail, Instagram" />
      <meta name="author" content="Kalita Fotografia" />
      <meta property="og:title" content="Contato | Agende uma Sessão" />
      <meta property="og:description" content="Entre em contato para agendar sua sessão de fotos com Kalita Fotografia." />
      <meta property="og:image" content="URL_DA_IMAGEM_DESTAQUE" />
      <meta property="og:url" content="URL_DA_PÁGINA" />

      <main className="font-lato relative w-full xl:h-[calc(100vh-12rem)] h-full flex justify-center items-center flex-col m-auto xl:mt-20 lg:mt-20 md:mt-20 mt-10 mb-20">
        <div className="xl:flex hidden absolute w-full top-5 left-0 h-[63%] bg-[#D9D9D9]"></div>
        <div className="xl:w-7xl w-full flex flex-col justify-center xl:items-center lg:items-center md:items-center items-start gap-6">
          <h2 className="xl:hidden lg:hidden md:hidden flex justify-center xl:w-[556px] w-full text-6xl font-bold xl:text-[#545454] lg:text-[#545454] md:text-[#545454] text-(--color-primary) leading-16">
            Contato
          </h2>
          <h1 className="z-10 xl:w-[556px] lg:w-[556px] md:w-[556px] w-[328px] xl:text-6xl lg:text-6xl md:text-6xl text-[40px] font-bold xl:text-[#545454] lg:text-[#545454] md:text-[#545454] text-(--color-primary) xl:leading-16 leading-10 xl:ml-0 lg:ml-0 md:ml-0 ml-[14px]">
            Quer agendar uma sessão?
          </h1>
          <div className="xl:w-[556px] ld:w-[556px] md:w-[556px] w-full">
            <div className="xl:flex hidden text-3xl font-bold text-[#533E29] relative after:content-[''] after:w-[98px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[20px] after:translate-y-[-50%]"></div>
            <p className="xl:flex lg:flex md:flex hidden text-3xl font-bold text-[#242424] relative ml-[105px] mb-14">Entre em contato conosco</p>
            <p className="xl:hidden lg:hidden md:hidden flex text-[18px] font-medium text-(--color-primary) relative xl:ml-[105px] lg:ml-[105px] md:ml-[105px] ml-[16px] mb-14">Entre em contato</p>
          </div>
        </div>
        <div className="xl:w-[1440px] w-full flex xl:flex-row flex-col justify-center items-center xl:gap-5 lg:gap-5 md:gap-5 gap-10 xl:space-x-8 z-10">
          {contatos.map((contato: ContatoProps, index: number) => (
            <article key={index} className="font-lata flex items-center justify-center flex-col xl:w-[362px] lg:w-[362px] md:w-[362px] w-full xl:h-[310px] lg:h-[310px] md:h-[310px] h-[142px] xl:bg-tertiary lg:bg-tertiary md:bg-tertiary bg-transparent xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-2 m-0">
              <img src={contato.img} alt={contato.alt} />
              <h2 className="font-bold text-2xl text-primary">{contato.titulo}</h2>
              <span className="xl:flex lg:flex md:flex hidden text-[#533e2948] border-b border-[1px] w-[308px] mt-2.5"></span>
              <a
                href={contato.href}
                target="_blank"
                role="button"
                className="cursor-pointer flex justify-center items-center bg-secondary hover:bg-[#886a49] transition-all duration-300 w-44 h-11 border rounded-full border-none text-white"
              >
                {contato.textButton}
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Contato;