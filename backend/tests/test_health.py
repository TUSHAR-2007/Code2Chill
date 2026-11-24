'''Health endpoint tests.'''

import pytest
from httpx import AsyncClient
from backend.app.db.session import get_async_session
from backend.app.main import app

@pytest.mark.asyncio
async def test_health_success(async_client: AsyncClient):
    response = await async_client.get('/api/health')
    assert response.status_code == 200
    assert response.json() == {'status': 'ok'}

@pytest.mark.asyncio
async def test_health_db_failure(async_client: AsyncClient):
    class FailingSession:
        async def execute(self, *args, **kwargs):
            raise RuntimeError("Database connection failure")

    async def override_failing_session():
        yield FailingSession()

    original_override = app.dependency_overrides.get(get_async_session)
    app.dependency_overrides[get_async_session] = override_failing_session
    try:
        response = await async_client.get('/api/health')
        assert response.status_code == 503
        assert response.json() == {'detail': 'Database unavailable'}
    finally:
        if original_override is not None:
            app.dependency_overrides[get_async_session] = original_override
        else:
            app.dependency_overrides.pop(get_async_session, None)

