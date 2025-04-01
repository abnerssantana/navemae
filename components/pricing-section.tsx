import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="bg-background border rounded-md p-6 flex flex-col">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-1">Basic</h3>
          <p className="text-sm text-muted-foreground">For small businesses</p>
        </div>
        <div className="text-3xl font-medium mb-6">$999</div>
        <ul className="space-y-3 mb-8 flex-1">
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Responsive Landing Page</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Basic SEO Setup</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Contact Form</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Mobile Optimization</span>
          </li>
        </ul>
        <Button variant="outline" className="w-full">
          Get Started
        </Button>
      </div>

      <div className="bg-background border-2 border-primary rounded-md p-6 flex flex-col relative">
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-bl-md rounded-tr-md font-medium">
          POPULAR
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-1">Professional</h3>
          <p className="text-sm text-muted-foreground">For growing businesses</p>
        </div>
        <div className="text-3xl font-medium mb-6">$1,999</div>
        <ul className="space-y-3 mb-8 flex-1">
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Multi-page Website</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Blog Integration</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Advanced SEO Setup</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Speed Optimization</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Social Media Integration</span>
          </li>
        </ul>
        <Button className="w-full">Get Started</Button>
      </div>

      <div className="bg-background border rounded-md p-6 flex flex-col">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-1">Enterprise</h3>
          <p className="text-sm text-muted-foreground">For larger organizations</p>
        </div>
        <div className="text-3xl font-medium mb-6">Custom</div>
        <ul className="space-y-3 mb-8 flex-1">
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Custom Web Application</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>API Integration</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>E-commerce Functionality</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Performance Analytics</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Ongoing Maintenance</span>
          </li>
        </ul>
        <Button variant="outline" className="w-full">
          Contact Us
        </Button>
      </div>
    </div>
  )
}

