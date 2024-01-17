import { RouteEnum } from "../enums/route";
import { IWord } from "../interfaces/words";

export const searchWordsRequest = async (
    searchValue: string
): Promise<{ words: IWord[] }> => {
    const res = await fetch(
        `/${RouteEnum.WORDS}/api/search?search-value=${searchValue}`
    );

    return res.json();
};

export const getRandomWordSlugRequest = async (): Promise<{ slug: string }> => {
    const res = await fetch(`/${RouteEnum.WORDS}/api/random`);

    return res.json();
};
