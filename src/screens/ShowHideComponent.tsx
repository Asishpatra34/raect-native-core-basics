import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ShowHideComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Button title="hide Component" onPress={() => setShow(false)} />
      <Button
        title="Show Component"
        color={'green'}
        onPress={() => setShow(true)}
      />
      <Button
        title="Toggle Component"
        color="grey"
        onPress={() => setShow(!show)}
      />

      {show === true ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 20, alignSelf: 'center', color: 'green'}}>
        Show Hide Component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowHideComponent;
