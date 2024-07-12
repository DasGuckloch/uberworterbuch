'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';

import { ISearchProps } from './interfaces';

export const Search: React.FC<ISearchProps> = ({ searchWords }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchValueDebounced, setSearchValueDebounced] = useState('');

    useDebounce(
        () => {
            setSearchValueDebounced(searchValue);
        },
        300,
        [searchValue]
    );

    const [words, setWords] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        (async () => {
            if (!searchValueDebounced) {
                setWords([]);
                return;
            }

            const { words } = await searchWords(searchValueDebounced);
            setWords(words);
        })();
    }, [searchValueDebounced, searchWords]);

    return (
        <section className="flex flex-col">
            <input
                className="font-thunder-black bg-main-white border-4 border-main-white rounded-lg text-9xl w-full p-6 outline-none text-main-red"
                value={searchValue}
                autoFocus
                onChange={(event) => setSearchValue(event.target.value)}
            />
            {!!words.length && <section className="mt-10">{words}</section>}
        </section>
    );
};
