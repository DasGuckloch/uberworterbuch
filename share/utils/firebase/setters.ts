import { getLikeDocument } from './getters';
import { FirebaseCollectionEnum } from './enums';

import { firebase } from '.';

export const setLikes = async (slug: string) => {
    if (!firebase) {
        return;
    }

    const db = firebase.firestore();

    await db.runTransaction(async (transaction) => {
        const likeDocument = await getLikeDocument(slug, db);

        if (!likeDocument) {
            await db.collection(FirebaseCollectionEnum.LIKES).add({
                slug,
                likes: 1,
            });
        } else {
            transaction.update(likeDocument.ref, {
                likes: likeDocument.data().likes + 1,
            });
        }
    });
};

export const setYourLanguageText = async (
    language: string,
    slug: string,
    text: string
) => {
    if (!firebase) {
        return;
    }

    const db = firebase.firestore();

    await db.collection(FirebaseCollectionEnum.YOUR_LANGUAGE).add({
        language,
        slug,
        text,
    });
};
