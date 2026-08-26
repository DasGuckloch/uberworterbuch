export interface IWordProps {
    readonly params: Promise<{
        readonly slug: string;
    }>;
}
