import { AppIcons } from '../../assets/svgs';

export interface ISheetProps {
  bottomSheetRef?: React.RefObject<any>;
  icon: keyof typeof AppIcons;
  title: string;
  subTitle: string;
  buttonLabel: string;
  onButtonPress: () => void;
}
