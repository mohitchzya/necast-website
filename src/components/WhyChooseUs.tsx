import React from 'react';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  MonitorOff,
  Flame,
  Layout,
  Cpu
} from 'lucide-react';
import { WhyChooseItem } from '../types';

export const WhyChooseUs: React.FC = () => {
  const cards: WhyChooseItem[] = [
    {
      title: 'Built For Creators',
      description: 'Crafted specifically for mobile gamers, IRL vloggers, and live broadcasters who demand high performance without messy cables.',
      iconName: 'Flame',
      stat: '50K+',
      statLabel: 'Active Streamers',
    },
    {
      title: 'Modern UI & UX',
      description: 'Sleek dark glassmorphic design system with high-contrast audio meters and clean overlays that never block your gameplay.',
      iconName: 'Layout',
      stat: '60 FPS',
      statLabel: 'Fluid Interface',
    },
    {
      title: 'Fast Performance',
      description: 'Native C++ hardware video encoding pipeline leverages Snapdragon Adreno & MediaTek VPU chips for near-zero drop frames.',
      iconName: 'Zap',
      stat: '< 1% ',
      statLabel: 'Dropped Frames',
    },
    {
      title: 'Bank-Grade Security',
      description: 'Google OAuth 2.0 security prevents raw stream key exposure. All tokens stay locally encrypted in Android KeyStore.',
      iconName: 'ShieldCheck',
      stat: 'AES-256',
      statLabel: 'Key Encryption',
    },
    {
      title: 'No PC Required',
      description: 'No companion OBS laptop needed. Stream internal audio, facecam overlay, and live chat directly from your phone.',
      iconName: 'MonitorOff',
      stat: '$0',
      statLabel: 'Hardware Saved',
    },
    {
      title: 'Future Ready Architecture',
      description: 'Built-in support for upcoming multi-streaming protocols, SRT transport, and 4K mobile broadcasts.',
      iconName: 'Cpu',
      stat: 'v2.4',
      statLabel: 'Next-Gen Core',
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-red-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Top Mobile Streamers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-blue-500">
              Choose NeCast.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Say goodbye to laggy mirror apps, heavy PC setups, and expensive capture cards.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const icons: Record<string, React.ElementType> = {
              Flame,
              Layout,
              Zap,
              ShieldCheck,
              MonitorOff,
              Cpu,
            };
            const IconComponent = icons[card.iconName] || Zap;

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl glass-card glass-card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-950 to-slate-900 border border-red-500/40 text-red-400 flex items-center justify-center shadow-lg shadow-red-950 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.stat && (
                  <div className="pt-4 border-t border-slate-800/80 flex items-baseline justify-between">
                    <span className="text-2xl font-black text-white font-mono">{card.stat}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{card.statLabel}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
