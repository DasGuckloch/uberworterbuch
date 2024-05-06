import Link from 'next/link';

import {
    REDDIT_LINK,
    RSS_LINK,
    TELEGRAM_LINK,
    TWITTER_LINK,
} from '../../../share/constants/metadata';
import { IWord } from '../../../share/interfaces/words';
import { Word } from '../Word';
import { Icon } from '../Icon';
import { IconNameEnum } from '../Icon/enums';

export const WordArticle = (word: IWord, index: number, initial: boolean) => {
    return (
        <article key={word.slug} className="md:grid grid-cols-4 gap-6 mb-6">
            <div className="col-span-3">
                <Word word={word} />
            </div>
            {index === 0 && initial && (
                <div className="flex md:flex-col md:m-0 mb-6 mt-12 md:items-end gap-8 md:gap-2">
                    <Link href={REDDIT_LINK} target="_blank">
                        <Icon name={IconNameEnum.REDDIT} />
                    </Link>
                    <Link href={TWITTER_LINK} target="_blank">
                        <Icon name={IconNameEnum.TWITTER} />
                    </Link>
                    <Link href={TELEGRAM_LINK} target="_blank">
                        <Icon name={IconNameEnum.TELEGRAM} />
                    </Link>
                    <Link href={RSS_LINK} target="_blank">
                        <Icon name={IconNameEnum.RSS} />
                    </Link>
                </div>
            )}
        </article>
    );
};
