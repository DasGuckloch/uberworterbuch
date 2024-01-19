const { getTitle } = require('./utils/get-title');
const { transformWord } = require('./utils/transform-word');

const wordToTransform = getTitle();
const transformedWord = transformWord(wordToTransform);

console.info(`Word is: "${wordToTransform}"`);
console.info(`Result: "${transformedWord}"`);
