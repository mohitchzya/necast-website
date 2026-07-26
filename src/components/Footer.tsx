import React from 'react';
import { Download, ShieldCheck, Heart, Github, Twitter, Youtube, MessageCircle, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onOpenLegalModal: (title: string, type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownloadModal,
  onOpenLegalModal,
}) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#030510] text-slate-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showText={true} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              NeCast is the premier Android mobile streaming application engineered for creators to broadcast 1080p 60FPS gaming directly to YouTube Studio without a PC.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 transition-colors"
                aria-label="Discord Community"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-white transition-colors">Screenshots</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Stream Calculator</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">Roadmap & Voting</a>
              </li>
              <li>
                <button
                  onClick={onOpenDownloadModal}
                  className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  Download APK <ExternalLink size={10} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">Installation Guide</a>
              </li>
              <li>
                <a href="mailto:support@necast.app" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Systems Operational
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs font-medium">
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
              <li>
                <span className="text-slate-500 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  Google OAuth Certified
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NeCast Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart size={12} className="text-red-500 fill-red-500" /> for Android Streamers worldwide.
          </p>
        </div>

      </div>
    </footer>
  );
};
