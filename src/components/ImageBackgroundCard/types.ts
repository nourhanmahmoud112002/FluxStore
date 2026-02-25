import { TextStyle } from 'react-native';
import { AppImages } from '../../assets/images';
export interface IImageBackgroundCardProps {
  imageUri: (typeof AppImages)[keyof typeof AppImages];
  title?: string;
  description?: string;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}
