import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: px(20),
  },
  dot: {
    height: px(6),
    width: px(6),
    borderRadius: px(4),
    borderWidth: px(2),
    borderColor: colors.white,
    marginHorizontal: px(8),
  },
  activeDot:{
    backgroundColor: colors.white,
  },
  inActiveDot:{
    backgroundColor: 'transparent',
  }
});
