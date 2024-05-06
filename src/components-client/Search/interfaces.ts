export interface ISearchProps {
    readonly searchWords: (searchValue: string) => Promise<{
        words: React.ReactNode[];
    }>;
}
