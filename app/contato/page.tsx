"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  ArrowLeft,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-6 z-40 relative">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-accent"></div>
        </Link>
        
        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Link 
            href="/" 
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            VOLTAR À BASE
          </Link>
        </motion.div>
      </header>

      <main className="container mx-auto px-6 pt-12 pb-24">
        {/* Contact Hero Section */}
        <section className="py-16 md:py-24">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-12">
              CONTATO
              <br />
              <span className="gradient-text">INTERESTELAR</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-muted-foreground mb-16">
              Nossa base está pronta para receber suas mensagens. Utilize os canais de comunicação 
              abaixo para estabelecer contato com nossa equipe de especialistas intergalácticos.
            </p>
          </FadeUp>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <StaggerChildren>
              {/* Email Contact */}
              <StaggerItem>
                <motion.div
                  className="p-8 border border-border hover:border-primary/40 transition-all duration-300 bg-card rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-light mb-3">Email Cósmico</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Nossa caixa de mensagens está sempre aberta para receber suas comunicações, 
                    independente do fuso horário do seu planeta.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-lg hover:text-primary transition-colors group">
                    <a 
                      href="mailto:contato@navemae.digital" 
                      className="flex items-center group-hover:underline"
                    >
                      contato@navemae.digital
                      <Send className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Phone Contact */}
              <StaggerItem>
                <motion.div
                  className="p-8 border border-border hover:border-primary/40 transition-all duration-300 bg-card rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-light mb-3">Comunicador de Voz</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Para comunicações diretas e em tempo real, ative o seu comunicador 
                    e sintonize em nossa frequência.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-lg hover:text-primary transition-colors group">
                    <a 
                      href="tel:+551199999999" 
                      className="flex items-center group-hover:underline"
                    >
                      +55 (11) 9999-9999
                      <Send className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* Visual Element */}
        <section className="py-16">
          <FadeIn>
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 dot-pattern opacity-20"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 backdrop-blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <div className="absolute inset-0 modern-gradient-subtle opacity-40"></div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ or Additional Info Section */}
        <section className="py-16">
          <StaggerChildren>
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl font-light mb-12">
                Perguntas
                <br />
                <span className="gradient-text">Frequentes</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border-t border-border">
                  <h3 className="text-xl font-light mb-4">Horário de Operação</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa estação espacial opera em tempo integral, 24 horas por dia, 
                    7 dias por semana, seguindo o fuso horário de Brasília (UTC-3).
                  </p>
                </div>

                <div className="p-6 border-t border-border">
                  <h3 className="text-xl font-light mb-4">Tempo de Resposta</h3>
                  <p className="text-sm text-muted-foreground">
                    Todas as mensagens recebidas são processadas em até 24 horas terrestres. 
                    Para assuntos urgentes, utilize nosso comunicador de voz.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 border-t border-border">
          <StaggerChildren>
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">
                Pronto para iniciar sua
                <br />
                <span className="gradient-text">missão intergaláctica?</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="max-w-lg mx-auto text-center text-muted-foreground mb-12">
                Nossa nave está com os motores aquecidos para embarcar em uma nova jornada. 
                Vamos juntos explorar o universo digital e criar algo extraordinário para sua marca.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex justify-center">
                <Button
                  className="btn-gradient rounded-full px-8 py-6"
                  asChild
                >
                  <a href="mailto:contato@navemae.digital">
                    <span className="text-lg font-light tracking-wide flex items-center">
                      INICIAR COMUNICAÇÃO AGORA
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                  </a>
                </Button>
              </div>
            </StaggerItem>
          </StaggerChildren>
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