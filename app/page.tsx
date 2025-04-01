"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Globe,
  ArrowRight,
  Code,
  Search,
  Rocket,
  Zap,
  ExternalLink,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Navbar } from "@/components/navbar"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine the logo source based on the current theme
  const logoSrc = theme === "dark" ? "/logo-white.png" : "/logo.png"

  const services = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Desenvolvimento Web",
      description: "Sites responsivos com experiências interativas e performáticas para todos os dispositivos."
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Landing Pages",
      description: "Páginas de conversão estratégicas que transformam visitantes em clientes."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO Avançado",
      description: "Estratégias para aumentar sua visibilidade online e conquistar os primeiros resultados."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Otimização de Performance",
      description: "Velocidade é essencial. Garantimos que seu site carregue instantaneamente."
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

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b section-padding">
          <div className="container mx-auto px-4 py-16 md:py-28 flex flex-col items-center text-center">
            <motion.div
              className="modern-badge bg-primary/10 text-primary border border-primary/20 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Transformando ideias em realidade digital</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Desenvolvimento web 
              <span className="text-primary relative md:ml-2">
                inovador
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 385 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C90.5 -1.5 297.5 -1.5 384 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-xl text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Criamos experiências digitais que combinam design intuitivo com tecnologia 
              avançada para construir, escalar e otimizar sua presença online.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full px-6 font-medium" asChild>
                <Link href="/contato">
                  <span>Iniciar Projeto</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 font-medium" asChild>
                <Link href="#projetos">
                  Ver Portfólio
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="serviços" className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <motion.span 
                className="text-primary font-medium mb-2 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                NOSSOS SERVIÇOS
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Soluções digitais completas
              </motion.h2>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Oferecemos serviços abrangentes de desenvolvimento web, perfeitamente adaptados às necessidades do seu negócio.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard 
                    icon={service.icon} 
                    title={service.title} 
                    description={service.description} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="section-padding border-t border-b bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className="w-full lg:w-1/2 order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <div className="p-4 border-b border-border/30 flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">modern-code.tsx</span>
                  </div>
                  <div className="p-4 bg-card/80">
                    <pre className="text-xs md:text-sm font-mono">
                      <div><span className="text-blue-400">import</span> <span className="text-foreground">{'{'}</span> <span className="text-purple-400">motion</span> <span className="text-foreground">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">"framer-motion"</span>;</div>
                      <div>&nbsp;</div>
                      <div><span className="text-blue-400">export</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">ModernComponent</span>() <span className="text-foreground">{'{'}</span></div>
                      <div>&nbsp; <span className="text-blue-400">return</span> (</div>
                      <div>&nbsp; &nbsp; <span className="text-foreground">{'<'}</span><span className="text-purple-400">motion.div</span></div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-blue-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"rounded-xl p-6 bg-gradient-to-r from-primary/10 to-primary/5"</span></div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-blue-400">initial</span><span className="text-foreground">={'{'}</span> <span className="text-purple-400">opacity:</span> <span className="text-yellow-400">0</span> <span className="text-foreground">{'}'}</span></div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-blue-400">animate</span><span className="text-foreground">={'{'}</span> <span className="text-purple-400">opacity:</span> <span className="text-yellow-400">1</span> <span className="text-foreground">{'}'}</span></div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-blue-400">transition</span><span className="text-foreground">={'{'}</span> <span className="text-purple-400">duration:</span> <span className="text-yellow-400">0.5</span> <span className="text-foreground">{'}'}</span></div>
                      <div>&nbsp; &nbsp; <span className="text-foreground">{'>'}</span></div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-foreground">{'<'}</span><span className="text-purple-400">h2</span> <span className="text-blue-400">className</span><span className="text-foreground">=</span><span className="text-green-400">"text-2xl font-medium mb-4"</span><span className="text-foreground">{'>'}</span></div>
                      <div>&nbsp; &nbsp; &nbsp; &nbsp; Desenvolvimento Web Moderno</div>
                      <div>&nbsp; &nbsp; &nbsp; <span className="text-foreground">{'</'}</span><span className="text-purple-400">h2</span><span className="text-foreground">{'>'}</span></div>
                      <div>&nbsp; &nbsp; <span className="text-foreground">{'</'}</span><span className="text-purple-400">motion.div</span><span className="text-foreground">{'>'}</span></div>
                      <div>&nbsp; );</div>
                      <div><span className="text-foreground">{'}'}</span></div>
                    </pre>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2 order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-primary font-medium mb-2 block">TECNOLOGIA MODERNA</span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">Código limpo,<br/>Resultados impactantes</h2>
                <p className="text-muted-foreground mb-8">
                  Desenvolvemos com as tecnologias mais recentes para criar sites e aplicações 
                  que se destacam em velocidade, segurança e experiência do usuário.
                </p>
                <ul className="space-y-4">
                  {[
                    "Framework Next.js para performance otimizada",
                    "Design responsivo e acessível para todos os dispositivos",
                    "Otimização Core Web Vitals para melhor SEO",
                    "Código limpo e manutenível para evolução contínua"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section id="projetos" className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <motion.span 
                className="text-primary font-medium mb-2 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                PORTFÓLIO
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Projetos selecionados
              </motion.h2>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Explore alguns dos nossos trabalhos recentes e descubra como podemos transformar sua presença digital.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-card border border-border/30 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="h-56 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-muted-foreground text-sm">Visualização do Projeto</span>
                  </div>
                  <div className="p-6">
                    <div className="modern-badge bg-primary/10 text-primary mb-3">{project.category}</div>
                    <h3 className="font-medium text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-primary font-medium text-sm group-hover:underline"
                    >
                      Ver detalhes do projeto
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="rounded-full px-6" asChild>
                <Link href="/portfolio">Ver todos os projetos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="section-padding bg-secondary/30 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Vamos criar algo incrível juntos
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-8 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Entre em contato para discutir seu projeto e descobrir como podemos transformar 
                suas ideias em uma presença digital de sucesso.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button size="lg" className="rounded-full px-8 py-6 font-medium" asChild>
                  <Link href="/contato">
                    <span>Iniciar Conversa</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src={logoSrc} 
                  alt="Nave Mãe Logo" 
                  width={110}
                  height={30}
                  className="h-8 w-auto"
                  onError={(e) => {
                    // Fallback if logo isn't available
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <p className="text-muted-foreground max-w-xs">
                Desenvolvimento web profissional com foco em resultados. 
                Transformando sua visão em uma presença digital impactante.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Serviços</h3>
              <ul className="space-y-3">
                {[
                  ["Desenvolvimento Web", "#"],
                  ["Landing Pages", "#"],
                  ["E-commerce", "#"],
                  ["SEO", "#"]
                ].map(([label, url], i) => (
                  <li key={i}>
                    <Link 
                      href={url} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground">contato@navemae.com</li>
                <li className="text-muted-foreground">+55 (11) 9999-9999</li>
                <li className="mt-6">
                  <Button variant="outline" className="rounded-full px-4" asChild>
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}