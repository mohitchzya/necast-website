import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfService } from './TermsOfService';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  type: initialType,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialType);

  // Sync state if modal is reopened with new type
  React.useEffect(() => {
    setActiveTab(initialType);
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#070B1E] border border-slate-700/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0 gap-3">
          
          {/* Tab Switcher Buttons */}
          <div className="flex items-center gap-2 bg-[#0A0A0A] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-[#C1121F] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck size={14} />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale size={14} />
              <span>Terms of Service</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close legal modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with Custom Scrollbar */}
        <div className="flex-1 overflow-y-auto py-5 custom-scrollbar pr-1">
          {activeTab === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div>NeCast Legal & Security Desk • necast.live</div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
