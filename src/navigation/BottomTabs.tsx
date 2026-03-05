import { Routes } from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';
import { AppImages } from '../assets/images';
import { Cart, Home, Profile, Search } from '../features';
import { colors, px } from '../common';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  size,
  color,
  source,
}: {
  size: number;
  color: string;
  source: ImageSourcePropType;
}) => (
  <Image
    source={source}
    style={{ width: size, height: size, tintColor: color }}
    resizeMode="contain"
  />
);

const createTabIcon =
  (source: ImageSourcePropType) =>
  ({ size, color }: { size: number; color: string }) =>
    <TabIcon size={size} color={color} source={source} />;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: px(16),
          height: px(80),
          paddingHorizontal: px(40),
          paddingBottom: px(18),
          paddingTop: px(18),
        },
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarIcon: createTabIcon(AppImages.Home),
        }}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: createTabIcon(AppImages.Search),
        }}
      />
      <Tab.Screen
        name={Routes.CART}
        component={Cart}
        options={{
          tabBarIcon: createTabIcon(AppImages.Cart),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: createTabIcon(AppImages.Profile),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
