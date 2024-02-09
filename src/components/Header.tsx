import {useEffect, useState} from 'react';
import {BackHandler, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = (props:any) => {
  const cartData = useSelector((state: any) => state.cartReducer);
  
  const handleNextPage = () =>{
    props.navigation.navigate('CartScreen');
  }

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
        <TouchableOpacity onPress={handleNextPage}>
      <View
        style={{
          backgroundColor: 'green',
          borderRadius: 10,
          marginHorizontal: 10,
          marginTop:8,
          opacity:0.8
  
        }}>
        <Text style={{fontSize: 30, color:'white', marginEnd: 20,paddingLeft:20}}>
          {cartItems}
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
