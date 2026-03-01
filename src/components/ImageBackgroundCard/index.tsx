import { ImageBackground } from 'react-native';
import { IImageBackgroundCardProps } from './types';
import { styles } from './styles';

const ImageBackgroundCard = ({ imageUri }: IImageBackgroundCardProps) => {
  return (
    <ImageBackground
      source={imageUri}
      style={styles.container}
      resizeMode="contain"
    />
  );
};

export default ImageBackgroundCard;
