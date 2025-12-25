"use client"

import { X, Zap } from "lucide-react"

interface MWCModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MWCModal({ isOpen, onClose }: MWCModalProps) {
  if (!isOpen) return null

  const handleConnect = () => {
    console.log("[v0] Connect wallet clicked - awaiting init_co() implementation")
    // TODO: Integrate with actual wallet connection logic
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-[420px] animate-in zoom-in-95 slide-in-from-bottom-4 duration-400">
        {/* Gradient Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] p-6 sm:p-8 shadow-2xl border border-white/10">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2EAADC]/50 to-transparent" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-[#2EAADC]/60 animate-float" />
            <div className="absolute left-[80%] top-[30%] h-1 w-1 rounded-full bg-[#2EAADC]/60 animate-float-delayed-1" />
            <div className="absolute left-[30%] top-[70%] h-1 w-1 rounded-full bg-[#2EAADC]/60 animate-float-delayed-2" />
            <div className="absolute left-[70%] top-[80%] h-1 w-1 rounded-full bg-[#2EAADC]/60 animate-float-delayed-3" />
            <div className="absolute left-[50%] top-[10%] h-1 w-1 rounded-full bg-[#2EAADC]/60 animate-float-delayed-4" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:rotate-90 duration-300"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 text-white/70" />
          </button>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight text-balance">
                Access $MWC before launch.
              </h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed text-pretty">
                we're opening early access to $MWC for a limited group of Meta Win members who want to position
                themselves early.
              </p>
            </div>

            {/* Feature Pill */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#2EAADC]/15 border border-[#2EAADC]/30 rounded-full px-4 py-2 animate-glow">
                <Zap className="h-4 w-4 text-[#2EAADC]" />
                <span className="text-xs sm:text-sm font-semibold text-[#2EAADC]">Meta Win Exclusive</span>
              </div>
            </div>

            {/* Status Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[10px] sm:text-xs font-medium text-white/70 mb-2">
                <span>Status: Invitation Active</span>
                <span className="text-white/50 hidden sm:inline">Time-Limited Link Reserved</span>
                <span className="text-white/50 sm:hidden">Reserved</span>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-2xl p-3 sm:p-4 transition-all focus-within:border-[#2EAADC]/50 focus-within:shadow-[0_0_0_3px_rgba(46,170,220,0.1)]">
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 rounded-xl px-3 py-2 cursor-pointer hover:bg-white/15 transition-all">
                    <span className="text-sm font-semibold text-white">$MWC</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleConnect}
              className="w-full bg-gradient-to-r from-[#1d75d8] to-[#0f70de] rounded-2xl py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-white relative overflow-hidden hover:shadow-[0_8px_24px_rgba(46,170,220,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

              <div className="flex items-center justify-center gap-2">
                <span className="text-balance">Access $MWC before launch</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

            {/* Footer */}
            <p className="text-center text-[10px] sm:text-xs text-white/40 mt-4">
              By connecting, you agree to our{" "}
              <a href="#" className="text-[#2EAADC] hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
