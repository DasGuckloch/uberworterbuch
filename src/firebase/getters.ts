import { firebase } from '.';

export const getLikeDocument = async (slug: string) => {
    if (!firebase) {
        return null;
    }

    const db = firebase.firestore();

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
