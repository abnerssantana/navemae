"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  isDarkMode?: boolean
}

export function Navbar({ isDarkMode = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const logoSrc = isDarkMode ? "/logo.png" : "/logo-white.png"

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
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
            <Link href="/contato">
              Iniciar Missão
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
        
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