import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const MyTouchableOpacity = () => {
  const [selectedRadio, setselectedRadio] = useState(0);
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'Node',
    },
    {
      id: 3,
      name: 'React',
    },
  ];
  return (
    <View style={styles.main}>
      {/* <TouchableOpacity onPress={() => setselectedRadio(0)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 0 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setselectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity> */}
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setselectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 30,
    color: 'lightblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'lightblue',
    height: 28,
    width: 28,
    margin: 4,
    borderRadius: 20,
  },
});

export default MyTouchableOpacity;
