import { useState } from 'react'
import type { Page } from '../App'
import { Candy, Cake, CakeSlice, Gift, Coffee, Sparkles } from 'lucide-react'

interface Props {
  navigate: (p: Page) => void
}

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.'

const products = [
  {
    name: 'Brigadeiro Gourmet',
    desc: 'Feitos com chocolate belga e cobertura artesanal. A experiência definitiva do brigadeiro.',
    price: 'R$ 6,50',
    icon: Candy,
    img: 'https://images.unsplash.com/photo-1639158924965-7be3bb57506b?w=600&h=600&fit=crop&auto=format',
    alt: 'Brigadeiro gourmet de chocolate',
  },
  {
    name: 'Bolo de Chocolate',
    desc: 'Bolo artesanal úmido com ganache de chocolate 70% cacau e decoração elegante.',
    price: 'A partir de R$ 150',
    icon: Cake,
    img: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=600&h=600&fit=crop&auto=format',
    alt: 'Bolo de chocolate gourmet',
  },
  {
    name: 'Torta Especial',
    desc: 'Tortas artesanais com frutas frescas e cremes selecionados para ocasiões únicas.',
    price: 'A partir de R$ 120',
    icon: CakeSlice,
    img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=600&fit=crop&auto=format',
    alt: 'Torta artesanal gourmet',
  },
  {
    name: 'Kits para Festas',
    desc: 'Caixas personalizadas com seleção de brigadeiros gourmet para presentear com elegância.',
    price: 'A partir de R$ 85',
    icon: Gift,
    img: 'https://images.unsplash.com/photo-1683899800683-f35a8faa561d?w=600&h=600&fit=crop&auto=format',
    alt: 'Kit de chocolates artesanais para presente',
  },
]

const differentials = [
  {
    icon: Candy,
    title: 'Ingredientes selecionados',
    desc: 'Utilizamos apenas chocolate belga e ingredientes premium para garantir o melhor sabor.',
  },
  {
    icon: Coffee,
    title: 'Produção artesanal',
    desc: 'Cada doce é feito à mão com carinho e dedicação, seguindo receitas exclusivas.',
  },
  {
    icon: Gift,
    title: 'Personalização para eventos',
    desc: 'Criamos experiências únicas para casamentos, aniversários e eventos corporativos.',
  },
  {
    icon: Sparkles,
    title: 'Cuidado em cada detalhe',
    desc: 'Da embalagem à entrega, cada etapa é pensada para encantar quem recebe.',
  },
]

const testimonials = [
  {
    name: 'Mariana Costa',
    text: 'Os brigadeiros da Espresso Brigaderier são simplesmente incríveis. Pedi para o meu casamento e todos os convidados adoraram. A apresentação é linda!',
    stars: 5,
    avatar: 'M',
  },
  {
    name: 'Rafael Souza',
    text: 'Compro todo mês para presentear clientes. A qualidade é consistente e a embalagem transmite muito luxo. Recomendo demais!',
    stars: 5,
    avatar: 'R',
  },
  {
    name: 'Ana Luísa Ferreira',
    text: 'O bolo de chocolate para o aniversário da minha filha foi um espetáculo. Perfeito em sabor, beleza e entrega no prazo. 10/10!',
    stars: 5,
    avatar: 'A',
  },
]

