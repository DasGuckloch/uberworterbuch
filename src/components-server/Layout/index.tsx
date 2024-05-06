import { Header } from '../Header';

import { ILayoutProps } from './interfaces';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full p-10">{children}</main>
        </>
    );
};
