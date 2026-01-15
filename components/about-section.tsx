import { Shield, Users, Target, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Seriedade",
    description: "Compromisso total com a integridade e transparência em todos os processos.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único e merece soluções sob medida para suas necessidades.",
  },
  {
    icon: Target,
    title: "Organização",
    description: "Processos estruturados para garantir eficiência e qualidade nos resultados.",
  },
  {
    icon: Award,
    title: "Ética",
    description: "Atuamos com responsabilidade e respeito às normas e legislações vigentes.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Sobre a Empresa</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sua parceira de confiança em gestão empresarial
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A EAF Assessoria Empresarial é especializada em oferecer soluções contábeis e fiscais completas para
            empresários, MEIs e pequenas e médias empresas. Com foco em excelência e atendimento humanizado, trabalhamos
            para que você possa se concentrar no que realmente importa: o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
