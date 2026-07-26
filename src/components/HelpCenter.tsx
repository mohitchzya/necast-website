import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  ChevronDown,
  Download,
  Key,
  Youtube,
  Radio,
  Video,
  Layers,
  Move,
  Monitor,
  Zap,
  Wifi,
  ShieldAlert,
  Sliders,
  HelpCircle,
  Mail,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Cpu,
} from 'lucide-react';

interface HelpCenterProps {
  onOpenSupportModal?: (category?: string) => void;
}

interface HelpArticle {
  id: string;
  category: 'getting-started' | 'features' | 'troubleshooting' | 'optimization';
  title: string;
  summary: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const HelpCenter: React.FC<HelpCenterProps> = ({ onOpenSupportModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>('intro');

  const articles: HelpArticle[] = [
    {
      id: 'intro',
      category: 'getting-started',
      title: 'Introduction to NeCast Mobile Studio',
      summary: 'Learn what NeCast is and how it empowers Android creators to stream in 1440p 60FPS without a PC.',
      icon: <Sparkles className="text-[#C1121F]" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            <strong>NeCast</strong> is a professional Android live streaming application designed specifically for mobile game creators, esports players, and IRL vloggers. It turns your Android smartphone or tablet into a standalone broadcast studio capable of streaming up to <strong>1440p (2K Ultra HD) at 60 FPS</strong> with hardware-accelerated bitrates up to <strong>16,000 kbps</strong>.
          </p>
          <div className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-800 space-y-2">
            <div className="font-bold text-white flex items-center gap-2 text-xs">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Core Highlights of NeCast:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
              <li><strong>Zero PC Requirement:</strong> All video composition, overlay rendering, and hardware encoding occur natively on device.</li>
              <li><strong>Direct YouTube Live Integration:</strong> Authenticate securely with Google OAuth 2.0 to broadcast directly to your YouTube channel.</li>
              <li><strong>Custom RTMP Support:</strong> Stream seamlessly to Twitch, Kick, Facebook Gaming, or private RTMP servers.</li>
              <li><strong>Real-Time Overlay Editor:</strong> Add webcams, sponsor logos, subscriber goals, and chat alerts over your live gameplay.</li>
              <li><strong>Hardware MediaCodec VPU Acceleration:</strong> Utilizes your phone's dedicated video processing unit to prevent gaming lag.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'downloading',
      category: 'getting-started',
      title: 'Downloading & Installing NeCast',
      summary: 'How to download the official NeCast APK and configure initial Android permissions.',
      icon: <Download className="text-emerald-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            NeCast is distributed officially through our verified domain <strong>necast.live</strong> and upcoming Google Play Store release.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-xs">
            <li><strong>Download APK:</strong> Visit <a href="https://necast.live" className="text-[#C1121F] font-bold underline">necast.live</a> or tap "Pre-Register / Download" on this portal.</li>
            <li><strong>Grant Permissions:</strong> When prompted on first launch, allow the required Android runtime permissions:
              <ul className="list-disc pl-5 pt-1 space-y-1 text-slate-400">
                <li><strong>Screen Recording (MediaProjection):</strong> Required to capture your active mobile game screen.</li>
                <li><strong>Microphone:</strong> Required to capture in-game audio and voice commentary.</li>
                <li><strong>Camera (Optional):</strong> Required if you enable facecam overlay.</li>
              </ul>
            </li>
            <li><strong>Android Version Requirement:</strong> NeCast supports Android 10.0 (API 29) and above. Android 12+ is recommended for optimal hardware VPU acceleration.</li>
          </ol>
        </div>
      ),
    },
    {
      id: 'google-oauth',
      category: 'getting-started',
      title: 'Signing In with Google & Connecting YouTube',
      summary: 'Secure OAuth 2.0 authentication to link your YouTube account and broadcast live.',
      icon: <Key className="text-blue-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            NeCast connects to YouTube Studio via official Google OAuth 2.0 endpoints without ever accessing your account password.
          </p>
          <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-1 text-xs">
            <span className="font-bold text-blue-300">Steps to Connect YouTube Live:</span>
            <ol className="list-decimal pl-5 space-y-1 text-slate-300 pt-1">
              <li>Open NeCast and tap <strong>"Sign in with Google"</strong>.</li>
              <li>Select your Google account associated with your verified YouTube channel.</li>
              <li>Grant YouTube Live Broadcast permissions (strictly required to create stream keys).</li>
              <li>NeCast will automatically load your active YouTube channel name, stream title, and privacy choices.</li>
            </ol>
          </div>
          <p className="text-slate-400 text-xs">
            <em>Note: If your YouTube channel has not activated Live Streaming before, YouTube requires a 24-hour initial activation period on YouTube Studio desktop prior to your first broadcast.</em>
          </p>
        </div>
      ),
    },
    {
      id: 'custom-rtmp',
      category: 'getting-started',
      title: 'Adding Custom RTMP Destinations',
      summary: 'Configure Twitch, Kick, Facebook Gaming, or custom server URLs and stream keys.',
      icon: <Radio className="text-amber-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            NeCast allows you to stream to any RTMP or RTMPS server worldwide:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">1. Obtain Ingest Details</span>
              <p className="text-slate-400">Log into your target platform creator dashboard (e.g., Twitch Creator Dashboard or Kick Creator Panel) and copy your <strong>Server URL</strong> and <strong>Stream Key</strong>.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">2. Enter into NeCast</span>
              <p className="text-slate-400">In NeCast destination settings, select <strong>"Custom RTMP"</strong>. Paste your Server URL (e.g. <code>rtmp://live.twitch.tv/app/</code>) and Stream Key, then save preset.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'overlay-editor',
      category: 'features',
      title: 'Using the Professional Overlay Editor',
      summary: 'Customize gameplay positioning, add graphics, webcam frames, and real-time alerts.',
      icon: <Layers className="text-[#C1121F]" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            The NeCast Overlay Editor gives mobile creators desktop OBS-style composition controls right on touchscreens:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
            <li><strong>Move & Resize Gameplay:</strong> Pinch to scale, drag to reposition, or snap your mobile gameplay window anywhere on screen.</li>
            <li><strong>Multi-Layer Support:</strong> Stack background artwork behind gameplay or camera overlays on top.</li>
            <li><strong>Aspect Ratio Adjustment:</strong> Crop or scale 20:9 ultra-wide smartphone screens to fit standard 16:9 widescreen broadcasts without black bars.</li>
            <li><strong>Visual Fine-Tuning:</strong> Adjust opacity, brightness, contrast, gamma, and sharpness per layer in real time.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'resolution-fps-bitrate',
      category: 'features',
      title: 'Resolution, FPS & Bitrate Controls',
      summary: 'Tune stream output parameters up to 1440p 60 FPS and 16,000 kbps bitrate.',
      icon: <Sliders className="text-emerald-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Resolution Selection</span>
              <p className="text-slate-400">Choose 720p HD, 1080p Full HD, or 1440p 2K Ultra HD based on mobile display and hardware encoder capabilities.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">FPS Selection</span>
              <p className="text-slate-400">Switch between 30 FPS for low bandwidth or 60 FPS for high-fps mobile esports gameplay (PUBG, Free Fire, CODM).</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Bitrate Tuning</span>
              <p className="text-slate-400">Set constant bitrate (CBR) from 2,500 kbps up to 16,000 kbps to eliminate stream pixelation on fast movement.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'portrait-vs-landscape',
      category: 'features',
      title: 'Portrait vs Landscape Streaming Modes',
      summary: 'Switch seamlessly between 9:16 vertical streaming and 16:9 widescreen layouts.',
      icon: <Monitor className="text-blue-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            NeCast adapts to all streaming content styles:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Portrait 9:16 Mode</span>
              <p className="text-slate-400">Perfect for vertical broadcasts, YouTube Shorts live feeds, TikTok-style streams, and portrait casual mobile games.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Landscape 16:9 Mode</span>
              <p className="text-slate-400">The standard competitive gaming layout. Rotate phone sideways to broadcast full-screen widescreen action.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'bandwidth-speeds',
      category: 'troubleshooting',
      title: 'Recommended Internet Speeds & Quality Chart',
      summary: 'Required upload speeds for stable broadcast streaming without frame drops.',
      icon: <Wifi className="text-amber-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            Live streaming requires a stable, non-fluctuating <strong>Upload Speed</strong> (not download speed). Check your connection speed on speedtest.net before starting:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-[#0A0A0A] text-white">
                <tr>
                  <th className="p-2.5 border-b border-white/10">Stream Quality</th>
                  <th className="p-2.5 border-b border-white/10">Target Bitrate</th>
                  <th className="p-2.5 border-b border-white/10">Min. Upload Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-2.5 font-bold text-white">720p @ 30 FPS</td>
                  <td className="p-2.5">3,000 – 4,500 kbps</td>
                  <td className="p-2.5 text-emerald-400 font-bold">6 Mbps+</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white">1080p @ 60 FPS</td>
                  <td className="p-2.5">8,000 – 10,000 kbps</td>
                  <td className="p-2.5 text-amber-400 font-bold">15 Mbps+</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white">1440p @ 60 FPS</td>
                  <td className="p-2.5">14,000 – 16,000 kbps</td>
                  <td className="p-2.5 text-[#C1121F] font-bold">25 Mbps+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'streaming-issues',
      category: 'troubleshooting',
      title: 'Common Streaming Issues & Fixes',
      summary: 'Troubleshoot frame drops, audio desync, buffering, and thermal throttling.',
      icon: <ShieldAlert className="text-[#C1121F]" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-red-400">Issue: Frame Drops or Red Bitrate Indicator</span>
              <p className="text-slate-400">Cause: Wi-Fi/5G upload congestion. <strong>Solution:</strong> Lower bitrate in NeCast settings from 12,000 kbps down to 6,000 kbps, or switch to 5GHz Wi-Fi band.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-amber-400">Issue: Phone Heating / FPS Stutter</span>
              <p className="text-slate-400">Cause: Thermal throttling during long gaming sessions. <strong>Solution:</strong> Lower output resolution to 1080p, remove thick phone cases, and turn off background apps.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-blue-400">Issue: Game Audio Silent on Broadcast</span>
              <p className="text-slate-400">Cause: Android OS internal audio restriction. <strong>Solution:</strong> Ensure game allows media audio playback and set NeCast audio source to "Internal Game + Mic Audio".</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'oauth-rtmp-troubleshooting',
      category: 'troubleshooting',
      title: 'Google Sign-In & Custom RTMP Troubleshooting',
      summary: 'Fix OAuth authorization blocks, stream key validation errors, and RTMPS handshakes.',
      icon: <AlertTriangle className="text-amber-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
            <li><strong>Google OAuth "Access Blocked":</strong> Ensure your Android phone system date & time are synchronized automatically with internet time servers. Clear Google Play Services cache if needed.</li>
            <li><strong>YouTube Channel Not Enabled:</strong> If YouTube states live streaming is restricted, visit <code>youtube.com/features</code> on a desktop browser to verify your channel phone number.</li>
            <li><strong>Custom RTMP Connection Refused:</strong> Verify that your server URL includes <code>rtmp://</code> or <code>rtmps://</code> prefix and contains no trailing spaces after your stream key.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'hardware-optimization',
      category: 'optimization',
      title: 'Performance Optimization & Battery Tips',
      summary: 'Maximize Android MediaCodec hardware encoder performance during live gameplay.',
      icon: <Cpu className="text-emerald-400" size={20} />,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
            <div className="font-bold text-white flex items-center gap-2">
              <Zap size={16} className="text-amber-400" />
              <span>Recommended Android Performance Checklist:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Disable Battery Saver / Power Saving:</strong> Android power saving modes artificially throttle GPU/VPU clock speeds. Turn battery saver OFF while live streaming.</li>
              <li><strong>Disable Adaptive Battery for NeCast:</strong> In Android Settings &gt; Apps &gt; NeCast &gt; Battery, set usage to <strong>"Unrestricted"</strong> to prevent background process termination.</li>
              <li><strong>Use Game Booster / Priority Mode:</strong> Enable your phone's built-in Game Booster (e.g. Samsung Game Launcher) to prioritize CPU cores for mobile games.</li>
              <li><strong>Connect Pass-Through Charger:</strong> If playing heavy 3D games (Genshin Impact, PUBG Mobile), use pass-through charging if supported to reduce battery heat.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="help-center" className="py-20 relative z-10 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-white/10 text-xs font-bold text-[#C1121F] uppercase tracking-widest">
            <BookOpen size={14} />
            Official Documentation & Help Center
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Can We Help You Stream?
          </h2>
          <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
            Everything you need to set up, customize, and optimize professional 1440p 60FPS mobile live streams on Android without a PC.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto pt-2">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search help articles (e.g. YouTube OAuth, 1440p, Bitrate, RTMP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C1121F] transition-colors shadow-xl"
            />
          </div>
        </div>

        {/* Category Nav Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs font-bold">
          {[
            { id: 'all', label: 'All Knowledge Base' },
            { id: 'getting-started', label: '🚀 Getting Started' },
            { id: 'features', label: '🎨 Overlay & Features' },
            { id: 'troubleshooting', label: '🔧 Troubleshooting' },
            { id: 'optimization', label: '⚡ Performance Tips' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#C1121F] text-white shadow-lg shadow-red-950/50'
                  : 'bg-[#0A0A0A] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Articles List */}
        <div className="space-y-3">
          {filteredArticles.map((art) => {
            const isExpanded = expandedId === art.id;

            return (
              <div
                key={art.id}
                className={`rounded-2xl bg-[#0A0A0A] border transition-all overflow-hidden ${
                  isExpanded ? 'border-[#C1121F]/60 shadow-xl shadow-red-950/20' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : art.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 shrink-0 mt-0.5">
                      {art.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#B8B8B8] mt-1 font-normal leading-relaxed">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 mt-2 ${
                      isExpanded ? 'rotate-180 text-[#C1121F]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-white/5 animate-fade-in font-sans">
                    {art.content}
                  </div>
                )}
              </div>
            );
          })}

          {filteredArticles.length === 0 && (
            <div className="p-12 text-center text-slate-500 text-xs bg-[#0A0A0A] rounded-2xl border border-white/10">
              No help articles found matching "{searchQuery}".
            </div>
          )}
        </div>

        {/* Still Need Help Callout Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#0A0A0A] border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center justify-center md:justify-start gap-2">
              <HelpCircle size={20} className="text-[#C1121F]" />
              <span>Can't find what you're looking for?</span>
            </h3>
            <p className="text-xs text-[#B8B8B8]">
              Our technical support team is standing by to help you with custom RTMP endpoints, stream dropouts, or Google OAuth setup.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenSupportModal && onOpenSupportModal('Technical Issues')}
              className="px-6 py-3 rounded-xl bg-[#C1121F] hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/40 transition-all active:scale-95"
            >
              <Mail size={16} />
              <span>Contact Support Desk</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
