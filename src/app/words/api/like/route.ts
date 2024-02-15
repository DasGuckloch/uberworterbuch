import { NextRequest } from 'next/server';
import { getLikes } from '../../../../firebase/getters';
import { setLikes } from '../../../../firebase/setters';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const currentSlug = searchParams.get('slug');

    const likes = await getLikes(currentSlug || '');

    return Response.json({ likes });
}

export async function POST(request: NextRequest) {
    const { slug } = await request.json();

    await setLikes(slug);

    return Response.json({});
}
