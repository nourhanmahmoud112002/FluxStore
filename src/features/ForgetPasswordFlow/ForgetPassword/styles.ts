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
  button:{
    marginTop:px(54),
    alignItems:'center',
  }
});
