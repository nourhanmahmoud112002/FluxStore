import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: px(32),
    paddingTop: px(24),
  },
  subHeaderContainer: {
    marginTop: px(80),
    marginBottom: px(30),
  },
});
