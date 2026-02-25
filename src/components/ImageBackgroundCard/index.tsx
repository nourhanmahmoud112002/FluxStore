import { ImageBackground, Text } from 'react-native';
import { IImageBackgroundCardProps } from './types';
import { styles } from './styles';

const ImageBackgroundCard = ({
  imageUri,
  title,
  description,
  titleStyle,
  descriptionStyle,
}: IImageBackgroundCardProps) => {
  return (
    <ImageBackground source={imageUri} style={styles.container}>
      {title && <Text style={titleStyle}>{title}</Text>}
      {description && <Text style={descriptionStyle}>{description}</Text>}
    </ImageBackground>
  );
};

export default ImageBackgroundCard;
