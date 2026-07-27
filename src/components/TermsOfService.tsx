import React from 'react';
import { 
  FileText, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Mail, 
  ExternalLink, 
  Scale,
  Ban,
  Radio,
  Lock,
  Flame,
  HelpCircle
} from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="space-y-8 text-[#D1D5DB] leading-relaxed font-sans text-xs sm:text-sm">
      
      {/* Terms Header Banner */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#0F172A] border border-slate-700/80 space-y-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
            <Scale size={28} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">NeCast Terms of Service</h2>
            <p className="text-[#B8B8B8] text-xs font-mono pt-0.5">Last Revised: July 26, 2026 | Document ID: NC-TOS-2026-V1 • Official Legal Agreement</p>
          </div>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm pt-2 leading-relaxed">
          These Terms of Service ("Terms") constitute a legally binding agreement between you and NeCast regarding your download, installation, access, and use of the NeCast Android live streaming application and official website at <a href="https://necast.live" className="text-white underline font-semibold">necast.live</a>. By accessing the website or broadcasting with NeCast, you agree to be bound by these Terms.
        </p>
      </div>

      {/* Independent Software & Non-Affiliation Disclaimer */}
      <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2.5 text-xs shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle size={18} className="shrink-0" />
          <span>Independent Software & Third-Party Disclaimer</span>
        </div>
        <p className="text-amber-100/90 leading-relaxed text-xs sm:text-sm">
          <strong>NeCast is an independent Android software application and is NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with Google LLC, YouTube LLC, or Alphabet Inc.</strong> "YouTube", "Google", "Android", and related logos are registered trademarks of Google LLC. All third-party trademarks, product names, and brand logos mentioned herein belong to their respective owners.
        </p>
      </div>

      {/* 1. Acceptance & Age Eligibility */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            1. Acceptance of Terms & User Eligibility
          </h3>
        </div>
        <p>
          By creating a live broadcast, configuring a custom RTMP destination, or granting Google OAuth permissions to NeCast, you represent and warrant that:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>
            You are at least 13 years of age (or the legal minimum age of digital consent in your jurisdiction). If you are between 13 and 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
          </li>
          <li>
            You possess full legal capacity and authority to enter into binding software licensing agreements.
          </li>
          <li>
            You will use NeCast strictly in compliance with all local, state, national, and international laws and broadcasting regulations.
          </li>
        </ul>
      </section>

      {/* 2. User Responsibilities & Platform Policy Compliance */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <ShieldAlert size={20} className="text-[#C1121F] shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            2. Streaming Responsibilities & Third-Party Platform Policies
          </h3>
        </div>
        <p>
          As a live streamer using NeCast, you maintain sole ownership, legal responsibility, and liability for all audio, video, graphics, text commentary, and gameplay broadcasted through the application.
        </p>

        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-3 text-xs">
          <p className="text-white font-bold text-sm">Mandatory Third-Party Policy Compliance:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong>YouTube Live Streaming:</strong> When streaming to YouTube, you agree to strictly comply with the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] underline font-bold hover:text-red-400">YouTube Terms of Service <ExternalLink size={12} className="inline" /></a> and <a href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/" target="_blank" rel="noopener noreferrer" className="text-[#C1121F] underline font-bold hover:text-red-400">YouTube Community Guidelines <ExternalLink size={12} className="inline" /></a>.
            </li>
            <li>
              <strong>Custom RTMP Streaming:</strong> When broadcasting via Custom RTMP to destinations like Twitch, Kick, or Facebook Gaming, you agree to comply with the terms of service and community standards of those respective platforms.
            </li>
            <li>
              <strong>Copyright & Licensing:</strong> You represent and warrant that you own or possess all required licenses, rights, and permissions to broadcast any music, game footage, graphic overlays, logos, or copyrighted media included in your stream.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Prohibited Conduct & Software Misuse */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Ban size={20} className="text-red-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            3. Prohibited Conduct & Application Misuse
          </h3>
        </div>
        <p>
          You are strictly prohibited from engaging in any of the following activities while using NeCast:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Content Violations</span>
            <p className="text-slate-400">Broadcasting hate speech, illegal acts, non-consensual imagery, harassment, graphic violence, or infringing copyrighted music/gameplay.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Software Tampering</span>
            <p className="text-slate-400">Decompiling, reverse engineering, disassembling, modifying, or redistributing modified APK binaries of NeCast software.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">API & Network Abuse</span>
            <p className="text-slate-400">Attempting to bypass Google OAuth rate limits, spoof stream origin headers, or flood RTMP ingest servers with malicious packet bursts.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-1">
            <span className="font-bold text-red-400">Unauthorized Re-branding</span>
            <p className="text-slate-400">Wrapping NeCast software binaries into third-party adware, spyware, malware distributors, or unauthorized app stores.</p>
          </div>
        </div>
      </section>

      {/* 4. Google OAuth & Software License */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Radio size={20} className="text-amber-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            4. Google OAuth Usage & Custom RTMP License
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300">
          NeCast grants you a revocable, non-exclusive, non-transferable personal license to run the application on your personal Android devices.
        </p>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 text-xs">
          <p className="text-slate-300">
            <strong>Account Credential Security:</strong> You are responsible for maintaining the security of your device and OAuth authorization credentials. NeCast is not liable for unauthorized stream broadcasts initiated due to compromised user hardware, shared devices, or leaked RTMP stream keys.
          </p>
        </div>
      </section>

      {/* 5. Disclaimer of Warranties & Limitation of Liability */}
      <section className="space-y-3">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <AlertTriangle size={20} className="text-slate-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            5. Disclaimer of Warranties & Limitation of Liability
          </h3>
        </div>
        <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-3 text-xs text-slate-400 uppercase font-mono leading-relaxed">
          <p>
            NECAST IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR UNINTERRUPTED MOBILE STREAM UPTIME.
          </p>
          <p>
            IN NO EVENT SHALL NECAST, ITS DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF STREAM REVENUE, CHANNEL SUSPENSION OR TERMINATION BY YOUTUBE, DEVICE OVERHEATING, OR DATA DISRUPTION RESULTING FROM CELLULAR CARRIER DROPOUTS.
          </p>
        </div>
      </section>

      {/* 6. Revisions & Termination */}
      <section className="space-y-3 text-xs">
        <h4 className="font-bold text-white text-sm">6. Termination & Terms Revision</h4>
        <p className="text-slate-400">
          We reserve the right to suspend application support or access for accounts violating these Terms. We may update these Terms periodically. Continued use of NeCast following published revisions on <a href="https://necast.live" className="text-white underline font-semibold">necast.live</a> constitutes full acceptance of the updated Terms.
        </p>
      </section>

      {/* Contact Legal Team Box */}
      <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Mail size={20} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Legal & Compliance Desk</div>
            <div className="text-[11px] text-slate-400">Email: support@necast.live • Website: necast.live</div>
          </div>
        </div>
        <a
          href="mailto:support@necast.live?subject=NeCast%20Terms%20of%20Service%20Inquiry"
          className="px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-950/40"
        >
          Contact Legal Desk
        </a>
      </div>

    </div>
  );
};
