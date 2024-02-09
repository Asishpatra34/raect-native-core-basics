import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart } from '../components/redux/slices/CartSlice';

const CartScreen = () => {
  const cartItems = useSelector((state: any) => state.cartReducer);
  
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.id));
  };

  const renderItem = ({item}:any) => (
    <View
    style={{
      borderColor: 'grey',
      borderWidth: 2,
      margin: 10,
      padding: 10,
    }}>
    <Text style={{fontSize: 30}}>{item.name}</Text>
    <Text style={{fontSize: 20, color: 'green'}}>{item.price}</Text>
    <Text style={{fontSize: 20, color: item.color}}>{item.color}</Text>
    <Image style={{height: 200, width: 200}} source={{uri: item.image}} />

    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      {item.qty == 0 ? null : (
        <TouchableOpacity style={[styles.button, {width: 40}]}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      )}

      {item.qty == 0 ? null : (
        <Text
          style={{color: 'black', fontSize: 20, marginTop: 6, padding: 4}}>
          {item.qty}
        </Text>
      )}

      {item.qty == 0 ? null : (
        <TouchableOpacity style={[styles.button, {width: 40}]}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Assuming each item has a unique ID
      />
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
    width: 100,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default CartScreen;
