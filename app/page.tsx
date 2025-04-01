"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Code,
  Compass,
  Construction,
  Layers,
  Rocket,
  Smartphone,
  Search,
  Zap,
  BarChart3,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  HeroWrapper,
  FadeUp,
  StaggerChildren,
  FadeIn,
} from "@/components/motion"
import { ServiceCard } from "@/components/service-card"
import { PerformanceSection } from "@/components/performance-section"
import DevelopmentJourney from "@/components/development-journey"


export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [buildProgress, setBuildProgress] = useState(0)

  useEffect(() => {
    setLoaded(true)

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
      clearInterval(interval)
    }
  }, [])

  const services = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Sites Dinâmicos",
      description: "Websites dinâmicos e responsivos com experiências interativas e alto desempenho."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão que transformam visitantes em clientes."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "WordPress Customizado",
      description: "Sites WordPress com temas e plugins personalizados para suas necessidades específicas."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Otimização SEO",
      description: "Melhore seu ranking nos mecanismos de busca com otimização técnica e de conteúdo."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Melhoria de Performance",
      description: "Otimização de velocidade para melhorar a experiência do usuário e conversões."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Aplicações Web",
      description: "Aplicações web personalizadas com integração de API e funcionalidades avançadas."
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Compass className="h-5 w-5" />
            <span className="font-medium">Nave Mãe</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfólio
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contato">
              <span>Contato</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.header>

      <main className="flex-1">
        <HeroWrapper>
          <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl"
              />
            </div>

            <div className="container mx-auto px-4 max-w-5xl text-center">
              <FadeIn delay={0.2}>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border mb-8 bg-muted/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Construction className="h-4 w-4" />
                  <span>Desenvolvimento Web Profissional</span>
                </motion.div>
              </FadeIn>

              <FadeUp delay={0.4}>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  Sua solução completa para a <span className="text-primary relative">web.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.6}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                  Desenvolvimento web profissional para construir, escalar e otimizar sua presença online. Especialistas em sites dinâmicos, WordPress e SEO.
                </p>
              </FadeUp>

              <motion.div
                className="mt-10 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-12 px-6 relative overflow-hidden">
                    <span className="relative z-10">Iniciar Projeto</span>
                    <motion.span
                      className="absolute inset-0 bg-primary opacity-50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-12 px-6">
                    Ver Nosso Trabalho
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </HeroWrapper>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <DevelopmentJourney />
          </div>
        </section>
        <section id="servicos" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <FadeUp>
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-medium mb-4">Nossos Serviços</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  Soluções personalizadas focadas em desempenho, design e resultados para sua presença digital.
                </p>
              </div>
            </FadeUp>

            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </motion.div>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        <section id="sobre" className="py-24 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border mb-2 bg-background">
                    <BarChart3 className="h-4 w-4" />
                    <span>Performance em Primeiro Lugar</span>
                  </div>

                  <h2 className="text-3xl font-medium">Especialistas em Web Development</h2>

                  <p className="text-muted-foreground">
                    Na Nave Mãe, combinamos expertise técnica com design criativo para entregar sites que não apenas
                    parecem ótimos, mas também têm desempenho excepcional.
                  </p>

                  <ul className="space-y-4">
                    <motion.li
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Sites Otimizados</span>
                        <p className="text-sm text-muted-foreground">
                          Criamos sites rápidos e otimizados com excelentes pontuações de desempenho.
                        </p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                        <Smartphone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Responsivos em Todos os Dispositivos</span>
                        <p className="text-sm text-muted-foreground">
                          Designs modernos que garantem uma experiência perfeita em qualquer tela.
                        </p>
                      </div>
                    </motion.li>

                    <motion.li
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                        <Search className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">SEO Avançado</span>
                        <p className="text-sm text-muted-foreground">
                          Arquitetura amigável para SEO para melhores classificações nos motores de busca.
                        </p>
                      </div>
                    </motion.li>
                  </ul>

                  <div>
                    <Button asChild>
                      <Link href="#portfolio">
                        Ver Exemplos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <PerformanceSection />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <FadeUp>
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-medium mb-4">Projetos Recentes</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                  Confira alguns de nossos trabalhos mais recentes e veja como podemos transformar sua presença online.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <FadeUp key={item} delay={0.2 * item}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg aspect-video bg-muted"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-white font-medium">Projeto {item}</h3>
                      <p className="text-white/80 text-sm">Desenvolvimento Web</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">Ver Todos os Projetos</Button>
            </div>
          </div>
        </section>

        <section id="contato" className="py-24 bg-primary/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <h2 className="text-3xl font-medium mb-4">Pronto para começar?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Vamos trabalhar juntos para criar um site que represente perfeitamente sua marca e ajude você a alcançar
                  seus objetivos de negócio.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="h-12 px-8">
                    Entre em Contato
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <motion.footer
        className="border-t py-12 bg-muted/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="h-5 w-5" />
                <span className="font-medium">Nave Mãe</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Desenvolvimento web profissional com foco em performance, design e resultados.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Sites Dinâmicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    WordPress
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">contato@navemae.com</li>
                <li className="text-sm text-muted-foreground">+55 (11) 9999-9999</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}