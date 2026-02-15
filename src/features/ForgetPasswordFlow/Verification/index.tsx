import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BackIcon from '../../../components/BackIcon';
import { Text, View } from 'react-native';
import { useAppTranslation } from '../../../translation';
import TextInput from '../../../components/TextInput';
import { useEffect, useState } from 'react';
import { navigate, Routes } from '../../../navigation';

const Verification = () => {
  const { t } = useAppTranslation();
  const [timer, setTimer] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(true);
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
  return (
    <SafeAreaView style={styles.container}>
      <BackIcon />
      <Text style={styles.title}>{t('VerificationCode.title')}</Text>
      <Text style={styles.subTitle}>{t('VerificationCode.subTitle')}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder=""
          value=""
          onChangeText={() => {}}
          styles={styles.textInput}
        />
        <TextInput
          placeholder=""
          value=""
          onChangeText={() => {}}
          styles={styles.textInput}
        />
        <TextInput
          placeholder=""
          value=""
          onChangeText={() => {}}
          styles={styles.textInput}
        />
        <TextInput
          placeholder=""
          value=""
          onChangeText={() => {}}
          styles={styles.textInput}
        />
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
