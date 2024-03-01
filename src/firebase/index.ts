import admin from 'firebase-admin';

import { CONFIG } from '../../share/config';

const FIREBASE_PRIVATE_KEY = CONFIG.firebase.privateKey;

export const firebase = FIREBASE_PRIVATE_KEY
    ? admin.apps.length
        ? admin.app()
        : admin.initializeApp({
              credential: admin.credential.cert(
                  JSON.parse(FIREBASE_PRIVATE_KEY || '{}')
              ),
          })
    : undefined;
