import { Image, Pressable } from 'react-native';
import { goBack } from '../../navigation';
import { AppImages } from '../../assets/images';
import { styles } from './styles';

const BackIcon = () => {
  return (
    <Pressable
      onPress={() => {
        goBack();
      }}
      style={styles.container}
    >
      <Image source={AppImages.Back} />
    </Pressable>
  );
};
export default BackIcon;
