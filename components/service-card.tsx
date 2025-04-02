import { type ReactNode } from "react"
import { motion } from "framer-motion"

interface MinimalistServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function MinimalistServiceCard({ icon, title, description }: MinimalistServiceCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="p-6 border border-neutral-200 hover:border-black transition-colors duration-300">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-100 group-hover:bg-neutral-200 transition-colors">
          {icon}
        </div>
        
        <h3 className="text-xl font-light mt-6 mb-3">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </motion.div>
  )
}