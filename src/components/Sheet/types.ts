import { ImageSourcePropType } from 'react-native';

export interface ISheetProps {
  bottomSheetRef?: React.RefObject<any>;
  icon: ImageSourcePropType;
  title: string;
  subTitle: string;
  buttonLabel: string;
  onButtonPress: () => void;
}
