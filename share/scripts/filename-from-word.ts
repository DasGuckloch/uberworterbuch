import { getTitle } from './getters/get-title';
import { wordNameToSlug } from '../utils/words';

const wordToTransform = getTitle();
const fileName = wordNameToSlug(wordToTransform);

console.info(`Word: "${wordToTransform}"`);
console.info(`Result: "${fileName}"`);
