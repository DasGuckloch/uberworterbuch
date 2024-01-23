import { Header } from '../Header';

import { ILayoutProps } from './interfaces';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-col flex-1 md:min-w-[700px] md:max-w-[700px] min-w-full max-w-full pt-6 pb-6 pl-6 pr-6 md:pl-0 md:pr-0">
                {children}
            </main>
        </>
    );
};
