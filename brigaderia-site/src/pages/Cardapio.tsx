import { useState } from 'react'
import { Candy, Cake, Gift, Sparkles, type LucideIcon } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.'

type Category = 'todos' | 'brigadeiros' | 'bolos' | 'personalizados' | 'kits'

const categories: { id: Category; label: string; icon: LucideIcon }[] = [
  { id: 'todos', label: 'Todos', icon: Sparkles },
  { id: 'brigadeiros', label: 'Brigadeiros', icon: Candy },
  { id: 'bolos', label: 'Bolos', icon: Cake },
  { id: 'personalizados', label: 'Doces personalizados', icon: Sparkles },
  { id: 'kits', label: 'Kits presenteáveis', icon: Gift },
]

const products = [
  {
    category: 'brigadeiros' as Category,
    name: 'Brigadeiro Tradicional',
    desc: 'O clássico irresistível, feito com chocolate belga de alta qualidade e polvilhado com granulado artesanal.',
    ingredients: 'Leite condensado, chocolate belga, manteiga, granulado',
    price: 'R$ 5,50',
    img: 'https://images.unsplash.com/photo-1639158924965-7be3bb57506b?w=500&h=500&fit=crop&auto=format',
    alt: 'Brigadeiro tradicional de chocolate',
  },
  {
    category: 'brigadeiros' as Category,
    name: 'Brigadeiro de Pistache',
    desc: 'Pistache crunchy importado com cobertura de chocolate branco. Sofisticação em cada mordida.',
    ingredients: 'Leite condensado, pistache, chocolate branco, manteiga',
    price: 'R$ 8,50',
    img: 'https://images.unsplash.com/photo-1689511327380-065440a857b1?w=500&h=500&fit=crop&auto=format',
    alt: 'Brigadeiro gourmet pistache',
  },
  {
    category: 'brigadeiros' as Category,
    name: 'Brigadeiro de Maracujá',
    desc: 'Acidez tropical do maracujá em perfeita harmonia com o doce do brigadeiro. Refrescante e único.',
    ingredients: 'Leite condensado, polpa de maracujá, manteiga, coco',
    price: 'R$ 7,00',
    img: 'https://images.unsplash.com/photo-1644607697034-ce85b7eb6e39?w=500&h=500&fit=crop&auto=format',
    alt: 'Brigadeiro de maracujá',
  },
  {
    category: 'brigadeiros' as Category,
    name: 'Brigadeiro Belga',
    desc: 'Feito com chocolate 70% cacau belga, para quem aprecia o sabor intenso e sofisticado.',
    ingredients: 'Leite condensado, chocolate 70% cacau belga, manteiga',
    price: 'R$ 9,00',
    img: 'https://images.unsplash.com/photo-1776722093169-2c0393c79618?w=500&h=500&fit=crop&auto=format',
    alt: 'Brigadeiro com chocolate belga',
  },
  {
    category: 'bolos' as Category,
    name: 'Bolo de Chocolate Úmido',
    desc: 'Bolo artesanal com massa úmida de cacau e ganache de chocolate 70%. Perfeito para celebrar.',
    ingredients: 'Farinha, cacau premium, ovos, manteiga, ganache de chocolate',
    price: 'A partir de R$ 150',
    img: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=500&h=500&fit=crop&auto=format',
    alt: 'Bolo de chocolate artesanal',
  },
  {
    category: 'bolos' as Category,
    name: 'Bolo Red Velvet',
    desc: 'Massa aveludada com cream cheese e decoração elegante. Um clássico americano com toque artesanal.',
    ingredients: 'Farinha, cacau, corante natural, cream cheese, manteiga',
    price: 'A partir de R$ 180',
    img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&h=500&fit=crop&auto=format',
    alt: 'Bolo red velvet',
  },
  {
    category: 'personalizados' as Category,
    name: 'Torta de Frutas Vermelhas',
    desc: 'Base amanteigada com creme pâtissier e seleção de frutas vermelhas frescas da estação.',
    ingredients: 'Massa amanteigada, creme pâtissier, frutas vermelhas frescas',
    price: 'A partir de R$ 120',
    img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&h=500&fit=crop&auto=format',
    alt: 'Torta de frutas vermelhas',
  },
  {
    category: 'personalizados' as Category,
    name: 'Doces Para Festa',
    desc: 'Mesa de doces personalizados com tema e cores da sua festa. Criamos algo único para seu evento.',
    ingredients: 'Brigadeiros, beijinhos, cajuzinhos, doces finos — personalizado',
    price: 'Consulte',
    img: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=500&h=500&fit=crop&auto=format',
    alt: 'Mesa de doces para festa',
  },
  {
    category: 'kits' as Category,
    name: 'Kit Presente Premium',
    desc: 'Caixa de madeira com 12 brigadeiros gourmet sortidos, embalados com fita de cetim e cartão personalizado.',
    ingredients: '12 brigadeiros gourmet sortidos — sabores à escolha',
    price: 'A partir de R$ 95',
    img: 'https://images.unsplash.com/photo-1683899800683-f35a8faa561d?w=500&h=500&fit=crop&auto=format',
    alt: 'Kit presente com chocolates',
  },
  {
    category: 'kits' as Category,
    name: 'Kit Corporativo',
    desc: 'Presenteie seus clientes e colaboradores com uma experiência gourmet memorável. Logo da empresa incluso.',
    ingredients: 'Brigadeiros + bombons + embalagem personalizada com logo',
    price: 'A partir de R$ 45/unid',
    img: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=500&h=500&fit=crop&auto=format',
    alt: 'Kit corporativo gourmet',
  },
]

export default function Cardapio() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchesCat = activeCategory === 'todos' || p.category === activeCategory
    const matchesSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-choco-deep py-20 px-6 text-center">
        <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-4">Nossa seleção</p>
        <h1 className="text-4xl sm:text-5xl text-cream mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Cardápio
        </h1>
        <p className="text-beige text-lg max-w-xl mx-auto">
          Criações artesanais para todos os gostos e ocasiões.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Search */}
        <div className="relative mb-8 max-w-md mx-auto">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-choco/40" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-full border border-beige bg-white text-choco-deep text-sm outline-none focus:border-teal-deep transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === id
                  ? 'bg-teal-deep text-white shadow-md'
                  : 'bg-white text-choco border border-beige hover:border-teal-deep'
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-choco/50">
            <Candy className="w-10 h-10 mx-auto mb-4" />
            <p>Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(p => (
              <div key={p.name} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-beige/30">
                <div className="relative h-56 overflow-hidden bg-beige-light">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-choco-deep mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {p.name}
                  </h3>
                  <p className="text-sm text-choco/70 leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-xs text-choco/50 mb-5">
                    <span className="font-medium">Ingredientes:</span> {p.ingredients}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-beige/50">
                    <span className="text-teal-deep font-bold">{p.price}</span>
                    <button
                      onClick={() => window.open(`${WHATSAPP} — ${p.name}`, '_blank')}
                      className="text-xs font-semibold bg-choco-deep text-cream px-5 py-2.5 rounded-full hover:bg-teal-deep transition-colors duration-200"
                    >
                      Pedir pelo WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
