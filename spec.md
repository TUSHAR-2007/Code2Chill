# Code2Chill Website — Project Specification

**Document type:** Living technical and product specification  
**Status:** Initial planning baseline; verify against repository before implementation  
**Product:** Code2Chill (C2C), Chitkara University  
**Tagline:** Where Serious Code Meets Chill Vibes

---

## 1. Product overview

Code2Chill is a student-led technical community under the Office of Student Life at Chitkara University. The website is the club's public digital home and, over time, its content-management portal.

The experience should communicate serious building skills with a relaxed, inclusive, creative community culture. It should showcase events, student-built projects, the published team roster, and ways to connect with the club.

The website is a dynamic full-stack application, not merely a static promotional page.

## 2. Goals

1. Explain what Code2Chill is and what members do.
2. Make upcoming activities and past event archives easy to discover.
3. Showcase verified member-built projects.
4. Present the published leadership and team roster.
5. Direct interested students to the official university registration process.
6. Provide authorized staff/editors with event draft, preview, and publishing workflows.
7. Expose a simple service status page that checks the PostgreSQL connection through FastAPI.

## 3. Non-goals and boundaries

- Do not create an unofficial replacement for the university student portal.
- Do not claim that club recruitment or registration is open unless verified.
- Do not invent events, dates, project descriptions, team biographies, or contact details.
- Do not add payments, public user accounts, chat, feeds, or unrelated social-network features unless separately approved.
- Do not represent mock content as live production data.
- Do not redesign or replace backend architecture just to simplify frontend work.

## 4. Audience

- Chitkara University students exploring technical communities.
- Current club members and project contributors.
- Club leadership, staff, and authorized editors.
- University stakeholders and visitors learning about the club.

## 5. Brand and experience specification

### 5.1 Creative concept

**Retro-tech maker culture, reimagined.**

Use the two supplied reference images as inspiration, not as templates:
- Image one: gaming controllers, coding screens, student collaboration, developer setups, game development, and playful digital culture.
- Image two: retro electronics, CRT/oscilloscope screens, handheld consoles, radios, keyboards, circuit boards, terminal text, and hardware experimentation.

Translate these into a coherent editorial interface. Do not reproduce the collages or use either image as a full-page background.

### 5.2 Visual personality

- Dark, atmospheric, and high contrast.
- Creative, technical, curious, and welcoming.
- Retro-futurist details with contemporary usability.
- Bold editorial headings and structured content.
- Selective use of terminal-inspired labels, hardware annotations, grids, pixel details, and poster-like event media.
- A polished official-club experience rather than a cluttered hacker cliché.

### 5.3 Provisional color tokens

These are proposed tokens pending review of `docs/VISUAL_IDENTITY.md`.

| Token | Value | Intended use |
|---|---|---|
| Background | `#090B0D` | Main page background |
| Surface | `#111619` | Cards and panels |
| Raised surface | `#1A2224` | Elevated panels |
| Primary text | `#F1F3E9` | Headings and body |
| Muted text | `#A5B0AA` | Supporting copy |
| Amber | `#FF6B35` | Main accent and calls to action |
| Acid green | `#B8F34A` | Technical highlights |
| Cyan | `#45D9E8` | Links and data accents |
| Border | `#344044` | Dividers and outlines |

Use the actual established design tokens if the repository already defines them.

### 5.4 Typography

- Reuse local Barlow Condensed and DM Sans fonts when available.
- Barlow Condensed: display headings and selected short labels.
- DM Sans: body, controls, navigation, forms.
- Monospace: short code/terminal labels only.

### 5.5 Interaction and motion

- Subtle reveal, hover, underline, and image transitions.
- Reduced-motion support.
- No flashing, scroll hijacking, or interaction-blocking animation.
- Accessible focus, hover, active, loading, disabled, success, and error states.

## 6. Technology baseline

The README declares the following stack. Confirm actual installed versions in the repository before changing anything.

| Layer | Technology |
|---|---|
| Frontend framework | React 19 |
| Frontend language | JavaScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Backend language | Python 3.13+ |
| API framework | FastAPI |
| ORM | SQLAlchemy |
| PostgreSQL driver | psycopg |
| Database | PostgreSQL 17 |
| Backend tests | pytest, as indicated by repository structure |

Do not add dependencies unless the existing stack cannot meet a documented requirement.

## 7. Route and page specification

The README says the project has nine route specifications. The precise paths and journeys must be taken from `docs/PAGES_AND_JOURNEYS.md`. The table below is a feature inventory; it is not a substitute for that canonical route document.

