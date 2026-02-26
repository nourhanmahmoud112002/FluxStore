import { AppImages } from '../../assets/images';

export interface ICardProps {
  image: (typeof AppImages)[keyof typeof AppImages];
  title: string;
  price: string;
  previousPrice?: string;
  starsCount?: number;
  numberOfReviews?: number;
  onPress: () => void;
  hasFavoriteIcon?: boolean;
  isFavorite?: boolean;
  onPressFavoriteIcon?: () => void;
}
