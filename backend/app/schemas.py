'''Pydantic schemas for API responses.
All schemas use ConfigDict(from_attributes=True) to allow ORM model population.
''' 

from datetime import datetime
from pydantic import BaseModel, ConfigDict
from typing import Optional

class EventOut(BaseModel):
    id: int
    title: str
    slug: str
    description: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    published: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

class ProjectOut(BaseModel):
    id: int
    title: str
    slug: str
    description: Optional[str] = None
    tech_stack: Optional[str] = None
    repo_url: Optional[str] = None
    demo_url: Optional[str] = None
    published: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

class TeamMemberOut(BaseModel):
    id: int
    name: str
    slug: str
    role: Optional[str] = None
    bio: Optional[str] = None
    picture_url: Optional[str] = None
    published: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
