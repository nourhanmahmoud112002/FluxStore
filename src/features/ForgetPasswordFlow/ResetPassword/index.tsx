import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BackIcon from '../../../components/BackIcon';
import { useAppTranslation } from '../../../translation';
import { Text, View } from 'react-native';
import TextInput from '../../../components/TextInput';
import { useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Button from '../../../components/Button';
import Sheet from '../../../components/Sheet';
import { navigate, RootStackParamList, Routes } from '../../../navigation';
import { useRoute, RouteProp } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { resetPassword } from '../../../redux/features';

const ResetPassword = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ResetPassword'>>();
  const { email, resetPasswordToken } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useAppTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setError(t('Errors.confirmPasswordError'));
      setPasswordError('');
      setEmailError('');
      return;
    }
    if (!resetPasswordToken) {
      setError(t('Errors.failedResetPassword'));
      setPasswordError('');
      setEmailError('');
      return;
    }

    const result = await dispatch(
      resetPassword({
        emailAddress: email,
        newPassword: password,
        resetPasswordToken,
      }),
    );
    if (resetPassword.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        resetErrors();
        bottomSheetRef.current?.present();
      } else if (result.payload.errorCode === 'VALIDATION_ERROR') {
        const validationErrors = result.payload.validationErrors;
        setEmailError(validationErrors.emailAddress || '');
        setPasswordError(validationErrors.password || '');
        setError('');
      } else {
        setEmailError('');
        setPasswordError('');
        setError(result.payload.message || t('Errors.failedResetPassword'));
      }
    }
  };

  const resetErrors = () => {
    setError('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <BackIcon />
        <Text style={styles.title}>{t('ResetPassword.title')}</Text>
        <Text style={styles.subTitle}>{t('ResetPassword.subTitle')}</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={t('ResetPassword.newPassword')}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            endIcon={showPassword ? 'Visibility' : 'VisibilityOff'}
            onEndIconPress={() => {
              setShowPassword(!showPassword);
            }}
          />
          <TextInput
            placeholder={t('ResetPassword.confirmPassword')}
            value={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
            }}
            endIcon={showConfirmPassword ? 'Visibility' : 'VisibilityOff'}
            onEndIconPress={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
          />
        </View>
        <View style={styles.errorContainer}>
          {!!error && <Text style={styles.error}>{error}</Text>}
          {!!emailError && <Text style={styles.error}>{emailError}</Text>}
          {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label={t('ResetPassword.button')}
            onPress={handleResetPassword}
            size="small"
            // disabled={
            //   !password ||
            //   !confirmPassword ||
            //   !!passwordError ||
            //   !!emailError ||
            //   !!error
            // }
          />
        </View>
      </SafeAreaView>
      <Sheet
        bottomSheetRef={bottomSheetRef}
        title={t('PasswordChangeSuccess.title')}
        subTitle={t('PasswordChangeSuccess.subTitle')}
        buttonLabel={t('PasswordChangeSuccess.button')}
        onButtonPress={() => {
          navigate(Routes.BOTTOM_TABS);
        }}
        icon="Success"
      />
    </>
  );
};
export default ResetPassword;
