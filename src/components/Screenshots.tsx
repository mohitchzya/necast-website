import React, { useState } from 'react';
import {
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Eye,
  Sliders,
  Radio,
  Settings as SettingsIcon,
  UserCheck
} from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { ScreenshotItem } from '../types';

export const Screenshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account'>('home');

  const screensData: Array<{
    id: 'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account';
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    tags: string[];
  }> = [
    {
      id: 'splash',
      title: 'Splash Screen',
      subtitle: 'Lightning Fast Cold Starts',
      description: 'NeCast initializes internal audio drivers and hardware encoders in under 800ms with sleek metallic red branding.',
      icon: Smartphone,
      tags: ['ARM64 Engine', 'Android 14', 'Hardware Check'],
    },
    {
      id: 'home',
      title: 'Home Dashboard',
      subtitle: 'Creator Command Center',
      description: 'Instantly view active YouTube Studio channel status, recent broadcast health, and 1-tap live initiation.',
      icon: Radio,
      tags: ['Channel Sync', 'Bitrate Gauge', '1-Tap Live'],
    },
    {
      id: 'setup',
      title: 'Stream Setup',
      subtitle: 'Custom Broadcast Configuration',
      description: 'Set custom titles, resolutions, target bitrates, internal audio capture levels, and privacy scopes before going live.',
      icon: Sliders,
      tags: ['1080p 60FPS', 'Audio Mixing', 'Custom Bitrate'],
    },
    {
      id: 'live',
      title: 'Live Dashboard',
      subtitle: 'Real-Time HUD & Chat',
      description: 'Interact with live YouTube stream chat, view viewer counts, track video bitrate stability, and adjust mic muting on the fly.',
      icon: Eye,
      tags: ['Live Chat Overlay', '1.1s Latency', 'Floating HUD'],
    },
    {
      id: 'settings',
      title: 'Engine Settings',
      subtitle: 'Low Latency & Encoders',
      description: 'Configure H.265 hardware video acceleration, low latency buffer modes, and encrypted RTMP key storage.',
      icon: SettingsIcon,
      tags: ['Adreno VPU', 'Low Latency', 'AES Key Storage'],
    },
    {
      id: 'account',
      title: 'Account Connection',
      subtitle: 'Google OAuth Security',
      description: 'Connect your YouTube Studio account securely with Google OAuth 2.0. No manual key copy-pasting needed.',
      icon: UserCheck,
      tags: ['OAuth 2.0', 'YouTube API', '100% Encrypted'],
    },
  ];

  const currentScreen = screensData.find((s) => s.id === activeTab) || screensData[1];

  const handleNext = () => {
    const currentIndex = screensData.findIndex((s) => s.id === activeTab);
    const nextIndex = (currentIndex + 1) % screensData.length;
    setActiveTab(screensData[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = screensData.findIndex((s) => s.id === activeTab);
    const prevIndex = (currentIndex - 1 + screensData.length) % screensData.length;
    setActiveTab(screensData[prevIndex].id);
  };

  return (
    <section id="screenshots" className="py-24 relative z-10 overflow-hidden bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Application Interface
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Designed Like a Pro Product.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              Not a Mobile Utility.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore NeCast's native Android user interface screens built with dark high-contrast elegance.
          </p>
        </div>

        {/* Screen Selection Tabs Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 custom-scrollbar">
          {screensData.map((screen) => {
            const IconComponent = screen.icon;
            const isActive = activeTab === screen.id;

            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-950 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <IconComponent size={14} />
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-white/10 rounded-3xl p-6 lg:p-10 backdrop-blur-xl relative">
          
          {/* Left Screen Information Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                {currentScreen.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {currentScreen.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentScreen.description}
              </p>
            </div>

            {/* Tags Checklist */}
            <div className="flex flex-wrap gap-2">
              {currentScreen.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-1.5"
                >
                  <CheckCircle2 size={12} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Interactive Carousel Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Screen"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="text-xs font-mono text-slate-400">
                Screen <span className="text-white font-bold">{screensData.findIndex((s) => s.id === activeTab) + 1}</span> of{' '}
                {screensData.length}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Screen"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Floating Interactive Phone Screen Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6">
            <div className="w-full max-w-[340px]">
              <PhoneMockup
                screenType={activeTab}
                isFloating={true}
                interactive={true}
                onScreenChange={(s) => setActiveTab(s)}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
