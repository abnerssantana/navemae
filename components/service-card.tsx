import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

