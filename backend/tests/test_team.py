'''Team router tests.'''

import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_list_team(async_client: AsyncClient, populate_team):
    response = await async_client.get('/api/team/')
    assert response.status_code == 200
    data = response.json()
    # Only published members should be returned
    assert isinstance(data, list)
    assert any(m['slug'] == 'published-member' for m in data)
    assert all(m['published'] for m in data)

@pytest.mark.asyncio
async def test_unpublished_team_members_excluded(async_client: AsyncClient, populate_team):
    # Public listing must not contain unpublished/draft members
    response = await async_client.get('/api/team/')
    assert response.status_code == 200
    members = response.json()
    slugs = [m['slug'] for m in members]
    assert 'published-member' in slugs
    assert 'draft-member' not in slugs

    # Direct retrieval of an unpublished member must return 404
    detail_res = await async_client.get('/api/team/draft-member')
    assert detail_res.status_code == 404
    assert detail_res.json() == {'detail': 'Team member not found'}

@pytest.mark.asyncio
async def test_get_member_success(async_client: AsyncClient, populate_team):
    response = await async_client.get('/api/team/published-member')
    assert response.status_code == 200
    member = response.json()
    assert member['slug'] == 'published-member'
    assert member['published'] is True

@pytest.mark.asyncio
async def test_get_member_not_found(async_client: AsyncClient, populate_team):
    response = await async_client.get('/api/team/nonexistent')
    assert response.status_code == 404
