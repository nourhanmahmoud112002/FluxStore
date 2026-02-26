import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { IStarsProps } from './types';
import { colors } from '../../common';

const Stars = ({ count }: IStarsProps) => {
  return (
    <StarRatingDisplay rating={count} starSize={12} color={colors.tealGreen} />
  );
};
export default Stars;
