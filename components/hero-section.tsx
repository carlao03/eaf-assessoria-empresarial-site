import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center world-map-bg pt-20 pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-5xl md:text-7xl font-bold text-primary">EAF</span>
            <div className="flex flex-col gap-1">
              <div className="w-8 h-1 bg-foreground rotate-[-25deg]" />
              <div className="w-8 h-1 bg-foreground rotate-[-25deg]" />
              <div className="w-8 h-1 bg-foreground rotate-[-25deg]" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-6">Assessoria Empresarial</p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Contabilidade estratégica para o <span className="text-primary">crescimento do seu negócio</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Soluções completas em contabilidade, fiscal e assessoria empresarial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8"
            >
              <a href="https://wa.me/5518981032017" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary gap-2 text-base px-8 bg-transparent"
            >
              <a href="#contato">
                Solicitar Atendimento
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
