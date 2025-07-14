
import underline from '../../assets/header-underline.svg'
import { Button } from '../../components/Button/button'
import img from '../../assets/Image.png'
import img1 from '../../assets/Image3.png'
import foto from '../../assets/Image1.png'
import foto1 from '../../assets/Image2.png'


type imagemProps = {
  id: number;
  src: string;
  alt: string;
};

const imgHome: imagemProps[]  = [
  {id: 1, src: img, alt: 'Imagem destacada!' },
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
      



      {/* Desktop */}
      <div className="max-w-[1440px] p-4 hidden sm:flex justify-center items-center m-auto mt-28">
        <div className="w-[413px] h-[120px] mt-20 flex flex-col gap-6 space-y-5 justify-center items-center relative">
          <h1 className="text-5xl font-homeKalita text-primary text-center">
             Registrando suas melhores memórias
          </h1>
          <div className='absolute bottom-5 left-[170px]'>
              <img src={underline} alt="Underline"/>
          </div>
          <Button />
        </div>
      </div>
      <div className='max-w-[1340px] xl:max-w-[1440px] m-auto mt-10 p-2 hidden sm:flex bg-quaternary gap-4 '>
        <div className='flex flex-row justify-between gap-4 w-2/3'>
          {listaImg.map((image) => (
            <figure >
                <img key={image.id} src={image.src} alt={image.alt} />
                <figcaption className="sr-only">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className='flex flex-col justify-between gap-4 overflow-hidden flex-1'>
          {listaFoto.map((item) => (
            <figure >
              <img key={item.id} src={item.src} alt={item.alt} />
              <figcaption className="sr-only">{item.alt}</figcaption>
            </figure>
          ))}
        </div>
        
      </div>
    </section>
  )
}
export default Home