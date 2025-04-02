"use client"

import { motion } from "framer-motion"
import { Project } from "@/lib/projects"
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"
import { ProjectHeader, ProjectImage, ProjectCallToAction, RelatedProjects } from "@/components/project-detail"

export function ProjectContent({ 
  project,
  relatedProjects
}: { 
  project: Project;
  relatedProjects: Project[];
}) {
  return (
    <>
      {/* Project Header */}
      <ProjectHeader project={project} />
      
      {/* Project Cover Image */}
      {project.image && (
        <ProjectImage src={project.image} alt={project.title} />
      )}
      
      {/* Project Content */}
      <div className="max-w-3xl mx-auto">
        <StaggerChildren>
          {project.content.sections.map((section, index) => {
            switch (section.type) {
              case 'text':
                return (
                  <StaggerItem key={index}>
                    <div className="my-6">
                      <p className="text-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </StaggerItem>
                );
              case 'image':
                return (
                  <StaggerItem key={index}>
                    <div className="my-12">
                      <motion.img
                        src={section.content}
                        alt={`${project.title} - Imagem ${index}`}
                        className="w-full h-auto rounded-md"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </StaggerItem>
                );
              case 'quote':
                return (
                  <StaggerItem key={index}>
                    <blockquote className="my-12 pl-6 border-l-2 border-primary italic text-xl text-muted-foreground">
                      {section.content}
                    </blockquote>
                  </StaggerItem>
                );
              default:
                return null;
            }
          })}
        </StaggerChildren>
      </div>
      
      {/* Project Gallery (if available) */}
      {project.images && project.images.length > 0 && (
        <div className="mt-16 mb-24">
          <FadeUp>
            <h2 className="text-3xl font-light mb-8">Galeria do Projeto</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="aspect-video overflow-hidden rounded-md">
                  <motion.img 
                    src={image}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <ProjectCallToAction />
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <RelatedProjects projects={relatedProjects} />
      )}
    </>
  );
}
