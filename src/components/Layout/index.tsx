import { Header } from '../Header';

import { ILayoutProps } from './interfaces';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-col flex-1 md:min-w-[700px] md:max-w-[700px] min-w-full max-w-full p-4 md:pl-0 md:pr-0">
                {children}
            </main>
        </>
    );
};
