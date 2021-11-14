from google.oauth2 import id_token
from google.auth.transport import requests
from config import Config
from .musicianapi_handler import SqlHandler

class LoginHandler():
    def verify_google(token):
        try:
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), Config.GOOGLE_CLIENT_ID)
            userid = idinfo['sub']

            print(idinfo)

            if idinfo['aud'] != Config.GOOGLE_CLIENT_ID:
                return {"message": "verification failed"}, 200

            db_response = SqlHandler.get_one(idinfo['email'])

            if db_response[1] == 404:
                SqlHandler.create(idinfo)
                
                return {"message": "new musician"}, 200
            
            else:
                return {"message": "existing musician"}, 200

        except ValueError:
            # Invalid token
            print("error: unverified token")

