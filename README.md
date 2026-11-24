# Code2Chill (C2C) — Official Portal

> **Where Serious Code Meets Chill Vibes**  
> Official student technical club portal for **Code2Chill (C2C)** at **Chitkara University**, under the **Office of Student Life (OSL)**.

---

## 1. Overview

Code2Chill is a student-led technical community bringing together developers, makers, game developers, hardware enthusiasts, and creative technologists. The portal showcases verified events, member-built projects, the leadership roster, official contact channels, and system availability.

---

## 2. Technology Stack

### Frontend
- **Framework:** React 19 (`react`, `react-dom`)
- **Routing:** React Router 7 (`react-router-dom: ^7.18.6`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite: ^4.0.0`)
- **Build Tool:** Vite 8 (`vite: ^8.0.0`)
- **Typography:** Barlow Condensed, DM Sans, JetBrains Mono

### Backend
- **Framework:** Python 3.13+ / 3.14+ with FastAPI
- **Database Engine & ORM:** PostgreSQL (async via `asyncpg` / `psycopg[binary]`), SQLAlchemy 2.0 Typed Async Mappings
- **Migrations:** Alembic
- **Configuration & Validation:** Pydantic V2 & `pydantic-settings`
- **Testing:** Pytest, `pytest-asyncio`, HTTPX (`ASGITransport`)

---

## 3. Repository Architecture

```text
E:\club project/
├── alembic.ini                    # Alembic migration configuration
├── antigravity.md                 # Antigravity operating instructions & constraints
├── brief.md                       # Project brief & creative direction
├── spec.md                        # Living technical & functional specification
├── README.md                      # Project architecture & setup documentation
├── .env.example                   # Backend environment template
├── .gitignore                     # Git ignore rules
│
├── backend/
│   ├── alembic/                   # Alembic environment & migration versions
│   │   ├── env.py                 # Async/sync database migration runner
│   │   ├── script.py.mako         # Migration script template
│   │   └── versions/              # Generated migration revisions
│   ├── app/
│   │   ├── core/config.py         # Pydantic BaseSettings (DATABASE_URL, CORS_ORIGINS)
│   │   ├── db/
│   │   │   ├── base.py            # SQLAlchemy DeclarativeBase
│   │   │   ├── models.py          # Event, Project, TeamMember models
│   │   │   └── session.py         # AsyncSessionLocal & get_async_session dependency
│   │   ├── routers/
│   │   │   ├── health.py          # GET /api/health (SELECT 1 ping)
│   │   │   ├── events.py          # GET /api/events/, GET /api/events/{slug}
│   │   │   ├── projects.py        # GET /api/projects/, GET /api/projects/{slug}
│   │   │   └── team.py            # GET /api/team/, GET /api/team/{slug}
│   │   ├── schemas.py             # EventOut, ProjectOut, TeamMemberOut
│   │   └── main.py                # FastAPI entrypoint & CORS middleware
│   ├── tests/
│   │   ├── conftest.py            # SQLite async test engine fixture & mock data
│   │   ├── test_cors.py           # CORS header tests
│   │   ├── test_health.py         # Health check tests (HTTP 200 / 503)
│   │   ├── test_events.py         # Event router tests
│   │   ├── test_projects.py       # Project router tests
│   │   └── test_team.py           # Team router tests
│   └── setup.py / pyproject.toml  # Python packaging definitions
│
└── frontend/
    ├── .env.example               # Frontend environment template (VITE_API_BASE_URL)
    ├── index.html                 # HTML shell with Google Fonts
    ├── package.json               # Frontend dependencies & scripts
    ├── vite.config.js             # Vite configuration with Tailwind CSS plugin
    └── src/
        ├── main.jsx               # Application entrypoint
        ├── App.jsx                # BrowserRouter route table & PageShell layout
        ├── styles/
        │   ├── tokens.css         # Design token variables
        │   └── global.css         # Tailwind base styles & scrollbar customization
        ├── components/
        │   ├── layout/
        │   │   ├── Container.jsx   # Max-width layout container
        │   │   ├── PageShell.jsx   # Shared layout with SiteHeader & SiteFooter
        │   │   ├── SiteHeader.jsx  # Sticky navigation bar with mobile drawer
        │   │   └── SiteFooter.jsx  # Footer with official links & affiliation
        │   └── ui/
        │       ├── Button.jsx      # Reusable button component
        │       └── SectionHeading.jsx # Section header typography
        └── pages/
            ├── HomePage.jsx       # 7-section responsive portal homepage
            ├── AboutPage.jsx      # 5-section club identity & philosophy
            ├── EventsPage.jsx     # Verified events archive & session highlights
            ├── ProjectsPage.jsx   # Verified student projects showcase
            ├── TeamPage.jsx       # Verified 10-person leadership & domain roster
            ├── JoinPage.jsx       # Official university recruitment guidance
            ├── ContactPage.jsx    # Official channels (Instagram, LinkedIn, OSL)
            ├── StatusPage.jsx     # Live backend diagnostic telemetry dashboard
            └── NotFoundPage.jsx   # Retro-tech 404 error page
```

---

## 4. Setup & Running Locally

### Prerequisites
- Node.js 18+ (tested with Node 20+) & `npm`
- Python 3.13+ or 3.14+
- PostgreSQL 16+ or 17 (optional for local SQLite testing)

### Environment Configuration
- **Backend Environment:** Copy `.env.example` to `.env` in the repository root:
  ```bash
  DATABASE_URL=postgresql+psycopg://username:password@localhost:5432/code2chill
  ```
  *(Defaults to `postgresql+psycopg://user:password@localhost:5432/dbname` if unset).*
- **Frontend Environment:** Copy `frontend/.env.example` to `frontend/.env`:
  ```bash
  VITE_API_BASE_URL=http://127.0.0.1:8000/api
  ```
  *(Defaults to `http://127.0.0.1:8000/api` if unset).*

### Frontend Development
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview -- --port 5173 --host 127.0.0.1
```

### Backend Development
```bash
# From repository root
# Activate Python virtual environment
.venv\Scripts\activate   # Windows PowerShell / CMD
# or source .venv/bin/activate on Unix

# Run database migrations (when PostgreSQL is configured)
alembic upgrade head

# Launch FastAPI development server
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

### Running Automated Tests
```bash
# Backend pytest suite (17 tests)
cmd /c "set PYTHONPATH=. && .venv\Scripts\pytest"

# Frontend build verification
npm --prefix frontend run build
```

---

## 5. Verified Club Information

- **Institution:** Chitkara University
- **Governance:** Office of Student Life (OSL)
- **Tagline:** *Where Serious Code Meets Chill Vibes*
- **Official Instagram:** [@code2chill.osl](https://www.instagram.com/code2chill.osl)
- **Official LinkedIn:** [Code2Chill](https://www.linkedin.com/company/code2chill)
- **Executive Leadership:**
  - Lakshay Kalra — President / Club Leader
  - Jiya Arora — Vice-President
- **Verified Divisions & Domain Roster:**
  - **Technical:** Samanyu Thakur & Bhupinder Singh — Technical Heads
  - **Content:** Tamanna Kakkar & Ayush Sharma — Content Heads
  - **Media & Outreach:** Jashan Bhalla (Social Media Head) & Muskan Dhanda (Promotion Head)
  - **Core:** Divyana Garg & Hunar Mehndiratta — Core Members
- **Verified Historical Events:**
  - **DOMination** (`ARCHIVE // EVT_001`) — Web engineering and DOM manipulation workshop
  - **Byte The Vibe** (`ARCHIVE // EVT_002`) — Algorithmic exploration and peer coding session
- **Verified Student Projects:**
  - **NEXUS — Emotion Detection** — Student-built vision and machine learning exploration
  - **ChronoAtlas** — Spatial and historical data visualization platform

---

## 6. Design System Tokens

| Token | Hex Value | Role |
|---|---|---|
| Background | `#090B0D` | Deep near-black background |
| Surface | `#111619` | Primary card & section surface |
| Elevated Surface | `#1A2224` | Elevated cards, buttons, badges |
| Warm Amber / Orange | `#FF6B35` | Primary brand accent & focus highlights |
| Electric Cyan | `#45D9E8` | Secondary accent, technical tags & focus rings |
| Acid Green | `#B8F34A` | Tertiary accent, verified indicators & telemetry |
| Main Text | `#F1F3E9` | Crisp high-contrast readable body text |
| Muted Text | `#A5B0AA` | Secondary labels, descriptions, and metadata |
| Borders | `#344044` | Structural lines & card borders |

---

## 7. Status Page & Health Telemetry

The `/status` route performs genuine live browser-to-backend fetch queries to `/api/health`:
- **HTTP 200 + `{"status":"ok"}`**: All systems operational (FastAPI operational, database query succeeded).
- **HTTP 503 + `{"detail":"Database unavailable"}`**: API reachable, database connection unavailable.
- **Connection Refusal / Offline**: Backend unavailable, database status unknown (`NOT EVALUATED`).
- **Unexpected Status / Payload**: Health status unknown.
