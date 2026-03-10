import { Pressable } from 'react-native';
import { ISocialIconProps } from './types';
import { styles } from './styles';
import Icon from '../Icon';
import { px } from '../../common';

const SocialIcon = ({ source, onPress }: ISocialIconProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name={source} width={px(22)} height={px(22)} />
    </Pressable>
  );
};
export default SocialIcon;
