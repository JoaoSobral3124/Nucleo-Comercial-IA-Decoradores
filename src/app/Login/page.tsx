'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulação de autenticação
    setTimeout(() => {
      setIsLoading(false)
      // router.push('/dashboard')
    }, 2000)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black p-6 font-sans text-neutral-200 overflow-hidden antialiased">
      
      {/* Luzes de Fundo Estilo Apple Intelligence (Mantendo a Identidade) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] mix-blend-screen animate-pulse duration-[8000ms]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[7000ms]" />
      </div>

      {/* Container de Login em Vidro Fosco */}
      <div className="relative z-10 w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-neutral-900/40 backdrop-blur-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.8)] transition-all duration-500">
        
        {/* Cabeçalho de Login */}
        <div className="flex flex-col items-center pt-12 pb-8 px-8">
          {/* Ícone de IA Ativo com a Bolinha Verde Piscando */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px] mb-6 shadow-2xl shadow-indigo-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[0.9rem] bg-neutral-950">
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)] animate-pulse duration-1000" />
            </div>
          </div>
          
          <h1 className="text-xl font-semibold tracking-tight text-white mb-2 text-center">Bem-vindo ao Núcleo Comercial IA</h1>
          <p className="text-sm text-neutral-500 font-medium tracking-wide text-center">Acesse sua rede neural comercial</p>
        </div>

        {/* Formulário Estilo Apple */}
        <form onSubmit={handleLogin} className="px-8 pb-10 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] ml-4">Identificação</label>
            <input 
              type="email" 
              placeholder="E-mail ou Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] ml-4">Chave de Acesso</label>
            <input 
              type="password" 
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
              required
            />
          </div>

          <div className="flex justify-end px-2">
            <button type="button" className="text-[11px] text-neutral-500 hover:text-indigo-400 transition-colors duration-300 font-medium">
              Esqueceu sua chave?
            </button>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-4 text-xs font-bold tracking-wider text-black transition-all hover:bg-neutral-100 active:scale-[0.98] shadow-xl shadow-black/40 mt-6"
          >
            {/* Elemento de Shimmer protegido contra interceptação de clique */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer pointer-events-none" />
            
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <div className="flex items-center gap-2 pointer-events-none">
                AUTENTICAR SISTEMA
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            )}
          </button>
        </form>

        {/* Rodapé Interno */}
        <div className="bg-white/[0.02] py-4 border-t border-white/[0.04] text-center">
          <p className="text-[10px] text-neutral-600 font-medium">
            CONEXÃO SEGURA AES-256 ATIVA
          </p>
        </div>
      </div>

      {/* Opções Externas */}
      <div className="mt-8 flex gap-6 z-10">
        <button className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors font-semibold tracking-widest uppercase">
          Criar Conta
        </button>
        <div className="w-[1px] h-4 bg-neutral-800" />
        <button className="text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors font-semibold tracking-widest uppercase">
          Suporte Técnico
        </button>
      </div>

      <footer className="absolute bottom-8 text-[10px] text-neutral-700 tracking-[0.3em] font-medium uppercase">
        Nucleo Commercial Technologies
      </footer>
    </main>
  )
}