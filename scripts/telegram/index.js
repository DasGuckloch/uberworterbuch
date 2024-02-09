import TelegramBot from 'node-telegram-bot-api';

import { wordNameToSlug } from '../utils/words.js';
import { DOMAIN, WORDS_PATH } from '../constants/metadata.js';
import { getRandomMessage } from '../utils/random.js';

const env = process.env;

const TELEGRAM_BOT_TOKEN = env['TELEGRAM_BOT_TOKEN'];
const TELEGRAM_CHANNEL_ID = env['TELEGRAM_CHANNEL_ID'];

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

const getTelegramMessage = (title, slug, emoji) => {
    const telegramMessageTitle = `\n\n[${title}](${DOMAIN}/${WORDS_PATH}/${slug})${
        emoji ? `\n${emoji}` : ''
    }\n\n`;

    return getRandomMessage(telegramMessageTitle);
};

export const sendTelegramNewWordMessage = async (words) => {
    for (const word of words) {
        const title = word.frontmatter.title;
        const slug = wordNameToSlug(title);
        const emoji = word.frontmatter.emoji;

        console.info(`Send to Telegram the new word: ${title}`);

        await bot.sendMessage(
            TELEGRAM_CHANNEL_ID,
            getTelegramMessage(title, slug, emoji),
            {
                parse_mode: 'Markdown',
            }
        );
    }
};
