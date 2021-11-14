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

    def update(id, field, key):
        try:
            db.session.query(MusicianModel).filter(MusicianModel.email == id).update({field: key})
            db.session.commit()
            return {"message": "update success"}, 200

        except Exception:
            return {"message": "update failed"}, 500

    def create(musician):
        print(musician)
        musicianModel = MusicianModel(musician['name'], musician['picture'], None, musician['email'], musician['sub'])

        try:
            db.session.add(musicianModel)
            db.session.commit()
        except Exception:
            return {"message": "musician name already exists"}, 200

        print("create: ", musician)

        return {"message": "success"}, 201