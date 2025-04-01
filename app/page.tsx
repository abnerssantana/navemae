"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Zap,
  Code,
  Search,
  Rocket,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // This ensures dark mode is set as default
  useEffect(() => {
    if (mounted && !theme) {
      setTheme("dark");
    }
  }, [mounted, theme, setTheme]);

  // Determine the logo source based on the current theme
  const logoSrc = theme === "dark" ? "/logo-white.png" : "/logo.png";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const services = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Sites Interestelares",
      description: "Websites responsivos com experiências interativas de outro planeta."
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Landing Pages",
      description: "Páginas de conversão que atraem visitantes como um raio trator."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "SEO Avançado",
      description: "Estratégias para deixar seu site visível em toda a galáxia digital."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance Cósmica",
      description: "Velocidade de dobra espacial para melhorar a experiência do usuário."
    }
  ];

  const projects = [
    {
      title: "Portal Dimensional",
      category: "Desenvolvimento Web",
      description: "Redesign completo com interface que parece de outro mundo"
    },
    {
      title: "E-commerce Galáctico",
      category: "Loja Virtual",
      description: "Plataforma de vendas com tecnologia que transcende o ordinário"
    },
    {
      title: "App Educacional Orbital",
      category: "Aplicação Web",
      description: "Sistema de aprendizado que expande horizontes como o universo"
    }
  ];

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header simplificado */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </Link>
            <Link href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </Link>
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>
          
          {/* Theme toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              className="h-8 w-8"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
              <Link href="/contato">
                Iniciar Missão
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label="Toggle theme"
              className="h-8 w-8"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
              <div className="container h-full flex flex-col pt-20 px-4">
                <nav className="flex flex-col gap-6 text-lg">
                  <Link href="#servicos" onClick={() => setMobileMenuOpen(false)}>
                    Serviços
                  </Link>
                  <Link href="#projetos" onClick={() => setMobileMenuOpen(false)}>
                    Projetos
                  </Link>
                  <Link href="#sobre" onClick={() => setMobileMenuOpen(false)}>
                    Sobre
                  </Link>
                  <Link href="#contato" onClick={() => setMobileMenuOpen(false)}>
                    Contato
                  </Link>
                </nav>
                <div className="mt-8">
                  <Button className="w-full bg-primary/90 hover:bg-primary" asChild>
                    <Link href="/contato">
                      Iniciar Missão
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with dark mode optimized */}
        <section className="relative border-b">
          <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border border-primary/30 mb-6 bg-primary/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="h-4 w-4 text-primary" />
              <span>Tecnologia de outro planeta</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Decolando sua presença{" "}
              <span className="text-primary relative">
                digital
                <span className="absolute bottom-1 left-0 h-1 w-full bg-primary/30"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-xl text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Desenvolvimento web com padrões extraterrestres para construir, escalar e 
              otimizar sua presença online além de qualquer expectativa terrestre.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button size="lg" className="bg-primary/90 hover:bg-primary" asChild>
                <Link href="/contato">
                  <span>Iniciar Missão</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projetos">
                  Ver Nossas Expedições
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Background with space theme optimized for dark mode */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
        </section>

        {/* Services Grid - Optimized for dark mode */}
        <section id="servicos" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Nossas Tecnologias</h2>
              <p className="text-muted-foreground">
                Soluções que parecem de outro mundo, mas são perfeitamente adaptadas para sua realidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border/30 hover:border-primary/40 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="font-medium">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual demo section - Dark mode optimized */}
        <section className="py-20 border-t border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <motion.div 
                  className="bg-black rounded-lg overflow-hidden shadow-lg border border-border/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-400 ml-2">alien-styles.css</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <pre className="text-xs md:text-sm text-green-400 font-mono">
                      <div>/* Estilos interplanetários */</div>
                      <div>.cosmic-header {'{'}</div>
                      <div>  display: flex;</div>
                      <div>  align-items: center;</div>
                      <div>  justify-content: space-between;</div>
                      <div>  backdrop-filter: blur(8px);</div>
                      <div>{'}'}</div>
                      <div></div>
                      <div>.alien-gradient {'{'}</div>
                      <div>  background: linear-gradient(</div>
                      <div>    to right,</div>
                      <div>    rgba(var(--alien-green), 0.2),</div>
                      <div>    transparent,</div>
                      <div>    rgba(var(--alien-blue), 0.1)</div>
                      <div>  );</div>
                      <div>{'}'}</div>
                      <div></div>
                      <div>.warp-button {'{'}</div>
                      <div>  background: var(--alien-green);</div>
                      <div>  color: var(--space-black);</div>
                      <div>  border: none;</div>
                      <div>  border-radius: 0.25rem;</div>
                      <div>{'}'}</div>
                    </pre>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-2xl md:text-3xl font-medium mb-4">Tecnologia<br />de outra dimensão</h2>
                  <p className="text-muted-foreground mb-6">
                    Utilizamos as mais avançadas tecnologias da galáxia web para criar sites que transcendem
                    as expectativas terrenas em velocidade, segurança e experiência do usuário.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Framework Next.js para velocidade intergaláctica",
                      "Design responsivo para dispositivos de todos os planetas",
                      "Otimização Core Web Vitals que desafia a física",
                      "Código limpo que parece criado por inteligências superiores"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects - Dark mode optimized */}
        <section id="projetos" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Nossas Expedições</h2>
              <p className="text-muted-foreground">
                Explore nossos projetos recentes e descubra como nossa tecnologia alienígena 
                transformou a presença digital de nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-card border border-border/30 rounded-lg overflow-hidden group hover:border-primary/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="h-48 bg-muted/30 flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/50"></div>
                    <span className="text-muted-foreground text-sm">Visualização do Projeto</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary mb-2">{project.category}</div>
                    <h3 className="font-medium mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <Link href="#" className="text-sm inline-flex items-center text-primary group-hover:underline">
                      Ver detalhes da missão
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/portfolio">Explorar todo o universo de projetos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section - Dark mode optimized*/}
        <section id="contato" className="py-20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Pronto para decolar?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Entre em contato para uma comunicação interplanetária e descubra como nossa tecnologia 
                alienígena pode transformar suas ideias em realidade digital.
              </p>
              <Button size="lg" className="bg-primary/90 hover:bg-primary" asChild>
                <Link href="/contato">
                  <span>Estabelecer Contato</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Dark mode optimized */}
      <footer className="border-t py-12 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
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
              <p className="text-sm text-muted-foreground max-w-xs">
                Desenvolvimento web intergaláctico com tecnologia que transcende as expectativas humanas.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Serviços</h3>
              <ul className="space-y-2">
                {[
                  ["Sites Interestelares", "#"],
                  ["Landing Pages", "#"],
                  ["WordPress Orbital", "#"],
                  ["SEO Cósmico", "#"]
                ].map(([label, url], i) => (
                  <li key={i}>
                    <Link href={url} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Base Espacial</h3>
              <ul className="space-y-2">
                {[
                  ["Nossa História", "#sobre"],
                  ["Expedições", "#projetos"],
                  ["Canal de Contato", "#contato"]
                ].map(([label, url], i) => (
                  <li key={i}>
                    <Link href={url} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Comunicação</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">contato@navemae.com</li>
                <li className="text-sm text-muted-foreground">+55 (11) 9999-9999</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados em toda a galáxia.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos Interestelares
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidade Cósmica
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}