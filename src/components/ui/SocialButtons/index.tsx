'use client';

import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { getLikeRequest, postLikeRequest } from '../../../client-api';
import { WORD_ICON_SIZE } from '../../../../share/constants/icon';
import { COLORS } from '../../../../share/constants/colors';

import { CopyIcon } from './CopyIcon';
import { LikeIcon } from './LikeIcon';
import { CheckIcon } from './CheckIcon';
import { ISocialButtonsProps } from './interfaces';

export const SocialButtons: React.FC<ISocialButtonsProps> = ({ slug }) => {
    const [likes, setLikes] = useState(0);
    const [likesLoaded, setLikesLoaded] = useState(false);
    const [copyClicked, setCopyClicked] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setCopyClicked(false), 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [copyClicked]);

    useEffect(() => {
        (async () => {
            const { likes } = await getLikeRequest(slug);
            setLikes(likes);
            setLikesLoaded(true);
        })();
    }, [slug]);

    if (!likesLoaded) {
        return (
            <Skeleton
                baseColor={COLORS['main-yellow']}
                highlightColor={COLORS['main-white']}
                height={WORD_ICON_SIZE}
                width={60}
                borderRadius={0}
            />
        );
    }

    return (
        <>
            <div className="flex gap-1 items-end">
                {!!likes && (
                    <span className="leading-[1] pb-[1px]">{likes}</span>
                )}
                <button
                    onClick={() => {
                        setLikes(likes + 1);
                        postLikeRequest(slug);
                    }}
                >
                    <LikeIcon />
                </button>
            </div>
            <button
                disabled={copyClicked}
                onClick={async () => {
                    await navigator.clipboard.writeText(document.location.href);
                    setCopyClicked(true);
                }}
            >
                {copyClicked ? <CheckIcon /> : <CopyIcon />}
            </button>
        </>
    );
};
