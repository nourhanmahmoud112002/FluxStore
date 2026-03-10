import { Pressable, Text, View } from 'react-native';
import { ICategoryIconProps } from './types';
import { styles } from './styles';
import Icon from '../Icon';

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
          <Icon
            name={icon}
            width={styles({ selected }).icon.width}
            height={styles({ selected }).icon.height}
          />
        </View>
      </View>
      <Text style={styles({ selected }).label}>{label}</Text>
    </Pressable>
  );
};
export default CategoryIcon;
