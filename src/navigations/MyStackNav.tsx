import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReduxText from '../screens/ReduxTest';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const MyStackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductScreen"
          component={ReduxText}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerBackVisible: true,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStackNav;
