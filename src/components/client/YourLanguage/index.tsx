'use client';

import { useEffect, useState } from 'react';

import { LANGUAGES } from '../../../../share/constants/languages';
import { Loader } from '../../Loader';
import { getYourLanguageTextRequest } from '../../../client-api';

import { IYourLanguageProps } from './interfaces';

const DEFAULT_VALUE = 'Wählen Sie Ihre Sprache';

export const YourLanguage: React.FC<IYourLanguageProps> = ({ slug, title }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        (async () => {
            if (!selectedLanguage || selectedLanguage === DEFAULT_VALUE) {
                return;
            }

            setText('');
            setIsLoading(true);

            const { text } = await getYourLanguageTextRequest(
                selectedLanguage,
                slug,
                title
            );

            setIsLoading(false);
            setText(text);
        })();
    }, [selectedLanguage, slug, title]);

    return (
        <div>
            <select
                defaultValue={DEFAULT_VALUE}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full mb-4 bg-main-blue p-3 pr-11 rounded-lg border-4 border-main-black outline-none appearance-none cursor-pointer"
            >
                <option value={DEFAULT_VALUE}>{DEFAULT_VALUE}</option>
                {Object.values(LANGUAGES).map(({ name }) => {
                    return (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    );
                })}
            </select>
            {isLoading ? <Loader /> : null}
            {text && <span>{text}</span>}
        </div>
    );
};
