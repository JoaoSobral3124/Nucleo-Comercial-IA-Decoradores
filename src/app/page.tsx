'use client'


import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase/client'

export default function Home() {
  const [step, setStep] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    // Simula a sequência de boot
    const timers = [
      setTimeout(() => setStep(1), 500),   // Iniciando
      setTimeout(() => setStep(2), 1500),  // Carregando módulos
      setTimeout(() => setStep(3), 2500),  // Conectando API
      setTimeout(() => setStep(4), 3500),  // Pronto
      setTimeout(() => setShowButton(true), 4000), // Mostra botão
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-green-500 font-mono p-4 relative overflow-hidden">
      
      {/* Efeito de Scanline (Opcional - leitura antiga de monitor) */}
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

      <div className="z-10 w-full max-w-2xl border border-green-800 p-6 shadow-lg shadow-green-500/20 bg-black/90 backdrop-blur-sm">
        
        {/* Cabeçalho do Sistema */}
        <div className="border-b border-green-800 pb-2 mb-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-widest animate-pulse">
            NUCLEO_COMERCIAL_IA
          </h1>
          <span className="text-xs text-green-700">v1.0.3 // STABLE</span>
        </div>

        {/* Logs do Sistema */}
        <div className="space-y-2 text-sm md:text-base">
          
          {step >= 1 && (
            <p className="animate-fade-in">
              <span className="text-white">{'>'}</span> INITIALIZING SYSTEM KERNEL...
            </p>
          )}

          {step >= 2 && (
            <div className="animate-fade-in">
              <p className="text-white">{'>'}</p>
              <p className="text-white">{'>'} LOADING SALES_MODULES:</p>
              <ul className="pl-4 text-green-400">
                <li> [OK] SCRIPT_GENERATOR</li>
                <li> [OK] OBJECTION_HANDLER</li>
                <li> [OK] EMAIL_AUTOMATION</li>
              </ul>
            </div>
          )}

          {step >= 3 && (
            <p className="animate-fade-in">
              <span className="text-white">{'>'}</span> CONNECTING TO MARKET_API... <span className="text-cyan-400">SUCCESS</span>
            </p>
          )}

          {step >= 4 && (
            <div className="mt-4 pt-4 border-t border-green-900 animate-fade-in">
              <p className="text-xl text-white font-bold">
                ⚡ STATUS: OPERACIONAL
              </p>
              <p className="text-xs text-green-600 mt-1">
                System ready for input. Awaiting command.
              </p>
            </div>
          )}
        </div>

        {/* Botão de Entrada */}
        {showButton && (
          <div className="mt-8 animate-fade-in text-center">
            <button 
              onClick={() => alert('Redirecionando para o Dashboard...')}
              className="border-2 border-green-500 px-8 py-3 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 tracking-widest font-bold uppercase focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              ACESSAR SISTEMA
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
