import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from sense_hat import SenseHat
sense = SenseHat()

cred = credentials.Certificate('../services/firebase.json')
default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://wot-larsfoll.firebaseio.com/'
})

character = db.reference('characters/character').get()

sense.set_pixels(character)