import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: px(28),
    paddingBottom: px(36),
    justifyContent: 'space-between',
  },
  title: {
    fontSize:px(20),
    fontWeight:'700',
    color:colors.black,
  },
  icon: {
    width: px(26),
    height: px(26),
  },
});
