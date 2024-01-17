import {Button, Image, Text, View} from 'react-native';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const Product = (props: any) => {
  const item = props.props;
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    let result = cartItems.filter((element: any) => {
      return element.id === item.id;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

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
      {isAdded ? (
        <Button
          title="Remove from cart"
          color={item.color}
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button
          title="Add to cart"
          color={'#d6a502'}
          onPress={() => handleAddToCart(item)}
        />
      )}
    </View>
  );
};

export default Product;