const instagramPhotos = [
  { img: 'https://images.unsplash.com/photo-1776722093169-2c0393c79618?w=400&h=400&fit=crop&auto=format', alt: 'Sortimento de brigadeiros' },
  { img: 'https://images.unsplash.com/photo-1689511327380-065440a857b1?w=400&h=400&fit=crop&auto=format', alt: 'Bandeja de chocolates' },
  { img: 'https://images.unsplash.com/photo-1644607697034-ce85b7eb6e39?w=400&h=400&fit=crop&auto=format', alt: 'Variedade de chocolates' },
  { img: 'https://images.unsplash.com/photo-1625151659386-5e1a63ee84c5?w=400&h=400&fit=crop&auto=format', alt: 'Doces na bandeja' },
  { img: 'https://images.unsplash.com/photo-1643944471768-2d2eac3afb6d?w=400&h=400&fit=crop&auto=format', alt: 'Vitrine de confeitaria' },
  { img: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=400&h=400&fit=crop&auto=format', alt: 'Bolo de chocolate' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#5FAE9A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Home({ navigate }: Props) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-dvh flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet="https://images.unsplash.com/photo-1776722093169-2c0393c79618?w=900&h=1600&fit=crop&auto=format"
            />
            <img
              src="https://images.unsplash.com/photo-1776722093169-2c0393c79618?w=1600&h=1000&fit=crop&auto=format"
              alt="Brigadeiros artesanais gourmet"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-choco-deep/90 via-choco-deep/70 to-choco-deep/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Brigadeiria & Cafeteria
            </p>
            <h1
              className="text-4xl md:text-6xl leading-tight text-cream mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Momentos especiais merecem um doce especial
            </h1>
            <p className="text-beige-light text-lg leading-relaxed mb-10 max-w-lg">
              Brigadeiros artesanais feitos com ingredientes selecionados para transformar pequenos momentos em grandes experiências.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('cardapio')}
                className="bg-cream text-choco-deep text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-beige-light transition-colors duration-200"
              >
                Ver cardápio
              </button>
              <button
                onClick={() => window.open(WHATSAPP, '_blank')}
                className="bg-teal-deep text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-teal transition-colors duration-200"
              >
                Fazer pedido pelo WhatsApp
              </button>
            </div>
          </div>

          {/* Hero stats */}
          <div className="hidden lg:flex flex-col items-end gap-6">
            {[
              { value: '+5.000', label: 'Pedidos entregues' },
              { value: '100%', label: 'Ingredientes naturais' },
              { value: '4.9★', label: 'Avaliação média' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-5 text-right border border-white/20">
                <p className="text-3xl font-bold text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>{value}</p>
                <p className="text-beige text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-beige/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-beige/30 animate-pulse" />
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">Nossos produtos</p>
          <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
            Produtos em destaque
          </h2>
          <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52 bg-beige-light">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-choco-deep/10 transition-opacity duration-300 ${hoveredCard === i ? 'opacity-0' : 'opacity-0'}`} />
              </div>
              <div className="p-6">
                <p.icon className="w-7 h-7 text-teal-deep mb-2" />
                <h3 className="text-lg font-semibold text-choco-deep mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {p.name}
                </h3>
                <p className="text-sm text-choco/70 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-deep font-semibold text-sm">{p.price}</span>
                  <button
                    onClick={() => window.open(WHATSAPP, '_blank')}
                    className="text-xs font-semibold bg-teal-deep text-white px-4 py-2 rounded-full hover:bg-teal transition-colors"
                  >
                    Pedir agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('cardapio')}
            className="border border-choco-deep text-choco-deep text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-choco-deep hover:text-cream transition-colors duration-200"
          >
            Ver cardápio completo
          </button>
        </div>
      </section>

      {/* Differentials */}
      <section className="bg-beige-light/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">Por que nos escolher</p>
            <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mais que doces, experiências
            </h2>
            <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 text-teal-deep" />
                </div>
                <h3 className="font-semibold text-choco-deep mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                <p className="text-sm text-choco/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">Depoimentos</p>
          <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
            O que dizem sobre nós
          </h2>
          <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, text, stars, avatar }) => (
            <div key={name} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-beige/50">
              <StarRating count={stars} />
              <p className="text-choco/80 leading-relaxed text-sm mt-5 mb-6 italic">
                "{text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center text-white font-bold text-sm">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-choco-deep text-sm">{name}</p>
                  <StarRating count={stars} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-6 bg-choco-deep">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-3">Siga-nos</p>
            <h2 className="text-4xl text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>
              @espressobrigaderier
            </h2>
            <p className="text-beige text-sm mt-3">Acompanhe nossas criações e bastidores no Instagram</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPhotos.map(({ img, alt }, i) => (
              <a
                key={i}
                href="https://instagram.com/espressobrigaderier"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-choco block"
              >
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-choco-deep/0 group-hover:bg-choco-deep/40 transition-all duration-300 flex items-center justify-center">
                  <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-deep py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pronto para adoçar seu momento?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Entre em contato pelo WhatsApp e faça seu pedido em poucos minutos.
          </p>
          <button
            onClick={() => window.open(WHATSAPP, '_blank')}
            className="bg-white text-teal-deep text-sm font-bold px-10 py-4 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg"
          >
            Fazer pedido agora →
          </button>
        </div>
      </section>
    </div>
  )
}
