import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

// Verified digital communication channels
const OFFICIAL_CHANNELS = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@code2chill.osl',
    url: 'https://www.instagram.com/code2chill.osl',
    code: 'CHANNEL // 01',
    accent: '#FF6B35',
    borderColor: 'border-[#FF6B35]',
    badgeBg: 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30',
    description:
      'Primary digital broadcast for event announcements, community highlights, session recaps, and student initiatives.',
    buttonText: 'Open Instagram ↗',
    indicator: 'VERIFIED_HANDLE',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Code2Chill',
    url: 'https://www.linkedin.com/company/code2chill',
    code: 'CHANNEL // 02',
    accent: '#45D9E8',
    borderColor: 'border-[#45D9E8]',
    badgeBg: 'bg-[#45D9E8]/10 text-[#45D9E8] border-[#45D9E8]/30',
    description:
      'Professional networking channel for club milestones, technical showcases, and community partnerships.',
    buttonText: 'Open LinkedIn ↗',
    indicator: 'VERIFIED_COMPANY_PAGE',
  },
];

// Institutional affiliation pillars
const GOVERNANCE_INFO = [
  {
    code: '01 // CAMPUS',
    title: 'Chitkara University',
    accent: '#FF6B35',
    description:
      'Our campus environment where student developers, designers, and creators come together to learn and collaborate.',
  },
  {
    code: '02 // MENTORSHIP',
    title: 'Office of Student Life (OSL)',
    accent: '#45D9E8',
    description:
      'The administrative body providing institutional mentorship, facility support, and governance for student technical clubs.',
  },
  {
    code: '03 // ANNOUNCEMENTS',
    title: 'Official Communications',
    accent: '#B8F34A',
    description:
      'All official notices regarding club activities, recruitment, and public events are published through verified channels.',
  },
];

