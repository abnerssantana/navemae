"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface ProgressiveRevealProps {
  children: ReactNode
  delay?: number
}

export function ProgressiveReveal({ children, delay = 0 }: ProgressiveRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [inView, delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  )
}

