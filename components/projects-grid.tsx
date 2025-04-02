"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Project } from "@/lib/projects"
import { StaggerChildren, StaggerItem } from "@/components/motion"

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <StaggerChildren>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
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
                <div className="flex items-center mt-4">
                  <span className="text-sm mr-2 text-muted-foreground group-hover:text-primary transition-colors">Examinar missão</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </div>
    </StaggerChildren>
  );
}
