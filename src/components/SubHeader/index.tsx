import { View, Text } from 'react-native';
import { styles } from './styles';
import { ISubHeaderProps } from './types';

const SubHeader = ({ title, subTitle ,onPressSubTitle}: ISubHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle} onPress={onPressSubTitle}>{subTitle}</Text>
    </View>
  );
};
export default SubHeader;
