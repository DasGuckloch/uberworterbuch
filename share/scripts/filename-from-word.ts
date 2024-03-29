import { wordNameToSlug } from '../utils/words';

import { getTitle } from './getters/get-title';

const wordToTransform = getTitle();
const fileName = wordNameToSlug(wordToTransform);

console.info(`Word: "${wordToTransform}"`);
console.info(`Result: "${fileName}"`);
