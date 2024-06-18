import {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Animated} from 'react-native';

const Animationss = () => {
  // initial animated value // Kotha theke
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [btnClicked, setBtnClicked] = useState(false)

  const moveBall = () => {
    Animated.spring(animatedValue, {
      toValue: btnClicked? 0 : 1, // from 0 to from 1 // Mane kothay jabe
      useNativeDriver: true, // for smooth exprience
      // bounciness:10,
      // tension:200
      // stiffness:20
    }).start();


    // Animated.timing(animatedValue, {
    //   toValue: btnClicked? 0 : 1, // from 0 to from 1 // Mane kothay jabe
    //   useNativeDriver: true, // for smooth exprience
    //   duration:500
    // }).start();


    // const initialVelocity = { x: 0, y: 100 }; // Replace with actual velocity if available
    // Animated.decay(animatedValue, {
    //   velocity: initialVelocity,
    //   deceleration: 1, // Adjust for desired slowdown rate (closer to 1 for slower decay)
    //   useNativeDriver: true,
    // }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{
        transform:[{
          translateY: animatedValue.interpolate({
            inputRange: [0, 1], // Input range
            outputRange: [0, -200], //  0 to 1 jawar pothe ami ki korte chai
          }),
        },
        {
          translateX: animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [0, 60]
          })
        },
        {
          rotate: animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '200deg']
          })
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [1, 2]
          })
        }
      ]
      }}>
        <View style={[styles.main,{borderRadius:btnClicked?25:0}]}></View>
      </Animated.View>

      <TouchableOpacity
        style={{position: 'absolute', top: 10}}
        onPress={() =>{
          moveBall();
          setBtnClicked(!btnClicked)
        }}>
        <Text>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    // borderRadius: 50,
    backgroundColor: 'red',
  },
});

export default Animationss;
