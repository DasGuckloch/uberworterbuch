import { DATE_FORMAT_MDX } from '../constants/date';
import { IWord } from '../interfaces/words';

import { dayjs } from './dayjs';

export const sortWordsIncreasePubDate = (a: IWord, b: IWord) =>
    dayjs(a.frontmatter.pubDate, DATE_FORMAT_MDX).isAfter(
        dayjs(b.frontmatter.pubDate, DATE_FORMAT_MDX)
    )
        ? 1
        : -1;

export const sortWordsDecreasePubDate = (a: IWord, b: IWord) =>
    dayjs(a.frontmatter.pubDate, DATE_FORMAT_MDX).isAfter(
        dayjs(b.frontmatter.pubDate, DATE_FORMAT_MDX)
    )
        ? -1
        : 1;

export const sortGermanWordsByTitle = (words: IWord[]): IWord[] => {
    const collator = new Intl.Collator('de', { sensitivity: 'base' });

    return words.sort((a, b) =>
        collator.compare(a.frontmatter.title, b.frontmatter.title)
    );
};
