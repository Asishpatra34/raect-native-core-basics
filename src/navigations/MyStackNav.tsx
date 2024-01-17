import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReduxText from '../screens/ReduxTest';
import ReduxTestUserList from '../screens/ReduxTestUserList';



const Stack = createNativeStackNavigator();
const MyStackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page1"
          component={ReduxText}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Page2"
          component={ReduxTestUserList}
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
