import { px } from './../../common/utils/normalize';
import { StyleSheet } from 'react-native';
import { colors } from '../../common';

export const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    paddingTop: px(27),
    paddingHorizontal: px(30),
    paddingBottom: px(40),
    backgroundColor: colors.white,
  },
  innerContainer:{
    alignItems: 'center',
  },
  iconContainer: {
    width: px(100),
    height: px(100),
    borderRadius: px(50),
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: px(20),
  },
  title: {
    fontSize: px(17),
    fontWeight: '500',
    lineHeight: px(22),
    color: colors.darkBrown,
    letterSpacing: px(-0.41),
    marginBottom: px(15),
  },
  subTitle: {
    fontSize: px(12),
    fontWeight: '500',
    color: colors.darkBrown,
    letterSpacing: px(-0.01),
    marginBottom: px(20),
  },
});
