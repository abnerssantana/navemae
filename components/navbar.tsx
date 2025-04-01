"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { LogoText } from "@/components/logo-text"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  // Make sure dark theme is set as default
  useEffect(() => {
    if (mounted && !theme) {
      setTheme("dark")
    }
  }, [mounted, theme, setTheme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Don't render anything until after hydration to avoid UI flicker
  if (!mounted) return null

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 border-b shadow-sm" 
          : "bg-background/50"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Replace Image with the new LogoText component */}
        <LogoText />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {["Serviços", "Projetos", "Sobre", "Contato"].map((item, i) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        {/* Theme toggle and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="h-8 w-8 rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button asChild size="sm" className="font-medium rounded-full px-5">
            <Link href="/contato">
              Iniciar Projeto
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="h-8 w-8 rounded-full"
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
            className="h-8 w-8 rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm md:hidden pt-16"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container h-full flex flex-col pt-8 px-4">
                <nav className="flex flex-col space-y-8 items-center text-lg">
                  {["Serviços", "Projetos", "Sobre", "Contato"].map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.2 }}
                    >
                      <Link 
                        href={`#${item.toLowerCase()}`} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="relative text-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button className="rounded-full px-8 py-6 font-medium" asChild>
                    <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                      Iniciar Projeto
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}