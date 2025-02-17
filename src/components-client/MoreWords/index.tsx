'use client';

import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { WORDS_PER_PAGE } from '../../../share/constants/word';
import { Loader } from '../../components-server/Loader';
import { ColorEnum } from '../../../share/enums/color';

import { IMoreWordsProps } from './interfaces';

export const MoreWords: React.FC<IMoreWordsProps> = ({ getMore }) => {
    const [currentWordsAmount, setCurrentWordsAmount] =
        useState(WORDS_PER_PAGE);
    const [nextWords, setNextWords] = useState<React.ReactNode[]>([]);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <>
            <InfiniteScroll
                pageStart={currentWordsAmount}
                loadMore={async () => {
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
                hasMore={!isEnd}
                loader={
                    <div className="flex justify-center" key={0}>
                        <Loader color={ColorEnum.MAIN_WHITE} />
                    </div>
                }
            >
                {nextWords}
            </InfiniteScroll>
            {isEnd && (
                <div className="font-thunder-black text-9xl leading-1 text-main-red text-center pt-12 pb-12">
                    Endlich
                </div>
            )}
        </>
    );
};
