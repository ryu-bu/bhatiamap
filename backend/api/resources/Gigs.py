from flask_restful import Resource
from flask import request
from handlers.gigapi_handler import SqlHandler

class Gigs(Resource):

    def get(self):
        return SqlHandler.get_all()

    def post(self):
        newGig = request.get_json()

        if not newGig:
            return {"message": "no body received"}, 204

        return SqlHandler.create(newGig)

    def put(self):
        r = request.get_json()
        id = r["email"]
        field = r["field"]
        key = r["key"]

        return SqlHandler.update(id, field, key)