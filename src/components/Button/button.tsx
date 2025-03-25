import { Link } from "react-router-dom";

export function Button(){
    return (
        <Link to='/portfolio'>
            <button 
              type="button"
              className='w-[140px] h-[42px] bg-fundo py-3 px-6 rounded-[48px] flex items-center justify-center text-primary text-md font-lato font-bold cursor-pointer hover:bg-secondary hover:text-tertiary transform transition duration-300'>
              Ver portfólio
            </button>
        </Link>
    )
}