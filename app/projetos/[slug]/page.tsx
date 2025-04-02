// app/projetos/[slug]/page.tsx
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/mdx"
import { mdxComponents } from "@/components/mdx/mdx-components"
import { ProjectHeader, ProjectImage, ProjectCallToAction, RelatedProjects } from "@/components/project-detail"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: "Projeto não encontrado | Nave Mãe",
      description: "A missão que você procura não foi encontrada em nossa base de dados intergaláctica.",
    }
  }
  
  return {
    title: `${project.metadata.title} | Nave Mãe`,
    description: project.metadata.description,
    openGraph: {
      title: `${project.metadata.title} | Nave Mãe`,
      description: project.metadata.description,
      type: "article",
      url: `https://navemae.com/projetos/${params.slug}`,
      images: [
        {
          url: project.metadata.image || "https://navemae.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.metadata.title,
        }
      ]
    }
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  
  return projects.map((project) => ({
    slug: project!.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  // Get 3 related projects (excluding the current one)
  const allProjects = await getAllProjects()
  const relatedProjects = allProjects
    .filter(p => p!.slug !== params.slug)
    .slice(0, 3)
    .map(p => p!)
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-6 z-40 relative">
        <Link href="/" className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-accent"></div>
        </Link>
        <Link href="/projetos" className="text-sm hover:text-primary transition-colors">
          VOLTAR PARA MISSÕES
        </Link>
      </header>
      
      <main className="container-padding max-w-4xl mx-auto">
        <article>
          <ProjectHeader project={project.metadata} />
          
          {project.metadata.image && (
            <ProjectImage src={project.metadata.image} alt={project.metadata.title} />
          )}
          
          <div className="prose prose-invert max-w-none">
            {project.content}
          </div>
          
          <ProjectCallToAction />
          
          {relatedProjects.length > 0 && (
            <RelatedProjects projects={relatedProjects} />
          )}
        </article>
      </main>
      
      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <Link href="/" className="flex space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary"></div>
              <div className="h-6 w-6 rounded-full bg-accent"></div>
            </Link>
            <p className="text-sm text-muted-foreground mt-6 max-w-xs">
              Desenvolvimento web profissional com tecnologia tão avançada que parece magia.
              Transformando sua visão em sinais digitais detectáveis por toda a galáxia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}