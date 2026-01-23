import Image from 'next/image'
import { ButtonCTA } from './ButtonCTA'
import { MenuButton } from './menuButton'
import Link from 'next/link'


export function Header() {

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Pacotes', href: '/pacotes' },
    { name: 'Sobre', href: '/sobre' },
  ]

  return (
    <header className='flex items-center justify-between px-6 py-4 bg-kalita-bg-medium-2 w-full h-[140px] z-10 relative'>
      <div className='flex items-center gap-7'>
        <Link href={'dashboard/portfolio'}>
        <Image
          src='/kalita-logo.svg'
          alt='Logo da kalita'
          width={90}
          height={90}
          priority
        />
        </Link>

        <nav className="hidden md:flex items-center gap-8 ">
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
          <ButtonCTA size='small' content='Fale comigo' />
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
      <div className='border-b border-kalita-bg-light-brown w-[90%] bottom-4 absolute left-1/2 transform -translate-1/2'></div>
    </header>
  )
}