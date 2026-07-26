export interface ScreenshotData {
  id: number;
  filename: string;
  title: string;
  category: string;
  orientation: 'portrait' | 'landscape';
  description: string;
  badge: string;
  featureSection?: string;
  keyHighlights: string[];
}

export const SCREENSHOTS_DATA: ScreenshotData[] = [
  {
    id: 1,
    filename: '/screenshots/1.jpg',
    title: 'NeCast Home Studio Dashboard',
    category: 'Dashboard',
    orientation: 'portrait',
    badge: 'Core Interface',
    description: 'The primary command center for Android streamers featuring account status, live stream setup, orientation toggles, and instant stream launcher.',
    featureSection: 'Home Dashboard',
    keyHighlights: ['One-Tap Go Live', 'Connected Account Badge', 'Resolution & Bitrate Summary', 'Stream Title & Privacy Setup']
  },
  {
    id: 2,
    filename: '/screenshots/2.jpg',
    title: 'Secure Google Account Login',
    category: 'Authentication',
    orientation: 'portrait',
    badge: 'Google Login Secure',
    description: 'Direct OAuth2 authentication with Google Sign-In, allowing seamless connection to your verified YouTube creator account without entering raw credentials.',
    featureSection: 'Google Login',
    keyHighlights: ['Official Google OAuth2', 'Zero Password Storage', 'Instant Token Refresh', 'Privacy Preserving']
  },
  {
    id: 3,
    filename: '/screenshots/3.jpg',
    title: 'Stream Destination Connection Hub',
    category: 'Platform Connection',
    orientation: 'portrait',
    badge: 'YouTube & Custom RTMP',
    description: 'Connect and manage your streaming destinations including YouTube Live via Google OAuth2 and Custom RTMP ingest servers in one place.',
    featureSection: 'Platform Connection',
    keyHighlights: ['YouTube Account Sync', 'Google OAuth2 Safety', 'Custom RTMP Profiles', 'Instant Account Disconnect']
  },
  {
    id: 4,
    filename: '/screenshots/4.jpg',
    title: 'YouTube Live Broadcast Config',
    category: 'YouTube Integration',
    orientation: 'portrait',
    badge: 'YouTube Integration',
    description: 'Sync broadcast parameters directly with YouTube Live, including Auto-Generated Stream Keys, Broadcast Category, and Privacy level (Public/Unlisted/Private).',
    featureSection: 'YouTube Integration',
    keyHighlights: ['Direct YouTube API Sync', 'Unlisted & Public Modes', 'Gaming Category Selector', 'Auto Stream Key Matching']
  },
  {
    id: 5,
    filename: '/screenshots/5.jpg',
    title: 'Custom RTMP Server Setup',
    category: 'Custom RTMP',
    orientation: 'portrait',
    badge: 'Custom RTMP',
    description: 'Stream to any custom RTMP or RTMPS endpoint by pasting your server URL and stream key. Supports custom ingest nodes and self-hosted RTMP servers.',
    featureSection: 'Custom RTMP',
    keyHighlights: ['RTMPS SSL Encryption', 'Custom Server Ingest URL', 'Persistent Key Storage', 'Low-Latency Stream Pipeline']
  },
  {
    id: 6,
    filename: '/screenshots/6.jpg',
    title: 'Ultra HD Resolution Selector',
    category: 'Stream Settings',
    orientation: 'portrait',
    badge: '1440p 60FPS',
    description: 'Choose your stream canvas resolution from 720p HD up to 1080p Full HD and 1440p 2K Ultra HD, matching your device screen aspect ratio.',
    featureSection: 'Resolution Selection',
    keyHighlights: ['1080p Full HD', '1440p 60FPS Ultra HD Support', 'Auto Aspect Scaling', 'Zero Distortion Engine']
  },
  {
    id: 7,
    filename: '/screenshots/7.jpg',
    title: 'FPS & Smooth Motion Selector',
    category: 'Stream Settings',
    orientation: 'portrait',
    badge: 'High Frame Rate',
    description: 'Select between 30 FPS for bandwidth conservation and 60 FPS for buttery smooth esports gameplay streaming.',
    featureSection: 'FPS Selection',
    keyHighlights: ['60 FPS Esports Grade', '30 FPS Efficiency Mode', 'Hardware VSYNC Lock', 'Adaptive Frame Pacing']
  },
  {
    id: 8,
    filename: '/screenshots/8.jpg',
    title: 'Video Bitrate & Encoder Tuning',
    category: 'Stream Settings',
    orientation: 'portrait',
    badge: '16,000 kbps Max',
    description: 'Fine-tune video output bitrate from 1,000 kbps up to 16,000 kbps (16 Mbps) to match high-speed mobile Wi-Fi or 5G network conditions perfectly.',
    featureSection: 'Bitrate Settings',
    keyHighlights: ['1,000 - 16,000 kbps Slider', 'Dynamic Network Adaptability', 'Minimal Buffer Bloat', 'Hardware H.264 / HEVC']
  },
  {
    id: 9,
    filename: '/screenshots/9.jpg',
    title: 'Stream Orientation Engine',
    category: 'Orientation',
    orientation: 'portrait',
    badge: 'Portrait & Landscape Streaming',
    description: 'Switch between Portrait (9:16 for YouTube Shorts style live) and Landscape (16:9 for traditional YouTube gameplay streams).',
    featureSection: 'Portrait Streaming',
    keyHighlights: ['9:16 Portrait Canvas', '16:9 Widescreen Canvas', 'Real-Time Crop Preview', 'Lock Orientation Switch']
  },
  {
    id: 10,
    filename: '/screenshots/10.jpg',
    title: 'Overlay Layout Customization',
    category: 'Overlay Editor',
    orientation: 'portrait',
    badge: 'Gameplay Overlay Customization',
    description: 'Add custom graphics, camera frames, subscriber alerts, social badges, and text overlays directly onto your stream video feed.',
    featureSection: 'Gameplay Overlay Customization',
    keyHighlights: ['Multi-Layer Overlay Stack', 'Custom PNG / SVG Support', 'Opacity & Scale Controls', 'Real-time Live Preview']
  },
  {
    id: 11,
    filename: '/screenshots/11.jpg',
    title: 'Interactive Overlay Positioning',
    category: 'Overlay Editor',
    orientation: 'portrait',
    badge: 'Creator Focused',
    description: 'Drag, pinch, and position webcams, text boxes, and sponsor banners anywhere on screen with grid alignment snapping.',
    featureSection: 'Gameplay Overlay Customization',
    keyHighlights: ['Touch Drag & Pinch Zoom', 'Snap-to-Grid Alignment', 'Z-Index Layer Management', 'Aspect Ratio Lock']
  },
  {
    id: 12,
    filename: '/screenshots/12.jpg',
    title: 'Game Screen Capture Alignment',
    category: 'Overlay Editor',
    orientation: 'portrait',
    badge: 'Android Native',
    description: 'Crop and position the captured game screen surface inside custom layout borders for picture-in-picture streaming.',
    featureSection: 'Gameplay Overlay Customization',
    keyHighlights: ['Screen Surface Capture', 'Picture-in-Picture Alignment', 'Custom Border Frames', 'Zero GPU Overhead']
  },
  {
    id: 13,
    filename: '/screenshots/13.jpg',
    title: 'Floating In-Game HUD Controls',
    category: 'Stream Controls',
    orientation: 'portrait',
    badge: 'Stream Controls',
    description: 'Minimalist floating control ball during live streams allowing one-tap mic muting, camera toggle, chat overlay, and broadcast pausing.',
    featureSection: 'Stream Controls',
    keyHighlights: ['Invisible to Viewers', 'One-Tap Mic Mute', 'Front/Rear Camera Toggle', 'Instant Pause Overlay']
  },
  {
    id: 14,
    filename: '/screenshots/14.jpg',
    title: 'Hardware Audio & Encoder Settings',
    category: 'Settings',
    orientation: 'portrait',
    badge: 'Android Native',
    description: 'Configure Android internal audio capture (Android 10+), microphone noise suppression, and hardware VPU encoder profiles.',
    featureSection: 'Settings',
    keyHighlights: ['Internal Game Audio Capture', 'Noise Suppression Filter', 'Adreno & Mali Hardware Acceleration', 'Custom Buffer Sizes']
  },
  {
    id: 15,
    filename: '/screenshots/15.jpg',
    title: 'Creator Health & Metrics Studio',
    category: 'Analytics',
    orientation: 'portrait',
    badge: 'Creator Focused',
    description: 'Monitor real-time streaming health including encoder FPS, CPU temperature, memory footprint, dropped frame percentage, and network speed.',
    featureSection: 'Creator Dashboard',
    keyHighlights: ['Live FPS & Bitrate Meter', 'Dropped Frame Counter', 'Thermal Warning Indicator', 'Bandwidth Stability Monitor']
  },
  {
    id: 16,
    filename: '/screenshots/16.jpg',
    title: 'In-App Transparency & Privacy',
    category: 'Privacy',
    orientation: 'portrait',
    badge: 'Privacy First',
    description: 'Complete transparent privacy controls detailing camera, microphone, and screen capture permission usage with local-only processing guarantees.',
    featureSection: 'Secure Authentication',
    keyHighlights: ['100% Local Data Processing', 'Transparent Permission Logs', 'Zero Background Data Selling', 'GDPR & CCPA Compliant']
  },
  {
    id: 17,
    filename: '/screenshots/17.jpg',
    title: 'Terms of Service & Licensing',
    category: 'Legal',
    orientation: 'portrait',
    badge: 'Secure Authentication',
    description: 'Official in-app terms of service and creator agreement guaranteeing non-intrusive stream injection and full channel ownership.',
    featureSection: 'Secure Authentication',
    keyHighlights: ['Creator Content Protection', 'No Watermark Guarantee', 'Full Channel Ownership', 'Direct API Compliance']
  },
  {
    id: 18,
    filename: '/screenshots/18.jpg',
    title: 'Landscape Studio Command Center',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Landscape Streaming',
    description: 'Expanded horizontal layout designed for landscape orientation, giving mobile gamers a full desktop-class studio experience on phone or tablet.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Full 16:9 Widescreen View', 'Dual-Pane Control Center', 'Side-by-Side Live Chat', 'Quick Preset Switching']
  },
  {
    id: 19,
    filename: '/screenshots/19.jpg',
    title: 'Landscape Encoder & Quality Selector',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: '1080p 60FPS',
    description: 'Access resolution, bitrate, and FPS controls directly within the landscape interface without exiting your game environment.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Overlay Settings Drawer', 'Real-Time Encoder Adjustment', 'Live Bitrate Preview', 'Fast Profile Switching']
  },
  {
    id: 20,
    filename: '/screenshots/20.jpg',
    title: 'Landscape Multi-Layer Overlay Canvas',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Gameplay Overlay Customization',
    description: 'Full-screen widescreen overlay editor for positioning webcams, chat boxes, and sponsor banners across 16:9 gameplay frames.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Horizontal Drag-and-Drop', 'Widescreen Alignment Grid', 'Camera Frame Positioning', 'Multi-Layer Canvas']
  },
  {
    id: 21,
    filename: '/screenshots/21.jpg',
    title: 'Landscape In-Game Stream Preview',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Low Latency',
    description: 'Live monitor showing exact viewer perspective in 16:9 widescreen, combining game footage, facecam feed, and active overlay elements.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Exact Viewer Output Preview', 'Sub-Second Latency Monitor', 'Aspect Ratio Verification', 'Audio Level Meter']
  },
  {
    id: 22,
    filename: '/screenshots/22.jpg',
    title: 'Landscape Multi-Channel Audio Mixer',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Creator Focused',
    description: 'Dual volume sliders in landscape mode to independently balance internal game audio and voice microphone audio during intensive matches.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Independent Game/Voice Mix', 'Peak Level Clipping Indicators', 'Bluetooth Mic Gain Boost', 'Mute Shortcut Hotkey']
  },
  {
    id: 23,
    filename: '/screenshots/23.jpg',
    title: 'Landscape Health & Telemetry Dashboard',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Low Latency',
    description: 'Horizontal streaming diagnostics panel displaying real-time FPS graphs, network latency history, and VPU hardware utilization.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Live Network Latency Graph', 'FPS Stability Curve', 'Thermal Stress Warning', 'Dropped Frame Log']
  },
  {
    id: 24,
    filename: '/screenshots/24.jpg',
    title: 'Landscape Settings & Account Switcher',
    category: 'Landscape Studio',
    orientation: 'landscape',
    badge: 'Multiple Platform Support',
    description: 'Quickly switch YouTube channels, update stream keys, or toggle hardware encoders while in landscape mode.',
    featureSection: 'Landscape Streaming',
    keyHighlights: ['Instant Channel Switcher', 'Hardware Encoder Profiles', 'One-Tap Reconnect', 'Dark Theme Interface']
  }
];

export const TRUTHFUL_BADGES = [
  'Android Native',
  'Low Latency',
  'Google Login Secure',
  '1440p 60FPS',
  'Up to 16,000 kbps Bitrate',
  'Creator Focused',
  'YouTube & Custom RTMP',
  'Custom RTMP',
  'Gameplay Overlay Customization',
  'Portrait & Landscape Streaming',
  'Privacy First'
];
