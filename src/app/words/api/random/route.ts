import { NextRequest } from 'next/server';

import { getRandomWord } from '../../../../../share/utils/words';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const currentSlug = searchParams.get('current-slug');

    const { slug } = await getRandomWord(currentSlug);
    return Response.json({ slug });
}
