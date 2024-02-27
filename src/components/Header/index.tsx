import Link from 'next/link';

import { Search } from '../ui/Search';
import {
    REDDIT_LINK,
    RSS_LINK,
    TELEGRAM_LINK,
    TWITTER_LINK,
} from '../../../share/constants/metadata';

import { TwitterIcon } from './TwitterIcon';
import { TelegramIcon } from './TelegramIcon';
import { RSSIcon } from './RSSIcon';
import { RedditIcon } from './RedditIcon';

export const Header: React.FC = () => {
    return (
        <header className="flex md:justify-center p-4 pt-6 w-full">
            <section className="flex flex-col md:min-w-[700px] md:max-w-[700px] w-full">
                <section className="flex flex-col gap-2 md:items-center md:flex-row">
                    <Link href="/" className="text-3xl font-bold">
                        überwörterbuch
                    </Link>
                    <div className="flex gap-2 md:ml-auto">
                        <a
                            className="cursor-pointer"
                            href={REDDIT_LINK}
                            target="_blank"
                        >
                            <RedditIcon />
                        </a>
                        <a
                            className="cursor-pointer"
                            href={TWITTER_LINK}
                            target="_blank"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            className="cursor-pointer"
                            href={TELEGRAM_LINK}
                            target="_blank"
                        >
                            <TelegramIcon />
                        </a>
                        <a
                            className="cursor-pointer"
                            href={RSS_LINK}
                            target="_blank"
                        >
                            <RSSIcon />
                        </a>
                    </div>
                </section>
                <Search />
            </section>
        </header>
    );
};
