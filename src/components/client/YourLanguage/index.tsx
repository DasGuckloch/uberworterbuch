'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { LANGUAGES } from '../../../../share/constants/languages';
import { SearchParamEnum } from '../../../../share/enums/search-param';
import { Loader } from '../../Loader';

import { IYourLanguageProps } from './interfaces';

const DEFAULT_VALUE = 'Wählen Sie Ihre Sprache';

export const YourLanguage: React.FC<IYourLanguageProps> = ({
    slug,
    title,
    getYourLanguageWord,
}) => {
    const searchParams = useSearchParams();
    const language = searchParams.get(SearchParamEnum.LANGUAGE);

    const [selectedLanguage, setSelectedLanguage] = useState(language || '');
    const [isLoading, setIsLoading] = useState(false);
    const [word, setWord] = useState<ReactNode | null>(null);

    useEffect(() => {
        (async () => {
            if (!selectedLanguage || selectedLanguage === DEFAULT_VALUE) {
                return;
            }

            setWord('');
            setIsLoading(true);

            const url = new URL(window.location as unknown as string);
            url.searchParams.set(
                SearchParamEnum.LANGUAGE,
                selectedLanguage.toLowerCase()
            );
            window.history.pushState({}, '', url);

            let word;

            try {
                const { component } = await getYourLanguageWord(
                    selectedLanguage,
                    slug,
                    title
                );
                word = component;
            } catch (error) {
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.delete(SearchParamEnum.LANGUAGE);
                window.location.search = urlParams as unknown as string;

                setSelectedLanguage('');

                return;
            }

            setIsLoading(false);
            setWord(word);
        })();
    }, [selectedLanguage, slug, title, getYourLanguageWord]);

    return (
        <div>
            <select
                defaultValue={language || DEFAULT_VALUE}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full mb-4 bg-main-blue p-3 pr-11 rounded-lg border-4 border-main-black outline-none appearance-none cursor-pointer"
            >
                <option value={DEFAULT_VALUE}>{DEFAULT_VALUE}</option>
                {Object.values(LANGUAGES).map(({ name }) => {
                    return (
                        <option key={name} value={name.toLowerCase()}>
                            {name}
                        </option>
                    );
                })}
            </select>
            {isLoading ? <Loader /> : null}
            {word}
        </div>
    );
};
