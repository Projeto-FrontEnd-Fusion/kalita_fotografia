import { ArrowUp, Instagram, InstagramIcon } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Pacotes', href: '/pacotes' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <footer className="w-full bg-kalita-background-medium flex flex-col bg-kalita-bg-medium-2">
      <div className="flex flex-col items-center px-8 py-4 border-b border-[#917A71] md:flex-row md:justify-between md:p-8 h-80">
        <nav className="flex flex-col items-center gap-3 md:flex-row h-72 justify-between">
          {navLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm md:text-kalita-brown-medium"
            >
             <span className="text-kalita-bg-light-brown"> {item.name}</span>
            </Link>
          ))}
              <Link
              href={'l'}
              className="text-sm md:text-kalita-brown-medium"
            >
             <span className="text-kalita-bg-light-brown flex gap-2">
              <BsInstagram />
              Me Acompanhe no Instagram
              
              </span>
            </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Instagram className="text-kalita-brown-medium" width={18} height={18} />
          <Link
            href={'#'}
            className="text-sm text-kalita-brown-dark">
            Me acompanhe no Instagram
          </Link>
        </div>
      </div>


      <div className="flex flex-col items-center gap-4 px-8 py-4 md:flex-row-reverse md:justify-between md:p-8">
        <div className="flex gap-3">
          <Link href={'#'} className="text-kalita-brown-medium text-xs cursor-pointer">Voltar para o topo</Link>
          <ArrowUp className="text-kalita-brown-medium" width={14} height={14} />
        </div>

        <div>
          <p className="text-center text-sm text-kalita-brown-dark w-[300px] md:w-full">2025. Desenvolvido por: <span className="text-kalita-brown-medium font-semibold"> Comunidade Frontend Fusion</span></p>
        </div>
      </div>

    </footer>
  )
}