import { NextRequest } from 'next/server';

import { setLikes } from '../../../../firebase/setters';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    const { slug } = await request.json();

    await setLikes(slug);

    return Response.json({});
}
