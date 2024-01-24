import path from 'path';
import { promises as fs } from 'fs';

import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';

import { IWord, IWordFrontmatter } from '../interfaces/words';
import { DATE_FORMAT_MDX } from '../constants/date';

const WORDS_FOLDER_NAME = 'words';
const WORDS_EXTENSION = 'mdx';
const wordsFolderPath = path.join(process.cwd(), WORDS_FOLDER_NAME);

export const getWord = async (slug: string): Promise<IWord> => {
    const wordPath = getWordPath(slug);
    const markdown = await getWordMarkdown(wordPath);

    if (!markdown) {
        return notFound();
    }

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

export const getAllWords = async (): Promise<IWord[]> => {
    const wordNames = await fs.readdir(wordsFolderPath);

    const slugs = wordNames.map((wordName) => removeExtension(wordName));

    return await getWords(slugs);
};

export const getNrandomWords = async (n: number): Promise<IWord[]> => {
    const wordNames = await fs.readdir(wordsFolderPath);

    const shuffledWordNames = wordNames.slice().sort(() => Math.random() - 0.5);
    const randomNWordNamesWithoutExtension = shuffledWordNames
        .slice(0, n)
        .map((wordName) => removeExtension(wordName));

    return await getWords(randomNWordNamesWithoutExtension);
};

export const getRandomWord = async (slug?: string | null): Promise<IWord> => {
    const randomWord = (await getNrandomWords(1))[0];

    if (slug && randomWord.slug === slug) {
        return await getRandomWord(slug);
    }

    return randomWord;
};

export const getNlastWords = async (n: number): Promise<IWord[]> => {
    const wordNames = (await fs.readdir(wordsFolderPath)).map((wordName) =>
        removeExtension(wordName)
    );

    return (await getWords(wordNames)).slice(0, n);
};

const getWordPath = (slug: string): string => {
    return path.join(wordsFolderPath, `${slug}.${WORDS_EXTENSION}`);
};

const getWordMarkdown = async (path: string): Promise<string | null> => {
    let file;

    try {
        file = await fs.readFile(path, 'utf8');
    } catch (error) {
        return null;
    }

    return file;
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
    return wordName.split('.mdx')[0];
};

const sortWordsByDate = (words: IWord[]): IWord[] => {
    return words.sort((a, b) =>
        dayjs(a.frontmatter.pubDate, DATE_FORMAT_MDX).isAfter(
            dayjs(b.frontmatter.pubDate, DATE_FORMAT_MDX)
        )
            ? -1
            : 1
    );
};

export const wordToSlug = (word: string): string => {
    let result = word.replace(/\s/g, '-');

    result = result.toLowerCase();

    result = result.replace(/[üÜ]/g, 'u');
    result = result.replace(/[äÄ]/g, 'a');
    result = result.replace(/[öÖ]/g, 'o');

    return result;
};

export const getLinkText = (link: string): string => {
    const url = new URL(link);

    return `${url.host}`;
};
