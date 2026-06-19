from datetime import datetime

from pydantic import BaseModel


class Calendar(BaseModel):
    title: str
    start: datetime
    end: datetime
    meet_url: str | None = None
