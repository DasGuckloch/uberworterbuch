import { getLikeDocument } from './getters';

import { firebase } from '.';

export const setLikes = async (slug: string) => {
    if (!firebase) {
        return;
    }

    const db = firebase.firestore();

    await db.runTransaction(async (transaction) => {
        const likeDocument = await getLikeDocument(slug, db);

        if (!likeDocument) {
            await db.collection('likes').add({
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
