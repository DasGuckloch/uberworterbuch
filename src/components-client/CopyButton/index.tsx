'use client';

import { useEffect, useState } from 'react';

import { DOMAIN_PRODUCTION } from '../../../share/constants/metadata';
import { RouteEnum } from '../../../share/enums/route';
import { Icon } from '../../components-server/Icon';
import { IconNameEnum, IconSizeEnum } from '../../components-server/Icon/enums';
import { ColorEnum } from '../../../share/enums/color';

import { ICopyButtonProps } from './interfaces';

const CHECK_TIMEOUT = 2000;

export const CopyButton: React.FC<ICopyButtonProps> = ({ slug }) => {
    const [copyClicked, setCopyClicked] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setCopyClicked(false), CHECK_TIMEOUT);

        return () => {
            clearTimeout(timer);
        };
    }, [copyClicked]);

    return (
        <button
            disabled={copyClicked}
            onClick={async () => {
                await navigator.clipboard.writeText(
                    slug
                        ? `${DOMAIN_PRODUCTION}/${RouteEnum.WORDS}/${slug}`
                        : window.location.href
                );
                setCopyClicked(true);
            }}
        >
            {copyClicked ? (
                <Icon
                    name={IconNameEnum.CHECK}
                    color={ColorEnum.MAIN_BLACK}
                    size={IconSizeEnum.XS}
                />
            ) : (
                <Icon
                    name={IconNameEnum.COPY}
                    color={ColorEnum.MAIN_BLACK}
                    size={IconSizeEnum.XS}
                />
            )}
        </button>
    );
};
