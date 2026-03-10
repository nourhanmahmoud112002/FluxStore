import { colors } from './../../common/colors/colors';

import { SvgProps } from 'react-native-svg';
import { AppIcons } from '../../assets/svgs';

export type IconName = keyof typeof AppIcons;

export interface IIconProps extends Omit<SvgProps, 'children'> {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  style?: object;
  fill?: keyof typeof colors | 'none';
  color?: keyof typeof colors;
  rtlFlipEnabled?: boolean;
}
