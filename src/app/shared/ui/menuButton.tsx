'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuButton() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Pacotes', href: '/pacotes' },
    { name: 'Sobre', href: '/sobre' },
  ]

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
            className='text-kalita-brown-dark'
            onClick={handleMenuButtonClick}
          />
        </button>
      ) : (
        <button>
          <X
            width={24}
            height={24}
            className='text-kalita-brown-dark'
            onClick={handleMenuButtonClick}
          />
        </button>
      )

      }

      <div className="absolute left-0 top-[140px] w-full overflow-hidden z-50">
        {open && (
          <div
            className="w-full bg-kalita-background-light p-8
        transform transition-all duration-500 ease-out animate-slideDown 
        ">

            <nav className="flex flex-col justify-center items-center gap-6">
              {navLinks.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-kalita-brown-dark text-md"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link href={'/login'}>
              <button
                className='w-full mt-6 border border-kalita-brown-medium text-kalita-brown-medium text-sm px-8 py-4 rounded-md cursor-pointer'
              >
                Entrar
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}