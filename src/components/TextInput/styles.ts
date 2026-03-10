import { StyleSheet } from "react-native";
import { colors, px } from "../../common";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: px(20),
    borderBottomWidth: px(1),
    borderBottomColor: colors.gray,
    paddingHorizontal: px(7),
    paddingVertical: px(18),
  },
  textInput: {
    flex: 1,
  },
});