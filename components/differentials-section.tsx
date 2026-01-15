import { Heart, BookOpen, ShieldCheck, Zap } from "lucide-react"

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada cliente de forma única, com atenção e cuidado em todas as interações.",
    number: "01",
  },
  {
    icon: BookOpen,
    title: "Atualização Constante",
    description: "Estamos sempre atualizados com as mudanças na legislação fiscal e contábil.",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Fiscal e Contábil",
    description: "Garantimos conformidade total com as normas e proteção contra riscos tributários.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Agilidade nos Processos",
    description: "Processos otimizados para entregas rápidas sem comprometer a qualidade.",
    number: "04",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Diferenciais</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Por que escolher a EAF?</h2>
          <p className="text-muted-foreground text-lg">
            Nossa missão é simplificar a gestão do seu negócio com qualidade e confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentials.map((diff) => (
            <div
              key={diff.title}
              className="flex gap-6 p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20">{diff.number}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <diff.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{diff.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
