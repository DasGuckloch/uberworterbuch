"use client";
import Image from "next/image";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import ShuffleIconSvg from "./assets/shuffle.svg";
import { RouteEnum } from "../../../enums/route";
import { IWord } from "../../../interfaces/words";

const GET_SEARCH_ITEMS_THROTTLE_MS = 300;

const getSearchItems = async (
    searchValue: string,
    setSearchItems: (searchItems: IWord[]) => void
): Promise<void> => {
    const {
        data: { searchItems },
    } = await axios.get(
        `/${RouteEnum.WORDS}/api/search-items?search-value=${searchValue}`
    );

    setSearchItems(searchItems);
};

const getSearchItemsDebounced = debounce(
    getSearchItems,
    GET_SEARCH_ITEMS_THROTTLE_MS
);

export const Input = () => {
    const router = useRouter();

    const [searchValue, setSearchValue] = useState("");
    const [searchItems, setSearchItems] = useState<IWord[]>([]);

    useEffect(() => {
        if (!searchValue) {
            setSearchItems([]);
        }

        getSearchItemsDebounced(searchValue, setSearchItems);
    }, [searchValue]);

    return (
        <div className="relative mt-6">
            <input
                className="w-full bg-[#38bdf8] p-3 pr-10 rounded-lg border-4 border-[#000] outline-none placeholder:italic placeholder:text-black"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Suche"
            />
            <Image
                src={ShuffleIconSvg}
                alt="zufällig"
                className="w-6 absolute right-3 top-0 bottom-0 m-auto cursor-pointer"
                onClick={async () => {
                    setSearchValue("");
                    setSearchItems([]);

                    const {
                        data: { slug },
                    } = await axios.get(`/${RouteEnum.WORDS}/api/random`);

                    router.push(`/${RouteEnum.WORDS}/${slug}`);
                }}
            />
            {!!searchItems.length && (
                <div className="absolute shadow-2xl top-16 left-0 w-full rounded-lg border-4 border-[#000] bg-[#60a5fa] box-border z-10 overflow-hidden">
                    {searchItems.map((searchItem) => {
                        return (
                            <div
                                key={searchItem.slug}
                                className="p-3 bg-[#60a5fa] hover:bg-[#6093fa] cursor-pointer"
                                onClick={() => {
                                    setSearchValue("");
                                    setSearchItems([]);

                                    router.push(
                                        `/${RouteEnum.WORDS}/${searchItem.slug}`
                                    );
                                }}
                            >
                                <div>{searchItem.frontmatter.title}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
