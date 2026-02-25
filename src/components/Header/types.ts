import { AppImages } from '../../assets/images';

export interface IHeaderProps {
  title: string;
  leftIcon?: (typeof AppImages)[keyof typeof AppImages];
  rightIcon?: (typeof AppImages)[keyof typeof AppImages];
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}
