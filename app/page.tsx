"use client"

import { useState, useEffect } from "react"

const terminalLines = [
  { text: "nave-mae@digital:~$ sudo access --universe", delay: 0 },
  { text: "[sudo] password for navemae: ********", delay: 400 },
  { text: "ACCESS GRANTED [OK]", delay: 800 },
  { text: "nave-mae@digital:~$ cat segredo.txt", delay: 1000 },
  { text: "E se seu site pudesse fazer o impossível?", delay: 1400 },
  { text: "E se a tecnologia não tivesse limites?", delay: 1800 },
  { text: "E se você pudesse dominar o digital?", delay: 2200 },
  { text: "nave-mae@digital:~$ ./iniciar_revolucao.sh", delay: 2600 },
  { text: ">>> Iniciando protocolo de dominação digital...", delay: 3000 },
  { text: "[####################] 100%", delay: 3400 },
  { text: "nave-mae@digital:~$ grep -r 'projetos_ativos' ./", delay: 3800 },
  { text: "./magic_training: Experimento #001 [ATIVO]", delay: 4200, link: "https://magictraining.run" },
  { text: "./projeto_x: [CLASSIFICADO - Lançamento em breve]", delay: 4600 },
  { text: "./dominio_total: [EM DESENVOLVIMENTO]", delay: 5000 },
  { text: "nave-mae@digital:~$ echo 'Pronto para embarcar?'", delay: 5400 },
  { text: "Pronto para embarcar?", delay: 5800 },
  { text: "nave-mae@digital:~$ contact --show", delay: 6200 },
  { text: "[>] contato@navemae.digital", delay: 6600, email: "contato@navemae.digital" },
  { text: "[>] magictraining.run", delay: 6900, link: "https://magictraining.run" },
  { text: "[!] Resposta em velocidade luz", delay: 7200 },
  { text: "nave-mae@digital:~$ _", delay: 7500, cursor: true }
]

interface TerminalLine {
  text: string
  delay: number
  cursor?: boolean
  link?: string
  email?: string
}

export default function Home() {
  const [displayedLines, setDisplayedLines] = useState<Array<TerminalLine>>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showGlitch, setShowGlitch] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return

    const currentLine = terminalLines[currentLineIndex]
    
    // Wait for the line's delay before starting to type
    const delayTimeout = setTimeout(() => {
      if (currentCharIndex === 0) {
        // Start typing this line
        const typingInterval = setInterval(() => {
          setCurrentCharIndex(prev => {
            const nextCharIndex = prev + 1
            const currentText = currentLine.text.substring(0, nextCharIndex)
            
            setDisplayedLines(prevLines => {
            const newLines = [...prevLines]
            const lineData: TerminalLine = { 
            text: currentText, 
            cursor: currentLine.cursor,
            delay: currentLine.delay
            }
            if (currentLine.link) lineData.link = currentLine.link
            if (currentLine.email) lineData.email = currentLine.email
            
            if (newLines.length <= currentLineIndex) {
            newLines.push(lineData)
            } else {
            newLines[currentLineIndex] = lineData
            }
            return newLines
            })

            if (nextCharIndex >= currentLine.text.length) {
              clearInterval(typingInterval)
              // Move to next line after a short pause
              setTimeout(() => {
                setCurrentLineIndex(prevIndex => prevIndex + 1)
                setCurrentCharIndex(0)
                
                // Trigger glitch effect on specific lines
                if (currentLine.text.includes("ACCESS GRANTED") || 
                    currentLine.text.includes("100%") ||
                    currentLine.text.includes("CLASSIFICADO")) {
                  setShowGlitch(true)
                  setTimeout(() => setShowGlitch(false), 300)
                }
              }, 200)
            }

            return nextCharIndex
          })
        }, 30) // Typing speed - mais rápido

        return () => clearInterval(typingInterval)
      }
    }, currentLine.delay)

    return () => clearTimeout(delayTimeout)
  }, [currentLineIndex, currentCharIndex])

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono overflow-hidden ${showGlitch ? 'animate-pulse' : ''}`}>
      <div className="h-screen flex flex-col p-4 md:p-8 relative">
        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-scan"></div>
        </div>
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-300 text-sm ml-4">nave-mae@digital: ~</span>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 overflow-hidden relative z-10">
          <div className="space-y-1 text-sm md:text-base">
            {displayedLines.map((line, index) => (
              <div key={index} className="flex items-center">
                {line.link ? (
                  <a 
                    href={line.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`whitespace-pre-wrap break-all hover:text-green-300 transition-colors ${
                      line.text.includes("CLASSIFICADO") ? "text-yellow-400" :
                      line.text.includes("magictraining") ? "text-blue-400 underline" :
                      ""
                    }`}
                  >
                    {line.text}
                  </a>
                ) : line.email ? (
                  <a 
                    href={`mailto:${line.email}`}
                    className="whitespace-pre-wrap break-all text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    {line.text}
                  </a>
                ) : (
                  <span className={`whitespace-pre-wrap break-all ${
                    line.text.includes("ACCESS GRANTED") ? "text-green-300 font-bold animate-pulse" :
                    line.text.includes("CLASSIFICADO") ? "text-yellow-400" :
                    line.text.includes("E se") ? "text-cyan-400" :
                    line.text.includes(">>>") || line.text.includes("[!]") ? "text-white" :
                    line.text.includes("[##") ? "text-green-300" :
                    ""
                  }`}>
                    {line.text}
                  </span>
                )}
                {line.cursor && (
                  <span className="animate-pulse text-green-400">
                    _
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-auto pt-4 border-t border-green-800 text-xs text-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <span>© {new Date().getFullYear()} Nave Mãe Digital</span>
            <span>Desenvolvimento web de outro planeta</span>
          </div>
        </div>
      </div>
    </div>
  )
}