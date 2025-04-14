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
import { FadeIn, FadeUp, StaggerChildren, StaggerItem, HeroWrapper, AnimatedHeroText, BlinkingCursor } from "@/components/motion"

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
  const [animationComplete, setAnimationComplete] = useState(false)

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

    // Timer para permitir animações iniciais completarem
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
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
            <motion.span
              className="h-0.5 w-6 bg-foreground absolute"
              animate={{ rotate: 45 }}
              initial={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <motion.span
              className="h-0.5 w-6 bg-foreground absolute"
              animate={{ rotate: -45 }}
              initial={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </Button>

          <nav className="flex flex-col items-center space-y-8">
            {["BASE", "SERVIÇOS", "MISSÕES", "CONTATO"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
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
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-5 w-5 rounded-full bg-primary"></div>
          <div className="h-5 w-5 rounded-full bg-accent"></div>
        </motion.div>
        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <button
            className="text-sm transition-colors hover:text-primary"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'MODO SOL' : 'MODO ECLIPSE'}
          </button>
          <Link href="/contato" className="text-sm hover:text-primary transition-colors">
            CONTATO
          </Link>
          <motion.button
            className="flex flex-col space-y-1"
            onClick={() => setMenuOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="h-0.5 w-6 bg-foreground"></span>
            <span className="h-0.5 w-6 bg-foreground"></span>
          </motion.button>
        </motion.div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Hero Section */}
        <HeroWrapper>
          <section className="relative py-16 md:py-24">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1 className="max-w-3xl text-5xl md:text-7xl font-light leading-tight tracking-tight">
                  <motion.span
                    className="gradient-text inline-block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    COLONIZAMOS
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    O UNIVERSO
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    DIGITAL
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    .
                  </motion.span>
                </h1>
              </motion.div>

              <div className="mt-24 flex flex-col md:flex-row justify-between">
                <div className="max-w-md">
                  <FadeUp delay={0.6}>
                    <Button
                      className="btn-gradient rounded-full px-8 py-6"
                      asChild
                    >
                      <Link href="/contato">
                        <motion.span
                          className="text-lg font-light tracking-wide flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          INICIAR ABDUÇÃO
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </motion.span>
                      </Link>
                    </Button>
                  </FadeUp>

                  <FadeUp delay={0.8}>
                    <motion.p
                      className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-80"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      SOMOS ESPECIALISTAS EM DESENVOLVIMENTO WEB DE OUTRO PLANETA.
                    </motion.p>
                  </FadeUp>
                </div>

                <FadeIn delay={1.2}>
                  <div className="flex items-end mt-12 md:mt-0">
                    <motion.div
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm">NOSSA ESPÉCIE</span>
                      <motion.span
                        className="h-px w-12 bg-primary"
                        whileHover={{ width: "60px" }}
                        transition={{ duration: 0.3 }}
                      ></motion.span>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>

              <FadeUp delay={1.4}>
                <motion.div
                  className="mt-24 gradient-divider mb-8"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                ></motion.div>
                <motion.p
                  className="max-w-xl text-sm leading-relaxed text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Criamos experiências digitais que combinam design intuitivo com tecnologia
                  avançada para construir, escalar e colonizar sua presença online. Desenvolvemos com tecnologias
                  além da compreensão humana para criar sites e aplicações que viajam em velocidade warp,
                  com segurança de nível intergaláctico e experiência do usuário transcendental.
                </motion.p>
              </FadeUp>
            </div>
          </section>
        </HeroWrapper>

        {/* Services Section */}
        <section id="serviços" className="py-24 md:py-32">
          <div className="relative">
            <StaggerChildren staggerDelay={0.1}>
              <StaggerItem>
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                  <motion.h2
                    className="text-5xl font-light tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    NOSSAS
                    <br />
                    <motion.span
                      className="gradient-text"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      TECNOLOGIAS ALIENÍGENAS
                    </motion.span>
                  </motion.h2>
                  <motion.p
                    className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Oferecemos serviços de desenvolvimento web de outro mundo,
                    perfeitamente adaptados às necessidades da sua espécie empresarial.
                  </motion.p>
                </div>
              </StaggerItem>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="p-6 border border-border hover:border-primary/40 transition-colors bg-card h-full flex flex-col"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-light mt-6 mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                      <motion.div
                        className="mt-6 h-px w-0 bg-primary"
                        whileHover={{ width: "4rem" }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
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
            <StaggerChildren staggerDelay={0.1}>
              <StaggerItem>
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                  <motion.h2
                    className="text-5xl font-light tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    MISSÕES
                    <br />
                    <motion.span
                      className="gradient-text"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      COMPLETADAS
                    </motion.span>
                  </motion.h2>
                  <motion.p
                    className="max-w-md text-sm leading-relaxed text-muted-foreground mt-6 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Explore algumas das nossas incursões recentes e descubra como
                    podemos transportar sua presença digital para uma nova dimensão.
                  </motion.p>
                </div>
              </StaggerItem>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                  // Estado de carregamento
                  Array.from({ length: 3 }).map((_, index) => (
                    <StaggerItem key={`skeleton-${index}`}>
                      <motion.div
                        className="p-6 border border-border bg-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="aspect-video bg-accent/10 mb-4 rounded-md"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <motion.div
                          className="h-6 w-24 bg-accent/10 rounded-full mb-4"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        ></motion.div>
                        <motion.div
                          className="h-8 w-full bg-accent/10 rounded-md mb-4"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        ></motion.div>
                        <motion.div
                          className="h-4 w-32 bg-accent/10 rounded-md"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                        ></motion.div>
                      </motion.div>
                    </StaggerItem>
                  ))
                ) : (
                  // Projetos carregados
                  projects.map((project, index) => (
                    <StaggerItem key={project.slug}>
                      <Link href={`/projetos/${project.slug}`}>
                        <motion.div
                          className="group cursor-pointer"
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
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
                              <motion.div
                                className="absolute inset-0 modern-gradient opacity-0 transition-opacity duration-500"
                                whileHover={{ opacity: 0.2 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="modern-badge inline-block mb-2">{project.category}</div>
                          <motion.h3
                            className="text-xl font-light mb-2 group-hover:text-primary transition-colors"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.div
                            className="flex items-center mt-4"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-sm mr-2 text-muted-foreground group-hover:text-primary transition-colors">
                              Examinar missão
                            </span>
                            <motion.div
                              animate={animationComplete ? { x: [0, 3, 0] } : {}}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: index * 0.2
                              }}
                            >
                              <ArrowRight className="h-4 w-4 text-primary" />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  ))
                )}
              </div>

              <StaggerItem>
                <motion.div
                  className="mt-16 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button
                    className="btn-gradient-outline rounded-full px-8 py-4"
                    asChild
                  >
                    <Link href="/projetos">
                      <motion.span
                        className="text-md font-light tracking-wide flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        VER TODOS OS PROJETOS
                        <motion.div
                          animate={animationComplete ? { x: [0, 5, 0] } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 md:py-32 border-t border-border">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-5xl font-light tracking-tight mb-12">
                  VAMOS FORMAR UMA
                  <br />
                  <motion.span
                    className="gradient-text"
                    initial={{ backgroundPosition: "0% 50%" }}
                    whileInView={{ backgroundPosition: "100% 50%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    viewport={{ once: true }}
                  >
                    ALIANÇA GALÁCTICA
                  </motion.span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  className="btn-gradient rounded-full px-8 py-6"
                  asChild
                >
                  <Link href="/contato">
                    <motion.span
                      className="text-lg font-light tracking-wide flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      INICIAR CONVERSA
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary"></div>
              <div className="h-6 w-6 rounded-full bg-accent"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-xs">
              Desenvolvimento web profissional com tecnologia tão avançada que parece magia.
              Transformando sua visão em sinais digitais detectáveis por toda a galáxia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <h3 className="text-sm font-medium mb-4">CONTATO</h3>
            <p className="text-sm text-muted-foreground">contato@navemae.digital</p>
            <p className="text-sm text-muted-foreground">+55 (11) 9999-9999</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
            <h3 className="text-sm font-medium mb-4">REDE SUBNEURAL</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram Espacial</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn Cósmico</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Behance Sideral</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center"
        >
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
        </motion.div>
      </footer>
    </div>
  )
}