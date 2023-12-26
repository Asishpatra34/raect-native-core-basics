import {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Modal</Text>

      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World Asish!</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.button}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default MyModal;
