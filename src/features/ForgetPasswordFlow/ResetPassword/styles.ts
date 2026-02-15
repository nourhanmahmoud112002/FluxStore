import { StyleSheet } from 'react-native';
import { colors, px } from '../../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: px(18),
    paddingHorizontal: px(32),
  },
  title: {
    fontSize: px(24),
    fontWeight: '700',
    lineHeight: px(48),
    letterSpacing: px(0.03),
    color: colors.black,
    marginTop: px(38),
  },
  subTitle: {
    fontSize: px(14),
    fontWeight: '400',
    lineHeight: px(24),
    color: colors.black,
    marginTop: px(8),
    marginBottom: px(58),
  },
  textInputContainer: {
    gap: px(20),
    marginBottom: px(107),
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
