'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [isFacebookLoading, setIsFacebookLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulação de autenticação por e-mail/senha
    setTimeout(() => {
      setIsLoading(false)
      // router.push('/dashboard')
    }, 2000)
  }

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true)
    // TODO: Integração Supabase OAuth Google
    // Exemplo: await supabase.auth.signInWithOAuth({ provider: 'google' })
    setTimeout(() => setIsGoogleLoading(false), 2000)
  }

  const handleFacebookLogin = async () => {
    setIsFacebookLoading(true)
    // TODO: Integração Supabase OAuth Facebook
    // Exemplo: await supabase.auth.signInWithOAuth({ provider: 'facebook' })
    setTimeout(() => setIsFacebookLoading(false), 2000)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black p-6 font-sans text-neutral-200 overflow-hidden antialiased">
      
      {/* Luzes de Fundo Estilo Apple Intelligence */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] mix-blend-screen animate-pulse duration-[8000ms]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[7000ms]" />
      </div>

      {/* Container de Login em Vidro Fosco */}
      <div className="relative z-10 w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-neutral-900/40 backdrop-blur-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.8)] transition-all duration-500">
        
        {/* Cabeçalho de Login */}
        <div className="flex flex-col items-center pt-12 pb-6 px-8">
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
        <form onSubmit={handleLogin} className="px-8 pb-4 space-y-4">
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
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-4 text-xs font-bold tracking-wider text-black transition-all hover:bg-neutral-100 active:scale-[0.98] shadow-xl shadow-black/40 mt-6 disabled:opacity-50"
          >
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

        {/* Divisória de Métodos de Autenticação */}
        <div className="flex items-center my-2 px-8 text-neutral-600">
          <div className="flex-1 h-[1px] bg-white/[0.06]" />
          <span className="px-4 text-[10px] font-bold tracking-widest uppercase">Ou continuar com</span>
          <div className="flex-1 h-[1px] bg-white/[0.06]" />
        </div>

        {/* Botões do OAuth (Google e Facebook) */}
        <div className="grid grid-cols-2 gap-3 px-8 pb-8">
          {/* Botão Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            className="flex items-center justify-center gap-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] active:scale-[0.97] text-white rounded-2xl py-3 px-4 text-xs font-semibold transition-all duration-300 disabled:opacity-40"
          >
            {isGoogleLoading ? (
              <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                Google
              </>
            )}
          </button>

          {/* Botão Facebook */}
          <button
            type="button"
            onClick={handleFacebookLogin}
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            className="flex items-center justify-center gap-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] active:scale-[0.97] text-white rounded-2xl py-3 px-4 text-xs font-semibold transition-all duration-300 disabled:opacity-40"
          >
            {isFacebookLoading ? (
              <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </>
            )}
          </button>
        </div>

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