import { View } from 'react-native';
import { styles } from './styles';
import { IPaginatorProps } from './types';

const Paginator = ({ data, currentIndex }: IPaginatorProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <View
            style={[
              styles.dot,
              isActive ? styles.activeDot : styles.inActiveDot,
            ]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
