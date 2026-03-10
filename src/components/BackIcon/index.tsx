import { Pressable } from 'react-native';
import { goBack } from '../../navigation';
import { styles } from './styles';
import Icon from '../Icon';
import { px } from '../../common';

const BackIcon = () => {
  return (
    <Pressable
      onPress={() => {
        goBack();
      }}
      style={styles.container}
    >
      <Icon name="Back" width={px(12)} height={px(12)} />
    </Pressable>
  );
};
export default BackIcon;
