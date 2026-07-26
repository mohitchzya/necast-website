import React from 'react';
import { Download, Play, Check } from 'lucide-react';
import { Logo } from './Logo';

interface CTASectionProps {
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenDownloadModal,
  onOpenPreviewModal,
}) => {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Call To Action Box */}
        <div className="relative rounded-[40px] bg-[#0A0A0A] border border-white/10 p-10 sm:p-16 text-center overflow-hidden">
          
          {/* Crimson Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C1121F]/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Logo Emblem */}
            <div className="flex justify-center mb-2">
              <Logo size="lg" showText={false} />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              NeCast Is Launching Soon!
            </h2>

            <p className="text-[#B8B8B8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Pre-register now to get notified as soon as NeCast Studio launches on Android and Google Play.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2.5 text-sm text-white cursor-pointer active:scale-95 shadow-xl shadow-red-950/50"
              >
                <Download size={18} />
                <span>Pre-Register / Download (Coming Soon)</span>
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 font-bold text-sm text-slate-200 hover:text-white backdrop-blur-md transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Play size={16} className="text-[#C1121F] fill-[#C1121F]" />
                <span>Watch Demo (Coming Soon)</span>
              </button>
            </div>

            {/* Feature Guarantees */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Free Forever
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> No PC or Hardware Required
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Google OAuth Verified
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
