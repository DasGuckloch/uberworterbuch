import { getTitle } from './utils/get-title';
import { transformWord } from './utils/transform-word';

const wordToTransform = getTitle();
const transformedWord = transformWord(wordToTransform);

console.info(`Word is: "${wordToTransform}"`);
console.info(`Result: "${transformedWord}"`);
