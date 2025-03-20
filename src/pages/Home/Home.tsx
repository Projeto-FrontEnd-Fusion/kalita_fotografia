
import { Link } from 'react-router-dom'
import underline from '../../assets/header-underline.svg'

const Home = () => {
  return (
    <section className="w-full h-[calc(100svh-114px)] bg-quaternary">
      <div className="max-w-[1440px] p-4 flex justify-center items-center m-auto">
        <div className="w-[413px] h-[120px] mt-32 flex flex-col gap-6 space-y-5 justify-center items-center relative">
          <h1 className="text-5xl font-homeKalita text-primary text-center">
             Registrando suas melhores memórias
          </h1>
          <div className='absolute bottom-5 left-[170px]'>
              <img src={underline} alt=""/>
          </div>
          <Link to='/portfolio'>
            <button 
              className='w-[140px] h-[42px] bg-fundo py-3 px-6 rounded-[48px] flex items-center justify-center text-primary text-md font-lato font-bold cursor-pointer hover:bg-secondary hover:text-tertiary transform transition duration-300'>
              Ver portfólio
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Home