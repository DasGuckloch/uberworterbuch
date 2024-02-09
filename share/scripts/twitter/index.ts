import { TwitterApi } from 'twitter-api-v2';

import { DOMAIN } from '../../constants/metadata';
import { getRandomMessage } from '../../utils/random';
import { wordNameToSlug } from '../../utils/words';
import { IWord } from '../../interfaces/words';
import { WORDS_FOLDER_NAME } from '../../constants/word';

const env = process.env;

const TWITTER_CLIENT_APP_KEY = env['TWITTER_CLIENT_APP_KEY'];
const TWITTER_CLIENT_APP_SECRET = env['TWITTER_CLIENT_APP_SECRET'];
const TWITTER_CLIENT_ACCESS_TOKEN = env['TWITTER_CLIENT_ACCESS_TOKEN'];
const TWITTER_CLIENT_ACCESS_SECRET = env['TWITTER_CLIENT_ACCESS_SECRET'];

const twitterClient = new TwitterApi({
    appKey: TWITTER_CLIENT_APP_KEY,
    appSecret: TWITTER_CLIENT_APP_SECRET,
    accessToken: TWITTER_CLIENT_ACCESS_TOKEN,
    accessSecret: TWITTER_CLIENT_ACCESS_SECRET,
} as any);

const getTwitterMessage = (title: string, slug: string, emoji?: string) => {
    const twitterMessageTitle = `\n\n${title}\n${DOMAIN}/${WORDS_FOLDER_NAME}/${slug}${
        emoji ? `\n${emoji}` : ''
    }\n\n`;

    return getRandomMessage(twitterMessageTitle);
};

export const sendTwitterNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Twitter the new word: ${title}`);

        await twitterClient.v2.tweet(getTwitterMessage(title, slug, emoji));
    }
};
