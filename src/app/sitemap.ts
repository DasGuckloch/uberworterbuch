import { MetadataRoute } from "next";

import { getAllWords } from "../utils/words";
import { RouteEnum } from "../enums/route";
import { METADATA } from "../constants/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allWords = await getAllWords();

    return [
        {
            url: `${METADATA.domain}`,
        },
        ...allWords.map((word) => ({
            url: `${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}`,
        })),
    ];
}
