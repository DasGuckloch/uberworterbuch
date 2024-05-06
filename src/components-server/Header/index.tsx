import Link from 'next/link';

import { TITLE } from '../../../share/constants/metadata';
import { ShuffleButton } from '../../components-client/ShuffleButton';
import { SearchButton } from '../SearchButton';

export const Header = () => {
    return (
        <header className="flex flex-col lg:flex-row lg:items-center bg-main-black w-full pt-14 pb-4 pl-10 pr-10 ">
            <h1 className="font-thunder-black text-9xl text-main-white leading-none">
                <Link href="/"> {TITLE.toUpperCase()}</Link>
            </h1>
            <section className="flex gap-8 lg:ml-auto">
                <SearchButton />
                <ShuffleButton />
            </section>
        </header>
    );
};
