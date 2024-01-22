'use client';

import { useEffect, useState } from 'react';

import { IVideoProps } from './interfaces';

export const Video: React.FC<IVideoProps> = ({ word }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <div>
            <iframe
                width="100%"
                height="360"
                src={`${word.frontmatter.video}&amp;cc_lang_pref=de&cc_load_policy=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    ) : null;
};
