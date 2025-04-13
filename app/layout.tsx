import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Nave Mãe | Desenvolvimento Web Profissional",
  description: "Desenvolvimento web profissional para construir, escalar e otimizar sua presença online. Especialistas em sites dinâmicos, WordPress e SEO.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className={`${GeistSans.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}