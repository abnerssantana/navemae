import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { ProjectContent } from "@/components/project-content";
import { FadeIn } from "@/components/motion";

// Definição correta do tipo dos parâmetros
interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Projeto não encontrado | Nave Mãe",
      description: "O projeto que você está procurando não foi encontrado."
    };
  }
  
  return {
    title: `${project.title} | Nave Mãe`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) { // Usando a interface corrigida
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }
  
  const relatedProjects = getRelatedProjects(params.slug, 3);
  
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
            href="/projetos" 
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            TODOS OS PROJETOS
          </Link>
          <Link 
            href="/contato" 
            className="text-sm hover:text-primary transition-colors"
          >
            CONTATO
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-24">
        {/* Project Content Component */}
        <ProjectContent 
          project={project} 
          relatedProjects={relatedProjects} 
        />
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
  );
}