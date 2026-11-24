"""
Backend entrypoint.

- Load settings from core.config
- Apply CORS middleware using settings.cors_origins
- Include health router and placeholder for other routers
"""

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.config import settings
from backend.app.routers import health

app = FastAPI(title="Code2Chill Backend")

# Configure CORS
origins = settings.cors_origins
has_wildcard = "*" in origins
allow_credentials = False if (has_wildcard or not origins) else True

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=allow_credentials,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health router
app.include_router(health.router)

from backend.app.routers import events, projects, team
app.include_router(events.router)
app.include_router(projects.router)
app.include_router(team.router)

