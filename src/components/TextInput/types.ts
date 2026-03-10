import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputKeyPressEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { AppIcons } from '../../assets/svgs';

export interface ITextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  startIcon?: keyof typeof AppIcons;
  endIcon?: keyof typeof AppIcons;
  styles?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onEndIconPress?: () => void;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}
