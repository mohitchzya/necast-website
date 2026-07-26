import React, { useState } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, Smartphone, Sparkles, FileText, ArrowRight, Copy, Check } from 'lucide-react';
import { Logo } from './Logo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloading(true);
    setProgress(0);
    setDownloadComplete(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);
          return 100;
        }
        return prev + 12;
      });
    }, 200);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText('e9a4f21b8c039d5e12f80211a7b822d4');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#070B1E] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden glow-crimson">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex items-center gap-4">
            <Logo size="md" showText={false} />
            <div>
              <h3 className="text-xl font-extrabold text-white">Download NeCast APK</h3>
              <p className="text-xs text-slate-400">Official Android Release • v2.4.1 ARM64</p>
            </div>
          </div>

          {/* Version Specs */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>File Name</span>
              <span className="font-mono font-bold text-white">NeCast_v2.4.1_release.apk</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>File Size</span>
              <span className="font-mono text-emerald-400 font-bold">28.4 MB</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Min Requirement</span>
              <span className="font-mono text-white">Android 8.0+ (ARM64-v8a)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Security Check</span>
              <span className="font-mono text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck size={12} /> Passed Google Play Protect
              </span>
            </div>
          </div>

          {/* Download Action or Progress */}
          {!downloadComplete ? (
            <div className="space-y-3">
              {downloading ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 animate-pulse">Downloading payload...</span>
                    <span className="text-red-400 font-bold">{progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleStartDownload}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950 transition-all cursor-pointer"
                >
                  <Download size={18} />
                  <span>Start Direct APK Download</span>
                </button>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-2">
              <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">Download Completed!</h4>
              <p className="text-xs text-slate-300">
                NeCast_v2.4.1_release.apk has been saved to your downloads folder.
              </p>
            </div>
          )}

          {/* Installation Instructions */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText size={14} className="text-blue-400" /> Quick Install Guide
            </h4>
            <ol className="text-xs text-slate-300 space-y-1.5 list-decimal list-inside leading-relaxed font-sans">
              <li>Open your downloaded <code className="text-red-400 bg-slate-900 px-1.5 py-0.5 rounded">.apk</code> file.</li>
              <li>When prompted by Android, tap <strong>Settings</strong> and enable <em>"Allow from this source"</em>.</li>
              <li>Tap <strong>Install</strong> and open NeCast to launch your first stream!</li>
            </ol>
          </div>

          {/* MD5 Hash verification */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono">MD5: e9a4f21b8c039d5e...</span>
            <button
              onClick={handleCopyHash}
              className="text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
