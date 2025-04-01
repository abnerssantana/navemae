import { Check } from "lucide-react"

export function FeatureSection() {
  const features = [
    "Modern, responsive designs that work on all devices",
    "Fast, optimized websites with excellent performance scores",
    "SEO-friendly architecture for better search engine rankings",
    "Custom solutions tailored to your specific business needs",
    "Ongoing support and maintenance to keep your site running smoothly",
    "Data-driven approach to website optimization",
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Expert Web Development Services</h3>
        <p className="text-sm text-muted-foreground">
          At Nave Mãe, we combine technical expertise with creative design to deliver websites that not only look great
          but also perform exceptionally well.
        </p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="aspect-video bg-muted/50 rounded-md flex items-center justify-center">
        <p className="text-muted-foreground text-sm">Feature illustration</p>
      </div>
    </div>
  )
}

