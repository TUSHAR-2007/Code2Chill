import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function EventsPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-4 pb-2">
        <Container>
          <div className="border border-[#344044] rounded-lg bg-[#111619] p-6 sm:p-8 md:p-12 relative">
            {/* Top telemetry status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4 mb-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A5B0AA]">
                <span className="h-2 w-2 rounded-full bg-[#B8F34A] animate-pulse"></span>
                <span>telemetry:~/c2c/events_catalog</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">MODE: ARCHIVE_VIEW</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // EVENT_ARCHIVE
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  Where Ideas <span className="text-[#FF6B35]">Go Live</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  A space for technical exploration, collaboration, creativity and shared learning. From deep-dive coding sessions to interactive project showcases, Code2Chill events bring technical concepts into active reality.
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Explore verified historical events from our club archives below. All new sessions, build sprints, and community gatherings are announced in coordination with Chitkara University's Office of Student Life.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#45D9E8]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#B8F34A]">RECORDS: VERIFIED</span>
                </div>
              </div>

              {/* Decorative technical radar SVG */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">SIGNAL_RADAR_SCAN</span>
                    <span className="text-[#45D9E8]">SWEEP: 360°</span>
                  </div>

                  <svg
                    className="w-full h-32"
                    viewBox="0 0 160 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Event signal radar display"
                    role="img"
                  >
                    {/* Concentric Radar Rings */}
                    <circle cx="80" cy="60" r="50" stroke="#344044" strokeWidth="0.8" />
                    <circle cx="80" cy="60" r="35" stroke="#344044" strokeWidth="0.8" strokeDasharray="2 2" />
                    <circle cx="80" cy="60" r="20" stroke="#344044" strokeWidth="0.8" />
                    <circle cx="80" cy="60" r="5" fill="#FF6B35" />

                    {/* Crosshairs */}
                    <line x1="80" y1="5" x2="80" y2="115" stroke="#344044" strokeWidth="0.8" />
                    <line x1="25" y1="60" x2="135" y2="60" stroke="#344044" strokeWidth="0.8" />

                    {/* Radar Sweep Line */}
                    <line x1="80" y1="60" x2="115" y2="25" stroke="#45D9E8" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Historical event blips */}
                    <circle cx="105" cy="40" r="3" fill="#B8F34A" />
                    <circle cx="55" cy="75" r="3" fill="#FF6B35" />
                  </svg>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#A5B0AA] pt-1 border-t border-[#344044]">
                    <div>RADAR: <span className="text-[#B8F34A]">MONITORING</span></div>
                    <div>FEED: <span className="text-[#45D9E8]">ACTIVE</span></div>
                    <div>ARCHIVE: <span className="text-[#FF6B35]">2 ENTRIES</span></div>
                    <div>TARGET: <span className="text-[#F1F3E9]">CAMPUS</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: UPCOMING EVENTS */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider">
              // SCHEDULED_ACTIVITIES
            </div>
            <SectionHeading>Upcoming Events</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Future sessions, technical workshops, and club activities organized by Code2Chill.
            </p>
          </div>

          {/* Neutral Empty State */}
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full border border-[#344044] bg-[#1A2224] flex items-center justify-center text-[#45D9E8]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="inline-block font-mono text-xs text-[#A5B0AA] border border-[#344044] px-2.5 py-1 rounded bg-[#1A2224]">
              STATUS // STANDBY
            </div>

            <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Nothing scheduled right now.
            </h3>

            <p className="text-sm text-[#A5B0AA] max-w-md mx-auto leading-relaxed">
              New events and opportunities will appear here as they are officially announced in coordination with the Office of Student Life.
            </p>

            <div className="pt-2 text-xs font-mono text-[#A5B0AA]/80">
              Stay updated via official channels: <a href="https://www.instagram.com/code2chill.osl" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">@code2chill.osl ↗</a>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 & 4: PAST EVENTS / ARCHIVE & EVENT INFORMATION */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider">
              // HISTORICAL_CATALOGUE
            </div>
            <SectionHeading>Past Events & Archive</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Confirmed event titles from Code2Chill history. Detailed retrospectives, workshop notes, and code repositories are added as archives are compiled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event 1: DOMination */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-5 hover:border-[#FF6B35] transition-colors relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                  <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-0.5 rounded border border-[#FF6B35]/30">
                    ARCHIVE // EVT_001
                  </span>
                  <span className="font-mono text-xs text-[#A5B0AA]">STATUS: ARCHIVED</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    DOMination
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Event archive documentation and retrospective details are currently being compiled.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#344044] space-y-2 text-xs font-mono text-[#A5B0AA]">
                <div className="flex justify-between items-center">
                  <span>RECORD: <span className="text-[#F1F3E9]">HISTORICAL</span></span>
                  <span className="text-[#45D9E8]">VERIFIED_TITLE</span>
                </div>
                <div className="text-[11px] text-[#A5B0AA]/70">
                  AFFILIATION: Chitkara University (OSL)
                </div>
              </div>
            </div>

            {/* Event 2: Byte The Vibe */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-5 hover:border-[#45D9E8] transition-colors relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                  <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2.5 py-0.5 rounded border border-[#45D9E8]/30">
                    ARCHIVE // EVT_002
                  </span>
                  <span className="font-mono text-xs text-[#A5B0AA]">STATUS: ARCHIVED</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    Byte The Vibe
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Event archive documentation and retrospective details are currently being compiled.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#344044] space-y-2 text-xs font-mono text-[#A5B0AA]">
                <div className="flex justify-between items-center">
                  <span>RECORD: <span className="text-[#F1F3E9]">HISTORICAL</span></span>
                  <span className="text-[#B8F34A]">VERIFIED_TITLE</span>
                </div>
                <div className="text-[11px] text-[#A5B0AA]/70">
                  AFFILIATION: Chitkara University (OSL)
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: COMMUNITY CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#B8F34A] border border-[#B8F34A]/40 px-2.5 py-1 rounded bg-[#B8F34A]/10 tracking-wider">
              // COLLABORATION_PATHWAY
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Your Next Build Starts Here.
            </h2>

            <p className="text-sm sm:text-base text-[#A5B0AA] max-w-xl mx-auto leading-relaxed">
              Have an idea for a project, want to contribute to future events, or ready to connect with fellow student developers? Membership and event participation are conducted through official Chitkara University Office of Student Life (OSL) recruitment cycles.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Join the Community →
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                About Code2Chill →
              </Link>
            </div>

            <div className="pt-4 text-xs font-mono text-[#A5B0AA]/80 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/code2chill.osl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#45D9E8] transition-colors focus:outline-none focus-visible:underline"
              >
                Instagram: @code2chill.osl ↗
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/company/code2chill"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#45D9E8] transition-colors focus:outline-none focus-visible:underline"
              >
                LinkedIn: Code2Chill ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
