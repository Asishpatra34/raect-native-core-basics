import React, {useEffect} from 'react';
import {
  SafeAreaView,
  SectionList,
  SectionListComponent,
  Text,
} from 'react-native';

import ComponentFlatList from './src/screens/ComponentFlatList';
import UseEffectHook from './src/screens/UseEffectHook';
import SectionMyList from './src/screens/SectionMyList';
import ShowHideComponent from './src/screens/ShowHideComponent';
import UseeffectForUnmountLifeCycle from './src/screens/UseeffectForUnmountLifeCycle';
import SetIntervalComponent from './src/screens/SetIntervalComponent';
import ResponsiveUiWIthFlex from './src/screens/ResponsiveUiWIthFlex';
import MyTouchableHighlight from './src/screens/MyTouchableHighlight';
import MyTouchableOpacity from './src/screens/MyTouchableOpacity';
import Grid from './src/screens/Grid';
import Form from './src/screens/Form';
import MyList from './src/screens/MyList';
import ReduxText from './src/screens/ReduxTest';
import MyStackNav from './src/navigations/MyStackNav';
import {Provider, useDispatch} from 'react-redux';
import store from './src/components/redux/store';
import {addProducts} from './src/components/redux/slices/ProductSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import {PersistGate} from 'redux-persist/integration/react';
// let persistor = persistStore(store);

const App = () => {
  const products = [
    {
      id: 0,
      name: 'Samsung mobile',
      color: 'black',
      price: 30000,
      qty: 0,
      image:
        'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s22/buy/S22_KV_4_MO.jpg',
    },
    {
      id: 1,
      name: 'Apple mobile',
      color: 'red',
      price: 20000,
      qty: 0,
      image:
        'https://media.croma.com/image/upload/v1662424508/Croma%20Assets/Communication/Mobiles/Images/229926_xrit8z.png',
    },
    {
      id: 2,
      name: 'Mi mobile',
      color: 'blue',
      price: 50000,
      qty: 0,
      image:
        'https://i02.appmifile.com/11_operator_in/23/04/2021/a3fa26aeb0a0e8ae38f38fb311d644e8.png',
    },
    {
      id: 3,
      name: 'Oneplus mobile',
      color: 'purple',
      price: 40000,
      qty: 0,
      image:
        'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_9.png',
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    products.map(item => {
      console.log('item', item);
      dispatch(addProducts(item));
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
          <MyStackNav />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
