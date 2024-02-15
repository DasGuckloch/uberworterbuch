import admin from 'firebase-admin';

const config = {
    credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '')
    ),
};

export const firebase = admin.apps.length
    ? admin.app()
    : admin.initializeApp(config);
