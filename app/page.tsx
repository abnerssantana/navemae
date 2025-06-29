"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16"
      >
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Nave Mãe
          </h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium">Digital</p>
          <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
        </div>
      </motion.header>

      {/* Main Content - Centered */}
      <motion.main 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center max-w-4xl mx-auto"
      >
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8"
          >
            vamos dominar o mundo?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground font-light mb-8"
          >
            desenvolvimento web de outro galáxia
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-base text-muted-foreground font-light max-w-2xl mx-auto mb-12"
          >
            Criamos experiências digitais que combinam design intuitivo com tecnologia 
            avançada para construir, escalar e colonizar sua presença online
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="text-center"
          >
            <h3 className="text-lg font-medium mb-4">Experimentos em Andamento</h3>
            <Link 
              href="https://magictraining.run/dashboard" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300 underline"
            >
              Magic Training
            </Link>
          </motion.div>
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 lg:bottom-16 lg:left-16 lg:right-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <Link 
              href="mailto:contato@navemae.digital" 
              className="hover:text-primary transition-colors duration-300"
            >
              Contato
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nave Mãe Digital
          </p>
        </div>
      </motion.footer>
    </div>
  )
}