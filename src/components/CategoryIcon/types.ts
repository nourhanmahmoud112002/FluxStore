import { AppImages } from '../../assets/images';

export interface ICategoryIconProps {
  icon: (typeof AppImages)[keyof typeof AppImages];
  label: string;
  selected: boolean;
  onPress: () => void;
}
