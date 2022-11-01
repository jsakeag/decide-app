import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

#docs = db.collection("choosings").get()
# for doc in docs:
#    print(doc.to_dict())

docs = db.collection('persons').where("score", ">=", 0).get()
print("Positive scores: ")
for doc in docs:
    print(doc.to_dict())

docs = db.collection('persons').where("score", "<", 0).get()
print("Negative scores: ")
for doc in docs:
    print(doc.to_dict())
