import React, { useState } from 'react';
import { Download, UserCheck, Sliders, Radio, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface HowItWorksProps {
  onOpenDownloadModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownloadModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Download NeCast',
      subtitle: 'Free Android APK',
      description: 'Install NeCast on any Android device (version 8.0 or newer). Lightweight 28 MB payload with hardware encoder optimizations.',
      icon: Download,
      screenType: 'splash' as const,
      detail: 'No root access or complex ADB computer tethering needed.',
    },
    {
      step: 2,
      title: 'Sign in with Google',
      subtitle: 'YouTube Studio OAuth',
      description: 'Log in with your existing Google account. NeCast authenticates directly with YouTube Studio APIs to auto-detect your live stream keys.',
      icon: UserCheck,
      screenType: 'account' as const,
      detail: 'Official OAuth 2.0 security token keeps passwords 100% private.',
    },
    {
      step: 3,
      title: 'Configure Stream',
      subtitle: 'Resolution & Bitrate',
      description: 'Select stream title, gaming category, resolution (720p - 1440p), target bitrate, and internal game audio mix preferences.',
      icon: Sliders,
      screenType: 'setup' as const,
      detail: 'Includes Front Cam overlay and screen touch indicators.',
    },
    {
      step: 4,
      title: 'Go Live',
      subtitle: 'Broadcast Instantly',
      description: 'Hit the crimson "GO LIVE NOW" button. NeCast streams directly to YouTube with ultra-low latency and live chat overlay.',
      icon: Radio,
      screenType: 'live' as const,
      detail: 'Enjoy 60FPS mobile gaming broadcast with zero dropped frames.',
    },
  ];

  const currentStep = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Simple Setup Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Go Live in 4 Simple Steps.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-red-500">
              No PC Required.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From download to live broadcast in under 60 seconds.
          </p>
        </div>

        {/* Steps Grid & Live Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Steps Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((s) => {
              const IconComponent = s.icon;
              const isSelected = activeStep === s.step;

              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-red-500/50 shadow-xl shadow-red-950/30 scale-[1.01]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      {s.step}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {s.title}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-slate-400">
                          {s.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {s.description}
                      </p>

                      {isSelected && (
                        <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                          <CheckCircle2 size={13} />
                          <span>{s.detail}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Trigger CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDownloadModal}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-red-950 cursor-pointer"
              >
                <Download size={16} />
                <span>Start Step 1: Download NeCast APK Now</span>
              </button>
            </div>
          </div>

          {/* Right Phone Screen Dynamic Preview */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[340px]">
              <PhoneMockup
                screenType={currentStep.screenType}
                isFloating={true}
                interactive={true}
                onScreenChange={(screen) => {
                  const match = steps.find((st) => st.screenType === screen);
                  if (match) setActiveStep(match.step);
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
