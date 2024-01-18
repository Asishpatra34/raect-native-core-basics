import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyAsyncStorage = () => {
  const setData = async () => {
    let a = await AsyncStorage.setItem('name', 'Asish');
    console.warn(a);
  };
  const getData = async () => {
    let b = await AsyncStorage.getItem('name');
    console.warn(b);
  };

  const removeData = async () => {
    let b = await AsyncStorage.removeItem('name');
    console.warn(b);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', fontSize: 20}}>Async Storage</Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};

export default MyAsyncStorage;
