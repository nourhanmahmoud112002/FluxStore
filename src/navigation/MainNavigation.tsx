import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Login from '../features/Login';
import OnBoarding from '../features/OnBoarding';
import SignUp from '../features/SignUp';
import Welcome from '../features/Welcome';
import ForgetPassword from '../features/ForgetPasswordFlow/ForgetPassword';
import Verification from '../features/ForgetPasswordFlow/Verification';
import ResetPassword from '../features/ForgetPasswordFlow/ResetPassword';
import Home from '../features/Home';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.WELCOME} component={Welcome} />
      <Stack.Screen name={Routes.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.FORGET_PASSWORD} component={ForgetPassword} />
      <Stack.Screen name={Routes.VERIFICATION} component={Verification} />
      <Stack.Screen name={Routes.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
