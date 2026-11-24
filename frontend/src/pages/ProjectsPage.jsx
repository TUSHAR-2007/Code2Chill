import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function ProjectsPage() {
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
                <span>telemetry:~/c2c/project_lab</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">ENV: SHOWCASE_ACTIVE</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // PROJECT_LAB
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  Ideas Built. <span className="text-[#FF6B35]">Problems Solved</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Student-led projects are at the heart of Code2Chill. We believe genuine technical growth comes from practical experimentation, building working software, and tackling complex engineering challenges together.
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Explore verified student projects from our community records below. Technical specifications, system architectures, and code repositories are added as documentation is finalized.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#45D9E8]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#B8F34A]">STATUS: VERIFIED TITLES</span>
                </div>
              </div>

              {/* Custom Technical Pipeline SVG */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">BUILD_PIPELINE_MATRIX</span>
                    <span className="text-[#B8F34A]">READY</span>
                  </div>

                  <svg
                    className="w-full h-32"
                    viewBox="0 0 200 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Build pipeline architecture diagram"
                    role="img"
                  >
                    {/* Pipeline Grid Lines */}
                    <line x1="10" y1="20" x2="190" y2="20" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="10" y1="55" x2="190" y2="55" stroke="#344044" strokeWidth="0.8" />
                    <line x1="10" y1="90" x2="190" y2="90" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Stage 1: Design / Logic */}
                    <rect x="15" y="40" width="40" height="30" rx="2" fill="#111619" stroke="#45D9E8" strokeWidth="1.2" />
                    <text x="35" y="58" fill="#45D9E8" fontSize="8" fontFamily="monospace" textAnchor="middle">INIT</text>

                    {/* Trace 1 */}
                    <line x1="55" y1="55" x2="80" y2="55" stroke="#45D9E8" strokeWidth="1.2" />
                    <circle cx="80" cy="55" r="2" fill="#45D9E8" />

                    {/* Stage 2: Core Build */}
                    <rect x="80" y="35" width="45" height="40" rx="2" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="102" y="58" fill="#FF6B35" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BUILD</text>

                    {/* Trace 2 */}
                    <line x1="125" y1="55" x2="150" y2="55" stroke="#B8F34A" strokeWidth="1.2" />
                    <circle cx="150" cy="55" r="2" fill="#B8F34A" />

                    {/* Stage 3: Verification */}
                    <rect x="150" y="40" width="40" height="30" rx="2" fill="#111619" stroke="#B8F34A" strokeWidth="1.2" />
                    <text x="170" y="58" fill="#B8F34A" fontSize="8" fontFamily="monospace" textAnchor="middle">TEST</text>

                    {/* Vertical signal nodes */}
                    <line x1="102" y1="10" x2="102" y2="35" stroke="#344044" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="102" cy="10" r="2" fill="#FF6B35" />
                    <line x1="102" y1="75" x2="102" y2="100" stroke="#344044" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="102" cy="100" r="2" fill="#45D9E8" />
                  </svg>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#A5B0AA] pt-1 border-t border-[#344044]">
                    <div>FLOW: <span className="text-[#45D9E8]">ITERATIVE</span></div>
                    <div>CYCLE: <span className="text-[#B8F34A]">STABLE</span></div>
                    <div>DOCS: <span className="text-[#FF6B35]">IN_PROGRESS</span></div>
                    <div>STAGE: <span className="text-[#F1F3E9]">ACTIVE</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: PROJECT SHOWCASE */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider">
              // VERIFIED_ENTRIES
            </div>
            <SectionHeading>Project Showcase</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Confirmed student projects from Code2Chill records. Technical specifications, system architectures, and repository documentation are currently being compiled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: NEXUS */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-6 hover:border-[#45D9E8] transition-colors relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                  <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2.5 py-0.5 rounded border border-[#45D9E8]/30">
                    STUDENT_WORK // LAB_01
                  </span>
                  <span className="font-mono text-xs text-[#B8F34A]">STATUS: DOCUMENTING</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    NEXUS — Emotion Detection
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Verified student project exploring emotion detection. Technical specifications, system architecture, and repository documentation are currently being compiled.
                  </p>
                </div>

                {/* Documentation notice panel */}
                <div className="rounded border border-[#344044] bg-[#1A2224] p-3 text-[11px] font-mono text-[#A5B0AA] space-y-1">
                  <div className="text-[#45D9E8] font-semibold">// RELEASE_NOTICE</div>
                  <p className="text-[#A5B0AA]/90 leading-normal">
                    Documentation pending official release. External code repositories and live demonstrations will be linked once published.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#344044] space-y-2 text-xs font-mono text-[#A5B0AA]">
                <div className="flex justify-between items-center">
                  <span>RECORD: <span className="text-[#F1F3E9]">VERIFIED_PROJECT</span></span>
                  <span className="text-[#45D9E8]">STUDENT_WORK</span>
                </div>
                <div className="text-[11px] text-[#A5B0AA]/70">
                  AFFILIATION: Chitkara University (OSL)
                </div>
              </div>
            </div>

            {/* Project 2: ChronoAtlas */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-6 hover:border-[#FF6B35] transition-colors relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                  <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-0.5 rounded border border-[#FF6B35]/30">
                    STUDENT_WORK // LAB_02
                  </span>
                  <span className="font-mono text-xs text-[#B8F34A]">STATUS: DOCUMENTING</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                    ChronoAtlas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                    Verified student project. Technical specifications, system architecture, and repository documentation are currently being compiled.
                  </p>
                </div>

                {/* Documentation notice panel */}
                <div className="rounded border border-[#344044] bg-[#1A2224] p-3 text-[11px] font-mono text-[#A5B0AA] space-y-1">
                  <div className="text-[#FF6B35] font-semibold">// RELEASE_NOTICE</div>
                  <p className="text-[#A5B0AA]/90 leading-normal">
                    Documentation pending official release. External code repositories and live demonstrations will be linked once published.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#344044] space-y-2 text-xs font-mono text-[#A5B0AA]">
                <div className="flex justify-between items-center">
                  <span>RECORD: <span className="text-[#F1F3E9]">VERIFIED_PROJECT</span></span>
                  <span className="text-[#FF6B35]">STUDENT_WORK</span>
                </div>
                <div className="text-[11px] text-[#A5B0AA]/70">
                  AFFILIATION: Chitkara University (OSL)
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: PROJECT VALUES & ASPIRATIONS */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#B8F34A] uppercase tracking-wider">
              // GUIDING_VALUES
            </div>
            <SectionHeading>What We Value in Building</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              The shared principles and creative aspirations that guide how we approach technology and projects as students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  VALUE // 01
                </span>
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#FF6B35] transition-colors">
                Learning by Doing
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                We value hands-on exploration and practical curiosity. We believe building working software and working through bugs directly is one of the most engaging ways to develop real engineering understanding.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  VALUE // 02
                </span>
                <svg className="w-5 h-5 text-[#45D9E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#45D9E8] transition-colors">
                Open Collaboration
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                We aspire to create an open and supportive environment where students can share ideas, ask questions freely, and learn alongside peers without gatekeeping or competition.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#B8F34A] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B8F34A] bg-[#B8F34A]/10 px-2 py-0.5 rounded border border-[#B8F34A]/30">
                  VALUE // 03
                </span>
                <svg className="w-5 h-5 text-[#B8F34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#B8F34A] transition-colors">
                Thoughtful Craft
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                We value writing clear, readable code and striving to understand how systems work under the hood, prioritizing steady personal growth and genuine learning over quick shortcuts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: COMMUNITY CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
              // BUILD_WITH_US
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Ready to Build Your Own Project?
            </h2>

            <p className="text-sm sm:text-base text-[#A5B0AA] max-w-xl mx-auto leading-relaxed">
              Code2Chill supports student builders looking to turn technical ideas into reality. Membership enrollment and collaborative project onboarding occur through official Chitkara University Office of Student Life (OSL) recruitment cycles.
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
