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
            className='text-kalita-brown-dark cursor-pointer hover:text-kalita-brown-medium'
            onClick={handleMenuButtonClick}
          />
        </button>
      ) : (
        <button>
          <X
            width={24}
            height={24}
            className='text-kalita-brown-dark cursor-pointer hover:text-kalita-brown-medium'
            onClick={handleMenuButtonClick}
          />
        </button>
      )

      }

      <div className="absolute left-0 top-[140px] w-full overflow-hidden z-50">
        {open && (
          <div
            className="w-full bg-kalita-bg-light p-8
        transform transition-all duration-500 ease-out animate-slideDown bg-kalita-bg-medium-2 h-screen
        ">

            <nav className="flex flex-col justify-center items-center gap-10 h-64 ">
              {navLinks.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative text-md text-kalita-brown-medium hover:text-kalita-brown-dark 
                  after:absolute after:w-24 after:border-b-2 after:border-kalita-brown-medium after:inset-0 after:transform after:left-1/2 after:-translate-x-1/2 after:-bottom-2
                  after:opacity-0 hover:after:opacity-100 after:transition-opacity
                    `}
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