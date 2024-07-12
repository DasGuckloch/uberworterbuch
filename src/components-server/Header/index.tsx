import Link from 'next/link';

import { TITLE } from '../../../share/constants/metadata';
import { ShuffleButton } from '../../components-client/ShuffleButton';
import { SearchButton } from '../SearchButton';
import { TOCButton } from '../TOCButton';

export const Header = () => {
    return (
        <header className="flex flex-col flex-wrap gap-4 lg:flex-row lg:items-center bg-main-black w-full pt-14 pb-4 pl-10 pr-10 ">
            <h1 className="grow font-thunder-black underline text-9xl text-main-white leading-none">
                <Link href="/"> {TITLE.toUpperCase()}</Link>
            </h1>
            <section className="flex gap-4">
                <SearchButton />
                <ShuffleButton />
                <TOCButton />
            </section>
        </header>
    );
};
