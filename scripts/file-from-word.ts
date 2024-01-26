import { join } from 'path';
import { writeFileSync } from 'fs';

import { wordNameToSlug } from '../src/utils/word-name-to-slug';

import { getAuthor } from './utils/get-author';
import { getDescription } from './utils/get-description';
import { getPubDate } from './utils/get-pub-date';
import { getTitle } from './utils/get-title';

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

const filePath = join(__dirname, '..', 'words', `${fileName}.mdx`);
writeFileSync(filePath, fileTemplate);

console.info(`Word is: "${word}"`);
console.info(
    `Description is: "${
        description ||
        `!!! not provided; (please, manually change the placeholder ${DESCRIPTION_PLACEHOLDER}) !!!`
    }"`
);
console.info(`Filename is: "${fileName}"`);
console.info(`File was created. Path: "${filePath}"`);
