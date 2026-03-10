import { AppIcons } from '../../assets/svgs';

export interface IHeaderProps {
  title: string;
  leftIcon?: keyof typeof AppIcons;
  rightIcon?: keyof typeof AppIcons;
  leftIconWidth?: number;
  leftIconHeight?: number;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  hasOuterContainer?: boolean;
}
