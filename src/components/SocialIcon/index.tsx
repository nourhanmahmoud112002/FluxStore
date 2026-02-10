import { Image, Pressable } from 'react-native';
import { ISocialIconProps } from './types';
import { styles } from './styles';

const SocialIcon = ({ source, onPress }: ISocialIconProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={source} />
    </Pressable>
  );
};
export default SocialIcon;
