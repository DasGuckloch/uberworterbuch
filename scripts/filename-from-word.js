import { getTitle } from './getters/get-title.js';
import { wordNameToSlug } from './utils/words.js';

const wordToTransform = getTitle();
const fileName = wordNameToSlug(wordToTransform);

console.info(`Word: "${wordToTransform}"`);
console.info(`Result: "${fileName}"`);
