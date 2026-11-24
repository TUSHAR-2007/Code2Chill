'''Team router for FastAPI.
Provides endpoints to list team members and retrieve details.
''' 

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..db.session import get_async_session
from ..db import models
from ..schemas import TeamMemberOut

router = APIRouter(prefix="/api/team", tags=["team"])

@router.get("/", response_model=list[TeamMemberOut])
async def list_team(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.TeamMember).where(models.TeamMember.published == True))
    members = result.scalars().all()
    return members

@router.get("/{slug}", response_model=TeamMemberOut)
async def get_member(slug: str, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.TeamMember).where(models.TeamMember.slug == slug, models.TeamMember.published == True))
    member = result.scalars().first()
    if not member:
        raise HTTPException(status_code=404, detail="Team member not found")
    return member
