'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Interface de logs
interface BootLog {
  text: string;
  delay: number;
  type?: 'header' | 'success' | 'info' | 'default';
  icon?: React.ReactNode;
}

const bootSequence: BootLog[] = [
  { text: 'INITIALIZING NUCLEO_AI CORE...', delay: 400, type: 'default' },
  { text: 'ESTABLISHING SECURE PROTOCOLS...', delay: 1000, type: 'default' },
  { text: 'LOADING NEURAL BROADCAST ENGINE:', delay: 1600, type: 'header' },
  { text: '  SYNCHRONIZING DATA STREAMS [99.9%]', delay: 2200, type: 'default' },
  { text: '  OPTIMIZING VIDEO INFERENCE MODELS', delay: 2600, type: 'default' },
  { text: 'CONNECTION ENCRYPTED (AES-256)', delay: 3400, type: 'info' },
  { text: 'SYSTEM OPERATIONAL.', delay: 4200, type: 'success' },
]

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<BootLog[]>([])
  const [isReady, setIsReady] = useState(false)
  const router = useRouter();

useEffect(() => {
    // Usamos um requestAnimationFrame ou apenas deixamos o código seguir
    // para evitar o alerta de "sincronismo" do ESLint
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

  // Evita renderização no servidor para prevenir conflitos com extensões de navegador
  if (!mounted) {
    return <div className="min-h-screen bg-[#020617]" />;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#020617] p-4 font-sans text-slate-200 overflow-hidden">
      
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid de fundo com supressão de aviso de hidratação */}
      <div 
        suppressHydrationWarning 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-2xl shadow-2xl">
        
        {/* Header Dashboard */}
        <div className="flex items-center justify-between bg-white/5 px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <svg 
                suppressHydrationWarning
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-white uppercase">Núcleo IA</h2>
              <p className="text-[10px] text-emerald-400 font-mono leading-none uppercase">Streaming Engine v4.0</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-slate-700" />
            <div className="h-2 w-2 rounded-full bg-slate-700" />
          </div>
        </div>

        {/* Console de Logs */}
        <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
          <div className="flex-1 space-y-4 font-mono">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 text-sm animate-in fade-in slide-in-from-left-4 duration-500 ${
                  log.type === 'success' ? 'text-emerald-400 font-bold' : 
                  log.type === 'header' ? 'text-blue-400' : 
                  log.type === 'info' ? 'text-slate-500' : 'text-slate-300'
                }`}
              >
                <span className={log.type === 'success' ? 'text-base' : ''}>{log.text}</span>
              </div>
            ))}
          </div>

          {/* Área de Ação/Botão */}
          <div className="mt-10">
            {!isReady ? (
              <div className="flex items-center gap-3 text-slate-500 text-xs font-mono italic">
                <div className="h-1 w-12 bg-slate-800 overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-300" 
                    style={{ width: `${(logs.length / bootSequence.length) * 100}%` }} 
                  />
                </div>
                PROCESSANDO NÚCLEO...
              </div>
            ) : (
              <button 
                onClick={() => router.push('/login')}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98]"
              >
                ACESSAR PLATAFORMA
                <svg 
                  suppressHydrationWarning
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-8 text-[11px] text-slate-600 tracking-[0.2em] uppercase">
        Powered by <span className="text-slate-400 font-bold">Nucleo Commercial Technologies</span>
      </footer>
    </main>
  );
}