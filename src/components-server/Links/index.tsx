import Link from 'next/link';

import {
    INSTARAGM_LINK,
    REDDIT_LINK,
    RSS_LINK,
    TELEGRAM_LINK,
    TWITTER_LINK,
} from '../../../share/constants/metadata';
import { IconNameEnum } from '../Icon/enums';
import { Icon } from '../Icon';
import { RouteEnum } from '../../../share/enums/route';

export const Links = () => {
    return (
        <div className="flex flex-wrap items-center gap-8 w-full mb-12 mt-12">
            <div className="flex flex-wrap items-center gap-8 grow">
                <Link href={INSTARAGM_LINK} target="_blank">
                    <Icon name={IconNameEnum.INSTAGRAM} />
                </Link>
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
            <Link
                href={`/${RouteEnum.ABOUT}`}
                className="font-thunder text-8xl text-main-white whitespace-nowrap pt-6 leading-2"
            >
                Über uns
            </Link>
        </div>
    );
};
