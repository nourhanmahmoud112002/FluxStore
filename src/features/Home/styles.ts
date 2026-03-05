import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: px(32),
  },
  backgroundOneTitle: {
    fontSize: px(22),
    fontWeight: '700',
    color: colors.white,
    textAlign: 'right',
    marginTop: px(20),
    marginRight: px(16),
    lineHeight: px(32),
  },
  backgroundOneContainer: {
    marginTop: px(30),
    marginBottom: px(20),
  },
  tabsContainer:{
    paddingTop:px(36),
  },
  subHeaderContainer: {
    marginBottom: px(20),
    marginTop: px(35),
  },
  banner: {
    marginBottom: px(10),
    marginTop: px(35),
    gap: px(20),
  },
});
