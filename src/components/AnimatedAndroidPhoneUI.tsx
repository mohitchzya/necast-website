import React, { useState, useEffect } from 'react';
import { NeCastEmblemSVG } from './Logo';
import { 
  Settings, 
  Tv, 
  Smartphone, 
  Layers, 
  Radio, 
  Play, 
  Square, 
  Check, 
  Wifi, 
  Battery, 
  ChevronRight,
  Gauge,
  Activity,
  Plus,
  Video,
  Flame,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  Menu,
  Circle
} from 'lucide-react';

interface AnimatedAndroidPhoneUIProps {
  onOpenPreviewModal?: () => void;
}

export const AnimatedAndroidPhoneUI: React.FC<AnimatedAndroidPhoneUIProps> = ({ onOpenPreviewModal }) => {
  // Interactive Android App State
  const [isLive, setIsLive] = useState(false);
  const [streamTitle, setStreamTitle] = useState('Apex Legends Mobile - Road to Predator');
  const [streamDesc, setStreamDesc] = useState('Live 1440p 60FPS mobile stream powered by NeCast Studio');
  const [selectedPlatform, setSelectedPlatform] = useState<'youtube' | 'twitch' | 'rtmp'>('youtube');
  const [orientation, setOrientation] = useState<'9:16' | '16:9' | 'overlay'>('16:9');
  
  // Interactive Video Settings State
  const [resolution, setResolution] = useState<'1440p' | '1080p' | '720p'>('1080p');
  const [fps, setFps] = useState<'60 FPS' | '30 FPS' | '120 FPS'>('60 FPS');
  const [bitrate, setBitrate] = useState<'16000 kbps' | '12000 kbps' | '8000 kbps' | '4000 kbps'>('8000 kbps');

  // Simulated live telemetry metrics
  const [liveMetrics, setLiveMetrics] = useState({
    viewers: 2140,
    currentKbps: 8120,
    currentFps: 60,
    durationSec: 0,
  });

  // Live timer & telemetry simulation
  useEffect(() => {
    let interval: any;
    if (isLive) {
      interval = setInterval(() => {
        const baseKbps = parseInt(bitrate) || 8000;
        setLiveMetrics((prev) => ({
          ...prev,
          currentKbps: baseKbps + Math.floor(Math.random() * 400) - 200,
          currentFps: 59 + (Math.random() > 0.8 ? 0 : 1),
          viewers: prev.viewers + Math.floor(Math.random() * 7) - 3,
          durationSec: prev.durationSec + 1,
        }));
      }, 1000);
    } else {
      setLiveMetrics((prev) => ({ ...prev, durationSec: 0 }));
    }
    return () => clearInterval(interval);
  }, [isLive, bitrate]);

  // Cycle handlers
  const cycleResolution = () => {
    if (resolution === '1440p') setResolution('1080p');
    else if (resolution === '1080p') setResolution('720p');
    else setResolution('1440p');
  };

  const cycleFps = () => {
    if (fps === '60 FPS') setFps('30 FPS');
    else if (fps === '30 FPS') setFps('120 FPS');
    else setFps('60 FPS');
  };

  const cycleBitrate = () => {
    if (bitrate === '8000 kbps') setBitrate('16000 kbps');
    else if (bitrate === '16000 kbps') setBitrate('12000 kbps');
    else if (bitrate === '12000 kbps') setBitrate('4000 kbps');
    else setBitrate('8000 kbps');
  };

  // Format streaming duration timer
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[380px] mx-auto select-none">
      
      {/* Phone Outer Metallic Shell with Red Ambient Backlight */}
      <div className="relative rounded-[42px] sm:rounded-[48px] bg-[#07080B] p-3 sm:p-3.5 border-[3px] border-[#222533] shadow-[0_25px_70px_-15px_rgba(229,9,20,0.5)] ring-1 ring-white/10">
        
        {/* Hardware Side Buttons */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-10 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[5px] top-38 w-[3px] h-14 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[5px] top-28 w-[3px] h-16 bg-slate-700 rounded-r-md" />

        {/* Inner Phone Display Container */}
        <div className="relative rounded-[32px] sm:rounded-[38px] bg-[#030406] overflow-hidden border border-white/10 text-white flex flex-col h-[600px] sm:h-[640px]">
          
          {/* Background Crimson Particle Mesh Graphic */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 20%, rgba(229, 9, 20, 0.4) 0%, transparent 70%), radial-gradient(circle at 10% 80%, rgba(120, 0, 0, 0.5) 0%, transparent 60%)`,
            }}
          />

          {/* Punch Hole Camera Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-50 w-3.5 h-3.5 rounded-full bg-black border border-slate-800 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d131f]" />
          </div>

          {/* Android Status Bar */}
          <div className="pt-2 px-4 pb-1 flex items-center justify-between text-[10px] font-mono text-slate-300 z-40 bg-black/60 backdrop-blur-md">
            <span>12:46</span>
            <div className="flex items-center gap-1.5 text-[9px]">
              <span className="text-slate-300 font-semibold">0.20 KB/s</span>
              <span className="text-slate-300 font-bold">4G</span>
              <span className="text-red-500 font-black">5G+</span>
              <Wifi size={10} className="text-slate-300" />
              <div className="flex items-center gap-0.5">
                <span className="text-slate-200 font-bold">52%</span>
                <Battery size={10} className="text-emerald-400 fill-emerald-400" />
              </div>
            </div>
          </div>

          {/* NeCast App Header */}
          <div className="px-4 py-3 flex items-center justify-between z-30 bg-gradient-to-b from-black/80 to-transparent">
            <div>
              <div className="flex items-center gap-1.5">
                <NeCastEmblemSVG size={22} className="filter drop-shadow-[0_2px_8px_rgba(229,9,20,0.6)]" />
                <span className="font-black italic text-lg sm:text-xl tracking-tighter text-white font-sans">
                  NE<span className="text-[#E50914]">CAST</span>
                </span>
              </div>
              <p className="text-[9px] font-mono font-bold text-slate-400 tracking-wider uppercase">GO LIVE</p>
              
              {/* Ready / Live Indicator */}
              <div className="flex items-center gap-1.5 mt-1">
                <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-red-500 animate-ping' : 'bg-red-600'}`} />
                <span className="text-[10px] font-mono font-black tracking-wider text-red-500 uppercase">
                  {isLive ? '• BROADCASTING LIVE' : '• READY TO STREAM'}
                </span>
              </div>
            </div>

            {/* Hexagonal Settings Button */}
            <button 
              onClick={onOpenPreviewModal}
              className="relative w-10 h-10 flex items-center justify-center text-white cursor-pointer group active:scale-95 transition-transform"
              title="Studio Settings"
            >
              <div className="absolute inset-0 bg-[#0c0d12] border border-[#E50914] rounded-xl rotate-45 group-hover:bg-red-950/60 transition-colors shadow-lg shadow-red-950/50" />
              <Settings size={18} className="relative z-10 text-white group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>

          {/* App Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3.5 scrollbar-none font-sans z-20">
            
            {/* Live Streaming Monitor Card (When Live) */}
            {isLive && (
              <div className="bg-gradient-to-br from-[#1c080a] via-[#0f0b14] to-[#080a10] border border-red-500/60 rounded-2xl p-3 space-y-2 relative overflow-hidden shadow-xl shadow-red-950/60 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Video size={14} className="text-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase text-red-400 tracking-wider">LIVE STREAM HUD</span>
                  </div>
                  <span className="text-xs font-mono font-black text-white bg-red-600 px-2.5 py-0.5 rounded-full shadow-md">
                    {formatTime(liveMetrics.durationSec)}
                  </span>
                </div>

                {/* Simulated Game Preview Screen */}
                <div className="relative h-28 rounded-xl bg-gradient-to-tr from-slate-950 via-red-950/70 to-slate-900 border border-white/20 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.35)_0%,transparent_70%)] animate-pulse" />
                  
                  <div className="text-center z-10 px-2">
                    <Sparkles className="mx-auto text-amber-400 animate-spin mb-1" size={16} />
                    <p className="text-xs font-bold text-white truncate max-w-[200px]">{streamTitle}</p>
                    <p className="text-[9px] font-mono text-emerald-400 font-bold">{resolution} @ {liveMetrics.currentFps} FPS • {liveMetrics.currentKbps} kbps</p>
                  </div>

                  {/* Equalizer Waveform */}
                  <div className="absolute bottom-2 right-2 flex items-end gap-0.5 h-3">
                    <div className="w-0.5 bg-emerald-400 rounded-full animate-[bounce_0.8s_infinite_100ms] h-1.5" />
                    <div className="w-0.5 bg-emerald-400 rounded-full animate-[bounce_0.8s_infinite_300ms] h-3" />
                    <div className="w-0.5 bg-amber-400 rounded-full animate-[bounce_0.8s_infinite_200ms] h-2" />
                    <div className="w-0.5 bg-red-500 rounded-full animate-[bounce_0.8s_infinite_400ms] h-2.5" />
                  </div>
                </div>

                {/* Telemetry Row */}
                <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                  <div className="bg-black/60 border border-white/10 rounded-lg p-1">
                    <div className="text-[7px] text-slate-400 uppercase">Viewers</div>
                    <div className="text-xs font-bold text-white flex items-center justify-center gap-0.5">
                      <Flame size={10} className="text-amber-400" />
                      <span>{liveMetrics.viewers}</span>
                    </div>
                  </div>
                  <div className="bg-black/60 border border-white/10 rounded-lg p-1">
                    <div className="text-[7px] text-slate-400 uppercase">FPS</div>
                    <div className="text-xs font-bold text-emerald-400">{liveMetrics.currentFps}</div>
                  </div>
                  <div className="bg-black/60 border border-white/10 rounded-lg p-1">
                    <div className="text-[7px] text-slate-400 uppercase">Bitrate</div>
                    <div className="text-xs font-bold text-amber-400">{liveMetrics.currentKbps}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Card 1: Stream Title */}
            <div className="bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-3 flex items-start gap-3 hover:border-white/20 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#1d0508] border border-red-600/60 flex items-center justify-center text-red-500 font-black shrink-0 text-sm">
                Tт
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[10px] text-slate-300 font-bold">
                  <span>Stream Title</span>
                  <span className="text-slate-400 font-mono text-[9px]">{streamTitle.length}/100</span>
                </div>
                <input
                  type="text"
                  value={streamTitle}
                  onChange={(e) => setStreamTitle(e.target.value)}
                  placeholder="Enter an engaging title"
                  className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-400 focus:outline-none pt-1 font-medium"
                />
              </div>
            </div>

            {/* Form Card 2: Description */}
            <div className="bg-[#0b0c12]/90 border border-white/10 rounded-2xl p-3 flex items-start gap-3 hover:border-white/20 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-[#1d0508] border border-red-600/60 flex items-center justify-center text-red-500 shrink-0">
                📄
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-[10px] text-slate-300 font-bold">
                  <span>Description</span>
                  <span className="text-slate-400 font-mono text-[9px]">{streamDesc.length}/200</span>
                </div>
                <input
                  type="text"
                  value={streamDesc}
                  onChange={(e) => setStreamDesc(e.target.value)}
                  placeholder="Tell your audience what's happening"
                  className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-400 focus:outline-none pt-1 font-medium"
                />
              </div>
            </div>

            {/* PLATFORM Section */}
            <div className="space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-white font-sans flex items-center gap-1.5">
                <span className="w-1 h-3 bg-[#E50914] rounded-full inline-block" />
                <span>PLATFORM</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Active YouTube Button */}
                <button
                  onClick={() => setSelectedPlatform('youtube')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                    selectedPlatform === 'youtube'
                      ? 'bg-[#180507] border-[#E50914] text-white shadow-md shadow-red-950/80'
                      : 'bg-[#0c0d13] border-white/10 text-slate-400'
                  }`}
                >
                  <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center text-white text-[8px] font-black">
                    ▶
                  </div>
                  <span>YouTube</span>
                  <Check size={13} className="text-red-500 font-bold" />
                </button>

                {/* Add Custom RTMP Button */}
                <button
                  onClick={() => setSelectedPlatform(selectedPlatform === 'rtmp' ? 'youtube' : 'rtmp')}
                  className={`text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                    selectedPlatform === 'rtmp' ? 'text-red-400' : 'text-red-500 hover:text-red-400'
                  }`}
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>
            </div>

            {/* ORIENTATION Section */}
            <div className="space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-white font-sans flex items-center gap-1.5">
                <span className="w-1 h-3 bg-[#E50914] rounded-full inline-block" />
                <span>ORIENTATION</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setOrientation('9:16')}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                    orientation === '9:16'
                      ? 'bg-[#180507] border-red-600 text-white shadow-lg shadow-red-950/60'
                      : 'bg-[#0c0d13] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone size={20} className={orientation === '9:16' ? 'text-red-500' : 'text-slate-400'} />
                  <span className="text-xs font-bold font-mono">9:16</span>
                </button>

                <button
                  onClick={() => setOrientation('16:9')}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                    orientation === '16:9'
                      ? 'bg-[#180507] border-red-600 text-white shadow-lg shadow-red-950/60'
                      : 'bg-[#0c0d13] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Tv size={20} className={orientation === '16:9' ? 'text-red-500' : 'text-slate-400'} />
                  <span className="text-xs font-bold font-mono">16:9</span>
                </button>

                <button
                  onClick={() => setOrientation('overlay')}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                    orientation === 'overlay'
                      ? 'bg-[#180507] border-red-600 text-white shadow-lg shadow-red-950/60'
                      : 'bg-[#0c0d13] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers size={20} className={orientation === 'overlay' ? 'text-red-500' : 'text-slate-400'} />
                  <span className="text-xs font-bold font-mono">OVERLAY</span>
                </button>
              </div>
            </div>

            {/* VIDEO SETTINGS Section */}
            <div className="space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-white font-sans flex items-center gap-1.5">
                <span className="w-1 h-3 bg-[#E50914] rounded-full inline-block" />
                <span>VIDEO SETTINGS</span>
              </div>

              <div className="space-y-2">
                {/* Resolution Row */}
                <button
                  onClick={cycleResolution}
                  className="w-full bg-[#0b0c12]/90 border border-white/10 hover:border-red-600/50 rounded-2xl p-3 flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Tv size={18} className="text-red-500" />
                    <span className="text-xs font-bold text-white">Resolution</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-red-500">
                    <span>{resolution}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                {/* FPS Row */}
                <button
                  onClick={cycleFps}
                  className="w-full bg-[#0b0c12]/90 border border-white/10 hover:border-red-600/50 rounded-2xl p-3 flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Gauge size={18} className="text-red-500" />
                    <span className="text-xs font-bold text-white">FPS</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-red-500">
                    <span>{fps}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                {/* Bitrate Row */}
                <button
                  onClick={cycleBitrate}
                  className="w-full bg-[#0b0c12]/90 border border-white/10 hover:border-red-600/50 rounded-2xl p-3 flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-red-500" />
                    <span className="text-xs font-bold text-white">Bitrate</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-red-500">
                    <span>{bitrate}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Angled Hexagonal Action Button: START STREAMING */}
          <div className="p-3 bg-gradient-to-t from-black via-black/90 to-transparent z-30">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 text-white transition-all cursor-pointer shadow-xl active:scale-95 ${
                isLive
                  ? 'bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border border-red-500/80 text-red-400 shadow-red-950'
                  : 'bg-gradient-to-r from-[#E50914] via-[#F5121F] to-[#99040D] hover:brightness-110 shadow-red-950/90'
              }`}
              style={{
                clipPath: 'polygon(6% 0%, 94% 0%, 100% 50%, 94% 100%, 6% 100%, 0% 50%)',
              }}
            >
              <Radio size={16} className={`shrink-0 ${isLive ? 'text-red-400 animate-pulse' : 'text-white'}`} />
              <span>{isLive ? 'STOP STREAMING' : 'START STREAMING'}</span>
            </button>
          </div>

          {/* Android Navigation Bar */}
          <div className="py-2 bg-black flex items-center justify-around text-slate-500 px-10">
            <ChevronLeft size={16} className="cursor-pointer hover:text-white" />
            <Circle size={12} className="cursor-pointer hover:text-white" />
            <Menu size={14} className="cursor-pointer hover:text-white" />
          </div>

        </div>
      </div>

    </div>
  );
};
