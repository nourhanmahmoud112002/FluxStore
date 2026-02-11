import { StyleProp, ViewStyle } from 'react-native';
import { AppImages } from '../../assets/images';

export interface ITextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  startIcon?: (typeof AppImages)[keyof typeof AppImages];
  endIcon?: (typeof AppImages)[keyof typeof AppImages];
  styles?: StyleProp<ViewStyle>;
}
