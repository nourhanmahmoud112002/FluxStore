import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import { Home } from '../features';

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
