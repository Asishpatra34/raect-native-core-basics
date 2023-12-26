import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';

const MyActivityIndicator = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);

    // Hide the loader after 3 sec
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', fontSize: 30}}>
        Activity Indicator
      </Text>
      <View style={styles.loader}>
        <ActivityIndicator size={100} color={'green'} animating={show} />
        {/* Different approach */}
        {/* {show ? <ActivityIndicator size={100} color={'green'} /> : null} */}
        <Button title="show loader" onPress={displayLoader} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyActivityIndicator;
