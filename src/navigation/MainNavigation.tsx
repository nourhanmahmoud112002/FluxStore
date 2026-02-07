import { createStackNavigator } from '@react-navigation/stack';
import Home from '../features/Home';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default MainNavigation;
