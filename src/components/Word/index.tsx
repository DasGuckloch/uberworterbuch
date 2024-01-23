import dayjs from 'dayjs';

import { DATE_FORMAT_MDX, DATE_FORMAT_PUBLIC } from '../../constants/date';

import { IWordProps } from './interfaces';

export const Word: React.FC<IWordProps> = ({ word }) => {
    const { frontmatter, content, slug } = word;

    return (
        <section className="bg-[#facc15] border-4 border-[#000] rounded-lg p-6">
            <section className="flex flex-col justify-between items-start gap-4 mdx-content">
                <h1 className="outfit text-2xl md:text-5xl lg:text-7xl">
                    <a href={`/words/${slug}`}>{frontmatter.title}</a>
                </h1>
                <h2>
                    <strong>{frontmatter.description}</strong>
                </h2>
                {content}
            </section>
            <section className="mt-4 text-xs">
                {dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).format(
                    DATE_FORMAT_PUBLIC
                )}
            </section>
        </section>
    );
};
