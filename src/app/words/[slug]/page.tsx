import { Metadata } from 'next';

import { METADATA } from '../../../../share/constants/metadata';
import { Word } from '../../../components-server/Word';
import { RouteEnum } from '../../../../share/enums/route';
import { Video } from '../../../components-client/Video';
import { getAllWords, getWord } from '../../../../share/utils/words';

import { IWordProps } from './interfaces';

export default async function IWord({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return (
        <>
            <section className="mb-12">
                <Word word={word} />
            </section>
            {word.frontmatter.video && (
                <section className="mb-8 print:hidden">
                    <Video word={word} />
                </section>
            )}
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
