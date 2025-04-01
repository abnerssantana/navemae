"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Layers, Paintbrush, Rocket, Server, Smartphone, Globe } from "lucide-react"
import { CssBuilder } from "@/components/css-builder"
import { FadeUp } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WebBuildingProcess() {
  const [buildProgress, setBuildProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [expandedView, setExpandedView] = useState(false)

  // Steps in the web development process
  const steps = [
    { icon: <Paintbrush />, name: "Design", color: "text-blue-500" },
    { icon: <Code />, name: "Frontend", color: "text-indigo-500" },
    { icon: <Database />, name: "Backend", color: "text-purple-500" },
    { icon: <Smartphone />, name: "Responsive", color: "text-pink-500" },
    { icon: <Rocket />, name: "Deploy", color: "text-orange-500" }
  ]

  // HTML snippets for the live preview
  const htmlSnippets = [
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nave Mãe</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Content will be added here -->
</body>
</html>`,

    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nave Mãe</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">Nave Mãe</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <h1>Sua solução completa para a web</h1>
        <p>Desenvolvimento web profissional para construir sua presença online</p>
        <a href="#" class="button-primary">Iniciar Projeto</a>
      </div>
    </section>
  </main>
</body>
</html>`,

    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nave Mãe</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">Nave Mãe</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <h1>Sua solução completa para a web</h1>
        <p>Desenvolvimento web profissional para construir sua presença online</p>
        <a href="#" class="button-primary">Iniciar Projeto</a>
      </div>
    </section>
    <section id="servicos" class="services">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Sites Dinâmicos</h3>
            <p>Websites dinâmicos e responsivos com experiências interativas</p>
          </div>
          <div class="service-card">
            <h3>WordPress</h3>
            <p>Sites WordPress com temas e plugins personalizados</p>
          </div>
          <div class="service-card">
            <h3>SEO</h3>
            <p>Otimização para mecanismos de busca</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <p>&copy; 2025 Nave Mãe</p>
    </div>
  </footer>
</body>
</html>`,
    
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nave Mãe</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">Nave Mãe</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button class="mobile-menu-toggle">Menu</button>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <h1>Sua solução completa para a web</h1>
        <p>Desenvolvimento web profissional para construir sua presença online</p>
        <a href="#" class="button-primary">Iniciar Projeto</a>
      </div>
    </section>
    <section id="servicos" class="services">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Sites Dinâmicos</h3>
            <p>Websites dinâmicos e responsivos com experiências interativas</p>
          </div>
          <div class="service-card">
            <h3>WordPress</h3>
            <p>Sites WordPress com temas e plugins personalizados</p>
          </div>
          <div class="service-card">
            <h3>SEO</h3>
            <p>Otimização para mecanismos de busca</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <p>&copy; 2025 Nave Mãe</p>
    </div>
  </footer>
</body>
</html>`,

    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nave Mãe</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
  <meta name="description" content="Desenvolvimento web profissional com foco em performance">
  <link rel="canonical" href="https://navemae.com">
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">Nave Mãe</div>
      <nav>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button class="mobile-menu-toggle">Menu</button>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container">
        <h1>Sua solução completa para a web</h1>
        <p>Desenvolvimento web profissional para construir sua presença online</p>
        <a href="#" class="button-primary">Iniciar Projeto</a>
      </div>
    </section>
    <section id="servicos" class="services">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Sites Dinâmicos</h3>
            <p>Websites dinâmicos e responsivos com experiências interativas</p>
          </div>
          <div class="service-card">
            <h3>WordPress</h3>
            <p>Sites WordPress com temas e plugins personalizados</p>
          </div>
          <div class="service-card">
            <h3>SEO</h3>
            <p>Otimização para mecanismos de busca</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container">
      <p>&copy; 2025 Nave Mãe</p>
    </div>
  </footer>
  <!-- Deployed to production server -->
</body>
</html>`
  ]

  // Preview renders based on development stage
  const previewStages = [
    // Design stage - wireframe look
    <div key="design" className="border-2 border-dashed rounded-md p-4 h-full flex flex-col">
      <div className="h-16 border-b border-dashed flex items-center justify-between px-4">
        <div className="w-24 h-6 bg-muted rounded"></div>
        <div className="flex gap-4">
          <div className="w-12 h-4 bg-muted rounded"></div>
          <div className="w-12 h-4 bg-muted rounded"></div>
          <div className="w-12 h-4 bg-muted rounded"></div>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="w-3/4 h-8 bg-muted rounded mx-auto"></div>
        <div className="w-1/2 h-4 bg-muted rounded mx-auto"></div>
        <div className="w-32 h-10 bg-primary/30 rounded mx-auto"></div>
      </div>
    </div>,

    // Frontend stage - basic website with styling
    <div key="frontend" className="border rounded-md overflow-hidden h-full flex flex-col">
      <div className="h-16 bg-white dark:bg-zinc-800 border-b flex items-center justify-between px-6">
        <div className="font-medium">Nave Mãe</div>
        <div className="hidden md:flex gap-6">
          <div className="text-sm text-muted-foreground">Serviços</div>
          <div className="text-sm text-muted-foreground">Sobre</div>
          <div className="text-sm text-muted-foreground">Portfólio</div>
          <div className="text-sm text-muted-foreground">Contato</div>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-6 bg-white dark:bg-zinc-900">
        <div className="text-center pt-12 pb-16">
          <h3 className="text-2xl font-medium mb-2">Sua solução completa para a web</h3>
          <p className="text-sm text-muted-foreground mb-6">Desenvolvimento web profissional para construir sua presença online</p>
          <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md">Iniciar Projeto</div>
        </div>
      </div>
    </div>,

    // Backend stage - functional elements added
    <div key="backend" className="border rounded-md overflow-hidden h-full flex flex-col">
      <div className="h-16 bg-white dark:bg-zinc-800 border-b flex items-center justify-between px-6">
        <div className="font-medium">Nave Mãe</div>
        <div className="hidden md:flex gap-6">
          <div className="text-sm text-muted-foreground">Serviços</div>
          <div className="text-sm text-muted-foreground">Sobre</div>
          <div className="text-sm text-muted-foreground">Portfólio</div>
          <div className="text-sm text-muted-foreground">Contato</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 overflow-auto">
        <div className="text-center pt-12 pb-16 px-6">
          <h3 className="text-2xl font-medium mb-2">Sua solução completa para a web</h3>
          <p className="text-sm text-muted-foreground mb-6">Desenvolvimento web profissional para construir sua presença online</p>
          <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md">Iniciar Projeto</div>
        </div>
        <div className="px-6 py-12 bg-muted/30">
          <h3 className="text-xl font-medium mb-6 text-center">Nossos Serviços</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-background p-4 rounded shadow-sm">
              <h4 className="font-medium mb-2">Sites Dinâmicos</h4>
              <p className="text-xs text-muted-foreground">Websites dinâmicos e responsivos</p>
            </div>
            <div className="bg-background p-4 rounded shadow-sm">
              <h4 className="font-medium mb-2">WordPress</h4>
              <p className="text-xs text-muted-foreground">Sites WordPress customizados</p>
            </div>
            <div className="bg-background p-4 rounded shadow-sm">
              <h4 className="font-medium mb-2">SEO</h4>
              <p className="text-xs text-muted-foreground">Otimização para busca</p>
            </div>
          </div>
        </div>
        <div className="mt-auto p-4 border-t text-center text-sm text-muted-foreground">
          © 2025 Nave Mãe
        </div>
      </div>
    </div>,

    // Responsive stage - mobile friendly
    <div key="responsive" className="flex justify-center h-full">
      <motion.div 
        className="border rounded-md overflow-hidden h-full flex flex-col bg-white dark:bg-zinc-900 max-w-[320px]"
        initial={{ width: "100%" }}
        animate={{ width: ["100%", "320px", "100%", "768px", "320px"] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <div className="h-14 bg-white dark:bg-zinc-800 border-b flex items-center justify-between px-4">
          <div className="font-medium text-sm">Nave Mãe</div>
          <div className="text-xs text-muted-foreground">Menu</div>
        </div>
        <div className="flex-1 flex flex-col overflow-auto">
          <div className="text-center pt-8 pb-10 px-4">
            <h3 className="text-lg font-medium mb-2">Sua solução completa para a web</h3>
            <p className="text-xs text-muted-foreground mb-4">Desenvolvimento web profissional para construir sua presença online</p>
            <div className="inline-block px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs">Iniciar Projeto</div>
          </div>
          <div className="px-4 py-8 bg-muted/30">
            <h3 className="text-base font-medium mb-4 text-center">Nossos Serviços</h3>
            <div className="flex flex-col gap-3">
              <div className="bg-background p-3 rounded shadow-sm">
                <h4 className="font-medium text-sm mb-1">Sites Dinâmicos</h4>
                <p className="text-xs text-muted-foreground">Websites dinâmicos e responsivos</p>
              </div>
              <div className="bg-background p-3 rounded shadow-sm">
                <h4 className="font-medium text-sm mb-1">WordPress</h4>
                <p className="text-xs text-muted-foreground">Sites WordPress customizados</p>
              </div>
              <div className="bg-background p-3 rounded shadow-sm">
                <h4 className="font-medium text-sm mb-1">SEO</h4>
                <p className="text-xs text-muted-foreground">Otimização para busca</p>
              </div>
            </div>
          </div>
          <div className="mt-auto p-3 border-t text-center text-xs text-muted-foreground">
            © 2025 Nave Mãe
          </div>
        </div>
      </motion.div>
    </div>,

    // Deploy stage - final product with performance indicators
    <div key="deploy" className="border rounded-md overflow-hidden h-full flex flex-col">
      <div className="h-16 bg-white dark:bg-zinc-800 border-b flex items-center justify-between px-6">
        <div className="font-medium flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>navemae.com</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
          <Server className="h-3 w-3" />
          <span>Deployed</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-zinc-900 overflow-auto">
        <div className="text-center pt-12 pb-16 px-6 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-primary/5 -z-10"
            animate={{ 
              background: [
                "radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 70%)",
                "radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <h3 className="text-2xl font-medium mb-2">Sua solução completa para a web</h3>
          <p className="text-sm text-muted-foreground mb-6">Desenvolvimento web profissional para construir sua presença online</p>
          <motion.div 
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Iniciar Projeto
          </motion.div>
        </div>
        <div className="px-6 py-12 bg-muted/30">
          <h3 className="text-xl font-medium mb-6 text-center">Nossos Serviços</h3>
          <div className="grid grid-cols-3 gap-4">
            <motion.div 
              className="bg-background p-4 rounded shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="font-medium mb-2">Sites Dinâmicos</h4>
              <p className="text-xs text-muted-foreground">Websites dinâmicos e responsivos</p>
            </motion.div>
            <motion.div 
              className="bg-background p-4 rounded shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="font-medium mb-2">WordPress</h4>
              <p className="text-xs text-muted-foreground">Sites WordPress customizados</p>
            </motion.div>
            <motion.div 
              className="bg-background p-4 rounded shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="font-medium mb-2">SEO</h4>
              <p className="text-xs text-muted-foreground">Otimização para busca</p>
            </motion.div>
          </div>
        </div>
        <div className="mt-auto p-4 border-t text-center text-sm text-muted-foreground">
          © 2025 Nave Mãe
        </div>
      </div>
    </div>
  ]

  // Technologies used in each stage
  const technologies = [
    ["Figma", "Adobe XD", "Wireframing", "UI/UX", "Sketch"],
    ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    ["Node.js", "Express", "MongoDB", "API", "Auth", "Database"],
    ["Media Queries", "Mobile-first", "Flexible Layouts", "Viewport Meta", "Testing"],
    ["Vercel", "AWS", "Docker", "CI/CD", "Performance", "Analytics"]
  ]

  useEffect(() => {
    // Simulate build progress
    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    // Progress through steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval)
          setShowResult(true)
          return prev
        }
        return prev + 1
      })
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [])

  return (
    <div className="container max-w-5xl mx-auto px-4">
      <FadeUp>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 bg-primary rounded-full flex-1 max-w-[100px]"></div>
          <h2 className="text-2xl font-medium">Tecnologias & Processos</h2>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="space-y-2 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Status do Projeto: {steps[Math.min(currentStep, steps.length - 1)].name}
            </span>
            <span className="text-sm font-medium">{buildProgress}%</span>
          </div>
          <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${buildProgress}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-md border ${
              index === currentStep ? "bg-primary/10 border-primary/30" : "bg-transparent"
            }`}
            animate={{
              opacity: index <= currentStep ? 1 : 0.5,
              scale: index === currentStep ? 1.05 : 1
            }}
          >
            <div className={`${index <= currentStep ? step.color : "text-muted-foreground"}`}>
              {step.icon}
            </div>
            <div>
              <div className="text-sm font-medium">{step.name}</div>
              {index === currentStep && (
                <motion.div 
                  className="text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Em progresso...
                </motion.div>
              )}
              {index < currentStep && (
                <motion.div 
                  className="text-xs text-green-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Concluído
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <FadeUp delay={0.3}>
          <div className="space-y-4">
            <Tabs defaultValue="html" className="w-full">
              <TabsList className="mb-2">
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="js">JavaScript</TabsTrigger>
              </TabsList>
              
              <TabsContent value="html">
                <Card className="bg-black text-green-400 font-mono text-xs p-4 overflow-hidden h-[400px]">
                  <div className="flex items-center gap-2 mb-2 text-xs text-white/70">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>index.html</span>
                  </div>
                  <div className="overflow-auto h-[calc(100%-24px)]">
                    <AnimatePresence mode="wait">
                      <motion.pre
                        key={currentStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="whitespace-pre-wrap"
                      >
                        {htmlSnippets[currentStep]}
                        <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
                      </motion.pre>
                    </AnimatePresence>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="css">
                <CssBuilder />
              </TabsContent>
              
              <TabsContent value="js">
                <Card className="bg-black text-amber-400 font-mono text-xs p-4 overflow-hidden h-[400px]">
                  <div className="flex items-center gap-2 mb-2 text-xs text-white/70">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>app.js</span>
                  </div>
                  <div className="overflow-auto h-[calc(100%-24px)]">
                    <pre className="whitespace-pre-wrap">
                      {`// Aplicação JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
  }

  // Form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateForm();
    });
  }

  // Animations on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Initialize performance tracking
  initAnalytics();

  console.log('Application initialized!');
});

function validateForm() {
  // Form validation logic
  console.log('Validating form...');
  return true;
}

function initAnalytics() {
  // Performance tracking
  console.log('Analytics initialized');
}
`}
                      <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse"></span>
                    </pre>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex flex-wrap gap-2">
              {technologies[Math.min(currentStep, technologies.length - 1)].map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-2 py-1 bg-muted rounded-full text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <Card className="overflow-hidden h-[400px] border bg-background">
            <CardContent className="p-0 h-full">
              <div className="bg-muted text-xs px-4 py-2 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button 
                    className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center"
                    onClick={() => setExpandedView(!expandedView)}
                  >
                    {expandedView ? "-" : "+"}
                  </button>
                  <span>Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="h-[calc(100%-32px)] p-4 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showResult ? "final" : currentStep}
                    className="h-full w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showResult ? previewStages[4] : previewStages[currentStep]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </FadeUp>
      </div>

      {showResult && (
        <FadeUp delay={0.2}>
          <Card className="bg-muted/30 p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Performance Metrics</h3>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <Rocket className="h-4 w-4" />
                <span>Deployed</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded-md">
                <div className="text-xs text-muted-foreground mb-1">FCP</div>
                <div className="text-lg font-medium">0.8s</div>
                <div className="h-1 w-full bg-muted mt-2 overflow-hidden rounded-full">
                  <div className="h-full bg-green-500 w-[90%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-background p-4 rounded-md">
                <div className="text-xs text-muted-foreground mb-1">LCP</div>
                <div className="text-lg font-medium">1.2s</div>
                <div className="h-1 w-full bg-muted mt-2 overflow-hidden rounded-full">
                  <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-background p-4 rounded-md">
                <div className="text-xs text-muted-foreground mb-1">CLS</div>
                <div className="text-lg font-medium">0.02</div>
                <div className="h-1 w-full bg-muted mt-2 overflow-hidden rounded-full">
                  <div className="h-full bg-green-500 w-[95%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-background p-4 rounded-md">
                <div className="text-xs text-muted-foreground mb-1">SEO</div>
                <div className="text-lg font-medium">98/100</div>
                <div className="h-1 w-full bg-muted mt-2 overflow-hidden rounded-full">
                  <div className="h-full bg-green-500 w-[98%] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>
        </FadeUp>
      )}
    </div>
  )
}