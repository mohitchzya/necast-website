import React, { useState } from 'react';
import { Sliders, Zap, Activity, Battery, Cpu, Radio, ShieldCheck, Sparkles } from 'lucide-react';

export const StreamCalculator: React.FC = () => {
  const [deviceTier, setDeviceTier] = useState<'flagship' | 'midrange' | 'budget'>('flagship');
  const [uploadMbps, setUploadMbps] = useState<number>(20);
  const [targetResolution, setTargetResolution] = useState<'1080p' | '720p' | '1440p'>('1080p');
  const [fps, setFps] = useState<60 | 30>(60);

  // Calculate recommended settings
  const getCalculatedBitrate = () => {
    let base = targetResolution === '1440p' ? 9000 : targetResolution === '1080p' ? 6000 : 3500;
    if (fps === 30) base *= 0.7;

    // Constrain by internet upload speed (should not exceed 70% of available upload)
    const maxSafeBitrate = Math.floor(uploadMbps * 1000 * 0.75);
    return Math.min(base, maxSafeBitrate);
  };

  const calculatedBitrate = getCalculatedBitrate();
  const latency = uploadMbps > 15 ? '1.12s (Ultra Low)' : uploadMbps > 8 ? '1.85s (Low)' : '2.80s (Standard)';
  const cpuLoad = deviceTier === 'flagship' ? '8% (Snapdragon Adreno VPU)' : deviceTier === 'midrange' ? '15% (Dimensity MediaTek)' : '24% (Software Encoder)';
  const batteryDrain = deviceTier === 'flagship' ? '12% / hour' : deviceTier === 'midrange' ? '18% / hour' : '26% / hour';

  return (
    <section id="calculator" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Glass Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[11px] font-bold text-red-400 uppercase tracking-wider mb-2">
                  <Sliders size={12} />
                  Interactive Stream Estimator
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Test Your Android Setup Quality
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Select your phone specs and internet connection to see recommended NeCast bitrate settings.
                </p>
              </div>

              {/* Control 1: Device Tier */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-2">
                  Android Phone Processor Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDeviceTier('flagship')}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      deviceTier === 'flagship'
                        ? 'bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-950'
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
                        ? 'bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-950'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Cpu size={16} className="text-blue-400" />
                    <span>Mid-Range</span>
                    <span className="text-[9px] text-slate-400 font-normal">Snapdragon 7 / Dimensity</span>
                  </button>

                  <button
                    onClick={() => setDeviceTier('budget')}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      deviceTier === 'budget'
                        ? 'bg-red-950/80 border-red-500 text-white shadow-lg shadow-red-950'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Battery size={16} className="text-emerald-400" />
                    <span>Standard</span>
                    <span className="text-[9px] text-slate-400 font-normal">Helio / Unisoc Core</span>
                  </button>
                </div>
              </div>

              {/* Control 2: Upload Speed Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>Upload Speed (Mbps)</span>
                  <span className="text-red-400 font-mono text-sm">{uploadMbps} Mbps</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="100"
                  value={uploadMbps}
                  onChange={(e) => setUploadMbps(Number(e.target.value))}
                  className="w-full accent-red-600 h-2 bg-slate-950 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>3 Mbps (Cellular)</span>
                  <span>25 Mbps (Fiber)</span>
                  <span>100 Mbps (5G Ultra)</span>
                </div>
              </div>

              {/* Control 3: Resolution & FPS */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">
                    Target Resolution
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(['720p', '1080p', '1440p'] as const).map((res) => (
                      <button
                        key={res}
                        onClick={() => setTargetResolution(res)}
                        className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                          targetResolution === res
                            ? 'bg-red-600 text-white border-red-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {res}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">
                    Frame Rate
                  </label>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => setFps(60)}
                      className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                        fps === 60
                          ? 'bg-red-600 text-white border-red-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      60 FPS
                    </button>
                    <button
                      onClick={() => setFps(30)}
                      className={`py-2 rounded-xl text-xs font-bold border cursor-pointer ${
                        fps === 30
                          ? 'bg-red-600 text-white border-red-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      30 FPS
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Calculated Results Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                  Recommended Output
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={14} /> Stable Broadcast
                </span>
              </div>

              {/* Big Bitrate Metric */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/50 to-slate-900 border border-red-500/30 text-center">
                <div className="text-[10px] text-red-400 uppercase font-bold tracking-widest">
                  Recommended Stream Bitrate
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono my-1">
                  {calculatedBitrate.toLocaleString()}{' '}
                  <span className="text-sm font-normal text-slate-400">Kbps</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  Preset: {targetResolution} @ {fps}FPS (HEVC Encoded)
                </div>
              </div>

              {/* Stats Checklist */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Activity size={14} className="text-emerald-400" /> Latency Delay
                  </span>
                  <span className="font-bold text-white font-mono">{latency}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cpu size={14} className="text-blue-400" /> Hardware Encoder Load
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{cpuLoad}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Battery size={14} className="text-amber-400" /> Battery Consumption
                  </span>
                  <span className="font-bold text-slate-200 font-mono">{batteryDrain}</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 text-center pt-1 font-mono">
                NeCast automatically applies these settings upon 1-tap launch.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
