import { TwitterApi } from 'twitter-api-v2';

import { wordNameToSlug } from '../../utils/words';
import { IWord } from '../../interfaces/words';
import { generateTwitterTitle } from '../../utils/titles';
import { CONFIG } from '../../config';

const twitterClient = new TwitterApi({
    appKey: CONFIG.twitter.clientAppKey,
    appSecret: CONFIG.twitter.clientAppSecret,
    accessToken: CONFIG.twitter.clientAccessToken,
    accessSecret: CONFIG.twitter.clientAccessSecret,
} as any);

const getTwitterNewWordMessage = (
    title: string,
    slug: string,
    emoji?: string
) => {
    return generateTwitterTitle(title, slug, emoji);
};

export const sendTwitterNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Twitter the new word: ${title}`);

        await twitterClient.v2.tweet(
            getTwitterNewWordMessage(title, slug, emoji)
        );
    }
};
