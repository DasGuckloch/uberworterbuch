import Link from 'next/link';

import { RouteEnum } from '../../../share/enums/route';
import { dayjs } from '../../../share//utils/dayjs';
import {
    getRelativeLinkText,
    wordNameToSlug,
} from '../../../share/utils/words';
import {
    DATE_FORMAT_MDX,
    DATE_FORMAT_PUBLIC,
} from '../../../share//constants/date';
import { getLikes } from '../../../share/utils/firebase/getters';
import { SocialButtons } from '../SocialButtons';

import { IWordProps } from './interfaces';

export const Word: React.FC<IWordProps> = async ({
    word,
    language,
    languageText,
}) => {
    const { frontmatter, content, slug } = word;

    const likes = language ? 0 : await getLikes(word.slug);

    return (
        <section className="bg-main-yellow border-4 border-main-black rounded-lg p-6">
            <section className="flex flex-col justify-between items-start gap-4 mdx-content">
                <h1 className="outfit text-2xl md:text-5xl lg:text-6xl">
                    <Link
                        href={
                            language
                                ? `/words/${slug}?language=${language.toLowerCase()}`
                                : `/words/${slug}`
                        }
                    >
                        {frontmatter.title}
                    </Link>
                </h1>
                <h2>
                    <strong>{languageText || frontmatter.description}</strong>
                </h2>
                {languageText ? null : content}
            </section>
            {!!language ? (
                <>
                    <section className="flex mt-4 text-xs">
                        <div className="flex gap-2 ml-auto">
                            <SocialButtons slug={slug} likes={likes} onlyCopy />
                        </div>
                    </section>
                </>
            ) : (
                <>
                    {frontmatter.relatedWords && (
                        <section className="flex flex-wrap mt-4">
                            <ul className="list-none flex flex-wrap gap-x-4">
                                {frontmatter.relatedWords.map((relatedWord) => (
                                    <li key={relatedWord}>
                                        <Link
                                            href={`/${
                                                RouteEnum.WORDS
                                            }/${wordNameToSlug(relatedWord)}`}
                                            className="text-main-blue"
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
                                <a
                                    key={relatedLink}
                                    href={relatedLink}
                                    className="mr-2 text-main-black opacity-20"
                                    target="_blank"
                                >
                                    {getRelativeLinkText(relatedLink)}
                                </a>
                            ))}
                        </section>
                    )}
                    <section className="flex mt-4 text-xs">
                        {dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).format(
                            DATE_FORMAT_PUBLIC
                        )}
                        <div className="flex gap-2 ml-auto">
                            <SocialButtons slug={slug} likes={likes} />
                        </div>
                    </section>
                </>
            )}
        </section>
    );
};
