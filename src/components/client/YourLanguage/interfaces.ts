import { ReactNode } from 'react';

export interface IYourLanguageProps {
    readonly slug: string;
    readonly title: string;
    readonly getYourLanguageWord: (
        language: string,
        slug: string,
        title: string
    ) => Promise<{ component: ReactNode }>;
}
