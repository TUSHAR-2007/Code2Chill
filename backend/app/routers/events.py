'''Event router for FastAPI.
Provides endpoints to list events and retrieve event details.
''' 

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..db.session import get_async_session
from ..db import models
from ..schemas import EventOut

router = APIRouter(prefix="/api/events", tags=["events"])

@router.get("/", response_model=list[EventOut])
async def list_events(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.Event).where(models.Event.published == True))
    events = result.scalars().all()
    return events

@router.get("/{slug}", response_model=EventOut)
async def get_event(slug: str, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(models.Event).where(models.Event.slug == slug, models.Event.published == True))
    event = result.scalars().first()
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event
