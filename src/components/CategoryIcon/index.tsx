import { Image, Pressable, Text, View } from 'react-native';
import { ICategoryIconProps } from './types';
import { styles } from './styles';

const CategoryIcon = ({
  icon,
  label,
  onPress,
  selected,
}: ICategoryIconProps) => {
  return (
    <Pressable onPress={onPress} style={styles({ selected }).container}>
      <View style={styles({ selected }).outerContainer}>
        <View style={styles({ selected }).innerContainer}>
          <Image
            source={icon}
            style={styles({ selected }).icon}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles({ selected }).label}>{label}</Text>
    </Pressable>
  );
};
export default CategoryIcon;
