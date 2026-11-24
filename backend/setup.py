from setuptools import setup, find_packages

setup(
    name="code2chill-backend",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "fastapi",
        "uvicorn[standard]",
        "sqlalchemy",
        "psycopg-binary",
        "pydantic-settings",
        "alembic",
        "aiosqlite",
    ],
    python_requires=">=3.13",
)
