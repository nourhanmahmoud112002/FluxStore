import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BackIcon from '../../../components/BackIcon';
import { Text, View, TextInput as RNTextInput } from 'react-native';
import { useAppTranslation } from '../../../translation';
import TextInput from '../../../components/TextInput';
import { useEffect, useRef, useState } from 'react';
import { navigate, Routes } from '../../../navigation';

const Verification = () => {
  const { t } = useAppTranslation();
  const [timer, setTimer] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];

  useEffect(() => {
    if (timer === 0) {
      setIsTimerActive(false);
      navigate(Routes.RESET_PASSWORD);
    }
    const interval = setTimeout(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      <Text style={styles.title}>{t('VerificationCode.title')}</Text>
      <Text style={styles.subTitle}>{t('VerificationCode.subTitle')}</Text>
      <View style={styles.textInputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            placeholder=""
            value={digit}
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            styles={styles.textInput}
            inputStyle={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      {isTimerActive ? (
        <Text style={styles.resendCodeIn}>
          {t('VerificationCode.resendCodeIn')}
          {` 00:${timer}`}
        </Text>
      ) : (
        <Text style={styles.resendCode}>
          {t('VerificationCode.resendCode')}
        </Text>
      )}
    </SafeAreaView>
  );
};
export default Verification;
