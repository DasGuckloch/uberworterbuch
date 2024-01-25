'use client';
import Image from 'next/image';
import debounce from 'lodash.debounce';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { RouteEnum } from '../../../enums/route';
import { IWord } from '../../../interfaces/words';
import {
    getRandomWordSlugRequest,
    searchWordsRequest,
} from '../../../client-api';

import ShuffleIconSvg from './assets/shuffle.svg';

const GET_SEARCH_ITEMS_THROTTLE_MS = 300;

const searchWords = async (
    searchValue: string,
    setWords: (words: IWord[]) => void
): Promise<void> => {
    const { words } = await searchWordsRequest(searchValue);
    setWords(words);
};

const searchWordsDebounced = debounce(
    searchWords,
    GET_SEARCH_ITEMS_THROTTLE_MS
);

export const Input = () => {
    const router = useRouter();
    const params = useParams<{ slug?: string }>();

    const [searchValue, setSearchValue] = useState('');
    const [words, setWords] = useState<IWord[]>([]);

    useEffect(() => {
        if (!searchValue) {
            setWords([]);
        }

        searchWordsDebounced(searchValue, setWords);
    }, [searchValue]);

    return (
        <div className="relative mt-6">
            <input
                className="w-full bg-main-blue p-3 pr-11 rounded-lg border-4 border-main-black outline-none placeholder:italic placeholder:text-main-black"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Suche"
            />
            <button
                className="absolute top-0 bottom-0 right-0 p-3"
                onClick={async () => {
                    setSearchValue('');
                    setWords([]);

                    const { slug: randomSlug } = await getRandomWordSlugRequest(
                        params.slug
                    );
                    router.push(`/${RouteEnum.WORDS}/${randomSlug}`);
                }}
            >
                <Image src={ShuffleIconSvg} alt="zufällig" className="w-6" />
            </button>
            {!!words.length && (
                <div className="absolute shadow-zinc-800 shadow-2xl top-16 left-0 w-full rounded-lg border-4 border-main-black bg-main-blue box-border z-10 overflow-hidden">
                    {words.map((word) => {
                        return (
                            <button
                                key={word.slug}
                                className="p-3 bg-main-blue"
                                onClick={() => {
                                    setSearchValue('');
                                    setWords([]);

                                    router.push(
                                        `/${RouteEnum.WORDS}/${word.slug}`
                                    );
                                }}
                            >
                                <div>{word.frontmatter.title}</div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
