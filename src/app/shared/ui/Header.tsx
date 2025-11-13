import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { MenuButton } from './menuButton'


export function Header() {

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Pacotes', href: '/pacotes' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <header className='flex items-center justify-between px-6 py-4 bg-kalita-background-medium w-full h-[140px] z-10 '>
      <div className='flex items-center gap-7'>
        <Image
          src='/kalita-logo.svg'
          alt='Logo da kalita'
          width={120}
          height={120}
          priority
        />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-kalita-brown-medium text-md"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex items-center gap-6'>
        <Link href={'/contato'}>
          <Button>Fale comigo</Button>
        </Link>

        <Link href={'/login'} className='hidden md:block'>
          <button
            className='border border-kalita-brown-medium text-kalita-brown-medium text-sm px-8 py-4 rounded-md cursor-pointer'
          >
            Entrar
          </button>
        </Link>

        <div className='md:hidden'>
          <MenuButton />
        </div>
      </div>


    </header>
  )
}