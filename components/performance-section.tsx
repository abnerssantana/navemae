"use client"

import { motion } from "framer-motion"

export function PerformanceSection() {
  // Performance metrics data
  const performanceData = {
    speed: [
      { metric: "First Contentful Paint", value: "0.8s", rating: "Excelente" },
      { metric: "Largest Contentful Paint", value: "1.2s", rating: "Ótimo" },
      { metric: "Cumulative Layout Shift", value: "0.02", rating: "Excelente" },
      { metric: "Time to Interactive", value: "1.5s", rating: "Muito bom" }
    ],
    seo: [
      { metric: "SEO Score", value: "92/100", rating: "Excelente" },
      { metric: "Mobile Friendliness", value: "98/100", rating: "Excelente" },
      { metric: "Content Quality", value: "88/100", rating: "Muito bom" },
      { metric: "Backlink Profile", value: "85/100", rating: "Muito bom" }
    ],
    engagement: [
      { metric: "Average Session Duration", value: "2m 45s", rating: "Acima da média" },
      { metric: "Pages Per Session", value: "3.2", rating: "Bom" },
      { metric: "Bounce Rate", value: "32%", rating: "Excelente" },
      { metric: "Conversion Rate", value: "4.8%", rating: "Acima da média" }
    ]
  }

  return (
    <div className="bg-white dark:bg-card rounded-lg p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-medium mb-6">Métricas de Performance</h3>
        
        <div className="space-y-6">
          {/* Speed Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-primary font-medium">Velocidade & Performance</h4>
            <div className="grid grid-cols-1 gap-3">
              {performanceData.speed.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm">{item.metric}</span>
                  <div className="text-right">
                    <motion.span 
                      className="font-medium" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                    >
                      {item.value}
                    </motion.span>
                    <span className="text-xs text-primary ml-2">({item.rating})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SEO Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-primary font-medium">SEO & Visibilidade</h4>
            <div className="grid grid-cols-1 gap-3">
              {performanceData.seo.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm">{item.metric}</span>
                  <div className="text-right">
                    <motion.span 
                      className="font-medium" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
                    >
                      {item.value}
                    </motion.span>
                    <span className="text-xs text-primary ml-2">({item.rating})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engagement Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4"
          >
            <h4 className="text-primary font-medium">Engajamento do Usuário</h4>
            <div className="grid grid-cols-1 gap-3">
              {performanceData.engagement.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1.0 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm">{item.metric}</span>
                  <div className="text-right">
                    <motion.span 
                      className="font-medium" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 1.2, duration: 0.8 }}
                    >
                      {item.value}
                    </motion.span>
                    <span className="text-xs text-primary ml-2">({item.rating})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}