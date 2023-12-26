import {useState} from 'react';
import {Button, Modal, Pressable, StyleSheet, Text, View} from 'react-native';

const Mypressable = () => {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={() => console.warn('Normal OnPress')}
        // onLongPress={() => console.warn('Long onpress')}
        onPressIn={() => console.warn('On PressIn')}
        onPressOut={() => console.warn('On PressOut')}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    color: 'white',
    fontSize: 24,
    margin: 50,
    padding: 8,
    borderRadius: 20,
    shadowColor: 'green',
    elevation: 10,
  },
});

export default Mypressable;
