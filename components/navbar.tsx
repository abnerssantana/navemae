"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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

  // Determine the logo source based on the current theme
  const logoSrc = theme === "dark" ? "/logo.png" : "/logo-white.png"

  // Don't render anything until after hydration to avoid UI flicker
  if (!mounted) return null

  return (
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
        
        {/* Mobile Menu Buttons */}
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
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden mt-16 h-screen">
            <div className="container h-full flex flex-col pt-4 px-4">
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
                  <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                    Iniciar Missão
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}