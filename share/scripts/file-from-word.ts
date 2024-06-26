import { join, dirname } from 'path';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { wordNameToSlug } from '../utils/words';
import { WORDS_FOLDER_NAME } from '../constants/word';

import { getAuthor } from './getters/get-author';
import { getDescription } from './getters/get-description';
import { getPubDate } from './getters/get-pub-date';
import { getTitle } from './getters/get-title';

const DESCRIPTION_PLACEHOLDER = '[DESCRIPTION]';

const word = getTitle();
const description = getDescription();

const fileName = wordNameToSlug(word);

const fileTemplate = `---
title: ${word}
description: ${description || DESCRIPTION_PLACEHOLDER}
pubDate: ${getPubDate()}
author: ${getAuthor()}
---
`;

const filePath = join(
    __dirname,
    '..',
    '..',
    WORDS_FOLDER_NAME,
    `${fileName}.mdx`
);
writeFileSync(filePath, fileTemplate);

console.info(`Word: "${word}"`);
console.info(
    `Description: "${
        description ||
        `Not provided. Please, manually change the placeholder ${DESCRIPTION_PLACEHOLDER}`
    }"`
);
console.info(`Filename: "${fileName}"`);
console.info(`Path: "${filePath}"`);
