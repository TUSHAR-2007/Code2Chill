import React from 'react';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function StatusPage() {
  return (
    <Container>
      <div className="py-12 border border-[#344044] rounded-lg bg-[#111619] p-8 text-center space-y-4">
        <div className="inline-block font-mono text-xs text-[#B8F34A] border border-[#B8F34A]/40 px-2 py-1 rounded bg-[#B8F34A]/10">
          // ROUTE: /status (STATUS)
        </div>
        <SectionHeading>System Status</SectionHeading>
        <p className="text-sm text-[#A5B0AA] max-w-md mx-auto">
          Service status and backend PostgreSQL health telemetry.
        </p>
      </div>
    </Container>
  );
}
