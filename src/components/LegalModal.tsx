import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#070B1E] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck size={22} className="text-emerald-400" />
            ) : (
              <FileText size={22} className="text-blue-400" />
            )}
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar font-sans">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: July 2026</strong>
              </p>
              <h4 className="text-sm font-bold text-white">1. Data Collection & Google OAuth</h4>
              <p>
                NeCast respects creator privacy. We utilize official Google OAuth 2.0 authentication strictly to connect your Android application to YouTube Studio APIs. We do not store, harvest, or sell your Google passwords, email address, or channel analytics.
              </p>
              <h4 className="text-sm font-bold text-white">2. Stream Keys & On-Device Security</h4>
              <p>
                All RTMP stream keys, tokens, and local preferences are encrypted directly on your Android device inside the hardware-backed Android KeyStore. Credentials never leave your device to any unauthorized third-party servers.
              </p>
              <h4 className="text-sm font-bold text-white">3. Audio & Screen Recording Permissions</h4>
              <p>
                Audio and screen recording permissions are used exclusively to encode and stream your gameplay. NeCast does not record or store offline media without your explicit broadcast command.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: July 2026</strong>
              </p>
              <h4 className="text-sm font-bold text-white">1. Acceptable Use Policy</h4>
              <p>
                NeCast is provided for mobile game streaming, IRL vlogging, and educational broadcasts. Users are solely responsible for ensuring their content complies with YouTube Community Guidelines and copyright laws.
              </p>
              <h4 className="text-sm font-bold text-white">2. License & Availability</h4>
              <p>
                NeCast is distributed free of charge. You may install and use the application on personal Android devices. Reverse engineering or re-distributing modified APK binaries under malware wraps is strictly prohibited.
              </p>
              <h4 className="text-sm font-bold text-white">3. Disclaimer of Warranties</h4>
              <p>
                NeCast is provided "as is" without warranties of uninterrupted broadcast uptime during network degradation or cellular dropouts.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
