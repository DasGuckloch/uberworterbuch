import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import { IWord, IWordFrontmatter } from "../interfaces/words";
import path from "path";
import { promises as fs } from "fs";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../constants/date";

const WORDS_FOLDER_NAME = "words";
const WORDS_EXTENSION = ".mdx";
const wordsFolderPath = path.join(process.cwd(), WORDS_FOLDER_NAME);

export const getWord = async (slug: string): Promise<IWord> => {
    const wordPath = getWordPath(slug);
    const markdown = await getWordMarkdown(wordPath);
    const word = await compileWord(markdown);

    return {
        ...word,
        slug,
    };
};

export const getWords = async (slugs: string[]): Promise<IWord[]> => {
    const words = await Promise.all(slugs.map((slug) => getWord(slug)));

    return sortWordsByDate(words);
};

export const getNrandomWords = async (n: number): Promise<IWord[]> => {
    const wordNames = await fs.readdir(wordsFolderPath);

    const shuffledWordNames = wordNames.slice().sort(() => Math.random() - 0.5);
    const randomNWordNamesWithoutExtension = shuffledWordNames
        .slice(0, n)
        .map((wordName) => removeExtension(wordName));

    return await getWords(randomNWordNamesWithoutExtension);
};

export const getNlastWords = async (n: number): Promise<IWord[]> => {
    const wordNames = (await fs.readdir(wordsFolderPath)).map((wordName) =>
        removeExtension(wordName)
    );

    return (await getWords(wordNames)).slice(0, n);
};

const getWordPath = (slug: string): string => {
    return path.join(wordsFolderPath, `${slug}.mdx`);
};

const getWordMarkdown = async (path: string): Promise<string> => {
    return await fs.readFile(path, "utf8");
};

const compileWord = async (
    markdown: string
): Promise<CompileMDXResult<IWordFrontmatter>> => {
    return await compileMDX<IWordFrontmatter>({
        source: markdown,
        options: { parseFrontmatter: true },
    });
};

const removeExtension = (wordName: string): string => {
    return wordName.split(".mdx")[0];
};

const sortWordsByDate = (words: IWord[]): IWord[] => {
    return words.sort((a, b) =>
        dayjs(a.frontmatter.pubDate, DATE_FORMAT).isAfter(
            dayjs(b.frontmatter.pubDate, DATE_FORMAT)
        )
            ? 1
            : -1
    );
};
