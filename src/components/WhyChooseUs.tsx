import React from 'react';
import {
  Sparkles,
  Smartphone,
  Layout,
  Gamepad2,
  Zap,
  Users,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'One App',
      description: 'Everything required for professional Android livestreaming in a single lightweight package.',
      icon: Smartphone,
      stat: 'All-In-One',
      statLabel: 'Full Studio',
    },
    {
      title: 'Professional Interface',
      description: 'Modern premium UI built specifically for creators, with high contrast typography and clean layouts.',
      icon: Layout,
      stat: 'Dark Theme',
      statLabel: 'High Contrast',
    },
    {
      title: 'Gameplay Customization',
      description: 'Complete control over gameplay appearance, positioning, scale, aspect ratios, and color filters.',
      icon: Gamepad2,
      stat: 'Pixel-Level',
      statLabel: 'Overlay Control',
    },
    {
      title: 'High Performance',
      description: 'Hardware accelerated streaming with excellent video quality and ultra-low buffer latency.',
      icon: Zap,
      stat: '1440p 60FPS',
      statLabel: '16,000 kbps VPU',
    },
    {
      title: 'Creator Focused',
      description: 'Designed around real creator workflows to make mobile game broadcasting seamless.',
      icon: Users,
      stat: '100% Mobile',
      statLabel: 'No PC Needed',
    },
    {
      title: 'Secure Google Authentication',
      description: 'Official Google Sign-In uses encrypted OAuth 2.0 tokens for 100% account safety.',
      icon: ShieldCheck,
      stat: 'OAuth 2.0',
      statLabel: 'Google Verified',
    },
    {
      title: 'Built For Android',
      description: 'Purpose-built mobile streaming experience engineered exclusively for Android devices.',
      icon: Cpu,
      stat: 'ARM64',
      statLabel: 'Android Native',
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050505] border border-white/10 text-xs font-bold text-[#C1121F] uppercase tracking-widest">
            <Sparkles size={12} />
            Value Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Creators Choose NeCast
          </h2>
          <p className="text-[#B8B8B8] text-base sm:text-lg">
            Purpose-built mobile technology designed to power your broadcasting journey.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-[#050505] border border-white/10 hover:border-[#C1121F]/40 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 text-[#C1121F] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#C1121F] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-sm font-black text-white font-mono">{pillar.stat}</span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{pillar.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
