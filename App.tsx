import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './src/components/Button';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: '#1a1a1a' }}>
      <Button
        label="Button"
        onPress={() => {}}
        variant="primary"
        size="small"
      />
      <Button
        label="Button2"
        onPress={() => {}}
        variant="secondary"
        size="medium"
      />
      <Button
        label="Button3"
        onPress={() => {}}
        variant="primary"
        size="large"
      />
    </SafeAreaView>
  );
};
export default App;
