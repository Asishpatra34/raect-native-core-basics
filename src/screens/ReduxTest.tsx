import {Button, FlatList, Image, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';

const ReduxText = (props:any) => {
  const products = [
    {
      id: 1,
      name: 'Samsung mobile',
      color: 'black',
      price: 30000,
      image:
        'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s22/buy/S22_KV_4_MO.jpg',
    },
    {
      id: 2,
      name: 'Apple mobile',
      color: 'red',
      price: 20000,
      image:
        'https://media.croma.com/image/upload/v1662424508/Croma%20Assets/Communication/Mobiles/Images/229926_xrit8z.png',
    },
    {
      id: 3,
      name: 'Mi mobile',
      color: 'blue',
      price: 50000,
      image:
        'https://i02.appmifile.com/11_operator_in/23/04/2021/a3fa26aeb0a0e8ae38f38fb311d644e8.png',
    },
    {
      id: 4,
      name: 'Oneplus mobile',
      color: 'purple',
      price: 40000,
      image:
        'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_9.png',
    },
  ];

  const handleNextPage = () =>{
    props.navigation.navigate('Page2');
  }

  return (
    <View style={{flex: 1}}>
      <Button title='User List' onPress={handleNextPage} />
      <Header />
      <ScrollView>
        <FlatList
          data={products}
          renderItem={({item}) => <Product props={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default ReduxText;
