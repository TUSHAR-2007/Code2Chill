import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

// Community values and exploratory pillars
const COMMUNITY_VALUES = [
  {
    code: '01 // EXPERIMENTATION',
    title: 'Practical Exploration & Builds',
    accent: '#FF6B35',
    borderColor: 'border-[#FF6B35]',
    badgeBg: 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30',
    description:
      'Tackle practical software engineering, computer vision experiments, creative web apps, and hardware prototypes through self-directed curiosity.',
  },
  {
    code: '02 // PEER_NETWORK',
    title: 'Peer Learning & Collaboration',
    accent: '#45D9E8',
    borderColor: 'border-[#45D9E8]',
    badgeBg: 'bg-[#45D9E8]/10 text-[#45D9E8] border-[#45D9E8]/30',
    description:
      'Connect with fellow students across years and disciplines to exchange insights, review architectures, and solve challenging engineering problems together.',
  },
  {
    code: '03 // CAMPUS_INITIATIVES',
    title: 'Community Events & Sprints',
    accent: '#B8F34A',
    borderColor: 'border-[#B8F34A]',
    badgeBg: 'bg-[#B8F34A]/10 text-[#B8F34A] border-[#B8F34A]/30',
    description:
      'Participate in student-led hackathons, coding workshops, technical documentation sprints, and community showcases organized with OSL.',
  },
];

// Verified guidance for enrollment
const ENROLLMENT_STEPS = [
  {
    step: '01',
    code: 'DISCOVER // CHANNELS',
    title: 'Follow Official Announcements',
    description:
      'Recruitment notices, informational briefings, and orientation dates are published through official Code2Chill social channels and OSL bulletin boards.',
  },
  {
    step: '02',
    code: 'ALIGN // OSL_CYCLES',
    title: 'Watch for Enrollment Windows',
    description:
      'Membership enrollment is coordinated in accordance with official Chitkara University student organization recruitment schedules at the start of academic terms.',
  },
  {
    step: '03',
    code: 'APPLY // OFFICIAL_PORTAL',
    title: 'Register Through Official Forms',
    description:
      'When an enrollment window opens, follow the verified registration links and instructions distributed in official university communications.',
  },
];

