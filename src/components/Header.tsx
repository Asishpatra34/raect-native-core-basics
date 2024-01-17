import {useEffect, useState} from 'react';
import {BackHandler, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector((state: any) => state.reducer);
  // console.warn(cartData);

  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        shadowColor: 'black'
      }}>
      <View
        style={{
          backgroundColor: '#fcc203',
          borderRadius: 10,
          marginHorizontal: 10,
          marginTop:8,
         
        }}>
        <Text style={{fontSize: 30, marginEnd: 20,paddingLeft:20}}>
          {cartItems}
        </Text>
      </View>
    </View>
  );
};

export default Header;
