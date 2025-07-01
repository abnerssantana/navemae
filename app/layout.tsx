import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nave Mãe - Colonizamos o Universo Digital",
  description: "Somos especialistas em desenvolvimento web de outro planeta. Criamos experiências digitais com tecnologia avançada para construir, escalar e colonizar sua presença online.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background`}>
        {children}
      </body>
    </html>
  )
}