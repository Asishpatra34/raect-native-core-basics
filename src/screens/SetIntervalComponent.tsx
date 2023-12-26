import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SetIntervalComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Button
        title="Toggle Component"
        color="green"
        onPress={() => setShow(!show)}
      />

      {show === true ? <User /> : null}
    </View>
  );
};

const User = () => {
  // The setInterval() method executes a function repeatedly at a specified interval in the background.
  let timer = setInterval(() => {
    console.warn('Timer Called!');
  }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(timer); // Stop the setInterval() after unmount the Lifecycle method.
    };
  });

  return (
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center', color: 'green'}}>
        Show Hide Component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SetIntervalComponent;
