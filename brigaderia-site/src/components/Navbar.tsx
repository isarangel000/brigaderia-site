import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      {/* cole aqui o código do Navbar */}
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/cardapio">Cardápio</Link>
      <Link to="/encomendas">Encomendas</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Navbar
