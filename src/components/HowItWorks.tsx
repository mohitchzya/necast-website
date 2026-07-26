import React, { useState } from 'react';
import { Download, UserCheck, Sliders, Radio, CheckCircle2, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownloadModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownloadModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Pre-Register / Download NeCast',
      subtitle: 'Coming Soon On Android',
      description: 'Pre-register or download the official NeCast app on Android as soon as public release goes live on Google Play.',
      icon: Download,
      detail: 'Quick installation on Android 8.0+ devices with zero background clutter.',
    },
    {
      step: 2,
      title: 'Connect Google / YouTube Account',
      subtitle: 'Official Google OAuth2 Login',
      description: 'Authenticate securely with official Google OAuth to link your YouTube channel instantly.',
      icon: UserCheck,
      detail: 'Encrypted token storage with zero password collection.',
    },
    {
      step: 3,
      title: 'Configure Video & Overlay',
      subtitle: 'Resolution, Bitrate & Custom Layouts',
      description: 'Set your video resolution (1440p 60 FPS Ultra HD), bitrate (up to 16,000 kbps), and customize your gameplay overlay.',
      icon: Sliders,
      detail: 'Complete control over hardware encoding and overlay positioning.',
    },
    {
      step: 4,
      title: 'Go Live & Control In-Game',
      subtitle: 'Hardware Accelerated Low Latency',
      description: 'Tap "Start Stream" and control your broadcast seamlessly with floating in-game HUD tools.',
      icon: Radio,
      detail: 'Broadcast in smooth 60 FPS quality with sub-second buffer latency.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10 bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C1121F]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#C1121F]/40 text-xs font-bold text-[#C1121F] uppercase tracking-widest">
            <Sparkles size={12} />
            Simple Creator Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Go Live In Four Simple Steps
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg">
            Everything you need to launch your live stream directly from mobile.
          </p>
        </div>

        {/* 2x2 Clean Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            const isSelected = activeStep === s.step;

            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0A0A0A] border-[#C1121F] shadow-xl shadow-red-950/30'
                    : 'bg-[#050505] border-white/10 hover:bg-[#0A0A0A]/60'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Step Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-[#C1121F] text-white border-red-500 shadow-md shadow-red-950'
                        : 'bg-[#0A0A0A] text-slate-400 border-white/10'
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#C1121F] uppercase tracking-wider bg-red-950/50 px-2 py-0.5 rounded border border-red-900/40">
                        Step {s.step}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {s.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {s.title}
                    </h3>

                    <p className="text-xs text-[#B8B8B8] leading-relaxed">
                      {s.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span>{s.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Trigger CTA */}
        <div className="mt-10 max-w-md mx-auto">
          <button
            onClick={onOpenDownloadModal}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#780000] text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-red-950/40 border border-red-500/30 cursor-pointer active:scale-95 transition-all"
          >
            <Download size={16} />
            <span>Download (Coming Soon)</span>
          </button>
        </div>

      </div>
    </section>
  );
};

