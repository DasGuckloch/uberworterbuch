import { MetadataRoute } from 'next';

import { METADATA } from '../constants/metadata';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${METADATA.domain}/sitemap.xml`,
    };
}
