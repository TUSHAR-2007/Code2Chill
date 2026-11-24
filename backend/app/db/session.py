'''Async database session utilities.

Creates a SQLAlchemy async engine based on the `DATABASE_URL` defined in
`backend/app/core/config.py`. The engine uses the `asyncpg` driver (via
`psycopg[binary]`).

The module follows Antigravity's pre‑operation checklist:
1️⃣ Re‑read `antigravity.md` – done.
2️⃣ Review `spec.md` – confirms async DB usage.
3️⃣ Review `brief.md` – no impact.
4️⃣ Inspect existing implementation – no session utilities yet.
5️⃣ Verify docs – none needed now.

`async_session` is provided for dependency injection in FastAPI routers.
''' 

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from ..core.config import settings

# The DATABASE_URL must be an async URL, e.g.
#   postgresql+psycopg://user:pass@host:5432/dbname
engine = create_async_engine(settings.database_url, echo=False, future=True)

# Session factory used by FastAPI dependencies.
AsyncSessionLocal = async_sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

async def get_async_session() -> AsyncSession:
    """Yield a new async session.

    FastAPI endpoints should depend on this function via `Depends`.
    """
    async with AsyncSessionLocal() as session:
        yield session
