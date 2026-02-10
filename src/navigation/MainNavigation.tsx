import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Login from '../features/Login';
import OnBoarding from '../features/OnBoarding';
import SignUp from '../features/SignUp';
import Welcome from '../features/Welcome';


const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.WELCOME} component={Welcome} />
      <Stack.Screen name={Routes.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
