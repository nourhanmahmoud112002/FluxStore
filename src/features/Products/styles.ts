import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: px(32),
    paddingTop: px(24),
  },
  innerContainer: {
    paddingTop: px(24),
    paddingBottom: px(36),
  },
  foundResultsText: {
    fontSize: px(20),
    fontWeight: '700',
    color: colors.deepBrown,
  },
});
