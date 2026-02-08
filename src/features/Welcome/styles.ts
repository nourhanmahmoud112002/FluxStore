import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.semiTransparentBlack,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: px(24),
    paddingBottom: px(100),
  },
  title: {
    fontSize: px(25),
    color: colors.white,
    fontWeight: '700',
    marginBottom: px(13),
  },
  subTitle: {
    fontSize: px(16),
    color: colors.white,
    fontWeight: '700',
    marginBottom: px(60),
  },
});
