"use client"

import { ReactNode } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Fade Up animation
export function FadeUp({ children, delay = 0, duration = 0.5 }: { 
  children: ReactNode
  delay?: number
  duration?: number 
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: duration, 
        delay: delay,
        ease: "easeOut" 
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// Stagger Children animation
export function StaggerChildren({ children, staggerDelay = 0.1 }: { 
  children: ReactNode
  staggerDelay?: number 
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

// Child item for stagger animations
export function StaggerItem() {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div variants={variants}>
      {children}
    </motion.div>
  )
}

// Hero text animation
export function AnimatedHeroText({ text }: { text: string }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
      },
    },
  }
  
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  
  return (
    <motion.h1
      className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      })}
    </motion.h1>
  )
}

// Cursor blink animation
export function BlinkingCursor() {
  return (
    <motion.div
      className="inline-block w-1 h-12 bg-primary ml-1"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ 
        repeat: Infinity, 
        duration: 1,
        times: [0, 0.5, 1]
      }}
    />
  )
}

// Fade In animation
export function FadeIn({ children, delay = 0 }: { 
  children: ReactNode
  delay?: number 
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut" 
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// Hero section wrap component
export function HeroWrapper({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
