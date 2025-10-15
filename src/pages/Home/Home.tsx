
import underline from '../../assets/header-underline.svg'
import { Button } from '../../components/Button/button'
import img from '../../assets/Image.png'
import img1 from '../../assets/Image3.png'
import foto from '../../assets/Image1.png'
import foto1 from '../../assets/Image2.png'


type imgProps = {
  id: number;
  src: string;
  alt: string;
};

const imgHome: imgProps[]  = [
  {id: 1, src: img, alt: 'Homem com criança no colo' },
  {id: 2, src: img1, alt: 'Imagem destacada!'},
  {id: 3, src: foto, alt: 'Imagem destacada!'},
  {id: 4, src: foto1, alt: 'Imagem destacada!'},
]

const Home = () => {

  const imagensImg = [img, img1];
  const imagensFoto = [foto, foto1];

  const listaImg = imgHome.filter(item => imagensImg.includes(item.src));
  const listaFoto = imgHome.filter(item => imagensFoto.includes(item.src));
  return (
    <section className="w-full h-svh bg-quaternary">

      {/* Mobile */}
      <div className='sm:hidden flex flex-col items-center justify-center gap-4'>
        <div className="w-full h-[120px] px-4 mt-16 flex flex-col gap-6 space-y-5 justify-center items-center relative">
          <h1 className="text-5xl font-homeKalita text-primary text-center">
             Registrando suas melhores memórias
          </h1>
          <Button path='/contato' variant='secondary' size='mobile'>Entre em Contato</Button>
        </div>
         <div className='w-full m-auto mt-14 p-4 bg-quaternary gap-4 '>
            <div className='flex flex-col items-center justify-between gap-4'>
              {imgHome.map((image) => (
                <figure key={image.id}>
                    <img src={image.src} alt={image.alt} />
                    <figcaption className="sr-only">{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          <div className='mt-8 mb-8'>
            <Button path='/portfolio' size='mobile'>Ver Portfólio</Button>
          </div>
        </div>
      </div>
     

      {/* Desktop */}
      <div className="max-w-[1440px] p-4 hidden sm:flex justify-center items-center m-auto">
        <div className="w-[413px] h-[120px] mt-20 flex flex-col gap-6 space-y-5 justify-center items-center relative">
          <h1 className="text-5xl font-homeKalita text-primary text-center">
             Registrando suas melhores memórias
          </h1>
          <div className='absolute bottom-5 left-[170px]'>
              <img src={underline} alt="Underline"/>
          </div>
          <Button path='/portfolio'>Ver Portfólio</Button>
        </div>
      </div>
      <div className='max-w-[1340px] xl:max-w-[1440px] m-auto mt-10 p-2 hidden sm:flex bg-quaternary gap-4 '>
        <div className='flex flex-row justify-between gap-4 w-2/3'>
          {listaImg.map((image) => (
            <figure key={image.id}>
                <img src={image.src} alt={image.alt} />
                <figcaption className="sr-only">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className='flex flex-col justify-between overflow-hidden flex-1'>
          {listaFoto.map((item) => (
            <figure key={item.id}>
              <img src={item.src} alt={item.alt} />
              <figcaption className="sr-only">{item.alt}</figcaption>
            </figure>
          ))}
        </div>
        
      </div>
    </section>
  )
}
export default Home