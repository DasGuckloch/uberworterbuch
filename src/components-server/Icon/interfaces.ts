import { ColorEnum } from '../../../share/enums/color';

import { IconNameEnum, IconSizeEnum } from './enums';

export interface IconProps {
    readonly name: IconNameEnum;
    readonly color?: ColorEnum;
    readonly size?: IconSizeEnum;
}

export interface IconSvgProps {
    readonly color: string;
}
