import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

// Verified Executive Leadership
const EXECUTIVE_LEADERSHIP = [
  {
    id: 'exec-1',
    name: 'Lakshay Kalra',
    role: 'Club Leader / President',
    initials: 'LK',
    division: 'Executive',
    code: 'EXEC_01',
    accent: '#FF6B35',
  },
  {
    id: 'exec-2',
    name: 'Jiya Arora',
    role: 'Vice-President',
    initials: 'JA',
    division: 'Executive',
    code: 'EXEC_02',
    accent: '#FF6B35',
  },
];

// Verified Domain Divisions
const TEAM_DIVISIONS = [
  {
    id: 'div-tech',
    title: 'Technical',
    code: '01 // TECHNICAL',
    accent: '#45D9E8',
    borderColor: 'border-[#45D9E8]',
    badgeBg: 'bg-[#45D9E8]/10 text-[#45D9E8] border-[#45D9E8]/30',
    description: 'Software development, technical workshop curricula, code repositories, and engineering mentorship.',
    members: [
      {
        name: 'Samanyu Thakur',
        role: 'Technical Head',
        initials: 'ST',
        node: 'TECH_01',
      },
      {
        name: 'Bhupinder Singh',
        role: 'Technical Head',
        initials: 'BS',
        node: 'TECH_02',
      },
    ],
  },
  {
    id: 'div-content',
    title: 'Content',
    code: '02 // CONTENT',
    accent: '#B8F34A',
    borderColor: 'border-[#B8F34A]',
    badgeBg: 'bg-[#B8F34A]/10 text-[#B8F34A] border-[#B8F34A]/30',
    description: 'Editorial guidelines, technical documentation, event communications, and publication frameworks.',
    members: [
      {
        name: 'Tamanna Kakkar',
        role: 'Content Head',
        initials: 'TK',
        node: 'CONT_01',
      },
      {
        name: 'Ayush Sharma',
        role: 'Content Head',
        initials: 'AS',
        node: 'CONT_02',
      },
    ],
  },
  {
    id: 'div-media',
    title: 'Media & Outreach',
    code: '03 // MEDIA_OUTREACH',
    accent: '#FF6B35',
    borderColor: 'border-[#FF6B35]',
    badgeBg: 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30',
    description: 'Social media management, visual identity assets, campus promotion campaigns, and community engagement.',
    members: [
      {
        name: 'Jashan Bhalla',
        role: 'Social Media Head',
        initials: 'JB',
        node: 'MED_01',
      },
      {
        name: 'Muskan Dhanda',
        role: 'Promotion Head',
        initials: 'MD',
        node: 'MED_02',
      },
    ],
  },
  {
    id: 'div-core',
    title: 'Core',
    code: '04 // CORE',
    accent: '#45D9E8',
    borderColor: 'border-[#45D9E8]',
    badgeBg: 'bg-[#45D9E8]/10 text-[#45D9E8] border-[#45D9E8]/30',
    description: 'Operational logistics, event coordination, member support, and cross-functional execution.',
    members: [
      {
        name: 'Divyana Garg',
        role: 'Core Member',
        initials: 'DG',
        node: 'CORE_01',
      },
      {
        name: 'Hunar Mehndiratta',
        role: 'Core Member',
        initials: 'HM',
        node: 'CORE_02',
      },
    ],
  },
];

