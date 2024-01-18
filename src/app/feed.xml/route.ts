import RSS from "rss";
import dayjs from "dayjs";

import { METADATA, RSS_TYPE } from "../../constants/metadata";
import { getAllWords } from "../../utils/words";
import { RouteEnum } from "../../enums/route";
import "../../utils/dayjs";
import { DATE_FORMAT_MDX } from "../../constants/date";

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
            "Content-Type": `${RSS_TYPE}; charset=utf-8`,
        },
    });
}
