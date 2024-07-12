import { Metadata } from 'next';
import Link from 'next/link';

import { METADATA } from '../../../share/constants/metadata';
import { getAllWords } from '../../../share/utils/words';
import { sortGermanWordsByTitle } from '../../../share/utils/sorts';
import { IWord } from '../../../share/interfaces/words';
import { RouteEnum } from '../../../share/enums/route';

export default async function TOCPage() {
    const words = await getAllWords();
    const wordsSortedByTitle = sortGermanWordsByTitle(words);
    const wordsByLetters = wordsSortedByTitle.reduce<{
        [key: string]: IWord[];
    }>((acc, word) => {
        const firstLetter = word.frontmatter.title[0].toLowerCase();

        if (acc[firstLetter]) {
            acc[firstLetter].push(word);
        } else {
            acc[firstLetter] = [word];
        }

        return acc;
    }, {});

    return (
        <section className="text-main-white">
            {Object.keys(wordsByLetters).map((letter) => {
                return (
                    <div key={letter} className="mb-12 ">
                        <div className="font-thunder text-8xl text-main-blue">
                            {letter.toUpperCase()}
                        </div>
                        <div className="flex flex-col">
                            {wordsByLetters[letter].map((word) => {
                                return (
                                    <Link
                                        href={`/${RouteEnum.WORDS}/${word.slug}`}
                                        key={word.frontmatter.title}
                                        className="font-thunder text-5xl text-main-white outfit hyphens-auto"
                                    >
                                        {word.frontmatter.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Inhaltsverzeichnis',
        openGraph: {
            title: `Inhaltsverzeichnis | ${METADATA.title}`,
        },
        twitter: {
            title: `Inhaltsverzeichnis | ${METADATA.title}`,
        },
    };
}
