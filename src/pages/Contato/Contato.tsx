import Card from "./components/Card";
import ImgWhatsapp from "../../assets/WhatsApp.png";
import ImgGmail from "../../assets/Google.png";
import ImgInstagram from "../../assets/Instagram.png";

const Contato = () => {
  return (
    <>
      <head>
          <title>Contato | Agende uma Sessão</title>
          <meta name="description" content="Entre em contato para agendar sua sessão de fotos com Kalita Fotografia. Atendimento via WhatsApp, E-mail e Instagram." />
          <meta name="keywords" content="fotografia, contato, agendamento, sessão de fotos, WhatsApp, e-mail, Instagram" />
          <meta name="author" content="Kalita Fotografia" />
          <meta property="og:title" content="Contato | Agende uma Sessão" />
          <meta property="og:description" content="Entre em contato para agendar sua sessão de fotos com Kalita Fotografia." />
          <meta property="og:image" content="URL_DA_IMAGEM_DESTAQUE" />
          <meta property="og:url" content="URL_DA_PÁGINA" />
      </head>
      <section className="font-lata relative w-full h-[calc(100vh-12rem)] flex justify-center items-center flex-col m-auto mt-20">

        <div className="absolute w-full top-5 left-0 h-[63%] bg-[#D9D9D9]"></div>

        <div className="w-7xl flex justify-center items-center flex-col gap-6">
          <h1 className="z-10 w-[556px] text-7xl font-bold text-purple-500">
            Contato
          </h1>
          <div className="w-[556px]">
            <div 
              className="text-3xl font-bold text-[#533E29] relative after:content-[''] after:w-[98px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[20px] after:translate-y-[-50%]">
            </div>
            <p className="text-3xl font-bold text-[#242424] relative ml-[105px] mb-14">Entre em contato conosco</p>
          </div>
        </div>

        <div className="w-[1440px] flex justify-center items-center space-x-8 z-10">
            <Card img={ImgWhatsapp} alt="Logo do Whatsapp" href="https://wa.me/5562994469142?text=Ol%C3%A1%20Kalita,%20quero%20agendar%20uma%20sess%C3%A3o" titulo="Whatsapp" textButton="Entrar em contato"/>
            <Card img={ImgGmail} alt="Logo do Gmail" href="mailto:kalitagoncalves@gmail.com" titulo="E-mail" textButton="Entrar em contato"/>
            <Card img={ImgInstagram} alt="Logo do Instagram" href="https://www.instagram.com/kalitafotografias/#" titulo="Instagram" textButton="Entrar em contato"/>
        </div>
      </section>
    </>
  );
};

export default Contato;
