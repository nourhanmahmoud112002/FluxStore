import { View, TextInput as BaseInput, Pressable } from 'react-native';
import { ITextInputProps } from './types';
import { colors, px } from '../../common';
import { styles } from './styles';
import { forwardRef } from 'react';
import Icon from '../Icon';

const TextInput = forwardRef<BaseInput, ITextInputProps>(
  (
    {
      placeholder,
      value,
      onChangeText,
      startIcon,
      endIcon,
      styles: customStyles,
      inputStyle,
      onEndIconPress,
      maxLength,
      keyboardType,
      onKeyPress,
    },
    ref,
  ) => {
    const handleChangeText = (text: string) => {
      onChangeText(text);
    };
    return (
      <View style={[styles.container, customStyles]}>
        {startIcon && <Icon name={startIcon} width={px(22)} height={px(22)} />}
        <BaseInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={colors.black}
          style={[styles.textInput, inputStyle]}
          secureTextEntry={endIcon === 'VisibilityOff'}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onKeyPress={onKeyPress}
        />
        {endIcon && (
          <Pressable onPress={onEndIconPress}>
            <Icon name={endIcon} width={px(22)} height={px(22)} />
          </Pressable>
        )}
      </View>
    );
  },
);
export default TextInput;
