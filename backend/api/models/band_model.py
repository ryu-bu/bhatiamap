from models import db 
from sqlalchemy.dialects.postgresql import UUID
import uuid

class Bands(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    members = db.Column(db.String(120), nullable=False)
    genre = db.Column(db.String(120), nullable=False)

    def __init__(self, name, members, genre):
        self.name = name
        self.members = members
        self.genre = genre