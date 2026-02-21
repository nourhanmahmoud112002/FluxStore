import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useAppTranslation } from '../../translation';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SocialIcon from '../../components/SocialIcon';
import { AppImages } from '../../assets/images';
import { navigate, Routes } from '../../navigation';
import { useState } from 'react';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/features';
import { MMKV_KEYS, storeData } from '../../common';

const SignUp = () => {
  const { t } = useAppTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { user, loaders } = useSelector((state: RootState) => state.auth);
  console.log('user in register', user);

  const resetErrors = () => {
    setError('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(t('SignUp.confirmPasswordError'));
      return;
    }
    resetErrors();
    const result = await dispatch(
      register({ name, emailAddress: email, password }),
    );
    if (register.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        resetErrors();
        if (result.payload.data) {
          storeData(MMKV_KEYS.USER_KEY, result.payload.data);
        }
        navigate(Routes.HOME);
      } else {
        if (result.payload.errorCode === 'VALIDATION_ERROR') {
          const validationErrors = result.payload.validationErrors;
          setNameError(validationErrors?.name || '');
          setEmailError(validationErrors?.emailAddress || '');
          setPasswordError(validationErrors?.password || '');
        } else {
          setError(result.payload.message || t('SignUp.error'));
        }
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('SignUp.title')}</Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder={t('SignUp.name')}
            value={name}
            onChangeText={setName}
          />
          {nameError && <Text style={styles.errorText}>{nameError}</Text>}
        </View>

        <View>
          <TextInput
            placeholder={t('SignUp.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>
        <View>
          <TextInput
            placeholder={t('SignUp.password')}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
        <View>
          <TextInput
            placeholder={t('SignUp.confirmPassword')}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {confirmPasswordError && (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          )}
        </View>
      </View>
      <View style={styles.generalErrorContainer}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={t('SignUp.button')}
          onPress={() => {
            handleSignUp();
          }}
          disabled={loaders.register}
          size="small"
        />
        <Text style={styles.signUpWithText}>{t('SignUp.signUpWith')}</Text>
        <View style={styles.socialIcons}>
          <SocialIcon source={AppImages.Apple} onPress={() => {}} />
          <SocialIcon source={AppImages.Google} onPress={() => {}} />
          <SocialIcon source={AppImages.FaceBook} onPress={() => {}} />
        </View>
        <Text style={styles.haveAccountText}>
          {t('SignUp.haveAccount')}
          <Text
            style={styles.loginText}
            onPress={() => {
              navigate(Routes.LOGIN);
            }}
          >
            {t('SignUp.login')}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
