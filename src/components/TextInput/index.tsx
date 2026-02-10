import { View, TextInput as BaseInput } from 'react-native';
import { ITextInputProps } from './types';
import { colors } from '../../common';
import { styles } from './styles';
import { useState } from 'react';

const TextInput = ({ placeholder, value, onChangeText }: ITextInputProps) => {
  const [valueState,setValueState]=useState(value);  
  const handleChangeText=(text:string)=>{
    setValueState(text);
    onChangeText(text);
  }
  return (
    <View>
      <BaseInput
        placeholder={placeholder}
        value={valueState}
        onChangeText={handleChangeText}
        placeholderTextColor={colors.black}
        
        style={styles.container}
      />
    </View>
  );
};
export default TextInput;
