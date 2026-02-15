import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BackIcon from '../../../components/BackIcon';
import { useAppTranslation } from '../../../translation';
import { Text, View } from 'react-native';
import TextInput from '../../../components/TextInput';
import { useState } from 'react';
import { AppImages } from '../../../assets/images';
import Button from '../../../components/Button';

const ResetPassword = () => {
  const { t } = useAppTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
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
          endIcon={
            showPassword ? AppImages.Visibility : AppImages.VisibilityOff
          }
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
          endIcon={
            showConfirmPassword ? AppImages.Visibility : AppImages.VisibilityOff
          }
          onEndIconPress={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label={t('ResetPassword.button')}
          onPress={() => {}}
          size="small"
          disabled={!password || !confirmPassword || password !== confirmPassword}
        />
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;
