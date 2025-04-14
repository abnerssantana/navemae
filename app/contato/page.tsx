"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  ArrowLeft,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

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
        
        <div className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            VOLTAR À BASE
          </Link>
        </div>
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
            <p className="max-w-2xl text-muted-foreground">
              Nossa base está pronta para receber suas mensagens. Utilize os canais abaixo
              para estabelecer contato com nossa equipe.
            </p>
          </FadeUp>
          
          <div className="mt-24 gradient-divider mb-24"></div>

          {/* Contact Cards in Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <StaggerChildren>
              {/* Email Contact */}
              <StaggerItem>
                <div className="p-6 group cursor-pointer">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-light mt-6 mb-3 group-hover:text-primary transition-colors">Email Cósmico</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Nossa caixa de mensagens está sempre aberta para receber suas comunicações.
                  </p>
                  
                  <a 
                    href="mailto:contato@navemae.digital" 
                    className="text-lg hover:text-primary transition-colors"
                  >
                    contato@navemae.digital
                  </a>
                  
                  <div className="mt-6 h-px w-0 bg-primary transition-all duration-300 group-hover:w-16"></div>
                </div>
              </StaggerItem>

              {/* Phone Contact */}
              <StaggerItem>
                <div className="p-6 group cursor-pointer">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mb-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-light mt-6 mb-3 group-hover:text-primary transition-colors">Comunicador de Voz</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Para comunicações diretas e em tempo real, ative o seu comunicador.
                  </p>
                  
                  <a 
                    href="tel:+551199999999" 
                    className="text-lg hover:text-primary transition-colors"
                  >
                    +55 (11) 9999-9999
                  </a>
                  
                  <div className="mt-6 h-px w-0 bg-primary transition-all duration-300 group-hover:w-16"></div>
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* Visual Element with reduced height */}
        <section className="py-12">
          <FadeIn>
            <div className="relative h-32 w-full overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-20"></div>
              <div className="absolute inset-0 modern-gradient-subtle opacity-40"></div>
            </div>
          </FadeIn>
        </section>

        {/* Call to Action - Simplified */}
        <section className="py-16 md:py-24">
          <StaggerChildren>
            <StaggerItem>
              <h2 className="text-3xl md:text-4xl font-light">
                Pronto para iniciar sua
                <br />
                <span className="gradient-text">missão intergaláctica?</span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <div className="mt-12">
                <Button
                  className="btn-gradient rounded-full px-8 py-6"
                  asChild
                >
                  <a href="mailto:contato@navemae.digital">
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
            <p className="text-sm text-muted-foreground">contato@navemae.digital</p>
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