'''SQLAlchemy ORM models for the Code2Chill backend.

- Event: represents an event with title, slug, description, start/end dates, publication status, etc.
- Project: represents a student project with title, slug, description, tech stack, links, publication status.
- TeamMember: represents a team member with name, slug, role, bio, picture URL, publication status.

All models use SQLAlchemy 2.x Typed Mappings and include ``created_at`` and ``updated_at`` timestamps.
'''

from __future__ import annotations

from datetime import datetime, timezone
from typing import Optional, List

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

from sqlalchemy import (
    Column,
    String,
    Text,
    Boolean,
    DateTime,
    Integer,
    Table,
    UniqueConstraint,
    Index,
)
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base


class Event(Base):
    __tablename__ = "events"
    __table_args__ = (
        UniqueConstraint("slug", name="uq_events_slug"),
        Index("ix_events_published", "published"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    start_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    end_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False
    )


class Project(Base):
    __tablename__ = "projects"
    __table_args__ = (
        UniqueConstraint("slug", name="uq_projects_slug"),
        Index("ix_projects_published", "published"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    tech_stack: Mapped[Optional[str]] = mapped_column(String(200), nullable=True)
    repo_url: Mapped[Optional[str]] = mapped_column(String(300), nullable=True)
    demo_url: Mapped[Optional[str]] = mapped_column(String(300), nullable=True)
    published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False
    )


class TeamMember(Base):
    __tablename__ = "team_members"
    __table_args__ = (
        UniqueConstraint("slug", name="uq_team_members_slug"),
        Index("ix_team_members_published", "published"),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    slug: Mapped[str] = mapped_column(String(150), nullable=False, unique=True)
    role: Mapped[Optional[str]] = mapped_column(String(150), nullable=True)
    bio: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    picture_url: Mapped[Optional[str]] = mapped_column(String(300), nullable=True)
    published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now, nullable=False)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utc_now, onupdate=utc_now, nullable=False
    )
