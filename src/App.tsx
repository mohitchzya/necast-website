import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntegrationsBar } from './components/IntegrationsBar';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { HowItWorks } from './components/HowItWorks';
import { StreamCalculator } from './components/StreamCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PreviewVideoModal } from './components/PreviewVideoModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
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

  const handleOpenLegal = (title: string, type: 'privacy' | 'terms') => {
    setLegalModalState({
      isOpen: true,
      title,
      type,
    });
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-red-600 selection:text-white relative overflow-hidden">
      {/* Particle & Ambient Glow Canvas */}
      <ParticleBackground />

      {/* Main Content Container */}
      <div className="relative z-10">
        <Navbar
          onOpenDownloadModal={handleOpenDownload}
          onOpenPreviewModal={handleOpenPreview}
        />

        <main>
          <Hero
            onOpenDownloadModal={handleOpenDownload}
            onOpenPreviewModal={handleOpenPreview}
          />

          <IntegrationsBar />

          <Features />

          <Screenshots />

          <HowItWorks onOpenDownloadModal={handleOpenDownload} />

          <StreamCalculator />

          <WhyChooseUs />

          <Roadmap />

          <FAQ />

          <CTASection
            onOpenDownloadModal={handleOpenDownload}
            onOpenPreviewModal={handleOpenPreview}
          />
        </main>

        <Footer
          onOpenDownloadModal={handleOpenDownload}
          onOpenLegalModal={handleOpenLegal}
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

      <LegalModal
        isOpen={legalModalState.isOpen}
        title={legalModalState.title}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
      />
    </div>
  );
}
