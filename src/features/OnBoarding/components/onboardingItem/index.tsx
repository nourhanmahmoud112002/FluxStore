import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './styles';
import { IOnBoardingItemProps } from './types';
import { useAppTranslation } from '../../../../translation';

const OnboardingItem = ({
  title,
  description,
  image,
}: IOnBoardingItemProps) => {
  const { width } = useWindowDimensions();
  const { t } = useAppTranslation();
  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{t(title)}</Text>
      <Text style={styles.subTitle}>{t(description)}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
    </View>
  );
};
export default OnboardingItem;
