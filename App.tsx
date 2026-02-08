import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import './src/translation';
import { enableScreens } from 'react-native-screens';
import { navigationRef } from './src/navigation';
enableScreens();
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
  );
};
export default App;
