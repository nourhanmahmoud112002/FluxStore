import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../../../components/BackIcon';
import { useAppTranslation } from '../../../translation';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { styles } from './styles';
import { navigate, Routes } from '../../../navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { forgetPassword } from '../../../redux/features';

const ForgetPassword = () => {
  const { t } = useAppTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const handleForgetPassword = async () => {
    if (!email) {
      setError(t('Errors.requiredEmailAddress'));
      return;
    }
    const result = await dispatch(forgetPassword({ emailAddress: email }));
    if (forgetPassword.fulfilled.match(result)) {
      if (result.payload.isSuccess) {
        setError(null);
        navigate(Routes.VERIFICATION, { email });
      } else {
        if (result.payload.errorCode === 'VALIDATION_ERROR') {
          setError(result.payload.validationErrors.emailAddress || null);
        } else {
          setError(result.payload.message || t('Errors.failedResetPassword'));
        }
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      <Text style={styles.title}>{t('ForgetPassword.title')}</Text>
      <Text style={styles.subTitle}>{t('ForgetPassword.subTitle')}</Text>
      <TextInput
        placeholder={t('ForgetPassword.email')}
        value={email}
        onChangeText={setEmail}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.button}>
        <Button
          label={t('ForgetPassword.button')}
          onPress={() => {
            handleForgetPassword();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ForgetPassword;
