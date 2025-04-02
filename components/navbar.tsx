"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogoText } from "@/components/logo-text";

// Shadcn UI components
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Theme provider
import { useTheme } from "next-themes";

// Icons
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Instagram,
  Linkedin,
  Globe
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Links de navegação principal
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "#serviços", dropdown: true },
  { name: "Projetos", path: "#projetos", dropdown: true },
  { name: "Sobre", path: "#sobre" },
  { name: "Contato", path: "#contato" },
];

// Links para dropdown de serviços
const serviceLinks = [
  { title: "Desenvolvimento Web", route: "/servicos/desenvolvimento-web" },
  { title: "Landing Pages", route: "/servicos/landing-pages" },
  { title: "E-commerce", route: "/servicos/e-commerce" },
  { title: "SEO Avançado", route: "/servicos/seo" },
  { title: "UI/UX Design", route: "/servicos/ui-ux-design" },
];

// Links para dropdown de projetos
const projectLinks = [
  { title: "Todos os Projetos", route: "/portfolio" },
  { title: "Web Apps", route: "/portfolio/web-apps" },
  { title: "E-commerce", route: "/portfolio/e-commerce" },
  { title: "Landing Pages", route: "/portfolio/landing-pages" },
];

// Links de redes sociais (substituir com os links reais)
const socialLinks = {
  instagram: "https://instagram.com/navemae",
  linkedin: "https://linkedin.com/company/navemae",
  website: "https://navemae.com",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Detectar scroll para mudar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After mounting, we can safely use the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Make sure dark theme is set as default
  useEffect(() => {
    if (mounted && !theme) {
      setTheme("dark");
    }
  }, [mounted, theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-background/50"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-10">
          <LogoText />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Handle dropdown menus
            if (link.dropdown) {
              if (link.name === "Serviços") {
                return (
                  <DropdownMenu key={link.path}>
                    <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1 focus:outline-none">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {serviceLinks.map((service) => (
                        <DropdownMenuItem key={service.route} className="focus:bg-primary/10">
                          <Link href={service.route} className="w-full">
                            {service.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else if (link.name === "Projetos") {
                return (
                  <DropdownMenu key={link.path}>
                    <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1 focus:outline-none">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {projectLinks.map((project) => (
                        <DropdownMenuItem key={project.route} className="focus:bg-primary/10">
                          <Link href={project.route} className="w-full">
                            {project.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
            }
            
            // Regular links
            return (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
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

        {/* Mobile Menu - Using Sheet component */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-border flex justify-between items-center">
                <LogoText />
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
              </div>
              <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
                {/* Serviços mobile dropdown */}
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Serviços</div>
                  <div className="pl-2 space-y-1 border-l border-border">
                    {serviceLinks.map((service) => (
                      <SheetClose key={service.route} asChild>
                        <Link
                          href={service.route}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary py-1"
                        >
                          {service.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                
                {/* Projetos mobile dropdown */}
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Projetos</div>
                  <div className="pl-2 space-y-1 border-l border-border">
                    {projectLinks.map((project) => (
                      <SheetClose key={project.route} asChild>
                        <Link
                          href={project.route}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary py-1"
                        >
                          {project.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
                
                {/* Other main links */}
                {navLinks.filter(link => !link.dropdown).map((link) => (
                  <SheetClose key={link.path} asChild>
                    <Link
                      href={link.path}
                      className="flex items-center text-base font-medium text-foreground hover:text-primary py-2"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="p-4 border-t border-border space-y-4">
                <div className="flex justify-center space-x-4">
                  <SocialButton href={socialLinks.instagram} icon={<Instagram size={18} />} />
                  <SocialButton href={socialLinks.linkedin} icon={<Linkedin size={18} />} />
                  <SocialButton href={socialLinks.website} icon={<Globe size={18} />} />
                </div>
                <SheetClose asChild>
                  <Button
                    className="w-full rounded-full"
                    asChild
                  >
                    <Link href="/contato">Iniciar Projeto</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

function SocialButton({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary"
    >
      {icon}
    </a>
  );
}