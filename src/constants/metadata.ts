const TITLE = 'Überwörterbuch';
const DESCRIPTION = 'Das urbanste deutsche Wörterbuch';
const DOMAIN = 'https://uberworterbuch.de';
const LANGUAGE_CODE = 'de-de';
const OG_IMAGE_URL =
    'https://github.com/DasGuckloch/uberworterbuch/blob/main/images/social_gh.png?raw=true';
export const RSS_TYPE = 'application/atom+xml';

export const METADATA = {
    title: TITLE,
    description: DESCRIPTION,
    domain: DOMAIN,
    language_code: LANGUAGE_CODE,
    keywords: [
        'Dictionary',
        'Wörterbuch',
        'Woerterbuch',
        'Überwörterbuch',
        'Uberworterbuch',
        'Ueberwoerterbuch',
        'Uberdictionary',
    ],
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: DOMAIN,
        siteName: TITLE,
        images: [
            {
                url: OG_IMAGE_URL,
                width: 1280,
                height: 640,
            },
        ],
        locale: LANGUAGE_CODE,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        site: '@uberworterbuch',
        creator: '@uberworterbuch',
        images: [OG_IMAGE_URL],
    },
    alternates: {
        canonical: DOMAIN,
        types: {
            [RSS_TYPE]: `${DOMAIN}/feed.xml`,
        },
    },
};
