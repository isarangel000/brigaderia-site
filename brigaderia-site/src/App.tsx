import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Encomendas from './pages/Encomendas'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

export type Page = 'home' | 'cardapio' | 'encomendas' | 'sobre' | 'contato'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar current={page} navigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'cardapio' && <Cardapio />}
        {page === 'encomendas' && <Encomendas />}
        {page === 'sobre' && <Sobre />}
        {page === 'contato' && <Contato />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
