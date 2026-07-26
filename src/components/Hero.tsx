import React from 'react';
import { Download, Play, ShieldCheck, Crosshair, Zap, Cpu, Radio, Sparkles } from 'lucide-react';
import { HeroPhoneAnimation } from './HeroPhoneAnimation';
import { TRUTHFUL_BADGES } from '../data/screenshotsData';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDownloadModal,
  onOpenPreviewModal,
}) => {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#030407]">
      {/* Background Cybernetic Gaming Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(193, 18, 31, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(193, 18, 31, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Crosshair Decorative Tech Corners */}
      <div className="absolute top-6 left-6 text-[#C1121F]/30 pointer-events-none hidden sm:block">
        <Crosshair size={24} />
      </div>
      <div className="absolute top-6 right-6 text-[#C1121F]/30 pointer-events-none hidden sm:block">
        <Crosshair size={24} />
      </div>

      {/* Ambient Crimson Glow Lights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#C1121F]/25 via-[#780000]/15 to-transparent blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#C1121F]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive Grid: Stacked on Mobile/Android (grid-cols-1), Side-by-Side on Desktop (lg:grid-cols-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Column: Gaming Hero Text & Action Suite */}
          <div className="col-span-1 lg:col-span-7 order-1 flex flex-col gap-3.5 sm:gap-5 text-left">
            
            {/* Version & Telemetry Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#0A0D14] border border-red-500/30 text-xs font-semibold text-slate-200 shadow-lg shadow-red-950/40">
                <span className="w-2 h-2 rounded-full bg-[#C1121F] animate-ping" />
                <span className="text-[#C1121F] font-bold font-mono uppercase tracking-wider text-[11px]">NeCast Studio</span>
                <span className="text-white/30">•</span>
                <span className="bg-red-950/90 border border-red-700 text-red-400 px-2 py-0.5 rounded-full font-mono text-[9px] sm:text-[10px] uppercase font-bold">Android 15 Optimized</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                <Zap size={12} className="text-emerald-400 animate-pulse" />
                <span>60 FPS • 16k Bitrate</span>
              </span>
            </div>

            {/* Gaming Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white leading-[1.12] uppercase font-sans">
              PRO ESPORTS STREAMING.<br />
              <span className="text-metallic-crimson">DIRECT FROM ANDROID.</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Transform your Android phone into an ultra-low latency mobile broadcast studio. Stream gameplay straight to YouTube or Custom RTMP in <strong className="text-white font-semibold">1440p @ 60 FPS</strong> with up to <strong className="text-white font-semibold">16,000 kbps bitrate</strong>, custom live overlays, and hardware VPU acceleration—completely PC-free.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-black uppercase tracking-wider flex items-center gap-2 text-xs sm:text-sm text-white cursor-pointer active:scale-95 shadow-2xl shadow-red-950/80 border border-red-500/50"
              >
                <Download size={16} />
                <span>Download Studio</span>
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/15 hover:bg-white/10 font-bold text-xs sm:text-sm text-white backdrop-blur-md transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Play size={14} className="text-[#C1121F] fill-[#C1121F]" />
                <span>Watch Live Demo</span>
              </button>
            </div>

            {/* Feature Badges Grid */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {TRUTHFUL_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#0A0D14] border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5 hover:border-[#C1121F]/60 hover:text-white transition-colors"
                >
                  <span className="text-[#C1121F] font-bold">✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Gaming Tech Specs Footer Ticker */}
            <div className="pt-1.5 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Cpu size={14} className="text-red-500 animate-pulse" />
                <span className="font-bold text-slate-200">Hardware VPU Accelerated</span>
              </div>
              <div className="h-3 w-px bg-white/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Direct Google OAuth2</span>
              </div>
            </div>

          </div>

          {/* Second Column: Animated Phone View with Floating Live Gaming Badges */}
          <div className="col-span-1 lg:col-span-5 order-2 flex items-center justify-center relative mt-2 lg:mt-0">
            <HeroPhoneAnimation onOpenPreviewModal={onOpenPreviewModal} />
          </div>

        </div>
      </div>
    </section>
  );
};



