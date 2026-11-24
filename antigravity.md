# Antigravity Operating Instructions — Code2Chill

> **Mandatory rule:** Before every operation that reads, creates, edits, deletes, moves, installs, runs, tests, or otherwise changes project state, re-read this file and identify the relevant constraints below. Do not treat this document as a one-time read. If an instruction conflicts with the repository's existing `docs/AGENTS.md`, `docs/LAUNCH_SCOPE.md`, or a more specific project contract, stop and explain the conflict before acting.

## 1. Project identity

Build the official **Code2Chill (C2C)** student technical-club portal for Chitkara University.

Tagline: **Where Serious Code Meets Chill Vibes**

The site should feel like a living community of developers, makers, gamers, hardware enthusiasts, and creative technologists. It must remain credible and usable as an official university club website—not a game store, generic SaaS dashboard, or copy of either supplied reference image.

## 2. Mandatory pre-operation procedure

Before each discrete task or operation:

1. Re-open and read this `antigravity.md`.
2. Read the relevant section of `spec.md`.
3. Read the relevant section of `brief.md` when the task affects product goals, content, or visual direction.
4. Inspect the existing implementation and its imports, routes, styles, API contracts, and tests before changing anything.
5. Check `docs/AGENTS.md`, `docs/LAUNCH_SCOPE.md`, `docs/PAGES_AND_JOURNEYS.md`, `docs/VISUAL_IDENTITY.md`, and `docs/CONTENT_REGISTER.md` when present and relevant.
6. State the intended change, files likely to be affected, and how it will be verified.
7. Make the smallest coherent change. Do not perform unrelated cleanup.
8. Run the relevant checks and inspect the browser result when the task affects UI.
9. Report what changed, what was tested, and what remains incomplete.

If the required documentation is missing, do not invent its contents. Record the gap and use the explicit provisional rules in this document.

## 3. Source-of-truth and repository safety

- The existing repository is the source of truth for implementation details.
- The uploaded README describes the intended stack and product scope; verify actual files before assuming a feature already exists.
- Preserve the existing architecture, naming conventions, route setup, API contracts, database models, and working components unless a documented reason requires a change.
- Do not replace the stack or introduce a second framework.
- Do not overwrite working code with a fresh scaffold.
- Do not delete assets, docs, tests, lockfiles, migrations, or configuration files without explicit justification.
- Never commit secrets, `.env` files, API keys, passwords, tokens, private credentials, or real user data.
- Do not fabricate club facts, event dates, member biographies, project details, photos, partner logos, or registration status.
- Use verified content from `docs/CONTENT_REGISTER.md` and existing repository assets. If information is absent, use a clearly marked editorial placeholder in development only and report it.
- Keep documentation updated when architecture, routes, commands, or implementation status changes.

## 4. Product and visual direction

### 4.1 Creative direction: “Retro-tech maker culture, reimagined”

Use both supplied reference images as **mood and visual-language references only**:

- Reference A contributes gaming, coding, collaborative student spaces, software tools, keyboards, and playful developer energy.
- Reference B contributes retro electronics, CRT/oscilloscope interfaces, handheld consoles, radios, circuit boards, hardware experiments, terminal typography, and analog-tech nostalgia.

Do **not** recreate either collage, copy its exact composition, or use it as a full-page background. Translate the mood into a coherent, responsive editorial website.

The resulting design should feel:
- Experimental, energetic, nerdy, maker-oriented, and community-led.
- Dark and atmospheric, with warm terminal amber/orange and electric green/cyan accents.
- Contemporary and polished rather than cluttered or deliberately difficult to read.
- Distinctive through layout, typography, imagery, and motion—not through excessive glow effects.

### 4.2 Suggested visual tokens

Treat these as a starting proposal. Check `docs/VISUAL_IDENTITY.md` first and preserve official brand rules where they exist.

| Token | Suggested value | Usage |
|---|---|---|
| `--color-bg` | `#090B0D` | Main page background |
| `--color-surface` | `#111619` | Panels and cards |
| `--color-surface-raised` | `#1A2224` | Elevated surfaces |
| `--color-text` | `#F1F3E9` | Main text |
| `--color-muted` | `#A5B0AA` | Secondary text |
| `--color-amber` | `#FF6B35` | Primary energetic accent |
| `--color-acid` | `#B8F34A` | Maker/electronics highlight |
| `--color-cyan` | `#45D9E8` | Technical data and links |
| `--color-line` | `#344044` | Borders and separators |

Use accents intentionally. Most surfaces should remain dark and quiet. Do not put amber, acid green, and cyan on every component at once.

### 4.3 Typography

- Reuse the repository's local **Barlow Condensed** and **DM Sans** fonts if available.
- Use Barlow Condensed for expressive display headings, labels, and selected navigation elements.
- Use DM Sans for body text, forms, buttons, and long-form content.
- A monospace face may be used sparingly for terminal labels, timestamps, technical metadata, and code snippets.
- Never use monospace for long paragraphs.

### 4.4 Layout and visual motifs

Use a flexible editorial grid with a mixture of:
- Oversized typography and short manifesto-style copy.
- Image-led feature panels.
- Small terminal/status readouts.
- Hardware-inspired labels, serial numbers, grid lines, and technical annotations.
- Asymmetric but balanced card arrangements.
- Event posters and project snapshots.
- Occasional pixel-art or schematic details where assets exist.

Use subtle scanline/noise textures only as restrained decorative layers. They must not reduce text contrast, cause flashing, or impair readability. Avoid fake CRT distortion over the entire page.

### 4.5 Motion and interaction

