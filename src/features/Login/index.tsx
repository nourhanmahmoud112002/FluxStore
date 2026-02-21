import { Text, View } from 'react-native';
import { styles } from './styles';
import { useAppTranslation } from '../../translation';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SocialIcon from '../../components/SocialIcon';
import { AppImages } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate, Routes } from '../../navigation';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { googleLogin, login } from '../../redux/features';
import { MMKV_KEYS, storeData } from '../../common';
import { signInWithGoogle } from './utils';

const Login = () => {
  const { t } = useAppTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { loaders } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    const result = await dispatch(login({ emailAddress: email, password }));
    if (login.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        if (result.payload.data) {
          storeData(MMKV_KEYS.USER_KEY, result.payload.data);
        }
        setError(null);
        navigate(Routes.HOME);
      } else {
        if (result.payload.errorCode === 'VALIDATION_ERROR') {
          setEmailError(result.payload.validationErrors.emailAddress || null);
          setPasswordError(result.payload.validationErrors.password || null);
        } else {
          setEmailError(null);
          setPasswordError(null);
          setError(result.payload.message || t('Login.error'));
        }
      }
    }
  };
  const handleGoogleSignIn = async () => {
    const idToken = await signInWithGoogle();
    if (!idToken) {
      setError(t('Login.error'));
      return;
    }
    setError(null);
    const result = await dispatch(googleLogin({ idToken }));
    if (googleLogin.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        if (result.payload.data) {
          storeData(MMKV_KEYS.USER_KEY, result.payload.data);
        }
        setError(null);
        navigate(Routes.HOME);
      } else {
        setError(result.payload.message || t('Login.error'));
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('Login.title')}</Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder={t('Login.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>
        <View>
          <TextInput
            placeholder={t('Login.password')}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
      </View>
      <View style={styles.generalErrorContainer}>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <Text
        style={styles.forgetPasswordText}
        onPress={() => {
          navigate(Routes.FORGET_PASSWORD);
        }}
      >
        {t('Login.forgotPassword')}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          label={t('Login.button')}
          onPress={() => {
            handleLogin();
          }}
          disabled={loaders.login}
          size="small"
        />
        <Text style={styles.signUpWithText}>{t('Login.loginWith')}</Text>
        <View style={styles.socialIcons}>
          <SocialIcon source={AppImages.Apple} onPress={() => {}} />
          <SocialIcon
            source={AppImages.Google}
            onPress={() => {
              handleGoogleSignIn();
            }}
          />
          <SocialIcon source={AppImages.FaceBook} onPress={() => {}} />
        </View>
        <Text style={styles.noAccountText}>
          {t('Login.noAccount')}
          <Text
            style={styles.signUpText}
            onPress={() => {
              navigate(Routes.SIGNUP);
            }}
          >
            {t('Login.signUp')}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;
