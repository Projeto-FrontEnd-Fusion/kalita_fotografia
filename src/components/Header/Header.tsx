import logo from "../../assets/logo.svg"
import lines from "../../assets/lineDetails.svg"
import { Nav } from "../Nav/nav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <header className="w-full h-28 bg-quaternary border-b border-primary/10">
      <div className="flex justify-center items-center px-6 max-w-[1440px] mx-auto relative">
        <img src={lines} alt="" className="absolute left-6"/>

        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <Nav />
      </div>
   </header>
  )
}
export default Header