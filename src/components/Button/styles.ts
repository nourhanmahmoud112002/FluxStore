import { StyleSheet } from 'react-native';
import { ButtonProps } from './types';
import { colors, px } from '../../common';

export const styles = ({
  variant,
  size,
  disabled,
}: Pick<ButtonProps, 'variant' | 'size' | 'disabled'>) =>
  StyleSheet.create({
    container: {
      backgroundColor: disabled
        ? colors.mediumGray
        : variant === 'primary'
        ? colors.primaryButton
        : colors.secondaryButton,
      paddingHorizontal:
        size === 'small' ? px(41) : size === 'medium' ? px(53) : px(108),
      paddingVertical: px(15),
      borderRadius: px(30),
      borderWidth: variant === 'primary' ? 0 : px(1.18),
      borderColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: px(16),
      color: colors.white,
      fontWeight: '700',
    },
  });
