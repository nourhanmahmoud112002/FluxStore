import { ImageBackground, Text, View } from 'react-native';
import { AppImages } from '../../assets/images';
import Button from '../../components/Button';
import { styles } from './styles';
import { useAppTranslation } from '../../translation';
import { navigate, Routes } from '../../navigation';

const Welcome = () => {
  const { t } = useAppTranslation();
  return (
    <ImageBackground source={AppImages.Welcome} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{t('Welcome.title')}</Text>
        <Text style={styles.subTitle}>{t('Welcome.subTitle')}</Text>
        <Button
          onPress={() => {            
            navigate(Routes.ONBOARDING);
          }}
          label={t('Welcome.button')}
          variant="secondary"
          size="medium"
        />
      </View>
    </ImageBackground>
  );
};
export default Welcome;
