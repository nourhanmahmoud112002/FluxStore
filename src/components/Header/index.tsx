import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { IHeaderProps } from './types';
import Icon from '../Icon';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  hasOuterContainer = false,
}: IHeaderProps) => {
  const componentStyles = styles(hasOuterContainer);
  const hasMultipleItems = leftIcon && rightIcon;
  const hasLeftIconOnly = leftIcon && !rightIcon;

  let containerStyle;
  if (hasMultipleItems) {
    containerStyle = componentStyles.containerWithSpacing;
  } else if (hasLeftIconOnly) {
    containerStyle = componentStyles.containerWithGap;
  } else {
    containerStyle = componentStyles.container;
  }

  return (
    <View style={containerStyle}>
      {leftIcon && (
        <Pressable
          onPress={onLeftIconPress}
          style={componentStyles.iconContainer}
        >
          <Icon
            name={leftIcon}
            width={componentStyles.icon.width}
            height={componentStyles.icon.height}
          />
        </Pressable>
      )}
      <Text style={componentStyles.title}>{title}</Text>
      {rightIcon && (
        <Pressable
          onPress={onRightIconPress}
          style={componentStyles.iconContainer}
        >
          <Icon
            name={rightIcon}
            width={componentStyles.icon.width}
            height={componentStyles.icon.height}
          />
        </Pressable>
      )}
    </View>
  );
};
export default Header;
