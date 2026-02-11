import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../../../components/BackIcon';
import { useAppTranslation } from '../../../translation';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { styles } from './styles';
import { navigate, Routes } from '../../../navigation';

const ForgetPassword = () => {
  const { t } = useAppTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      <Text style={styles.title}>{t('ForgetPassword.title')}</Text>
      <Text style={styles.subTitle}>{t('ForgetPassword.subTitle')}</Text>
      <TextInput
        placeholder={t('ForgetPassword.email')}
        value=""
        onChangeText={() => {}}
      />
      <View style={styles.button}>
        <Button
          label={t('ForgetPassword.button')}
          onPress={() => {
            navigate(Routes.VERIFICATION);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ForgetPassword;
