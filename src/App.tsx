import React, { useState } from 'react';
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

export default function App() {
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

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleOpenPreview = () => setPreviewModalOpen(true);

  const handleOpenSupport = (category: string = 'General Questions') => {
    setSupportModalState({
      isOpen: true,
      category,
    });
  };

  const handleOpenLegal = (title: string, type: 'privacy' | 'terms') => {
    setLegalModalState({
      isOpen: true,
      title,
      type,
    });
  };

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
