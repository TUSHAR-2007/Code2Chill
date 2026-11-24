import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-4 pb-2">
        <Container>
          <div className="border border-[#344044] rounded-lg bg-[#111619] p-6 sm:p-8 md:p-12 relative">
            {/* Top terminal telemetry bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#344044] pb-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#45D9E8]"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#B8F34A]"></span>
                <span className="ml-2 font-mono text-xs text-[#A5B0AA]">terminal://c2c/sys_about</span>
              </div>
              <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
                C2C // ABOUT_SYS_V1.0
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-tight leading-tight">
                  Where Serious Code Meets <span className="text-[#FF6B35]">Chill Vibes</span>.
                </h1>
                <p className="text-base sm:text-lg text-[#F1F3E9]/90 max-w-2xl leading-relaxed">
                  Code2Chill (C2C) is the student-led technical community under the Office of Student Life (OSL) at Chitkara University. We bring together students with a passion for software engineering, game development, emerging AI, and hands-on hardware exploration.
                </p>
                <p className="text-sm text-[#A5B0AA] max-w-2xl leading-relaxed">
                  Our community bridges disciplined technical craftsmanship with an open, relaxed maker culture — creating a space where practical building, curiosity, and creative experimentation thrive together.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5B0AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#B8F34A]"></span>
                    CAMPUS: CHITKARA UNIVERSITY
                  </span>
                  <span className="text-[#344044] hidden sm:inline">|</span>
                  <span className="text-[#45D9E8]">GOVERNANCE: OFFICE OF STUDENT LIFE</span>
                </div>
              </div>

              {/* Technical inline SVG decorative visual element */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-xs p-4 rounded border border-[#344044] bg-[#1A2224]/70 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center text-[11px] text-[#A5B0AA] border-b border-[#344044] pb-2">
                    <span>OSCILLOSCOPE_STREAM</span>
                    <span className="text-[#45D9E8]">CH1: 4.8kHz</span>
                  </div>
                  {/* Inline vector waveform & tech nodes */}
                  <svg
                    className="w-full h-24 text-[#45D9E8]"
                    viewBox="0 0 200 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Oscilloscope technical waveform"
                    role="img"
                  >
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="#344044" strokeWidth="0.8" />
                    <line x1="0" y1="60" x2="200" y2="60" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="50" y1="0" x2="50" y2="80" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="100" y1="0" x2="100" y2="80" stroke="#344044" strokeWidth="0.8" />
                    <line x1="150" y1="0" x2="150" y2="80" stroke="#344044" strokeWidth="0.5" strokeDasharray="2 2" />
                    {/* Signal Wave */}
                    <path
                      d="M 0 40 L 30 40 L 40 15 L 55 65 L 70 25 L 85 55 L 95 40 L 130 40 L 140 10 L 155 70 L 170 25 L 185 40 L 200 40"
                      stroke="#45D9E8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Peak Marker */}
                    <circle cx="140" cy="10" r="2.5" fill="#FF6B35" />
                    <circle cx="55" cy="65" r="2.5" fill="#B8F34A" />
                  </svg>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#A5B0AA] pt-1">
                    <div>SIGNAL: <span className="text-[#F1F3E9]">ACTIVE</span></div>
                    <div>MODE: <span className="text-[#FF6B35]">EXPERIMENTAL</span></div>
                    <div>FREQ: <span className="text-[#F1F3E9]">240 MHz</span></div>
                    <div>PARITY: <span className="text-[#B8F34A]">VERIFIED</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#FF6B35] uppercase tracking-wider">
              // CORE_FOUNDATIONS
            </div>
            <SectionHeading>Our Philosophy</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Three interconnected pillars define how we approach technology, learning, and student collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Serious Code */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#FF6B35] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/30">
                  PILLAR // 01
                </span>
                <svg className="w-5 h-5 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#FF6B35] transition-colors">
                Serious Code
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                Focus on fundamental software engineering, disciplined programming principles, and structured problem solving. We prioritize writing clean, reliable code and understanding system architecture over superficial shortcuts.
              </p>
            </div>

            {/* Card 2: Chill Vibes */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#45D9E8] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#45D9E8] bg-[#45D9E8]/10 px-2 py-0.5 rounded border border-[#45D9E8]/30">
                  PILLAR // 02
                </span>
                <svg className="w-5 h-5 text-[#45D9E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#45D9E8] transition-colors">
                Chill Vibes
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                An approachable, ego-free learning atmosphere where curiosity and experimentation are actively encouraged. Beginners and experienced coders learn side-by-side without gatekeeping or intimidation.
              </p>
            </div>

            {/* Card 3: Maker Culture */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-6 space-y-4 hover:border-[#B8F34A] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#B8F34A] bg-[#B8F34A]/10 px-2 py-0.5 rounded border border-[#B8F34A]/30">
                  PILLAR // 03
                </span>
                <svg className="w-5 h-5 text-[#B8F34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide group-hover:text-[#B8F34A] transition-colors">
                Maker Culture
              </h3>
              <p className="text-sm text-[#A5B0AA] leading-relaxed">
                The mindset of tinkering, prototyping, testing, and shipping tangible ideas. From web applications to hardware boards and interactive games, we believe the best way to master technology is by building it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHAT WE EXPLORE */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#45D9E8] uppercase tracking-wider">
              // DOMAINS_OF_INTEREST
            </div>
            <SectionHeading>What We Explore</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              Key technical disciplines and exploration areas that engage our student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Domain 1 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-5 space-y-3">
              <div className="font-mono text-xs text-[#A5B0AA]">DOMAIN // 01</div>
              <h4 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase">
                Web Development & Full-Stack
              </h4>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Modern frontend architectures, responsive design systems, RESTful API design, and asynchronous database backends.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">React</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">FastAPI</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">PostgreSQL</span>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-5 space-y-3">
              <div className="font-mono text-xs text-[#A5B0AA]">DOMAIN // 02</div>
              <h4 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase">
                AI & Machine Learning
              </h4>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Investigating modern neural models, automated problem solving, intelligent developer tools, and data processing pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Python</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Neural Nets</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Applied AI</span>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-5 space-y-3">
              <div className="font-mono text-xs text-[#A5B0AA]">DOMAIN // 03</div>
              <h4 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase">
                Game Development & Creative Tech
              </h4>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Exploring game engines, 2D/3D physics, procedural mechanics, interactive graphics, and audio programming.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Game Logic</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Shaders</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Creative Code</span>
              </div>
            </div>

            {/* Domain 4 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-5 space-y-3">
              <div className="font-mono text-xs text-[#A5B0AA]">DOMAIN // 04</div>
              <h4 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase">
                Embedded Systems, Hardware & IoT
              </h4>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Microcontroller experiments, sensor interfacing, retro computing components, and bridging software with the physical world.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Microcontrollers</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Sensors</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">IoT</span>
              </div>
            </div>

            {/* Domain 5 */}
            <div className="rounded-lg border border-[#344044] bg-[#111619] p-5 space-y-3 md:col-span-2 lg:col-span-2">
              <div className="font-mono text-xs text-[#A5B0AA]">DOMAIN // 05</div>
              <h4 className="text-xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase">
                Collaborative Projects & Technical Sprints
              </h4>
              <p className="text-xs text-[#A5B0AA] leading-relaxed">
                Peer coding initiatives, practical building sessions, architecture reviews, and turning concepts into testable open projects.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Git Workflows</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Code Reviews</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A2224] text-[#A5B0AA] border border-[#344044]">Project Sprints</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: OUR COMMUNITY */}
      <section>
        <Container>
          <div className="space-y-4 mb-8">
            <div className="font-mono text-xs text-[#B8F34A] uppercase tracking-wider">
              // STUDENT_COLLECTIVE
            </div>
            <SectionHeading>Our Community</SectionHeading>
            <p className="text-sm text-[#A5B0AA] max-w-xl">
              An ecosystem built by students, for students, anchored in peer learning and practical exploration.
            </p>
          </div>

          {/* Terminal-style information panel */}
          <div className="rounded-lg border border-[#344044] bg-[#111619] overflow-hidden">
            {/* Terminal bar */}
            <div className="bg-[#1A2224] px-4 py-2.5 border-b border-[#344044] flex items-center justify-between text-xs font-mono text-[#A5B0AA]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#B8F34A]"></span>
                <span>telemetry:~/chitkara/c2c_manifest.log</span>
              </div>
              <span className="text-[11px] text-[#45D9E8]">MODE: READ_ONLY</span>
            </div>

            {/* Terminal contents */}
            <div className="p-6 font-mono text-xs space-y-4 text-[#F1F3E9]/90">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 pb-3 border-b border-[#344044]/60">
                <span className="md:col-span-3 text-[#FF6B35] font-semibold">[COLLABORATION]</span>
                <span className="md:col-span-9 text-[#A5B0AA]">
                  Peer-driven problem solving where students share knowledge freely, discuss design choices, and exchange technical insights.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 pb-3 border-b border-[#344044]/60">
                <span className="md:col-span-3 text-[#45D9E8] font-semibold">[EXPERIMENTATION]</span>
                <span className="md:col-span-9 text-[#A5B0AA]">
                  Practical learning through trial, debugging, and building. We value hands-on iteration and constructive feedback.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 pb-3 border-b border-[#344044]/60">
                <span className="md:col-span-3 text-[#B8F34A] font-semibold">[KNOWLEDGE_SHARING]</span>
                <span className="md:col-span-9 text-[#A5B0AA]">
                  Encouraging members to document their learnings, present projects, and help peers overcome development roadblocks.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <span className="md:col-span-3 text-[#F1F3E9] font-semibold">[AFFILIATION]</span>
                <span className="md:col-span-9 text-[#A5B0AA]">
                  Officially recognized and guided by the <strong className="text-[#F1F3E9]">Office of Student Life (OSL)</strong> at <strong className="text-[#F1F3E9]">Chitkara University</strong>.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: JOIN THE COMMUNITY */}
      <section className="pb-8">
        <Container>
          <div className="rounded-lg border border-[#344044] bg-[#111619] p-8 sm:p-10 text-center space-y-6 relative">
            <div className="inline-block font-mono text-xs text-[#FF6B35] border border-[#FF6B35]/40 px-2.5 py-1 rounded bg-[#FF6B35]/10 tracking-wider">
              // NEXT_STEPS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-['Barlow Condensed'] text-[#F1F3E9] uppercase tracking-wide">
              Ready to Build Something?
            </h2>

            <p className="text-sm sm:text-base text-[#A5B0AA] max-w-xl mx-auto leading-relaxed">
              Official student membership recruitment takes place through Chitkara University's Office of Student Life (OSL) registration drives during scheduled cycles. Check our Join guide for details on upcoming recruitment announcements.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="w-full sm:w-auto px-6 py-2.5 rounded font-medium text-sm transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Join the Community →
              </Link>
              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 py-2.5 rounded font-medium text-sm transition-colors duration-200 bg-[#1A2224] text-[#F1F3E9] hover:bg-[#344044] border border-[#344044] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8]"
              >
                Explore Projects →
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
