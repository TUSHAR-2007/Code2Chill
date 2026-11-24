import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#344044] bg-[#090B0D] text-[#A5B0AA] text-sm mt-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-1.5 py-0.5 rounded tracking-wider bg-[#FF6B35]/10">
                C2C
              </span>
              <span className="text-lg font-bold tracking-tight text-[#F1F3E9]">
                Code<span className="text-[#FF6B35]">2</span>Chill
              </span>
            </div>
            <p className="text-xs font-mono text-[#FF6B35]">
              // Where Serious Code Meets Chill Vibes
            </p>
            <p className="text-xs text-[#A5B0AA] max-w-md leading-relaxed">
              The official student technical community under the Office of Student Life (OSL) at Chitkara University. Building software, exploring hardware, and fostering peer collaboration.
            </p>
            <div className="text-xs text-[#A5B0AA]/70 pt-1">
              Affiliation: <span className="text-[#F1F3E9]">Chitkara University — Office of Student Life</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F1F3E9]">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Official Links & System */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#F1F3E9]">
              Official Channels
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/code2chill.osl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A5B0AA] hover:text-[#45D9E8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded"
                >
                  <span className="text-[#FF6B35]">↗</span> Instagram (@code2chill.osl)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/code2chill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#A5B0AA] hover:text-[#45D9E8] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded"
                >
                  <span className="text-[#FF6B35]">↗</span> LinkedIn (Code2Chill)
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded"
                >
                  Contact Information
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="hover:text-[#B8F34A] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#45D9E8] rounded flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8F34A]"></span>
                  Backend Health / Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#344044] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A5B0AA]/70">
          <p>© {currentYear} Code2Chill (C2C). Chitkara University. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>NODE_ENV=production</span>
            <span className="text-[#45D9E8]">SYS_ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
