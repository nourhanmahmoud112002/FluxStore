import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import './src/translation';
import { enableScreens } from 'react-native-screens';
import { navigationRef } from './src/navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

enableScreens();
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <NavigationContainer ref={navigationRef}>
            <MainNavigation />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
