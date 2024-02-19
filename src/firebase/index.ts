import admin from 'firebase-admin';

const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY;

export const firebase = FIREBASE_PRIVATE_KEY
    ? admin.apps.length
        ? admin.app()
        : admin.initializeApp({
              credential: admin.credential.cert(
                  JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '{}')
              ),
          })
    : undefined;
