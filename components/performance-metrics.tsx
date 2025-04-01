"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PerformanceMetrics() {
  const [activeTab, setActiveTab] = useState("speed")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Website Performance Analytics</CardTitle>
        <CardDescription>
          Track and analyze your website's performance metrics to identify areas for improvement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="speed" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="speed">Speed Metrics</TabsTrigger>
            <TabsTrigger value="seo">SEO Analysis</TabsTrigger>
            <TabsTrigger value="user">User Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="speed" className="space-y-4">
            <div className="mt-6 h-[300px] w-full relative flex items-center justify-center">
              {activeTab === "speed" && (
                <div className="w-full space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">First Contentful Paint</span>
                      <span className="text-sm font-medium">0.8s</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Largest Contentful Paint</span>
                      <span className="text-sm font-medium">1.2s</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[75%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Cumulative Layout Shift</span>
                      <span className="text-sm font-medium">0.02</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Time to Interactive</span>
                      <span className="text-sm font-medium">1.5s</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[70%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="seo">
            <div className="mt-6 h-[300px] w-full relative flex items-center justify-center">
              {activeTab === "seo" && (
                <div className="w-full space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">SEO Score</span>
                      <span className="text-sm font-medium">92/100</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[92%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Mobile Friendliness</span>
                      <span className="text-sm font-medium">98/100</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[98%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Content Quality</span>
                      <span className="text-sm font-medium">88/100</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[88%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Backlink Profile</span>
                      <span className="text-sm font-medium">85/100</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="user">
            <div className="mt-6 h-[300px] w-full relative flex items-center justify-center">
              {activeTab === "user" && (
                <div className="w-full space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Average Session Duration</span>
                      <span className="text-sm font-medium">2m 45s</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[80%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pages Per Session</span>
                      <span className="text-sm font-medium">3.2</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[75%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bounce Rate</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[68%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-sm font-medium">4.8%</span>
                    </div>
                    <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary w-[65%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

