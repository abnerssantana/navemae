// app/projetos/page.tsx
import { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/motion"
import { getAllProjects } from "@/lib/mdx"

export const metadata: Metadata = {
    title: "Missões Completadas | Nave Mãe",
    description: "Explore nossas missões intergalácticas mais recentes. Projetos de desenvolvimento web que transcendem o comum.",
}

export default async function ProjectsPage() {
    const projects = await getAllProjects()

    // Group projects by year
    const projectsByYear = projects.reduce((acc, project) => {
        const year = new Date(project!.date).getFullYear()
        if (!acc[year]) {
            acc[year] = []
        }
        acc[year].push(project)
        return acc
    }, {} as Record<number, typeof projects>)

    // Sort years in descending order
    const sortedYears = Object.keys(projectsByYear)
        .map(year => parseInt(year))
        .sort((a, b) => b - a)

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="flex items-center justify-between p-6 z-40 relative">
                <Link href="/" className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                </Link>
            </header>

            <main className="container-padding relative">
                <section className="py-16 md:py-24">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-12">
                            MISSÕES
                            <br />
                            <span className="gradient-text">COMPLETADAS</span>
                        </h1>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground mb-24">
                            Explore nossas incursões intergalácticas mais recentes e descubra como
                            transportamos marcas para novas dimensões digitais, através de tecnologias
                            alienígenas e design de outro mundo.
                        </p>
                    </FadeUp>

                    <StaggerChildren>
                        {sortedYears.map(year => (
                            <div key={year} className="mb-24">
                                <StaggerItem>
                                    <div className="flex items-center mb-12">
                                        <h2 className="text-6xl font-light text-primary/50">{year}</h2>
                                        <div className="h-px flex-1 bg-border ml-6"></div>
                                    </div>
                                </StaggerItem>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {projectsByYear[year].map((project, index) => (
                                        <StaggerItem key={index}>
                                            <Link href={`/projetos/${project!.slug}`}>
                                                <div
                                                    className="group cursor-pointer"

                                                >
                                                    <div className="aspect-video bg-accent/10 mb-4 overflow-hidden rounded-md">
                                                        <div className="w-full h-full relative">
                                                            {project!.image ? (
                                                                <img
                                                                    src={project!.image}
                                                                    alt={project!.title}
                                                                    className="w-full h-full object-cover"

                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center">
                                                                    <span className="text-muted-foreground text-sm">Evidência Extraterrestre</span>
                                                                </div>
                                                            )}
                                                            <div className="absolute inset-0 modern-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                                        </div>
                                                    </div>
                                                    <div className="modern-badge inline-block mb-2">{project!.category}</div>
                                                    <h3 className="text-xl font-light mb-2 group-hover:text-primary transition-colors">{project!.title}</h3>
                                                    <div className="flex items-center mt-4">
                                                        <span className="text-sm mr-2 text-muted-foreground group-hover:text-primary transition-colors">Examinar missão</span>
                                                        <ArrowRight className="h-4 w-4 text-primary" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </StaggerItem>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </StaggerChildren>
                </section>
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