const admin = require('firebase-admin');

const serviceAccount = require('covid-tracking-f1c6a-c3d21dfdc12f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();