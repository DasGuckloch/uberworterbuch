import { NextRequest } from 'next/server';

import { getAllWords } from '../../../../../share/utils/words';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const searchValue = searchParams.get('search-value');

    if (!searchValue) {
        return Response.json({
            words: [],
        });
    }

    const words = await getAllWords();

    const searchValueLowerCase = searchValue.toLowerCase();

    return Response.json({
        words: words.filter(
            ({ frontmatter }) =>
                frontmatter.title
                    .toLowerCase()
                    .includes(searchValueLowerCase) ||
                frontmatter.description
                    .toLowerCase()
                    .includes(searchValueLowerCase)
        ),
    });
}
