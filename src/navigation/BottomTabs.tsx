import { Routes } from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart, Profile, Search } from '../features';
import { colors, px } from '../common';
import HomeNavigation from './HomeNavigation';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  ParamListBase,
} from '@react-navigation/native';
import { AppIcons } from '../assets/svgs';
import { Icon } from '../components';

const Tab = createBottomTabNavigator();

const createTabIcon =
  (source: keyof typeof AppIcons) =>
  ({ focused, size }: { focused: boolean; size: number }) =>
    (
      <Icon
        name={source}
        width={size}
        height={size}
        color={focused ? 'black' : 'inactiveTab'}
      />
    );

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
          tabBarIcon: createTabIcon('Home'),
          tabBarStyle: getTabBarStyle({ route }),
        })}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: createTabIcon('Search'),
        }}
      />
      <Tab.Screen
        name={Routes.CART}
        component={Cart}
        options={{
          tabBarIcon: createTabIcon('Cart'),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: createTabIcon('Profile'),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
