import logo from "../../assets/logo.svg"
import { Nav } from "../Nav/nav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <header className="w-full h-28 bg-quaternary border-b border-primary/10 fixed top-0 z-50">
      <div className="flex justify-center items-center px-6 max-w-[1440px] mx-auto relative">
        <Link to='/'>
            <img src={logo} alt="logo" className="sm:w-full w-32"/>
        </Link>
        <Nav />
      </div>
   </header>
  )
}
export default Header