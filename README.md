# Code2Chill (C2C) — Official Website & Portal

> **Where Serious Code Meets Chill Vibes**  
> Official student technical club website and digital platform for **Code2Chill (C2C)** at **Chitkara University**, operating under the **Office of Student Life (OSL)**.

The platform serves as the central digital presence for Code2Chill, showcasing its community identity, verified events, member-built engineering projects, leadership directory, recruitment pathways, and system diagnostic telemetry. Built with a modular React frontend and an asynchronous FastAPI backend, the project combines modern software engineering practices with a distinctive retro-tech maker aesthetic.

---

## About Code2Chill

Code2Chill brings together developers, makers, game programmers, hardware enthusiasts, and creative technologists at Chitkara University. The community fosters collaborative learning, hands-on experimentation, and open knowledge sharing through workshops, hack sessions, and student-driven technical initiatives.

This portal provides students, faculty, and visitors with direct access to:
- **Community Identity & Philosophy:** Learn about the club culture, domains, and technical focus areas.
- **Verified Events Archive:** Explore past workshops, interactive hackathons, and technical sessions.
- **Student Project Showcase:** Discover member-developed software applications, ML systems, and technical tools.
- **Team & Leadership Directory:** Meet the verified executive officers, division leads, and core members.
- **Official Recruitment Guidance:** Access verified registration procedures and onboarding pathways through Chitkara University's OSL.
- **Official Communication Channels:** Connect via institutional social media profiles and contact endpoints.
- **Live System Telemetry:** Check operational availability and database connectivity via real-time diagnostic checks.

---

## Features

- **Home (`/`):** 7-section responsive portal featuring club ethos, next/featured event highlights, showcased student projects, and quick navigation.
- **About (`/about`):** 5-section deep dive into club origin, core values, technical tracks, and maker philosophy.
- **Events (`/events`):** Curated archive of verified workshops and technical sessions with chronological metadata and tag filters.
- **Projects (`/projects`):** Showcase of documented student software projects featuring technology badges, summaries, and repository links.
- **Team (`/team`):** Full 10-person leadership directory organized across executive, technical, content, media/outreach, and core divisions.
- **Join (`/join`):** Clear recruitment handoff guidelines and eligibility criteria aligned with university OSL schedules.
- **Contact (`/contact`):** Direct institutional links, verified social media handles, and campus location details.
- **Status (`/status`):** Real-time client-side diagnostic dashboard communicating backend and database health.
- **Custom 404 (`*`):** Retro-tech terminal styled fallback page for undefined routes.
- **Responsive Architecture:** Fully responsive layouts tailored for mobile, tablet, laptop, and ultra-wide screens.
- **Component Design System:** Reusable UI components including accessible headers, mobile drawers, buttons, and section headings.

---

## Verified Club Information