export default function ContactPage() {
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
                <span>telemetry:~/c2c/contact_signal</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">STATUS: OFFICIAL_CHANNELS</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // CONTACT_PROTOCOL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  Communication <span className="text-[#FF6B35]">& Channels</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Code2Chill is an open, student-led technical community at Chitkara University under the Office of Student Life (OSL).
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  To ensure authentic and direct communication, all club updates, event schedules, and announcements are published exclusively through our verified digital channels and official university notices.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#45D9E8]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#B8F34A]">GOVERNANCE: OFFICE OF STUDENT LIFE (OSL)</span>
                </div>
              </div>

              {/* Custom Technical Signal Routing Schematic SVG */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">SIGNAL_ROUTING</span>
                    <span className="text-[#B8F34A]">VERIFIED</span>
                  </div>

                  <svg
                    className="w-full h-36"
                    viewBox="0 0 220 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Code2Chill communication signal routing diagram"
                    role="img"
                  >
                    {/* Background grid */}
                    <line x1="15" y1="25" x2="205" y2="25" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="65" x2="205" y2="65" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="15" y1="105" x2="205" y2="105" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Routing traces */}
                    <path d="M40 65 L85 65" stroke="#45D9E8" strokeWidth="1.5" />
                    <path d="M85 65 L115 35 L175 35" stroke="#FF6B35" strokeWidth="1.5" />
                    <path d="M85 65 L115 95 L175 95" stroke="#45D9E8" strokeWidth="1.5" />

                    {/* Hub Node: Chitkara / OSL */}
                    <rect x="15" y="50" width="50" height="30" rx="3" fill="#111619" stroke="#344044" strokeWidth="1.5" />
                    <text x="40" y="68" fill="#F1F3E9" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">OSL_HUB</text>

                    {/* Channel 1: Instagram */}
                    <rect x="150" y="20" width="55" height="30" rx="3" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="177" y="38" fill="#FF6B35" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">INSTAGRAM</text>

                    {/* Channel 2: LinkedIn */}
                    <rect x="150" y="80" width="55" height="30" rx="3" fill="#111619" stroke="#45D9E8" strokeWidth="1.5" />
                    <text x="177" y="98" fill="#45D9E8" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">LINKEDIN</text>

                    {/* Connecting Signal Nodes */}
                    <circle cx="85" cy="65" r="3" fill="#B8F34A" />
                    <circle cx="115" cy="35" r="2.5" fill="#FF6B35" />
                    <circle cx="115" cy="95" r="2.5" fill="#45D9E8" />
                  </svg>

                  <div className="pt-2 border-t border-[#344044] flex justify-between text-[11px] text-[#A5B0AA]">
                    <span>DESTINATIONS: 2 OFFICIAL</span>
                    <span className="text-[#45D9E8]">LINK: DIRECT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: OFFICIAL DIGITAL CHANNELS */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider block">
                  // DIRECT_SIGNALS
                </span>
                <SectionHeading className="!mb-0">
                  Verified Digital Channels
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                STATUS: OFFICIAL & MONITORED
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Connect with Code2Chill through our verified official channels for community updates, event coverage, and announcements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {OFFICIAL_CHANNELS.map((channel) => (
                <div
                  key={channel.id}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 space-y-6 hover:border-[#45D9E8] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                      <span className={`font-mono text-xs px-2.5 py-0.5 rounded border ${channel.badgeBg}`}>
                        {channel.code}
                      </span>
                      <span className="font-mono text-xs text-[#B8F34A]">
                        {channel.indicator}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#45D9E8] transition-colors">
                        {channel.platform}
                      </h3>
                      <div className="text-sm font-mono font-semibold" style={{ color: channel.accent }}>
                        {channel.handle}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#344044]/60 flex items-center justify-between">
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded font-medium text-xs font-mono transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] hover:border-[#45D9E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
                    >
                      {channel.buttonText}
                    </a>
                    <span className="text-[11px] font-mono text-[#A5B0AA]/80">
                      OFFICIAL LINK
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: INSTITUTIONAL AFFILIATION */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#344044] pb-4">
              <div>
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // GOVERNANCE & MENTORSHIP
                </span>
                <SectionHeading className="!mb-0">
                  Institutional Affiliation
                </SectionHeading>
              </div>
              <span className="font-mono text-xs text-[#A5B0AA]">
                CHITKARA UNIVERSITY ECOSYSTEM
              </span>
            </div>

            <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
              Code2Chill functions as a recognized student technical community operating under the governance and support of the university.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {GOVERNANCE_INFO.map((item) => (
                <div
                  key={item.code}
                  className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                    <span className="font-mono text-xs text-[#FF6B35]">
                      {item.code}
                    </span>
                    <span className="font-mono text-xs text-[#B8F34A]">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-[#344044]/60 text-[11px] font-mono text-[#A5B0AA]/80">
                    CAMPUS GOVERNANCE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: COMMUNICATION TRANSPARENCY NOTICE */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 sm:p-8 md:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider block">
                  // COMMUNICATION_POLICY
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                  Direct Inquiries & Transparency
                </h2>
              </div>
              <div className="font-mono text-xs text-[#B8F34A] border border-[#B8F34A]/40 px-2.5 py-1 rounded bg-[#B8F34A]/10">
                INFO: ANNOUNCEMENTS_ONLY
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-[#F1F3E9]/90 leading-relaxed">
                  To ensure transparency and protect visitors from unverified contacts, Code2Chill does not host an unmonitored web contact form or publish unverified phone numbers or private email addresses.
                </p>
                <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                  For official inquiries, collaborations, or announcements, please connect directly through our verified LinkedIn company page or Instagram profile, or consult the Office of Student Life (OSL) on the Chitkara University campus.
                </p>
              </div>

              <div className="md:col-span-4 p-5 rounded border border-[#344044] bg-[#1A2224] font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-[#A5B0AA] border-b border-[#344044] pb-2 text-[11px]">
                  <span>DIRECTORY_INTEGRITY</span>
                  <span className="text-[#45D9E8]">VERIFIED</span>
                </div>
                <div className="space-y-2 text-[#A5B0AA]">
                  <div>INSTITUTION: <span className="text-[#F1F3E9]">Chitkara University</span></div>
                  <div>GOVERNANCE: <span className="text-[#F1F3E9]">Office of Student Life</span></div>
                  <div>CHANNELS: <span className="text-[#FF6B35]">Instagram & LinkedIn</span></div>
                  <div>WEB FORM: <span className="text-[#B8F34A]">Not Hosted on Site</span></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: EXPLORE COMMUNITY CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-3 py-1 rounded bg-[#FF6B35]/10">
              EXPLORE // DIRECTORY
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                Explore Code2Chill
              </h2>
              <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                Discover our club philosophy, browse past event retrospectives, explore verified student projects, meet the team, or review joining information.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/about"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                About Us →
              </Link>
              <Link
                to="/events"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Events →
              </Link>
              <Link
                to="/projects"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Projects →
              </Link>
              <Link
                to="/team"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Team →
              </Link>
              <Link
                to="/join"
                className="px-6 py-2.5 rounded font-medium text-xs sm:text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Join →
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
