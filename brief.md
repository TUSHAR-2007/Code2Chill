# Code2Chill — Project Brief

## Project

**Code2Chill (C2C)** is the official student technical club at Chitkara University.

**Tagline:** Where Serious Code Meets Chill Vibes.

## What we are building

A dynamic, responsive website that introduces the club, showcases its events and student projects, presents its published team, and helps students discover how to connect with the community. The longer-term portal also supports authorized staff/editors managing event drafts, previews, and publication.

## Creative direction

Create an original **retro-tech maker-culture** experience inspired by the two supplied images:

- Gaming and developer culture: controllers, coding setups, collaborative student spaces, game development, and playful digital creativity.
- Retro hardware and hacker nostalgia: CRT/oscilloscope screens, handheld consoles, radios, keyboards, circuit boards, terminal text, and electronics experiments.

Do not copy either image or reproduce a collage layout. Convert their energy into a polished editorial website: dark atmospheric surfaces, expressive typography, asymmetric image-led sections, restrained terminal details, technical labels, event-poster cards, and subtle motion.

### Visual starting point

- Background: deep charcoal/near-black.
- Main accent: warm terminal amber/orange.
- Supporting accents: acid green and electric cyan.
- Typography: reuse local Barlow Condensed and DM Sans.
- Mood: nerdy, inventive, welcoming, energetic, and credible as an official university club.
- Keep text readable, layouts responsive, and effects restrained.

## Core audience

- Students interested in coding, software, AI, gaming, hardware, and collaborative projects.
- Existing club members.
- Club leadership and authorized editors.
- University stakeholders and visitors.

## Main experience

1. **Home:** A memorable club introduction, featured/next event or archive entry, a student project, and two published roster members.
2. **Events:** Upcoming activities and a historical archive.
3. **Projects:** Verified student-built work, technology tags, and available GitHub/demo links.
4. **Team:** Published leadership and member roster.
5. **About:** Club purpose, culture, and activities.
6. **Join:** Clear information and the official university registration handoff.
7. **Contact:** Official community links.
8. **Admin:** Authorized event draft, preview, and publish workflow.
9. **Status:** Backend/database health state.

The README says the project has nine route specifications. Confirm exact paths and route count from `docs/PAGES_AND_JOURNEYS.md`; the list above is a feature summary, not a canonical route map.

## Technology

- Frontend: React 19, JavaScript, Vite 8, Tailwind CSS 4.
- Backend: Python 3.13+, FastAPI, SQLAlchemy, psycopg.
- Database: PostgreSQL 17.

Preserve the existing repository architecture and installed versions. Inspect before changing.

## Success looks like

- A distinctive, polished visual identity that blends both references without copying them.
- A homepage that immediately communicates the club's personality.
- Consistent navigation and reusable components.
- Responsive, accessible pages.
- Real verified club content and working links.
- Real API integration where the backend supports it.
- No fake registration, fake admin functionality, or invented club facts.
- A clean production frontend build and passing relevant backend tests.

## Build approach

Work in small phases: inspect repository and docs → establish design tokens and shared shell → build homepage → build public content pages → integrate APIs and status → complete admin only if secure backend support exists → test and document.

**Operating rule:** Before every operation, re-read `antigravity.md`, inspect the affected code, consult `spec.md`, make a focused change, verify it, and report the result.
