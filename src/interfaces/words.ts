import { JSXElementConstructor, ReactElement } from "react";

export interface IWordFrontmatter {
    readonly title: string;
    readonly description: string;
    readonly pubDate: string;
    readonly author: string;
}

export interface IWord {
    readonly slug: string;
    readonly content: ReactElement<any, string | JSXElementConstructor<any>>;
    readonly frontmatter: IWordFrontmatter;
}
