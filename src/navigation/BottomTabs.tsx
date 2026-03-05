import { Routes } from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';
import { AppImages } from '../assets/images';
import { Cart, Profile, Search } from '../features';
import { colors, px } from '../common';
import HomeNavigation from './HomeNavigation';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';

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

const defaultTabBarStyle = {
  borderRadius: px(16),
  height: px(80),
  paddingHorizontal: px(40),
  paddingBottom: px(18),
  paddingTop: px(18),
};

const getTabBarStyle = ({ route }: { route: RouteProp<ParamListBase> }) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? Routes.HOME;
  return routeName === Routes.HOME
    ? defaultTabBarStyle
    : { display: 'none' as const };
};  

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarShowLabel: false,
        tabBarStyle: defaultTabBarStyle,
      }}
    >
      <Tab.Screen
        name={Routes.HOME_NAVIGATION}
        component={HomeNavigation}
        options={({ route }) => ({
          tabBarIcon: createTabIcon(AppImages.Home),
          tabBarStyle: getTabBarStyle({ route }),
        })}
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
