from models.band_model import Bands as BandModel
from models import db

class SqlHandler():
    def get_all():
        bands = BandModel.query.all()
        results = [{
            "name": band.name,
            # "id": band.id,
            "members": band.members,
            "genre": band.genre
        } for band in bands]

        return results, 200


    def get_one(id):
        band = BandModel.query.get(id)

        print(band)

        if not band:
            return {"message" : "no match"}, 200

        return {
            "name": band.name,
            # "id": band.id,
            "members": band.members,
            "genre": band.genre
        }, 200

    def create(band):
        bandModel = BandModel(band['name'], band['members'], band['genre'])

        try:
            db.session.add(bandModel)
            db.session.commit()
        except Exception:
            return {"message": "band name already exists"}, 200

        print("create: ", band)

        return {"message": "success"}, 201