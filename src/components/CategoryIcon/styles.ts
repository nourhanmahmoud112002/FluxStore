import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = ({ selected }: { selected: boolean }) =>
  StyleSheet.create({
    container: {
      gap: px(6),
    },
    outerContainer: {
      width: px(50),
      height: px(50),
      borderRadius: px(25),
      borderWidth: px(1),
      borderColor: selected ? colors.brown : 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      width: px(44),
      height: px(44),
      borderRadius: px(22),
      backgroundColor: selected ? colors.brown : colors.gray,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: px(22),
      height: px(22),
    },
    label: {
      fontSize: px(10),
      fontWeight: '300',
      lineHeight: px(12),
      letterSpacing: px(0.06),
      color: selected ? colors.brown : colors.silverGray,
      textAlign: 'center',
    },
  });
