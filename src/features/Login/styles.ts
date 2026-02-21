import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: px(58),
    paddingHorizontal: px(32),
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: px(24),
    fontWeight: '700',
    lineHeight: px(48),
    color: colors.black,
  },
  inputContainer: {
    gap: px(20),
    marginTop: px(20),
    marginBottom: px(5),
  },
  errorText: {
    color: 'red',
    fontSize: px(12),
    fontWeight: '400',
    lineHeight: px(24),
  },
  generalErrorContainer: {
    marginBottom: px(28),
  },
  forgetPasswordText: {
    marginBottom: px(25),
    fontSize: px(12),
    fontWeight: '400',
    lineHeight: px(24),
    color: colors.black,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  signUpWithText: {
    fontSize: px(12),
    fontWeight: '400',
    lineHeight: px(24),
    letterSpacing: px(2),
    color: colors.black,
    marginVertical: px(28),
  },
  socialIcons: {
    flexDirection: 'row',
    gap: px(20),
    marginBottom: px(40),
  },
  noAccountText: {
    fontSize: px(14),
    fontWeight: '400',
    lineHeight: px(20),
    color: colors.black,
  },
  signUpText: {
    textDecorationLine: 'underline',
  },
});