| Page / area | Required content and behavior | Priority |
|---|---|---|
| Home | Club introduction; next event or latest archive entry; featured student project; two published roster members; navigation to key areas | P0 |
| Events | Upcoming event discovery and historical archive; event cards and clear event status | P0 |
| Event detail | Detailed event information and media, if present in canonical route guide | P1 |
| Projects | Verified member-built projects, summaries, technology tags, available repository/demo links | P0 |
| Team | Published roster and verified leadership hierarchy | P0 |
| About | Club identity, mission/culture, activities, peer learning and collaboration | P1 |
| Join | Clear joining information and official university registration handoff | P1 |
| Contact | Official social and university links; verified contact details only | P1 |
| Admin dashboard | Authorized staff/editor event create, edit, draft save, preview, publish workflow | P2 |
| Status | Calls FastAPI health endpoint and communicates healthy/unavailable state accessibly | P1 |

**Route rule:** Before coding navigation, inspect the current router and canonical route guide. Do not create duplicate routes or silently rename existing paths.

## 8. Shared frontend structure

Use the current frontend structure if it already exists. The following is a target logical organization, not a command to restructure the repository:

```text
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   └── router.js
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.jsx
│   │   │   ├── SiteFooter.jsx
│   │   │   └── PageShell.jsx
│   │   ├── navigation/
│   │   ├── ui/
│   │   ├── cards/
│   │   │   ├── EventCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── MemberCard.jsx
│   │   └── sections/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── EventDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── TeamPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── JoinPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── StatusPage.jsx
│   │   └── admin/
│   ├── services/
│   │   ├── apiClient.js
│   │   ├── eventsService.js
│   │   ├── projectsService.js
│   │   └── teamService.js
│   ├── hooks/
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── biome.json
```

### Frontend engineering rules

- Prefer reusable, small components over giant page components.
- Keep page-specific composition in `pages/` and shared presentation in `components/`.
- Keep API calls out of presentational card components.
- Centralize API base URL/configuration in the existing API client pattern.
- Provide loading, empty, and error states for API-backed pages.
- Use semantic HTML, keyboard-accessible controls, and meaningful image alternatives.
- Keep responsive behavior intentional; do not solve mobile layout by hiding essential content.

## 9. Backend structure

Preserve the actual backend layout and patterns. The README confirms a `backend/app/`, `backend/tests/`, `backend/compose.yaml`, `backend/pyproject.toml`, and `backend/uv.lock` structure.

A possible logical organization, only if it matches the existing implementation, is:

```text
backend/
├── app/
│   ├── main.py
│   ├── core/
│   │   └── config.py
│   ├── db/
│   │   ├── session.py
│   │   └── base.py
│   ├── models/
│   ├── schemas/
│   ├── routers/
│   │   ├── health.py
│   │   ├── events.py
│   │   ├── projects.py
│   │   ├── team.py
│   │   └── admin.py
│   └── services/
├── tests/
├── compose.yaml
├── pyproject.toml
└── uv.lock
```

Do not create this structure blindly. Inspect the current app and follow its established module boundaries.

## 10. Data and content model inventory

The following are conceptual entities to check against existing SQLAlchemy models. They are not instructions to duplicate models.

### Event
- Stable identifier
- Title
- Slug, if the current route design uses one
- Summary and full description
- Start/end date and time, if verified
- Location or venue, if verified
- Cover image/media reference
- Status: draft, published, completed/archived as supported by current design
- Optional registration destination, only when official and verified
- Created/updated timestamps

### Project
- Stable identifier
- Title
- Summary/description
- Cover image/media reference
- Technology tags
- Repository URL, if verified
- Demo URL, if verified
- Publication/visibility state

### Team member
- Stable identifier
- Name
- Role
- Domain
- Portrait reference, if approved and available
- Display order or publication state, if supported

### Staff/editor identity
- Existing authentication identity and role model.
- Must be server-authorized.
- Never store plaintext passwords.

Use the current schema and migrations as the source of truth.

## 11. API and system behavior

The exact endpoint paths and schemas must be read from the existing FastAPI code and docs. Do not invent incompatible contracts.

Expected resource capabilities, where supported by the existing API:
- Read published events.
- Read event details.
- Read published projects.
- Read published team members.
- Staff/editor authentication.
- Authorized event create/update.
- Save event draft.
- Preview draft without exposing it publicly.
- Publish event.

### Health-check contract from README

Architecture:

```text
React /status
    -> GET /api/health
        -> FastAPI
            -> SQLAlchemy + psycopg
                -> PostgreSQL 17
                    -> SELECT 1
```

Healthy:
- HTTP 200
- JSON: `{"status":"ok"}`

Database unavailable:
- HTTP 503
- JSON: `{"detail":"Database unavailable"}`

The status page should not expose credentials, connection strings, stack traces, or sensitive infrastructure details.

## 12. Content and asset rules

Primary content sources:
- `docs/CONTENT_REGISTER.md`
- Existing verified project assets
- README official community links

The README lists:
- Instagram: `@code2chill.osl`
- University listing: Chitkara University — Code2Chill
- LinkedIn: Code2Chill company page

