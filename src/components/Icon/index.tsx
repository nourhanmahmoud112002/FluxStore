import React from 'react';
import { IIconProps } from './types';
import { AppIcons } from '../../assets/svgs';
import { colors } from '../../common';
import { isArabic } from '../../translation';

const Icon = ({
  name,
  size = 24,
  width,
  height,
  fill = 'none',
  style = {},
  color,
  rtlFlipEnabled = false,
  ...restProps
}: IIconProps) => {
  const SvgComponent = AppIcons[name];
  const iconColor = color ? colors[color] : colors.black;
  const finalWidth = width || size;
  const finalHeight = height || size;

  return (
    <SvgComponent
      width={finalWidth}
      height={finalHeight}
      fill={fill === 'none' ? 'none' : colors[fill]}
      color={iconColor}
      style={[
        isArabic && rtlFlipEnabled && { transform: [{ scaleX: -1 }] },
        style,
      ]}
      {...restProps}
    />
  );
};

export default Icon;
