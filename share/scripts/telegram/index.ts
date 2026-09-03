import { Api } from 'node-telegram-bot-api';

import { wordNameToSlug } from '../../utils/words';
import { IWord } from '../../interfaces/words';
import { trimTemplateString } from '../../utils/strings';
import { generateTelegramTitle } from '../../utils/titles';
import { CONFIG } from '../../config';

// The v2 `Api` constructor rejects an empty token, so it is created on first
// send instead of at import time.
let api: Api | undefined;

const getApi = (): Api => {
    api ??= new Api(CONFIG.telegram.botToken || '');

    return api;
};

const getTelegramNewWordMessage = (
    title: string,
    slug: string,
    emoji?: string
) => {
    return generateTelegramTitle(title, slug, emoji);
};

export const sendTelegramNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Telegram the new word: ${title}`);

        await getApi().sendMessage({
            chat_id: CONFIG.telegram.channelId || '',
            text: getTelegramNewWordMessage(title, slug, emoji),
            parse_mode: 'Markdown',
        });
    }
};

export const sendTelegramWeeklyNewWordsMessage = async (words: IWord[]) => {
    const message = trimTemplateString(`
        Neue Worte der vergangenen Woche!

        ${words
            .map(({ frontmatter, slug }) =>
                generateTelegramTitle(
                    frontmatter.title,
                    slug,
                    frontmatter.emoji
                )
            )
            .map((str) => str.trim())
            .join('\n\n')}

        Tolles Wochenende🔥
    `);

    console.info(`Send to Telegram the weekly new words`);

    await getApi().sendMessage({
        chat_id: CONFIG.telegram.channelId || '',
        text: message,
        parse_mode: 'Markdown',
        link_preview_options: { is_disabled: true },
    });
};
