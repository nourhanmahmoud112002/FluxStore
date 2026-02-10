import { Text, View } from 'react-native';
import { styles } from './styles';
import { useAppTranslation } from '../../translation';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SocialIcon from '../../components/SocialIcon';
import { AppImages } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate, Routes } from '../../navigation';

const Login = () => {
  const { t } = useAppTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('Login.title')}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={t('Login.email')}
          value={''}
          onChangeText={() => {}}
        />
        <TextInput
          placeholder={t('Login.password')}
          value={''}
          onChangeText={() => {}}
        />
      </View>
      <Text style={styles.forgetPasswordText}>{t('Login.forgotPassword')}</Text>
      <View style={styles.buttonContainer}>
        <Button label={t('Login.button')} onPress={() => {
            navigate(Routes.HOME);
        }} size="small" />
        <Text style={styles.signUpWithText}>{t('Login.loginWith')}</Text>
        <View style={styles.socialIcons}>
          <SocialIcon source={AppImages.Apple} onPress={() => {}} />
          <SocialIcon source={AppImages.Google} onPress={() => {}} />
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
