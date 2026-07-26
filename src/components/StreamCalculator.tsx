import React, { useState, useEffect } from 'react';
import {
  Sliders,
  Zap,
  Activity,
  Battery,
  Cpu,
  Radio,
  ShieldCheck,
  Sparkles,
  Settings,
  Type,
  FileText,
  Plus,
  Smartphone,
  Layers,
  Tv,
  Gauge,
  Volume2,
  Check,
  Play,
  Square,
  MessageSquare,
  Wifi,
  Flame,
  Send,
  RotateCcw,
  Maximize2
} from 'lucide-react';

export const StreamCalculator: React.FC = () => {
  // Device & Network Config State
  const [deviceTier, setDeviceTier] = useState<'flagship' | 'midrange' | 'budget'>('flagship');
  const [uploadMbps, setUploadMbps] = useState<number>(25);

  // App Setup Form State (Mirroring the screenshot)
  const [streamTitle, setStreamTitle] = useState<string>('Apex Legends Mobile - Road to Conqueror 🏆');
  const [description, setDescription] = useState<string>('Live 1440p 60FPS stream powered by NeCast Hardware VPU.');
  const [activePlatform, setActivePlatform] = useState<'youtube' | 'custom'>('youtube');
  const [orientation, setOrientation] = useState<'9:16' | '16:9' | 'overlay'>('16:9');
  
  // Video Settings
  const [resolution, setResolution] = useState<'720p' | '1080p' | '1440p'>('1440p');
  const [fps, setFps] = useState<60 | 30>(60);
  const [bitrate, setBitrate] = useState<number>(16000); // kbps

  // Modal State for Video Settings dropdowns inside Phone
  const [activeModal, setActiveModal] = useState<'resolution' | 'fps' | 'bitrate' | null>(null);

  // Streaming Live Simulation State
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [streamSeconds, setStreamSeconds] = useState<number>(0);
  const [vuLevels, setVuLevels] = useState<number[]>([45, 70, 85, 60, 95, 80, 40, 90]);
  const [chatMessages, setChatMessages] = useState<Array<{ user: string; text: string; color: string }>>([
    { user: 'ProGamer_99', text: 'Quality is smooth 1440p 60fps! 🔥', color: 'text-amber-400' },
    { user: 'VPU_Fan', text: 'Zero frame drop on Snapdragon VPU!', color: 'text-cyan-400' }
  ]);
  const [chatInput, setChatInput] = useState<string>('');

  // Calculate recommended bitrate based on upload speed and resolution
  const getCalculatedMaxSafeBitrate = () => {
    return Math.floor(uploadMbps * 1000 * 0.75);
  };

  const maxSafeBitrate = getCalculatedMaxSafeBitrate();
  const isBitrateOptimal = bitrate <= maxSafeBitrate;

  // Quality Score Calculation
  const calculateSetupScore = () => {
    let score = 100;
    if (bitrate > maxSafeBitrate) score -= 25;
    if (deviceTier === 'budget' && resolution === '1440p') score -= 20;
    if (deviceTier === 'budget' && fps === 60) score -= 15;
    if (uploadMbps < 10 && resolution !== '720p') score -= 15;
    return Math.max(30, Math.min(100, score));
  };

  const qualityScore = calculateSetupScore();

  // Metrics
  const latency = uploadMbps >= 20 ? '1.12s (Ultra Low)' : uploadMbps >= 10 ? '1.85s (Low)' : '2.95s (Standard)';
  const vpuLoad = deviceTier === 'flagship' ? '7% (Qualcomm VPU)' : deviceTier === 'midrange' ? '14% (MediaTek APU)' : '26% (Software Codec)';
  const batteryConsumption = deviceTier === 'flagship' ? '11% / hr' : deviceTier === 'midrange' ? '17% / hr' : '28% / hr';

  // Live Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (isStreaming) {
      interval = setInterval(() => {
        setStreamSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setStreamSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isStreaming]);

  // Audio VU Meter & Live Chat Simulation Effect
  useEffect(() => {
    let interval: any = null;
    if (isStreaming) {
      interval = setInterval(() => {
        setVuLevels(Array.from({ length: 8 }, () => Math.floor(Math.random() * 60) + 35));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isStreaming]);

  // Auto Chat Generator during live test
  useEffect(() => {
    const comments = [
      { user: 'StreamGod', text: 'Bitrate stability is 100% solid!', color: 'text-emerald-400' },
      { user: 'ApexPro', text: 'NeCast hardware encoder is awesome 🚀', color: 'text-red-400' },
      { user: 'MobileGamer', text: 'No lag while gaming! Subbed!', color: 'text-purple-400' }
    ];

    let timer: any = null;
    if (isStreaming) {
      timer = setInterval(() => {
        const randomMsg = comments[Math.floor(Math.random() * comments.length)];
        setChatMessages((prev) => [randomMsg, ...prev.slice(0, 3)]);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isStreaming]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [{ user: 'You (Host)', text: chatInput, color: 'text-white' }, ...prev.slice(0, 3)]);
    setChatInput('');
  };

  // Quick Preset Handlers
  const applyPreset = (preset: 'pro' | 'balanced' | 'cellular') => {
    if (preset === 'pro') {
      setDeviceTier('flagship');
      setUploadMbps(30);
      setResolution('1440p');
      setFps(60);
      setBitrate(16000);
    } else if (preset === 'balanced') {
      setDeviceTier('midrange');
      setUploadMbps(15);
      setResolution('1080p');
      setFps(60);
      setBitrate(8000);
    } else {
      setDeviceTier('budget');
      setUploadMbps(6);
      setResolution('720p');
      setFps(30);
      setBitrate(3500);
    }
  };

  return (
    <section id="calculator" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-wider mb-3 shadow-lg shadow-red-950/50">
            <Sliders size={14} className="animate-spin-slow" />
            <span>Interactive Android Setup & Streaming Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Test Your <span className="bg-gradient-to-r from-[#C1121F] via-red-500 to-amber-400 bg-clip-text text-transparent">Android Setup Quality</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Configure your phone hardware, select platform settings, and run an interactive live broadcast simulation matching the exact NeCast Android app interface.
          </p>
        </div>

        {/* Main Grid: Control Cockpit on Left, Authentic NeCast Phone App on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Phone Hardware & Quality Diagnostic Controls */}
          <div className="lg:col-span-5 bg-[#0A0C10] border border-white/10 rounded-3xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 blur-3xl pointer-events-none" />

            {/* Quality Score Indicator */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                    Calculated Setup Quality
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-white font-mono">{qualityScore}</span>
                    <span className="text-xs text-slate-400 font-bold">/ 100</span>
                  </div>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-black uppercase tracking-wider ${
                  qualityScore >= 85
                    ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400'
                    : qualityScore >= 65
                    ? 'bg-amber-950/80 border-amber-500/50 text-amber-400'
                    : 'bg-red-950/80 border-red-500/50 text-red-400'
                }`}>
                  {qualityScore >= 85 ? '🌟 Ultra 2K Quality' : qualityScore >= 65 ? '⚡ 1080p Smooth' : '⚠️ Adjust Settings'}
                </div>
              </div>

              {/* Quality Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full transition-all duration-500 ${
                    qualityScore >= 85 ? 'bg-emerald-500' : qualityScore >= 65 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${qualityScore}%` }}
                />
              </div>

              {!isBitrateOptimal && (
                <p className="text-[11px] text-amber-400 mt-2 font-medium flex items-center gap-1">
                  ⚠️ Bitrate ({bitrate} kbps) exceeds recommended upload speed limit ({maxSafeBitrate} kbps).
                </p>
              )}
            </div>

            {/* Quick Setup Presets */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wider">
                ⚡ Quick Hardware Presets:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => applyPreset('pro')}
                  className="py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-bold text-slate-200 transition-all cursor-pointer text-center"
                >
                  🏆 1440p Esports
                </button>
                <button
                  onClick={() => applyPreset('balanced')}
                  className="py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-bold text-slate-200 transition-all cursor-pointer text-center"
                >
                  🎮 1080p Balanced
                </button>
                <button
                  onClick={() => applyPreset('cellular')}
                  className="py-2 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-bold text-slate-200 transition-all cursor-pointer text-center"
                >
                  📱 720p Mobile
                </button>
              </div>
            </div>

            {/* Processor Tier */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2">
                Android Device Processor Class:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDeviceTier('flagship')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    deviceTier === 'flagship'
                      ? 'bg-red-950/90 border-red-500 text-white shadow-lg shadow-red-950/50'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap size={16} className="text-amber-400" />
                  <span>Flagship</span>
                  <span className="text-[9px] text-slate-400 font-normal">Snapdragon 8 Gen 2/3</span>
                </button>

                <button
                  onClick={() => setDeviceTier('midrange')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    deviceTier === 'midrange'
                      ? 'bg-red-950/90 border-red-500 text-white shadow-lg shadow-red-950/50'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu size={16} className="text-cyan-400" />
                  <span>Mid-Range</span>
                  <span className="text-[9px] text-slate-400 font-normal">Snapdragon 7 / Dimensity</span>
                </button>

                <button
                  onClick={() => setDeviceTier('budget')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    deviceTier === 'budget'
                      ? 'bg-red-950/90 border-red-500 text-white shadow-lg shadow-red-950/50'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Battery size={16} className="text-emerald-400" />
                  <span>Standard</span>
                  <span className="text-[9px] text-slate-400 font-normal">Helio / Unisoc</span>
                </button>
              </div>
            </div>

            {/* Upload Speed Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Internet Upload Connection Speed:</span>
                <span className="text-red-400 font-mono text-sm font-black">{uploadMbps} Mbps</span>
              </div>
              <input
                type="range"
                min="3"
                max="100"
                value={uploadMbps}
                onChange={(e) => setUploadMbps(Number(e.target.value))}
                className="w-full accent-[#C1121F] h-2 bg-slate-900 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>3 Mbps (4G)</span>
                <span>25 Mbps (Fiber Wi-Fi)</span>
                <span>100 Mbps (5G)</span>
              </div>
            </div>

            {/* Diagnostic Metrics List */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Activity size={14} className="text-emerald-400" /> Estimated Latency
                </span>
                <span className="font-bold text-white font-mono">{latency}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Cpu size={14} className="text-cyan-400" /> VPU Hardware Load
                </span>
                <span className="font-bold text-slate-200 font-mono">{vpuLoad}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Battery size={14} className="text-amber-400" /> Battery Consumption
                </span>
                <span className="font-bold text-slate-200 font-mono">{batteryConsumption}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: AUTHENTIC NECAST ANDROID APP UI (Based directly on user screenshot!) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Phone Screen Outer Chassis */}
            <div className="relative w-full max-w-[380px] bg-[#000000] border-[6px] border-[#1C1F2B] rounded-[48px] p-2.5 shadow-[0_30px_90px_-15px_rgba(193,18,31,0.35),0_0_60px_rgba(0,0,0,0.95)] overflow-hidden">
              
              {/* Outer Phone Bevel Glow Line */}
              <div className="absolute inset-0 rounded-[44px] border border-red-500/20 pointer-events-none z-40" />

              {/* PHONE SCREEN INNER CONTAINER */}
              <div className="w-full min-h-[690px] bg-[#050608] rounded-[38px] overflow-hidden flex flex-col text-white font-sans relative border border-white/10 select-none">
                
                {/* BACKGROUND RED NEBULA TEXTURE (MATCHING SCREENSHOT) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-950/40 via-[#08090E] to-black z-0 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(193,18,31,0.08)_50%,transparent_100%)] pointer-events-none z-0" />

                {/* 1. Android Phone System Status Bar (Exact screenshot replication) */}
                <div className="w-full pt-2.5 px-6 pb-1.5 flex items-center justify-between text-[11px] font-bold text-slate-300 relative z-30 shrink-0">
                  <span>12:46</span>
                  
                  {/* Punchhole Camera Dot */}
                  <div className="w-3.5 h-3.5 bg-black rounded-full border border-slate-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="font-mono text-[9px] text-slate-400">0.20 KB/s</span>
                    <Wifi size={11} className="text-slate-300" />
                    <span className="text-[#C1121F] font-black">5G+</span>
                    <span className="font-mono font-bold text-slate-200">52%</span>
                  </div>
                </div>

                {/* SCREEN MODE A: STREAM SETUP SCREEN (EXACT COPY OF USER SCREENSHOT) */}
                {!isStreaming ? (
                  <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4 relative z-20 scrollbar-none">
                    
                    {/* Header Bar */}
                    <div className="flex items-start justify-between pt-1">
                      <div>
                        <h1 className="text-2xl font-black italic tracking-wider text-white flex items-center gap-0.5 leading-none">
                          <span className="text-white">NE</span>
                          <span className="text-[#C1121F]">CAST</span>
                        </h1>
                        <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase block mt-0.5">
                          GO LIVE
                        </span>
                        
                        {/* Status Pulse */}
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="w-2 h-2 rounded-full bg-[#C1121F] animate-ping" />
                          <span className="text-[10px] font-bold text-[#C1121F] tracking-wider uppercase">
                            • READY TO STREAM
                          </span>
                        </div>
                      </div>

                      {/* Hexagonal Settings Gear Button */}
                      <button className="w-10 h-10 rounded-2xl bg-[#0F1118] border border-red-500/40 flex items-center justify-center text-slate-200 hover:text-white shadow-md cursor-pointer transition-transform active:scale-95">
                        <Settings size={20} className="text-slate-200" />
                      </button>
                    </div>

                    {/* Stream Title Card (Red Tt icon + title input) */}
                    <div className="bg-[#0D0F16]/90 border border-white/10 rounded-2xl p-3.5 space-y-1 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-red-950/80 border border-red-500/50 flex items-center justify-center text-[#C1121F] font-black text-sm">
                            <Type size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold text-slate-300 block">Stream Title</span>
                            <input
                              type="text"
                              value={streamTitle}
                              onChange={(e) => setStreamTitle(e.target.value.slice(0, 100))}
                              placeholder="Enter an engaging title"
                              className="bg-transparent text-xs text-white placeholder-slate-500 outline-none w-full font-medium"
                            />
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-500 font-mono">{streamTitle.length}/100</span>
                      </div>
                    </div>

                    {/* Description Card (Red File icon + description input) */}
                    <div className="bg-[#0D0F16]/90 border border-white/10 rounded-2xl p-3.5 space-y-1 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-xl bg-red-950/80 border border-red-500/50 flex items-center justify-center text-[#C1121F] shrink-0">
                            <FileText size={16} />
                          </div>
                          <div className="w-full pr-2">
                            <span className="text-[11px] font-bold text-slate-300 block">Description</span>
                            <input
                              type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value.slice(0, 200))}
                              placeholder="Tell your audience what's happening"
                              className="bg-transparent text-xs text-white placeholder-slate-500 outline-none w-full font-medium truncate"
                            />
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-500 font-mono shrink-0">{description.length}/200</span>
                      </div>
                    </div>

                    {/* PLATFORM Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-3 bg-[#C1121F] rounded-full" />
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">
                          PLATFORM
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* YouTube Pill */}
                        <button
                          onClick={() => setActivePlatform('youtube')}
                          className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                            activePlatform === 'youtube'
                              ? 'bg-red-950/80 border-[#C1121F] text-white shadow-md shadow-red-950/50'
                              : 'bg-[#0D0F16] border-white/10 text-slate-400'
                          }`}
                        >
                          <Tv size={15} className="text-[#C1121F]" />
                          <span>YouTube</span>
                          <Check size={13} className="text-[#C1121F]" />
                        </button>

                        {/* + Add Button */}
                        <button
                          onClick={() => setActivePlatform('custom')}
                          className="flex items-center gap-1 text-xs font-bold text-[#C1121F] hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Plus size={14} />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>

                    {/* ORIENTATION Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-3 bg-[#C1121F] rounded-full" />
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">
                          ORIENTATION
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5">
                        {/* 9:16 Vertical */}
                        <button
                          onClick={() => setOrientation('9:16')}
                          className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            orientation === '9:16'
                              ? 'bg-[#12141F] border-[#C1121F] text-white shadow-md'
                              : 'bg-[#0D0F16] border-white/10 text-slate-400'
                          }`}
                        >
                          <Smartphone size={18} className={orientation === '9:16' ? 'text-[#C1121F]' : ''} />
                          <span className="text-[10px] font-bold">9:16</span>
                        </button>

                        {/* 16:9 Horizontal */}
                        <button
                          onClick={() => setOrientation('16:9')}
                          className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            orientation === '16:9'
                              ? 'bg-[#12141F] border-[#C1121F] text-white shadow-md'
                              : 'bg-[#0D0F16] border-white/10 text-slate-400'
                          }`}
                        >
                          <div className="w-5 h-3.5 border-2 border-current rounded-xs" />
                          <span className="text-[10px] font-bold">16:9</span>
                        </button>

                        {/* OVERLAY */}
                        <button
                          onClick={() => setOrientation('overlay')}
                          className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            orientation === 'overlay'
                              ? 'bg-[#12141F] border-[#C1121F] text-white shadow-md'
                              : 'bg-[#0D0F16] border-white/10 text-slate-400'
                          }`}
                        >
                          <Layers size={18} className={orientation === 'overlay' ? 'text-[#C1121F]' : ''} />
                          <span className="text-[10px] font-bold uppercase">OVERLAY</span>
                        </button>
                      </div>
                    </div>

                    {/* VIDEO SETTINGS Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-3 bg-[#C1121F] rounded-full" />
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">
                          VIDEO SETTINGS
                        </span>
                      </div>

                      <div className="space-y-2">
                        {/* Resolution Setting Card */}
                        <div
                          onClick={() => setActiveModal(activeModal === 'resolution' ? null : 'resolution')}
                          className="bg-[#0D0F16]/90 border border-white/10 rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:border-red-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-red-950/60 flex items-center justify-center text-[#C1121F]">
                              <Tv size={15} />
                            </div>
                            <span className="text-xs font-bold text-slate-200">Resolution</span>
                          </div>
                          <span className="text-xs font-black text-[#C1121F] flex items-center gap-1">
                            {resolution} &gt;
                          </span>
                        </div>

                        {/* Resolution Modal Selector */}
                        {activeModal === 'resolution' && (
                          <div className="p-2.5 bg-black/80 rounded-xl border border-red-500/40 grid grid-cols-3 gap-1.5 animate-fadeIn">
                            {(['720p', '1080p', '1440p'] as const).map((res) => (
                              <button
                                key={res}
                                onClick={() => {
                                  setResolution(res);
                                  setActiveModal(null);
                                }}
                                className={`py-1.5 rounded-lg text-xs font-bold border ${
                                  resolution === res ? 'bg-[#C1121F] text-white border-red-400' : 'bg-slate-900 text-slate-400 border-white/10'
                                }`}
                              >
                                {res}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* FPS Setting Card */}
                        <div
                          onClick={() => setActiveModal(activeModal === 'fps' ? null : 'fps')}
                          className="bg-[#0D0F16]/90 border border-white/10 rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:border-red-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-red-950/60 flex items-center justify-center text-[#C1121F]">
                              <Gauge size={15} />
                            </div>
                            <span className="text-xs font-bold text-slate-200">FPS</span>
                          </div>
                          <span className="text-xs font-black text-[#C1121F] flex items-center gap-1">
                            {fps} FPS &gt;
                          </span>
                        </div>

                        {/* FPS Modal Selector */}
                        {activeModal === 'fps' && (
                          <div className="p-2.5 bg-black/80 rounded-xl border border-red-500/40 grid grid-cols-2 gap-1.5 animate-fadeIn">
                            {([60, 30] as const).map((val) => (
                              <button
                                key={val}
                                onClick={() => {
                                  setFps(val);
                                  setActiveModal(null);
                                }}
                                className={`py-1.5 rounded-lg text-xs font-bold border ${
                                  fps === val ? 'bg-[#C1121F] text-white border-red-400' : 'bg-slate-900 text-slate-400 border-white/10'
                                }`}
                              >
                                {val} FPS
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Bitrate Setting Card */}
                        <div
                          onClick={() => setActiveModal(activeModal === 'bitrate' ? null : 'bitrate')}
                          className="bg-[#0D0F16]/90 border border-white/10 rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:border-red-500/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-red-950/60 flex items-center justify-center text-[#C1121F]">
                              <Volume2 size={15} />
                            </div>
                            <span className="text-xs font-bold text-slate-200">Bitrate</span>
                          </div>
                          <span className="text-xs font-black text-[#C1121F] flex items-center gap-1">
                            {bitrate} kbps &gt;
                          </span>
                        </div>

                        {/* Bitrate Modal Selector */}
                        {activeModal === 'bitrate' && (
                          <div className="p-3 bg-black/80 rounded-xl border border-red-500/40 space-y-2 animate-fadeIn">
                            <div className="flex justify-between text-xs text-slate-300">
                              <span>Adjust Bitrate:</span>
                              <span className="text-[#C1121F] font-mono font-bold">{bitrate} kbps</span>
                            </div>
                            <input
                              type="range"
                              min={2000}
                              max={16000}
                              step={1000}
                              value={bitrate}
                              onChange={(e) => setBitrate(Number(e.target.value))}
                              className="w-full accent-[#C1121F] bg-slate-800 rounded-lg h-2"
                            />
                            <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                              <span>3,500k (720p)</span>
                              <span>8,000k (1080p)</span>
                              <span>16,000k (1440p)</span>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                    {/* HEXAGONAL RED "START STREAMING" BUTTON (EXACT COPY FROM SCREENSHOT) */}
                    <div className="pt-2 pb-2">
                      <button
                        onClick={() => setIsStreaming(true)}
                        className="w-full py-3.5 bg-gradient-to-r from-[#C1121F] via-[#D90429] to-[#780000] text-white font-black text-sm uppercase tracking-widest rounded-2xl border border-red-500/50 shadow-[0_10px_30px_rgba(193,18,31,0.6)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Radio size={18} className="animate-pulse" />
                        <span>START STREAMING</span>
                      </button>
                    </div>

                  </div>
                ) : (
                  
                  /* SCREEN MODE B: ANIMATED LIVE STREAMING TEST FEED */
                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 relative z-20 animate-fadeIn">
                    
                    {/* Live Stream Canvas Container */}
                    <div className="bg-black border border-red-500/60 rounded-2xl h-44 relative overflow-hidden flex flex-col justify-between p-3 shadow-2xl">
                      
                      {/* Animated Gameplay Simulation Canvas */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-black pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px]" />
                        
                        {/* Animated Game Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                          <Flame size={28} className="text-[#C1121F] animate-bounce" />
                          <span className="text-[10px] font-black text-white tracking-widest uppercase mt-1">
                            APEX LEGENDS 2K
                          </span>
                          <span className="text-[8px] text-emerald-400 font-mono font-bold">
                            HARDWARE VPU ACTIVE
                          </span>
                        </div>
                      </div>

                      {/* Top Overlay Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 bg-red-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-red-500/60">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                          <span className="text-[10px] font-black text-white">LIVE • {formatTimer(streamSeconds)}</span>
                        </div>

                        <div className="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[9px] font-mono text-slate-200">
                          <span className="text-[#C1121F] font-bold">{resolution}</span> @ {fps}FPS
                        </div>
                      </div>

                      {/* Bottom Canvas Telemetry */}
                      <div className="relative z-10 flex items-end justify-between">
                        <div className="text-[9px] font-mono text-slate-300 bg-black/70 px-2 py-0.5 rounded-md border border-white/10">
                          Bitrate: <strong className="text-emerald-400">{bitrate.toLocaleString()} kbps</strong>
                        </div>
                        <div className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/40 font-bold">
                          Dropped: 0 frames
                        </div>
                      </div>
                    </div>

                    {/* Audio VU Waveform Bar */}
                    <div className="bg-[#0D0F16] border border-white/10 rounded-2xl p-2.5 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-slate-300 flex items-center gap-1">
                          <Volume2 size={12} className="text-[#C1121F]" />
                          Hardware Audio Passthrough VU
                        </span>
                        <span className="text-emerald-400 font-mono text-[9px] font-bold">48kHz Lossless</span>
                      </div>

                      <div className="flex items-center gap-1 h-5 px-1 bg-black/60 rounded-lg border border-white/5">
                        {vuLevels.map((val, i) => (
                          <div key={i} className="flex-1 bg-slate-800 h-full rounded-xs overflow-hidden flex items-end">
                            <div
                              className="w-full bg-gradient-to-t from-emerald-500 via-amber-400 to-red-500 transition-all duration-150"
                              style={{ height: `${val}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated Chat Feed */}
                    <div className="bg-[#0D0F16] border border-white/10 rounded-2xl p-2.5 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-white flex items-center gap-1">
                          <MessageSquare size={12} className="text-[#C1121F]" />
                          YouTube Live Stream Chat
                        </span>
                        <span className="text-[8px] text-slate-400 font-mono">Synced</span>
                      </div>

                      <div className="space-y-1 max-h-20 overflow-y-auto text-[10px]">
                        {chatMessages.map((msg, i) => (
                          <div key={i} className="bg-black/50 p-1.5 rounded-lg border border-white/5 flex items-baseline gap-1 animate-fadeIn">
                            <span className={`font-bold ${msg.color}`}>{msg.user}:</span>
                            <span className="text-slate-200">{msg.text}</span>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleSendChat} className="flex gap-1 pt-1">
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="Type chat comment..."
                          className="flex-1 bg-black/60 border border-white/10 rounded-lg px-2 py-0.5 text-[10px] text-white outline-none focus:border-[#C1121F]"
                        />
                        <button type="submit" className="px-2 py-0.5 bg-[#C1121F] text-white rounded-lg text-[10px]">
                          <Send size={10} />
                        </button>
                      </form>
                    </div>

                    {/* Stop Stream Test Button */}
                    <button
                      onClick={() => setIsStreaming(false)}
                      className="w-full py-2.5 rounded-xl bg-red-950/80 border border-red-500/60 text-red-400 text-xs font-bold uppercase tracking-wider hover:bg-red-900 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Square size={14} className="fill-red-400" />
                      <span>End Live Quality Test</span>
                    </button>

                  </div>
                )}

                {/* Android System Navigation Bar (Bottom < O ≡ ) */}
                <div className="w-full py-2.5 bg-[#08090C] border-t border-white/5 flex items-center justify-around text-slate-500 relative z-30 shrink-0">
                  <span className="text-sm font-bold">&lt;</span>
                  <span className="w-3.5 h-3.5 border-2 border-slate-500 rounded-full" />
                  <span className="text-sm font-bold">≡</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
