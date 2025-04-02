import { type ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ 
  icon, 
  title, 
  description 
}: ServiceCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 rounded-lg border border-border hover:border-primary/40 transition-all duration-300 bg-card">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10">
          {icon}
        </div>
        
        <h3 className="text-xl font-light mt-6 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-6 h-px w-0 bg-primary transition-all duration-300 group-hover:w-16"></div>
      </div>
    </motion.div>
  )
}

export function AnimatedServiceCard({ 
  icon, 
  title, 
  description 
}: ServiceCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 border border-border hover:border-primary/40 transition-colors bg-card">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-light mt-6 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <motion.div 
          className="mt-6 flex items-center space-x-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <span className="text-sm">Explorar mais</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}