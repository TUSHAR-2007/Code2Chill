# Conftest for backend tests.
"""Provides an isolated async SQLite database, creates tables from models,
and overrides the FastAPI dependency that provides the async session used by routers.
"""

import os
import asyncio
from pathlib import Path

import pytest
import pytest_asyncio
from fastapi import FastAPI
from httpx import AsyncClient, ASGITransport

# Define test database URL and set env before importing settings
TEST_DB_URL = "sqlite+aiosqlite:///./test_db.sqlite"
os.environ["DATABASE_URL"] = TEST_DB_URL

# Import after setting env
from backend.app.db.session import get_async_session
from backend.app.main import app as fastapi_app
from backend.app.db import base, models

# Create async engine and session factory for tests
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

engine = create_async_engine(TEST_DB_URL, echo=False, future=True)
AsyncSessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Override the get_async_session dependency
async def override_get_async_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session

app = fastapi_app
app.dependency_overrides[get_async_session] = override_get_async_session

# Async client fixture (after app is defined)
@pytest_asyncio.fixture
async def async_client():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://testserver") as client:
        yield client

# Prepare database fixture
@pytest_asyncio.fixture(scope="session", autouse=True)
async def prepare_database():
    # Create tables
    async with engine.begin() as conn:
        await conn.run_sync(base.Base.metadata.create_all)
    yield
    # Drop tables and clean up
    async with engine.begin() as conn:
        await conn.run_sync(base.Base.metadata.drop_all)
    await engine.dispose()
    db_path = Path("./test_db.sqlite")
    if db_path.exists():
        db_path.unlink()

# Additional fixtures for test data
import uuid
from sqlalchemy import delete

@pytest_asyncio.fixture(scope="function")
async def populate_events():
    async with AsyncSessionLocal() as session:
        event1 = models.Event(
            title="Published Event",
            slug="published-event",
            description="A published event",
            published=True,
        )
        event2 = models.Event(
            title="Draft Event",
            slug="draft-event",
            description="An unpublished event",
            published=False,
        )
        session.add_all([event1, event2])
        await session.commit()
    yield
    async with AsyncSessionLocal() as session:
        await session.execute(delete(models.Event))
        await session.commit()

@pytest_asyncio.fixture(scope="function")
async def populate_projects():
    async with AsyncSessionLocal() as session:
        proj1 = models.Project(
            title="Published Project",
            slug="published-project",
            description="A published project",
            tech_stack="Python",
            published=True,
        )
        proj2 = models.Project(
            title="Draft Project",
            slug="draft-project",
            description="An unpublished project",
            tech_stack="JS",
            published=False,
        )
        session.add_all([proj1, proj2])
        await session.commit()
    yield
    async with AsyncSessionLocal() as session:
        await session.execute(delete(models.Project))
        await session.commit()

@pytest_asyncio.fixture(scope="function")
async def populate_team():
    async with AsyncSessionLocal() as session:
        member1 = models.TeamMember(
            name="Published Member",
            slug="published-member",
            role="Developer",
            published=True,
        )
        member2 = models.TeamMember(
            name="Draft Member",
            slug="draft-member",
            role="Designer",
            published=False,
        )
        session.add_all([member1, member2])
        await session.commit()
    yield
    async with AsyncSessionLocal() as session:
        await session.execute(delete(models.TeamMember))
        await session.commit()
