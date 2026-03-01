import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: px(20),
    fontWeight: '700',
    color: colors.black,
  },
  subTitle: {
    fontSize: px(13),
    fontWeight: '400',
    lineHeight: px(20),
    letterSpacing: px(-0.01),
    color: colors.warmGray,
  },
});
