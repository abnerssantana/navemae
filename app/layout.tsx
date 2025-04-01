import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: "Nave Mãe | Agência de Desenvolvimento Web",
  description: "Serviços profissionais de desenvolvimento web para construir, escalar e otimizar sua presença online.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

