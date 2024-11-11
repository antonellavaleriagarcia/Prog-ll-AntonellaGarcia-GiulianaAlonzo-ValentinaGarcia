from pydantic import BaseModel, EmailStr
from typing import Optional
class UserCreateSchema(BaseModel):
    first_name: str
    las_name: str
    email: EmailStr
    image_url: Optional[str] = None