- **Institution:** Chitkara University
- **Governance:** Office of Student Life (OSL)
- **Tagline:** *Where Serious Code Meets Chill Vibes*
- **Official Instagram:** [@code2chill.osl](https://www.instagram.com/code2chill.osl)
- **Official LinkedIn:** [Code2Chill](https://www.linkedin.com/company/code2chill)

### Executive Leadership & Team Roster
- **Executive Leadership:**
  - Lakshay Kalra — President / Club Leader
  - Jiya Arora — Vice-President
- **Verified Divisions & Domain Roster:**
  - **Technical Division:** Samanyu Thakur & Bhupinder Singh — Technical Heads
  - **Content Division:** Tamanna Kakkar & Ayush Sharma — Content Heads
  - **Media & Outreach Division:** Jashan Bhalla (Social Media Head) & Muskan Dhanda (Promotion Head)
  - **Core Division:** Divyana Garg & Hunar Mehndiratta — Core Members

### Verified Historical Events
- **DOMination** (`ARCHIVE // EVT_001`) — Web engineering, DOM manipulation, and modern JavaScript architecture workshop.
- **Byte The Vibe** (`ARCHIVE // EVT_002`) — Algorithmic exploration, competitive problem-solving, and peer coding session.

### Verified Student Projects
- **NEXUS — Emotion Detection** — Student-engineered computer vision and machine learning exploration.
- **ChronoAtlas** — Spatial and historical data visualization platform.

---

## Technology Stack

### Frontend
- **Framework:** React 19 (`react`, `react-dom`)
- **Routing:** React Router 7 (`react-router-dom: ^7.18.6`)
- **Styling:** Tailwind CSS 4 (`@tailwindcss/vite: ^4.0.0`)
- **Build Tool:** Vite 8 (`vite: ^8.0.0`)
- **Typography:** Barlow Condensed (display headings), DM Sans (body and interface text), JetBrains Mono (terminal labels and telemetry)

### Backend
- **Framework:** Python 3.13+ / 3.14+ with FastAPI
- **Database Engine & ORM:** PostgreSQL 16+ / 17 (async via `psycopg` binary), SQLAlchemy 2.0 Typed Async Mappings
- **Local Testing Database:** Async SQLite (`aiosqlite`) for zero-dependency isolated test executions
- **Migrations:** Alembic (migration environment configured)
- **Configuration & Validation:** Pydantic V2 & `pydantic-settings`
- **Testing:** Pytest, `pytest-asyncio`, HTTPX (`ASGITransport`)

### Development Tools
- **Version Control:** Git & GitHub
- **Code Editor:** VS Code
- **Package Managers:** npm (Node.js) & pip (Python)
- **Environment Isolation:** Python Virtual Environments (`venv`)

---

## Project Structure

```text
Code2Chill/
├── alembic.ini                    # Alembic migration configuration
├── antigravity.md                 # Antigravity operating instructions & constraints
├── brief.md                       # Project brief & creative direction
├── spec.md                        # Living technical & functional specification
├── README.md                      # Consolidated project documentation
├── .env.example                   # Backend environment template
├── .gitignore                     # Git ignore rules
│
├── backend/
│   ├── pyproject.toml             # Python package configuration & dependencies
│   ├── setup.py                   # Setuptools packaging script
│   ├── alembic/                   # Alembic environment & migration runner
│   │   ├── env.py                 # Async/sync database migration runner
│   │   ├── script.py.mako         # Migration script template
│   │   └── versions/              # Migration revisions (empty initially; generated per target DB)
│   ├── app/
│   │   ├── main.py                # FastAPI entrypoint & CORS middleware
│   │   ├── schemas.py             # Pydantic schemas (EventOut, ProjectOut, TeamMemberOut)
│   │   ├── core/
│   │   │   └── config.py          # Pydantic BaseSettings (DATABASE_URL, CORS_ORIGINS)
│   │   ├── db/
│   │   │   ├── base.py            # SQLAlchemy DeclarativeBase
│   │   │   ├── models.py          # Database models (Event, Project, TeamMember)
│   │   │   └── session.py         # AsyncSessionLocal & get_async_session dependency
│   │   └── routers/
│   │       ├── health.py          # GET /api/health (SELECT 1 ping)
│   │       ├── events.py          # GET /api/events/, GET /api/events/{slug}
│   │       ├── projects.py        # GET /api/projects/, GET /api/projects/{slug}
│   │       └── team.py            # GET /api/team/, GET /api/team/{slug}
│   └── tests/
│       ├── conftest.py            # Async SQLite test engine fixture & mock data
│       ├── test_cors.py           # CORS header and origin configuration tests
│       ├── test_health.py         # Health check tests (HTTP 200 / 503)
│       ├── test_events.py         # Event router tests
│       ├── test_projects.py       # Project router tests
│       └── test_team.py           # Team router tests
│
└── frontend/
    ├── .env.example               # Frontend environment template (VITE_API_BASE_URL)
    ├── index.html                 # HTML shell with Google Fonts
    ├── package.json               # Frontend dependencies & npm scripts
    ├── vite.config.js             # Vite configuration with Tailwind CSS plugin
    └── src/
        ├── main.jsx               # React application entrypoint
        ├── App.jsx                # BrowserRouter route table & PageShell layout
        ├── styles/
        │   ├── tokens.css         # CSS design token custom properties
        │   └── global.css         # Tailwind base styles & scrollbar customization
        ├── components/
        │   ├── layout/
        │   │   ├── Container.jsx   # Max-width responsive container
        │   │   ├── PageShell.jsx   # Shared layout with SiteHeader & SiteFooter
        │   │   ├── SiteHeader.jsx  # Navigation bar with desktop links & mobile drawer
        │   │   └── SiteFooter.jsx  # Footer with official links & affiliation
        │   └── ui/
        │       ├── Button.jsx      # Reusable button component (variants & states)
        │       └── SectionHeading.jsx # Consistent section header typography
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

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js:** v18.0.0 or later (tested with Node 20+ / 22+)
- **npm:** v9.0.0 or later
- **Python:** v3.13 or later (v3.13+ / v3.14+)
- **PostgreSQL:** v16 or v17 (optional for local SQLite testing)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/TUSHAR-2007/Code2Chill.git
cd Code2Chill
```

### 2. Environment Configuration

- **Backend Configuration:** Copy the example environment file at repository root:
  ```bash
  # Windows
  copy .env.example .env

  # Linux / macOS
  cp .env.example .env
  ```
  Edit `.env` to configure your PostgreSQL connection string:
  ```env
  DATABASE_URL=postgresql+psycopg://username:password@localhost:5432/code2chill
  ```
  *(Defaults to `postgresql+psycopg://user:password@localhost:5432/dbname` if unset).*

- **Frontend Configuration:** Copy the example environment file in `frontend/`:
  ```bash
  # Windows
  copy frontend\.env.example frontend\.env

  # Linux / macOS
  cp frontend/.env.example frontend/.env
  ```
  Edit `frontend/.env` to point to your FastAPI instance:
  ```env
  VITE_API_BASE_URL=http://127.0.0.1:8000/api
  ```
  *(Defaults to `http://127.0.0.1:8000/api` if unset).*

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

To build the production bundle:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview -- --port 5173 --host 127.0.0.1
```

### 4. Backend Setup

From the repository root, create and activate a Python virtual environment:

```bash
# Create virtual environment
python -m venv .venv

# Activate on Windows (PowerShell / CMD)
.venv\Scripts\activate

# Activate on Linux / macOS
source .venv/bin/activate
```

Install backend dependencies in editable mode using `pyproject.toml` / `setup.py`:

```bash
pip install -e backend
```

#### Database Migrations
The Alembic migration environment is pre-configured (`alembic.ini` and `backend/alembic/env.py`). When connecting to a newly initialized PostgreSQL database instance, generate and execute the initial revision:

```bash
# Generate the initial migration revision
alembic revision --autogenerate -m "initial migration"

# Apply pending migrations to the database
alembic upgrade head
```
*(Note: If testing purely locally without a PostgreSQL instance, the automated test suite utilizes an in-memory async SQLite engine with zero manual database setup required).*

#### Start the FastAPI Server

```bash
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

The interactive OpenAPI documentation will be accessible at `http://127.0.0.1:8000/docs`.

---

## API Health Check & Diagnostics

The backend provides a dedicated health check endpoint:

```http
GET /api/health
```

It verifies active database connectivity by executing a raw SQL `SELECT 1` ping.

- **Healthy Response (HTTP 200):**
  ```json
  {
    "status": "ok"
  }
  ```
- **Database Unavailable (HTTP 503):**
  ```json
  {
    "detail": "Database unavailable"
  }
  ```

### Diagnostic Telemetry Behavior
The `/status` page on the frontend performs genuine client-side HTTP requests to `/api/health` upon page load and when manually refreshed. It reports four discrete operational states:
1. **OPERATIONAL (HTTP 200):** FastAPI server is responsive and PostgreSQL connectivity is verified.
2. **DATABASE UNAVAILABLE (HTTP 503):** API router is online, but database connection could not be established.
3. **API OFFLINE / UNREACHABLE:** The backend server is stopped or network connection was refused; database connectivity remains unverified (`NOT EVALUATED`).
4. **UNKNOWN / ERROR:** Unexpected status code or non-JSON response payload received.

*(Note: Diagnostic telemetry reflects real-time client-triggered health queries; it does not run background daemon polling services).*

---

## Website Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Introduction to Code2Chill, community ethos, featured event, project teaser, and roster highlights |
| `/about` | About | 5-section club story, values, domain divisions, and maker culture |
| `/events` | Events | Chronological archive of past workshops, hack sessions, and community events |
| `/projects` | Projects | Showcase of student-built engineering projects with tech stacks and external links |
| `/team` | Team | 10-person leadership hierarchy and division directory |
| `/join` | Join | Recruitment requirements, selection stages, and university OSL registration handoff |
| `/contact` | Contact | Official social channels, campus coordinates, and contact details |
| `/status` | Status | Live backend API and database connectivity diagnostics |
| `*` | 404 | Retro-tech terminal styled 404 error page |

---

## Running Automated Tests

### Backend Test Suite
The backend contains 17 unit and integration tests covering CORS policies, health check responses, events, projects, and team endpoints against an isolated async SQLite engine.

To run the tests from the repository root:

```bash
# Windows (CMD / PowerShell)
cmd /c "set PYTHONPATH=. && .venv\Scripts\pytest"

# Linux / macOS
PYTHONPATH=. pytest
```

### Frontend Build Verification
Verify that the React application compiles cleanly without warnings or errors:

```bash
# From repository root
cmd /c "npm --prefix frontend run build"

# Or from within frontend/
npm run build
```

---

## Design System & Philosophy

Code2Chill utilizes a distinctive **“Retro-tech maker culture, reimagined”** aesthetic. The design balances a dark, high-contrast palette with purposeful terminal amber, acid green, and electric cyan accents.

### Design Tokens

| Token | CSS Variable | Hex Value | Role |
|---|---|---|---|
| Background | `--color-bg` | `#090B0D` | Deep near-black background |
| Surface | `--color-surface` | `#111619` | Primary card and section surfaces |
| Elevated Surface | `--color-surface-raised` | `#1A2224` | Elevated cards, buttons, badges |
| Warm Amber | `--color-amber` | `#FF6B35` | Primary brand accent & focus highlights |
| Electric Cyan | `--color-cyan` | `#45D9E8` | Secondary accent, technical tags & badges |
| Acid Green | `--color-acid` | `#B8F34A` | Tertiary accent, verified indicators & telemetry |
| Main Text | `--color-text` | `#F1F3E9` | Crisp high-contrast readable body text |
| Muted Text | `--color-muted` | `#A5B0AA` | Secondary labels, descriptions, and metadata |
| Structural Line | `--color-line` | `#344044` | Structural lines & card borders |

---

## Official Links & Affiliation

- **Institution:** Chitkara University
- **Institutional Governance:** Office of Student Life (OSL)
- **Official Instagram:** [https://www.instagram.com/code2chill.osl](https://www.instagram.com/code2chill.osl)
- **Official LinkedIn:** [https://www.linkedin.com/company/code2chill](https://www.linkedin.com/company/code2chill)

---

## Contribution

Contributions, suggestions, and improvements are welcome from the Code2Chill community and student developers.

If you would like to contribute:
1. Fork the repository.
2. Create a focused feature branch (`git checkout -b feature/your-feature-name`).
3. Maintain existing architecture, coding conventions, and design system tokens.
4. Verify your changes using the automated test suite and frontend build runner.
5. Submit a pull request with a detailed description of changes.

---

## License

No open-source license has been specified yet. All rights, assets, and branding remain subject to the project owner's and Chitkara University's Office of Student Life policies.

---

**Built for the Code2Chill community.**

*Build. Break. Learn. Repeat.*
