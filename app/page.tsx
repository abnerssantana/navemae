import Link from "next/link"

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo espacial animado com gradiente nebulosa */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-violet-900/30"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Efeito nebulosa */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px] animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-[128px] animate-pulse animation-delay-4000"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-8 tracking-tight animate-gradient">
          Nave Mãe
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Colonizamos o universo digital com soluções tecnológicas de outro planeta. 
          Transformamos ideias em experiências digitais extraordinárias.
        </p>

        {/* Email de contato */}
        <a 
          href="mailto:contato@navemae.digital"
          className="inline-flex items-center gap-2 text-lg text-purple-300 hover:text-purple-200 transition-colors duration-300 mb-12"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>contato@navemae.digital</span>
        </a>

        <div className="mt-8">
          <Link 
            href="https://magictraining.run" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-full text-white hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105"
          >
            <span className="text-lg">Visite o Magic Training</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}