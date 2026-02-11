import { View, TextInput as BaseInput, Image } from 'react-native';
import { ITextInputProps } from './types';
import { colors } from '../../common';
import { styles } from './styles';
import { useState } from 'react';

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  startIcon,
  endIcon,
  styles: customStyles,
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
      />
      {endIcon && <Image source={endIcon} style={styles.icon} />}
    </View>
  );
};
export default TextInput;
