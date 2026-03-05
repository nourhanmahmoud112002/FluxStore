import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import { Home, Products } from '../features';

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
