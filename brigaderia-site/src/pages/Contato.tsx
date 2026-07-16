import { useState } from 'react'
import { MapPin, Clock, Map, CheckCircle2 } from 'lucide-react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}.\n\nAssunto: ${form.assunto}\n\n${form.mensagem}\n\nE-mail para retorno: ${form.email}`
    )
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank')
    setSent(true)
    setForm({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-choco-deep py-20 px-6 text-center">
        <p className="text-teal text-xs font-semibold tracking-[0.3em] uppercase mb-4">Fale conosco</p>
        <h1 className="text-4xl sm:text-5xl text-cream mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Contato
        </h1>
        <p className="text-beige text-lg max-w-xl mx-auto">
          Estamos aqui para atender você com todo o carinho que você merece.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h2 className="text-3xl text-choco-deep mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Vamos conversar?
          </h2>

          <div className="space-y-6">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-beige/50 hover:border-teal-deep hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-deep/10 flex items-center justify-center shrink-0 group-hover:bg-teal-deep/20 transition-colors">
                <svg width="22" height="22" fill="#5FAE9A" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-choco-deep mb-0.5">WhatsApp</p>
                <p className="text-choco/70 text-sm">(11) 99999-9999</p>
                <p className="text-xs text-teal-deep mt-1">Clique para iniciar conversa →</p>
              </div>
            </a>

            <a
              href="https://instagram.com/espressobrigaderier"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-beige/50 hover:border-teal-deep hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-deep/10 flex items-center justify-center shrink-0 group-hover:bg-teal-deep/20 transition-colors">
                <svg width="22" height="22" fill="#5FAE9A" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-choco-deep mb-0.5">Instagram</p>
                <p className="text-choco/70 text-sm">@espressobrigaderier</p>
                <p className="text-xs text-teal-deep mt-1">Siga para novidades →</p>
              </div>
            </a>

            <div className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-beige/50">
              <div className="w-12 h-12 rounded-xl bg-teal-deep/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-teal-deep" />
              </div>
              <div>
                <p className="font-semibold text-choco-deep mb-0.5">Localização</p>
                <p className="text-choco/70 text-sm">São Paulo — SP, Brasil</p>
                <p className="text-xs text-choco/50 mt-1">Atendemos com entrega em toda a cidade</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-beige/50">
              <div className="w-12 h-12 rounded-xl bg-teal-deep/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-teal-deep" />
              </div>
              <div>
                <p className="font-semibold text-choco-deep mb-0.5">Horário de atendimento</p>
                <p className="text-choco/70 text-sm">Segunda a sexta: 9h às 18h</p>
                <p className="text-choco/70 text-sm">Sábado: 9h às 14h</p>
              </div>
            </div>
          </div>

          {/* Illustrative map placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-beige relative border border-beige">
            <div className="absolute inset-0 flex items-center justify-center bg-beige-light">
              <div className="text-center text-choco/60">
                <Map className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm font-medium">São Paulo, SP</p>
                <p className="text-xs text-choco/40 mt-1">Entregas em toda a cidade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-3xl text-choco-deep mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Envie uma mensagem
          </h2>

          {sent ? (
            <div className="bg-teal-deep/10 border border-teal-deep/30 rounded-3xl p-10 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-teal-deep" />
              <h3 className="text-2xl text-choco-deep mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Mensagem enviada!</h3>
              <p className="text-choco/70">Você foi redirecionado para o WhatsApp. Responderemos em breve!</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm text-teal-deep underline">Enviar outra mensagem</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-choco-deep uppercase tracking-wide block mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3.5 rounded-xl border border-beige bg-white text-choco-deep text-sm outline-none focus:border-teal-deep transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-choco-deep uppercase tracking-wide block mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-beige bg-white text-choco-deep text-sm outline-none focus:border-teal-deep transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-choco-deep uppercase tracking-wide block mb-2">Assunto</label>
                <input
                  type="text"
                  required
                  value={form.assunto}
                  onChange={e => setForm(f => ({ ...f, assunto: e.target.value }))}
                  placeholder="Ex: Encomenda para aniversário"
                  className="w-full px-4 py-3.5 rounded-xl border border-beige bg-white text-choco-deep text-sm outline-none focus:border-teal-deep transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-choco-deep uppercase tracking-wide block mb-2">Mensagem</label>
                <textarea
                  required
                  rows={6}
                  value={form.mensagem}
                  onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))}
                  placeholder="Conte mais sobre seu pedido ou dúvida..."
                  className="w-full px-4 py-3.5 rounded-xl border border-beige bg-white text-choco-deep text-sm outline-none focus:border-teal-deep transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-deep text-white text-sm font-semibold py-4 rounded-full hover:bg-teal transition-colors duration-200"
              >
                Enviar via WhatsApp →
              </button>
              <p className="text-xs text-choco/50 text-center">
                Ao enviar, você será direcionado para o WhatsApp para continuar a conversa.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
