export const trimTemplateString = (str: string): string => {
    return str
        .split('\n')
        .map((str) => str.trim())
        .join('\n');
};
