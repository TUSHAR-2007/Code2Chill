'''Event router tests.'''

import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_list_events(async_client: AsyncClient, populate_events):
    response = await async_client.get('/api/events/')
    assert response.status_code == 200
    data = response.json()
    # Only published events should be returned
    assert isinstance(data, list)
    assert any(event['slug'] == 'published-event' for event in data)
    assert all(event['published'] for event in data)

@pytest.mark.asyncio
async def test_unpublished_events_excluded(async_client: AsyncClient, populate_events):
    # Public listing must not contain unpublished/draft events
    response = await async_client.get('/api/events/')
    assert response.status_code == 200
    events = response.json()
    slugs = [event['slug'] for event in events]
    assert 'published-event' in slugs
    assert 'draft-event' not in slugs

    # Direct retrieval of an unpublished event must return 404
    detail_res = await async_client.get('/api/events/draft-event')
    assert detail_res.status_code == 404
    assert detail_res.json() == {'detail': 'Event not found'}

@pytest.mark.asyncio
async def test_get_event_success(async_client: AsyncClient, populate_events):
    response = await async_client.get('/api/events/published-event')
    assert response.status_code == 200
    event = response.json()
    assert event['slug'] == 'published-event'
    assert event['published'] is True

@pytest.mark.asyncio
async def test_get_event_not_found(async_client: AsyncClient, populate_events):
    response = await async_client.get('/api/events/nonexistent')
    assert response.status_code == 404
