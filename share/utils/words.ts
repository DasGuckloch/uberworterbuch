import path from 'path';
import { promises as fs } from 'fs';

import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import {
    WORDS_FILE_EXTENSION,
    WORDS_FOLDER_NAME,
    WORDS_PER_PAGE,
} from '../constants/word';
import { IWord, IWordFrontmatter } from '../interfaces/words';

import { sortWordsDecreasePubDate } from './sorts';

const wordsFolderPath = path.join(process.cwd(), WORDS_FOLDER_NAME);

let allWordsCached: IWord[] = [];

export const getAllWords = async (): Promise<IWord[]> => {
    if (!!allWordsCached.length) {
        return allWordsCached;
    }

    const wordFileNames = await fs.readdir(wordsFolderPath);

    const slugs = wordFileNames.map(getSlugByWordFileName);

    const allWords = await getWordsBySlugs(slugs);

    allWordsCached = allWords;

    return allWords;
};

export const getWord = async (slug: string): Promise<IWord> => {
    const wordCached = allWordsCached.find(
        (wordCached) => wordCached.slug === slug
    );

    if (!!wordCached) {
        return wordCached;
    }

    const wordFilePath = getWordFilePath(slug);
    const markdown = await getWordMarkdown(wordFilePath);

    if (!markdown) {
        return notFound();
    }

    const word = await compileWordMarkdown(markdown);

    return {
        ...word,
        slug,
    };
};

export const getRandomWord = async (slug?: string | null): Promise<IWord> => {
    const randomWord = (await getNrandomWords(1))[0];

    if (slug && randomWord.slug === slug) {
        return await getRandomWord(slug);
    }

    return randomWord;
};

export const getNWords = async (n: number): Promise<IWord[]> => {
    const words = (await getAllWords()).slice(0, n);

    return words;
};

export const getNextWords = async (
    currentWordsAmount: number
): Promise<{ nextWords: IWord[]; isEnd: boolean }> => {
    const currentWordsIndex = currentWordsAmount;
    const nextWordsLastIndex = currentWordsIndex + WORDS_PER_PAGE;

    const allWords = await getAllWords();

    const nextWords = allWords.slice(currentWordsIndex, nextWordsLastIndex);
    const isEnd = nextWordsLastIndex >= allWords.length;

    return {
        nextWords,
        isEnd,
    };
};

export const getRelativeLinkText = (link: string): string => {
    const url = new URL(link);
    return `${url.host}`;
};

export const wordNameToSlug = (word: string): string => {
    let result = word.replace(/\s/g, '-');

    result = result.toLowerCase();

    result = result.replace(/[üÜ]/g, 'u');
    result = result.replace(/[äÄ]/g, 'a');
    result = result.replace(/[öÖ]/g, 'o');

    return result;
};

const getNrandomWords = async (n: number): Promise<IWord[]> => {
    const allWords = await getAllWords();

    const shuffledWords = allWords.slice().sort(() => Math.random() - 0.5);
    const randomNWords = shuffledWords.slice(0, n);

    return randomNWords;
};

const getWordsBySlugs = async (slugs: string[]): Promise<IWord[]> => {
    const words = await Promise.all(slugs.map((slug) => getWord(slug)));
    return words.sort(sortWordsDecreasePubDate);
};

const getSlugByWordFileName = (wordFileName: string): string =>
    removeWordFileExtension(wordFileName);

const getWordFilePath = (slug: string): string => {
    return path.join(wordsFolderPath, `${slug}.${WORDS_FILE_EXTENSION}`);
};

export const getWordMarkdown = async (path: string): Promise<string | null> => {
    let file;

    try {
        file = await fs.readFile(path, 'utf8');
    } catch (error) {
        return null;
    }

    return file;
};

export const compileWordMarkdown = async (
    markdown: string
): Promise<CompileMDXResult<IWordFrontmatter>> => {
    return await compileMDX<IWordFrontmatter>({
        source: markdown,
        options: { parseFrontmatter: true },
    });
};

const removeWordFileExtension = (wordFileName: string): string => {
    return wordFileName.split(`.${WORDS_FILE_EXTENSION}`)[0];
};
