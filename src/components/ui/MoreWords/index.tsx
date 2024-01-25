'use client';
import { useState } from 'react';

import { WORDS_PER_PAGE } from '../../../constants/word';
import { Button } from '../../Button';

import { IMoreWordsProps } from './interfaces';

export const MoreWords: React.FC<IMoreWordsProps> = ({ getMore }) => {
    const [currentWordsAmount, setCurrentWordsAmount] =
        useState(WORDS_PER_PAGE);
    const [nextWords, setNextWords] = useState<React.ReactNode[]>([]);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <>
            {nextWords}
            {!isEnd ? (
                <Button
                    onClick={async () => {
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
                    }}
                >
                    Mehr
                </Button>
            ) : (
                <div className="text-center text-main-red font-bold">
                    Nicht mehr
                </div>
            )}
        </>
    );
};
