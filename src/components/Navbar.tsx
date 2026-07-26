import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Radio, Sparkles, Smartphone, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadModal,
  onOpenPreviewModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-glass shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <Logo size="md" showText={true} />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Watch Preview + Download Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPreviewModal}
            className="px-4 py-2 text-xs font-bold text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Radio size={14} className="text-red-500 animate-pulse" />
            Watch Preview
          </button>

          <button
            onClick={onOpenDownloadModal}
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold text-white flex items-center gap-2 cursor-pointer transition-all"
          >
            <Download size={14} />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenDownloadModal}
            className="p-2 bg-red-600 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-lg shadow-red-950"
          >
            <Download size={16} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-slate-900 text-slate-300 hover:text-white rounded-xl border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight size={14} className="text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreviewModal();
              }}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Radio size={14} className="text-red-500 animate-pulse" />
              Watch Interactive Preview
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950"
            >
              <Download size={16} />
              Download NeCast for Android
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
