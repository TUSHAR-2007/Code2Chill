'''SQLAlchemy base model.

Provides a declarative base for async ORM models. Follows Antigravity pre‑operation steps.
''' 

from sqlalchemy.orm import declarative_base

Base = declarative_base()
