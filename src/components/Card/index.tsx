import { Image, Pressable, View } from 'react-native';
import { ICardProps } from './types';
import { styles } from './styles';
import { Text } from 'react-native-gesture-handler';
import Stars from '../Stars';
import { AppImages } from '../../assets/images';
import { useState } from 'react';

const Card = ({
  image,
  title,
  price,
  previousPrice,
  starsCount,
  numberOfReviews,
  onPress,
  hasFavoriteIcon,
  isFavorite,
  onPressFavoriteIcon,
}: ICardProps) => {
  const [isFav, setIsFav] = useState(isFavorite);
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        {hasFavoriteIcon && (
          <Pressable
            style={styles.favoriteIcon}
            onPress={() => {
              setIsFav(prev => !prev);
              onPressFavoriteIcon && onPressFavoriteIcon();
            }}
          >
            <Image
              source={isFav ? AppImages.Fav : AppImages.NotFav}
              style={styles.favoriteIconImage}
            />
          </Pressable>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        {previousPrice && (
          <Text style={styles.previousPrice}>{previousPrice}</Text>
        )}
      </View>
      <View style={styles.reviewContainer}>
        {starsCount && <Stars count={starsCount} />}
        {numberOfReviews && (
          <Text style={styles.reviewsNumber}>{`(${numberOfReviews})`}</Text>
        )}
      </View>
    </Pressable>
  );
};
export default Card;
