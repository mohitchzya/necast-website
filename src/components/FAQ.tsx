import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Search } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('free');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs: FAQItem[] = [
    {
      id: 'free',
      question: 'Is NeCast free to download and use?',
      answer: 'Yes! NeCast is 100% free with zero hidden subscription paywalls or watermarks. Creators can connect their YouTube accounts and stream unlimited hours in full 1080p 60FPS without paying a cent.',
      category: 'General',
    },
    {
      id: 'no-pc',
      question: 'Do I need a PC, laptop, or capture card?',
      answer: 'No, absolutely not. NeCast runs entirely natively on your Android phone. It captures internal game audio, microphone input, and front camera overlay directly through Android hardware encoders.',
      category: 'Requirements',
    },
    {
      id: 'google-secure',
      question: 'Is the Google login safe and secure?',
      answer: 'Yes. NeCast uses official Google OAuth 2.0 web authentication. We never see or store your Google password. Authorization tokens stay encrypted on your device inside Android KeyStore.',
      category: 'Security',
    },
    {
      id: 'more-platforms',
      question: 'Will more platforms like Twitch or Kick be added?',
      answer: 'Yes! While YouTube Live is supported right now, Twitch, Kick.com, TikTok Live, and multi-streaming engines are currently under active development and scheduled for upcoming v2.5 releases.',
      category: 'Roadmap',
    },
    {
      id: 'custom-rtmp',
      question: 'Does NeCast support custom RTMP / RTMPS stream keys?',
      answer: 'Custom RTMP streaming is currently available in beta for registered creators and will be enabled for all users in the upcoming release, allowing you to stream to any self-hosted server or custom CDN.',
      category: 'Features',
    },
    {
      id: 'android-version',
      question: 'What Android versions and hardware are supported?',
      answer: 'NeCast supports Android 8.0 (Oreo) and above. For optimal 1080p 60FPS gaming broadcasts, we recommend devices with Snapdragon 7/8 series, MediaTek Dimensity 8000+, or equivalent chipsets with hardware HEVC support.',
      category: 'Requirements',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400 uppercase tracking-widest">
            <Sparkles size={12} />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base">
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
              className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 transition-colors"
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
                className="rounded-2xl glass-card transition-all overflow-hidden border-slate-800"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base cursor-pointer hover:text-red-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-red-500 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 font-sans">
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