export default function JoinPage() {
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
                <span>telemetry:~/c2c/join_protocol</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">STATUS: REGISTRATION_INFO</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // JOIN_PROTOCOL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  Your Next Chapter <span className="text-[#FF6B35]">Starts Here</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Code2Chill is an open, student-led technical collective at Chitkara University operating under the Office of Student Life (OSL). We bring curious minds together to learn by doing, build software, and explore technology collaboratively.
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Whether you are writing your first lines of code, exploring machine learning models, or organizing large campus events, Code2Chill is where serious technical craft meets a supportive peer community.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#45D9E8]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#B8F34A]">AFFILIATION: OFFICE OF STUDENT LIFE (OSL)</span>
                </div>
              </div>

              {/* Custom Technical Schematic SVG */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">ONBOARDING_PROTOCOL</span>
                    <span className="text-[#45D9E8]">STANDBY</span>
                  </div>

                  <svg
                    className="w-full h-36"
                    viewBox="0 0 220 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Code2Chill onboarding protocol schematic diagram"
                    role="img"
                  >
                    {/* Background grid */}
                    <line x1="15" y1="20" x2="205" y2="20" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="65" x2="205" y2="65" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="110" x2="205" y2="110" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Protocol Pathway */}
                    <path d="M30 65 L80 65 L110 35 L160 35" stroke="#45D9E8" strokeWidth="1.5" />
                    <path d="M110 35 L140 95 L190 95" stroke="#FF6B35" strokeWidth="1.2" strokeDasharray="3 3" />

                    {/* Stage 1: Connect */}
                    <rect x="20" y="50" width="45" height="30" rx="3" fill="#111619" stroke="#45D9E8" strokeWidth="1.5" />
                    <text x="42" y="68" fill="#45D9E8" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CONNECT</text>

                    {/* Stage 2: Explore */}
                    <rect x="135" y="20" width="50" height="30" rx="3" fill="#111619" stroke="#B8F34A" strokeWidth="1.5" />
                    <text x="160" y="38" fill="#B8F34A" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">EXPLORE</text>

                    {/* Stage 3: Build */}
                    <rect x="155" y="80" width="50" height="30" rx="3" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="180" y="98" fill="#FF6B35" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BUILD</text>

                    {/* Indicator dots */}
                    <circle cx="80" cy="65" r="3" fill="#45D9E8" />
                    <circle cx="110" cy="35" r="3" fill="#B8F34A" />
                    <circle cx="140" cy="95" r="3" fill="#FF6B35" />
                  </svg>

                  <div className="pt-2 border-t border-[#344044] flex justify-between text-[11px] text-[#A5B0AA]">
                    <span>MODE: ENROLLMENT_SYNC</span>
                    <span className="text-[#B8F34A]">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHY JOIN THE COMMUNITY */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider block">
                  // COMMUNITY_PILLARS
                </span>
                <SectionHeading className="!mb-0">
                  Why Code2Chill?
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                OPPORTUNITIES & ASPIRATIONS
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              We offer an open, student-led environment focused on experimentation, peer knowledge-sharing, and practical technical craft.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {COMMUNITY_VALUES.map((val) => (
                <div
                  key={val.code}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs px-2.5 py-0.5 rounded border ${val.badgeBg}`}>
                        {val.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#45D9E8] transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#344044]/60 flex items-center justify-between text-[11px] font-mono text-[#A5B0AA]/80">
                    <span>EXPLORATORY FOCUS</span>
                    <span style={{ color: val.accent }}>C2C // COMMUNITY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: HOW TO GET INVOLVED */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // ENROLLMENT_GUIDELINES
                </span>
                <SectionHeading className="!mb-0">
                  How to Get Involved
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                OFFICIAL UNIVERSITY PATHWAY
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Recruitment and member onboarding take place in alignment with official Chitkara University registration periods through the Office of Student Life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {ENROLLMENT_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                    <span className="font-mono text-xs text-[#FF6B35]">
                      {step.code}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#F1F3E9]/40">
                      STEP {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2 border-t border-[#344044]/60 text-[11px] font-mono text-[#A5B0AA]/80">
                    OFFICIAL ENROLLMENT PROCEDURE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: RECRUITMENT STATUS PANEL */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 md:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // CURRENT_STATUS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                  Official Recruitment Notice
                </h2>
              </div>
              <div className="font-mono text-xs text-[#B8F34A] border border-[#B8F34A]/40 px-2.5 py-1 rounded bg-[#B8F34A]/10">
                STATUS: ANNOUNCEMENT_PENDING
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#F1F3E9]/90 leading-relaxed">
                  Recruitment information and application instructions are shared exclusively through official Code2Chill announcements and Office of Student Life (OSL) university notices.
                </p>
                <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                  To ensure a fair and verified process, student club enrollments at Chitkara University occur during designated university cycles. There is no active self-hosted application form on this website. Please monitor our official social channels and university bulletin boards for verified opening dates.
                </p>
              </div>

              <div className="md:col-span-4 p-5 rounded border border-[#344044] bg-[#1A2224] font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-[#A5B0AA] border-b border-[#344044] pb-2 text-[11px]">
                  <span>GOVERNANCE</span>
                  <span className="text-[#45D9E8]">VERIFIED</span>
                </div>
                <div className="space-y-2 text-[#A5B0AA]">
                  <div>INSTITUTION: <span className="text-[#F1F3E9]">Chitkara University</span></div>
                  <div>OFFICE: <span className="text-[#F1F3E9]">Student Life (OSL)</span></div>
                  <div>PORTAL: <span className="text-[#FF6B35]">Official OSL Channels</span></div>
                  <div>CYCLE: <span className="text-[#B8F34A]">Scheduled Academic Term</span></div>
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
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-3 py-1 rounded bg-[#FF6B35]/10">
              EXPLORE // CONNECT
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                Stay Connected & Explore Our Work
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                While waiting for the next official recruitment cycle, discover what our members have built, explore upcoming and past events, and follow our official channels for real-time announcements.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                About Code2Chill →
              </Link>
              <Link
                to="/events"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Explore Events →
              </Link>
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                View Projects →
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
