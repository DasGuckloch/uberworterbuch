import { firebase } from '.';
import { getLikeDocument } from './getters';

export const setLikes = async (slug: string) => {
    const db = firebase.firestore();

    const likeDocument = await getLikeDocument(slug);

    if (!likeDocument) {
        await db.collection('likes').add({
            slug,
            likes: 1,
        });
    } else {
        await db
            .collection('likes')
            .doc(likeDocument.id)
            .update({ likes: likeDocument.data().likes + 1 });
    }
};
