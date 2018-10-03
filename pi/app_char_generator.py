import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('../services/firebase.json')
default_app = firebase_admin.initialize_app(cred)

ref = db.reference('characters')

print(ref.get())
