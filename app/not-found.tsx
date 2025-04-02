"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/motion"

export default function NotFound() {
  const [count, setCount] = useState(10)
  
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000)
    return () => clearInterval(timer as NodeJS.Timeout)
  }, [count])

  useEffect(() => {
    if (count === 0) {
      window.location.href = "/"
    }
  }, [count])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-6 z-40 relative">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-accent"></div>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="relative">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          <StaggerChildren>
            <StaggerItem>
              <motion.div 
                className="text-9xl font-light gradient-text mb-6"
                animate={{ 
                  textShadow: ["0 0 10px rgba(0,0,0,0)", "0 0 30px rgba(var(--primary), 0.5)", "0 0 10px rgba(0,0,0,0)"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                404
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-4xl font-light mb-6">SINAL PERDIDO</h1>
            </StaggerItem>

            <StaggerItem>
              <p className="max-w-md mx-auto text-muted-foreground mb-12">
                Parece que sua nave se desviou do curso planejado e entrou em um setor desconhecido do universo digital. 
                Esta coordenada não existe em nosso mapa estelar.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="btn-gradient rounded-full px-6 py-5"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>VOLTAR À BASE</span>
                  </Link>
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  Retorno automático em <span className="text-primary">{count}s</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
        
        <div className="mt-20">
          <FadeUp delay={0.5}>
            <div className="dot-pattern w-48 h-48 mx-auto opacity-20"></div>
          </FadeUp>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nave Mãe. Todos os direitos reservados em todos os sistemas solares.
        </p>
      </footer>
    </div>
  )
}