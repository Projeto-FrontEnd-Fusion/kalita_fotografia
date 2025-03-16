import HomeImg from '../../assets/Picture-about-me.svg'

const Sobre = () => {
  return (

    <main>
      <div className='flex justify-center'>
        <div className='bg-[#E5DACE] w-full h-[calc(100vh-180px)] max-w-7xl mx-8'>
          <div className='h-full flex items-center px-3 xl:mx-8'>

            <div className='overflow-visible'>
              <img 
                src={HomeImg}
                alt='imagem da kalita' 
                className='-translate-x-6 lg:-translate-x-20 xl:-translate-x-35'
              />
            </div>

            <div>
              <h1 className='text-primary text-4xl sm:text-5xl xl:text-7xl font-homeKalita'>Kalita</h1>
              <p className='font-bold text-base xl:text-2xl mt-6 mb-[42px]'>Sorem ipsum dolor sit amet, consectetur.</p>

              <button 
                className='bg-secondary py-2 px-3 sm:py-3 sm:px-6 rounded-[48px] text-tertiary font-bold text-base cursor-pointer hover:opacity-80 active:opacity-60'>
                  Vamos conversar
              </button>
            </div>
          
          </div>

          
        </div>
      </div>

    </main>
    
  )
}
export default Sobre