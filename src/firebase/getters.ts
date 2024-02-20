import type { Firestore } from 'firebase-admin/firestore';
import { firebase } from '.';

export const getLikeDocument = async (slug: string, db?: Firestore) => {
    if (!firebase) {
        return null;
    }

    db = db || firebase.firestore();

    const docs = (await db.collection('likes').where('slug', '==', slug).get())
        .docs;

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
