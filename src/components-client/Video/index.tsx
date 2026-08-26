'use client';

import { getVideoSrc } from './utils';
import { IVideoProps } from './interfaces';

export const Video: React.FC<IVideoProps> = ({ video }) => {
    return (
        <section className="rounded-lg overflow-hidden">
            <iframe
                width="100%"
                height="395"
                src={getVideoSrc(video)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </section>
    );
};
