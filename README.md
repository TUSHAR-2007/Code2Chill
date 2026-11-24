# Code2Chill — Official Website

A modern, responsive website for **Code2Chill**, a student-led technical club at **Chitkara University**, operating under the **Office of Student Life (OSL)**.

The platform serves as a digital presence for the club, showcasing its identity, events, projects, team members, community information, and recruitment guidance.

Built with React on the frontend and FastAPI on the backend, the project follows a modular architecture with a responsive, retro-tech inspired design.

---

## About the Project

Code2Chill brings together students interested in technology, programming, innovation, and collaborative learning.

This website aims to provide a central platform where students can:

- Learn about Code2Chill and its community.
- Explore club events and activities.
- Discover student projects.
- Meet the club team.
- Find information about joining the community.
- Access official communication channels.
- Check the availability of the website's backend services.

---

## Features

- **Home:** Introduction to Code2Chill and an overview of the community.
- **About:** Club identity, philosophy, and technical interests.
- **Events:** Event information and archive.
- **Projects:** Showcase of documented student projects.
- **Team:** Club leadership and team directory.
- **Join:** Recruitment information and community participation guidance.
- **Contact:** Official social media channels and institutional information.
- **Status:** Live backend health monitoring through the API health endpoint.
- **Responsive Design:** Layouts designed for mobile, tablet, laptop, and desktop screens.
- **Reusable Components:** Shared navigation, footer, layout, and UI components.

---

## Tech Stack

### Frontend
- React 19
- Vite
- JavaScript
- Tailwind CSS 4
- React Router

### Backend
- Python
- FastAPI
- SQLAlchemy 2.x
- Pydantic V2
- PostgreSQL 17
- Alembic

### Development Tools
- Git & GitHub
- VS Code
- npm
- Python Virtual Environment

---

## Project Structure

```text
Code2Chill/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── db/
│   │   └── ...
│   ├── alembic/
│   └── tests/
│
├── docs/
│
├── .gitignore
├── README.md
├── antigravity.md
├── brief.md
└── spec.md
```

*The structure above is a high-level overview. Refer to the actual repository for the complete directory structure.*

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Python 3.10 or later
- PostgreSQL
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Code2Chill
```

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### 3. Backend Setup

Open another terminal and navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows:

```bash
.venv\Scripts\activate
```

Install the backend dependencies using the repository's dependency manifest:

```bash
pip install -r requirements.txt
```

Configure the required environment variables and PostgreSQL database connection according to the project's backend configuration.

Start the FastAPI application using the entry point configured in the repository.

---

## API Health Check

The backend provides a health-check endpoint:

```http
GET /api/health
```

It verifies database connectivity by executing a simple SQL query.

Expected healthy response:

```json
{
  "status": "ok"
}
```

If database connectivity fails, the endpoint returns HTTP 503:

```json
{
  "detail": "Database unavailable"
}
```

The frontend Status page uses this endpoint to communicate actual backend and database health.

---

## Website Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About Code2Chill |
| `/events` | Events |
| `/projects` | Projects |
| `/team` | Team directory |
| `/join` | Join the community |
| `/contact` | Contact information |
| `/status` | System status |

Invalid routes display a custom 404 page.

---

## Running Tests

### Backend Tests

From the project root, activate the backend virtual environment and run:

```bash
set PYTHONPATH=.
.venv\Scripts\pytest
```

The test suite covers the existing API functionality, including health, events, projects, team, and CORS behavior.

---

## Design Philosophy

The website follows a dark, technical, retro-inspired visual identity.

Its design combines:

- Dark surfaces and high-contrast typography.
- Orange, cyan, and acid-green accents.
- Technical labels and interface-inspired elements.
- Custom SVG illustrations.
- Responsive layouts and reusable UI components.

The goal is to reflect the club's identity through a distinctive digital experience.

---

## Official Links

- **University:** Chitkara University
- **Institutional Affiliation:** Office of Student Life (OSL)
- **Instagram:** https://www.instagram.com/code2chill.osl
- **LinkedIn:** https://www.linkedin.com/company/code2chill

---

## Contribution

Contributions, suggestions, and improvements are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Test your implementation.
5. Submit a pull request.

Please maintain the existing project architecture, coding conventions, and design system.

---

## License

No open-source license has been specified yet. All rights and permissions remain subject to the project owner's and relevant institution's policies.

---

**Built for the Code2Chill community.**

*Build. Break. Learn. Repeat.*
