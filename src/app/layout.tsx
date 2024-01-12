import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";

interface IRootLayoutProps {
    readonly children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Überwörterbuch",
    description: "Das urbanste deutsche Wörterbuch",
};

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="de">
            <body className={inter.className}>
                <Layout>
                    <main> {children}</main>
                </Layout>
            </body>
        </html>
    );
}
