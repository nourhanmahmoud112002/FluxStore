import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import AuthNavigation from './AuthNavigation';
import BottomTabs from './BottomTabs';
import { getObjectData, MMKV_KEYS } from '../common';
import { Products } from '../features';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  const user = getObjectData(MMKV_KEYS.USER_KEY);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user && <Stack.Screen name={Routes.AUTH} component={AuthNavigation} />}
      <Stack.Screen name={Routes.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen name={Routes.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
