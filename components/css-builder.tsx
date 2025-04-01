"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function CssBuilder() {
  const [cssCode, setCssCode] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  const cssLines = [
    ".container {",
    "  max-width: 1200px;",
    "  margin: 0 auto;",
    "  padding: 0 1.5rem;",
    "}",
    "",
    ".header {",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: space-between;",
    "  height: 4rem;",
    "  border-bottom: 1px solid var(--border);",
    "}",
    "",
    ".hero {",
    "  padding: 6rem 0;",
    "  text-align: center;",
    "}",
    "",
    ".hero h1 {",
    "  font-size: 3.5rem;",
    "  font-weight: 500;",
    "  line-height: 1.1;",
    "}",
    "",
    ".button-primary {",
    "  background-color: var(--primary);",
    "  color: white;",
    "  padding: 0.75rem 1.5rem;",
    "  border-radius: 0.3rem;",
    "  font-weight: 500;",
    "}",
  ]

  useEffect(() => {
    if (currentLine < cssLines.length) {
      const timeout = setTimeout(
        () => {
          setCssCode((prev) => prev + cssLines[currentLine] + "\n")
          setCurrentLine((prev) => prev + 1)
        },
        Math.random() * 100 + 50,
      )

      return () => clearTimeout(timeout)
    }
  }, [currentLine])

  return (
    <Card className="bg-black text-green-400 font-mono text-sm p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-2 text-xs text-white/70">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span>style.css</span>
      </div>
      <pre className="whitespace-pre-wrap">
        {cssCode}
        <span className="inline-block w-2 h-4 bg-green-400 animate-pulse"></span>
      </pre>
    </Card>
  )
}

