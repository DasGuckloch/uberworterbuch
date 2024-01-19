const path = require('path');
const fs = require('fs');

const gitUserName = require('git-user-name');

const { getTitle } = require('./utils/get-title');
const { getDescription } = require('./utils/get-description');
const { getPubDate } = require('./utils/get-pub-date');
const { transformWord } = require('./utils/transform-word');

const DESCRIPTION_PLACEHOLDER = '[DESCRIPTION]';

const word = getTitle();
const description = getDescription();

const fileName = transformWord(word);

const fileTemplate = `---
title: ${word}
description: ${description || DESCRIPTION_PLACEHOLDER}
pubDate: ${getPubDate()}
author: ${gitUserName()}
---
`;

const filePath = path.join(__dirname, '..', 'words', `${fileName}.mdx`);
fs.writeFileSync(filePath, fileTemplate);

console.info(`Word is: "${word}"`);
console.info(
    `Description is: "${
        description ||
        `!!! not provided; (please, manually change the placeholder ${DESCRIPTION_PLACEHOLDER}) !!!`
    }"`
);
console.info(`Filename is: "${fileName}"`);
console.info(`File was created. Path: "${filePath}"`);
