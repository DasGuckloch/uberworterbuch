export const wordNameToSlug = (word: string): string => {
    let result = word.replace(/\s/g, '-');

    result = result.toLowerCase();

    result = result.replace(/[üÜ]/g, 'u');
    result = result.replace(/[äÄ]/g, 'a');
    result = result.replace(/[öÖ]/g, 'o');

    return result;
};