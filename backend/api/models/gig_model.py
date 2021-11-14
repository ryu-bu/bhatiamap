from models import db 
from sqlalchemy.dialects.postgresql import UUID
import uuid

class Gigs(db.Model):
    __tablename__ = "Gigs"
    id = db.Column(UUID(as_uuid=True), default=uuid.uuid4, unique=True, primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    genre = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    longitude = db.Column(db.Float(50), unique=False, nullable=False)
    latitude = db.Column(db.Float(50), unique=False, nullable=False)
    time = db.Column(db.String(80), nullable=False, unique=False)
    musician_id = db.Column(UUID(as_uuid=True), db.ForeignKey('Musicians.id'), nullable=False, unique=True)

    def __init__(self, name, genre, email, longitude, latitude, time, musician_id):
        self.name = name
        self.genre = genre
        self.email = email
        self.longitude = longitude
        self.latitude = latitude
        self.time = time
        self.musician_id = musician_id