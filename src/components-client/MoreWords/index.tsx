'use client';

import { useState } from 'react';

import { WORDS_PER_PAGE } from '../../../share/constants/word';
import { Button } from '../../components-server/Button';
import { Loader } from '../../components-server/Loader';

import { IMoreWordsProps } from './interfaces';

export const MoreWords: React.FC<IMoreWordsProps> = ({ getMore }) => {
    const [currentWordsAmount, setCurrentWordsAmount] =
        useState(WORDS_PER_PAGE);
    const [nextWords, setNextWords] = useState<React.ReactNode[]>([]);
    const [isEnd, setIsEnd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {nextWords}
            {!isEnd ? (
                <Button
                    disabled={isLoading}
                    onClick={async () => {
                        setIsLoading(true);

                        const { nextWords, isEnd } = await getMore(
                            currentWordsAmount
                        );

                        setCurrentWordsAmount(
                            currentWordsAmount + nextWords.length
                        );

                        setNextWords((prev) => {
                            return [...prev, ...nextWords];
                        });
                        setIsEnd(isEnd);

                        setIsLoading(false);
                    }}
                >
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <span className="pt-3">
                            {'Mehr überworter'.toUpperCase()}
                        </span>
                    )}
                </Button>
            ) : (
                <div className="font-thunder-black text-9xl leading-1 text-main-red text-center pt-24">
                    Ende.
                </div>
            )}
        </>
    );
};
