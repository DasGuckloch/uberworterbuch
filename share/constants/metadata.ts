export const DOMAIN_PRODUCTION = 'https://uberworterbuch.de';
export const DOMAIN =
    process.env.NODE_ENV === 'production'
        ? DOMAIN_PRODUCTION
        : 'http://localhost:3000';
export const TITLE = 'Überwörterbuch';
const DESCRIPTION = 'Das urbanste deutsche Wörterbuch';
const LANGUAGE_CODE = 'de-de';
const IMAGES_GH_PATH =
    'https://github.com/DasGuckloch/uberworterbuch/blob/main/images';
const IMAGES_GH_SEARCH_PARAM = 'raw=true';
const OG_IMAGE_URL = `${IMAGES_GH_PATH}/social_gh.png?${IMAGES_GH_SEARCH_PARAM}`;
export const OG_IMAGE_LOGO_URL = `${IMAGES_GH_PATH}/social_og.png?${IMAGES_GH_SEARCH_PARAM}`;
export const RSS_TYPE = 'application/atom+xml';

export const INSTARAGM_LINK = 'https://www.instagram.com/uberworterbuch/';
export const REDDIT_LINK = 'https://www.reddit.com/r/uberworterbuch/';
export const TWITTER_LINK = 'https://twitter.com/uberworterbuch';
export const TELEGRAM_LINK = 'https://t.me/uberworterbuch';
export const RSS_LINK = `${DOMAIN}/feed.xml`;

export const METADATA = {
    domain: DOMAIN,
    title: TITLE,
    description: DESCRIPTION,
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
            [RSS_TYPE]: RSS_LINK,
        },
    },
};
