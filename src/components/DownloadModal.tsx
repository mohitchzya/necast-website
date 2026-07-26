import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Smartphone, Sparkles, Mail, Bell, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
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
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-white">NeCast Studio</h3>
                <span className="bg-red-950/80 border border-red-800 text-red-400 px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold">Coming Soon</span>
              </div>
              <p className="text-xs text-slate-400">Official Android Streaming Application • Launching Soon</p>
            </div>
          </div>

          {/* Launch Specs Card */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Status</span>
              <span className="font-mono font-bold text-amber-400 flex items-center gap-1">
                <Sparkles size={12} /> Public Launch Coming Soon
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Target Platforms</span>
              <span className="font-mono text-white">Google Play & Direct APK</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Min Requirement</span>
              <span className="font-mono text-white">Android 8.0+ (ARM64-v8a)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Supported Services</span>
              <span className="font-mono text-emerald-400 font-bold">
                YouTube Live & Custom RTMP
              </span>
            </div>
          </div>

          {/* Pre-Register Action */}
          {!subscribed ? (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-red-950/30 to-slate-900/80 border border-red-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Bell size={16} className="text-[#C1121F]" />
                <span>Get Notified On Launch Day</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Be the first to download NeCast APK and start broadcasting in 1440p 60FPS as soon as we go public on Google Play.
              </p>
              <form onSubmit={handlePreRegister} className="flex gap-2 pt-1">
                <div className="relative flex-1">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C1121F]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C1121F] hover:bg-red-600 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors shrink-0 shadow-md shadow-red-950"
                >
                  <span>Notify Me</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800 text-center space-y-2">
              <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">Pre-Registration Confirmed!</h4>
              <p className="text-xs text-slate-300">
                Thank you! We've saved <span className="font-mono text-emerald-400">{email}</span>. We'll send you an instant download link as soon as NeCast is released.
              </p>
            </div>
          )}

          {/* Quick Info */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" /> Google Play Store Verification Pending
            </span>
            <span className="text-slate-500 font-mono">support@necast.live</span>
          </div>

        </div>

      </div>
    </div>
  );
};
