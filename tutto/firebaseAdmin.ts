import * as admin from 'firebase-admin'
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DB_URL,
  })
}

const firestore = admin.firestore

export { firestore }
