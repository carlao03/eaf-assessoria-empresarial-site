"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Mail, Phone, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const whatsappMessage = `*Nova mensagem do site EAF*%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*E-mail:* ${formData.email}%0A%0A*Mensagem:*%0A${formData.message}`

    const whatsappUrl = `https://wa.me/5518981032017?text=${encodeURIComponent(whatsappMessage.replace(/%0A/g, "\n"))}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText("contato@eafassessoria.com.br")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section id="contato" className="py-24 bg-background world-map-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Fale conosco</h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato para tirar suas dúvidas ou solicitar um orçamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <a
                  href="https://wa.me/5518981032017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-foreground font-medium">(18) 98103-2017</p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group text-left"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-foreground font-medium break-all">contato@eafassessoria.com.br</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    {emailCopied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </div>
                </button>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="text-foreground font-medium">(18) 98103-2017</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="text-foreground font-semibold mb-2">Horário de Atendimento</h4>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudá-lo?"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar via WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
