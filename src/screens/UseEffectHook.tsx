import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Grid from './Grid';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(20);

  // useEffect(() => {
  //   console.warn('Hello');
  // }; //Call all time: componentDidMount and componentDidUpdate

  // useEffect(() => {
  //   console.warn('Hello');
  // }, []); //Call only when component mounting

  // useEffect(() => {
  //   console.warn('Count: ', count + ' Data: ', data);
  // }, [count, data]); // Call only when the "count" and "data" state will change

  // useEffect(() => {
  //   console.warn('Count: ', count + ' Data: ', data);
  // }, [count]); // Call only when the "count" state will change

  return (
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
        UseEffect as componentDidUpdate {count}
      </Text>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
        Title count: {count}
      </Text>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
        Data count: {data}
      </Text>

      <Button title="Title Counter" onPress={() => setCount(count + 1)} />
      <Button title="Data Counter" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};

const User = (props: any) => {
  useEffect(() => {
    console.warn('Data props is updates');
  }, [props.info.data]); // // Call only when the "data" props will change
  return (
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center', color: 'green'}}>
        Data : {props.info.data}
      </Text>

      <Text style={{fontSize: 20, alignSelf: 'center', color: 'green'}}>
        Count : {props.info.count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UseEffectHook;
