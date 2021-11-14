from models.gig_model import Gigs as GigModel
from models import db
from models.musician_model import Musicians as MusicianModel

class SqlHandler():
    def get_all():
        gigs = GigModel.query.all()
        results = [{
            "name": gig.name,
            "email": gig.email,
            "genre": gig.genre,
            "longitude": gig.longitude,
            "latitude": gig.latitude,
            "time": gig.time
        } for gig in gigs]

        return results, 200


    def get_one(id):
        gig = GigModel.query.get(id)

        print(gig)

        if not gig:
            return {"message" : "no match"}, 404

        return {
            "name": gig.name,
            "email": gig.email,
            "genre": gig.genre,
            "longitude": gig.longitude,
            "latitude": gig.latitude,
            "time": gig.time
        }, 200

    def update(id, field, key):
        try:
            db.session.query(GigModel).filter(GigModel.email == id).update({field: key})
            db.session.commit()
            return {"message": "update success"}, 200

        except Exception:
            return {"message": "update failed"}, 500

    def create(gig):

        musician = MusicianModel.query.get(gig['email'])
        
        gigModel = GigModel(gig['name'], gig['email'], gig['genre'], gig['longitude'], gig['latitude'], gig['time'], musician.id)

        # try:
        db.session.add(gigModel)
        db.session.commit()
        # except Exception:
        #     return {"message": "gig name already exists"}, 200

        print("create: ", gig)

        return {"message": "success"}, 201