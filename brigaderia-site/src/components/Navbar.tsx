import { useState } from 'react'
import type { Page } from '../App'
import logo from '../imports/image.png'

interface Props {
  current: Page
  navigate: (p: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Cardápio', page: 'cardapio' },
  { label: 'Encomendas', page: 'encomendas' },
  { label: 'Sobre', page: 'sobre' },
  { label: 'Contato', page: 'contato' },
]

export default function Navbar({ current, navigate }: Props) {
  const [open, setOpen] = useState(false)

  const whatsapp = () =>
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.', '_blank')

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-beige">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Espresso Brigaderier" className="h-14 w-auto object-contain" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                current === page
                  ? 'text-teal-deep'
                  : 'text-choco hover:text-teal-deep'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={whatsapp}
            className="bg-teal-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal transition-colors duration-200 shadow-sm"
          >
            Faça seu pedido
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-choco-deep transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-choco-deep transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-choco-deep transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-beige px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { navigate(page); setOpen(false) }}
              className={`text-left text-sm font-medium ${current === page ? 'text-teal-deep' : 'text-choco'}`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={whatsapp}
            className="mt-2 bg-teal-deep text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Faça seu pedido
          </button>
        </div>
      )}
    </header>
  )
}
