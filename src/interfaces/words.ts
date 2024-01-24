import { JSXElementConstructor, ReactElement } from 'react';

export interface IWordFrontmatter {
    readonly title: string;
    readonly description: string;
    // DD/MM/YYYY HH:mm
    readonly pubDate: string;
    readonly author: string;
    readonly video?: string;
    readonly relatedWords?: string[];
    readonly relatedLinks?: string[];
}

export interface IWord {
    readonly slug: string;
    readonly content: ReactElement<any, string | JSXElementConstructor<any>>;
    readonly frontmatter: IWordFrontmatter;
}
