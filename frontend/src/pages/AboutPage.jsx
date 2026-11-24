import React from 'react';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 border border-[#344044] rounded-lg bg-[#111619] p-8 text-center space-y-4">
        <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2 py-1 rounded bg-[#FF6B35]/10">
          // ROUTE: /about (ABOUT)
        </div>
        <SectionHeading>About Code2Chill</SectionHeading>
        <p className="text-sm text-[#A5B0AA] max-w-md mx-auto">
          Temporary placeholder. Full About page content scheduled for Phase 6.1.
        </p>
      </div>
    </Container>
  );
}
