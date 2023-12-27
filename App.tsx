import React from 'react';
import {
  SafeAreaView,
  SectionList,
  SectionListComponent,
  Text,
} from 'react-native';

import ComponentFlatList from './src/screens/ComponentFlatList';
import UseEffectHook from './src/screens/UseEffectHook';
import SectionMyList from './src/screens/SectionMyList';
import ShowHideComponent from './src/screens/ShowHideComponent';
import UseeffectForUnmountLifeCycle from './src/screens/UseeffectForUnmountLifeCycle';
import SetIntervalComponent from './src/screens/SetIntervalComponent';
import ResponsiveUiWIthFlex from './src/screens/ResponsiveUiWIthFlex';
import MyTouchableHighlight from './src/screens/MyTouchableHighlight';
import MyTouchableOpacity from './src/screens/MyTouchableOpacity';
import Grid from './src/screens/Grid';
import Form from './src/screens/Form';
import MyList from './src/screens/MyList';
import MyStackNavigation from './src/screens/MyStackNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStackNavigation />
    </SafeAreaView>
  );
};

export default App;
