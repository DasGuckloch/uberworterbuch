import { Metadata } from 'next';
import { Suspense } from 'react';

import { METADATA } from '../../../../share/constants/metadata';
import { Word } from '../../../components/Word';
import { RouteEnum } from '../../../../share/enums/route';
import { Video } from '../../../components/client/Video';
import { getAllWords, getWord } from '../../../../share/utils/words';
import { getYourLanguageWordText } from '../../../../share/utils/ai';
import { YourLanguage } from '../../../components/client/YourLanguage';

import { IWordProps } from './interfaces';

const getYourLanguageWord = async (
    language: string,
    slug: string,
    title: string
) => {
    'use server';

    const { word, text } = await getYourLanguageWordText(language, slug, title);

    return {
        component: <Word word={word} language={language} languageText={text} />,
    };
};

export default async function IWord({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return (
        <>
            <section className="mb-12">
                <Word word={word} />
            </section>
            {word.frontmatter.video && (
                <section className="mb-8 print:hidden">
                    <span className="block text-3xl font-bold mb-4 text-main-blue">
                        Wie klingt es auf Deutsch?
                    </span>
                    <Video word={word} />
                </section>
            )}
            <Suspense fallback={null}>
                <section>
                    <span className="block text-3xl font-bold mb-4 text-main-blue">
                        Wie klingt es in anderen Sprachen?
                    </span>
                    <YourLanguage
                        slug={word.slug}
                        title={word.frontmatter.title}
                        getYourLanguageWord={getYourLanguageWord}
                    />
                </section>
            </Suspense>
        </>
    );
}

export async function generateStaticParams() {
    const words = await getAllWords();

    return words.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
    params,
}: IWordProps): Promise<Metadata> {
    const { frontmatter, slug } = await getWord(params.slug);

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        keywords: [
            ...METADATA.keywords,
            frontmatter.title,
            ...(frontmatter.relatedWords || []),
        ],
        openGraph: {
            ...METADATA.openGraph,
            title: `${frontmatter.title} | ${METADATA.title}`,
            description: frontmatter.description,
            url: `${METADATA.domain}/${RouteEnum.WORDS}/${slug}`,
            images: [`${METADATA.domain}/${RouteEnum.WORDS}/${slug}/og`],
        },
        twitter: {
            ...METADATA.twitter,
            title: `${frontmatter.title} | ${METADATA.title}`,
            description: frontmatter.description,
            images: [`${METADATA.domain}/${RouteEnum.WORDS}/${slug}/og`],
        },
    };
}
