import Card from "./components/Card"
import ImgWhatsapp from "../../assets/WhatsApp.png"
import ImgGmail from "../../assets/Google.png"
import ImgInstagram from "../../assets/Instagram.png"


const Contato = () => {
  return (
    <section className="font-lata relative w-full h-[calc(100vh-12rem)] flex justify-center items-center flex-col m-auto mt-20">

      {/* Esta div cria o background atrás do título */}
      <div className="absolute w-full top-5 left-0 h-[63%] bg-[#D9D9D9]"></div>

      <div className="w-7xl flex justify-center items-center flex-col gap-6">
        <h2 className="z-10 w-[556px] text-6xl font-bold text-[#545454]">
          Quer agendar uma sessão?
        </h2>
        
        <div className="w-[556px]">
          <div 
            className="text-3xl font-bold text-[#533E29] relative after:content-[''] after:w-[98px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[20px] after:translate-y-[-50%]">
          </div>

          <p className="text-3xl font-bold text-[#242424] relative ml-[105px] mb-14">Entre em contato conosco</p>
        </div>
      </div>

      <div className="w-[1440px] flex justify-evenly items-center z-10">
          <Card img={ImgWhatsapp} alt="Logo do Whatsapp" href="https://wa.me/5562994469142?text=Olá%20Kalita,%20quero%20agendar%20uma%20sessão" titulo="Whatsapp" textButton="Entrar em contato"/>
          <Card img={ImgGmail} alt="Logo do Gmail" href="mailto:kalitagoncalves@gmail.com" titulo="E-mail" textButton="Entrar em contato"/>
          <Card img={ImgInstagram} alt="Logo do Instagram" href="https://www.instagram.com/kalitafotografias/#" titulo="Instagram" textButton="Entrar em contato"/>
      </div>
    </section>
  )
}
export default Contato