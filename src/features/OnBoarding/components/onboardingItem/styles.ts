import { StyleSheet } from "react-native";
import { colors, px } from "../../../../common";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: px(20),
    fontWeight: '700',
    color: colors.black,
    letterSpacing: px(0.36),
    marginTop: px(55),
  },
  subTitle: {
    fontSize: px(14),
    fontWeight: '400',
    color: colors.black,
    marginTop: px(17),
  },
  image: {
    width: px(217),
    height: px(349),
    overflow: 'hidden',
  },
  imageContainer: {
    marginTop: px(30),
    alignItems: 'center',
    justifyContent: 'center',
    width: px(261),
    height: px(369),
    backgroundColor:colors.lightGray,
    borderRadius: px(10),
  },
});