- Use purposeful, lightweight transitions: reveal-on-scroll, hover lift, image zoom, underline movement, and subtle accent changes.
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking, constant background animation, flashing, cursor replacement, and animations that block interaction.
- Every interactive element must have visible focus, hover, active, disabled, and loading states as appropriate.
- Do not make a card look clickable unless it is clickable.

### 4.6 Responsive behavior

Design mobile-first and verify at narrow mobile, tablet, laptop, and wide desktop widths.

- Navigation must collapse accessibly on small screens.
- Avoid horizontal overflow.
- Reorder asymmetric grids logically on mobile.
- Keep touch targets comfortable.
- Do not hide essential information solely to preserve a desktop composition.

## 5. Content and interaction principles

- Voice: confident, friendly, curious, inclusive, slightly playful; never forced slang.
- Keep copy concise and specific.
- Use actual Code2Chill information from the content register and README.
- Events must distinguish upcoming, completed, draft, and unpublished states correctly.
- Project cards should show only verified title, summary, technologies, and links.
- Team cards should use verified names, roles, domains, and approved portraits only.
- Join information must explain the real university registration handoff. Do not invent an application form or imply registration is open unless confirmed.
- Social links must point to the official destinations documented in the README or content register.

## 6. Technical constraints

The README specifies this intended stack:

### Frontend
- React 19
- JavaScript
- Vite 8
- Tailwind CSS 4

### Backend
- Python 3.13+
- FastAPI
- SQLAlchemy
- psycopg
- PostgreSQL 17

Preserve the existing project versions and lockfiles. Verify package and runtime versions from the repository before changing dependencies.

### Architecture rules
- Keep the React client and FastAPI backend separated as they are in the repository.
- Reuse the existing router, component conventions, API client, settings, database session, and model patterns.
- Keep secrets and environment-specific values in environment variables.
- Validate backend input and return appropriate HTTP status codes.
- Protect all staff/admin operations on the server; hiding admin buttons in React is not authorization.
- Do not expose stack traces, credentials, or internal database details to public clients.
- Keep PostgreSQL health checks aligned with the README contract: successful database check returns `{"status":"ok"}` with HTTP 200; database unavailable returns HTTP 503 with `{"detail":"Database unavailable"}`.
- Do not create a second database schema or duplicate models when an existing one is present.
- Do not introduce mock data as if it were live data. Clearly label development fixtures and keep them separate from production content.

## 7. Page and feature priorities

Use the exact route specifications in `docs/PAGES_AND_JOURNEYS.md` when available. The following is a planning inventory, not permission to invent new routes:

1. Home — club identity, featured/next event or archive, featured project, two roster members.
2. Events — upcoming events and historical archive.
3. Event detail — event information and media, if specified by the route guide.
4. Projects — member-built project showcase.
5. Team — published roster and leadership hierarchy.
6. About — club purpose, culture, and activities.
7. Join — verified university registration handoff and recruitment rules.
8. Contact — official links and verified contact details.
9. Admin dashboard — staff/editor event draft, preview, and publish workflow.
10. Status — PostgreSQL health check through FastAPI.

The README refers to nine route specifications. Confirm the exact route count and paths in `docs/PAGES_AND_JOURNEYS.md`; do not silently treat this planning inventory as the canonical route list.

### Priority for a short build window

**P0 — must work**
- Existing app starts and builds.
- Shared layout, navigation, responsive styling.
- Home page.
- Events, projects, and team public views.
- Correct official links and verified content.
- No broken routes or critical console errors.

**P1 — complete if existing backend supports it**
- Event detail.
- About, Join, Contact.
- Real API data loading, loading/empty/error states.
- Status page.

**P2 — do not fake**
- Admin authentication and event publishing.
- Database migrations and production deployment hardening.
- Any external university registration integration.

If time is insufficient, clearly report unfinished P1/P2 items. Never create a visual-only admin interface and claim it is functional.

## 8. Accessibility and quality bar

- Use semantic HTML and correct heading hierarchy.
- Provide meaningful alt text for informative images; decorative images should have empty alt text.
- Ensure keyboard navigation and visible focus.
- Associate form labels and validation messages with inputs.
- Maintain readable contrast.
- Do not rely on color alone to communicate status.
- Use buttons for actions and links for navigation.
- Avoid layout shifts by sizing images and reserving media space.
- Add loading, empty, error, and success states for data-driven areas.

## 9. Required workflow for every implementation phase

For each phase:

1. **Review:** Re-read this file and relevant project docs.
2. **Inspect:** Examine the exact files and current behavior.
3. **Plan:** List intended files and acceptance criteria.
4. **Implement:** Make a focused change.
5. **Verify:** Run relevant lint/build/tests and inspect browser behavior.
6. **Document:** Update `spec.md` and `brief.md` if the change affects them.
7. **Report:** Summarize changed files, test results, limitations, and next step.

Do not start a new phase while a critical regression from the previous phase remains unresolved.

## 10. Definition of done

A task is complete only when:
- The implementation matches the relevant specification.
- Existing working functionality is preserved.
- The page works at desktop and mobile sizes.
- Interactive elements work and have accessible states.
- No known critical console/build/test errors remain.
- Content is verified or explicitly marked as unavailable.
- Documentation accurately reflects what was actually implemented.

## 11. First action when opening this repository

Do not immediately generate code. Re-read this file, then inspect the repository and the documentation listed in Section 2. Compare the current state with `spec.md` and report a short implementation plan, existing reusable work, and blockers. Wait for the developer's next instruction before making broad architectural changes.
