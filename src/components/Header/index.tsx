import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <header className="flex md:justify-center border-b-4 border-black p-6 w-full">
            <section className="md:min-w-[700px] md:max-w-[700px]">
                <Link href="/" className="text-3xl font-bold">
                    Überwörterbuch
                </Link>
            </section>
        </header>
    );
};
