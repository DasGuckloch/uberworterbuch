import { Metadata } from 'next';

import { METADATA } from '../../../share/constants/metadata';

export default async function AboutPage() {
    return (
        <section className="text-main-white">
            Das urbanste deutsche Wörterbuch!
        </section>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Über uns',
        openGraph: {
            title: `Über uns | ${METADATA.title}`,
        },
        twitter: {
            title: `Über uns | ${METADATA.title}`,
        },
    };
}
