import snoowrap from 'snoowrap';

import { wordNameToSlug } from '../../utils/words';
import { IWord } from '../../interfaces/words';
import { DOMAIN_PRODUCTION } from '../../constants/metadata';
import { WORDS_FOLDER_NAME } from '../../constants/word';

const env = process.env;

const REDDIT_USER_AGENT = env['REDDIT_USER_AGENT'] || '';
const REDDIT_CLIENT_ID = env['REDDIT_CLIENT_ID'];
const REDDIT_CLIENT_SECRET = env['REDDIT_CLIENT_SECRET'];
const REDDIT_USERNAME = env['REDDIT_USERNAME'];
const REDDIT_PASSWORD = env['REDDIT_PASSWORD'];

const r = new snoowrap({
    userAgent: REDDIT_USER_AGENT,
    clientId: REDDIT_CLIENT_ID,
    clientSecret: REDDIT_CLIENT_SECRET,
    username: REDDIT_USERNAME,
    password: REDDIT_PASSWORD,
});

export const sendRedditNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const description = word.frontmatter.description;
        const slug = wordNameToSlug(title);

        console.info(`Send to Reddit the new word: ${title}`);

        r.submitSelfpost({
            subredditName: 'uberworterbuch',
            title,
            text: `${description}\n\n${DOMAIN_PRODUCTION}/${WORDS_FOLDER_NAME}/${slug}`,
        });
    }
};
