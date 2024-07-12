import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';
import { Layout } from '../components-server/Layout';
import { METADATA } from '../../share/constants/metadata';

interface IRootLayoutProps {
    readonly children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: `%s | ${METADATA.title}`,
        default: METADATA.title,
    },
    description: METADATA.description,
    keywords: METADATA.keywords,
    openGraph: METADATA.openGraph,
    twitter: METADATA.twitter,
};

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang={METADATA.language_code}>
            <body
                className={`${inter.className} flex flex-col items-center min-h-screen`}
            >
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
