'''Project router tests.'''

import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_list_projects(async_client: AsyncClient, populate_projects):
    response = await async_client.get('/api/projects/')
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    # Only published projects should be returned
    assert any(p['slug'] == 'published-project' for p in data)
    assert all(p['published'] for p in data)

@pytest.mark.asyncio
async def test_unpublished_projects_excluded(async_client: AsyncClient, populate_projects):
    # Public listing must not contain unpublished/draft projects
    response = await async_client.get('/api/projects/')
    assert response.status_code == 200
    projects = response.json()
    slugs = [p['slug'] for p in projects]
    assert 'published-project' in slugs
    assert 'draft-project' not in slugs

    # Direct retrieval of an unpublished project must return 404
    detail_res = await async_client.get('/api/projects/draft-project')
    assert detail_res.status_code == 404
    assert detail_res.json() == {'detail': 'Project not found'}

@pytest.mark.asyncio
async def test_get_project_success(async_client: AsyncClient, populate_projects):
    response = await async_client.get('/api/projects/published-project')
    assert response.status_code == 200
    proj = response.json()
    assert proj['slug'] == 'published-project'
    assert proj['published'] is True

@pytest.mark.asyncio
async def test_get_project_not_found(async_client: AsyncClient, populate_projects):
    response = await async_client.get('/api/projects/nonexistent')
    assert response.status_code == 404
