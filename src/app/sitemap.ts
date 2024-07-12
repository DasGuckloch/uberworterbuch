import { MetadataRoute } from 'next';

import { RouteEnum } from '../../share/enums/route';
import { METADATA } from '../../share/constants/metadata';
import { getAllWords } from '../../share/utils/words';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allWords = await getAllWords();

    return [
        {
            url: `${METADATA.domain}`,
        },
        {
            url: `${METADATA.domain}/${RouteEnum.ABOUT}`,
        },
        ...allWords.map((word) => ({
            url: `${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}`,
        })),
    ];
}
