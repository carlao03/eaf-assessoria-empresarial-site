import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EAF Assessoria Empresarial | Contabilidade Estratégica",
  description:
    "Soluções completas em contabilidade, fiscal e assessoria empresarial para MEIs, empresários e pequenas e médias empresas.",
  generator: "v0.app",
  keywords: ["contabilidade", "assessoria empresarial", "fiscal", "MEI", "abertura de empresa", "imposto de renda"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
