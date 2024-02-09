import { promises as fs } from 'fs';

import { compileMDX } from 'next-mdx-remote/rsc';

export const wordNameToSlug = (word) => {
    let result = word.replace(/\s/g, '-');

    result = result.toLowerCase();

    result = result.replace(/[üÜ]/g, 'u');
    result = result.replace(/[äÄ]/g, 'a');
    result = result.replace(/[öÖ]/g, 'o');

    return result;
};

export const getWordMarkdown = async (path) => {
    let file;

    try {
        file = await fs.readFile(path, 'utf8');
    } catch (error) {
        return null;
    }

    return file;
};

export const compileWordMarkdown = async (markdown) => {
    return await compileMDX({
        source: markdown,
        options: { parseFrontmatter: true },
    });
};
