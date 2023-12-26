import {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <View>
      <Text style={styles.font}>A basic form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <View style={{margin: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>

      <View style={{margin: 10}}>
        <Button color={'red'} title="Clear Details" onPress={resetFormData} />
      </View>

      <View>
        {display ? (
          <View>
            <Text style={styles.font}>Name is: {name}</Text>
            <Text style={styles.font}>Email is: {email}</Text>
            <Text style={styles.font}>Password is: {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textInput: {
    fontSize: 20,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'green',
    margin: 10,
    borderRadius: 10,
  },
});

export default Form;
