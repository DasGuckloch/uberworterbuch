import { Metadata } from 'next';

import { METADATA } from '../../../constants/metadata';
import { Word } from '../../../components/Word';
import { getWord } from '../../../utils/words';
import { RouteEnum } from '../../../enums/route';
import { Video } from '../../../components/ui/Video';

import { IWordProps } from './interfaces';

export default async function IWordProps({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return (
        <>
            <section className="mb-8">
                <Word word={word} />
            </section>
            {word.frontmatter.video && (
                <section>
                    <span className="block font-bold mb-2">
                        How does it sound?
                    </span>
                    <Video word={word} />
                </section>
            )}
        </>
    );
}

export async function generateMetadata({
    params,
}: IWordProps): Promise<Metadata> {
    const word = await getWord(params.slug);

    return {
        title: word.frontmatter.title,
        description: word.frontmatter.description,
        openGraph: {
            ...METADATA.openGraph,
            title: `${word.frontmatter.title} | ${METADATA.title}`,
            description: word.frontmatter.description,
            url: `${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}`,
            images: [`${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}/og`],
        },
        twitter: {
            ...METADATA.twitter,
            title: `${word.frontmatter.title} | ${METADATA.title}`,
            description: word.frontmatter.description,
            images: [`${METADATA.domain}/${RouteEnum.WORDS}/${word.slug}/og`],
        },
    };
}
