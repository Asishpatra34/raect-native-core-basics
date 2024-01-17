import {ScrollView, View} from 'react-native';
import {getUserList} from '../components/redux/action';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxTestUserList = () => {
  const usersData = useSelector((state: any) => state.reducer);
  console.warn("In component",usersData);
  
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getUserList());
  }, []);

  return <View></View>;
};

export default ReduxTestUserList;
