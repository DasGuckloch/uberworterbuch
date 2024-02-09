export const getDescription = (): string => {
    return (process.argv[3] || '').trim();
};
