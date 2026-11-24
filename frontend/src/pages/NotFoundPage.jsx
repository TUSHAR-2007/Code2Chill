import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function NotFoundPage() {
  return (
    <Container>
      <div className="py-16 border border-[#344044] rounded-lg bg-[#111619] p-8 text-center space-y-5">
        <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10">
          // ERROR 404: ROUTE_NOT_FOUND
        </div>
        <SectionHeading>404 — Page Not Found</SectionHeading>
        <p className="text-sm text-[#A5B0AA] max-w-md mx-auto">
          The requested system pathway does not exist or has been relocated.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </Container>
  );
}
