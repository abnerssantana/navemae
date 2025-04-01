import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CTASection() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Perfect for small businesses and startups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-4">$999</div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Responsive Landing Page</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Basic SEO Setup</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Contact Form</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Mobile Optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-muted-foreground">✗</span>
              <span className="text-muted-foreground">Blog Integration</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-primary">
        <CardHeader className="bg-primary/5">
          <div className="text-center text-sm font-medium text-primary mb-2">MOST POPULAR</div>
          <CardTitle>Professional</CardTitle>
          <CardDescription>For growing businesses and content creators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-4">$1,999</div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Multi-page Website</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Blog Integration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Advanced SEO Setup</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Speed Optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Social Media Integration</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>Custom solutions for larger organizations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-4">Custom</div>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Custom Web Application</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>API Integration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>E-commerce Functionality</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Performance Analytics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Ongoing Maintenance</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Contact Us
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

