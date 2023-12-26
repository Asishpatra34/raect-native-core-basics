import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const UseeffectForUnmountLifeCycle = () => {
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
  useEffect(() => {
    return () => console.warn('UseEffect call during unmount'); // Call during Unmount Lyfecycle useing "return()=>"
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

export default UseeffectForUnmountLifeCycle;
