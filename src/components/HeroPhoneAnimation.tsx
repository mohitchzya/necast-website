import React from 'react';
import { Cpu, Layers, Sparkles, Activity } from 'lucide-react';
import { AnimatedAndroidPhoneUI } from './AnimatedAndroidPhoneUI';

interface HeroPhoneAnimationProps {
  onOpenPreviewModal?: () => void;
}

export const HeroPhoneAnimation: React.FC<HeroPhoneAnimationProps> = ({ onOpenPreviewModal }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center py-2 select-none">
      
      {/* Ambient Radial Red & Crimson Background Aura */}
      <div className="absolute w-[300px] sm:w-[480px] h-[420px] sm:h-[650px] bg-gradient-to-tr from-[#C1121F]/30 via-[#780000]/20 to-transparent blur-[90px] sm:blur-[140px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute w-[200px] sm:w-[300px] h-[280px] sm:h-[450px] bg-[#C1121F]/25 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none" />

      {/* Main Phone Viewport Container */}
      <div className="relative z-10 w-full flex justify-center">
        
        <div className="relative">
          {/* Real Interactive Animated Android Phone UI */}
          <AnimatedAndroidPhoneUI onOpenPreviewModal={onOpenPreviewModal} />
        </div>

        {/* Floating Live Badge 1: 1440p @ 60 FPS (Top Left) */}
        <div className="absolute -left-2 sm:-left-6 top-10 sm:top-14 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/15 p-2.5 sm:p-3 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-30 glow-crimson animate-float-slow hidden xs:flex">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#C1121F]/20 flex items-center justify-center text-[#C1121F] border border-[#C1121F]/40 shrink-0">
            <Cpu size={18} className="animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-black text-white flex items-center gap-1">
              <span>1440p @ 60</span>
              <Sparkles size={10} className="text-amber-400 shrink-0" />
            </div>
            <div className="text-[8px] sm:text-[10px] text-[#B8B8B8] font-mono">Hardware VPU</div>
          </div>
        </div>

        {/* Floating Live Badge 2: Multi-Layer Overlay Studio (Bottom Right) */}
        <div 
          className="absolute -right-2 sm:-right-6 bottom-16 sm:bottom-20 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/15 p-2.5 sm:p-3 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 z-30 glow-crimson animate-float-slow hidden xs:flex" 
          style={{ animationDelay: '1.5s' }}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#C1121F]/20 flex items-center justify-center text-[#C1121F] border border-[#C1121F]/40 shrink-0">
            <Layers size={18} />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-black text-white">Live Overlay</div>
            <div className="text-[8px] sm:text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <Activity size={10} />
              <span>Sub-Second</span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtitle Hint */}
      <div className="mt-3 text-center z-20">
        <p className="text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Android UI • Click <strong className="text-white">GO LIVE NOW</strong> to simulate stream</span>
        </p>
      </div>

    </div>
  );
};

