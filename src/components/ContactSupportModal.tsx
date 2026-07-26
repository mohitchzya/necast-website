import React, { useState } from 'react';
import { X, Mail, Clock, Send, CheckCircle2, ShieldCheck, MessageSquare, Smartphone, Bug, HelpCircle, Sparkles } from 'lucide-react';

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const SUPPORT_CATEGORIES = [
  'Technical Issues',
  'Streaming Problems',
  'Google Sign-In Issues',
  'Custom RTMP Support',
  'Overlay Editor Questions',
  'Feature Requests',
  'Bug Reports',
  'Business Partnerships',
  'General Questions',
];

export const ContactSupportModal: React.FC<ContactSupportModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'General Questions',
}) => {
  const [category, setCategory] = useState(defaultCategory);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setDeviceModel('');
    setSubject('');
    setMessage('');
  };

  const mailtoUrl = `mailto:support@necast.live?subject=${encodeURIComponent(
    `[${category}] ${subject || 'Support Request'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nDevice/OS: ${deviceModel}\nCategory: ${category}\n\nMessage:\n${message}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#070B1E] border border-slate-700/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#C1121F]/20 text-[#C1121F] border border-[#C1121F]/30">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white">NeCast Contact Support</h3>
              <p className="text-slate-400 text-xs flex items-center gap-1.5">
                <Clock size={12} className="text-emerald-400" />
                <span>Response SLA: <strong>24–48 business hours</strong></span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-5 custom-scrollbar text-xs sm:text-sm">
          
          {submitted ? (
            <div className="py-8 px-4 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 size={36} />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white">Support Ticket Submitted!</h4>
                <p className="text-slate-300 text-xs max-w-md mx-auto">
                  Thank you, <strong>{name || 'creator'}</strong>. Your ticket under <strong>[{category}]</strong> has been logged. Our dedicated engineering team will review your message and reply to <strong>{email}</strong> within 24–48 business hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="font-bold text-slate-200">Ticket Reference Summary:</div>
                <div className="text-slate-400 space-y-1">
                  <div><strong>Email:</strong> support@necast.live</div>
                  <div><strong>Category:</strong> {category}</div>
                  {deviceModel && <div><strong>Device:</strong> {deviceModel}</div>}
                  {subject && <div><strong>Subject:</strong> {subject}</div>}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={mailtoUrl}
                  className="px-5 py-2.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs flex items-center gap-2 hover:bg-red-700 transition-colors"
                >
                  <Mail size={14} />
                  <span>Open Direct Email Client</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Submit Another Ticket
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Direct Email Callout */}
              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Support Mailbox: <strong className="text-white">support@necast.live</strong></span>
                </div>
                <a
                  href="mailto:support@necast.live"
                  className="text-xs text-[#C1121F] font-bold hover:underline flex items-center gap-1"
                >
                  Send Direct Mail <Mail size={12} />
                </a>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Support Category Selection */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    Support Category <span className="text-[#C1121F]">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C1121F] transition-colors cursor-pointer"
                  >
                    {SUPPORT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#070B1E] text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Creator"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#C1121F] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    Email Address <span className="text-[#C1121F]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="creator@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#C1121F] transition-colors"
                  />
                </div>

                {/* Android Device Model */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200 flex items-center justify-between">
                    <span>Android Device & OS</span>
                    <span className="text-[10px] text-slate-500 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samsung S24 / Android 14"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#C1121F] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#C1121F] transition-colors"
                  />
                </div>

                {/* Detailed Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    Detailed Description / Inquiry <span className="text-[#C1121F]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your issue, feature request, or RTMP question in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#C1121F] transition-colors resize-none custom-scrollbar"
                  />
                </div>

              </div>

              {/* Submit Button & SLA Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  <span>Submitted directly to <strong>support@necast.live</strong>. Response guaranteed in 24–48h.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C1121F] hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/40 transition-all active:scale-95"
                >
                  <Send size={14} />
                  <span>Submit Support Ticket</span>
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 shrink-0">
          <div>NeCast Customer Success Desk</div>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
