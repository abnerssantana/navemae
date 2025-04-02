"use client"

import { motion } from "framer-motion"
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Project } from "@/lib/projects"

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="py-16 md:py-24">
      <FadeUp>
        <div className="modern-badge inline-block mb-4">{project.category}</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-8">
          {project.title}
        </h1>
      </FadeUp>
      
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(project.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span key={index} className="inline-block">{service}{index < project.services.length - 1 ? ', ' : ''}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <FadeUp>
      <div className="aspect-[16/9] overflow-hidden rounded-md mb-16">
        <motion.img 
          src={src} 
          alt={alt}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
      </div>
    </FadeUp>
  )
}

export function ProjectCallToAction() {
  return (
    <div className="py-16 md:py-24 border-t border-border">
      <StaggerChildren>
        <StaggerItem>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Pronto para iniciar sua
            <br />
            <span className="gradient-text">missão intergaláctica?</span>
          </h2>
        </StaggerItem>
        
        <StaggerItem>
          <p className="max-w-lg text-muted-foreground mb-8">
            Nossa nave está com os motores aquecidos para embarcar em uma nova jornada. 
            Vamos juntos explorar o universo digital e criar algo extraordinário para sua marca.
          </p>
        </StaggerItem>
        
        <StaggerItem>
          <Button
            className="btn-gradient rounded-full px-8 py-6"
            asChild
          >
            <Link href="/contato">
              <span className="text-lg font-light tracking-wide flex items-center">
                INICIAR ABDUÇÃO
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </StaggerItem>
      </StaggerChildren>
    </div>
  )
}

export function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="py-16 border-t border-border">
      <StaggerChildren>
        <StaggerItem>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Outras missões
            <br />
            <span className="gradient-text">completadas</span>
          </h2>
        </StaggerItem>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Link href={`/projetos/${project.slug}`}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="aspect-video bg-accent/10 mb-4 overflow-hidden rounded-md">
                    <div className="w-full h-full relative">
                      {project.image ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Evidência Extraterrestre</span>
                        </div>
                      )}
                      <div className="absolute inset-0 modern-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <div className="modern-badge inline-block mb-2">{project.category}</div>
                  <h3 className="text-xl font-light mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </StaggerChildren>
    </div>
  )
}
