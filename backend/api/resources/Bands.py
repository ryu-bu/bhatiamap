from flask_restful import Resource
from flask import request
from handlers.bandapi_handler import SqlHandler

class Bands(Resource):

    def get(self):
        return SqlHandler.get_all()

    def post(self):
        newBand = request.get_json()

        if not newBand:
            return {"message": "no body received"}, 204

        return SqlHandler.create(newBand)


class Band(Resource):

    def get(self, id):

        if not id:
            return {"message" : "no id"}, 204

        return SqlHandler.get_one(id)