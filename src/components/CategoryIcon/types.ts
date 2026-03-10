import { AppIcons } from '../../assets/svgs';

export interface ICategoryIconProps {
  icon: keyof typeof AppIcons;
  label: string;
  selected: boolean;
  onPress: () => void;
}
