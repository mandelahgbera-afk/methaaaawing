"use client"

import { useEffect, useState } from "react"

interface MWCModalHTMLProps {
  isOpen: boolean
  onClose: () => void
}

export function MWCModalHTML({ isOpen, onClose }: MWCModalHTMLProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleRawClose = (e: MessageEvent) => {
      if (e.data === "close-modal") onClose()
    }
    window.addEventListener("message", handleRawClose)
    return () => window.removeEventListener("message", handleRawClose)
  }, [onClose])

  if (!isOpen || !mounted) return null

  // while keeping it integrated into the Next.js lifecycle.
  const modalHtml = `
    <div id="mwc-overlay" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div id="mwc-container" class="relative w-full max-w-[420px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[32px] p-8 border border-white/10 shadow-2xl overflow-hidden animate-zoom-in">
        <!-- Floating Particles (Static HTML) -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="particle p1"></div>
          <div class="particle p2"></div>
          <div class="particle p3"></div>
        </div>

        <button id="close-mwc" class="absolute top-6 right-6 text-white/50 hover:text-white transition-all hover:rotate-90">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div class="relative z-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-3">Access $MWC before launch.</h2>
          <p class="text-sm text-white/60 mb-8 px-4">we're opening early access to $MWC for a limited group of Meta Win members who want to position themselves early.</p>
          
          <div class="inline-flex items-center gap-2 bg-[#2EAADC]/20 border border-[#2EAADC]/40 rounded-full px-5 py-2 mb-8">
            <span class="w-2 h-2 bg-[#2EAADC] rounded-full animate-pulse"></span>
            <span class="text-xs font-bold text-[#2EAADC] uppercase tracking-wider">Meta Win Exclusive</span>
          </div>

          <div class="bg-black/40 rounded-2xl p-4 mb-8 border border-white/5">
             <div class="flex justify-between items-center text-[10px] text-white/40 uppercase font-bold mb-3">
               <span>Status: Active</span>
               <span>Link Reserved</span>
             </div>
             <div class="flex items-center justify-between bg-white/5 rounded-xl p-3">
                <span class="text-white font-bold">$MWC</span>
                <span class="text-[#2EAADC] text-xs">Verify</span>
             </div>
          </div>

          <button id="connect-mwc" class="w-full bg-[#1d75d8] hover:bg-[#2585f2] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] relative overflow-hidden group">
            <span class="relative z-10">Access $MWC before launch</span>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  `

  return (
    <div
      dangerouslySetInnerHTML={{ __html: modalHtml }}
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.id === "mwc-overlay" || target.closest("#close-mwc")) {
          onClose()
        }
      }}
    />
  )
}
