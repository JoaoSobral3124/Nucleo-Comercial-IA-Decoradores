'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface BootLog {
  text: string;
  delay: number;
  type?: 'header' | 'success' | 'info' | 'default';
}

const bootSequence: BootLog[] = [
  { text: 'INITIALIZING NUCLEO_AI CORE...', delay: 400, type: 'default' },
  { text: 'ESTABLISHING SECURE PROTOCOLS...', delay: 1000, type: 'default' },
  { text: 'LOADING NEURAL BROADCAST ENGINE:', delay: 1600, type: 'header' },
  { text: '  SYNCHRONIZING DATA STREAMS [99.9%]', delay: 2200, type: 'default' },
  { text: '  OPTIMIZING VIDEO INFERENCE MODELS', delay: 2600, type: 'default' },
  { text: 'CONNECTION ENCRYPTED (AES-256)', delay: 3400, type: 'info' },
  { text: 'SYSTEM READY.', delay: 4200, type: 'success' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<BootLog[]>([])
  const [isReady, setIsReady] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach((log, index) => {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === bootSequence.length - 1) setIsReady(true);
      }, log.delay);
      timers.push(timer);
    });

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black p-6 font-sans text-neutral-200 overflow-hidden antialiased">
      
      {/* Luzes de Fundo Estilo Apple Intelligence (Aura Animada) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px] mix-blend-screen animate-pulse duration-[6000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[160px] mix-blend-screen animate-pulse duration-[8000ms]" />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[7000ms]" />
      </div>

      {/* Grid de Fundo Ultra-Sutil */}
      <div 
        suppressHydrationWarning 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />

      {/* Container Principal Inspirado no Ecossistema Apple */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/[0.06] bg-neutral-900/40 backdrop-blur-3xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700">
        
        {/* Cabeçalho Minimalista com Cores Dinâmicas */}
        <div className="flex items-center justify-between bg-white/[0.02] px-6 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            {/* Ícone de IA Abstrato e Elegante */}
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-950">
                <div className={`h-2 w-2 rounded-full animate-ping opacity-75 transition-colors duration-500 ${isReady ? 'bg-emerald-400' : 'bg-rose-500'}`} />
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-neutral-300">Nucleo Comercial IA Decoradores</h3>
              <p className="text-[10px] text-neutral-500 font-medium tracking-tight">Módulo Decoradores • v4.0</p>
            </div>
          </div>
          
          {/* Luz de Status Fluida (Vermelha iniciando, Verde pronto) */}
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono tracking-widest transition-all duration-500 ${isReady ? 'text-emerald-400' : 'text-rose-500'}`}>
              {isReady ? 'READY' : 'BOOTING'}
            </span>
            <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 shadow-sm ${
              isReady 
                ? 'bg-emerald-400 shadow-emerald-400/50' 
                : 'bg-rose-500 shadow-rose-500/50 animate-pulse'
            }`} />
          </div>
        </div>

        {/* Console de Logs com Efeito de Vidro Fosco */}
        <div className="p-8 min-h-[340px] flex flex-col justify-between">
          <div className="space-y-3.5 font-mono text-[13px] tracking-tight selection:bg-neutral-800">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-2 transition-all duration-500 transform translate-y-0 animate-in fade-in slide-in-from-bottom-2 ${
                  log.type === 'success' ? 'text-white font-medium' : 
                  log.type === 'header' ? 'text-neutral-400' : 
                  log.type === 'info' ? 'text-neutral-600' : 'text-neutral-500'
                }`}
              >
                <span className="text-neutral-700 select-none">›</span>
                <span>{log.text}</span>
              </div>
            ))}
          </div>

          {/* Área de Ação Premium */}
          <div className="mt-8 pt-4 border-t border-white/[0.02]">
            {!isReady ? (
              <div className="flex flex-col gap-2">
                <div className="h-[2px] w-full bg-neutral-800 overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out" 
                    style={{ width: `${(logs.length / bootSequence.length) * 100}%` }} 
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-600 tracking-wider">
                  <span>LOADING QUANTUM CORE</span>
                  <span>{Math.round((logs.length / bootSequence.length) * 100)}%</span>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => router.push('/login')}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-xs font-semibold tracking-wider text-black transition-all hover:bg-neutral-100 active:scale-[0.99] shadow-lg shadow-black/20"
              >
                {/* Efeito de Brilho de Borda Estilo Apple */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" style={{ animationDuration: '1.5s' }} />
                
                ENTRAR NA PLATAFORMA
                <svg 
                  suppressHydrationWarning
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer Minimalista de Linha Única */}
      <footer className="mt-12 text-[10px] text-neutral-600 tracking-[0.25em] font-medium uppercase select-none">
        Nucleo Commercial Technologies
      </footer>
    </main>
  );
}