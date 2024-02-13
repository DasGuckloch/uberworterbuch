import { DOMAIN_PRODUCTION } from '../constants/metadata';
import { WORDS_FOLDER_NAME } from '../constants/word';

export const generateTelegramTitle = (
    title: string,
    slug: string,
    emoji?: string
) => {
    return `[${title}](${DOMAIN_PRODUCTION}/${WORDS_FOLDER_NAME}/${slug})${
        emoji ? `\n${emoji}` : ''
    }`;
};

export const generateTwitterTitle = (
    title: string,
    slug: string,
    emoji?: string
) => {
    return `${title}\n${DOMAIN_PRODUCTION}/${WORDS_FOLDER_NAME}/${slug}${
        emoji ? `\n${emoji}` : ''
    }`;
};
