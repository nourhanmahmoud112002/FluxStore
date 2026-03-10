import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = (hasOuterContainer: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: px(28),
      alignItems: 'center',
    },
    containerWithSpacing: {
      flexDirection: 'row',
      paddingTop: px(28),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerWithGap: {
      flexDirection: 'row',
      paddingTop: px(28),
      gap: px(20),
      alignItems: 'center',
    },
    title: {
      fontSize: px(20),
      fontWeight: '700',
      color: colors.black,
      textAlign: 'center',
    },
    icon: {
      width: hasOuterContainer ? px(12) : px(22),
      height: hasOuterContainer ? px(12) : px(22),
    },
    iconContainer: {
      ...(hasOuterContainer && {
        width: px(32),
        height: px(32),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: px(16),
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.84,
        elevation: 5,
      }),
    },
  });
