import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from './redux/slices/CartSlice';

const Product = (props: any) => {
  const item = props.props;
  const dispatch = useDispatch();

  // get reducer from state
  const cartItems = useSelector((state: any) => state.cartReducer);

  const [isAdded, setIsAdded] = useState(false);

  //Handle Add To Cart
  const handleAddToCart = (item: any) => {
    // Call Action
    dispatch(addToCart(item));
  };

  //Handle Remove From Cart
  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.id));
  };


  // useEffect(() => {
  //   let result = cartItems.cart.filter((element: any) => {
  //     return element.id === item.id;
  //   });
  //   if (result.length) {
  //     setIsAdded(true);
  //   } else {
  //     setIsAdded(false);
  //   }
  // }, [cartItems]);

  return (
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.text}>Add To Cart</Text>
        </TouchableOpacity>

        {cartItems.qty == 0 ? null : (
          <TouchableOpacity style={[styles.button, {width: 40}]}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
        )}

        {cartItems.qty == 0 ? null : (
          <Text
            style={{color: 'black', fontSize: 20, marginTop: 6, padding: 4}}>
            {0}
          </Text>
        )}

        {cartItems.qty == 0 ? null : (
          <TouchableOpacity style={[styles.button, {width: 40}]}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        )}
      </View>
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

export default Product;
