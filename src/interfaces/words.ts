import { JSXElementConstructor, ReactElement } from "react";

export interface IWordFrontmatter {
    readonly title: string;
    readonly pubDate: string;
    readonly author: string;
    readonly featured?: boolean;
}

export interface IWord {
    readonly slug: string;
    readonly content: ReactElement<any, string | JSXElementConstructor<any>>;
    readonly frontmatter: IWordFrontmatter;
}
