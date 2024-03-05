import type { Firestore } from 'firebase-admin/firestore';

import { FirebaseCollectionEnum } from './enums';

import { firebase } from '.';

export const getLikeDocument = async (slug: string, db?: Firestore) => {
    if (!firebase) {
        return null;
    }

    db = db || firebase.firestore();

    const docs = (
        await db
            .collection(FirebaseCollectionEnum.LIKES)
            .where('slug', '==', slug)
            .get()
    ).docs;

    if (!docs.length) {
        return null;
    }

    return docs[0];
};

export const getLikes = async (slug: string): Promise<number> => {
    const likeDocument = await getLikeDocument(slug);

    if (!likeDocument) {
        return 0;
    }

    return likeDocument.data().likes;
};

export const getYourLanguageDocument = async (
    language: string,
    slug: string,
    db?: Firestore
) => {
    if (!firebase) {
        return null;
    }

    db = db || firebase.firestore();

    const docs = (
        await db
            .collection(FirebaseCollectionEnum.YOUR_LANGUAGE)
            .where('language', '==', language)
            .where('slug', '==', slug)
            .get()
    ).docs;

    if (!docs.length) {
        return null;
    }

    return docs[0];
};

export const getYourLanguageText = async (
    language: string,
    slug: string
): Promise<string | null> => {
    const youLanguageDocument = await getYourLanguageDocument(language, slug);

    if (!youLanguageDocument) {
        return null;
    }

    return youLanguageDocument.data().text;
};
