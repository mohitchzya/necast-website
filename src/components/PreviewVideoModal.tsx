import React, { useState } from 'react';
import { X, Play, Pause, Radio, Eye, MessageSquare, Volume2, VolumeX, Maximize, Flame, Zap, ShieldCheck } from 'lucide-react';

interface PreviewVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreviewVideoModal: React.FC<PreviewVideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'stream' | 'chat' | 'telemetry'>('stream');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#070B1E] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-4 px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full" />
              SNEAK PEEK PREVIEW
            </span>
            <span className="bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded">
              Coming Soon
            </span>
            <h3 className="text-sm font-bold text-white hidden sm:block">
              NeCast 1440p 60FPS Mobile Stream Demo
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Left Main Video Canvas Simulation */}
          <div className="lg:col-span-8 bg-black relative flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
            
            {/* Live Stream Game Image Feed */}
            <img
              src="https://picsum.photos/seed/apexmobile/1280/720"
              alt="Live Gameplay"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />

            {/* Top HUD Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs px-3 py-1 rounded-lg flex items-center gap-1.5">
                  <Eye size={14} className="text-red-400" />
                  3,842 Viewers
                </span>
                <span className="bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-mono text-xs px-2.5 py-1 rounded-lg hidden sm:inline-block">
                  1.12s Latency
                </span>
              </div>

              <div className="bg-black/80 backdrop-blur-md border border-white/10 text-slate-200 text-xs px-3 py-1 rounded-lg font-mono">
                1440p 60FPS • 16,000 Kbps
              </div>
            </div>

            {/* Facecam Widget Overlay */}
            <div className="absolute bottom-16 left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-red-500 shadow-2xl">
              <img
                src="https://picsum.photos/seed/mobilecreator/200/200"
                alt="Streamer Cam"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-1 left-1 bg-black/80 text-[9px] font-bold text-white px-1 rounded">
                CAM
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-slate-900 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <span className="text-xs font-mono text-slate-300 hidden sm:inline-block">
                  Stream Health: <span className="text-emerald-400 font-bold">Excellent</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">Powered by NeCast Core</span>
              </div>
            </div>

          </div>

          {/* Right Panel: Live Chat Feed & Telemetry */}
          <div className="lg:col-span-4 bg-[#050816] border-l border-slate-800 flex flex-col h-full">
            
            {/* Tabs */}
            <div className="flex border-b border-slate-800 text-xs font-bold bg-slate-950">
              <button
                onClick={() => setActiveTab('stream')}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === 'stream' ? 'text-red-500 border-b-2 border-red-500' : 'text-slate-400'
                }`}
              >
                Chat Feed
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === 'telemetry' ? 'text-red-500 border-b-2 border-red-500' : 'text-slate-400'
                }`}
              >
                Telemetry
              </button>
            </div>

            {activeTab === 'stream' ? (
              <div className="flex-1 p-4 flex flex-col justify-between space-y-3 overflow-hidden">
                <div className="space-y-2 font-sans text-xs overflow-y-auto max-h-[300px] pr-1">
                  <p className="text-slate-300">
                    <span className="font-bold text-red-400">StreamQueen:</span> That 1440p 60fps quality is crisp! 🔥
                  </p>
                  <p className="text-slate-300">
                    <span className="font-bold text-blue-400">AndroidGamer:</span> No dropped frames at all on Snapdragon 8!
                  </p>
                  <p className="text-slate-300">
                    <span className="font-bold text-amber-400">ProGamer99:</span> Is internal game audio captured directly?
                  </p>
                  <p className="text-slate-300">
                    <span className="font-bold text-emerald-400">NeCastDev:</span> Yes, direct native Android audio bus!
                  </p>
                  <p className="text-slate-300">
                    <span className="font-bold text-purple-400">Viper:</span> Dropping a sub right now!
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    placeholder="Send a message..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                  <button className="p-2 bg-red-600 text-white rounded-xl">
                    <Flame size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 p-4 space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>Encoder</span>
                    <span className="text-white font-mono font-bold">H.265 / HEVC</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>Active Resolution</span>
                    <span className="text-white font-mono font-bold">1920x1080 @ 60fps</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>Bitrate Average</span>
                    <span className="text-emerald-400 font-mono font-bold">6,420 Kbps</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>Memory Overhead</span>
                    <span className="text-white font-mono font-bold">142 MB</span>
                  </div>
                  <div className="text-slate-400 flex justify-between">
                    <span>Thermal Throttling</span>
                    <span className="text-emerald-400 font-mono font-bold">0% (Cool)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-[11px]">
                  ✓ Low Latency Direct RTMP Connection Verified.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
