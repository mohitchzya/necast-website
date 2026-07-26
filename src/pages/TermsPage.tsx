import React, { useState } from 'react';
import { 
  Scale, 
  ArrowLeft, 
  Share2, 
  Check, 
  ShieldCheck, 
  AlertTriangle,
  ChevronRight,
  Sparkles,
  Mail,
  Ban,
  FileText,
  CheckCircle2,
  Radio
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TermsOfService } from '../components/TermsOfService';

interface TermsPageProps {
  navigate: (path: string) => void;
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
  onOpenSupportModal?: (category?: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-900/20 via-[#C1121F]/10 to-transparent blur-3xl pointer-events-none" />

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
              <span className="text-slate-400">Legal</span>
              <ChevronRight size={12} />
              <span className="text-white font-bold">Terms of Service</span>
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-bold font-mono">
                  <Scale size={14} />
                  <span>Official Legal Agreement • NeCast Live</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Terms of Service & Usage Policy
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Legal terms governing application usage, independent software non-affiliation disclaimer, user streaming responsibilities, YouTube Data API compliance, and limitation of liability.
                </p>
              </div>

              {/* Action Switcher Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <button
                  onClick={() => navigate('/privacy')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShieldCheck size={15} className="text-[#C1121F]" />
                  <span>View Privacy Policy</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-950/50"
                >
                  {copiedLink ? <Check size={15} /> : <Share2 size={15} />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Terms'}</span>
                </button>
              </div>
            </div>

            {/* Document Details Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 relative z-10 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Last Revised</div>
                <div className="text-white font-bold font-mono">July 26, 2026</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Document ID</div>
                <div className="text-white font-bold font-mono">NC-TOS-2026-V1</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">YouTube Affiliation</div>
                <div className="text-amber-400 font-bold">Independent Software</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="text-slate-400 text-[11px]">Age Limit</div>
                <div className="text-emerald-400 font-bold">13+ / Legal Consent</div>
              </div>
            </div>
          </div>

          {/* Quick Section Highlights Bar */}
          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              <span>Key Terms Sections:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#disclaimer" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Non-Affiliation Disclaimer
              </a>
              <a href="#eligibility" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Eligibility
              </a>
              <a href="#youtube-terms" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                YouTube Compliance
              </a>
              <a href="#prohibited" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Prohibited Conduct
              </a>
              <a href="#liability" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors">
                Limitation of Liability
              </a>
            </div>
          </div>

          {/* Terms Document Main Body Container */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#080808] border border-white/10 shadow-2xl">
            <TermsOfService />
          </div>

          {/* Bottom Help Desk Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#0A0A0A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-white">Questions regarding copyright or Terms of Service?</h3>
              <p className="text-xs text-slate-400">Contact our legal & compliance desk directly for enquiries.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:support@necast.live?subject=Terms%20of%20Service%20Query"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-lg shadow-blue-950/40"
              >
                Contact Legal Desk
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
