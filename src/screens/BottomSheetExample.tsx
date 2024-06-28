import BottomSheet from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Animated, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


const BottomSheetExample = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

 

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.header}>Event Page</Text>
      <Button title="Show Event Details" onPress={() => sheetRef.current?.expand()} />
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
      >
        <Text>Asish</Text>

      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default BottomSheetExample;
