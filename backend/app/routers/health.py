'''FastAPI health endpoint with database connectivity check.

- Returns 200 {"status":"ok"} when the DB connection succeeds.
- Returns 503 {"detail":"Database unavailable"} when the DB ping fails.
''' 

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from backend.app.db.session import get_async_session

router = APIRouter()

@router.get("/api/health", response_class=JSONResponse)
async def health_check(session: AsyncSession = Depends(get_async_session)):
    try:
        # Simple ping query – works on PostgreSQL and SQLite.
        await session.execute(text("SELECT 1"))
    except Exception:
        raise HTTPException(status_code=503, detail="Database unavailable")
    return {"status": "ok"}
