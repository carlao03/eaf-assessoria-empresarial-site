"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#inicio")

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setActiveSection(href)
    setMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <EAFLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm relative py-2 transition-all duration-300 ease-out
                ${activeSection === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300 after:ease-out
                ${activeSection === item.href ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <a href="https://wa.me/5518981032017" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation - Added smooth animation for mobile menu */}
      <div
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ease-out
          ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`py-3 px-4 rounded-lg transition-all duration-300 ease-out
                ${
                  activeSection === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }
              `}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: mobileMenuOpen ? 1 : 0,
              }}
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2 transition-all duration-300"
          >
            <a href="https://wa.me/5518981032017" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

function EAFLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-primary">EAF</span>
      <div className="flex flex-col">
        <div className="w-5 h-[3px] bg-foreground rotate-[-25deg] translate-y-[2px]" />
        <div className="w-5 h-[3px] bg-foreground rotate-[-25deg]" />
        <div className="w-5 h-[3px] bg-foreground rotate-[-25deg] -translate-y-[2px]" />
      </div>
      <span className="text-xs text-muted-foreground hidden sm:block">Assessoria Empresarial</span>
    </div>
  )
}
