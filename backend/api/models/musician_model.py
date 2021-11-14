from models import db 
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy.orm import relationship

class Musicians(db.Model):
    __tablename__ = 'Musicians'
    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, unique=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    pic = db.Column(db.String(200), nullable=True)
    genre = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False, primary_key=True)
    customId = db.Column(db.String(500), nullable=False, unique=True)
    gigs = relationship("Gigs")

    def __init__(self, name, pic, genre, email, customId):
        self.name = name
        self.pic = pic
        self.genre = genre
        self.email = email
        self.customId = customId