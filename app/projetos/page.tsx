import { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { ProjectsGrid } from "@/components/projects-grid";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projetos | Nave Mãe",
  description: "Confira os projetos desenvolvidos pela Nave Mãe, especialistas em desenvolvimento web profissional.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-6 z-40 relative">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-accent"></div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/contato" className="text-sm hover:text-primary transition-colors">
            CONTATO
          </Link>
          <Link href="/" className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-foreground"></span>
            <span className="h-0.5 w-6 bg-foreground"></span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-12 pb-24">
        {/* Projects Hero Section */}
        <section className="py-16 md:py-24">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-12">
              MISSÕES
              <br />
              <span className="gradient-text">COMPLETADAS</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-muted-foreground">
              Explore nossa galeria de projetos concluídos. Cada missão representa uma jornada 
              única onde aplicamos nossa expertise para transformar visões em realidades digitais.
            </p>
          </FadeUp>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <ProjectsGrid projects={projects} />
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
  );
}