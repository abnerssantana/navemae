import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-0 shadow-none bg-background hover:bg-muted/30 transition-colors group overflow-hidden relative h-full">
      {/* Green top accent line with animation */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      
      <CardHeader className="pb-2 pt-6">
        <div className="flex items-center gap-3">
          <div className="text-primary bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}