import { ApiRouteEnum } from '../../share/enums/api';
import { RouteEnum } from '../../share/enums/route';
import { SearchParamEnum } from '../../share/enums/search-param';

export const getRandomWordSlugRequest = async (
    slug?: string
): Promise<{ slug: string }> => {
    const res = await fetch(
        `/${RouteEnum.WORDS}/${ApiRouteEnum.API}/${ApiRouteEnum.RANDOM}?${SearchParamEnum.SLUG}=${slug}`
    );

    return res.json();
};
