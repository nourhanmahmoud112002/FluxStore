import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/components/Button';
import './src/translation';
import { useAppTranslation } from './src/translation';
const App = () => {
  const {t}=useAppTranslation();
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: '#1a1a1a' }}>
      <Button
        label={t('onboarding.getStarted')}
        onPress={() => {}}
        variant="primary"
        size="small"
      />
      <Button
        label={t('onboarding.getStarted')}
        onPress={() => {}}
        variant="secondary"
        size="medium"
      />
      <Button
        label={t('onboarding.getStarted')}
        onPress={() => {}}
        variant="primary"
        size="large"
      />
    </SafeAreaView>
  );
};
export default App;
