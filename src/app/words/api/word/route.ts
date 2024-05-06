import { NextRequest } from 'next/server';
import { notFound } from 'next/navigation';

import { getWord } from '../../../../../share/utils/words';
import { SearchParamEnum } from '../../../../../share/enums/search-param';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get(SearchParamEnum.SLUG);

    if (!slug) {
        return notFound();
    }

    const word = await getWord(slug);
    return Response.json({ word });
}
