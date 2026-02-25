import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { IHeaderProps } from './types';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
}: IHeaderProps) => {
  return <View style={styles.container}>
    {leftIcon && (
      <Pressable onPress={onLeftIconPress}>
        <Image source={leftIcon} style={styles.icon} />
      </Pressable>
    )}
    <Text style={styles.title}>{title}</Text>
    {rightIcon && (
      <Pressable onPress={onRightIconPress}>
        <Image source={rightIcon} style={styles.icon} />
      </Pressable>
    )}
  </View>;
};
export default Header;
