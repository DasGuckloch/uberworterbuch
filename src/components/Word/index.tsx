import { DATE_FORMAT_MDX, DATE_FORMAT_PUBLIC } from '../../constants/date';
import { RouteEnum } from '../../enums/route';
import { getRelativeLinkText } from '../../utils/words';
import { dayjs } from '../../utils/dayjs';
import { wordNameToSlug } from '../../utils/word-name-to-slug';

import { IWordProps } from './interfaces';

export const Word: React.FC<IWordProps> = ({ word }) => {
    const { frontmatter, content, slug } = word;

    return (
        <section className="bg-main-yellow border-4 border-main-black rounded-lg p-6">
            <section className="flex flex-col justify-between items-start gap-4 mdx-content">
                <h1 className="outfit text-2xl md:text-5xl lg:text-7xl">
                    <a href={`/words/${slug}`}>{frontmatter.title}</a>
                </h1>
                <h2>
                    <strong>{frontmatter.description}</strong>
                </h2>
                {content}
            </section>
            {frontmatter.relatedWords && (
                <section className="flex flex-wrap mt-4">
                    {frontmatter.relatedWords.map((relatedWord) => (
                        <a
                            key={relatedWord}
                            href={`/${RouteEnum.WORDS}/${wordNameToSlug(
                                relatedWord
                            )}`}
                            className="mr-2 text-main-blue"
                        >
                            {relatedWord}
                        </a>
                    ))}
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
            <section className="mt-4 text-xs">
                {dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).format(
                    DATE_FORMAT_PUBLIC
                )}
            </section>
        </section>
    );
};
