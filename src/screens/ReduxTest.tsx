import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';
import {useDispatch, useSelector} from 'react-redux';
import { fetchProduct } from '../components/redux/slices/AsyncThunkSlice';

const ReduxText = (props: any) => {
  const products = useSelector((state: any) => state.ProductsReducer);
  const cartItems = useSelector((state: any) => state.cartReducer);
  const demoProducts = useSelector((state: any) => state.asyncThunkReducer);

  console.log('demoProducts', demoProducts);

  const dispatch = useDispatch();

  const handleCallpApi = () => {
    dispatch(fetchProduct())
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const handleNextPage = () => {
    props.navigation.navigate('CartScreen');
  };

  return (
    <View style={{flex: 1}}>
      {/* <Button title='User List' onPress={handleNextPage} /> */}
      <Button title="Call Api" onPress={() => handleCallpApi()} />
      <Header navigation={props.navigation} />
      <FlatList
        data={products}
        renderItem={({item}) => <Product props={item} />}
        keyExtractor={item => item.id.toString()}
      />
      {cartItems.length <= 0 ? null : (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            paddingLeft: 40,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              height: '100%',
              left: 0,
              flex: 6,
            }}>
            <Text>{'Added items ' + '(' + cartItems.length + ')'}</Text>
            <Text>{'Total ' + getTotal()}</Text>
          </View>

          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              height: '100%',
              left: 0,
              flex: 4,
              marginRight: 20,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNextPage()}>
              <Text style={styles.text}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ReduxText;
