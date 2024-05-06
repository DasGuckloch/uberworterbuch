import { ColorEnum } from '../../../share/enums/color';
import { Icon } from '../Icon';
import { IconNameEnum } from '../Icon/enums';

import { ILoaderProps } from './interfaces';

export const Loader: React.FC<ILoaderProps> = ({
    color = ColorEnum.MAIN_BLACK,
}) => {
    return (
        <div className="animate-spin">
            <Icon name={IconNameEnum.LOADER} color={color} />
        </div>
    );
};
