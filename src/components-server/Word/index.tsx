import Link from 'next/link';

import { RouteEnum } from '../../../share/enums/route';
import { dayjs } from '../../../share//utils/dayjs';
import {
    getRelativeLinkText,
    isTooLongWord,
    wordNameToSlug,
} from '../../../share/utils/words';
import {
    DATE_FORMAT_MDX,
    DATE_FORMAT_PUBLIC,
} from '../../../share//constants/date';
import { SocialButtons } from '../SocialButtons';

import { IWordProps } from './interfaces';

export const Word: React.FC<IWordProps> = async ({ word }) => {
    const { frontmatter, content, slug } = word;

    return (
        <section className="font-thunder bg-main-white border-4 border-main-white rounded-lg p-6">
            <section className="flex flex-col justify-between items-start gap-4 mdx-content">
                <h1
                    className={`text-8xl hyphens-auto ${
                        isTooLongWord(frontmatter.title) ? 'break-all' : ''
                    }`}
                >
                    <Link href={`/${RouteEnum.WORDS}/${slug}`}>
                        {frontmatter.title}
                    </Link>
                </h1>
                <h2 className="text-5xl">
                    <strong>{frontmatter.description}</strong>
                </h2>
                {content}
            </section>
            <section className="mt-8 mb-8">
                {frontmatter.relatedWords && (
                    <section className="flex flex-wrap mt-4">
                        <ul className="flex flex-wrap gap-x-4 list-none">
                            {frontmatter.relatedWords.map((relatedWord) => (
                                <li key={relatedWord}>
                                    <Link
                                        href={`/${
                                            RouteEnum.WORDS
                                        }/${wordNameToSlug(relatedWord)}`}
                                        className="font-thunder-extra-bold text-4xl text-main-blue"
                                    >
                                        {relatedWord}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {frontmatter.relatedLinks && (
                    <section className="flex flex-wrap mt-4">
                        {frontmatter.relatedLinks.map((relatedLink, i) => (
                            <Link
                                key={relatedLink}
                                href={relatedLink}
                                className="font-thunder-extra-bold text-4xl text-main-black opacity-20 mr-2"
                                target="_blank"
                            >
                                {getRelativeLinkText(relatedLink)}
                            </Link>
                        ))}
                    </section>
                )}
            </section>
            <section className="flex justify-center mt-4 text-lg">
                {dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).format(
                    DATE_FORMAT_PUBLIC
                )}
                <div className="ml-auto">
                    <SocialButtons slug={word.slug} />
                </div>
            </section>
        </section>
    );
};
