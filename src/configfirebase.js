
const admin = require("firebase-admin");
const firebase = require('firebase');

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-2398d.firebaseio.com"
});

firebase.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parcial2-2398d.firebaseio.com"
});

module.exports= {admin, firebase};

