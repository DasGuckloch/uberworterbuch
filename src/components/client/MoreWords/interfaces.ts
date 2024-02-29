export interface IMoreWordsProps {
    readonly getMore: (currentWordsAmount: number) => Promise<{
        nextWords: React.ReactNode[];
        isEnd: boolean;
    }>;
}
