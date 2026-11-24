'''CORS configuration tests.'''

import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_cors_permits_configured_frontend_origin(async_client: AsyncClient):
    # Origin configured in settings (e.g. Vite dev server on localhost:5173) should be permitted
    response = await async_client.get(
        '/api/health',
        headers={"Origin": "http://localhost:5173"}
    )
    assert response.status_code == 200
    assert response.headers.get('access-control-allow-origin') == 'http://localhost:5173'
    assert response.headers.get('access-control-allow-credentials') == 'true'

@pytest.mark.asyncio
async def test_cors_rejects_unapproved_origin(async_client: AsyncClient):
    # Unapproved origin must not receive Access-Control-Allow-Origin header
    response = await async_client.get(
        '/api/health',
        headers={"Origin": "http://unapproved-origin.com"}
    )
    assert response.status_code == 200
    assert response.headers.get('access-control-allow-origin') is None

@pytest.mark.asyncio
async def test_cors_preflight_unapproved_origin(async_client: AsyncClient):
    # Preflight request from unapproved origin must not be granted access
    response = await async_client.options(
        '/api/health',
        headers={
            "Origin": "http://unapproved-origin.com",
            "Access-Control-Request-Method": "GET",
        }
    )
    assert response.headers.get('access-control-allow-origin') is None
