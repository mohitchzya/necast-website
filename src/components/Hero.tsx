import React from 'react';
import { Download, Play, ShieldCheck, Radio, Sparkles, Activity, Cpu, Layers } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
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
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#050505]">
      {/* Background Subtle Red Lighting and Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C1121F]/20 via-[#780000]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#C1121F]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Animated Cropped Phone Mockup (Image 1) */}
          <div className="col-span-5 sm:col-span-5 lg:col-span-5 order-1 flex items-center justify-center relative">
            
            {/* Animated Crimson Aura Glow Rings */}
            <div className="absolute w-[180px] xs:w-[240px] sm:w-[380px] h-[300px] xs:h-[360px] sm:h-[550px] bg-gradient-to-tr from-[#C1121F]/35 via-[#780000]/25 to-transparent blur-[60px] sm:blur-[110px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute w-[140px] xs:w-[180px] sm:w-[240px] h-[250px] xs:h-[300px] sm:h-[420px] bg-[#C1121F]/20 blur-[40px] sm:blur-[80px] rounded-full pointer-events-none" />

            {/* Phone Container with Live Streaming Overlay Badges */}
            <div className="relative z-10 w-full flex justify-center">
              
              {/* Phone Mockup Frame loaded with Image 1 (Cropped Center for tight fit) */}
              <div className="relative">
                <PhoneFrame
                  imageSrc="/screenshots/1.jpg"
                  altText="NeCast Live Android Streaming App Interface"
                  title="NeCast Android Studio"
                  badge="Live Stream Interface"
                  orientation="portrait"
                  isFloating={true}
                  interactive={true}
                  size="sm"
                  fit="crop-center"
                  cropStatusBar={true}
                />

                {/* Animated LIVE Overlay Pill pinned over top of phone screen */}
                <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 rounded-full bg-black/90 border border-red-500/60 shadow-lg shadow-red-950/80 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#C1121F]"></span>
                    </span>
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-black font-mono tracking-wider text-white uppercase">LIVE</span>
                  </div>
                </div>

                {/* Live Equalizer Animation Wave inside Phone Screen Bottom */}
                <div className="absolute bottom-6 sm:bottom-12 left-2 sm:left-6 right-2 sm:right-6 z-30 pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl p-1 sm:p-2 flex items-center justify-between text-[8px] sm:text-[10px] font-mono">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-bold text-[7px] sm:text-[10px]">
                      <Radio size={9} className="animate-pulse text-[#C1121F] shrink-0" />
                      <span>16k kbps</span>
                    </div>
                    {/* Animated Equalizer Bars */}
                    <div className="flex items-end gap-0.5 sm:gap-1 h-2.5 sm:h-3">
                      <div className="w-0.5 sm:w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_100ms] h-1 sm:h-1.5" />
                      <div className="w-0.5 sm:w-1 bg-emerald-400 rounded-full animate-[bounce_1s_infinite_300ms] h-2.5 sm:h-3" />
                      <div className="w-0.5 sm:w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_200ms] h-1.5 sm:h-2" />
                      <div className="w-0.5 sm:w-1 bg-red-500 rounded-full animate-[bounce_1s_infinite_400ms] h-2 sm:h-2.5" />
                      <div className="w-0.5 sm:w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_150ms] h-1 sm:h-1.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 1: 1440p @ 60 FPS (Top Left) */}
              <div className="absolute -left-1.5 sm:-left-6 top-4 sm:top-8 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/15 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl shadow-2xl flex items-center gap-1.5 sm:gap-2.5 z-30 glow-crimson animate-float-slow">
                <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#C1121F]/20 flex items-center justify-center text-[#C1121F] border border-[#C1121F]/40 shrink-0">
                  <Cpu size={12} className="animate-pulse sm:hidden" />
                  <Cpu size={16} className="animate-pulse hidden sm:block" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[11px] font-black text-white flex items-center gap-0.5 sm:gap-1">
                    <span>1440p @ 60</span>
                    <Sparkles size={8} className="text-amber-400 shrink-0" />
                  </div>
                  <div className="text-[7px] sm:text-[9px] text-[#B8B8B8] font-mono">Hardware VPU</div>
                </div>
              </div>

              {/* Floating Live Badge 2: Multi-Layer Overlay Studio (Bottom Right) */}
              <div className="absolute -right-1.5 sm:-right-6 bottom-10 sm:bottom-16 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/15 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl shadow-2xl flex items-center gap-1.5 sm:gap-2.5 z-30 glow-crimson animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#C1121F]/20 flex items-center justify-center text-[#C1121F] border border-[#C1121F]/40 shrink-0">
                  <Layers size={12} className="sm:hidden" />
                  <Layers size={16} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[11px] font-black text-white">Live Overlay</div>
                  <div className="text-[7px] sm:text-[9px] text-emerald-400 font-mono flex items-center gap-0.5 sm:gap-1">
                    <Activity size={8} />
                    <span>Sub-Second</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Content with Minimized Text Sizes for Android/Mobile */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-7 order-2 flex flex-col gap-2 sm:gap-4 text-left">
            
            {/* Version Badge */}
            <div>
              <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#0A0A0A] border border-white/10 text-[9px] sm:text-[11px] font-semibold text-slate-300 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] animate-pulse" />
                <span className="text-[#C1121F] font-bold">NeCast Studio</span>
                <span className="text-white/30">•</span>
                <span className="bg-red-950/80 border border-red-800 text-red-400 px-1.5 sm:px-2 py-0.5 rounded-full font-mono text-[8px] sm:text-[9px] uppercase font-bold">Coming Soon</span>
              </span>
            </div>

            {/* Heading - Scaled for identical multi-column look on Mobile and Windows */}
            <h1 className="text-sm xs:text-base sm:text-2xl xl:text-4xl font-black tracking-tight text-white leading-[1.15]">
              Professional Live Streaming.<br />
              <span className="text-metallic-crimson">Right From Your Android.</span>
            </h1>

            {/* Description - Scaled for Mobile & Desktop */}
            <p className="text-[10px] xs:text-[11px] sm:text-xs lg:text-sm text-[#B8B8B8] font-normal leading-relaxed max-w-xl">
              Turn your Android phone into a professional live streaming studio. Stream directly to YouTube or any Custom RTMP destination in up to 1440p at 60 FPS with bitrates up to 16,000 kbps, customize your gameplay with the powerful Overlay Editor, adjust bitrate, FPS, resolution and gameplay appearance, then go live using hardware-accelerated streaming—all without needing a PC.
            </p>

            {/* Buttons - Compact Scaled Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 pt-0.5 sm:pt-1">
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary px-2.5 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold flex items-center gap-1 sm:gap-2 text-[9px] xs:text-[10px] sm:text-xs text-white cursor-pointer active:scale-95 shadow-lg shadow-red-950/40"
              >
                <Download size={12} className="sm:hidden" />
                <Download size={16} className="hidden sm:block" />
                <span>Download (Soon)</span>
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="px-2.5 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/5 font-bold text-[9px] xs:text-[10px] sm:text-xs text-white/90 hover:text-white backdrop-blur-md transition-all cursor-pointer active:scale-95 flex items-center gap-1 sm:gap-2"
              >
                <Play size={10} className="text-[#C1121F] fill-[#C1121F] sm:hidden" />
                <Play size={14} className="text-[#C1121F] fill-[#C1121F] hidden sm:block" />
                <span>Watch Preview</span>
              </button>
            </div>

            {/* Truthful Feature Badges */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
              {TRUTHFUL_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-[#0A0A0A] border border-white/10 text-[8px] xs:text-[9px] sm:text-[11px] font-semibold text-slate-300 flex items-center gap-1 hover:border-[#C1121F]/50 hover:text-white transition-colors"
                >
                  <span className="text-[#C1121F] font-bold">✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Hardware Acceleration Note */}
            <div className="pt-0.5 sm:pt-1 flex flex-wrap items-center gap-2 sm:gap-5 text-[8px] xs:text-[9px] sm:text-[11px] text-[#B8B8B8]">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-white">Hardware VPU Accelerated</span>
              </div>
              <div className="h-3 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-1 text-slate-300 font-medium">
                <ShieldCheck size={12} className="text-[#C1121F] sm:hidden" />
                <ShieldCheck size={14} className="text-[#C1121F] hidden sm:block" />
                <span>Direct Google OAuth2</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

