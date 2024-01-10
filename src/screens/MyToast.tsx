import {Button, View} from 'react-native';
import Toast from 'react-native-toast-message';

const MyToast = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Toast Message',
      text2: 'Secondary Text',
    });
  };
  return (
    <View style={{flex: 1}}>
      <Button title="Show toast" onPress={showToast} />
      <Toast />
    </View>
  );
};

export default MyToast;
