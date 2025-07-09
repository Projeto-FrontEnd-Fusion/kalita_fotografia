import { Link } from "react-router-dom";

export function Nav(){
    return (
      <nav className="absolute right-6">
          <ul className="flex gap-3 uppercase">
            <Link to="/sobre">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Sobre</li>
            </Link>
            <Link to="/contato">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Contato</li>
            </Link>
          </ul>
        </nav>
    )
}