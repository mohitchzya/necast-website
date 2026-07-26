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
  Check
} from 'lucide-react';
import { Logo } from './Logo';

interface PhoneMockupProps {
  screenType?: 'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account';
  isFloating?: boolean;
  interactive?: boolean;
  orientation?: 'portrait' | 'landscape';
  className?: string;
  onScreenChange?: (screen: 'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account') => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenType = 'home',
  isFloating = true,
  interactive = true,
  orientation = 'portrait',
  className = '',
  onScreenChange,
}) => {
  const [activeScreen, setActiveScreen] = useState(screenType);
  const [isLiveActive, setIsLiveActive] = useState(screenType === 'live');
  const [viewers, setViewers] = useState(1482);
  const [bitrate, setBitrate] = useState(6200);
  const [isMuted, setIsMuted] = useState(false);
  const [isPortrait, setIsPortrait] = useState(orientation === 'portrait');

  // Handle prop screen changes if updated externally
  React.useEffect(() => {
    setActiveScreen(screenType);
    if (screenType === 'live') setIsLiveActive(true);
  }, [screenType]);

  const handleNavClick = (screen: 'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account') => {
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
      <div className="absolute -inset-4 bg-gradient-to-r from-[#C1121F]/30 via-[#3B82F6]/20 to-[#C1121F]/30 rounded-[50px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Outer Phone Body Frame */}
      <div
        className={`relative mx-auto bg-[#070B1E] border-[3px] border-slate-700/60 rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(193,18,31,0.2)] transition-all duration-500 overflow-hidden ${
          isPortrait ? 'w-[320px] sm:w-[350px] h-[640px] sm:h-[680px]' : 'w-[580px] h-[340px]'
        }`}
      >
        {/* Shiny Edge Bevel Highlight */}
        <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none z-30" />

        {/* Screen Inner Container */}
        <div className="relative w-full h-full bg-[#050816] rounded-[36px] overflow-hidden flex flex-col justify-between border border-slate-800/80">
          
          {/* Top Android Status Bar */}
          <div className="w-full pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-medium text-slate-400 z-20 bg-slate-950/60 backdrop-blur-md">
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
              <div className="h-full flex flex-col items-center justify-between py-12 text-center">
                <div className="w-full" />
                <div className="flex flex-col items-center gap-4">
                  <div className="relative animate-bounce">
                    <Logo size="xl" showText={false} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight mt-2">
                    Ne<span className="text-metallic-crimson">Cast</span>
                  </h3>
                  <p className="text-xs text-slate-400 tracking-wide uppercase font-semibold">
                    Stream Anywhere. Create Everywhere.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-red-500/30">
                    <Activity size={14} className="text-red-500 animate-spin" />
                    <span className="text-xs text-slate-300">Initializing Audio Engine...</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 font-mono">
                  v2.4.1 ARM64 • Android 14 Core
                </div>
              </div>
            )}

            {/* 2. HOME SCREEN */}
            {activeScreen === 'home' && (
              <div className="flex flex-col gap-3.5">
                {/* Account Connected Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/30 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-bold text-xs text-white">
                          YT
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">ApexGamer Live</span>
                        <CheckCircle2 size={12} className="text-blue-400" />
                      </div>
                      <span className="text-[10px] text-slate-400">YouTube Studio • 248K Subs</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleNavClick('account')}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px]"
                  >
                    Switch
                  </button>
                </div>

                {/* Big Start Stream Action Card */}
                <div className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-red-950/60 via-slate-900 to-slate-950 border border-red-600/40 glow-crimson">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-600/20 rounded-full blur-xl" />
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-red-400 font-bold text-xs uppercase tracking-wider">
                      <Radio size={14} className="animate-pulse" />
                      Ready to Broadcast
                    </div>
                    <span className="text-[10px] bg-red-900/40 text-red-300 px-2 py-0.5 rounded-full font-mono border border-red-500/30">
                      1080p 60FPS
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-3 line-clamp-2">
                    Target: YouTube Live • "Ultimate Mobile Apex Legends Ranked Grind #42"
                  </p>

                  <button
                    onClick={() => handleNavClick('live')}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs tracking-wide shadow-lg shadow-red-900/50 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Play size={14} fill="white" />
                    GO LIVE NOW
                  </button>
                </div>

                {/* Quick Stream Stats Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      Bitrate
                      <Zap size={10} className="text-amber-400" />
                    </div>
                    <div className="text-sm font-black text-white font-mono mt-0.5">6,200 <span className="text-[9px] text-slate-400">Kbps</span></div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                      Ultra Latency
                      <Activity size={10} className="text-emerald-400" />
                    </div>
                    <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">1.18 <span className="text-[9px] text-slate-400">sec</span></div>
                  </div>
                </div>

                {/* Quick Controls */}
                <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
                    Hardware Inputs
                  </span>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex-1 p-2 rounded-xl bg-slate-950 flex items-center gap-2 border border-slate-800">
                      <Mic size={14} className="text-red-400" />
                      <span className="text-[11px] text-slate-200">Internal + Mic</span>
                    </div>
                    <div className="flex-1 p-2 rounded-xl bg-slate-950 flex items-center gap-2 border border-slate-800">
                      <Camera size={14} className="text-blue-400" />
                      <span className="text-[11px] text-slate-200">Front Cam Overlay</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SETUP SCREEN */}
            {activeScreen === 'setup' && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sliders size={14} className="text-red-500" />
                    Stream Configuration
                  </h4>
                  <span className="text-[10px] text-blue-400 font-mono">Preset: Pro Gamer</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Stream Title</label>
                    <input
                      type="text"
                      readOnly
                      value="PUBG Mobile Global Tournament Final [NeCast 60FPS]"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-red-500/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Resolution</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-white font-medium">
                        <option>1080p (FHD 60FPS)</option>
                        <option>720p (HD 60FPS)</option>
                        <option>1440p (2K Ultra)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Target Platform</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-white font-medium">
                        <option>YouTube Live</option>
                        <option disabled>Twitch (Coming Soon)</option>
                        <option disabled>Custom RTMP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Video Bitrate</span>
                      <span className="text-red-400 font-mono font-bold">{bitrate} Kbps</span>
                    </div>
                    <input
                      type="range"
                      min="2500"
                      max="12000"
                      step="500"
                      value={bitrate}
                      onChange={(e) => setBitrate(Number(e.target.value))}
                      className="w-full accent-red-600 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Android Internal Audio Capture</span>
                      <div className="w-8 h-4 bg-red-600 rounded-full p-0.5 flex justify-end">
                        <div className="w-3 h-3 bg-white rounded-full shadow" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Screen Touches Indicator</span>
                      <div className="w-8 h-4 bg-slate-800 rounded-full p-0.5">
                        <div className="w-3 h-3 bg-slate-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('live')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-950"
                >
                  <Radio size={14} className="animate-pulse" />
                  Save & Launch Stream
                </button>
              </div>
            )}

            {/* 4. LIVE DASHBOARD SCREEN */}
            {activeScreen === 'live' && (
              <div className="h-full flex flex-col justify-between gap-2 relative">
                {/* Simulated Live Game Stream Viewport */}
                <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                  {/* Background game screenshot preview */}
                  <img
                    src="https://picsum.photos/seed/mobilegame/600/350"
                    alt="Game Preview"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

                  {/* LIVE Overlay Badges */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <span className="bg-red-600 text-white font-black text-[9px] px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider animate-pulse">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      LIVE
                    </span>
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                      <Eye size={10} className="text-red-400" />
                      {viewers.toLocaleString()}
                    </span>
                  </div>

                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-500/30">
                    60 FPS • 6.2 Mbps
                  </div>

                  {/* Facecam Widget Overlay */}
                  <div className="absolute bottom-2 left-2 w-10 h-10 rounded-lg overflow-hidden border-2 border-red-500 shadow-lg">
                    <img
                      src="https://picsum.photos/seed/streamer/150/150"
                      alt="Facecam"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Simulated Chat Feed */}
                <div className="flex-1 bg-slate-950/90 rounded-2xl p-2.5 border border-slate-800 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 text-white font-bold">
                      <MessageSquare size={12} className="text-blue-400" />
                      YouTube Live Chat
                    </span>
                    <span className="text-emerald-400 font-mono">Synced • 12ms</span>
                  </div>

                  <div className="space-y-1.5 my-1 font-sans text-[11px] overflow-y-auto max-h-28 pr-1">
                    <p className="text-slate-300">
                      <span className="font-bold text-red-400">GamerGuy99:</span> Insane clutch headshot! 🔥
                    </p>
                    <p className="text-slate-300">
                      <span className="font-bold text-blue-400">CyberNinja:</span> Is this streaming straight from Android??
                    </p>
                    <p className="text-slate-300">
                      <span className="font-bold text-amber-400">NeCastFan:</span> Smooth 60fps setup, no PC required!
                    </p>
                    <p className="text-slate-300">
                      <span className="font-bold text-emerald-400">ViperStream:</span> Subscribed! What device are you using?
                    </p>
                  </div>

                  {/* Interactive Quick Chat Input */}
                  <div className="flex items-center gap-1 pt-1 border-t border-slate-800">
                    <input
                      type="text"
                      readOnly
                      placeholder="Say something to stream chat..."
                      className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] text-slate-300"
                    />
                    <button className="p-1 bg-red-600 text-white rounded-lg">
                      <Flame size={12} />
                    </button>
                  </div>
                </div>

                {/* Live Controls Bar */}
                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`py-2 rounded-xl text-[10px] font-bold flex flex-col items-center justify-center gap-0.5 border ${
                      isMuted
                        ? 'bg-red-950/80 text-red-400 border-red-800'
                        : 'bg-slate-900 text-slate-200 border-slate-800'
                    }`}
                  >
                    <Mic size={12} />
                    {isMuted ? 'Muted' : 'Mic On'}
                  </button>
                  <button
                    onClick={() => setIsPortrait(!isPortrait)}
                    className="py-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-[10px] font-bold flex flex-col items-center justify-center gap-0.5"
                  >
                    <RotateCcw size={12} />
                    Rotate
                  </button>
                  <button 
                    onClick={() => handleNavClick('settings')}
                    className="py-2 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-[10px] font-bold flex flex-col items-center justify-center gap-0.5"
                  >
                    <Settings size={12} />
                    Settings
                  </button>
                  <button
                    onClick={() => handleNavClick('home')}
                    className="py-2 rounded-xl bg-red-600 text-white text-[10px] font-bold flex flex-col items-center justify-center gap-0.5 shadow-md shadow-red-950"
                  >
                    <Radio size={12} />
                    End
                  </button>
                </div>
              </div>
            )}

            {/* 5. SETTINGS SCREEN */}
            {activeScreen === 'settings' && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Settings size={14} className="text-blue-500" />
                    Engine Preferences
                  </h4>
                  <span className="text-[10px] text-emerald-400">Android 14 Ready</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Low Latency Mode</div>
                      <div className="text-[10px] text-slate-400">Reduces buffer to 1.1 seconds</div>
                    </div>
                    <div className="w-8 h-4 bg-emerald-500 rounded-full p-0.5 flex justify-end">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Hardware Encoder</div>
                      <div className="text-[10px] text-slate-400">Snapdragon Adreno / MediaTek VPU</div>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 font-bold bg-red-950 px-2 py-0.5 rounded">H.265 / HEVC</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Chat Floating Widget</div>
                      <div className="text-[10px] text-slate-400">Display chat over game screen</div>
                    </div>
                    <div className="w-8 h-4 bg-red-600 rounded-full p-0.5 flex justify-end">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-1">Encrypted Key Storage</div>
                    <div className="text-[10px] text-slate-400 font-mono bg-slate-950 p-1.5 rounded border border-slate-800 text-slate-500 truncate">
                      rtmp://a.rtmp.youtube.com/live2/••••-••••-••••
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('home')}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-bold"
                >
                  Return to Dashboard
                </button>
              </div>
            )}

            {/* 6. ACCOUNT SCREEN */}
            {activeScreen === 'account' && (
              <div className="flex flex-col gap-3 py-2">
                <div className="text-center space-y-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-red-600 to-amber-500 p-0.5">
                    <img
                      src="https://picsum.photos/seed/creatoravatar/200/200"
                      alt="Creator Avatar"
                      className="w-full h-full rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-sm font-black text-white">ApexGamer Official</h4>
                  <p className="text-[11px] text-slate-400">google.auth • connected</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Connected Account</span>
                    <span className="text-white font-mono font-semibold">creator@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Permissions Granted</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <ShieldCheck size={12} /> YouTube Live API
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Stream Key Status</span>
                    <span className="text-blue-400 font-bold">Auto-Fetched</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  Google OAuth 2.0 Security Verified. No third-party key leaks.
                </div>

                <button
                  onClick={() => handleNavClick('home')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold"
                >
                  Confirm Account & Continue
                </button>
              </div>
            )}

          </div>

          {/* Bottom Interactive Navigation Dock */}
          {interactive && (
            <div className="p-2 bg-slate-950/90 border-t border-slate-800/80 backdrop-blur-md flex items-center justify-around text-slate-400">
              <button
                onClick={() => handleNavClick('home')}
                className={`flex flex-col items-center gap-0.5 text-[9px] transition-colors ${
                  activeScreen === 'home' ? 'text-red-500 font-bold' : 'hover:text-slate-200'
                }`}
              >
                <Radio size={14} />
                Dashboard
              </button>
              <button
                onClick={() => handleNavClick('setup')}
                className={`flex flex-col items-center gap-0.5 text-[9px] transition-colors ${
                  activeScreen === 'setup' ? 'text-red-500 font-bold' : 'hover:text-slate-200'
                }`}
              >
                <Sliders size={14} />
                Setup
              </button>
              <button
                onClick={() => handleNavClick('live')}
                className={`flex flex-col items-center gap-0.5 text-[9px] transition-colors ${
                  activeScreen === 'live' ? 'text-red-500 font-bold animate-pulse' : 'hover:text-slate-200'
                }`}
              >
                <Video size={14} />
                Live Feed
              </button>
              <button
                onClick={() => handleNavClick('settings')}
                className={`flex flex-col items-center gap-0.5 text-[9px] transition-colors ${
                  activeScreen === 'settings' ? 'text-red-500 font-bold' : 'hover:text-slate-200'
                }`}
              >
                <Settings size={14} />
                Engine
              </button>
              <button
                onClick={() => handleNavClick('account')}
                className={`flex flex-col items-center gap-0.5 text-[9px] transition-colors ${
                  activeScreen === 'account' ? 'text-red-500 font-bold' : 'hover:text-slate-200'
                }`}
              >
                <UserCheck size={14} />
                OAuth
              </button>
            </div>
          )}

          {/* Android Home Bar Handle */}
          <div className="w-full pb-1 flex justify-center bg-slate-950">
            <div className="w-28 h-1 bg-slate-700/80 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
