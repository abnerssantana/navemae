"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  speed?: number
}

export function TypewriterEffect({ text, speed = 50 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {displayText}
      <span
        className={`inline-block w-0.5 h-8 bg-primary ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      ></span>
    </span>
  )
}

