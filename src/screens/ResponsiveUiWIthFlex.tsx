import {StyleSheet, Text, View} from 'react-native';

const ResponsiveUiWIthFlex = () => {
  return (
    <View style={styles.main}>
      <Text style={{alignSelf: 'center', fontSize: 30}}>
        Responsive UI with Flex
      </Text>

      <View style={styles.box1}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};
// style
const styles = StyleSheet.create({
  main: {flex: 1},
  box1: {backgroundColor: 'green', flex: 3, flexDirection: 'row'},
  box2: {backgroundColor: 'blue', flex: 2},
  box3: {backgroundColor: 'red', flex: 1},
  innerBox1: {flex: 1, backgroundColor: '#ECF87F', margin: 10},
  innerBox2: {flex: 1, backgroundColor: '#FCB5AC', margin: 10},
  innerBox3: {flex: 1, backgroundColor: '#75E6DA', margin: 10},
});

export default ResponsiveUiWIthFlex;
