import { TriangleAlert } from 'lucide-react'

function PrototypeBanner() {
  return (
    <div className="bg-amber-400 text-choco-deep text-center text-sm font-semibold px-4 py-2 flex items-center justify-center gap-2">
      <TriangleAlert className="w-4 h-4 shrink-0" />
      <span>
        Este é um protótipo desenvolvido por Isabela Rangel para apresentar um projeto de site. Não é o site oficial da empresa. Algumas informações e imagens são ilustrativas.
      </span>
    </div>
  )
}

export default PrototypeBanner
