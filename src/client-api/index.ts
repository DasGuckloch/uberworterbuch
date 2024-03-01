import { RouteEnum } from '../../share/enums/route';
import { IWord } from '../../share/interfaces/words';

export const searchWordsRequest = async (
    searchValue: string
): Promise<{ words: IWord[] }> => {
    const res = await fetch(
        `/${RouteEnum.WORDS}/api/search?search-value=${searchValue}`
    );

    return res.json();
};

export const getRandomWordSlugRequest = async (
    currentSlug?: string
): Promise<{ slug: string }> => {
    const res = await fetch(
        `/${RouteEnum.WORDS}/api/random?current-slug=${currentSlug}`
    );

    return res.json();
};

export const postLikeRequest = async (slug: string) => {
    await fetch(`/${RouteEnum.WORDS}/api/like`, {
        method: 'POST',
        body: JSON.stringify({ slug }),
    });
};

export const getYourLanguageTextRequest = async (
    language: string,
    slug: string,
    title: string
): Promise<{ text: string }> => {
    const res = await fetch(
        `/${RouteEnum.WORDS}/api/your-language-text?language=${language}&slug=${slug}&title=${title}`
    );

    return res.json();
};
