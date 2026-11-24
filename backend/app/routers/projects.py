'''Project router for FastAPI.
Provides endpoints to list projects and retrieve project details.
''' 

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..db.session import get_async_session
from ..db import models
from ..schemas import ProjectOut

router = APIRouter(prefix="/api/projects", tags=["projects"])

@router.get("/", response_model=list[ProjectOut])
async def list_projects(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.Project).where(models.Project.published == True))
    projects = result.scalars().all()
    return projects

@router.get("/{slug}", response_model=ProjectOut)
async def get_project(slug: str, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.Project).where(models.Project.slug == slug, models.Project.published == True))
    project = result.scalars().first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