Use the official destinations already recorded in the repository. Do not substitute unofficial pages.

Image rules:
- Prefer existing approved assets.
- Use descriptive filenames and meaningful alt text.
- Crop consistently without distorting faces or logos.
- Optimize large images and reserve aspect ratios to prevent layout shifts.
- Do not use the supplied inspiration collages as page backgrounds or pretend they are club event photographs.
- If a real asset is unavailable, use a tasteful designed placeholder and mark the content as awaiting an approved asset.

## 13. Non-functional requirements

### Responsive
- Mobile, tablet, laptop, and wide desktop.
- No unintended horizontal scrolling.
- Accessible mobile navigation.

### Accessibility
- Semantic landmarks and heading order.
- Keyboard access and visible focus.
- Form labels and understandable validation.
- Sufficient contrast.
- Reduced-motion support.
- Status is not conveyed by color alone.

### Performance
- Avoid unnecessary dependencies.
- Optimize and lazy-load below-the-fold imagery where appropriate.
- Avoid oversized background video or animation.
- Prevent layout shifts.
- Verify production build.

### Security
- Keep secrets in environment variables.
- Validate inputs server-side.
- Enforce authorization server-side.
- Do not expose private draft data publicly.
- Avoid unsafe HTML injection.
- Do not commit `.env` or credentials.

## 14. Delivery phases and acceptance criteria

### Phase 0 — Repository audit
- Read the agent instructions and project docs.
- Map current routes, components, API contracts, assets, and tests.
- Identify what already works.
- Produce a short plan before broad changes.

### Phase 1 — Design foundation
- Existing fonts and brand assets reused.
- Tokens and global styles established.
- Shared header/footer and responsive shell work.
- Focus and reduced-motion states included.

### Phase 2 — Public homepage
- All planned sections use verified content.
- Navigation and CTAs work.
- Desktop and mobile checked.

### Phase 3 — Public content pages
- Events, projects, and team work with real API data or clearly identified development fixtures.
- Loading, empty, and error states exist.
- About, Join, and Contact use verified information.

### Phase 4 — System integration
- Frontend uses existing FastAPI contracts.
- Status page matches the health-check contract.
- No fake success states.

### Phase 5 — Admin workflow
- Only implement if authentication and server-side authorization are genuinely supported.
- Draft, preview, and publish states are distinct.
- Unauthorized access is rejected by the backend.

### Phase 6 — QA and handoff
- Frontend production build passes.
- Backend tests pass.
- Routes and responsive behavior checked.
- Known limitations documented.
- Run instructions verified against `docs/DEVELOPMENT.md`.

## 15. Verification checklist

- [ ] Existing architecture preserved.
- [ ] Exact canonical routes confirmed from route documentation.
- [ ] Home page renders with verified content.
- [ ] Events page handles upcoming and archived content.
- [ ] Project page shows verified projects and links.
- [ ] Team page shows verified roster.
- [ ] About, Join, and Contact contain no fabricated facts.
- [ ] Navigation works with mouse, touch, and keyboard.
- [ ] Mobile layout has no horizontal overflow.
- [ ] Images have correct aspect ratios and alternatives.
- [ ] Loading, empty, and error states are present.
- [ ] `/status` calls the actual health endpoint.
- [ ] Health response matches HTTP 200/503 contract.
- [ ] Admin actions are server-authorized, if implemented.
- [ ] No secrets or credentials are committed.
- [ ] Frontend build passes.
- [ ] Backend tests pass.
- [ ] Documentation reflects actual implementation.

## 16. Repository structure reference

The uploaded README describes this top-level layout:

```text
Code2Chill/
├── backend/
│   ├── app/
│   ├── tests/
│   ├── compose.yaml
│   ├── pyproject.toml
│   └── uv.lock
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── biome.json
├── docs/
│   ├── BUILD_GUIDE.md
│   ├── DEVELOPMENT.md
│   ├── CONTENT_REGISTER.md
│   ├── LAUNCH_SCOPE.md
│   ├── PAGES_AND_JOURNEYS.md
│   ├── VISUAL_IDENTITY.md
│   ├── WIREFRAMES.md
│   ├── AGENTS.md
│   ├── planning/
│   └── design/
│       ├── brand/
│       ├── fonts/
│       ├── index.html
│       └── domination.html
├── Expriments/
├── README.md
└── WEBSITE_ROADMAP.md
```

This is the README's documented repository structure, not a verified live filesystem listing. Inspect the actual repository before assuming every path exists. Preserve the spelling `Expriments/` if it is present; do not rename it as incidental cleanup.

## 17. Change log

- Initial specification generated from the supplied README and two visual inspiration images.
- Proposed retro-tech maker visual direction and implementation workflow.
- All route paths, exact API schemas, current component names, database models, and current implementation status remain subject to repository inspection.
