import { Text, View } from 'react-native';
import { styles } from './styles';
import { useAppTranslation } from '../../translation';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SocialIcon from '../../components/SocialIcon';
import { AppImages } from '../../assets/images';

const SignUp = () => {
  const { t } = useAppTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('SignUp.title')}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={t('SignUp.name')}
          value={''}
          onChangeText={() => {}}
        />
        <TextInput
          placeholder={t('SignUp.email')}
          value={''}
          onChangeText={() => {}}
        />
        <TextInput
          placeholder={t('SignUp.password')}
          value={''}
          onChangeText={() => {}}
        />
        <TextInput
          placeholder={t('SignUp.confirmPassword')}
          value={''}
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button label={t('SignUp.button')} onPress={() => {}} size="small" />
        <Text style={styles.signUpWithText}>{t('SignUp.signUpWith')}</Text>
        <View style={styles.socialIcons}>
          <SocialIcon source={AppImages.Apple} onPress={() => {}} />
          <SocialIcon source={AppImages.Google} onPress={() => {}} />
          <SocialIcon source={AppImages.FaceBook} onPress={() => {}} />
        </View>
        <Text style={styles.haveAccountText}>
          {t('SignUp.haveAccount')}
          <Text style={styles.loginText}>{t('SignUp.login')}</Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;
