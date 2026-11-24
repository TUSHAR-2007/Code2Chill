'''Backend configuration settings.

This module uses **pydantic-settings** (Pydantic V2) to load environment variables.
The Settings class provides:
- `database_url`: PostgreSQL async URL (e.g., `postgresql+psycopg://user:pass@host/db`).
- `cors_origins`: list of allowed origins for the FastAPI CORS middleware,
  defaulting to explicit local development origins. Production origins can be
  provided as a comma-separated string or JSON list via the CORS_ORIGINS environment variable.
''' 

import json
from typing import Union
from pydantic_settings import BaseSettings
from pydantic import ConfigDict, field_validator

class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    database_url: str = "postgresql+psycopg://user:password@localhost:5432/dbname"

    # Default to local development frontend origins (Vite / React defaults)
    cors_origins: list[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
    ]

    @field_validator("cors_origins", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, list[str]]) -> list[str]:
        if isinstance(v, str):
            v_stripped = v.strip()
            if v_stripped.startswith("[") and v_stripped.endswith("]"):
                try:
                    return json.loads(v_stripped)
                except Exception:
                    pass
            return [origin.strip() for origin in v_stripped.split(",") if origin.strip()]
        elif isinstance(v, list):
            return v
        raise ValueError("Invalid format for cors_origins")

    model_config = ConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

# Export a singleton for import convenience.
settings = Settings()
