"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Code, Compass, Construction, Layers, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { CssBuilder } from "@/components/css-builder"
import { ProgressiveReveal } from "@/components/progressive-reveal"

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [buildProgress, setBuildProgress] = useState(0)

  useEffect(() => {
    setLoaded(true)

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Compass className="h-5 w-5" />
            <span className="font-medium">Nave Mãe</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#servicos" className="text-sm text-muted-foreground hover:text-foreground">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-foreground">
              Sobre
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground">
              Portfólio
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </nav>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contato">Contato</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border mb-8 bg-muted/30">
              <Construction className="h-4 w-4" />
              <span>Site em construção</span>
            </div>

            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl mb-6">
              <TypewriterEffect text="Sua solução completa para a web." />
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A Nave Mãe oferece serviços profissionais de desenvolvimento web para construir, escalar e otimizar sua
              presença online.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-11 px-6 relative overflow-hidden">
                <span className="relative z-10">Iniciar Projeto</span>
                <span className="absolute inset-0 bg-primary opacity-50 animate-pulse"></span>
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-6">
                Ver Nosso Trabalho
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 bg-primary rounded-full flex-1 max-w-[100px]"></div>
              <h2 className="text-xl font-medium">Construindo seu site...</h2>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progresso</span>
                <span className="text-sm font-medium">{buildProgress}%</span>
              </div>
              <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${buildProgress}%` }}
                ></div>
              </div>
            </div>

            <CssBuilder />
          </div>
        </section>

        {showContent && (
          <>
            <section id="servicos" className="py-20">
              <div className="container max-w-6xl">
                <ProgressiveReveal>
                  <h2 className="text-2xl font-medium mb-12 text-center">Nossos Serviços</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-colors p-6 rounded-md">
                      <div className="flex items-center gap-2 mb-4">
                        <Rocket className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Landing Pages</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Páginas de conversão focadas em transformar visitantes em clientes.
                      </p>
                    </div>

                    <div className="border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-colors p-6 rounded-md">
                      <div className="flex items-center gap-2 mb-4">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Sites com Blog</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sites ricos em conteúdo com funcionalidade de blog integrada.
                      </p>
                    </div>

                    <div className="border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-colors p-6 rounded-md">
                      <div className="flex items-center gap-2 mb-4">
                        <Layers className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Aplicações Web</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Aplicações web personalizadas com integração de API.
                      </p>
                    </div>
                  </div>
                </ProgressiveReveal>
              </div>
            </section>

            <section id="sobre" className="py-20 bg-muted/30">
              <div className="container max-w-6xl">
                <ProgressiveReveal delay={300}>
                  <h2 className="text-2xl font-medium mb-12 text-center">Sobre Nós</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-xl font-medium">Especialistas em Desenvolvimento Web</h3>
                      <p className="text-sm text-muted-foreground">
                        Na Nave Mãe, combinamos expertise técnica com design criativo para entregar sites que não apenas
                        parecem ótimos, mas também têm desempenho excepcional.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span className="text-sm">
                            Designs modernos e responsivos que funcionam em todos os dispositivos
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span className="text-sm">
                            Sites rápidos e otimizados com excelentes pontuações de desempenho
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span className="text-sm">
                            Arquitetura amigável para SEO para melhores classificações nos motores de busca
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="aspect-video bg-muted/50 rounded-md flex items-center justify-center border border-dashed border-muted-foreground/30">
                      <p className="text-muted-foreground text-sm">Imagem em carregamento...</p>
                    </div>
                  </div>
                </ProgressiveReveal>
              </div>
            </section>
          </>
        )}

        <section className="py-24">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-medium mb-6">Pronto para começar?</h2>
            <p className="text-muted-foreground mb-8">
              Vamos trabalhar juntos para criar um site que represente perfeitamente sua marca e ajude você a alcançar
              seus objetivos de negócio.
            </p>
            <Button size="lg" className="h-11 px-6">
              Entre em Contato
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            <span className="text-sm">Nave Mãe</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Serviços
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Sobre
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Contato
            </Link>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nave Mãe</div>
        </div>
      </footer>
    </div>
  )
}

