import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BackIcon from '../../../components/BackIcon';
import { Text, View, TextInput as RNTextInput } from 'react-native';
import { useAppTranslation } from '../../../translation';
import TextInput from '../../../components/TextInput';
import { useEffect, useRef, useState } from 'react';
import { navigate, Routes } from '../../../navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { verifyOtp, forgetPassword } from '../../../redux/features';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/Routes';

const Verification = () => {
  const { t } = useAppTranslation();
  const route = useRoute<RouteProp<RootStackParamList, 'Verification'>>();
  const { email } = route.params;
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];
  const [emailError, setEmailError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const resetErrors = () => {
    setError('');
    setEmailError('');
    setOtpError('');
  };

  const handleVerifyOtp = async (otpCode: string) => {
    const result = await dispatch(
      verifyOtp({ emailAddress: email, otp: otpCode }),
    );
    if (verifyOtp.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        resetErrors();
        navigate(Routes.RESET_PASSWORD, {
          email,
          resetPasswordToken: result.payload.data?.resetPasswordToken,
        });
      } else {
        if (result.payload.errorCode === 'VALIDATION_ERROR') {
          const validationErrors = result.payload.validationErrors;
          setEmailError(validationErrors.emailAddress || '');
          setOtpError(validationErrors.otp || '');
          setError('');
        } else {
          setEmailError('');
          setOtpError('');
          setError(result.payload.message || t('Errors.failedResetPassword'));
        }
      }
    }
  };

  const handleResendCode = () => {
    dispatch(forgetPassword({ emailAddress: email }));
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setIsTimerActive(true);
    resetErrors();
  };

  useEffect(() => {
    if (timer === 0) {
      setIsTimerActive(false);
      return;
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

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }

    // Auto-verify when all 6 digits are entered
    if (value && index === 5) {
      const completeOtp = newOtp.join('');
      if (completeOtp.length === 6) {
        handleVerifyOtp(completeOtp);
      }
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
        {otp.map((digit, index) => {
          return (
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
          );
        })}
      </View>
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      {otpError && <Text style={styles.errorText}>{otpError}</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {isTimerActive ? (
        <Text style={styles.resendCodeIn}>
          {t('VerificationCode.resendCodeIn')}
          {` 00:${timer}`}
        </Text>
      ) : (
        <Text style={styles.resendCode} onPress={handleResendCode}>
          {t('VerificationCode.resendCode')}
        </Text>
      )}
    </SafeAreaView>
  );
};
export default Verification;
