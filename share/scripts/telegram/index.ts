import TelegramBot from 'node-telegram-bot-api';

import { wordNameToSlug } from '../../utils/words';
import { getRandomMessage } from '../../utils/random';
import { IWord } from '../../interfaces/words';
import { trimTemplateString } from '../../utils/strings';
import { generateTelegramTitle } from '../../utils/titles';
import { CONFIG } from '../../config';

const bot = new TelegramBot(CONFIG.telegram.botToken || '');

const getTelegramNewWordMessage = (
    title: string,
    slug: string,
    emoji?: string
) => {
    const telegramMessageTitle = `\n\n${generateTelegramTitle(
        title,
        slug,
        emoji
    )}\n\n`;

    return getRandomMessage(telegramMessageTitle);
};

export const sendTelegramNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Telegram the new word: ${title}`);

        await bot.sendMessage(
            CONFIG.telegram.channelId || '',
            getTelegramNewWordMessage(title, slug, emoji),
            {
                parse_mode: 'Markdown',
            }
        );
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

    await bot.sendMessage(CONFIG.telegram.channelId || '', message, {
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
    });
};
