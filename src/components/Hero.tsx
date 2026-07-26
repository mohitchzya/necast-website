import React from 'react';
import { Download, Play, Check, Radio, ShieldCheck, Zap, Sparkles, Smartphone, ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDownloadModal,
  onOpenPreviewModal,
}) => {
  const badges = [
    { label: 'Android 8.0+', icon: Smartphone },
    { label: 'Google Login', icon: ShieldCheck },
    { label: 'Low Latency', icon: Zap },
    { label: '100% Free', icon: Check },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Top Pill / Eyebrow Badges */}
            <div className="flex flex-wrap gap-3 mb-2">
              <span className="px-3 py-1 glass-card rounded-full text-[10px] font-bold tracking-widest uppercase text-white/50 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                ✓ Android Native
              </span>
              <span className="px-3 py-1 glass-card rounded-full text-[10px] font-bold tracking-widest uppercase text-[#3B82F6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                ✓ Low Latency
              </span>
              <span className="px-3 py-1 glass-card rounded-full text-[10px] font-bold tracking-widest uppercase text-red-400 flex items-center gap-1">
                <Sparkles size={11} /> Zero PC Required
              </span>
            </div>

            {/* Large Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Professional<br />
              <span className="text-white/40">Mobile Streaming.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-xl">
              Stream directly from Android without a PC. Connect YouTube, customize your layout, and go live with a creator-focused experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 text-sm text-white cursor-pointer active:scale-95"
              >
                <Download size={18} />
                <span>Download for Android</span>
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold text-sm text-white/90 hover:text-white backdrop-blur-md transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Radio size={16} className="text-red-500 animate-pulse" />
                <span>Watch Preview</span>
              </button>
            </div>

            {/* Feature Checklist Matrix */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-4 opacity-70 text-xs font-medium text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Google Login Secure
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 1080p 60FPS Support
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 100% Ad Free
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Creator Dashboard
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-slate-700 border-2 border-[#050816] flex items-center justify-center text-[10px] font-bold text-white">YT</div>
                  <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-[#050816] flex items-center justify-center text-[10px] font-bold text-white">NC</div>
                  <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-[#050816] flex items-center justify-center text-[10px] font-bold text-white">GO</div>
                </div>
                <span className="font-semibold text-white">50,000+</span> Streams Launched
              </div>

              <div className="h-4 w-px bg-slate-800" />

              <div className="flex items-center gap-1 text-amber-400 font-bold">
                ★★★★★ <span className="text-slate-300 font-normal">4.9/5 Rating</span>
              </div>
            </div>

          </div>

          {/* Right Hero Phone Mockup Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Background Light Halo */}
            <div className="absolute w-[360px] h-[520px] bg-gradient-to-tr from-red-600/30 via-blue-600/20 to-transparent blur-[100px] rounded-full pointer-events-none" />

            {/* Interactive Phone Mockup */}
            <div className="relative z-10 w-full max-w-[380px]">
              <PhoneMockup
                screenType="home"
                isFloating={true}
                interactive={true}
              />
              
              {/* Floating Badge 1: Low Latency */}
              <div className="absolute -left-6 top-20 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-xs font-black text-white">1.18s Latency</div>
                  <div className="text-[10px] text-slate-400">Direct RTMP Core</div>
                </div>
              </div>

              {/* Floating Badge 2: 60 FPS 1080p */}
              <div className="absolute -right-6 bottom-28 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-3 rounded-2xl shadow-2xl flex items-center gap-3 hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-red-950 flex items-center justify-center text-red-400 border border-red-800">
                  <Radio size={18} className="animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-black text-white">1080p @ 60 FPS</div>
                  <div className="text-[10px] text-slate-400">Adreno Accelerated</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
