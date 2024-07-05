
import React, {useRef} from 'react';
import {Animated, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { setScrollY } from '../store/slices/EventsVisibilitySlice';


const DATA = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];

const Header_Max_Height = 240;
const Header_Min_Height = 0;
const Header_Scroll_Distance = Header_Max_Height - Header_Min_Height;



const DynamicHeaderrr = () => {
  const dispatch = useDispatch();



  const scrollY = useSelector((state: any) => state.eventsVisibilityReducer.scrollY);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, Header_Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, Header_Scroll_Distance / 2, Header_Scroll_Distance],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  
  const scrollYYY = useRef(new Animated.Value(0)).current;
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollYYY } } }],
    {
      useNativeDriver: false,
      listener: event => {
        dispatch(setScrollY(event.nativeEvent.contentOffset.y));
      },
    }
  );



  return (
    <View style={styles.container}>
    <View style={styles.header1}>
      <Text style={styles.headerText}>Header 1</Text>
    </View>

    <Animated.View style={[styles.header2, { height: headerHeight, opacity: headerOpacity }]}>
      <Text style={styles.headerText}>Header 2</Text>
    </Animated.View>

    <FlatList
      contentContainerStyle={{ paddingTop: Header_Max_Height }}
      data={Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      // onMomentumScrollEnd={handleMomentumScrollEnd}
      // onScroll={Animated.event(
      //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      //   { useNativeDriver: false }
      // )}
      onScroll={handleScroll}
    />
  </View>
  );
};

export default DynamicHeaderrr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header1: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    position: 'absolute',
    top: 60, // Adjust this value based on the height of Header 1
    left: 0,
    right: 0,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});




























// const DynamicHeader = ({value}: any) => {
//   const animatedHeaderHeight = value.interpolate({
//     inputRange: [0, Scroll_Distance],
//     outputRange: [Header_Max_Height, Header_Min_Height],
//     extrapolate: 'clamp',
//   });

//   const animatedHeaderColor = value.interpolate({
//     inputRange: [0, Scroll_Distance],
//     outputRange: ['#181D31', '#678983'],
//     extrapolate: 'clamp',
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.header,
//         {
//           height: animatedHeaderHeight,
//           backgroundColor: animatedHeaderColor,
//         },
//       ]}>
//       <Text style={styles.title}>Header Content</Text>
//     </Animated.View>
//   );
// };

// const DynamicHeaderrr = () => {
//   const scrollOffsetY = useRef(new Animated.Value(0)).current;
//   return (
//     <View>
//       <DynamicHeader value={scrollOffsetY} />
//       <ScrollView
//         scrollEventThrottle={5}
//         showsVerticalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
//           {
//             useNativeDriver: false,
//           },
//         )}>
//         {DATA.map(val => {
//           return (
//             <View style={styles.card}>
//               <Text style={styles.subtitle}>({val.id})</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// export default DynamicHeaderrr;

// const styles = StyleSheet.create({
//   header: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     left: 0,
//     right: 0,
//     paddingTop: 25,
//   },
//   title: {
//     color: '#ffff',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   card: {
//     height: 100,
//     backgroundColor: '#E6DDC4',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   subtitle: {
//     color: '#181D31',
//     fontWeight: 'bold',
//   },
// });
