import React, { useState } from 'react';
import { 
  Trash2, 
  ArrowLeft, 
  Share2, 
  Check, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Smartphone,
  Scale,
  Mail,
  Lock
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AccountDeletion } from '../components/AccountDeletion';

interface DeleteAccountPageProps {
  navigate: (path: string) => void;
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
  onOpenSupportModal?: (category?: string) => void;
}

export const DeleteAccountPage: React.FC<DeleteAccountPageProps> = ({
  navigate,
  onOpenDownloadModal,
  onOpenPreviewModal,
  onOpenSupportModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C1121F] selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#C1121F]/15 via-red-950/20 to-transparent blur-3xl pointer-events-none" />

      {/* Main Header Navbar */}
      <Navbar
        onOpenDownloadModal={onOpenDownloadModal}
        onOpenPreviewModal={onOpenPreviewModal}
        onOpenSupportModal={onOpenSupportModal}
        navigate={navigate}
      />

      {/* Page Content */}
      <main className="flex-1 pt-28 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button
                onClick={() => navigate('/')}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-medium"
              >
                Home
              </button>
              <ChevronRight size={12} />
              <span className="text-slate-400">Legal &amp; Policy</span>
              <ChevronRight size={12} />
              <span className="text-white font-bold">Account Deletion</span>
            </div>

            {/* Back to Home Button */}
            <button
              onClick={() => navigate('/')}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Overview</span>
            </button>
          </div>

          {/* Hero Banner */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0A0E1A] to-[#050505] border border-slate-700/80 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C1121F]/15 blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#FF2A36] text-xs font-bold font-mono">
                  <ShieldCheck size={14} />
                  <span>Google Play Compliance • Account Deletion</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  How to Delete Your Connected Account
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Clear step-by-step instructions on removing connected platform accounts, revoking OAuth authorizations, and purging locally stored tokens from NeCast.
                </p>
              </div>

              {/* Action Switcher Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <button
                  onClick={() => navigate('/privacy')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Lock size={15} className="text-emerald-400" />
                  <span>Privacy Policy</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2.5 rounded-xl bg-[#C1121F] hover:bg-red-700 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-red-950/50"
                >
                  {copiedLink ? <Check size={15} /> : <Share2 size={15} />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Instructions'}</span>
                </button>
              </div>
            </div>

            {/* Compliance Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 relative z-10 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Platform</div>
                <div className="text-white font-bold font-mono">NeCast Android</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Policy Standard</div>
                <div className="text-emerald-400 font-bold">Google Play Compliant</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Deletion Method</div>
                <div className="text-white font-bold">In-App Self Service</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Support Email</div>
                <a href="mailto:support@necast.live" className="text-red-400 font-bold font-mono hover:underline">support@necast.live</a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Anchor Bar */}
          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-[#C1121F]" />
              <span>Quick Navigation:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#how-to-delete" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                6-Step Removal Guide
              </a>
              <a href="#what-gets-deleted" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                What Gets Deleted?
              </a>
              <a href="#important-notice" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Third-Party Accounts Notice
              </a>
              <a href="#support" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Contact Support
              </a>
            </div>
          </div>

          {/* Account Deletion Main Body Container */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 shadow-2xl">
            <AccountDeletion />
          </div>

          {/* Bottom Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#0A0A0A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white">Have questions about account deletion or OAuth tokens?</h3>
              <p className="text-xs text-slate-400">Reach out to our support desk anytime for personal assistance.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:support@necast.live?subject=Account%20Deletion%20Question"
                className="px-5 py-2.5 rounded-xl bg-[#C1121F] hover:bg-red-700 text-xs font-bold text-white transition-all shadow-lg shadow-red-950/40"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Main Footer */}
      <Footer
        onOpenDownloadModal={onOpenDownloadModal}
        onOpenLegalModal={(title, type) => {
          if (type === 'privacy') navigate('/privacy');
          else if (type === 'terms') navigate('/terms');
        }}
        onOpenSupportModal={onOpenSupportModal}
        navigate={navigate}
      />

    </div>
  );
};
