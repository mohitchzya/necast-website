import React from 'react';
import {
  Smartphone,
  Radio,
  ShieldCheck,
  Sliders,
  RotateCcw,
  Zap,
  LayoutDashboard,
  Lock,
  Sparkles
} from 'lucide-react';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const featuresList: Array<{
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    badge?: string;
    highlight: 'crimson' | 'blue';
  }> = [
    {
      id: 'android-direct',
      title: 'Stream Directly From Android',
      description: 'Capture native internal audio and game screen smoothly without any messy capture cards or PC wire setups.',
      icon: Smartphone,
      badge: 'Native Audio',
      highlight: 'crimson',
    },
    {
      id: 'one-tap-live',
      title: 'One Tap Go Live',
      description: 'Instant broadcast triggering. Click one button and your channel goes live with pre-configured titles and settings.',
      icon: Radio,
      badge: 'Instant',
      highlight: 'crimson',
    },
    {
      id: 'google-auth',
      title: 'Google Authentication',
      description: 'Official Google OAuth 2.0 integration safely fetches your YouTube Live API scopes without risking account credentials.',
      icon: ShieldCheck,
      badge: 'OAuth 2.0',
      highlight: 'blue',
    },
    {
      id: 'quality-options',
      title: 'Multiple Quality Options',
      description: 'Stream from 720p HD up to 1440p 2K Ultra with customizable bitrate sliders from 2,500 to 12,000 Kbps.',
      icon: Sliders,
      badge: '60 FPS',
      highlight: 'blue',
    },
    {
      id: 'orientation-support',
      title: 'Landscape & Portrait Support',
      description: 'Seamlessly switch between landscape gaming streams and vertical portrait streams for Shorts & Mobile IRL.',
      icon: RotateCcw,
      badge: 'Adaptive',
      highlight: 'crimson',
    },
    {
      id: 'low-latency',
      title: 'Low Latency Streaming',
      description: 'Optimized RTMP streaming engine delivers ultra-low buffer delays as low as 1.1 seconds for real-time chat interaction.',
      icon: Zap,
      badge: '1.1s Delay',
      highlight: 'blue',
    },
    {
      id: 'creator-dashboard',
      title: 'Beautiful Creator Dashboard',
      description: 'Monitor live chat, viewer counts, audio meters, and stream bitrate graph in a clean, dark-mode mobile HUD.',
      icon: LayoutDashboard,
      badge: 'Live HUD',
      highlight: 'crimson',
    },
    {
      id: 'secure-storage',
      title: 'Secure Account Storage',
      description: 'Encrypted hardware key storage keeps your stream keys and YouTube session credentials safe on your device.',
      icon: Lock,
      badge: 'Encrypted',
      highlight: 'blue',
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-red-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Engine Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for Modern Creators. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-blue-500">
              Uncompromising Android Power.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to broadcast professional mobile gaming streams directly from your Android phone.
          </p>
        </div>

        {/* Features 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature) => {
            const IconComponent = feature.icon;
            const isCrimson = feature.highlight === 'crimson';

            return (
              <div
                key={feature.id}
                className={`group relative p-6 rounded-3xl glass-card transition-all duration-300 ${
                  isCrimson ? 'glass-card-hover' : 'glass-card-blue-hover'
                }`}
              >
                {/* Accent Background Glow on Hover */}
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${
                    isCrimson ? 'from-red-600/20 to-transparent' : 'from-blue-600/20 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${
                        isCrimson
                          ? 'bg-red-950/80 border-red-500/40 text-red-500 shadow-lg shadow-red-950'
                          : 'bg-blue-950/80 border-blue-500/40 text-blue-400 shadow-lg shadow-blue-950'
                      }`}
                    >
                      <IconComponent size={22} />
                    </div>

                    {feature.badge && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                          isCrimson
                            ? 'bg-red-950/40 border-red-500/30 text-red-300'
                            : 'bg-blue-950/40 border-blue-500/30 text-blue-300'
                        }`}
                      >
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
