import { View, TextInput as BaseInput, Image, Pressable } from 'react-native';
import { ITextInputProps } from './types';
import { colors } from '../../common';
import { styles } from './styles';
import { useState } from 'react';
import { AppImages } from '../../assets/images';

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  startIcon,
  endIcon,
  styles: customStyles,
  onEndIconPress,
}: ITextInputProps) => {
  const [valueState, setValueState] = useState(value);
  const handleChangeText = (text: string) => {
    setValueState(text);
    onChangeText(text);
  };
  return (
    <View style={[styles.container, customStyles]}>
      {startIcon && <Image source={startIcon} style={styles.icon} />}
      <BaseInput
        placeholder={placeholder}
        value={valueState}
        onChangeText={handleChangeText}
        placeholderTextColor={colors.black}
        style={styles.textInput}
        secureTextEntry={endIcon === AppImages.VisibilityOff}
      />
      {endIcon && (
        <Pressable onPress={onEndIconPress}>
          <Image source={endIcon} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};
export default TextInput;
