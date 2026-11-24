import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Join', path: '/join' },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#344044] bg-[#090B0D]/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8] rounded px-1"
            aria-label="Code2Chill Home"
          >
            <span className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-1.5 py-0.5 rounded tracking-wider bg-[#FF6B35]/10">
              C2C
            </span>
            <span className="text-xl font-bold tracking-tight text-[#F1F3E9] group-hover:text-[#FF6B35] transition-colors duration-200">
              Code<span className="text-[#FF6B35]">2</span>Chill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-medium rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8] ${
                    isActive
                      ? 'text-[#FF6B35] bg-[#1A2224] border border-[#FF6B35]/30'
                      : 'text-[#A5B0AA] hover:text-[#F1F3E9] hover:bg-[#111619]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {/* Status indicator link */}
            <Link
              to="/status"
              className="ml-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-[#344044] bg-[#111619] text-[#A5B0AA] hover:text-[#45D9E8] hover:border-[#45D9E8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              title="System Status"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8F34A] animate-pulse"></span>
              SYS:OK
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-[#A5B0AA] hover:text-[#F1F3E9] hover:bg-[#111619] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-[#344044] bg-[#111619] px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-base font-medium rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8] ${
                    isActive
                      ? 'text-[#FF6B35] bg-[#1A2224] border border-[#FF6B35]/40 font-semibold'
                      : 'text-[#A5B0AA] hover:text-[#F1F3E9] hover:bg-[#1A2224]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 mt-2 border-t border-[#344044] flex items-center justify-between text-xs text-[#A5B0AA] font-mono">
              <Link
                to="/status"
                className="flex items-center gap-1.5 py-1 px-2 rounded hover:text-[#45D9E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                <span className="h-2 w-2 rounded-full bg-[#B8F34A]"></span>
                Status: Operational
              </Link>
              <span className="text-[#A5B0AA]/60">v0.1.0</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
