import React, { useState } from 'react';
import {
  Smartphone,
  Shield,
  Tv,
  Radio,
  Sliders,
  Activity,
  Zap,
  Layers,
  Crop,
  Volume2,
  Lock,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
  LayoutGrid
} from 'lucide-react';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'encoder' | 'overlay' | 'landscape'>('dashboard');
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number>(0);

  // Grouped Feature Categories for clean interactive exploration
  const featureCategories = [
    {
      id: 'dashboard',
      label: 'Control Studio',
      icon: Smartphone,
      subtitle: 'Dashboard, Account Sync & Destinations',
      items: [
        {
          id: 'home-dashboard',
          title: 'Home Command Dashboard',
          subtitle: 'One-Tap Stream Launch',
          description: 'The central hub brings channel connection status, live title configuration, and instant encoder launch controls into a clean Android interface.',
          badge: 'Android Native',
          bullets: [
            'One-tap live broadcast initialization',
            'Google / YouTube connected channel indicator',
            'Quick parameters for resolution and bitrate',
            'Live stream title & description editor'
          ]
        },
        {
          id: 'google-login',
          title: 'Google OAuth2 Authentication',
          subtitle: 'Direct YouTube Channel Link',
          description: 'Authenticate securely with official Google OAuth2. Your YouTube channel tokens are verified directly without saving raw passwords.',
          badge: 'Google OAuth2',
          bullets: [
            'Official Google sign-in security standards',
            'Zero password logging or credential exposure',
            'Instant permission sync for live broadcasts',
            'Encrypted local session token management'
          ]
        },
        {
          id: 'youtube-platform',
          title: 'YouTube Studio Sync',
          subtitle: 'Auto Stream Key Management',
          description: 'Stream directly to YouTube Live. Automatically generate stream keys and set stream privacy (Public, Unlisted, Private) directly from mobile.',
          badge: 'YouTube Live',
          bullets: [
            'Automated YouTube stream key fetching',
            'Public, Unlisted, or Private stream privacy modes',
            'Gaming category auto-tagging for discoverability',
            'Direct sync with YouTube Studio Creator Dashboard'
          ]
        },
        {
          id: 'custom-rtmp',
          title: 'Custom RTMP Endpoints',
          subtitle: 'Stream To Any Custom RTMP Ingest',
          description: 'Broadcast directly to YouTube Live or any custom RTMP/RTMPS streaming server by pasting your destination server URL and stream key.',
          badge: 'Custom RTMP',
          bullets: [
            'RTMPS SSL-encrypted streaming endpoints',
            'Custom streaming server profile presets',
            'Direct ingest URL & Stream Key validation',
            'Low-latency RTMP pipeline architecture'
          ]
        }
      ]
    },
    {
      id: 'encoder',
      label: 'Video Encoder',
      icon: Sliders,
      subtitle: 'Resolution, FPS & Dynamic Bitrate',
      items: [
        {
          id: 'resolution-selection',
          title: 'Ultra HD Resolution Controls',
          subtitle: '720p HD, 1080p Full HD & 1440p 2K',
          description: 'Select your output video resolution to match your phone screen surface and broadcast network capacity with zero frame distortion.',
          badge: '1440p 60FPS',
          bullets: [
            'Ultra clear 1440p 2K & 1080p Full HD video output',
            '60 FPS high frame rate support for esports',
            'Aspect ratio auto-scaling (16:9 & 9:16)',
            'Zero distortion hardware surface rendering'
          ]
        },
        {
          id: 'fps-selection',
          title: '60 FPS Motion Pacing Engine',
          subtitle: 'Esports-Grade Smooth Frame Rate',
          description: 'Deliver silky-smooth gameplay broadcasts at 60 FPS for high-action games, or switch to 30 FPS for bandwidth conservation.',
          badge: '60 FPS Smooth',
          bullets: [
            '60 FPS high frame rate capture engine',
            'Hardware VSYNC frame pacing synchronization',
            'Dynamic frame dropping prevention',
            'Minimal GPU impact during intense gaming'
          ]
        },
        {
          id: 'bitrate-settings',
          title: '1,000–16,000 kbps Bitrate Tuning',
          subtitle: 'Manual Hardware Encoder Control',
          description: 'Fine-tune video output bitrate using an intuitive slider from 1,000 kbps to 16,000 kbps (16 Mbps) to maintain crisp video on 5G or Wi-Fi.',
          badge: '16 Mbps Bitrate',
          bullets: [
            'Precise 1,000 to 16,000 kbps video bitrate slider',
            'Hardware H.264 & HEVC hardware encoder utilization',
            'Network buffer bloat prevention',
            'Adaptive fallback buffer for signal stability'
          ]
        },
        {
          id: 'portrait-landscape',
          title: 'Portrait & Landscape Canvas',
          subtitle: 'YouTube Shorts & Widescreen Gaming',
          description: 'Stream vertically in 9:16 for portrait feeds or horizontally in 16:9 for traditional widescreen gaming.',
          badge: 'Canvas Engine',
          bullets: [
            '9:16 Portrait canvas optimized for vertical feeds',
            '16:9 Landscape canvas for widescreen gaming',
            'Instant crop preview before launching stream',
            'Hardware orientation lock protection'
          ]
        }
      ]
    },
    {
      id: 'overlay',
      label: 'Overlay Studio',
      icon: Layers,
      subtitle: 'Multi-Layer Graphics & In-Game HUD',
      items: [
        {
          id: 'overlay-customization',
          title: 'Multi-Layer Overlay Stack',
          subtitle: 'Drag & Drop Webcam & Graphics',
          description: 'Customize your stream overlay with camera frames, subscriber alerts, PNG banners, and chat boxes using intuitive touch controls.',
          badge: 'Overlay Studio',
          bullets: [
            'Multi-layer overlay stack with depth ordering',
            'Drag, scale, and rotate camera feeds and banners',
            'Custom transparent PNG graphics support',
            'Touch snap-to-grid alignment guides'
          ]
        },
        {
          id: 'game-capture',
          title: 'Screen Surface Cropping',
          subtitle: 'Picture-in-Picture Alignment',
          description: 'Crop and scale game surface areas seamlessly inside overlay frames for clean, professional picture-in-picture broadcasts.',
          badge: 'Surface Crop',
          bullets: [
            'Android MediaProjection high-efficiency capture',
            'Real-time game window cropping & aspect correction',
            'Zero frame latency overhead during gameplay',
            'Webcam frame alignment guides'
          ]
        },
        {
          id: 'floating-controls',
          title: 'In-Game Floating HUD',
          subtitle: 'Control Streams Without Quitting Games',
          description: 'A floating quick-access menu gives you one-tap control over mic mute, camera toggle, and stream pause—invisible to viewers.',
          badge: 'Floating Controls',
          bullets: [
            'Invisible on the live viewer video feed',
            'One-tap microphone mute and gain adjustment',
            'Instant front/rear camera toggle button',
            'Pause overlay screen with custom thumbnail'
          ]
        }
      ]
    },
    {
      id: 'landscape',
      label: 'Landscape & Audio',
      icon: Volume2,
      subtitle: 'Widescreen Studio & Multi-Channel Mixer',
      items: [
        {
          id: 'landscape-studio',
          title: 'Landscape Command Center',
          subtitle: 'Widescreen Desktop-Class Layout',
          description: 'Rotate your phone into a dual-pane studio workspace with live chat monitors, audio controls, and stream stats side-by-side.',
          badge: 'Widescreen Studio',
          bullets: [
            'Full 16:9 widescreen layout for mobile & tablet',
            'Side-by-side live chat and broadcast metrics',
            'Quick-access overlay settings and presets',
            'Tailored for mobile esports creators'
          ]
        },
        {
          id: 'landscape-audio',
          title: 'Multi-Channel Audio Mixer',
          subtitle: 'Game Sound & Mic Level Control',
          description: 'Balance game sound (Android 10+) and voice microphone volume on separate sliders with real-time VU audio meters.',
          badge: 'Dual Audio Mixer',
          bullets: [
            'Internal game audio capture with zero mic bleed',
            'Microphone volume boost & noise filter controls',
            'Dual level VU meters for clipping prevention',
            'Headset & Bluetooth audio routing support'
          ]
        },
        {
          id: 'privacy-security',
          title: 'On-Device Privacy Engine',
          subtitle: '100% Local Processing & Zero Data Logs',
          description: 'All video encoding runs locally on your Android device hardware VPU. No camera feeds or recordings pass through external servers.',
          badge: 'Privacy Secured',
          bullets: [
            '100% on-device hardware video encoding',
            'Transparent permission controls for Camera & Mic',
            'Zero background tracking or personal data collection',
            'Fully compliant with Google Play Security Policies'
          ]
        }
      ]
    }
  ];

  const currentCategory = featureCategories.find((c) => c.id === activeTab) || featureCategories[0];
  const activeFeature = currentCategory.items[selectedFeatureIndex] || currentCategory.items[0];

  const handleTabChange = (tabId: 'dashboard' | 'encoder' | 'overlay' | 'landscape') => {
    setActiveTab(tabId);
    setSelectedFeatureIndex(0);
  };

  return (
    <section id="features" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Ambient Spotlights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C1121F]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#780000]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[#C1121F]/40 text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>Interactive Feature Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered For <span className="text-metallic-crimson">Maximum Stream Performance</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8B8B8] leading-relaxed">
            Explore NeCast's real Android application features. Click through categories to inspect encoder tuning, multi-layer overlays, and widescreen audio controls.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {featureCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id as any)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C1121F] text-white shadow-xl shadow-red-950/60 scale-105 border border-red-500/30'
                    : 'bg-[#0A0A0A] border border-white/10 text-slate-300 hover:border-[#C1121F]/50 hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Showcase Card */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle Ambient Red Backdrop Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C1121F]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Sub-feature list selector & active details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/40 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                  {activeFeature.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {activeFeature.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#C1121F] mt-1">
                  {activeFeature.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                {activeFeature.description}
              </p>

              {/* Bullet Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {activeFeature.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 font-medium"
                  >
                    <CheckCircle2 size={15} className="text-[#C1121F] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Selector Buttons for Category Sub-Items */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Select {currentCategory.label} Module:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.items.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedFeatureIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedFeatureIndex === idx
                          ? 'bg-[#C1121F] text-white shadow-md'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      #{idx + 1} {item.title}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Code-Driven System Specs Cockpit */}
            <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-red-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white">SYSTEM SPECIFICATIONS</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                  OPTIMAL
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Processing Engine</span>
                  <span className="font-mono font-bold text-white">MediaCodec Hardware</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Max Resolution</span>
                  <span className="font-mono font-bold text-emerald-400">2560 x 1440 (1440p)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Max Frame Rate</span>
                  <span className="font-mono font-bold text-white">60 FPS Smooth</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Video Encryption</span>
                  <span className="font-mono font-bold text-white">RTMPS SSL 256-Bit</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/40 text-[11px] text-slate-300 leading-relaxed">
                <span className="font-bold text-red-400">Android Native Guarantee:</span> Engineered with zero third-party cloud relays. Your live broadcast travels directly from device to YouTube.
              </div>
            </div>

          </div>
        </div>

        {/* Bento Grid Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#C1121F]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center font-bold mb-4 border border-[#C1121F]/40">
              <Zap size={20} />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Hardware VPU Accelerated</h4>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Leverages Android Mediacodec & OpenGLES hardware surface pipelines for ultra-low latency and low CPU temperature during heavy gaming.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#C1121F]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center font-bold mb-4 border border-[#C1121F]/40">
              <Shield size={20} />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Official Google OAuth2</h4>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Connect directly with YouTube API endpoints using Google OAuth2 sign-in. Your channel credentials and passwords are never collected.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#C1121F]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#C1121F]/20 text-[#C1121F] flex items-center justify-center font-bold mb-4 border border-[#C1121F]/40">
              <SlidersHorizontal size={20} />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Custom RTMP Relay</h4>
            <p className="text-xs text-[#B8B8B8] leading-relaxed">
              Stream seamlessly to YouTube Live or any Custom RTMP server with SSL-encrypted RTMPS endpoint support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
