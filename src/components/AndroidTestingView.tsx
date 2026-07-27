import React, { useState } from 'react';
import { Smartphone, Sparkles, Monitor, Cpu, Layers, Radio, Settings, ChevronRight, Eye } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import { SCREENSHOTS_DATA, ScreenshotData } from '../data/screenshotsData';

interface AndroidTestingViewProps {
  onOpenPreviewModal?: () => void;
}

// Key Android test screens for the testing view
const TEST_SCREENS = [
  { id: 1, label: 'Dashboard', icon: Smartphone, shotId: 1 },
  { id: 6, label: '1440p @ 60', icon: Monitor, shotId: 6 },
  { id: 8, label: '16k Bitrate', icon: Cpu, shotId: 8 },
  { id: 18, label: 'Overlay Editor', icon: Layers, shotId: 18 },
  { id: 5, label: 'Custom RTMP', icon: Radio, shotId: 5 },
];

export const AndroidTestingView: React.FC<AndroidTestingViewProps> = ({ onOpenPreviewModal }) => {
  const [activeTabId, setActiveTabId] = useState<number>(1);

  const activeScreenshot: ScreenshotData = 
    SCREENSHOTS_DATA.find((s) => s.id === activeTabId) || SCREENSHOTS_DATA[0];

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-4 relative">
      
      {/* Top Testing Header Bar */}
      <div className="w-full bg-[#0A0B10] border border-white/10 rounded-2xl p-3 shadow-xl backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-white font-mono tracking-tight">Android 15 (API 35)</span>
            <span className="text-xs text-white/30">•</span>
            <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              Testing Build
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
            <span className="text-[#C1121F] font-bold">VPU</span>
            <span>HW Accel</span>
          </div>
        </div>

        {/* Interactive Screen Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {TEST_SCREENS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.shotId === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.shotId)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#C1121F] text-white shadow-lg shadow-red-950/60 border border-red-500/50 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <Icon size={12} className={isActive ? 'text-white' : 'text-slate-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Clean Android Device Frame (Zero Floating Overlay Cards) */}
      <div className="relative w-full flex justify-center py-2">
        
        {/* Subtle Ambient Red Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C1121F]/15 via-[#780000]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 transition-all duration-500 transform hover:scale-[1.01]">
          <PhoneFrame
            imageSrc={activeScreenshot.filename}
            altText={activeScreenshot.title}
            orientation={activeScreenshot.orientation}
            isFloating={false}
            interactive={true}
            onClick={onOpenPreviewModal}
            size="md"
            fit="crop-center"
            cropStatusBar={true}
          />
        </div>
      </div>

      {/* Active Screen Feature Summary Footer */}
      <div className="w-full bg-[#0A0B10] border border-white/10 rounded-2xl p-3 shadow-xl backdrop-blur-xl flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-[#C1121F]/20 border border-[#C1121F]/40 text-[10px] font-bold text-red-400 uppercase tracking-wider">
              {activeScreenshot.category}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
              {activeScreenshot.title}
            </h4>
          </div>

          {onOpenPreviewModal && (
            <button
              onClick={onOpenPreviewModal}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
            >
              <Eye size={12} />
              <span className="hidden sm:inline">Inspect</span>
            </button>
          )}
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {activeScreenshot.keyHighlights.slice(0, 3).map((highlight, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md flex items-center gap-1"
            >
              <span className="text-[#C1121F] font-bold">✓</span>
              {highlight}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
