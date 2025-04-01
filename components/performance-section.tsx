"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PerformanceSection() {
  return (
    <div className="border rounded-md overflow-hidden">
      <Tabs defaultValue="speed" className="w-full">
        <div className="border-b px-4">
          <TabsList className="h-12 bg-transparent">
            <TabsTrigger
              value="speed"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Speed Metrics
            </TabsTrigger>
            <TabsTrigger
              value="seo"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              SEO Analysis
            </TabsTrigger>
            <TabsTrigger
              value="user"
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              User Engagement
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="speed" className="p-6 space-y-6 mt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">First Contentful Paint</span>
                <span className="text-sm font-medium">0.8s</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Largest Contentful Paint</span>
                <span className="text-sm font-medium">1.2s</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[75%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Cumulative Layout Shift</span>
                <span className="text-sm font-medium">0.02</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[95%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Time to Interactive</span>
                <span className="text-sm font-medium">1.5s</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[70%] rounded-full"></div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="seo" className="p-6 space-y-6 mt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">SEO Score</span>
                <span className="text-sm font-medium">92/100</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[92%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Mobile Friendliness</span>
                <span className="text-sm font-medium">98/100</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[98%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Content Quality</span>
                <span className="text-sm font-medium">88/100</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[88%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Backlink Profile</span>
                <span className="text-sm font-medium">85/100</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="user" className="p-6 space-y-6 mt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Session Duration</span>
                <span className="text-sm font-medium">2m 45s</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[80%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Pages Per Session</span>
                <span className="text-sm font-medium">3.2</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[75%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Bounce Rate</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[68%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Conversion Rate</span>
                <span className="text-sm font-medium">4.8%</span>
              </div>
              <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                <div className="h-full bg-primary w-[65%] rounded-full"></div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

