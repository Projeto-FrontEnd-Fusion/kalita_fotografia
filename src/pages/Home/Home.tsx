
import underline from '../../assets/header-underline.svg'
import { Button } from '../../components/Button/button'
import img from '../../assets/Image.png'
import img1 from '../../assets/Image1.png'
import img2 from '../../assets/Image2.png'
import img3 from '../../assets/Image3.png'

const Home = () => {
  return (
    <section className="w-full h-svh bg-quaternary">
      <div className="max-w-[1440px] p-4 flex justify-center items-center m-auto">
        <div className="w-[413px] h-[120px] mt-32 flex flex-col gap-6 space-y-5 justify-center items-center relative">
          <h1 className="text-5xl font-homeKalita text-primary text-center">
             Registrando suas melhores memórias
          </h1>
          <div className='absolute bottom-5 left-[170px]'>
              <img src={underline} alt="Underline"/>
          </div>
          <Button />
        </div>
      </div>
      <div className='max-w-[1440px] m-auto mt-10 flex flex-row justify-between gap-4 overflow-hidden bg-quaternary'>
        <div>
          <img src={img} alt="" />
        </div>
        <div > 
          <img src={img3} alt="" />
        </div>
        <div className='flex flex-col gap-4'>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        </div>
      </div>
    </section>
  )
}
export default Home