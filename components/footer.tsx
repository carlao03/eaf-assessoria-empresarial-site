import Link from "next/link"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

const services = [
  "Abertura de Empresa",
  "Contabilidade Empresarial",
  "Escritas Fiscais",
  "Imposto de Renda",
  "Assessoria Empresarial",
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-primary">EAF</span>
              <div className="flex flex-col gap-0.5">
                <div className="w-5 h-[3px] bg-foreground rotate-[-25deg]" />
                <div className="w-5 h-[3px] bg-foreground rotate-[-25deg]" />
                <div className="w-5 h-[3px] bg-foreground rotate-[-25deg]" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-2">Assessoria Empresarial</p>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Soluções completas em contabilidade, fiscal e assessoria empresarial para MEIs, empresários e pequenas e
              médias empresas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EAF Assessoria Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
