import Link from 'next/link';

import { RouteEnum } from '../../../share/enums/route';
import { Icon } from '../Icon';
import { IconNameEnum } from '../Icon/enums';

export const TOCButton = () => {
    return (
        <Link href={`/${RouteEnum.TOC}`}>
            <Icon name={IconNameEnum.TOC} title="Inhaltsverzeichnis" />
        </Link>
    );
};
