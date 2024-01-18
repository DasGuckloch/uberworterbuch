import { Metadata } from 'next';

import { METADATA } from '../../../constants/metadata';
import { Word } from '../../../components/Word';
import { getWord } from '../../../utils/words';
import { RouteEnum } from '../../../enums/route';

import { IWordProps } from './interfaces';

export default async function IWordProps({ params }: IWordProps) {
    const word = await getWord(params.slug);

    return <Word word={word} />;
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
        },
        twitter: {
            ...METADATA.twitter,
            title: `${word.frontmatter.title} | ${METADATA.title}`,
            description: word.frontmatter.description,
        },
    };
}
