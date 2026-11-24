import React from 'react';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function HomePage() {
  return (
    <Container>
      <div className="py-12 border border-[#344044] rounded-lg bg-[#111619] p-8 text-center space-y-4">
        <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2 py-1 rounded bg-[#FF6B35]/10">
          // ROUTE: / (HOME)
        </div>
        <SectionHeading>Code2Chill</SectionHeading>
        <p className="text-lg text-[#F1F3E9] max-w-xl mx-auto">
          Where Serious Code Meets Chill Vibes
        </p>
        <p className="text-sm text-[#A5B0AA] max-w-md mx-auto">
          Official student technical club at Chitkara University. Homepage content and feature showcases will be integrated in upcoming phases.
        </p>
      </div>
    </Container>
  );
}
