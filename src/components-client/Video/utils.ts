import { VIDEO_PARAMS } from './constants';

// The README asks for the `src` copied out of YouTube's iframe embed code,
// which is HTML-escaped, so pasted URLs separate parameters with `&amp;`.
// Left as is, YouTube reads `start` as `amp;start` and ignores it.
const decodeAmpersands = (url: string): string => url.replace(/&amp;/g, '&');

export const getVideoSrc = (video: string): string => {
    const url = decodeAmpersands(video);
    const separator = url.includes('?') ? '&' : '?';

    return `${url}${separator}${VIDEO_PARAMS}`;
};
