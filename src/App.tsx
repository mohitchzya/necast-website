import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntegrationsBar } from './components/IntegrationsBar';
import { HowItWorks } from './components/HowItWorks';
import { StreamCalculator } from './components/StreamCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HelpCenter } from './components/HelpCenter';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PreviewVideoModal } from './components/PreviewVideoModal';
import { LegalModal } from './components/LegalModal';
import { ContactSupportModal } from './components/ContactSupportModal';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [supportModalState, setSupportModalState] = useState<{
    isOpen: boolean;
    category: string;
  }>({
    isOpen: false,
    category: 'General Questions',
  });

  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    title: '',
    type: 'privacy',
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleOpenPreview = () => setPreviewModalOpen(true);

  const handleOpenSupport = (category: string = 'General Questions') => {
    setSupportModalState({
      isOpen: true,
      category,
    });
  };

  const handleOpenLegal = (title: string, type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      navigate('/privacy');
    } else {
      navigate('/terms');
    }
  };

  // Dedicated Route: /privacy
  if (currentPath === '/privacy' || currentPath === '/privacy/') {
    return (
      <>
        <PrivacyPage
          navigate={navigate}
          onOpenDownloadModal={handleOpenDownload}
          onOpenPreviewModal={handleOpenPreview}
          onOpenSupportModal={handleOpenSupport}
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
        <PreviewVideoModal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
        />
        <ContactSupportModal
          isOpen={supportModalState.isOpen}
          defaultCategory={supportModalState.category}
          onClose={() => setSupportModalState({ ...supportModalState, isOpen: false })}
        />
      </>
    );
  }

  // Dedicated Route: /terms
  if (currentPath === '/terms' || currentPath === '/terms/') {
    return (
      <>
        <TermsPage
          navigate={navigate}
          onOpenDownloadModal={handleOpenDownload}
          onOpenPreviewModal={handleOpenPreview}
          onOpenSupportModal={handleOpenSupport}
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
        <PreviewVideoModal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
        />
        <ContactSupportModal
          isOpen={supportModalState.isOpen}
          defaultCategory={supportModalState.category}
          onClose={() => setSupportModalState({ ...supportModalState, isOpen: false })}
        />
      </>
    );
  }

  // Dedicated Route: /deleteAccount
  const normalizedPath = currentPath.toLowerCase();
  if (normalizedPath === '/deleteaccount' || normalizedPath === '/deleteaccount/') {
    return (
      <>
        <DeleteAccountPage
          navigate={navigate}
          onOpenDownloadModal={handleOpenDownload}
          onOpenPreviewModal={handleOpenPreview}
          onOpenSupportModal={handleOpenSupport}
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
        <PreviewVideoModal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
        />
        <ContactSupportModal
          isOpen={supportModalState.isOpen}
          defaultCategory={supportModalState.category}
          onClose={() => setSupportModalState({ ...supportModalState, isOpen: false })}
        />
      </>
    );
  }

  // Default Homepage Route: /
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C1121F] selection:text-white relative overflow-hidden">
      {/* Particle & Ambient Glow Canvas */}
      <ParticleBackground />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar
          onOpenDownloadModal={handleOpenDownload}
          onOpenPreviewModal={handleOpenPreview}
          onOpenSupportModal={handleOpenSupport}
          navigate={navigate}
        />

        <main>
          <Hero
            onOpenDownloadModal={handleOpenDownload}
            onOpenPreviewModal={handleOpenPreview}
          />

          <IntegrationsBar />

          <StreamCalculator />

          <HowItWorks onOpenDownloadModal={handleOpenDownload} />

          <WhyChooseUs />

          <HelpCenter onOpenSupportModal={handleOpenSupport} />

          <CTASection
            onOpenDownloadModal={handleOpenDownload}
            onOpenPreviewModal={handleOpenPreview}
          />
        </main>

        <Footer
          onOpenDownloadModal={handleOpenDownload}
          onOpenLegalModal={handleOpenLegal}
          onOpenSupportModal={handleOpenSupport}
          navigate={navigate}
        />
      </div>

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <PreviewVideoModal
        isOpen={previewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
      />

      <ContactSupportModal
        isOpen={supportModalState.isOpen}
        defaultCategory={supportModalState.category}
        onClose={() => setSupportModalState({ ...supportModalState, isOpen: false })}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        title={legalModalState.title}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
      />
    </div>
  );
}
