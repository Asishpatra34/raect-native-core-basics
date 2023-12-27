import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';

const Stack = createNativeStackNavigator();
const MyStackNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: () => <Button title="left" />,
              headerRight: () => <Header />,
              title: 'User Login',
              headerStyle: {
                backgroundColor: '#41e8b6',
              },
              headerTitleStyle: {
                fontSize: 20,
                color: 'white',
              },
            }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Home = (props: any) => {
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Text>HomeScreen: {name}</Text>
      <Text>HomeScreen: {age}</Text>
    </View>
  );
};

const Login = (props: any) => {
  const [name, setName] = useState('');
  const age = 20;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: '#41e8b6',
          borderWidth: 2,
          margin: 20,
          width: 200,
          height: 40,
        }}
        placeholder="Enter the name"
        onChangeText={text => setName(text)}
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};

const Header = () => {
  return <TextInput placeholder="Name" />;
};

export default MyStackNavigation;
