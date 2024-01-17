import { MetadataRoute } from "next";
import { DOMAIN } from "../constants/domain";
import { getAllWords } from "../utils/words";
import { RouteEnum } from "../enums/route";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allWords = await getAllWords();

    return [
        {
            url: `${DOMAIN}`,
        },
        ...allWords.map((word) => ({
            url: `${DOMAIN}/${RouteEnum.WORDS}/${word.slug}`,
        })),
    ];
}
