'use client';

import { useEffect, useState } from 'react';

import { MINIMAL_SEARCH_VALUE_LENGTH } from '../../../share/constants/search';

import { ISearchProps } from './interfaces';

export const Search: React.FC<ISearchProps> = ({ searchWords }) => {
    const [searchValue, setSearchValue] = useState('');
    const [words, setWords] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        (async () => {
            if (
                !searchValue ||
                searchValue.length < MINIMAL_SEARCH_VALUE_LENGTH
            ) {
                setWords([]);
                return;
            }

            const { words } = await searchWords(searchValue);
            setWords(words);
        })();
    }, [searchValue, searchWords]);

    return (
        <section className="flex flex-col">
            <input
                className="font-thunder-black bg-main-white border-4 border-main-white rounded-lg text-9xl text-main-black w-full p-6 outline-none"
                value={searchValue}
                autoFocus
                onChange={(event) => setSearchValue(event.target.value)}
            />
            {!!words.length && <section className="mt-10">{words}</section>}
        </section>
    );
};
