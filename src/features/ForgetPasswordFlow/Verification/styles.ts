import { StyleSheet } from 'react-native';
import { colors, px } from '../../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: px(32),
    paddingTop: px(18),
    backgroundColor: colors.white,
  },
  title: {
    marginTop: px(34),
    marginBottom: px(18),
    fontSize: px(24),
    fontWeight: '700',
    color: colors.black,
    lineHeight: px(48),
  },
  subTitle: {
    marginBottom: px(54),
    fontSize: px(14),
    fontWeight: '400',
    color: colors.black,
    lineHeight: px(24),
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: px(40),
    height: px(40),
    borderRadius: px(20),
    backgroundColor: colors.white,
    borderWidth: px(1),
    borderColor: colors.gray,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  input: {
    textAlign: 'center',
    fontSize: px(20),
    padding: 0,
  },
  textInputContainer: {
    flexDirection: 'row',
    gap: px(12),
    marginBottom: px(47),
  },
  resendCodeIn: {
    fontSize: px(14),
    fontWeight: '400',
    color: colors.semiTransparentDarkBlue,
    lineHeight: px(24),
  },
  resendCode: {
    fontSize: px(14),
    fontWeight: '400',
    color: 'red',
    lineHeight: px(24),
  },
  errorText: {
    color: 'red',
    fontSize: px(12),
    fontWeight: '400',
    lineHeight: px(24),
  },
});
