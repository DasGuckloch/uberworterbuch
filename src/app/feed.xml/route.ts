import RSS from 'rss';

import { METADATA, RSS_TYPE } from '../../../share/constants/metadata';
import { RouteEnum } from '../../../share/enums/route';
import { getAllWords } from '../../../share/utils/words';
import { DATE_FORMAT_MDX } from '../../../share/constants/date';
import { dayjs } from '../../../share/utils/dayjs';

// Route handlers default to dynamic since Next.js 15; the feed has no
// request-time input, so keep it prerendered as it was before.
export const dynamic = 'force-static';

export async function GET() {
    const feed = new RSS({
        title: METADATA.title,
        description: METADATA.description,
        site_url: METADATA.domain,
        feed_url: `${METADATA.domain}/feed.xml`,
        language: METADATA.language_code,
    });

    const allWords = await getAllWords();

    allWords.map((word) => {
        feed.item({
            title: word.frontmatter.title,
            description: word.frontmatter.description,
            url: `${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}`,
            date: dayjs(word.frontmatter.pubDate, DATE_FORMAT_MDX).toDate(),
            author: word.frontmatter.pubDate,
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': `${RSS_TYPE}; charset=utf-8`,
        },
    });
}
