import {useEffect} from 'react';
import {Text, View} from 'react-native';

const MyApicall = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await fetch('https://fakestoreapi.com/products/1');
    console.warn(result);
  };
  return (
    <View>
      <Text>Demo Api Call</Text>
    </View>
  );
};

export default MyApicall;
