import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const MyTouchableHighlight = () => {
  return (
    <View style={styles.main}>
      <Text style={{alignSelf: 'center', fontSize: 30}}>
        TouchableHighlight
      </Text>

      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.successBtn]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primaryBtn]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warningBtn]}>Success</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    margin: 30,
    padding: 20,
    borderRadius: 100,
    shadowColor: 'red',
    elevation: 20,
  },
  successBtn: {
    backgroundColor: 'green',
    shadowColor: 'green',
  },
  primaryBtn: {
    backgroundColor: 'blue',
    shadowColor: 'green',
  },
  warningBtn: {
    backgroundColor: 'gold',
    shadowColor: 'green',
  },
});

export default MyTouchableHighlight;
