import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  Trash2, 
  Mail, 
  ExternalLink, 
  FileCheck,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Eye,
  Database,
  RefreshCw,
  Sliders,
  Bell
} from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-8 text-[#D1D5DB] leading-relaxed font-sans text-xs sm:text-sm">
      
      {/* Policy Header Banner */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#0F172A] border border-slate-700/80 space-y-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#C1121F]/20 text-[#C1121F] border border-[#C1121F]/30 shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">NeCast Official Privacy Policy</h2>
            <p className="text-[#B8B8B8] text-xs font-mono pt-0.5">Effective Date: July 26, 2026 | Version 1.0.4 • Official Document</p>
          </div>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm pt-2 leading-relaxed">
          NeCast ("we", "our", or "us") is an Android-first mobile live streaming application engineered for content creators to broadcast high-definition video directly from mobile devices to YouTube Studio and custom RTMP destinations. We respect your privacy and are committed to protecting user data through hardware-level Android KeyStore encryption, a zero-password policy, and strict adherence to Google's API Services User Data Policy.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-400">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> Google API Compliant
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> AES-256 KeyStore Encrypted
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> Zero Password Storage
          </span>
        </div>
      </div>

      {/* 1. Google API Services Disclosure & YouTube Data API */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Server size={20} className="text-blue-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            1. Google API Services & YouTube Data API Compliance
          </h3>
        </div>
        <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-3">
          <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
            NeCast's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold inline-flex items-center gap-1 hover:text-blue-300">Google API Services User Data Policy <ExternalLink size={12} /></a>, including the <strong>Limited Use</strong> requirements.
          </p>
        </div>

        <p className="text-slate-300">
          When you authenticate NeCast with your Google Account, we request authorization via Google OAuth 2.0 to access specific YouTube Data API v3 scopes required to enable mobile live streaming:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1.5">
            <div className="font-mono text-xs font-bold text-red-400 truncate">youtube</div>
            <div className="text-xs font-semibold text-white">Broadcast Management</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Allows NeCast to create, schedule, start, stop, and update live video broadcasts on your YouTube Channel directly from your Android device.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1.5">
            <div className="font-mono text-xs font-bold text-red-400 truncate">youtube.force-ssl</div>
            <div className="text-xs font-semibold text-white">Secure Ingest Fetching</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Allows NeCast to retrieve RTMPS stream ingest server URLs and secure live stream keys required to transmit encrypted video packets to YouTube Studio.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1.5">
            <div className="font-mono text-xs font-bold text-red-400 truncate">youtube.readonly</div>
            <div className="text-xs font-semibold text-white">Stream Diagnostics & Chat</div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Allows NeCast to monitor stream health metrics (FPS, resolution, connection status) and display live broadcast chat overlays inside the mobile app.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
          <div className="font-bold text-white flex items-center gap-2">
            <AlertCircle size={15} className="text-amber-400" />
            <span>Strict Prohibition on Data Sale, AI Training & Third-Party Sharing</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Google user data obtained through YouTube Data APIs is processed strictly on your Android device to facilitate your live broadcasts. <strong>We do NOT sell, rent, monetize, or transfer Google user data to third parties, advertising networks, data brokers, or AI model training pipelines under any circumstances.</strong>
          </p>
        </div>
      </section>

      {/* 2. Information We Collect */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Key size={20} className="text-[#C1121F] shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            2. Information We Collect
          </h3>
        </div>
        <p>
          NeCast operates with a privacy-first architecture. We collect only the essential data required to configure hardware video encoding and authenticate live broadcasts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              Google OAuth Account Information
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              When you authenticate with Google, we process your primary email address, YouTube Channel ID, channel title, and OAuth 2.0 access tokens. This information is used strictly to establish live stream sessions on YouTube.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              Custom RTMP Credentials
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              If you stream to custom destinations (Twitch, Kick, Facebook Gaming, or private RTMP servers), you enter Target Server Ingest URLs and Stream Keys. These credentials are saved exclusively inside your Android device's local encrypted storage.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              Device Hardware & Encoding Specs
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              NeCast queries Android MediaCodec hardware details (GPU/VPU encoder chipset, screen aspect ratio, cellular 5G/4G or Wi-Fi network state) solely to optimize encoding parameters (1440p/1080p, 60 FPS, 16,000 kbps bitrate).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              Diagnostic & Performance Logs
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Anonymous crash logs, frame drop counters, and network jitter statistics may be processed locally to optimize video pipeline stability across diverse Android smartphone chipsets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Android System Permissions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Smartphone size={20} className="text-purple-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            3. Android Application Runtime Permissions
          </h3>
        </div>
        <p>
          To provide real-time game streaming and camera overlay functionality, NeCast requests standard Android runtime permissions. Each permission is requested only when activated by the user:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <Sliders size={14} className="text-red-400" />
              Camera (android.permission.CAMERA)
            </div>
            <p className="text-slate-400 text-xs">
              Used exclusively to display your front or rear camera as an optional picture-in-picture facecam overlay during broadcasts.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <Sliders size={14} className="text-red-400" />
              Microphone (android.permission.RECORD_AUDIO)
            </div>
            <p className="text-slate-400 text-xs">
              Used to capture internal device gameplay audio and creator voice commentary during live streams.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <Sliders size={14} className="text-red-400" />
              Screen Capture / Media Projection
            </div>
            <p className="text-slate-400 text-xs">
              Allows the Android OS to capture screen gameplay in real time for hardware encoding. Activated strictly when you tap "Start Stream".
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <Bell size={14} className="text-red-400" />
              Status Notifications (POST_NOTIFICATIONS)
            </div>
            <p className="text-slate-400 text-xs">
              Displays ongoing live stream status, bitrate gauges, and quick "Stop Stream" controls in the Android status bar drawer.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Hardware Security & Zero Password Policy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Lock size={20} className="text-emerald-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            4. Hardware-Backed Encryption & Security
          </h3>
        </div>
        
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <div className="font-bold text-emerald-400 flex items-center gap-2 text-sm sm:text-base">
            <FileCheck size={18} />
            <span>Zero Password Exposure & KeyStore Safeguards</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
            <li>
              <strong>Zero Password Storage:</strong> NeCast <strong>NEVER</strong> requests, collects, or stores user passwords. Authentication is handled securely through Google OAuth 2.0 authorization endpoints.
            </li>
            <li>
              <strong>Android Hardware KeyStore Encryption:</strong> OAuth access refresh tokens and RTMP stream keys are encrypted using AES-256 GCM inside the Android OS hardware KeyStore security module.
            </li>
            <li>
              <strong>Direct Transport Encryption:</strong> Live stream video packets transmit directly from your device to YouTube or RTMP ingest servers using 256-bit RTMPS SSL encryption.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Account & Data Deletion Rights */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Trash2 size={20} className="text-amber-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            5. User Rights, Account Revocation & Data Deletion
          </h3>
        </div>
        <p>
          You maintain full authority and control over your account permissions and local data storage:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <div className="font-bold text-white text-xs flex items-center gap-1.5">
              <RefreshCw size={14} className="text-blue-400" />
              Revoke Google Access
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              You can instantly revoke NeCast's OAuth access at any time by visiting <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-red-400 underline font-semibold hover:text-red-300">Google Security Settings</a> under "Third-party apps with account access".
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <div className="font-bold text-white text-xs flex items-center gap-1.5">
              <Database size={14} className="text-amber-400" />
              Instant Device Storage Wipe
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Clearing NeCast application storage in Android System Settings or uninstalling the application permanently erases all locally cached stream keys and presets.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <div className="font-bold text-white text-xs flex items-center gap-1.5">
              <Mail size={14} className="text-emerald-400" />
              Manual Deletion Request
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              To request explicit manual deletion of support correspondence or account records, email our team directly at <a href="mailto:support@necast.live" className="text-white font-bold underline">support@necast.live</a>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Children's Privacy & Policy Revisions */}
      <section className="space-y-3 text-xs text-slate-400">
        <h4 className="font-bold text-white text-sm">6. Children's Privacy & Policy Revisions</h4>
        <p>
          NeCast is not directed to children under 13 years of age (or 16 in the European Economic Area). We do not knowingly collect personal data from children. We reserve the right to update this Privacy Policy periodically to reflect Android OS security updates or API policy revisions. Continued use of the website or application following updates published on <a href="https://necast.live" className="text-white underline font-semibold">necast.live</a> constitutes acceptance.
        </p>
      </section>

      {/* Contact Privacy Officer Box */}
      <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#C1121F]/20 text-[#C1121F] border border-[#C1121F]/30">
            <Mail size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Data Protection & Privacy Desk</div>
            <div className="text-[11px] text-slate-400">Email: support@necast.live • Website: necast.live</div>
          </div>
        </div>
        <a
          href="mailto:support@necast.live?subject=NeCast%20Privacy%20Data%20Inquiry"
          className="px-4 py-2.5 rounded-xl bg-[#C1121F] text-white text-xs font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-950/40"
        >
          Send Privacy Inquiry
        </a>
      </div>

    </div>
  );
};
