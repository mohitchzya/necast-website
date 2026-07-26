import React from 'react';
import { ShieldCheck, Lock, Key, Server, Cpu, Trash2, Mail, ExternalLink, FileCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-8 text-[#D1D5DB] leading-relaxed font-sans text-xs sm:text-sm">
      
      {/* Policy Header Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0F172A] border border-slate-700/80 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#C1121F]/20 text-[#C1121F] border border-[#C1121F]/30">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">NeCast Official Privacy Policy</h2>
            <p className="text-[#B8B8B8] text-xs font-mono">Effective Date: July 2026 | Version 1.0.4</p>
          </div>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm pt-1">
          NeCast ("we", "our", or "us") is an Android-first mobile live streaming application engineered for content creators. We respect your privacy and are committed to protecting user data through strict hardware-level encryption and minimal permission collection. This Privacy Policy details how we handle authentication, stream configuration, and device metrics.
        </p>
      </div>

      {/* 1. Information We Collect */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <Key size={18} className="text-[#C1121F]" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            1. Information We Collect
          </h3>
        </div>
        <p>
          NeCast operates with a privacy-by-design architecture. We collect only the absolute minimum information required to deliver live streaming functionality directly from your Android device.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Google OAuth 2.0 Information
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              When you authenticate with Google, we request authorization tokens to connect your YouTube account. We collect your primary email address and YouTube Channel ID strictly to fetch stream ingest URLs and manage broadcast titles. <strong>NeCast requests only the minimum Google permissions necessary for YouTube live streaming setup.</strong>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C1121F]" />
              Custom RTMP Stream Details
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              If you stream to custom destinations (such as Twitch, Kick, or Facebook Gaming), you provide Target Server URLs and Stream Keys. These credentials are saved exclusively on your local device.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Device Hardware & Stream Specs
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              We query local Android MediaCodec hardware details (GPU/VPU encoder model, screen aspect ratio, network connection type Wi-Fi/5G) solely to calibrate video encoding parameters (1440p/1080p, 60 FPS, 16,000 kbps).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Diagnostic & Crash Logs
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Anonymous crash reports, bitrate drop logs, and hardware exception stack traces may be collected locally to help us optimize encoder stability across diverse Android phone chipsets.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Security & Password Exemption */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <Lock size={18} className="text-emerald-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            2. Hardware-Backed Security & No Password Storage
          </h3>
        </div>
        <p>
          Your account security is maintained through hardware-backed Android KeyStore encryption and zero password exposure.
        </p>
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2 text-xs text-emerald-200">
          <div className="font-bold text-emerald-400 flex items-center gap-2 text-sm">
            <FileCheck size={16} />
            <span>Zero Password Policy & KeyStore Safeguards</span>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>No Password Storage:</strong> User passwords are <strong>NEVER</strong> requested, collected, or stored by NeCast. All sign-in operations are delegated securely to Google OAuth 2.0 authorization endpoints.</li>
            <li><strong>Hardware Encryption:</strong> OAuth access refresh tokens and RTMP keys are encrypted using AES-256 GCM inside the Android OS hardware KeyStore environment.</li>
            <li><strong>Direct Transport Encryption:</strong> Live stream video packets transmit directly from your device to YouTube/RTMP ingest servers using 256-bit RTMPS SSL encryption.</li>
          </ul>
        </div>
      </section>

      {/* 3. Google API Services Disclosure */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <Server size={18} className="text-blue-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            3. Google APIs & YouTube Data API Compliance
          </h3>
        </div>
        <p>
          NeCast's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] underline inline-flex items-center gap-1 font-bold">Google API Services User Data Policy <ExternalLink size={12} /></a>, including the Limited Use requirements.
        </p>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
          <p className="text-slate-300">
            Specifically, YouTube Data API tokens granted to NeCast are used exclusively for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Creating, scheduling, and starting YouTube Live broadcasts.</li>
            <li>Fetching broadcast RTMPS ingest server URLs and live stream keys.</li>
            <li>Updating live broadcast titles, descriptions, and privacy settings.</li>
            <li>Reading live stream health status during active broadcasts.</li>
          </ul>
          <p className="text-slate-400 pt-1">
            We do not sell, rent, or transfer Google user data to third parties, advertising networks, data brokers, or AI model trainers.
          </p>
        </div>
      </section>

      {/* 4. Data Retention & Deletion Rights */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <Trash2 size={18} className="text-amber-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            4. Data Retention & User Deletion Rights
          </h3>
        </div>
        <div className="space-y-3 text-xs sm:text-sm">
          <p>
            You retain complete control over your authorization data and local application configurations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Revoking OAuth Permissions</span>
              <p className="text-slate-400 text-xs">
                You can revoke NeCast's access at any time by visiting <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">Google Security Settings</a> under "Apps with access to your account".
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
              <span className="font-bold text-white">Instant Data Wipe</span>
              <p className="text-slate-400 text-xs">
                Clearing NeCast application storage in Android Settings or uninstalling the app permanently erases all locally cached keys and stream presets.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-xs">
            To request explicit manual deletion of any support correspondence, email our privacy team directly at <a href="mailto:support@necast.live" className="text-white font-bold underline">support@necast.live</a>.
          </p>
        </div>
      </section>

      {/* 5. Children's Privacy & Policy Updates */}
      <section className="space-y-3 text-xs text-slate-400">
        <h4 className="font-bold text-white text-sm">5. Children's Privacy & Updates</h4>
        <p>
          NeCast is not directed to children under 13 years of age (or 16 in the European Economic Area). We do not knowingly collect personal data from children. We reserve the right to update this policy periodically to reflect Android OS security enhancements or API policy updates. Material changes will be published on <a href="https://necast.live" className="text-white underline font-semibold">necast.live</a>.
        </p>
      </section>

      {/* Contact Privacy Officer */}
      <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-[#C1121F]" />
          <div>
            <div className="text-xs font-bold text-white">Privacy Officer Contact</div>
            <div className="text-[11px] text-slate-400">Email: support@necast.live</div>
          </div>
        </div>
        <a
          href="mailto:support@necast.live?subject=Privacy%20Data%20Inquiry"
          className="px-4 py-2 rounded-xl bg-[#C1121F] text-white text-xs font-bold hover:bg-red-700 transition-colors"
        >
          Send Privacy Request
        </a>
      </div>

    </div>
  );
};
