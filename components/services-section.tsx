import { Building2, Calculator, FileText, Receipt, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description:
      "Assessoria completa para a constituição do seu negócio, desde a escolha do tipo societário até o registro nos órgãos competentes.",
  },
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description:
      "Gestão contábil completa com emissão de balanços, demonstrações financeiras e relatórios gerenciais para tomada de decisões.",
  },
  {
    icon: FileText,
    title: "Escritas Fiscais",
    description:
      "Apuração e escrituração de impostos, obrigações acessórias e acompanhamento fiscal para manter sua empresa em conformidade.",
  },
  {
    icon: Receipt,
    title: "Imposto de Renda",
    description:
      "Declaração de Imposto de Renda para Pessoa Física e Pessoa Jurídica com análise de oportunidades de economia tributária.",
  },
  {
    icon: Briefcase,
    title: "Assessoria Empresarial",
    description:
      "Consultoria estratégica para gestão do seu negócio, planejamento tributário e orientações para crescimento sustentável.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background world-map-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Soluções completas para sua empresa</h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços contábeis e de assessoria para atender todas as necessidades do seu
            negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
