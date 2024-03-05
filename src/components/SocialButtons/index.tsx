import { CopyButton } from '../client/CopyButton';
import { Likes } from '../client/Likes';

import { ISocialButtonsProps } from './interfaces';

export const SocialButtons: React.FC<ISocialButtonsProps> = ({
    slug,
    likes,
    onlyCopy,
}) => {
    if (onlyCopy) {
        return <CopyButton />;
    }

    return (
        <>
            <Likes slug={slug} likes={likes} />
            <CopyButton slug={slug} />
        </>
    );
};
