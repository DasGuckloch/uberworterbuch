import snoowrap from 'snoowrap';

import { wordNameToSlug } from '../../utils/words';
import { IWord } from '../../interfaces/words';
import { DOMAIN_PRODUCTION } from '../../constants/metadata';
import { WORDS_FOLDER_NAME } from '../../constants/word';
import { CONFIG } from '../../config';

const r = new snoowrap({
    userAgent: CONFIG.reddit.userAgent || '',
    clientId: CONFIG.reddit.clientId,
    clientSecret: CONFIG.reddit.clientSecret,
    username: CONFIG.reddit.username,
    password: CONFIG.reddit.password,
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
