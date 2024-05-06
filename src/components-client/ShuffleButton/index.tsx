'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { getRandomWordSlugRequest } from '../../client-api';
import { RouteEnum } from '../../../share/enums/route';
import { ColorEnum } from '../../../share/enums/color';
import { Loader } from '../../components-server/Loader';
import { Icon } from '../../components-server/Icon';
import { IconNameEnum } from '../../components-server/Icon/enums';

export const ShuffleButton = () => {
    const router = useRouter();
    const params = useParams<{ slug?: string }>();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <button
            disabled={isLoading}
            onClick={async () => {
                setIsLoading(true);

                const { slug: randomSlug } = await getRandomWordSlugRequest(
                    params.slug
                );

                router.push(`/${RouteEnum.WORDS}/${randomSlug}`);

                setIsLoading(false);
            }}
        >
            {isLoading ? (
                <Loader color={ColorEnum.MAIN_WHITE} />
            ) : (
                <Icon name={IconNameEnum.SHUFFLE} />
            )}
        </button>
    );
};
