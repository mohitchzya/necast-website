import React from 'react';
import { Download, Radio, ShieldCheck, Sparkles, Smartphone, Check } from 'lucide-react';
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
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Centered Call To Action Box */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-red-950/80 via-[#0A0E2B] to-[#050816] border border-red-500/40 p-10 sm:p-16 text-center overflow-hidden glow-crimson">
          
          {/* Background Ambient Lighting Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Logo Emblem */}
            <div className="flex justify-center mb-2">
              <Logo size="lg" showText={false} />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/30 text-xs font-bold text-red-300">
              <Sparkles size={14} className="text-amber-400 animate-spin" />
              Join 50,000+ Mobile Creators
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Stream?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Take full control of your mobile broadcasts today. Download NeCast for Android, link your YouTube account, and go live in seconds.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenDownloadModal}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-extrabold text-white transition-all bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl shadow-[0_10px_35px_-5px_rgba(193,18,31,0.7)] hover:shadow-[0_15px_45px_-5px_rgba(193,18,31,0.9)] hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <Download size={18} className="mr-2.5 text-white group-hover:translate-y-0.5 transition-transform" />
                <span>Download NeCast APK</span>
                <span className="ml-2 px-2 py-0.5 text-[10px] bg-black/30 rounded-md font-mono text-red-200">
                  v2.4.1 FREE
                </span>
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Radio size={16} className="mr-2 text-red-500 animate-pulse" />
                <span>Watch Live Demo</span>
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
