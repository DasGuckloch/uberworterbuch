import { CopyButton } from '../../components-client/CopyButton';

import { ISocialButtonsProps } from './interfaces';

export const SocialButtons: React.FC<ISocialButtonsProps> = ({ slug }) => {
    return <CopyButton slug={slug} />;
};
