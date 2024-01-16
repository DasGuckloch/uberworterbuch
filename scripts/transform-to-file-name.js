const transformWord = (word) => {
    let result = word.replace(/\s/g, "-");

    result = result.toLowerCase();

    result = result.replace(/[üÜ]/g, "u");
    result = result.replace(/[äÄ]/g, "a");
    result = result.replace(/[öÖ]/g, "o");

    return result;
};

const wordToTransform = process.argv[2];

if (!wordToTransform) {
    console.error(
        "Please provide a word to transform. Example: npm run transform-text [MY_WORD]"
    );
    process.exit(1);
}

const transformedWord = transformWord(wordToTransform);
console.log(transformedWord);
