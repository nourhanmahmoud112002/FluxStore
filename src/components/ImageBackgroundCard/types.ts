import { AppImages } from '../../assets/images';
export interface IImageBackgroundCardProps {
  imageUri: (typeof AppImages)[keyof typeof AppImages];
}
