import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function HomePage() {
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
                <span>telemetry:~/c2c/portal_init</span>
                <span className="text-[#344044]">|</span>
                <span className="text-[#45D9E8]">STATUS: 200_OK</span>
              </div>
              <div className="font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                CHITKARA UNIVERSITY // OSL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs sm:text-sm text-[#FF6B35] uppercase tracking-wider block">
                    // OFFICIAL TECHNICAL COMMUNITY
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-none">
                    BUILD. BREAK. <br className="hidden sm:inline" />
                    <span className="text-[#FF6B35]">LEARN.</span> REPEAT.
                  </h1>
                </div>

                <p className="text-xl sm:text-2xl font-['Barlow Condensed'] font-semibold text-[#45D9E8] uppercase tracking-wide">
                  Where Serious Code Meets Chill Vibes.
                </p>

                <p className="text-sm sm:text-base text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Code2Chill (C2C) is the student-led technical community under the Office of Student Life (OSL) at Chitkara University. We bring together developers, creative technologists, game creators, and hardware makers to build ambitious projects in a collaborative, ego-free environment.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    to="/about"
                    className="w-full sm:w-auto text-center px-6 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
                  >
                    Explore Our World →
                  </Link>
                  <Link
                    to="/projects"
                    className="w-full sm:w-auto text-center px-6 py-3 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
                  >
                    Explore Projects →
                  </Link>
                </div>
              </div>

              {/* Technical Schematic Illustration */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-sm rounded border border-[#344044] bg-[#1A2224]/80 p-5 font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span className="text-[#F1F3E9]">CORE_PROCESSOR_MATRIX</span>
                    <span className="text-[#B8F34A]">ONLINE</span>
                  </div>

                  {/* Retro-tech circuit node matrix SVG */}
                  <svg
                    className="w-full h-36"
                    viewBox="0 0 240 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Core processor circuit schematic"
                    role="img"
                  >
                    {/* Background Grid */}
                    <path d="M10 20 H230 M10 40 H230 M10 60 H230 M10 80 H230 M10 100 H230" stroke="#344044" strokeWidth="0.5" strokeDasharray="3 3" />
                    <path d="M40 10 V110 M80 10 V110 M120 10 V110 M160 10 V110 M200 10 V110" stroke="#344044" strokeWidth="0.5" strokeDasharray="3 3" />

                    {/* Central Processing Node */}
                    <rect x="90" y="35" width="60" height="50" rx="3" fill="#111619" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="120" y="62" fill="#FF6B35" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">C2C // CHIP</text>

                    {/* Traces */}
                    <path d="M40 40 H90 M40 80 H90 M150 45 H200 M150 75 H200" stroke="#45D9E8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M120 15 V35 M120 85 V105" stroke="#B8F34A" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Connection Pins */}
                    <circle cx="40" cy="40" r="3" fill="#45D9E8" />
                    <circle cx="40" cy="80" r="3" fill="#45D9E8" />
                    <circle cx="200" cy="45" r="3" fill="#45D9E8" />
                    <circle cx="200" cy="75" r="3" fill="#45D9E8" />
                    <circle cx="120" cy="15" r="3" fill="#B8F34A" />
                    <circle cx="120" cy="105" r="3" fill="#B8F34A" />
                  </svg>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#A5B0AA] pt-1 border-t border-[#344044]">
                    <div>ARCH: <span className="text-[#F1F3E9]">FULL_STACK</span></div>
                    <div>CYCLE: <span className="text-[#45D9E8]">ACTIVE</span></div>
                    <div>CULTURE: <span className="text-[#FF6B35]">OPEN_SOURCE</span></div>
                    <div>AFFIL: <span className="text-[#B8F34A]">CHITKARA</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: INTRODUCING CODE2CHILL */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
              <span className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider">
                // MANIFESTO_OVERVIEW
              </span>
              <span className="font-mono text-xs text-[#A5B0AA]">
                CHITKARA UNIVERSITY OSL
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <SectionHeading className="!mb-0">
                  Engineering Rigor Meets Creative Freedom
                </SectionHeading>
                <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                  Code2Chill was founded on a simple principle: technical excellence doesn't require gatekeeping, and relaxed creativity doesn't mean compromising on quality. We believe that genuine mastery comes from hands-on building, curiosity, and learning from failure in an ego-free student collective.
                </p>
                <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                  Whether crafting full-stack web platforms, investigating applied AI models, coding interactive game physics, or soldering embedded hardware, our members collaborate freely to bring technical concepts to life.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center space-y-3 p-5 rounded border border-[#344044] bg-[#1A2224]">
                <div className="font-mono text-xs text-[#45D9E8]">// DISCOVER_MORE</div>
                <p className="text-xs text-[#A5B0AA]">
                  Learn about our founding philosophy, technical focus areas, and community values on our dedicated About page.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF6B35] hover:text-[#FF7A4A] transition-colors focus:outline-none focus-visible:underline pt-1"
                >
                  Read Full Club Manifesto →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHAT WE EXPLORE */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider">
              // TECHNICAL_DISCIPLINES
            </div>
            <SectionHeading>What We Explore</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Core exploration areas where our members collaborate, prototype, and build practical technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Domain 1: Web Development */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  01 // WEB
                </span>
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase group-hover:text-[#FF6B35] transition-colors">
                Web Development
              </h3>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Full-stack architectures, modern JavaScript ecosystems, RESTful APIs, and scalable database backends.
              </p>
            </div>

            {/* Domain 2: AI & ML */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  02 // AI_ML
                </span>
                <svg className="w-5 h-5 text-[#45D9E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase group-hover:text-[#45D9E8] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Practical neural network experiments, computer vision models, automated problem solving, and data tooling.
              </p>
            </div>

            {/* Domain 3: Game Development */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#B8F34A] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B8F34A] bg-[#B8F34A]/10 px-2 py-0.5 rounded border border-[#B8F34A]/30">
                  03 // GAME
                </span>
                <svg className="w-5 h-5 text-[#B8F34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase group-hover:text-[#B8F34A] transition-colors">
                Game Development
              </h3>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Game mechanics, physics simulation, procedural generation, interactive graphics, and creative audiovisual coding.
              </p>
            </div>

            {/* Domain 4: Hardware & IoT */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  04 // HARDWARE
                </span>
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase group-hover:text-[#FF6B35] transition-colors">
                Hardware & IoT
              </h3>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Microcontroller experiments, sensor telemetry, retro computing components, and physical computing integration.
              </p>
            </div>

            {/* Domain 5: Collaborative Projects */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors group sm:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  05 // SPRINTS
                </span>
                <svg className="w-5 h-5 text-[#45D9E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase group-hover:text-[#45D9E8] transition-colors">
                Collaborative Projects
              </h3>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Structured peer coding sessions, architecture reviews, Git workflows, and turning creative concepts into verified software.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: EVENTS PREVIEW */}
      <section>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-3">
              <div className="font-mono text-xs text-[#B8F34A] uppercase tracking-wider">
                // CLUB_ACTIVITIES
              </div>
              <SectionHeading className="!mb-0">Events Preview</SectionHeading>
              <p className="text-sm text-[#A5B0AA] max-w-xl">
                Verified events and technical activities organized by Code2Chill.
              </p>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF6B35] hover:text-[#FF7A4A] transition-colors focus:outline-none focus-visible:underline self-start sm:self-auto"
            >
              View Events Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event 1: DOMination */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors">
              <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  EVENT // ARCHIVE
                </span>
                <span className="font-mono text-xs text-[#A5B0AA]">STATUS: COMPLETED</span>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                DOMination
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                Frontend and DOM manipulation technical event focused on creative web techniques, interactive UI mechanics, and developer problem solving.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#A5B0AA]/80 border-t border-[#344044] pt-3">
                <span>LOCATION: CAMPUS</span>
                <span className="text-[#45D9E8]">RECORD_VERIFIED</span>
              </div>
            </div>

            {/* Event 2: Byte The Vibe */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors">
              <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  EVENT // ARCHIVE
                </span>
                <span className="font-mono text-xs text-[#A5B0AA]">STATUS: COMPLETED</span>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                Byte The Vibe
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                Club gathering and community session uniting developer energy, creative coding culture, and collaborative project sharing among peers.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#A5B0AA]/80 border-t border-[#344044] pt-3">
                <span>LOCATION: CAMPUS</span>
                <span className="text-[#B8F34A]">RECORD_VERIFIED</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: PROJECTS PREVIEW */}
      <section>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-3">
              <div className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider">
                // STUDENT_SHOWCASE
              </div>
              <SectionHeading className="!mb-0">Projects Preview</SectionHeading>
              <p className="text-sm text-[#A5B0AA] max-w-xl">
                Verified student-built software and experimental engineering projects.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#45D9E8] hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:underline self-start sm:self-auto"
            >
              Browse All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: NEXUS */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors">
              <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  PROJECT // AI_VISION
                </span>
                <span className="font-mono text-xs text-[#B8F34A]">VERIFIED</span>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                NEXUS — Emotion Detection
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                Student-developed software project exploring real-time emotion recognition, visual classification pipelines, and responsive feedback models.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Computer Vision</span>
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Neural Inference</span>
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Python</span>
              </div>
            </div>

            {/* Project 2: ChronoAtlas */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors">
              <div className="flex items-center justify-between border-b border-[#344044] pb-3">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  PROJECT // WEB_SPATIAL
                </span>
                <span className="font-mono text-xs text-[#B8F34A]">VERIFIED</span>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
                ChronoAtlas
              </h3>
              <p className="text-xs sm:text-sm text-[#A5B0AA] leading-relaxed">
                Interactive spatial and historical mapping application investigating temporal data visualization, geographic coordinate rendering, and dynamic navigation.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Spatial UI</span>
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Data Visualization</span>
                <span className="px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Full-Stack</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: COMMUNITY PREVIEW */}
      <section>
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#B8F34A] uppercase tracking-wider block">
                  // PEER_ECOSYSTEM
                </span>
                <SectionHeading className="!mb-0">
                  A Student-Led Collective
                </SectionHeading>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#45D9E8] hover:text-[#FF6B35] transition-colors focus:outline-none focus-visible:underline"
              >
                Meet the Team →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-[#A5B0AA] leading-relaxed">
                  Code2Chill thrives because of active collaboration across disciplines. Our members contribute across software engineering, hardware prototyping, editorial content, and community operations under the mentorship of the Office of Student Life.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono pt-2">
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#FF6B35] font-semibold">EXECUTIVE</div>
                    <div className="text-[11px] text-[#A5B0AA]">Leadership & Vision</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#45D9E8] font-semibold">TECHNICAL</div>
                    <div className="text-[11px] text-[#A5B0AA]">Architecture & Code</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#B8F34A] font-semibold">EDITORIAL</div>
                    <div className="text-[11px] text-[#A5B0AA]">Content & Docs</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#45D9E8] font-semibold">MEDIA</div>
                    <div className="text-[11px] text-[#A5B0AA]">Branding & Visuals</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#FF6B35] font-semibold">PR & OUTREACH</div>
                    <div className="text-[11px] text-[#A5B0AA]">Campus Relations</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1A2224] border border-[#344044]">
                    <div className="text-[#B8F34A] font-semibold">OPERATIONS</div>
                    <div className="text-[11px] text-[#A5B0AA]">Execution & Sprints</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 p-6 rounded border border-[#344044] bg-[#1A2224] font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-[#A5B0AA] border-b border-[#344044] pb-2 text-[11px]">
                  <span>OFFICIAL_AFFILIATION</span>
                  <span className="text-[#45D9E8]">VERIFIED</span>
                </div>
                <div className="space-y-2 text-[#A5B0AA]">
                  <div>INSTITUTION: <span className="text-[#F1F3E9]">Chitkara University</span></div>
                  <div>GOVERNANCE: <span className="text-[#F1F3E9]">Office of Student Life</span></div>
                  <div>LEADERSHIP: <span className="text-[#FF6B35]">President & Heads of Domain</span></div>
                  <div>COMMUNITY: <span className="text-[#B8F34A]">Open Peer Learning</span></div>
                </div>
                <div className="pt-2 border-t border-[#344044]">
                  <Link
                    to="/team"
                    className="block text-center py-2 px-3 rounded bg-[#111619] hover:bg-[#090B0D] text-[#F1F3E9] border border-[#344044] transition-colors"
                  >
                    View Verified Team Roster →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 7: FINAL JOIN CTA */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
              // RECRUITMENT_GATEWAY
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Got an Idea? Let's Build It.
            </h2>

            <p className="text-sm sm:text-base text-[#A5B0AA] max-w-xl mx-auto leading-relaxed">
              Official student membership recruitment is managed through Chitkara University's Office of Student Life (OSL) during regular enrollment cycles. Visit our Join guide to learn more about the university handoff and recruitment timelines.
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
