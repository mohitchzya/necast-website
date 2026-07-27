import React from 'react';
import { 
  Trash2, 
  Smartphone, 
  Settings, 
  Layers, 
  LogOut, 
  CheckCircle2, 
  ShieldAlert, 
  Info, 
  Mail, 
  Key, 
  Database, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export const AccountDeletion: React.FC = () => {
  return (
    <div className="space-y-8 text-[#D1D5DB] leading-relaxed font-sans text-xs sm:text-sm">
      
      {/* Overview Banner */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#0F172A] border border-slate-700/80 space-y-3 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="p-3 rounded-xl bg-[#C1121F]/20 text-[#C1121F] border border-[#C1121F]/30 shrink-0">
            <Trash2 size={28} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              NeCast Account & Connected Platform Data Deletion
            </h2>
            <p className="text-[#B8B8B8] text-xs font-mono pt-0.5">
              Google Play Account Deletion Policy Compliant • Self-Service Removal
            </p>
          </div>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm pt-2 leading-relaxed relative z-10">
          NeCast provides content creators with full self-service control over their connected streaming platforms and accounts. Users can instantly and permanently remove their connected platform accounts (such as YouTube, Twitch, Facebook, or Custom RTMP configurations) directly within the NeCast Android app at any time without needing to contact support.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-400 relative z-10">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> Instant Self-Service Removal
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> Immediate Data Wipe
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" /> No Login Required for Instructions
          </span>
        </div>
      </div>

      {/* How to Delete Your Connected Account */}
      <section id="how-to-delete" className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Smartphone size={20} className="text-[#C1121F] shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            How to Delete Your Connected Account
          </h3>
        </div>
        <p className="text-slate-300">
          To remove a connected streaming account or OAuth authorization from NeCast, follow these simple steps directly inside the Android application:
        </p>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                01
              </span>
              <Smartphone size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">1. Open the NeCast app</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Launch the NeCast application on your Android device from your home screen or app drawer.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                02
              </span>
              <Settings size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">2. Tap Settings</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tap the gear / hexagonal Settings icon located in the top bar or navigation panel of the app.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                03
              </span>
              <Layers size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">3. Open Connected Platforms</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              In the Preferences menu, tap on the <strong className="text-white">Connected Platforms</strong> section to view your active streaming destinations.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                04
              </span>
              <Key size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">4. Select the connected platform</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Select the specific platform account (e.g., YouTube, Twitch, Facebook, or Custom RTMP) you wish to disconnect.
            </p>
          </div>

          {/* Step 5 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                05
              </span>
              <LogOut size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">5. Tap Remove Account</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tap the red <strong className="text-white">Remove Account</strong> or <strong className="text-white">Disconnect</strong> button on the platform details card.
            </p>
          </div>

          {/* Step 6 */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2 relative overflow-hidden group hover:border-[#C1121F]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-lg bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-mono font-bold flex items-center justify-center">
                06
              </span>
              <CheckCircle2 size={16} className="text-emerald-400" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">6. Confirm the removal</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Confirm your action in the prompt. NeCast will immediately purge all stored tokens and credentials for that platform.
            </p>
          </div>

        </div>
      </section>

      {/* What Gets Deleted? */}
      <section id="what-gets-deleted" className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <Database size={20} className="text-amber-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            What gets deleted?
          </h3>
        </div>
        <p className="text-slate-300">
          When you remove a connected account from NeCast, the application immediately triggers a comprehensive data purge from local hardware storage:
        </p>

        <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-4">
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <div className="p-1 rounded-md bg-red-950/60 text-[#FF2A36] shrink-0 mt-0.5">
                <Trash2 size={14} />
              </div>
              <div>
                <strong className="text-white">Locally Stored OAuth Access & Refresh Tokens:</strong> All encrypted access and refresh tokens stored inside the Android hardware KeyStore are permanently deleted.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="p-1 rounded-md bg-red-950/60 text-[#FF2A36] shrink-0 mt-0.5">
                <Trash2 size={14} />
              </div>
              <div>
                <strong className="text-white">Connected Platform Information:</strong> Profile headers, channel titles, channel IDs, user avatars, and authorization metadata associated with the connected account are completely wiped.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="p-1 rounded-md bg-red-950/60 text-[#FF2A36] shrink-0 mt-0.5">
                <Trash2 size={14} />
              </div>
              <div>
                <strong className="text-white">Stored Authentication Credentials:</strong> Stream keys, custom RTMP ingest URLs, broadcast configurations, and server secret parameters are erased immediately.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <div className="p-1 rounded-md bg-red-950/60 text-[#FF2A36] shrink-0 mt-0.5">
                <Trash2 size={14} />
              </div>
              <div>
                <strong className="text-white">Platform Connection Data:</strong> Cached stream preferences, bitrate targets, resolution templates, and platform pairing logs are deleted from device memory.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Important Notice */}
      <section id="important-notice" className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <AlertTriangle size={20} className="text-[#FF2A36] shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            Important Notice Regarding Third-Party Accounts
          </h3>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
          <div className="font-bold text-amber-400 flex items-center gap-2 text-sm sm:text-base">
            <Info size={18} />
            <span>Scope of Disconnection</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Removing a connected account <strong className="text-white">only disconnects it from NeCast</strong> and <strong className="text-white">does not delete</strong> your underlying Google Account, YouTube channel, Facebook account, Twitch account, or any other third-party account or content hosted on those external services.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Your videos, past live streams, subscribers, and channel settings on YouTube or other platforms remain completely unaffected. You can reconnect your account to NeCast at any time by signing in again through the secure OAuth sign-in workflow.
          </p>

          <div className="pt-2 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <span>Want to revoke Google OAuth permissions at the Google Account level?</span>
            <a 
              href="https://myaccount.google.com/permissions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-500/40 transition-colors"
            >
              <span>Google Security Permissions</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Alternative Deletion Method (App Uninstallation or System Storage Clear) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/10 pb-2.5">
          <RefreshCw size={20} className="text-blue-400 shrink-0" />
          <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
            Alternative Data Removal Methods
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              Clear Android Application Storage
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Navigate to Android <strong className="text-slate-200">Settings &gt; Apps &gt; NeCast &gt; Storage &amp; Cache &gt; Clear Storage</strong>. This will instantly reset the application to its default state and delete all connected account tokens.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C1121F]" />
              App Uninstallation
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Uninstalling NeCast automatically destroys the hardware-backed KeyStore keys on your device, ensuring no residual authentication tokens remain.
            </p>
          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section id="support" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#0A0E1A] to-[#0A0A0A] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-bold font-mono">
              <Mail size={14} />
              <span>Dedicated Support Desk</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Need help with account deletion or data privacy?</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              If you experience any issues disconnecting an account or have questions about data handling, our technical support team is available to assist you.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="mailto:support@necast.live?subject=Account%20Deletion%20Assistance"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C1121F] hover:bg-red-700 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-950/50 cursor-pointer"
            >
              <Mail size={16} />
              <span>support@necast.live</span>
            </a>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Official Support Email: <a href="mailto:support@necast.live" className="text-white hover:text-[#FF2A36] underline font-bold">support@necast.live</a></span>
          <span>Website: <a href="https://necast.live" className="text-white hover:text-[#FF2A36] underline">necast.live</a></span>
        </div>
      </section>

    </div>
  );
};
