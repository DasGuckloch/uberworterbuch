import Link from 'next/link';

import { Input } from '../ui/Input';

export const Header: React.FC = () => {
    return (
        <header className="flex md:justify-center border-b-4 border-black p-6 w-full">
            <section className="flex flex-col md:min-w-[700px] md:max-w-[700px] w-full">
                <Link href="/" className="text-3xl font-bold">
                    Überwörterbuch
                </Link>
                <Input />
            </section>
        </header>
    );
};
