from flask_restful import Resource
from flask import request
from handlers.musicianapi_handler import SqlHandler

class Musicians(Resource):

    def get(self):
        return SqlHandler.get_all()

    def post(self):
        newMucisan = request.get_json()

        if not newMucisan:
            return {"message": "no body received"}, 204

        return SqlHandler.create(newMucisan)

    def put(self):
        r = request.get_json()
        print(r)
        id = r["email"]
        field = r["field"]
        key = r["key"]

        return SqlHandler.update(id, field, key)


class Musician(Resource):

    def get(self, id):

        if not id:
            return {"message" : "no id"}, 204

        return SqlHandler.get_one(id)