import { type ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <Card className="h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-card overflow-hidden border border-primary/20 hover:border-primary/40">
        <CardContent className="pt-6 pb-4 px-6">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
              {icon}
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}