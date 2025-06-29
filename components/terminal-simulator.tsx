"use client"

import { useState, useEffect, useRef } from "react"

interface TerminalLine {
  text: string
  delay: number
  cursor?: boolean
  link?: string
  email?: string
  type?: "command" | "output" | "error" | "success" | "warning"
}

const terminalLines: TerminalLine[] = [
  { text: "Last login: Sat Dec 30 14:23:17 on Marte", delay: 0, type: "output" },
  { text: "nave-mae@digital:~$ sudo access --universe", delay: 700, type: "command" },
  { text: "[sudo] password for navemae: ********", delay: 1750, type: "output" },
  { text: "ACCESS GRANTED [OK]", delay: 2800, type: "success" },
  { text: "nave-mae@digital:~$ cat segredo.txt", delay: 3850, type: "command" },
  { text: "E se seu site pudesse fazer o impossível?", delay: 4900, type: "output" },
  { text: "E se a tecnologia não tivesse limites?", delay: 5950, type: "output" },
  { text: "E se você pudesse dominar o digital?", delay: 7000, type: "output" },
  { text: "nave-mae@digital:~$ ./iniciar_revolucao.sh", delay: 8050, type: "command" },
  { text: ">>> Iniciando protocolo de dominação digital...", delay: 9100, type: "warning" },
  { text: "[####################] 100%", delay: 12500, type: "success" },
  { text: "nave-mae@digital:~$ grep -r 'projetos_ativos' ./", delay: 11550, type: "command" },
  {
    text: "./magic_training: #001 [ON] -  Parece magia... mas é tecnologia",
    delay: 12600,
    type: "output",
    link: "https://magictraining.run",
  },
  { text: "./projet-X: [CONFIDENCIAL - Lançamento em breve]", delay: 13650, type: "warning" },
  { text: "./dominio_total: [EM DESENVOLVIMENTO]", delay: 14700, type: "output" },
  { text: "nave-mae@digital:~$ echo 'Pronto para embarcar?'", delay: 15750, type: "command" },
  { text: "Pronto para embarcar?", delay: 16800, type: "output" },
  { text: "nave-mae@digital:~$ contact --show", delay: 17850, type: "command" },
  { text: "[>] contato@navemae.digital", delay: 18900, type: "output", email: "contato@navemae.digital" },
  { text: "[>] magictraining.run", delay: 19950, type: "output", link: "https://magictraining.run" },
  { text: "[!] Resposta em velocidade luz", delay: 21000, type: "success" },
  { text: "nave-mae@digital:~$ ", delay: 22050, cursor: true, type: "command" },
  // Ideias para novas linhas:
  { text: "nave-mae@digital:~$ ideias", delay: 23000, type: "command" },
  { text: "- Inteligência Artificial aplicada ao seu negócio", delay: 23500, type: "output" },
  { text: "- Sites ultra rápidos e responsivos", delay: 24000, type: "output" },
  { text: "- Integrações com APIs e automações", delay: 24500, type: "output" },
  { text: "- Dashboards e visualização de dados", delay: 25000, type: "output" },
  { text: "- Consultoria em tecnologia e inovação", delay: 25500, type: "output" },
  { text: "nave-mae@digital:~$ ", delay: 26000, cursor: true, type: "command" },
]

export default function TerminalSimulator() {
  const [displayedLines, setDisplayedLines] = useState<
    Array<{ text: string; type?: string; cursor?: boolean; link?: string; email?: string }>
  >([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [isMounted, setIsMounted] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
    setCurrentTime(new Date().toLocaleTimeString())
    
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Authentic terminal cursor blink rate

    return () => clearInterval(cursorInterval)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines])

  // Typing animation
  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return

    const currentLine = terminalLines[currentLineIndex]

    // Initial delay for the line
    const initialTimeout = setTimeout(() => {
      setIsTyping(true)

      // Typing effect
      const typingInterval = setInterval(
        () => {
          setCurrentCharIndex((prevChar) => {
            const nextChar = prevChar + 1

            if (nextChar <= currentLine.text.length) {
              const displayText = currentLine.text.substring(0, nextChar)

              setDisplayedLines((prevLines) => {
                const newLines = [...prevLines]
                const lineData = {
                  text: displayText,
                  type: currentLine.type,
                  cursor: currentLine.cursor && nextChar === currentLine.text.length,
                  link: currentLine.link,
                  email: currentLine.email,
                }

                if (newLines.length <= currentLineIndex) {
                  newLines.push(lineData)
                } else {
                  newLines[currentLineIndex] = lineData
                }

                return newLines
              })

              return nextChar
            } else {
              clearInterval(typingInterval)
              setIsTyping(false)
              setCurrentLineIndex((prev) => prev + 1)
              setCurrentCharIndex(0)
              return 0
            }
          })
        },
        Math.random() * 20 + 15,
      ) // Variable typing speed for realism
    }, currentLine.delay)

    return () => {
      clearTimeout(initialTimeout)
    }
  }, [currentLineIndex])

  const getLineColor = (type?: string, text?: string) => {
    if (text?.includes("ACCESS GRANTED") || text?.includes("100%")) return "text-green-300"
    if (text?.includes("CLASSIFICADO")) return "text-yellow-300"
    if (text?.includes("E se")) return "text-cyan-300"

    switch (type) {
      case "command":
        return "text-white"
      case "error":
        return "text-red-400"
      case "success":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      case "output":
        return "text-gray-300"
      default:
        return "text-green-400"
    }
  }

  return (
    <div className="h-dvh bg-zinc-800 relative overflow-hidden">

      <div className="h-full relative z-10 flex flex-col">
        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 bg-zinc-900 p-4 overflow-y-auto font-mono text-sm leading-4"
        >
          <div className="space-y-1">
            {displayedLines.map((line, index) => (
              <div key={index} className="flex items-start">
                <span className={`whitespace-pre-wrap break-all ${getLineColor(line.type, line.text)}`}>
                  {line.link ? (
                    <a
                      href={line.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-green-300 transition-colors"
                    >
                      {line.text}
                    </a>
                  ) : line.email ? (
                    <a href={`mailto:${line.email}`} className="hover:underline hover:text-green-300 transition-colors">
                      {line.text}
                    </a>
                  ) : (
                    line.text
                  )}
                </span>
                {line.cursor && (
                  <span className={`ml-0 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-75`}>
                    <span className="bg-green-400 text-black px-1">_</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Status Bar */}
        <div className="bg-black px-4 py-1 text-xs text-gray-200 border-t border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-green-400">contato@navemae.digital</span>
            <span>~</span>
            <span className={`${isTyping ? "text-green-400" : "text-gray-500"}`}>
              {isTyping ? "typing..." : "ready"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-cyan-400 animate-pulse">NEURAL LINK</span>
            <span>-</span>
            <span>{isMounted ? currentTime : "--:--:--"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
