import dayjs from "dayjs";
import { IWordProps } from "./interfaces";
import { DATE_FORMAT_MDX, DATE_FORMAT_PUBLIC } from "../../constants/date";

export const Word: React.FC<IWordProps> = ({ word }) => {
    const { frontmatter, content, slug } = word;

    return (
        <div className="bg-[#facc15] border-4 border-[#000] rounded-lg p-6 drop-shadow-3xl">
            <div className="flex flex-col justify-between items-start gap-4">
                <p className="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
                    <a href={`/words/${slug}`}>{frontmatter.title}</a>
                </p>
                {content}
            </div>
            <div className="mt-4 text-xs">
                {dayjs(frontmatter.pubDate, DATE_FORMAT_MDX).format(
                    DATE_FORMAT_PUBLIC
                )}
            </div>
        </div>
    );
};
