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
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  HeroWrapper,
  FadeUp,
  StaggerChildren,
  FadeIn,
} from "@/components/motion"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    setLoaded(true)
    
    // Add overflow hidden to body when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

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
      {/* Mobile-optimized header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container px-4 mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-20">
            <Compass className="h-5 w-5 text-primary" />
            <span className="font-medium">Nave Mãe</span>
          </Link>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contato">
                <span>Contato</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="mobile-menu md:hidden"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="mt-16 flex flex-col space-y-8">
                  <Link 
                    href="#servicos" 
                    className="flex items-center justify-between py-3 border-b text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg font-medium">Serviços</span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </Link>
                  <Link 
                    href="#sobre" 
                    className="flex items-center justify-between py-3 border-b text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg font-medium">Sobre</span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </Link>
                  <Link 
                    href="#portfolio" 
                    className="flex items-center justify-between py-3 border-b text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg font-medium">Portfólio</span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </Link>
                  <Link 
                    href="#contato" 
                    className="flex items-center justify-between py-3 border-b text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg font-medium">Contato</span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </Link>

                  <div className="pt-4">
                    <Button className="w-full" asChild>
                      <Link 
                        href="/contato"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>Entre em Contato</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="flex-1">
        <HeroWrapper>
          <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Alien green gradient background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 -left-4 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl alien-pulse"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -top-4 right-0 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute bottom-0 left-20 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
              />
            </div>

            <div className="container px-4 mx-auto text-center">
              <FadeIn delay={0.2}>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border mb-6 bg-muted/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Construction className="h-4 w-4 text-primary" />
                  <span>Desenvolvimento Web Profissional</span>
                </motion.div>
              </FadeIn>

              <FadeUp delay={0.4}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                  Sua solução completa para a{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">web.</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-1 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.6}>
                <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-muted-foreground">
                  Desenvolvimento web profissional para construir, escalar e otimizar sua presença online. Especialistas em sites dinâmicos, WordPress e SEO.
                </p>
              </FadeUp>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div 
                  className="w-full sm:w-auto" 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                >
                  <Button size="lg" className="h-12 px-6 relative overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10">Iniciar Projeto</span>
                    <motion.span
                      className="absolute inset-0 bg-primary opacity-50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Button>
                </motion.div>

                <motion.div 
                  className="w-full sm:w-auto" 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                >
                  <Button size="lg" variant="outline" className="h-12 px-6 w-full sm:w-auto">
                    Ver Nosso Trabalho
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </HeroWrapper>
       
        <section id="servicos" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <FadeUp>
              <div className="mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4">Nossos Serviços</h2>
                <p className="max-w-xl mx-auto text-muted-foreground">
                  Soluções personalizadas focadas em desempenho, design e resultados para sua presença digital.
                </p>
              </div>
            </FadeUp>

            <StaggerChildren staggerDelay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <FadeUp>
              <div className="mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-medium mb-4">Projetos Recentes</h2>
                <p className="max-w-xl mx-auto text-muted-foreground">
                  Confira alguns de nossos trabalhos mais recentes e veja como podemos transformar sua presença online.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <FadeUp key={item} delay={0.2 * item}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg aspect-video bg-muted"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Green overlay accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-white font-medium">Projeto {item}</h3>
                      <p className="text-white/80 text-sm">Desenvolvimento Web</p>
                      <div className="mt-3">
                        <motion.div 
                          className="inline-flex items-center text-sm text-primary"
                          whileHover={{ x: 5 }}
                        >
                          <span>Ver detalhes</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline">Ver Todos os Projetos</Button>
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 md:py-24 bg-primary/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <FadeUp>
                <h2 className="text-2xl sm:text-3xl font-medium mb-4">Pronto para começar?</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Vamos trabalhar juntos para criar um site que represente perfeitamente sua marca e ajude você a alcançar
                  seus objetivos de negócio.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button size="lg" className="h-12 px-8 w-full sm:w-auto">
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
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="h-5 w-5 text-primary" />
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
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sites Dinâmicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    WordPress
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SEO
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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

          <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
              © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}