"use client"

import { useEffect, useRef } from "react"

export function HeroGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient
    const createGradient = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(255, 153, 51, 0.5)") // Orange
      gradient.addColorStop(0.5, "rgba(255, 102, 102, 0.3)") // Soft red
      gradient.addColorStop(1, "rgba(0, 204, 153, 0.5)") // Teal
      return gradient
    }

    // Animation
    let animationFrameId: number
    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = createGradient()
      ctx.fillRect(0, 0, width, height)

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true" />
}

