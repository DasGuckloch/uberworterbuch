import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

import { setLikes } from '../../../../../share/utils/firebase/setters';

export async function POST(request: NextRequest) {
    const { slug } = await request.json();

    await setLikes(slug);

    revalidatePath('/');

    return Response.json({});
}
