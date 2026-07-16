import { Candy, Heart, Leaf, Sparkles } from 'lucide-react'

const values = [
  { icon: Candy, title: 'Qualidade', desc: 'Ingredientes selecionados e chocolate belga premium em cada receita.' },
  { icon: Heart, title: 'Carinho', desc: 'Cada brigadeiro é feito à mão com amor e atenção aos detalhes.' },
  { icon: Leaf, title: 'Natureza', desc: 'Priorizamos ingredientes naturais e processo sem conservantes artificiais.' },
  { icon: Sparkles, title: 'Exclusividade', desc: 'Receitas exclusivas desenvolvidas ao longo de anos de dedicação.' },
]

export default function Sobre() {
  return (
    <div>
      {/* Header */}
      <div className="bg-choco-deep py-20 px-6 text-center">
        <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-4">Nossa história</p>
        <h1 className="text-4xl sm:text-5xl text-cream mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Sobre nós
        </h1>
        <p className="text-beige text-lg max-w-xl mx-auto">
          Uma história feita de paixão, dedicação e muito chocolate.
        </p>
      </div>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-4">Nossas origens</p>
          <h2 className="text-4xl text-choco-deep mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Uma paixão que virou vocação
          </h2>
          <div className="space-y-4 text-choco/80 leading-relaxed">
            <p>
              A Espresso Brigaderier nasceu de uma paixão genuína por doces artesanais e café gourmet. Fundada em 2018, a marca surgiu de uma cozinha caseira onde cada receita era testada e aperfeiçoada com dedicação.
            </p>
            <p>
              Com o tempo, os brigadeiros feitos para amigos e família foram ganhando o coração de São Paulo. A qualidade dos ingredientes, o cuidado na produção e a apresentação impecável fizeram a diferença.
            </p>
            <p>
              Hoje, a Espresso Brigaderier se consolidou como referência em brigadeiros gourmet e confeitaria artesanal, mantendo sempre a essência: fazer com amor aquilo que encanta e transforma momentos.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1643944471768-2d2eac3afb6d?w=700&h=600&fit=crop&auto=format"
            alt="Vitrine da Espresso Brigaderier"
            className="rounded-3xl w-full object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-teal-deep text-white rounded-2xl px-8 py-6 shadow-xl hidden md:block">
            <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>2018</p>
            <p className="text-sm text-white/80 mt-1">Fundação da marca</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-beige-light/40 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1689511327380-065440a857b1?w=700&h=500&fit=crop&auto=format"
              alt="Processo artesanal de produção"
              className="rounded-3xl w-full object-cover shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-4">Processo</p>
            <h2 className="text-4xl text-choco-deep mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Feito à mão, com intenção
            </h2>
            <div className="space-y-4 text-choco/80 leading-relaxed">
              <p>
                Cada brigadeiro começa com a seleção cuidadosa dos ingredientes. Utilizamos chocolate belga importado, leite condensado integral e manteiga de alta qualidade para garantir a textura e o sabor perfeitos.
              </p>
              <p>
                O processo de produção é totalmente artesanal: a mistura é preparada em fogo brando com mexida constante, o enrolamento é feito à mão e a cobertura é escolhida para complementar cada sabor.
              </p>
              <p>
                Nenhum conservante, nenhum atalho. Apenas ingredientes reais e muito cuidado em cada etapa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-deep text-xs font-semibold tracking-[0.3em] uppercase mb-3">O que nos guia</p>
          <h2 className="text-4xl text-choco-deep" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nossos valores
          </h2>
          <div className="w-16 h-0.5 bg-teal-deep mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-beige/30">
              <Icon className="w-9 h-9 mx-auto mb-4 text-teal-deep" />
              <h3 className="font-semibold text-choco-deep mb-3 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
              <p className="text-sm text-choco/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final image */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1776722093169-2c0393c79618?w=1600&h=600&fit=crop&auto=format"
          alt="Brigadeiros artesanais Espresso Brigaderier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-choco-deep/70 flex items-center justify-center">
          <p className="text-3xl md:text-5xl text-cream text-center px-6 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Feitos com amor para encantar."
          </p>
        </div>
      </section>
    </div>
  )
}
