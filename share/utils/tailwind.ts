import { COLORS } from '../constants/colors';
import { ColorEnum } from '../enums/color';

export const getThemeColor = (color: ColorEnum): string => COLORS[color];
