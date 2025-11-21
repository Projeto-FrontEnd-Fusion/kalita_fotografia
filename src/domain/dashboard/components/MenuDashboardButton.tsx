'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { LuMessageSquareText } from "react-icons/lu";
import { PiHouseLight, PiPackage } from "react-icons/pi";
import { RiGalleryView2 } from "react-icons/ri";

export function MenuDashboardButton() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard/painel', label: 'Painel', icon: <RiGalleryView2 /> },
    { href: '/dashboard/gestao-portfolio', label: 'Gestão do Portfólio', icon: <GrGallery /> },
    { href: '/dashboard/fotos', label: 'Fotos da Home', icon: <PiHouseLight /> },
    { href: '/dashboard/gestao-pacotes', label: 'Gestão de Pacotes Sazonais', icon: <PiPackage /> },
    { href: '/dashboard/controle-feedbacks', label: 'Controle de feedbacks', icon: <LuMessageSquareText /> },
  ];

  function handleMenuButtonClick() {
    setOpen(!open);
  }

  return (
    <>
      {!open ? (
        <button>
          <Menu
            width={24}
            height={24}
            className='text-kalita-brown-dark cursor-pointer'
            onClick={handleMenuButtonClick}
          />
        </button>
      ) : (
        <button>
          <X
            width={24}
            height={24}
            className='text-kalita-brown-dark cursor-pointer'
            onClick={handleMenuButtonClick}
          />
        </button>
      )

      }

      <div className="absolute left-0 top-[140px] w-full overflow-hidden z-50">
        {open && (
          <div
            className="w-full bg-kalita-bg-light p-8
        transform transition-all duration-500 ease-out animate-slideDown 
        ">

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-kalita-brown-dark text-md flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  )
}