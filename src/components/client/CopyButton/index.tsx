'use client';

import { useEffect, useState } from 'react';

import { CheckIcon } from './CheckIcon';
import { CopyIcon } from './CopyIcon';

import { DOMAIN_PRODUCTION } from '../../../../share/constants/metadata';
import { ICopyButtonProps } from './interfaces';

export const CopyButton: React.FC<ICopyButtonProps> = ({ slug }) => {
    const [copyClicked, setCopyClicked] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setCopyClicked(false), 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [copyClicked]);

    return (
        <button
            disabled={copyClicked}
            onClick={async () => {
                await navigator.clipboard.writeText(
                    `${DOMAIN_PRODUCTION}/words/${slug}`
                );
                setCopyClicked(true);
            }}
        >
            {copyClicked ? <CheckIcon /> : <CopyIcon />}
        </button>
    );
};
