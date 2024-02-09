import TelegramBot from 'node-telegram-bot-api';

import { wordNameToSlug } from '../../utils/words';
import { DOMAIN } from '../../constants/metadata';
import { getRandomMessage } from '../../utils/random';
import { WORDS_FOLDER_NAME } from '../../constants/word';
import { IWord } from '../../interfaces/words';

const env = process.env;

const TELEGRAM_BOT_TOKEN = env['TELEGRAM_BOT_TOKEN'];
const TELEGRAM_CHANNEL_ID = env['TELEGRAM_CHANNEL_ID'];

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN || '');

const getTelegramMessage = (title: string, slug: string, emoji?: string) => {
    const telegramMessageTitle = `\n\n[${title}](${DOMAIN}/${WORDS_FOLDER_NAME}/${slug})${
        emoji ? `\n${emoji}` : ''
    }\n\n`;

    return getRandomMessage(telegramMessageTitle);
};

export const sendTelegramNewWordMessage = async (words: IWord[]) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Telegram the new word: ${title}`);

        await bot.sendMessage(
            TELEGRAM_CHANNEL_ID || '',
            getTelegramMessage(title, slug, emoji),
            {
                parse_mode: 'Markdown',
            }
        );
    }
};
