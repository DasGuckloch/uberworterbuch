'use client';

import { useState } from 'react';

import { postLikeRequest } from '../../../client-api';

import { LikeIcon } from './LikeIcon';
import { ILikesProps } from './interfaces';

export const Likes: React.FC<ILikesProps> = ({ slug, likes }) => {
    const [likesState, setLikesState] = useState(likes);

    return (
        <div className="flex gap-1 items-end">
            <span className="leading-[1] pb-[1px]">{likesState}</span>
            <button
                onClick={async () => {
                    setLikesState(likesState + 1);
                    await postLikeRequest(slug);
                }}
            >
                <LikeIcon />
            </button>
        </div>
    );
};
