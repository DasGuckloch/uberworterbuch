import { COLORS } from '../../../share/constants/colors';
import { ColorEnum } from '../../../share/enums/color';

import { IconNameEnum, IconSizeEnum } from './enums';
import { CheckIcon } from './icons/CheckIcon';
import { CopyIcon } from './icons/CopyIcon';
import { LoaderIcon } from './icons/LoaderIcon';
import { RSSIcon } from './icons/RSSIcon';
import { RedditIcon } from './icons/RedditIcon';
import { SearchIcon } from './icons/SearchIcon';
import { ShuffleIcon } from './icons/ShuffleIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { IconProps } from './interfaces';

const getIcon = (name: IconNameEnum, size: IconSizeEnum, color: ColorEnum) => {
    if (name === IconNameEnum.TELEGRAM) {
        return <TelegramIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.TWITTER) {
        return <TwitterIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.REDDIT) {
        return <RedditIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.RSS) {
        return <RSSIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.COPY) {
        return <CopyIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.CHECK) {
        return <CheckIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.SHUFFLE) {
        return <ShuffleIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.LOADER) {
        return <LoaderIcon color={COLORS[color]} />;
    }

    if (name === IconNameEnum.SEARCH) {
        return <SearchIcon color={COLORS[color]} />;
    }

    return null;
};

export const Icon: React.FC<IconProps> = ({
    name,
    color = ColorEnum.MAIN_WHITE,
    size = IconSizeEnum.M,
}) => {
    return (
        <div className={size === IconSizeEnum.M ? 'w-28' : 'w-5'}>
            {getIcon(name, size, color)}
        </div>
    );
};
