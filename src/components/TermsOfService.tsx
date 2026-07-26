import React from 'react';
import { FileText, ShieldAlert, AlertTriangle, CheckCircle2, Mail, ExternalLink, Scale } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="space-y-8 text-[#D1D5DB] leading-relaxed font-sans text-xs sm:text-sm">
      
      {/* Terms Header Banner */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0F172A] border border-slate-700/80 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Scale size={24} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">NeCast Terms of Service</h2>
            <p className="text-[#B8B8B8] text-xs font-mono">Last Revised: July 2026 | Document ID: NC-TOS-2026-V1</p>
          </div>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm pt-1">
          These Terms of Service ("Terms") govern your download, installation, access, and use of the NeCast Android live streaming application and related services provided at necast.live. By downloading or streaming with NeCast, you enter into a legally binding agreement to abide by these Terms.
        </p>
      </div>

      {/* Non-Affiliation Legal Disclaimer Badge */}
      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle size={16} />
          <span>Independent Software & Third-Party Disclaimer</span>
        </div>
        <p className="text-amber-100/90 leading-relaxed">
          <strong>NeCast is an independent Android software application and is NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with Google LLC or YouTube LLC.</strong> "YouTube", "Google", "Android", and related logos are registered trademarks of Google LLC. All third-party trademarks belong to their respective owners.
        </p>
      </div>

      {/* 1. Acceptance & Eligibility */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            1. Acceptance of Terms & Eligibility
          </h3>
        </div>
        <p>
          By creating a broadcast or granting Google OAuth permissions to NeCast, you confirm that:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li>You are at least 13 years of age (or the legal age of digital consent in your jurisdiction). If you are between 13 and 18, you represent that your parent or guardian has reviewed and accepted these Terms.</li>
          <li>You possess full legal capacity to enter into binding software licensing agreements.</li>
          <li>You will use NeCast strictly in compliance with all applicable local, national, and international broadcasting regulations.</li>
        </ul>
      </section>

      {/* 2. User Responsibilities & Platform Compliance */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <ShieldAlert size={18} className="text-[#C1121F]" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            2. Streaming Responsibilities & Third-Party Policies
          </h3>
        </div>
        <p>
          As a live streamer using NeCast, you maintain sole responsibility and liability for all audio, video, graphics, text, and gameplay broadcast through the application.
        </p>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
          <p className="text-white font-bold">Mandatory Platform Policy Compliance:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>YouTube Streaming:</strong> You agree to strictly comply with the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] underline">YouTube Terms of Service</a> and <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] underline">YouTube Community Guidelines</a>.</li>
            <li><strong>Custom RTMP Streaming:</strong> When streaming via Custom RTMP to platforms like Twitch, Kick, or Facebook Gaming, you agree to comply with the terms of service and community standards of those respective platforms.</li>
            <li><strong>Copyright & Licensing:</strong> You represent that you own or possess all necessary rights, licenses, and permissions to broadcast any music, game footage, overlays, graphics, or logos included in your stream feed.</li>
          </ul>
        </div>
      </section>

      {/* 3. Prohibited Activities */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <FileText size={18} className="text-blue-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            3. Prohibited Conduct & Application Misuse
          </h3>
        </div>
        <p>
          You are strictly prohibited from engaging in any of the following activities:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Content Violations</span>
            <p className="text-slate-400">Broadcasting hate speech, illegal acts, non-consensual imagery, harassment, or infringing copyrighted media.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Software Tampering</span>
            <p className="text-slate-400">Decompiling, reverse engineering, modifying, or redistributing modified APK binaries of NeCast software.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">API Abuse</span>
            <p className="text-slate-400">Attempting to bypass Google OAuth rate limits, spoof stream origins, or flood RTMP ingest servers.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Unauthorized Re-branding</span>
            <p className="text-slate-400">Wrapping NeCast binaries into third-party adware, spyware, or malware distributors.</p>
          </div>
        </div>
      </section>

      {/* 4. Google OAuth & Custom RTMP Rights */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <Scale size={18} className="text-amber-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            4. Google OAuth Usage & Custom RTMP Usage
          </h3>
        </div>
        <p className="text-xs text-slate-300">
          NeCast grants you a revocable, non-exclusive, non-transferable personal license to run the application on your Android devices.
        </p>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
          <p className="text-slate-300">
            <strong>OAuth & RTMP Token Management:</strong> You are responsible for maintaining the confidentiality of your device access and Google OAuth credentials. NeCast is not liable for unauthorized streams initiated due to compromised user hardware or leaked RTMP keys.
          </p>
        </div>
      </section>

      {/* 5. Limitation of Liability & Warranties */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
          <AlertTriangle size={18} className="text-slate-400" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            5. Disclaimer of Warranties & Limitation of Liability
          </h3>
        </div>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs text-slate-400 uppercase font-mono">
          <p>
            NECAST IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED MOBILE STREAM UPTIME.
          </p>
          <p>
            NECAST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF STREAM REVENUE, CHANNEL SUSPENSION BY YOUTUBE, OR DATA DISRUPTION RESULTING FROM CELLULAR CARRIER DROPOUTS.
          </p>
        </div>
      </section>

      {/* 6. Updates & Termination */}
      <section className="space-y-3 text-xs">
        <h4 className="font-bold text-white text-sm">6. Termination & Terms Revision</h4>
        <p className="text-slate-400">
          We reserve the right to suspend application support or access for accounts violating these Terms. We may update these Terms at any time. Continued use of NeCast following published revisions on <a href="https://necast.live" className="text-white underline">necast.live</a> constitutes acceptance.
        </p>
      </section>

      {/* Contact Legal Team */}
      <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-[#C1121F]" />
          <div>
            <div className="text-xs font-bold text-white">Legal & Compliance Enquiries</div>
            <div className="text-[11px] text-slate-400">Email: support@necast.live</div>
          </div>
        </div>
        <a
          href="mailto:support@necast.live?subject=Terms%20of%20Service%20Inquiry"
          className="px-4 py-2 rounded-xl bg-[#C1121F] text-white text-xs font-bold hover:bg-red-700 transition-colors"
        >
          Contact Legal Desk
        </a>
      </div>

    </div>
  );
};
