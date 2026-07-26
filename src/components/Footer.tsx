import React from 'react';
import { Download, Mail, Globe } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onOpenLegalModal: (title: string, type: 'privacy' | 'terms') => void;
  onOpenSupportModal?: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownloadModal,
  onOpenLegalModal,
  onOpenSupportModal,
}) => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-slate-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showText={true} />
            <p className="text-xs sm:text-sm text-[#B8B8B8] max-w-sm leading-relaxed">
              NeCast is the premier Android mobile streaming application engineered for creators to broadcast in 1440p 60FPS quality up to 16,000 kbps bitrate directly to YouTube Studio or custom RTMP without a PC.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#C1121F]" />
                <span className="font-semibold">Official Website:</span>
                <a href="https://necast.live" className="text-white hover:text-[#C1121F] transition-colors">necast.live</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#C1121F]" />
                <span className="font-semibold">Support Email:</span>
                <a href="mailto:support@necast.live" className="text-white hover:text-[#C1121F] transition-colors">support@necast.live</a>
              </div>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Bitrate & Quality Calculator</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose NeCast</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#help-center" className="hover:text-white transition-colors">Help Center & Docs</a>
              </li>
              <li>
                <button
                  onClick={() => onOpenSupportModal && onOpenSupportModal('General Questions')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Support Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('Privacy Policy', 'privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('Terms of Service', 'terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Download */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span>Download Studio</span>
              <span className="text-[10px] bg-red-950/80 border border-red-800 text-red-400 px-2 py-0.5 rounded-full font-mono font-normal lowercase">coming soon</span>
            </h4>
            <p className="text-xs text-[#B8B8B8]">
              NeCast is launching soon for Android. Pre-register to get notified when the official APK releases.
            </p>
            <button
              onClick={onOpenDownloadModal}
              className="w-full py-2.5 px-4 rounded-xl bg-[#C1121F] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 cursor-pointer active:scale-95 transition-all"
            >
              <Download size={14} />
              <span>Download (Coming Soon)</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} NeCast. Stream Anywhere. Create Everywhere. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal('Privacy Policy', 'privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('Terms of Service', 'terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
