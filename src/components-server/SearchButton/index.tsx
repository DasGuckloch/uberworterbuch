import Link from 'next/link';

import { RouteEnum } from '../../../share/enums/route';
import { Icon } from '../Icon';
import { IconNameEnum } from '../Icon/enums';

export const SearchButton = () => {
    return (
        <Link href={`/${RouteEnum.SEARCH}`}>
            <Icon name={IconNameEnum.SEARCH} />
        </Link>
    );
};
