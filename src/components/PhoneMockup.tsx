import React, { useState } from 'react';
import {
  Radio,
  Wifi,
  Settings,
  UserCheck,
  Video,
  Zap,
  ShieldCheck,
  Volume2,
  Sliders,
  MessageSquare,
  Eye,
  CheckCircle2,
  Sparkles,
  Maximize2,
  RotateCcw,
  Flame,
  Play,
  Activity,
  Mic,
  Camera,
  Layers,
  Check,
  ArrowLeft,
  Plus,
  Tv,
  Lock,
  ChevronRight,
  Move,
  CornerDownRight,
  SlidersHorizontal,
  Sliders as SlidersIcon,
  HelpCircle,
  Info,
  Shield
} from 'lucide-react';
import { Logo } from './Logo';
import { ScreenType } from '../types';

interface PhoneMockupProps {
  screenType?: ScreenType;
  isFloating?: boolean;
  interactive?: boolean;
  orientation?: 'portrait' | 'landscape';
  className?: string;
  onScreenChange?: (screen: ScreenType) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenType = 'home',
  isFloating = true,
  interactive = true,
  orientation = 'portrait',
  className = '',
  onScreenChange,
}) => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>(screenType);
  const [selectedResolution, setSelectedResolution] = useState('1440p');
  const [selectedBitrate, setSelectedBitrate] = useState('16000 kbps');
  const [selectedOrientation, setSelectedOrientation] = useState<'9:16' | '16:9' | 'OVERLAY'>('16:9');

  React.useEffect(() => {
    setActiveScreen(screenType);
  }, [screenType]);

  const handleNavClick = (screen: ScreenType) => {
    setActiveScreen(screen);
    if (onScreenChange) onScreenChange(screen);
  };

  return (
    <div
      className={`relative select-none transition-all duration-500 ${
        isFloating ? 'animate-float-slow' : ''
      } ${className}`}
    >
      {/* Phone Ambient Backlight Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#C1121F]/30 via-[#C1121F]/10 to-[#780000]/30 rounded-[50px] blur-2xl opacity-75 pointer-events-none" />

      {/* Main Outer Phone Body Frame */}
      <div
        className="relative mx-auto bg-[#0A0A0A] border-[3px] border-slate-800 rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(193,18,31,0.25)] transition-all duration-500 overflow-hidden w-[310px] sm:w-[340px] h-[640px] sm:h-[670px]"
      >
        {/* Shiny Edge Bevel Highlight */}
        <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none z-30" />

        {/* Screen Inner Container */}
        <div className="relative w-full h-full bg-[#050505] rounded-[36px] overflow-hidden flex flex-col justify-between border border-slate-900">
          
          {/* Top Android Status Bar */}
          <div className="w-full pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-medium text-slate-400 z-20 bg-black/60 backdrop-blur-md">
            <span>09:41</span>
            
            {/* Center Hole Punch Camera */}
            <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                5G
              </div>
              <Wifi size={12} className="text-slate-300" />
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* SCREEN CONTENT AREA */}
          <div className="flex-1 overflow-y-auto custom-scrollbar relative p-3">
            
            {/* 1. SPLASH SCREEN */}
            {activeScreen === 'splash' && (
              <div className="h-full flex flex-col items-center justify-between py-10 text-center relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-[#1A0305]">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C1121F]/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="w-full" />

                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="relative">
                    <Logo size="xl" showText={false} />
                  </div>
                  
                  <div className="mt-2 text-center">
                    <h3 className="text-3xl font-black italic tracking-tighter text-white">
                      Ne<span className="text-[#C1121F]">Cast</span>
                    </h3>
                    <p className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold mt-1">
                      Stream Anywhere. Create Everywhere.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 bg-[#0A0A0A] px-4 py-2 rounded-full border border-[#C1121F]/30 shadow-lg">
                    <Activity size={14} className="text-[#C1121F] animate-spin" />
                    <span className="text-xs font-medium text-slate-200">Initializing Core Engine...</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono tracking-wider">
                  v2.4.1 ARM64 • Android 14 Core
                </div>
              </div>
            )}

            {/* 2. HOME / STREAM SETUP SCREEN */}
            {(activeScreen === 'home' || activeScreen === 'resolution' || activeScreen === 'bitrate') && (
              <div className="flex flex-col gap-3 relative">
                {/* Header Title Bar */}
                <div className="flex items-center justify-between pt-1 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-black italic tracking-tighter text-[#C1121F]">NECAST</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/40 text-[9px] font-black text-[#C1121F] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] animate-pulse" />
                      GO LIVE
                    </span>
                  </div>
                  <button 
                    onClick={() => handleNavClick('settings')}
                    className="p-1.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-slate-300 hover:text-white"
                  >
                    <Settings size={14} />
                  </button>
                </div>

                {/* Stream Title Input Card */}
                <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stream Title</span>
                    <span className="text-[9px] text-slate-500">0 / 100</span>
                  </div>
                  <input
                    type="text"
                    readOnly
                    value="Apex Legends Mobile Ranked Grind #15 [1440p 60FPS]"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-white font-medium focus:outline-none"
                  />
                  
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Description</span>
                    <span className="text-[9px] text-slate-500">0 / 200</span>
                  </div>
                  <input
                    type="text"
                    readOnly
                    value="Streaming live from Android with NeCast! Leave a like and subscribe!"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-slate-300 font-medium focus:outline-none"
                  />
                </div>

                {/* Platform Selector */}
                <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Platform</span>
                  <div className="flex items-center gap-2">
                    <button className="flex-1 py-1.5 px-3 rounded-xl bg-[#C1121F] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-950">
                      <Check size={12} />
                      <span>YouTube</span>
                    </button>
                    <button className="py-1.5 px-3 rounded-xl bg-[#050505] border border-white/10 text-slate-400 font-bold text-xs flex items-center gap-1 hover:text-white">
                      <Plus size={12} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

                {/* Orientation Selector */}
                <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Orientation</span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <button
                      onClick={() => setSelectedOrientation('9:16')}
                      className={`py-1.5 rounded-xl border text-[11px] font-bold transition-all ${
                        selectedOrientation === '9:16'
                          ? 'bg-[#C1121F]/20 border-[#C1121F] text-white'
                          : 'bg-[#050505] border-white/10 text-slate-400'
                      }`}
                    >
                      📱 9:16
                    </button>
                    <button
                      onClick={() => setSelectedOrientation('16:9')}
                      className={`py-1.5 rounded-xl border text-[11px] font-bold transition-all ${
                        selectedOrientation === '16:9'
                          ? 'bg-[#C1121F]/20 border-[#C1121F] text-white'
                          : 'bg-[#050505] border-white/10 text-slate-400'
                      }`}
                    >
                      📺 16:9
                    </button>
                    <button
                      onClick={() => handleNavClick('overlay')}
                      className="py-1.5 rounded-xl bg-[#050505] border border-white/10 text-slate-400 hover:text-white text-[10px] font-bold"
                    >
                      ❖ OVERLAY
                    </button>
                  </div>
                </div>

                {/* Video Settings List */}
                <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Video Settings</span>
                  
                  <div className="space-y-1.5">
                    <div 
                      onClick={() => handleNavClick('resolution')}
                      className="p-2 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs cursor-pointer hover:border-[#C1121F]/40"
                    >
                      <span className="text-slate-400 font-medium">Resolution</span>
                      <span className="font-bold text-white flex items-center gap-1">
                        {selectedResolution} <ChevronRight size={12} className="text-slate-500" />
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">FPS</span>
                      <span className="font-bold text-white flex items-center gap-1">
                        60 FPS <ChevronRight size={12} className="text-slate-500" />
                      </span>
                    </div>

                    <div 
                      onClick={() => handleNavClick('bitrate')}
                      className="p-2 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between text-xs cursor-pointer hover:border-[#C1121F]/40"
                    >
                      <span className="text-slate-400 font-medium">Bitrate</span>
                      <span className="font-bold text-[#C1121F] flex items-center gap-1">
                        {selectedBitrate} <ChevronRight size={12} className="text-slate-500" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Big Hexagonal/Polygon Red START STREAMING Button */}
                <button
                  onClick={() => handleNavClick('overlay')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#C1121F] to-[#780000] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 border border-red-500/30 active:scale-95 transition-all mt-1"
                >
                  <Radio size={16} className="animate-pulse" />
                  <span>START STREAMING</span>
                </button>

                {/* MODAL OVERLAY: Resolution Selection */}
                {activeScreen === 'resolution' && (
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-40 rounded-2xl p-4 flex flex-col justify-end">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-xs font-black text-white">Select Resolution</span>
                        <button onClick={() => handleNavClick('home')} className="text-xs text-slate-400">✕</button>
                      </div>
                      <div className="space-y-1">
                        {['480p', '720p', '1080p', '1440p'].map((res) => (
                          <div
                            key={res}
                            onClick={() => {
                              setSelectedResolution(res);
                              handleNavClick('home');
                            }}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between cursor-pointer ${
                              selectedResolution === res
                                ? 'bg-[#C1121F]/20 border-[#C1121F] text-[#C1121F]'
                                : 'bg-[#050505] border-white/10 text-slate-300'
                            }`}
                          >
                            <span>{res} {res === '1440p' ? '(2K Ultra)' : res === '1080p' ? '(Full HD 60FPS)' : ''}</span>
                            {selectedResolution === res && <Check size={14} className="text-[#C1121F]" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL OVERLAY: Bitrate Selection */}
                {activeScreen === 'bitrate' && (
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-40 rounded-2xl p-4 flex flex-col justify-end">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-xs font-black text-white">Select Bitrate</span>
                        <button onClick={() => handleNavClick('home')} className="text-xs text-slate-400">✕</button>
                      </div>
                      <div className="space-y-1 max-h-56 overflow-y-auto">
                        {['2000 kbps', '4000 kbps', '6000 kbps', '8000 kbps', '10000 kbps', '12000 kbps', '16000 kbps'].map((b) => (
                          <div
                            key={b}
                            onClick={() => {
                              setSelectedBitrate(b);
                              handleNavClick('home');
                            }}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between cursor-pointer ${
                              selectedBitrate === b
                                ? 'bg-[#C1121F]/20 border-[#C1121F] text-[#C1121F]'
                                : 'bg-[#050505] border-white/10 text-slate-300'
                            }`}
                          >
                            <span>{b}</span>
                            {selectedBitrate === b && <Check size={14} className="text-[#C1121F]" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* 3. OVERLAY EDITOR SCREEN */}
            {(activeScreen === 'overlay' || activeScreen === 'overlay-settings') && (
              <div className="flex flex-col h-full gap-2 relative">
                {/* Header */}
                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleNavClick('home')} className="p-1 rounded bg-[#0A0A0A] text-slate-300">
                      <ArrowLeft size={14} />
                    </button>
                    <span className="text-xs font-bold text-white">OVERLAY</span>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-[#E6192A] text-white text-[10px] font-extrabold uppercase shadow">
                    SAVE
                  </button>
                </div>

                {/* Stream Canvas Grid Output Area */}
                <div className="relative aspect-video rounded-xl bg-slate-950 border-2 border-dashed border-[#E6192A] flex items-center justify-center p-2 overflow-hidden shadow-inner">
                  <div className="absolute top-1 left-2 text-[8px] font-extrabold text-[#E6192A] tracking-wider uppercase bg-black/60 px-1.5 py-0.5 rounded">
                    STREAM OUTPUT AREA
                  </div>

                  {/* Bounding box gameplay inside canvas */}
                  <div className="w-full h-24 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-lg border border-white/20 flex flex-col items-center justify-center relative">
                    <Tv size={18} className="text-[#E6192A] mb-1" />
                    <span className="text-[10px] font-bold text-white">LIVE GAMEPLAY</span>
                    <span className="text-[8px] text-slate-400">1920 × 1080 • 16:9</span>

                    {/* Corner sizing handles */}
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#E6192A] rounded-full border border-white" />
                  </div>

                  {/* Undo / Redo controls */}
                  <div className="absolute bottom-1 right-2 flex items-center gap-1 bg-black/80 p-1 rounded-lg border border-white/10">
                    <button className="p-1 text-slate-300"><RotateCcw size={10} /></button>
                    <button className="p-1 text-slate-300"><RotateCcw size={10} className="scale-x-[-1]" /></button>
                  </div>
                </div>

                {/* Transform Controls Toolbar */}
                <div className="grid grid-cols-5 gap-1 text-center">
                  <button className="p-1.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-[9px] font-bold text-slate-300">Fit</button>
                  <button className="p-1.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-[9px] font-bold text-slate-300">Center</button>
                  <button className="p-1.5 rounded-lg bg-[#E6192A]/20 border border-[#E6192A] text-[9px] font-bold text-[#E6192A]">16:9</button>
                  <button className="p-1.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-[9px] font-bold text-slate-300">9:16</button>
                  <button className="p-1.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-[9px] font-bold text-slate-300 flex items-center justify-center"><Lock size={10} /></button>
                </div>

                {/* Coordinates Grid */}
                <div className="grid grid-cols-4 gap-1 bg-[#0A0A0A] p-2 rounded-xl border border-white/10 text-center font-mono text-[9px] text-slate-300">
                  <div>X: <span className="text-white font-bold">0</span></div>
                  <div>Y: <span className="text-white font-bold">0</span></div>
                  <div>W: <span className="text-white font-bold">1920</span></div>
                  <div>H: <span className="text-white font-bold">1080</span></div>
                </div>

                {/* Bottom Sheet Tabs: ADD | LAYERS | SETTINGS */}
                <div className="mt-auto bg-[#0A0A0A] border border-white/10 rounded-2xl p-2.5 space-y-2">
                  <div className="flex items-center justify-around border-b border-white/10 pb-1.5 text-[10px] font-bold">
                    <button className="text-slate-400 flex items-center gap-1"><Plus size={12} /> ADD</button>
                    <button className="text-slate-400 flex items-center gap-1"><Layers size={12} /> LAYERS</button>
                    <button 
                      onClick={() => handleNavClick(activeScreen === 'overlay-settings' ? 'overlay' : 'overlay-settings')}
                      className={`flex items-center gap-1 ${activeScreen === 'overlay-settings' ? 'text-[#E6192A] border-b-2 border-[#E6192A]' : 'text-slate-400'}`}
                    >
                      <SlidersHorizontal size={12} /> SETTINGS
                    </button>
                  </div>

                  {/* Sliders in overlay-settings */}
                  {activeScreen === 'overlay-settings' ? (
                    <div className="space-y-2 pt-1 text-[10px]">
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>Gamma</span>
                          <span className="text-[#E6192A]">1.00 ↻</span>
                        </div>
                        <input type="range" readOnly value="50" className="w-full accent-[#E6192A] h-1 bg-slate-800 rounded-lg" />
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>Saturation</span>
                          <span className="text-[#E6192A]">1.00 ↻</span>
                        </div>
                        <input type="range" readOnly value="65" className="w-full accent-[#E6192A] h-1 bg-slate-800 rounded-lg" />
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>Sharpness</span>
                          <span className="text-[#E6192A]">0.00 ↻</span>
                        </div>
                        <input type="range" readOnly value="30" className="w-full accent-[#E6192A] h-1 bg-slate-800 rounded-lg" />
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>Video Opacity</span>
                          <span className="text-[#E6192A]">1.00 ↻</span>
                        </div>
                        <input type="range" readOnly value="100" className="w-full accent-[#E6192A] h-1 bg-slate-800 rounded-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-[10px] text-slate-400 text-center py-2">
                      Tap SETTINGS to adjust Gameplay brightness, saturation, and filters.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. GAMEPLAY ADJUSTMENT SCREEN */}
            {activeScreen === 'gameplay' && (
              <div className="flex flex-col h-full gap-2 relative">
                <div className="flex items-center justify-between pb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleNavClick('home')} className="p-1 rounded bg-[#0A0A0A] text-slate-300">
                      <ArrowLeft size={14} />
                    </button>
                    <span className="text-xs font-bold text-white">GAMEPLAY POSITIONING</span>
                  </div>
                  <button className="px-2.5 py-1 rounded-lg bg-[#E6192A] text-white text-[10px] font-extrabold uppercase">
                    DONE
                  </button>
                </div>

                {/* Portrait Stream Output Canvas with Floating Landscape Bounding Box */}
                <div className="relative flex-1 rounded-xl bg-slate-950 border-2 border-dashed border-[#E6192A] flex flex-col justify-end p-2 overflow-hidden shadow-inner">
                  <div className="absolute top-2 left-2 text-[8px] font-extrabold text-[#E6192A] tracking-wider uppercase bg-black/60 px-1.5 py-0.5 rounded">
                    STREAM OUTPUT AREA (9:16)
                  </div>

                  {/* Landscape Gameplay Bounding Box placed at bottom */}
                  <div className="w-full h-28 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-lg border-2 border-[#E6192A] flex flex-col items-center justify-center relative shadow-2xl">
                    <Tv size={20} className="text-[#E6192A] mb-1" />
                    <span className="text-[10px] font-black text-white">GAMEPLAY SCREEN</span>
                    <span className="text-[8px] text-[#E6192A] font-mono">X:16 Y:642 W:1374 H:561</span>

                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#E6192A] rounded-full border border-white" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#E6192A] rounded-full border border-white" />
                  </div>
                </div>

                {/* Coordinates & Alignment */}
                <div className="grid grid-cols-4 gap-1 bg-[#0A0A0A] p-2 rounded-xl border border-white/10 text-center font-mono text-[9px] text-slate-300">
                  <div>X: <span className="text-white font-bold">16</span></div>
                  <div>Y: <span className="text-white font-bold">642</span></div>
                  <div>W: <span className="text-white font-bold">1374</span></div>
                  <div>H: <span className="text-white font-bold">561</span></div>
                </div>
              </div>
            )}

            {/* 5. SETTINGS SCREEN */}
            {activeScreen === 'settings' && (
              <div className="flex flex-col gap-3 relative">
                {/* Header */}
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <button onClick={() => handleNavClick('home')} className="p-1 rounded bg-[#0A0A0A] text-slate-300">
                    <ArrowLeft size={14} />
                  </button>
                  <div>
                    <h3 className="text-sm font-black italic text-white">SETTINGS</h3>
                    <p className="text-[9px] text-[#C1121F] font-bold uppercase tracking-wider">PREFERENCES</p>
                  </div>
                </div>

                {/* OVERLAY SECTION */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block px-1">OVERLAY</span>
                  <div 
                    onClick={() => handleNavClick('overlay')}
                    className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#C1121F]/40"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">Overlay Settings</div>
                      <div className="text-[10px] text-slate-400">Customize on-screen widgets</div>
                    </div>
                    <ChevronRight size={14} className="text-slate-500" />
                  </div>
                </div>

                {/* PLATFORMS SECTION */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block px-1">PLATFORMS</span>
                  <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#C1121F]/40">
                    <div>
                      <div className="text-xs font-bold text-white">Connected Platforms</div>
                      <div className="text-[10px] text-slate-400">Manage your stream accounts</div>
                    </div>
                    <ChevronRight size={14} className="text-slate-500" />
                  </div>
                </div>

                {/* APPLICATION SECTION */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block px-1">APPLICATION</span>
                  
                  <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/5 cursor-pointer">
                      <span className="text-slate-300">About NeCast</span>
                      <ChevronRight size={12} className="text-slate-500" />
                    </div>
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/5 cursor-pointer">
                      <span className="text-slate-300">Privacy Policy</span>
                      <ChevronRight size={12} className="text-slate-500" />
                    </div>
                    <div className="flex items-center justify-between text-xs py-1 cursor-pointer">
                      <span className="text-slate-300">Feedback</span>
                      <ChevronRight size={12} className="text-slate-500" />
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Android Touch Navigation Bar */}
          <div className="w-full py-1.5 bg-black/80 flex items-center justify-center">
            <div className="w-24 h-1 bg-slate-700 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
