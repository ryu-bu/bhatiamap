from models.musician_model import Musicians as MusicianModel
from models import db

class SqlHandler():
    def get_all():
        musicians = MusicianModel.query.all()
        results = [{
            "name": musician.name,
            "email": musician.email,
            "genre": musician.genre
        } for musician in musicians]

        return results, 200


    def get_one(id):
        musician = MusicianModel.query.get(id)

        print(musician)

        if not musician:
            return {"message" : "no match"}, 404

        return {
            "name": musician.name,
            "email": musician.email,
            "genre": musician.genre
        }, 200

    def create(musician):
        musicianModel = MusicianModel(musician['name'], musician['picture'], None, musician['email'], musician['sub'])

        try:
            db.session.add(musicianModel)
            db.session.commit()
        except Exception:
            return {"message": "musician name already exists"}, 200

        print("create: ", musician)

        return {"message": "success"}, 201