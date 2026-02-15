import { View, TextInput as BaseInput, Image, Pressable } from 'react-native';
import { ITextInputProps } from './types';
import { colors } from '../../common';
import { styles } from './styles';
import { forwardRef } from 'react';
import { AppImages } from '../../assets/images';

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
        {startIcon && <Image source={startIcon} style={styles.icon} />}
        <BaseInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={colors.black}
          style={[styles.textInput, inputStyle]}
          secureTextEntry={endIcon === AppImages.VisibilityOff}
          maxLength={maxLength}
          keyboardType={keyboardType}
          onKeyPress={onKeyPress}
        />
        {endIcon && (
          <Pressable onPress={onEndIconPress}>
            <Image source={endIcon} style={styles.icon} />
          </Pressable>
        )}
      </View>
    );
  },
);
export default TextInput;
