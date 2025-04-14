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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeUp, StaggerChildren, StaggerItem, HeroWrapper } from "@/components/motion"

// Define a interface de projeto para o lado do cliente
interface Project {
  slug: string;
  title: string;
  description: string;
  client: string;
  date: string;
  category: string;
  services: string[];
  image?: string;
  images?: string[];
}

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Função para buscar projetos da API
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/projects')
        
        if (!response.ok) {
          throw new Error('Falha ao buscar projetos')
        }
        
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Erro ao carregar projetos:', error)
        // Dados de fallback caso a API falhe
        setProjects([
          {
            slug: 'portal-interdimensional',
            title: "Portal Interdimensional",
            category: "Desenvolvimento Web",
            description: "Redesign completo com interface que transcende o espaço-tempo.",
            client: "Corporação Nebulosa",
            date: "2025-03-15",
            services: ["Design UI/UX", "Desenvolvimento Frontend", "SEO"]
          },
          {
            slug: 'ecommerce-jupteriano',
            title: "E-commerce Premium Jupteriano",
            category: "Loja Virtual",
            description: "Plataforma de vendas completa com entregas em qualquer lua de Júpiter.",
            client: "JupStore",
            date: "2025-02-10",
            services: ["E-commerce", "UX/UI Design", "Desenvolvimento Frontend", "Desenvolvimento Backend"]
          },
          {
            slug: 'aplicacao-educacional-marciana',
            title: "Aplicação Educacional Marciana",
            category: "Aplicação Web",
            description: "Sistema de aprendizado online que traduz conhecimento terrestre para qualquer espécie.",
            client: "Academia Marciana",
            date: "2025-01-20",
            services: ["Desenvolvimento Web", "UX/UI Design", "Plataforma Educacional"]
          }
        ])
      } finally {
        setLoading(false)
      }
    }
    
    fetchProjects()
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null

  const services = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Desenvolvimento Intergaláctico",
      description: "Sites responsivos que funcionam em qualquer dispositivo da Via Láctea."
    },
    {
      icon: <Rocket className="h-5 w-5 text-primary" />,
      title: "Landing Pages Orbitais",
      description: "Páginas de conversão que atraem visitantes como um campo gravitacional."
    },
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: "SEO Extraterrestre",
      description: "Estratégias para ser encontrado em qualquer sistema solar."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Velocidade Warp",
      description: "Sites com velocidade mais rápida que a luz. Isso não é ficção científica."
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: "E-commerce Cósmico",
      description: "Lojas virtuais que vendem para todos os quadrantes da galáxia."
    },
    {
      icon: <PaintBucket className="h-5 w-5 text-primary" />,
      title: "Design UI/UX Alienígena",
      description: "Interfaces tão intuitivas que até ETs conseguem navegar sem tradutor."
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
            {["BASE", "SERVIÇOS", "MISSÕES", "CONTATO"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * ["BASE", "SERVIÇOS", "MISSÕES", "CONTATO"].indexOf(item) }}
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
            {theme === 'dark' ? 'MODO SOL' : 'MODO ECLIPSE'}
          </button>
          <Link href="/contato" className="text-sm hover:text-primary transition-colors">
            CONTATO          </Link>
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
                <h1 className="max-w-3xl text-5xl md:text-7xl font-light leading-tight tracking-tight">
                  <span className="gradient-text">COLONIZAMOS</span>
                  <br />
                  O UNIVERSO
                  <br />
                  DIGITAL.
                </h1>
              </FadeUp>

              <div className="mt-24 flex flex-col md:flex-row justify-between">
                <div className="max-w-md">
                  <FadeUp delay={0.2}>
                    <Button
                      className="btn-gradient rounded-full px-8 py-6"
                      asChild
                    >
                      <Link href="/contato">
                        <span className="text-lg font-light tracking-wide flex items-center">
                          INICIAR ABDUÇÃO
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </Button>
                  </FadeUp>

                  <FadeUp delay={0.3}>
                    <p className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-80">
                      SOMOS ESPECIALISTAS EM DESENVOLVIMENTO WEB DE OUTRO PLANETA.
                    </p>
                  </FadeUp>
                </div>

                <FadeIn delay={0.4}>
                  <div className="flex items-end mt-12 md:mt-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">NOSSA ESPÉCIE</span>
                      <span className="h-px w-12 bg-primary"></span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeUp delay={0.5}>
                <div className="mt-24 gradient-divider mb-8"></div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Criamos experiências digitais que combinam design intuitivo com tecnologia
                  avançada para construir, escalar e colonizar sua presença online. Desenvolvemos com tecnologias
                  além da compreensão humana para criar sites e aplicações que viajam em velocidade warp,
                  com segurança de nível intergaláctico e experiência do usuário transcendental.
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
                    NOSSAS
                    <br />
                    <span className="gradient-text">TECNOLOGIAS ALIENÍGENAS</span>
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0">
                    Oferecemos serviços de desenvolvimento web de outro mundo,
                    perfeitamente adaptados às necessidades da sua espécie empresarial.
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
                    MISSÕES
                    <br />
                    <span className="gradient-text">COMPLETADAS</span>
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0">
                    Explore algumas das nossas incursões recentes e descubra como
                    podemos transportar sua presença digital para uma nova dimensão.
                  </p>
                </div>
              </StaggerItem>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                  // Estado de carregamento
                  Array.from({ length: 3 }).map((_, index) => (
                    <StaggerItem key={`skeleton-${index}`}>
                      <div className="p-6 border border-border bg-card">
                        <div className="aspect-video bg-accent/10 mb-4 rounded-md animate-pulse"></div>
                        <div className="h-6 w-24 bg-accent/10 rounded-full mb-4 animate-pulse"></div>
                        <div className="h-8 w-full bg-accent/10 rounded-md mb-4 animate-pulse"></div>
                        <div className="h-4 w-32 bg-accent/10 rounded-md animate-pulse"></div>
                      </div>
                    </StaggerItem>
                  ))
                ) : (
                  // Projetos carregados
                  projects.map((project) => (
                    <StaggerItem key={project.slug}>
                      <Link href={`/projetos/${project.slug}`}>
                        <motion.div
                          className="group cursor-pointer"
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <div className="aspect-video bg-accent/10 mb-4 overflow-hidden rounded-md">
                            <div className="w-full h-full relative">
                              {project.image ? (
                                <motion.img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                  initial={{ scale: 1 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.5 }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="text-muted-foreground text-sm">Evidência Extraterrestre</span>
                                </div>
                              )}
                              <div className="absolute inset-0 modern-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            </div>
                          </div>
                          <div className="modern-badge inline-block mb-2">{project.category}</div>
                          <h3 className="text-xl font-light mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                          <div className="flex items-center mt-4">
                            <span className="text-sm mr-2 text-muted-foreground group-hover:text-primary transition-colors">Examinar missão</span>
                            <ArrowRight className="h-4 w-4 text-primary" />
                          </div>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  ))
                )}
              </div>

              <StaggerItem>
                <div className="mt-16 flex justify-center">
                  <Button
                    className="btn-gradient-outline rounded-full px-8 py-4"
                    asChild
                  >
                    <Link href="/projetos">
                      <span className="text-md font-light tracking-wide flex items-center">
                        VER TODOS OS PROJETOS
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 md:py-32 border-t border-border">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <FadeUp>
                <h2 className="text-5xl font-light tracking-tight mb-12">
                  VAMOS FORMAR UMA
                  <br />
                  <span className="gradient-text">ALIANÇA GALÁCTICA</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <Button
                  className="btn-gradient rounded-full px-8 py-6"
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
              Desenvolvimento web profissional com tecnologia tão avançada que parece magia.
              Transformando sua visão em sinais digitais detectáveis por toda a galáxia.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-medium mb-4">CONTATO</h3>
            <p className="text-sm text-muted-foreground">contato@navemae.com</p>
            <p className="text-sm text-muted-foreground">+55 (11) 9999-9999</p>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-medium mb-4">REDE SUBNEURAL</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram Espacial</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn Cósmico</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Behance Sideral</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados em todos os sistemas solares.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Tratado Intergaláctico
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Não-Invasão
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}