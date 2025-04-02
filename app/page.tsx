"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  Code,
  Search,
  Rocket,
  Zap,
  ArrowRight,
  ShoppingCart,
  PaintBucket,
  ArrowUpRight,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeUp, StaggerChildren, StaggerItem, HeroWrapper } from "@/components/motion"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null

  const services = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Desenvolvimento Web",
      description: "Sites responsivos com experiências interativas e performáticas."
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: "Landing Pages",
      description: "Páginas de conversão estratégicas que transformam visitantes em clientes."
    },
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: "SEO Avançado",
      description: "Estratégias para aumentar sua visibilidade online."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Performance",
      description: "Velocidade é essencial. Sites que carregam instantaneamente."
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: "E-commerce",
      description: "Lojas virtuais completas com gestão de produtos e pagamentos."
    },
    {
      icon: <PaintBucket className="h-5 w-5 text-primary" />,
      title: "UI/UX Design",
      description: "Interfaces intuitivas que proporcionam experiências memoráveis."
    }
  ]

  const projects = [
    {
      title: "Portal Institucional",
      category: "Desenvolvimento Web",
      description: "Redesign completo com interface moderna e sistema de gerenciamento de conteúdo."
    },
    {
      title: "E-commerce Premium",
      category: "Loja Virtual",
      description: "Plataforma de vendas completa com integração de pagamentos e logística."
    },
    {
      title: "Aplicação Educacional",
      category: "Aplicação Web",
      description: "Sistema de aprendizado online com recursos interativos e gamificação."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
        >
          <Button 
            variant="ghost" 
            className="absolute top-6 right-6 p-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="h-0.5 w-6 bg-foreground rotate-45 absolute"></span>
            <span className="h-0.5 w-6 bg-foreground -rotate-45 absolute"></span>
          </Button>
          
          <nav className="flex flex-col items-center space-y-8">
            {["HOME", "SERVIÇOS", "PROJETOS", "SOBRE", "CONTATO"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ["HOME", "SERVIÇOS", "PROJETOS", "SOBRE", "CONTATO"].indexOf(item) }}
              >
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="text-4xl font-light tracking-tight hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between p-6 z-40 relative">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-accent"></div>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            className="text-sm transition-colors hover:text-primary"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <Link href="/contato" className="text-sm hover:text-primary transition-colors">
            CONTATO
          </Link>
          <button 
            className="flex flex-col space-y-1"
            onClick={() => setMenuOpen(true)}
          >
            <span className="h-0.5 w-6 bg-foreground"></span>
            <span className="h-0.5 w-6 bg-foreground"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Hero Section */}
        <HeroWrapper>
          <section className="relative py-16 md:py-24">
            <div className="relative">
              <FadeUp>
                <h1 className="max-w-3xl text-6xl md:text-7xl font-light leading-tight tracking-tight">
                  <span className="gradient-text">DESENVOLVEMOS</span>
                  <br />
                  EXPERIÊNCIAS
                  <br />
                  DIGITAIS.
                </h1>
              </FadeUp>
              
              <div className="mt-24 flex flex-col md:flex-row justify-between">
                <div className="max-w-md">
                  <FadeUp delay={0.2}>
                    <Button 
                      variant="outline" 
                      className="rounded-full border-2 px-8 border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link href="/contato">
                        <span className="relative flex items-center">
                          INICIAR PROJETO
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </FadeUp>
                  
                  <FadeUp delay={0.3}>
                    <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                      SOMOS ESPECIALISTAS EM DESENVOLVIMENTO WEB
                      <br />
                      COM FOCO EM DESIGN E PERFORMANCE.
                    </p>
                  </FadeUp>
                </div>
                
                <FadeIn delay={0.4}>
                  <div className="flex items-end mt-12 md:mt-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">QUEM SOMOS</span>
                      <span className="h-px w-12 bg-primary"></span>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <FadeUp delay={0.5}>
                <div className="mt-24 gradient-divider mb-8"></div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Criamos experiências digitais que combinam design intuitivo com tecnologia
                  avançada para construir, escalar e otimizar sua presença online. Desenvolvemos com as tecnologias
                  mais recentes para criar sites e aplicações que se destacam em velocidade, segurança e experiência do usuário.
                </p>
              </FadeUp>
            </div>
          </section>
        </HeroWrapper>

        {/* Services Section */}
        <section id="serviços" className="py-24 md:py-32">
          <div className="relative">
            <StaggerChildren>
              <StaggerItem>
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                  <h2 className="text-5xl font-light tracking-tight">
                    NOSSOS
                    <br />
                    <span className="gradient-text">SERVIÇOS</span>
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0">
                    Oferecemos serviços abrangentes de desenvolvimento web, 
                    perfeitamente adaptados às necessidades do seu negócio.
                  </p>
                </div>
              </StaggerItem>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="p-6 border border-border hover:border-primary/40 transition-colors bg-card"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-light mt-6 mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <div className="mt-6 h-px w-0 bg-primary transition-all duration-300 group-hover:w-16"></div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-24 md:py-32 border-t border-border">
          <div className="relative">
            <StaggerChildren>
              <StaggerItem>
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                  <h2 className="text-5xl font-light tracking-tight">
                    PROJETOS
                    <br />
                    <span className="gradient-text">SELECIONADOS</span>
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0">
                    Explore alguns dos nossos trabalhos recentes e descubra como 
                    podemos transformar sua presença digital.
                  </p>
                </div>
              </StaggerItem>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="group cursor-pointer"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <div className="aspect-video bg-accent/10 mb-4 overflow-hidden rounded-md">
                        <div className="w-full h-full flex items-center justify-center relative">
                          <div className="absolute inset-0 modern-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                          <span className="text-muted-foreground text-sm">Visualização do Projeto</span>
                        </div>
                      </div>
                      <div className="modern-badge inline-block mb-2">{project.category}</div>
                      <h3 className="text-xl font-light mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="flex items-center mt-4">
                        <span className="text-sm mr-2 text-muted-foreground group-hover:text-primary transition-colors">Ver projeto</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 md:py-32 border-t border-border">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <FadeUp>
                <h2 className="text-5xl font-light tracking-tight mb-12">
                  VAMOS TRABALHAR
                  <br />
                  <span className="gradient-text">JUNTOS</span>
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <Button 
                  className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 transition-colors"
                  asChild
                >
                  <Link href="/contato">
                    <span className="text-lg font-light tracking-wide flex items-center">
                      INICIAR CONVERSA
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary"></div>
              <div className="h-6 w-6 rounded-full bg-accent"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-xs">
              Desenvolvimento web profissional com foco em resultados.
              Transformando sua visão em uma presença digital impactante.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-medium mb-4">CONTATO</h3>
            <p className="text-sm text-muted-foreground">contato@navemae.com</p>
            <p className="text-sm text-muted-foreground">+55 (11) 9999-9999</p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-medium mb-4">SOCIAL</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Behance</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}