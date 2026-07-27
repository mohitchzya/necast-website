import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Play } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenPreviewModal: () => void;
  onOpenSupportModal?: (category?: string) => void;
  navigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadModal,
  onOpenPreviewModal,
  onOpenSupportModal,
  navigate,
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
    { name: 'Setup Simulator', href: '#calculator' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why NeCast', href: '#why-us' },
    { name: 'Help Center', href: '#help-center' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigate) {
      navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      e.preventDefault();
      if (navigate) {
        navigate('/' + href);
      } else {
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
          <Logo size="md" showText={true} />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0A0A0A] backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded-full cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          {navigate && (
            <>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacy');
                }}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded-full cursor-pointer"
              >
                Privacy
              </a>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms');
                }}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded-full cursor-pointer"
              >
                Terms
              </a>
              <a
                href="/deleteAccount"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/deleteAccount');
                }}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors rounded-full cursor-pointer"
              >
                Delete Account
              </a>
            </>
          )}
        </nav>

        {/* Right Actions: Download Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPreviewModal}
            className="px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Play size={14} className="text-[#C1121F] fill-[#C1121F]" />
            <span>Watch Preview (Coming Soon)</span>
          </button>

          <button
            onClick={onOpenDownloadModal}
            className="btn-primary px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-red-950/40"
          >
            <Download size={14} />
            <span>Download (Coming Soon)</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenDownloadModal}
            className="p-2 bg-[#C1121F] text-white rounded-xl text-xs font-bold flex items-center justify-center shadow-lg shadow-red-950 cursor-pointer"
          >
            <Download size={16} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#0A0A0A] text-slate-300 hover:text-white rounded-xl border border-white/10 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavLinkClick(e, link.href);
              }}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          {navigate && (
            <>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/privacy');
                }}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/terms');
                }}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="/deleteAccount"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate('/deleteAccount');
                }}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                Account Deletion
              </a>
            </>
          )}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreviewModal();
              }}
              className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play size={14} className="text-[#C1121F] fill-[#C1121F]" />
              <span>Watch Preview (Coming Soon)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-2.5 rounded-xl bg-[#C1121F] text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              <span>Download (Coming Soon)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
