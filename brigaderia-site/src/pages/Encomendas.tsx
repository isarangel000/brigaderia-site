import { Cake, Gem, Building2, Heart, Gift } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para encomenda.'

const occasions = [
  {
    icon: Cake,
    title: 'Aniversários',
    desc: 'Bolos decorados, mesas de brigadeiros e kits personalizados com as cores e tema da festa.',
    img: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Gem,
    title: 'Casamentos',
    desc: 'Mesa de doces sofisticada, bem-casados artesanais e lembrancinha gourmet para os convidados.',
    img: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    desc: 'Kits presenteáveis com logo da empresa para confraternizações, lançamentos e datas especiais.',
    img: 'https://images.unsplash.com/photo-1683899800683-f35a8faa561d?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Heart,
    title: 'Datas Comemorativas',
    desc: 'Dia dos Namorados, Natal, Dia das Mães e muito mais — criações especiais para cada data.',
    img: 'https://images.unsplash.com/photo-1644607697034-ce85b7eb6e39?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: Gift,
    title: 'Caixas Personalizadas',
    desc: 'Monte sua caixa ideal escolhendo sabores, quantidade e embalagem. Para presentear com estilo.',
    img: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=600&h=400&fit=crop&auto=format',
  },
]

const steps = [
  { num: '01', title: 'Envie sua ideia', desc: 'Nos conte pelo WhatsApp o evento, a quantidade e suas preferências.' },
  { num: '02', title: 'Receba o orçamento', desc: 'Enviamos um orçamento detalhado em até 24 horas.' },
  { num: '03', title: 'Confirme o pedido', desc: 'Após aprovação, confirmamos data, entrega e personalizações.' },
  { num: '04', title: 'Receba seus doces', desc: 'Entregamos com todo cuidado para você encantar seus convidados.' },
]

export default function Encomendas() {
  return (
    <div>
      {/* Header */}
      <div className="bg-choco-deep py-20 px-6 text-center">
        <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-4">Pedidos especiais</p>
        <h1 className="text-4xl sm:text-5xl text-cream mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Encomendas
        </h1>
        <p className="text-beige text-lg max-w-xl mx-auto">
          Criamos experiências únicas para os seus momentos mais especiais.
        </p>
      </div>

      {/* Occasions */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">Ocasiões</p>
          <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
            Para qual ocasião?
          </h2>
          <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map(({ icon: Icon, title, desc, img }) => (
            <div key={title} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-beige/30">
              <div className="relative h-48 overflow-hidden bg-beige-light">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-choco-deep/60 to-transparent" />
                <Icon className="absolute bottom-4 left-5 w-8 h-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-choco-deep mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {title}
                </h3>
                <p className="text-sm text-choco/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-beige-light/40 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">Como funciona</p>
            <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
              Simples e fácil
            </h2>
            <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-teal-deep text-white flex items-center justify-center text-xl font-bold mx-auto mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {num}
                </div>
                <h3 className="font-semibold text-choco-deep mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                <p className="text-sm text-choco/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl text-choco-deep mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Vamos criar algo especial juntos?
          </h2>
          <p className="text-choco/70 text-lg mb-8">
            Entre em contato e receba seu orçamento personalizado em até 24 horas.
          </p>
          <button
            onClick={() => window.open(WHATSAPP, '_blank')}
            className="bg-teal-deep text-white text-sm font-bold px-10 py-4 rounded-full hover:bg-teal transition-colors duration-200 shadow-lg"
          >
            Solicitar orçamento pelo WhatsApp
          </button>
        </div>
      </section>
    </div>
  )
}
