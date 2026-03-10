import { StyleSheet } from 'react-native';
import { colors, px } from '../../common';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    width: px(141),
    height: px(186),
  },
  image: {
    width: px(141),
    height: px(186),
    borderRadius: px(10),
  },
  title: {
    fontWeight: '400',
    fontSize: px(12),
    lineHeight: px(12),
    letterSpacing: px(-0.01),
    color: colors.darkCharcoal,
    marginTop: px(14),
    marginBottom: px(4),
  },
  priceContainer: {
    marginBottom: px(4),
    flexDirection: 'row',
    gap: px(5),
    alignItems: 'center',
  },
  price: {
    fontWeight: '700',
    fontSize: px(16),
    color: colors.darkCharcoal,
  },
  previousPrice: {
    fontWeight: '300',
    fontSize: px(12),
    color: colors.GRAY_BORDER,
    letterSpacing: px(0.02),
    textDecorationLine: 'line-through',
  },
  reviewsNumber: {
    fontWeight: '300',
    fontSize: px(10),
    color: colors.darkCharcoal,
    letterSpacing: px(0.06),
  },
  reviewContainer: {
    flexDirection: 'row',
    gap: px(1),
    alignItems: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    top: px(10),
    right: px(8),
    zIndex: 1,
    width: px(27),
    height: px(27),
    borderRadius: px(13.5),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
