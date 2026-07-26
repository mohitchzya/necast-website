import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('free');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs = [
    {
      id: 'free',
      question: 'Is NeCast free?',
      answer: 'Yes! NeCast is free to download and use with 100% ad-free experience.',
    },
    {
      id: 'no-pc',
      question: 'Do I need a PC?',
      answer: 'No PC required! NeCast handles video encoding, overlay composition, and RTMP streaming natively on your Android device.',
    },
    {
      id: 'custom-rtmp',
      question: 'Does NeCast support Custom RTMP?',
      answer: 'Yes, you can stream directly to YouTube Live via Google OAuth2 sync, or to any Custom RTMP server using your Server URL and Stream Key.',
    },
    {
      id: 'quality',
      question: 'What maximum streaming quality is supported?',
      answer: 'NeCast supports up to 1440p (2K Ultra HD) at 60 FPS with hardware-accelerated encoding.',
    },
    {
      id: 'google-login',
      question: 'Is Google Sign-In secure?',
      answer: 'Yes, NeCast uses official Google OAuth 2.0 protocol so your credentials remain strictly secure and encrypted.',
    },
    {
      id: 'gameplay-customization',
      question: 'Can I customize my gameplay screen?',
      answer: 'Absolutely! The Overlay Editor gives you complete control over gameplay positioning, scale, aspect ratio, opacity, brightness, contrast, gamma, sharpness, and layering.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative z-10 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-white/10 text-xs font-bold text-[#C1121F] uppercase tracking-widest">
            <Sparkles size={12} />
            Support Center
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#B8B8B8] text-base">
            Everything you need to know about NeCast mobile streaming.
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C1121F]/50 transition-colors"
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0A0A0A] border border-white/10 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base cursor-pointer hover:text-[#C1121F] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#C1121F] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#C1121F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#B8B8B8] text-xs sm:text-sm leading-relaxed border-t border-white/5 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs">
              No questions found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