export default function TeamPage() {
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
                <span>telemetry:~/c2c/team_directory</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">ROSTER: PUBLISHED</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // TEAM_DIRECTORY
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  The People Behind <span className="text-[#FF6B35]">The Builds</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Code2Chill is guided by student leaders, engineers, creators, and organizers at Chitkara University, operating under the mentorship of the Office of Student Life (OSL).
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Our team coordinates hands-on hackathons, technical workshops, open-source projects, and peer learning sessions across five functional divisions.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#45D9E8]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#B8F34A]">STATUS: PUBLISHED ROSTER</span>
                </div>
              </div>

              {/* Decorative Collaborative Peer Network SVG (Non-hierarchical mesh) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">COLLABORATIVE_MESH</span>
                    <span className="text-[#B8F34A]">ACTIVE</span>
                  </div>

                  <svg
                    className="w-full h-36"
                    viewBox="0 0 220 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Code2Chill collaborative peer network diagram"
                    role="img"
                  >
                    {/* Background grid */}
                    <line x1="15" y1="25" x2="205" y2="25" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="65" x2="205" y2="65" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="105" x2="205" y2="105" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Peer-to-peer ring traces (Non-hierarchical collaborative mesh) */}
                    <polygon
                      points="110,24 175,48 152,106 68,106 45,48"
                      stroke="#344044"
                      strokeWidth="1.2"
                      fill="none"
                    />

                    {/* Star mesh connections between divisions */}
                    <line x1="110" y1="24" x2="152" y2="106" stroke="#FF6B35" strokeWidth="0.7" strokeDasharray="3 3" />
                    <line x1="110" y1="24" x2="68" y2="106" stroke="#45D9E8" strokeWidth="0.7" strokeDasharray="3 3" />
                    <line x1="45" y1="48" x2="175" y2="48" stroke="#344044" strokeWidth="0.7" />

                    {/* Central Community Badge */}
                    <circle cx="110" cy="65" r="14" fill="#111619" stroke="#344044" strokeWidth="1.5" />
                    <text x="110" y="68" fill="#F1F3E9" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">C2C</text>

                    {/* 5 Division Nodes (Balanced circular arrangement) */}
                    {/* Executive */}
                    <circle cx="110" cy="24" r="10" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="110" y="27" fill="#FF6B35" fontSize="6.5" fontFamily="monospace" textAnchor="middle">EXEC</text>

                    {/* Media & Outreach */}
                    <circle cx="175" cy="48" r="10" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="175" y="51" fill="#FF6B35" fontSize="6.5" fontFamily="monospace" textAnchor="middle">MED</text>

                    {/* Core */}
                    <circle cx="152" cy="106" r="10" fill="#111619" stroke="#45D9E8" strokeWidth="1.5" />
                    <text x="152" y="109" fill="#45D9E8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">CORE</text>

                    {/* Content */}
                    <circle cx="68" cy="106" r="10" fill="#111619" stroke="#B8F34A" strokeWidth="1.5" />
                    <text x="68" y="109" fill="#B8F34A" fontSize="6.5" fontFamily="monospace" textAnchor="middle">CONT</text>

                    {/* Technical */}
                    <circle cx="45" cy="48" r="10" fill="#111619" stroke="#45D9E8" strokeWidth="1.5" />
                    <text x="45" y="51" fill="#45D9E8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">TECH</text>

                    {/* 10 Member Satellite Markers (2 per division node) */}
                    <circle cx="102" cy="12" r="2" fill="#FF6B35" />
                    <circle cx="118" cy="12" r="2" fill="#FF6B35" />

                    <circle cx="187" cy="43" r="2" fill="#FF6B35" />
                    <circle cx="187" cy="53" r="2" fill="#FF6B35" />

                    <circle cx="160" cy="116" r="2" fill="#45D9E8" />
                    <circle cx="144" cy="116" r="2" fill="#45D9E8" />

                    <circle cx="76" cy="116" r="2" fill="#B8F34A" />
                    <circle cx="60" cy="116" r="2" fill="#B8F34A" />

                    <circle cx="33" cy="43" r="2" fill="#45D9E8" />
                    <circle cx="33" cy="53" r="2" fill="#45D9E8" />
                  </svg>

                  <div className="pt-2 border-t border-[#344044] flex justify-between text-[11px] text-[#A5B0AA]">
                    <span>MEMBERS: 10 LISTED</span>
                    <span className="text-[#45D9E8]">DIVISIONS: 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: EXECUTIVE LEADERSHIP */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider block">
                  // GOVERNANCE & STRATEGY
                </span>
                <SectionHeading className="!mb-0">
                  Executive Leadership
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                AFFILIATION: CHITKARA UNIVERSITY (OSL)
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Guiding club vision, institutional coordination with the Office of Student Life, and community direction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {EXECUTIVE_LEADERSHIP.map((leader) => (
                <div
                  key={leader.id}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 space-y-5 hover:border-[#FF6B35] transition-all group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF6B35]/40 group-hover:bg-[#FF6B35] transition-colors"></div>

                  <div className="flex items-center justify-between border-b border-[#344044] pb-4">
                    <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-0.5 rounded border border-[#FF6B35]/30">
                      {leader.code} // LEADERSHIP
                    </span>
                    <span className="font-mono text-xs text-[#B8F34A] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B8F34A]"></span>
                      DOCUMENTED_RECORD
                    </span>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Initials Avatar Badge */}
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-[#1A2224] border-2 border-[#FF6B35]/60 group-hover:border-[#FF6B35] flex items-center justify-center font-['Barlow Condensed'] font-bold text-2xl sm:text-3xl text-[#FF6B35] shadow-inner transition-colors">
                      {leader.initials}
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide truncate group-hover:text-[#FF6B35] transition-colors">
                        {leader.name}
                      </h3>
                      <div className="text-sm sm:text-base font-semibold text-[#FF6B35]">
                        {leader.role}
                      </div>
                      <div className="text-xs font-mono text-[#A5B0AA]">
                        AFFILIATION: Chitkara University
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#344044] flex flex-wrap items-center justify-between text-xs font-mono text-[#A5B0AA]/80 gap-2">
                    <span>DIVISION: {leader.division.toUpperCase()}</span>
                    <span className="text-[#45D9E8]">OFFICIAL ROLE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: DOMAIN DIVISIONS */}
      <section>
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // FUNCTIONAL_DIVISIONS
                </span>
                <SectionHeading className="!mb-0">
                  Domain Divisions
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                ROSTER: 8 DOCUMENTED LEADS & MEMBERS
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Domain heads and core organizers drive our technical workshops, documentation frameworks, public relations, and event logistics.
            </p>

            <div className="space-y-8">
              {TEAM_DIVISIONS.map((division) => (
                <div
                  key={division.id}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
                    <div className="space-y-1">
                      <span className={`font-mono text-xs px-2 py-0.5 rounded border inline-block ${division.badgeBg}`}>
                        {division.code}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                        {division.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A5B0AA] max-w-md">
                      {division.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {division.members.map((member) => (
                      <div
                        key={member.name}
                        className="rounded border border-[#344044] bg-[#1A2224] p-5 space-y-4 hover:border-[#45D9E8] transition-colors group"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-[#A5B0AA]">
                          <span className="text-[#B8F34A]">{member.node}</span>
                          <span>STATUS: DOCUMENTED</span>
                        </div>

                        <div className="flex items-center gap-4">
                          {/* Initials Avatar */}
                          <div
                            className="w-12 h-12 rounded bg-[#111619] border flex items-center justify-center font-['Barlow Condensed'] font-bold text-lg transition-colors"
                            style={{ borderColor: division.accent, color: division.accent }}
                          >
                            {member.initials}
                          </div>

                          <div className="space-y-0.5 min-w-0 flex-1">
                            <h4 className="text-lg sm:text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase truncate group-hover:text-[#45D9E8] transition-colors">
                              {member.name}
                            </h4>
                            <div
                              className="text-xs sm:text-sm font-semibold truncate"
                              style={{ color: division.accent }}
                            >
                              {member.role}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#344044]/60 flex items-center justify-between text-[11px] font-mono text-[#A5B0AA]/80">
                          <span>DIVISION: {division.title.toUpperCase()}</span>
                          <span className="text-[#F1F3E9]">CHITKARA UNIVERSITY</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: COMMUNITY & JOIN CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-3 py-1 rounded bg-[#FF6B35]/10">
              COMMUNITY // COLLABORATION
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                Want to Build With Code2Chill?
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                Code2Chill is an open, student-led technical community. Whether your focus is software development, hardware experiments, technical writing, or organizing campus events, we invite you to be part of the journey.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Apply to Join →
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                About Code2Chill →
              </Link>
            </div>

            <div className="pt-4 text-xs font-mono text-[#A5B0AA]/80 flex flex-wrap justify-center items-center gap-4">
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
              <span>•</span>
              <span className="text-[#A5B0AA]">Office of Student Life (OSL), Chitkara University</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
