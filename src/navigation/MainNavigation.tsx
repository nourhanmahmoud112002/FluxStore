import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Welcome from '../features/Welcome';
import OnBoarding from '../features/OnBoarding';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.WELCOME} component={Welcome} />
      <Stack.Screen name={Routes.ONBOARDING} component={OnBoarding} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
